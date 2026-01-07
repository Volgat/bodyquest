'use server';

/**
 * @fileOverview Generates a reward, including a potentially contextual badge, upon quest completion.
 *
 * - rewardCompletionWithContextualBadge - A function that generates a reward with a contextual badge.
 * - RewardCompletionWithContextualBadgeInput - The input type for the rewardCompletionWithContextualBadge function.
 * - RewardCompletionWithContextualBadgeOutput - The return type for the rewardCompletionWithContextualBadge function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RewardCompletionWithContextualBadgeInputSchema = z.object({
  questName: z.string().describe('The name of the completed quest.'),
  questDescription: z.string().describe('A description of the completed quest.'),
  muscleGroupTargeted: z.string().describe('The primary muscle group targeted by the quest.'),
  levelOfExertionRequired: z.string().describe('The level of exertion required to complete the quest (e.g., low, medium, high).'),
  rewardPoints: z.number().describe('The number of reward points to award for completing the quest.'),
});
export type RewardCompletionWithContextualBadgeInput = z.infer<typeof RewardCompletionWithContextualBadgeInputSchema>;

const RewardCompletionWithContextualBadgeOutputSchema = z.object({
  rewardDescription: z.string().describe('A description of the reward received.'),
  badgeDescription: z.string().describe('A description of the badge earned, incorporating an element from the quest.'),
});
export type RewardCompletionWithContextualBadgeOutput = z.infer<typeof RewardCompletionWithContextualBadgeOutputSchema>;

export async function rewardCompletionWithContextualBadge(
  input: RewardCompletionWithContextualBadgeInput
): Promise<RewardCompletionWithContextualBadgeOutput> {
  return rewardCompletionWithContextualBadgeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'rewardCompletionWithContextualBadgePrompt',
  input: {schema: RewardCompletionWithContextualBadgeInputSchema},
  output: {schema: RewardCompletionWithContextualBadgeOutputSchema},
  prompt: `You are a reward system expert designing rewards and badges for a fitness app.

A user has completed a quest and is receiving a reward. Generate a reward description and a badge description.

The badge description should creatively incorporate an element from the quest details below, such as the muscle group targeted or the level of exertion required. The badge should reflect the user's accomplishment in completing the quest.

Quest Name: {{{questName}}}
Quest Description: {{{questDescription}}}
Muscle Group Targeted: {{{muscleGroupTargeted}}}
Level of Exertion Required: {{{levelOfExertionRequired}}}
Reward Points: {{{rewardPoints}}}

Ensure the reward and badge descriptions are motivating and encourage the user to continue using the app.
`,
});

const rewardCompletionWithContextualBadgeFlow = ai.defineFlow(
  {
    name: 'rewardCompletionWithContextualBadgeFlow',
    inputSchema: RewardCompletionWithContextualBadgeInputSchema,
    outputSchema: RewardCompletionWithContextualBadgeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

