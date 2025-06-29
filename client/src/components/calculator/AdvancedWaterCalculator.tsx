import React, { useState } from 'react';

export default function WaterCalculator() {
  const [showerDuration, setShowerDuration] = useState(8);
  const [showerFlow, setShowerFlow] = useState(2.5);
  const [toiletFlushes, setToiletFlushes] = useState(1.7);
  const [toiletFlow, setToiletFlow] = useState(1.6);
  const [kitchenFlow, setKitchenFlow] = useState(1.5);
  const [dishMethod, setDishMethod] = useState(4.3);
  const [laundryMethod, setLaundryMethod] = useState(20);
  const [greywaterSystem, setGreywaterSystem] = useState(false);
  const [rainBarrel, setRainBarrel] = useState(false);
  const [carWashMethod, setCarWashMethod] = useState(58);
  const [city, setCity] = useState('Mumbai');
  const [utilityPercent, setUtilityPercent] = useState(100);
  const [shoppingHabit, setShoppingHabit] = useState(583);
  const [recyclingHabit, setRecyclingHabit] = useState(2);

  const calculateWaterUsage = () => {
    let total = 0;

    // Direct Indoor
    total += showerDuration * showerFlow;
    total += toiletFlushes * toiletFlow;
    total += kitchenFlow * 13; // 13 min kitchen faucet avg
    total += dishMethod * 1; // Assuming 1 load per day
    total += laundryMethod * 1; // Assuming 1 load per day
    if (greywaterSystem) total -= 63 / 2.53;

    // Direct Outdoor
    if (rainBarrel) total -= 4 / 2.53;
    total += carWashMethod * 0.033; // assuming monthly wash frequency

    // Indirect Energy
    const cityValues = { Mumbai: 85, Delhi: 90, Bangalore: 70, Chennai: 75, Hyderabad: 80 };
