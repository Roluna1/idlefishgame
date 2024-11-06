export interface FishData {
  id: string;
  name: string;
  price: number;
  size: Size;
  xp: Size;
}
interface Size {
  min: number; 
  max: number
}
interface FishCollection {
  uncommon_fish: FishData[];
  rare_fish: FishData[];
}

export let fish: FishCollection[] = [{
  uncommon_fish: [
      { id: "1", name: "sardines", price: 10, size: { min: 5, max: 15 }, xp: {min: 0.34, max: 0.71}},
      { id: "2", name: "carp", price: 12, size: { min: 20, max: 30 }, xp: {min: 0.43, max: 0.75}},
      { id: "3", name: "trout", price: 15, size: { min: 15, max: 25 }, xp: {min: 0.36, max: 0.72}},
      { id: "4", name: "anchovy", price: 15, size: { min: 7, max: 12 }, xp: {min: 0.76, max: 0.9}}
  ],
  rare_fish: [
      { id: "5", name: "Lionfish", price: 50, size: { min: 20, max: 40 }, xp: {min: 1, max: 4} },
      { id: "6", name: "Arowana", price: 70, size: { min: 50, max: 100 }, xp: {min: 5, max: 10} },
      { id: "7", name: "Devils Hole Pupfish", price: 90, size: { min: 5, max: 10 }, xp: {min: 12, max: 15} }
  ]
}];
