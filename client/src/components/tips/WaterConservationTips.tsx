import { Button } from "@/components/ui/button";
import { tips } from "@/data/tips";
import WaterMythFacts from "./WaterMythFacts";
import WaterSavingChallenge from "./WaterSavingChallenge";
import { useState } from "react";

export default function WaterConservationTips() {
  const [showChallenge, setShowChallenge] = useState(false);
  
  return (
    <section id="tips" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 mb-2 rounded-full bg-blue-100">
            <p className="text-sm font-medium text-primary">Save Water, Save Life</p>
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Water Conservation Tips</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Simple actions that make a big difference in conserving our most precious resource.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {tips.map((tip, index) => (
            <div key={index} className="flex group">
              <div className="flex-shrink-0 mr-4">
