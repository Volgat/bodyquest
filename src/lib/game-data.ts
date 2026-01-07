import { BrainIcon } from "@/components/icons/BrainIcon";
import { HeartIcon } from "@/components/icons/HeartIcon";
import { LungsIcon } from "@/components/icons/LungsIcon";
import { StomachIcon } from "@/components/icons/StomachIcon";
import { Droplets, Dna, Shield, Stethoscope, Bone, LifeBuoy } from "lucide-react";

export interface QuizQuestion {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
  explanation?: string;
}

export interface Mission {
  id: number;
  title: string;
  description: string;
  xp: number;
  quiz: QuizQuestion[];
}

export interface System {
  slug: string;
  name: string;
  Icon: React.ElementType;
  levelRequirement: number;
  position: { top: string; left: string };
  animation?: string;
  description: string;
  missions: Mission[];
}

export const systems: System[] = [
  {
    slug: "blood-basics",
    name: "Blood Basics",
    Icon: Droplets,
    levelRequirement: 1,
    position: { top: "35%", left: "45%" },
    animation: "animation-pulse-subtle",
    description: "Understand what red blood cells are and how sickle cell disease affects them.",
    missions: [
      { 
        id: 1, 
        title: "The Sickle-Shaped Cell", 
        description: "Discover why red blood cells take on a sickle (or crescent) shape.", 
        xp: 25,
        quiz: [
          {
            questionText: "What is the normal shape of a red blood cell?",
            options: ["Square", "Disc-shaped", "Sickle-shaped", "Oval"],
            correctAnswerIndex: 1,
          },
          {
            questionText: "The sickle shape of red blood cells is due to an abnormality in which protein?",
            options: ["Albumin", "Collagen", "Hemoglobin", "Keratin"],
            correctAnswerIndex: 2,
          }
        ]
      },
      { 
        id: 2, 
        title: "Oxygen's Journey", 
        description: "Learn how sickled cells affect oxygen transport in the body.", 
        xp: 30,
        quiz: [
          {
            questionText: "What is the main job of red blood cells?",
            options: ["Fighting infection", "Carrying oxygen", "Digesting food", "Storing fat"],
            correctAnswerIndex: 1,
          },
        ]
      },
    ],
  },
  {
    slug: "pain-crisis",
    name: "Pain Crisis (VOC)",
    Icon: Shield,
    levelRequirement: 2,
    position: { top: "55%", left: "65%" },
    animation: "animation-jiggle",
    description: "Learn what causes Vaso-Occlusive Crises (VOCs) and how to manage them.",
    missions: [
        { 
          id: 1, 
          title: "Traffic Jam in the Vessels", 
          description: "Visualize how sickled cells block small blood vessels.", 
          xp: 35,
          quiz: [
            {
              questionText: "What does 'Vaso-Occlusive Crisis' (VOC) mean?",
              options: ["A problem with hearing", "Blockage of blood vessels", "A type of headache", "A lung infection"],
              correctAnswerIndex: 1,
            }
          ]
        },
        { 
          id: 2, 
          title: "Pain Management", 
          description: "Discover best practices for relieving pain during a crisis.", 
          xp: 40,
          quiz: [
            {
              questionText: "Which of these is recommended during a pain crisis?",
              options: ["Drinking plenty of water", "Applying a cold pack", "Strenuous exercise", "Staying in the hot sun"],
              correctAnswerIndex: 0,
            }
          ]
        },
    ],
  },
  {
    slug: "genetics",
    name: "Genetics & Inheritance",
    Icon: Dna,
    levelRequirement: 3,
    position: { top: "15%", left: "55%" },
    animation: "animation-sparkle",
    description: "Understand how sickle cell disease is passed down through genes.",
    missions: [
      { 
        id: 1, 
        title: "The Hemoglobin Gene", 
        description: "Explore the HBB gene and understand the mutation responsible for the disease.", 
        xp: 50,
        quiz: [
          {
            questionText: "Sickle cell disease is a...",
            options: ["Contagious disease", "Genetic condition", "Viral infection", "Bacterial infection"],
            correctAnswerIndex: 1,
          },
           {
            questionText: "To have sickle cell disease, a child must inherit the sickle cell gene from...",
            options: ["Only one parent", "Both parents", "The mother only", "The father only"],
            correctAnswerIndex: 1,
          }
        ]
      },
      { 
        id: 2, 
        title: "Sickle Cell Trait", 
        description: "Learn the difference between having sickle cell disease and sickle cell trait.", 
        xp: 55,
        quiz: [
          {
            questionText: "A person with sickle cell trait (AS) usually...",
            options: ["Has severe symptoms", "Is a 'carrier' and has no symptoms", "Cannot pass the gene to their children", "Has the same issues as someone with the disease"],
            correctAnswerIndex: 1,
          },
        ]
      },
    ],
  },
  {
    slug: "health-prevention",
    name: "Health & Prevention",
    Icon: Stethoscope,
    levelRequirement: 4,
    position: { top: "75%", left: "50%" },
    description: "Adopt good habits to prevent complications and live well with the disease.",
    missions: [
      { 
        id: 1, 
        title: "The Power of Hydration", 
        description: "Understand why drinking plenty of water is crucial.", 
        xp: 60,
        quiz: [
          {
            questionText: "What is one of the main triggers for a pain crisis?",
            options: ["Boredom", "Dehydration", "Reading a book", "Eating vegetables"],
            correctAnswerIndex: 1,
          }
        ]
      },
      { 
        id: 2, 
        title: "Infection Protection", 
        description: "Discover why it's important to protect against infections.", 
        xp: 65,
        quiz: [
          {
            questionText: "People with sickle cell disease are more vulnerable to what?",
            options: ["Sunburn", "Infections", "Loud noises", "Bright lights"],
            correctAnswerIndex: 1,
          }
        ]
      },
      { 
        id: 3, 
        title: "Folic Acid's Role", 
        description: "Learn why taking folic acid is important.", 
        xp: 60,
        quiz: [
          {
            questionText: "Folic acid is a B vitamin that helps the body make...",
            options: ["New red blood cells", "White blood cells", "Stronger bones", "More muscle"],
            correctAnswerIndex: 0,
          }
        ]
      },
    ],
  },
  {
    slug: "complications",
    name: "Complications",
    Icon: LungsIcon,
    levelRequirement: 5,
    position: { top: "40%", left: "25%" },
    description: "Learn about potential long-term complications and how to monitor them.",
    missions: [
      { 
        id: 1, 
        title: "Acute Chest Syndrome", 
        description: "A serious lung-related complication.", 
        xp: 70,
        quiz: [
          {
            questionText: "Acute Chest Syndrome is a medical emergency that affects the...",
            options: ["Lungs", "Stomach", "Brain", "Kidneys"],
            correctAnswerIndex: 0,
          }
        ]
      },
      { 
        id: 2, 
        title: "Stroke Risk", 
        description: "Understand why there is an increased risk of stroke.", 
        xp: 75,
        quiz: [
          {
            questionText: "Blockage of blood vessels in which organ can cause a stroke?",
            options: ["Heart", "Liver", "Spleen", "Brain"],
            correctAnswerIndex: 3,
          }
        ]
      },
    ],
  },
  {
    slug: "treatments",
    name: "Treatments",
    Icon: LifeBuoy,
    levelRequirement: 6,
    position: { top: "60%", left: "30%" },
    description: "Explore the different treatments available to manage sickle cell disease.",
    missions: [
      { 
        id: 1, 
        title: "Hydroxyurea", 
        description: "Learn about this common medication used to reduce the frequency of pain crises.", 
        xp: 80,
        quiz: [
          {
            questionText: "What is a major benefit of taking Hydroxyurea for sickle cell disease?",
            options: ["Curing the disease", "Reducing the frequency of pain crises", "Making bones stronger", "Improving vision"],
            correctAnswerIndex: 1,
          }
        ]
      },
      { 
        id: 2, 
        title: "Blood Transfusions", 
        description: "Understand when and why blood transfusions are used.", 
        xp: 85,
        quiz: [
          {
            questionText: "A blood transfusion provides the patient with...",
            options: ["More sickled cells", "Healthy red blood cells from a donor", "A dose of vitamins", "Extra iron"],
            correctAnswerIndex: 1,
          }
        ]
      },
       { 
        id: 3, 
        title: "Bone Marrow Transplant", 
        description: "Learn about the only potential cure for sickle cell disease.", 
        xp: 100,
        quiz: [
          {
            questionText: "A bone marrow (or stem cell) transplant is currently the only potential ____ for sickle cell disease.",
            options: ["Painkiller", "Short-term treatment", "Cure", "Vaccine"],
            correctAnswerIndex: 2,
          }
        ]
      },
    ],
  },
];
