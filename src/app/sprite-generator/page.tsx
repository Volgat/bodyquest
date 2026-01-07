import { SpriteGeneratorClient } from "@/components/game/SpriteGeneratorClient";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SpriteGeneratorPage() {
  return (
    <div className="container mx-auto py-8">
      <Button variant="ghost" asChild className="mb-4">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Body Map
        </Link>
      </Button>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold font-headline text-primary-dark">Dynamic Sprite Generator</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
          Use the power of AI to generate unique sprites for our game. Describe a character, cell, or object you want to see.
        </p>
      </div>
      <SpriteGeneratorClient />
    </div>
  );
}
