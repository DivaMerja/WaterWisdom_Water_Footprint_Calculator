import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

interface MythFact {
  myth: string;
  fact: string;
}

export default function WaterMythFacts() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  
  const toggleCard = (index: number) => {
    if (flippedCards.includes(index)) {
      setFlippedCards(flippedCards.filter(i => i !== index));
    } else {
      setFlippedCards([...flippedCards, index]);
    }
  };

  const mythsAndFacts: MythFact[] = [
    {
      myth: "Bottled water is safer than tap water",
      fact: "In many developed countries, tap water is heavily regulated and tested more frequently than bottled water. Bottled water also creates plastic waste and has a much larger environmental footprint due to production and transportation."
    },
    {
      myth: "Water-saving fixtures don't make a significant difference",
      fact: "Low-flow fixtures can reduce water consumption by 30-50%. A low-flow showerhead can save about 2,900 gallons per year, while a water-efficient toilet can save 13,000 gallons annually for a family of four."
    }
