import { showSpaghetti } from "./showSpaghetti";
import { showCheeseburger } from "./showCheeseburger";
import { showSteak } from "./showSteak";
export function loadContent() {
    const container = document.querySelector("#content");

    const mainH1 = document.createElement("h1");
    mainH1.textContent = "Odin Resturant!";
    container.appendChild(mainH1);

    const mainH2 = document.createElement("h2");
    mainH2.textContent = '"Best food in the country!"';
    container.appendChild(mainH2);

    const resturantDescription = document.createElement("p");
    resturantDescription.textContent = "Here at the Odin Resturant we pride ourselves on delicious dishes for you and your whole family!";
    container.appendChild(resturantDescription);

    const mainH3 = document.createElement("h3");
    mainH3.textContent = "Our Menu:";
    container.appendChild(mainH3);

    const currentFood = document.createElement("div");
    container.appendChild(currentFood);

    function clearCurrentFood() {
        while (currentFood.firstChild) {
            currentFood.removeChild(currentFood.firstChild);
        }
    }

    const spaghettiButton = document.createElement("button");
    spaghettiButton.textContent = "Spaghetti";
    spaghettiButton.addEventListener("click", () => {
        clearCurrentFood();
        currentFood.appendChild(showSpaghetti());
    });
    container.appendChild(spaghettiButton);

    const cheeseburgerButton = document.createElement("button");
    cheeseburgerButton.textContent = "Cheeseburger";
    cheeseburgerButton.addEventListener("click", () => {
        clearCurrentFood();
        currentFood.appendChild(showCheeseburger());
    });
    container.appendChild(cheeseburgerButton);

    const steakButton = document.createElement("button");
    steakButton.textContent = "Steak";
    steakButton.addEventListener("click", () => {
        clearCurrentFood();
        currentFood.appendChild(showSteak());
    });
    container.appendChild(steakButton);

    container.appendChild(currentFood);
}