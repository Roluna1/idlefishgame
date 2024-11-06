import { fish, FishData } from "../data/fish.js";
import { playerData } from "../data/player-stats/playerdata.js";
import { lvlBarRender } from "../display/levelbar.js";
import { playerMoneyRender } from "../display/playerMoney.js";
import { showFishInventory } from "../playerInventory/inventory.js";
import { getCatchQuality } from "../fishQuality/randomQuality.js";
export interface Fish {
  id: string;
  name: string;
  price: number;
  size: number;
  xp: number;
  catchQuality: string;
  //fishElement?: string;
}
const fishingRod = document.querySelector<HTMLButtonElement>('.fishing-rod-button');
let playerMaxInventory = playerData[0].playerStats[0].maxStorage
let fishInterval: number | undefined;

if (fishingRod) {
  fishingRod.addEventListener('click', () => {
    if (playerData[0].playerInventory.length >= playerMaxInventory) {
      return;
    } else {
        fishAuto()
        fishingRod.disabled = true;
      }
    })
}
function fishAuto() {
  fishInterval = setInterval(gettingFish, 0) 
}

function gettingFish(): void {
  const quality = getCatchQuality()
  //console.log(quality);
  //console.log(0.000000000000000001 * 1_000);
  const randomValue = Math.random();
  let fishGot: FishData;
  const playerInventoryStore = playerData[0].playerInventory;
  if (randomValue < 0.01) {
    const rareFish = fish[0].rare_fish;
    const randomIndex = Math.floor(Math.random() * rareFish.length);
    fishGot = rareFish[randomIndex];
  } else {
    const uncommonFish = fish[0].uncommon_fish;
    const randomIndex = Math.floor(Math.random() * uncommonFish.length);
    fishGot = uncommonFish[randomIndex];
  }
  if (fishGot) {
    const { min: sizeMin, max: sizeMax } = fishGot.size;
    const randomSize = Math.floor(Math.random() * (sizeMax - sizeMin + 1)) + sizeMin;
    const { min: xpMin, max: xpMax } = fishGot.xp;
    let randomXp: number;

    randomXp = Math.floor(Math.random() * (xpMax - xpMin + 1)) + xpMin;
    const fishCaught: Fish | null = {
      id: fishGot.id,
      name: fishGot.name,
      price: fishGot.price,
      catchQuality: quality,
      size: randomSize,
      xp: randomXp,
    };
    
    if (fishCaught) {
      
      playerInventoryStore.push(fishCaught);
      playerData[0].playerStats[0].playerXP += randomXp;
      playerData[0].playerStats[0].playerTotalXP += randomXp;
      playerData[0].playerStats[0].playerMoney += fishCaught.price;
      playerMoneyRender(playerData[0].playerStats[0].playerMoney)
      lvlBarRender(playerData[0].playerStats[0].playerXP);
      //console.log(`Caught fish: ${fishGot.name}`);
      console.log(playerInventoryStore);
      //console.log(playerData[0].playerStats[0].playerMoney);
      showFishInventory();
    } else {
      console.log("no caught.");
    }

  }
  if (playerData[0].playerInventory.length >= playerMaxInventory) {
    if (fishingRod) {
      fishingRod.disabled = false
      clearInterval(fishInterval)
      console.log(playerData[0].playerStats[0]);
    }
    console.log("bag is full");
  }
}
