const playerMoneyDisplay = document.querySelector('.player-fishcoins');
export function playerMoneyRender(money) {
    if (playerMoneyDisplay) {
        playerMoneyDisplay.innerText = `${money}`;
    }
}
