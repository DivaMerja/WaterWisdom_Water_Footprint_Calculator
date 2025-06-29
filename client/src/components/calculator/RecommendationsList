import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

interface RecommendationListProps {
  showerTime: number;
  dishwasherUse: number;
  laundryUse: number;
  meatConsumption: number;
  lawnWatering: number;
  isHigher: boolean;
}

interface Recommendation {
  title: string;
  description: string;
  savingsAmount: string;
  category: "shower" | "dishwasher" | "laundry" | "diet" | "lawn";
  priority: number;
}

export default function RecommendationList({
  showerTime,
  dishwasherUse,
  laundryUse,
  meatConsumption,
  lawnWatering,
  isHigher
}: RecommendationListProps) {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  useEffect(() => {
    if (!isHigher) {
      // If user's consumption is already below average, show different recommendations
      setRecommendations([
        {
          title: "Great work!",
          description: "Your water usage is below average. Share your conservation tips with friends and family.",
}
