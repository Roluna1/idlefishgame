import { playerData } from "../data/player-stats/playerdata.js";
const backpack = document.querySelector('.backpack-button');
const inventoryShow = document.querySelector('.inventory-container-show');
const fishContainer = document.querySelector('.player-fish-inventory-container');
const closeButton = document.querySelector('.exit-button');
backpack === null || backpack === void 0 ? void 0 : backpack.addEventListener('click', () => {
    if (inventoryShow) {
        backpack.disabled = true;
        inventoryShow.style.display = "flex";
        showFishInventory();
    }
});
closeButton === null || closeButton === void 0 ? void 0 : closeButton.addEventListener('click', () => {
    if (backpack) {
        backpack.disabled = false;
    }
    if (inventoryShow) {
        inventoryShow.style.display = "none";
    }
});
export function showFishInventory() {
    if (fishContainer) {
        fishContainer.innerHTML = '';
    }
    const fragment = document.createDocumentFragment();
    playerData.forEach((playerFishes) => {
        playerFishes.playerInventory.forEach((fish) => {
            const fishElement = document.createElement('div');
            fishElement.className = 'player-fish-inventory-content';
            fishElement.innerHTML = `
        <img class="fish-css" src="src/assets/img/fish/common_fish/${fish.name}.png" alt="${fish.name}">
      `;
            fragment.appendChild(fishElement);
        });
    });
    if (fishContainer) {
        fishContainer.appendChild(fragment);
    }
}
