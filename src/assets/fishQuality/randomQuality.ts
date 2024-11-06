import { playerData } from "../data/player-stats/playerdata.js";
export function getCatchQuality(): string {
  let lvlFiveHund:number = 0;
  if (playerData[0]?.FishingRod?.Attachment?.[0]?.rod_butt >= 500) {
    lvlFiveHund = playerData[0]?.FishingRod?.Attachment?.[0]?.rod_butt
    console.log(lvlFiveHund);
    
  }
  let qualities = [
    { name: "dead", probability: 1 },   // 100%
    { name: "alive", probability:  0.20 + playerData[0]?.FishingRod?.Attachment?.[0]?.rod_butt / 150}, // 20%
    { name: "average", probability:  0.0010 + playerData[0]?.FishingRod?.Attachment?.[0]?.rod_butt / 300 }, // 20%
    { name: "good", probability:  0.0005 + playerData[0]?.FishingRod?.Attachment?.[0]?.rod_butt / (600 + lvlFiveHund)}, // 0.05
    { name: "excellent", probability:  0.010 + playerData[0]?.FishingRod?.Attachment?.[0]?.rod_butt / 1100 }  // 0.005
  ];

  console.log(qualities);


  if (qualities[1].probability >= 1) {
    // Exclude 'dead' from the selection when 'alive' is dominant.
    qualities[0].probability = 0
    console.log(qualities);
  }
  if (qualities[2].probability >= 1) {
    // Exclude 'dead' from the selection when 'alive' is dominant.
    qualities[1].probability = 0
    console.log(qualities);
  }
  if (playerData[0]?.FishingRod?.Attachment?.[0]?.rod_butt >= 500) {
    qualities[2].probability = 0
  }
  if (playerData[0]?.FishingRod?.Attachment?.[0]?.rod_butt === 1000) {
    return "excellent"
  }
  console.log(qualities[0].probability);

  
  const totalWeight = qualities.reduce((acc, quality) => acc + quality.probability, 0);
  const randomNumber = Math.random() * totalWeight;

  let cumulativeWeight = 0;
  for (const quality of qualities) {
    cumulativeWeight += quality.probability;
    if (randomNumber < cumulativeWeight) {
      return quality.name; // Return the quality if it matches the random number
    }
  }
  return "dead"; // Fallback if no other quality is selected
}