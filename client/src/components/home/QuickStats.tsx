import { useEffect, useState } from "react";

interface StatItem {
  label: string;
  value: string;
  startValue: number;
  endValue: number;
  unit: string;
  duration: number;
}

export default function QuickStats() {
  const stats: StatItem[] = [
    {
      label: "Global Population without Clean Water",
      value: "0",
      startValue: 0,
      endValue: 2.2,
      unit: "billion",
      duration: 2000,
    },
    {
      label: "Water Used in Agriculture",
      value: "0",
      startValue: 0,
      endValue: 70,
      unit: "%",
      duration: 2000,
    },
    {
      label: "Average Daily Water Use per Person",
      value: "0",
      startValue: 0,
      endValue: 80,
      unit: "gallons",
      duration: 2000,
    },
  ];

  const [statValues, setStatValues] = useState<string[]>(stats.map(() => "0"));

  useEffect(() => {
    stats.forEach((stat, index) => {
      const { startValue, endValue, duration, unit } = stat;
      const increment = (endValue - startValue) / (duration / 50);
      let currentValue = startValue;
      let timer: NodeJS.Timeout;

      const updateValue = () => {
        if (currentValue < endValue) {
          currentValue += increment;
          if (currentValue > endValue) currentValue = endValue;
          
          setStatValues(prev => {
            const newValues = [...prev];
            newValues[index] = unit === "%" 
              ? Math.round(currentValue).toString() 
              : currentValue.toFixed(1);
            return newValues;
          });
          
          timer = setTimeout(updateValue, 50);
        }
      };

      updateValue();
      return () => clearTimeout(timer);
    });
  }, []);

  return (
    <div className="w-full py-6 bg-white/10 backdrop-blur-md rounded-lg mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center px-4 py-2 border-r last:border-r-0 border-white/20">
            <div className="text-3xl font-bold mb-1">
              {statValues[index]} <span className="text-xl">{stat.unit}</span>
            </div>
            <div className="text-sm text-white/80">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
