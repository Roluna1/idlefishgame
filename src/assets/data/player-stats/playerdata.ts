import { Fish } from "../../auto/gettingFish.js";
import { Player } from "./playerdataInterface.js";
export let playerData: Player[] = [
  {
    playerStats: [{
        playerLVL: 0,
        playerXP: 0,
        playerTotalXP: 0,
        maxAttachment: 2,
        maxStorage: 20,
        playerMoney: 0,
        playerTotalMoney: 0,
        playerPearl: 0,
        playerTotalPearl: 0,
        playerOpenChest: 0,
        playerGotCommonChest: 0,
        playerGotRareChest: 0,
        playerGotEpicChest: 0,
        playerGotLegendaryChest: 0,
        playerGotMythicChest: 0,
        playerGotEtherealChest: 0,
        playerGotCelestialChest: 0,
        playerGotTranscendentChest: 0,
        playerCaughtCommonFish: 0,
        playerCaughtRareFish: 0,
        playerCaughtEpicFish: 0,
        playerCaughtLegendaryFish: 0,
        playerCaughtMythicFish: 0,
        playerCaughtEtherealFish: 0,
        playerCaughtCelestialFish: 0,
        playerCaughtTranscendentFish: 0,
        playerCaughtInfernoFish: 0,
        playerCaughtGlacierFish: 0,
        playerCaughtCycloneFish: 0,
        playerCaughtLightningFish:0,
        playerCaughtNatureFish: 0,
        playerCaughtTreasure: 0,
        playerCaughtTrash: 0,
        playerTotalPlayerTime: 0
    }],
    FishingRod: {
      lvl: 1,
      commonFish_chance: 100,
      rareFish_chance: 5,
      epicFish_chance: 1,
      mythicFish_chance: 0,

      transcendentFish_chance: 0, // Spiritual
      infernoFish_chance: 0, // Fire 
      glacierFish_chance: 0, // Ice
      cycloneFish_chance: 0, // Air
      lightningFish_chance: 0, // Electric
      natureFish_chance: 0, // Earth
      etherealFish_chance: 0, // Mystical
      celestialFish_chance: 0, // Cosmic 
      commonChest_chance: 70, 
      epicChest_chance: 10,
      rareChest_chance: 3,
      legendaryChest_chance: .000000009,
      mythicChest_chance: .0000000001,
      etherealChest_chance: 0,
      celestialChest_chance: 0,
      transcendentChest_chance: 0,
      Attachment: [{
        rod_blank: 10, // increase the size of fish
        rod_grip: 1, // decrease the time catching
        rod_reel_seat: 1, // increase the size of fish and losing fish
        rod_reeling_speed: 1, // increase speed catching
        rod_guides: 1, // increase chance baiting fish
        rod_tip: 1, // increase distance
        rod_butt: 400 // improve casting accuracy or comfort and improving quality of fish
      }],        
      hookAttachment: []
    },
    playerInventory: []
}];