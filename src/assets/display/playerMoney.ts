const playerMoneyDisplay = document.querySelector<HTMLParagraphElement>('.player-fishcoins');

export function playerMoneyRender(money: number) {
  if (playerMoneyDisplay) {
  playerMoneyDisplay.innerText = `${money}`
  }
}