import { playerData } from "../data/player-stats/playerdata.js";
const lvlBar = document.querySelector<HTMLDivElement>('.lvl-bar-interior');
const lvlBarText = document.querySelector<HTMLParagraphElement>('.lvl-bar-text');
const lvlText = document.querySelector<HTMLHeadElement>('.lvl-text');

export function lvlBarRender(xp: number) {
  let playerLVL = playerData[0].playerStats[0].playerLVL || 1
  const requireXP = playerLVL * 152
  const xpPercent = Math.min((xp / requireXP) * 100, 100);
  if (lvlBar) {
    lvlBar.style.width = `${xpPercent}%`;
  } 
  if (lvlBarText) {
    if (xp >= requireXP) {
      playerLVL += 1
      playerData[0].playerStats[0].playerLVL = playerLVL;
      playerData[0].playerStats[0].playerXP = 0;
      if (lvlText) {
        lvlText.innerText = `Level ${playerLVL}`
      }
    } else {
    lvlBarText.innerText = `${xp.toFixed(2)} / ${requireXP} XP`
    }
  }
};