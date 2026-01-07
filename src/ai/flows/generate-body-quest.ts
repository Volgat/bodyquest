'use server';

/**
 * @fileOverview This file defines the Genkit flow for generating a random body quest based on user preferences.
 *
 * The flow takes user preferences as input and returns a generated body quest with details such as activity name,
 * description, duration, target muscle group, and level of exertion.
 *
 * @exports generateBodyQuest - The main function to trigger the body quest generation flow.
 * @exports GenerateBodyQuestInput - The input type for the generateBodyQuest function.
 * @exports GenerateBodyQuestOutput - The output type for the generateBodyQuest function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Define the input schema for the generateBodyQuest function
const GenerateBodyQuestInputSchema = z.object({
  preferences: z
    .object({
      duration: z.string().describe('Preferred duration of the quest (e.g., 15 minutes, 30 minutes, 1 hour).'),
      intensity: z.string().describe('Preferred intensity level of the quest (e.g., low, medium, high).'),
      targetMuscleGroup: z.string().describe('Preferred target muscle group for the quest (e.g., legs, arms, core, full body).'),
    })
    .describe('User preferences for the body quest.'),
});
export type GenerateBodyQuestInput = z.infer<typeof GenerateBodyQuestInputSchema>;

// Define the output schema for the generateBodyQuest function
const GenerateBodyQuestOutputSchema = z.object({
  activityName: z.string().describe('The name of the generated body quest activity.'),
  description: z.string().describe('A detailed description of the body quest activity.'),
  duration: z.string().describe('The duration of the body quest activity (e.g., 15 minutes).'),
  targetMuscleGroup: z.string().describe('The target muscle group for the body quest activity (e.g., legs).'),
  levelOfExertion: z.string().describe('The level of exertion required for the body quest activity (e.g., low, medium, high).'),
});
export type GenerateBodyQuestOutput = z.infer<typeof GenerateBodyQuestOutputSchema>;

// Define the wrapper function
export async function generateBodyQuest(input: GenerateBodyQuestInput): Promise<GenerateBodyQuestOutput> {
  return generateBodyQuestFlow(input);
}

// Define the prompt for generating the body quest
const generateBodyQuestPrompt = ai.definePrompt({
  name: 'generateBodyQuestPrompt',
  input: {schema: GenerateBodyQuestInputSchema},
  output: {schema: GenerateBodyQuestOutputSchema},
  prompt: `You are an AI fitness assistant that generates random body quests based on user preferences.

  Generate a creative and engaging body quest activity based on the following preferences:
  -	Duration: {{{preferences.duration}}}
  -	Intensity: {{{preferences.intensity}}}
  -	Target Muscle Group: {{{preferences.targetMuscleGroup}}}

  The generated body quest should include:
  -	activityName: A creative and descriptive name for the activity.
  -	description: A detailed description of the activity, including steps and instructions.
  -	duration: The duration of the activity.
  -	levelOfExertion: The level of exertion required for the activity (low, medium, or high).
  -	TargetMuscleGroup: The target muscle group for the activity.

  Ensure the generated quest is safe, effective, and aligned with the user's preferences.
  Response in JSON format.
  `,
});

// Define the Genkit flow for generating the body quest
const generateBodyQuestFlow = ai.defineFlow(
  {
    name: 'generateBodyQuestFlow',
    inputSchema: GenerateBodyQuestInputSchema,
    outputSchema: GenerateBodyQuestOutputSchema,
  },
  async input => {
    const {output} = await generateBodyQuestPrompt(input);
    return output!;
  }
);
