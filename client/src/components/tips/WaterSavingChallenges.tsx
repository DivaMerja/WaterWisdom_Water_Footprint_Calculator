import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";

interface ChallengeDay {
  day: number;
  title: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  waterSaved: number; // in gallons
  completed: boolean;
}

export default function WaterSavingChallenge() {
  const [showDialog, setShowDialog] = useState(false);
  const [selectedDay, setSelectedDay] = useState<ChallengeDay | null>(null);
  const [challengeStarted, setChallengeStarted] = useState(false);
  const [challenges, setChallenges] = useState<ChallengeDay[]>([
    {
      day: 1,
      title: "Shorter Showers",
      description: "Reduce your shower time by 2 minutes today. Use a timer to keep track.",
      difficulty: "easy",
      waterSaved: 10,
      completed: false
    }
