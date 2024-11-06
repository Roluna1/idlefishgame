import { Fish } from "../../auto/gettingFish"
interface PlayerData {
  playerLVL: number
  playerXP: number
  playerTotalXP: number
  maxAttachment: number
  maxStorage: number
  playerMoney: number
  playerPearl: number
  playerTotalMoney: number
  playerTotalPearl: number
  playerOpenChest: number
  playerGotCommonChest: number
  playerGotRareChest: number
  playerGotEpicChest: number
  playerGotLegendaryChest: number
  playerGotMythicChest: number
  playerGotEtherealChest: number
  playerGotCelestialChest: number
  playerGotTranscendentChest: number
  playerCaughtCommonFish: number
  playerCaughtRareFish: number
  playerCaughtEpicFish: number
  playerCaughtLegendaryFish: number
  playerCaughtMythicFish: number
  playerCaughtEtherealFish: number
  playerCaughtCelestialFish: number
  playerCaughtTranscendentFish: number
  playerCaughtInfernoFish: number
  playerCaughtGlacierFish: number
  playerCaughtCycloneFish: number
  playerCaughtLightningFish:number
  playerCaughtNatureFish: number
  playerCaughtTreasure: number
  playerCaughtTrash: number
  playerTotalPlayerTime: number
}
interface Attachment {
  rod_blank: number
  rod_grip: number
  rod_reel_seat: number
  rod_reeling_speed: number
  rod_guides: number
  rod_tip: number
  rod_butt: number
}
interface FishingRod {
  lvl: number
  commonFish_chance: number
  rareFish_chance: number
  epicFish_chance: number
  mythicFish_chance: number
  // Fish Variants
  etherealFish_chance: number
  celestialFish_chance: number
  transcendentFish_chance: number
  infernoFish_chance: number
  glacierFish_chance: number
  cycloneFish_chance: number
  lightningFish_chance: number
  natureFish_chance: number
  // Chests
  commonChest_chance: number
  epicChest_chance: number
  rareChest_chance: number
  legendaryChest_chance: number
  mythicChest_chance: number
  etherealChest_chance: number
  celestialChest_chance: number
  transcendentChest_chance: number
  Attachment: Attachment[]
  hookAttachment: any[]
}
export interface Player {
  playerStats: PlayerData[];
  FishingRod: FishingRod;
  playerInventory: Fish[];
}
