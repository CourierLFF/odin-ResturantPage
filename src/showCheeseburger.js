export function showCheeseburger() {
    const divElement2 = document.createElement("div");
    const cheeseburgerP = document.createElement("p");
    cheeseburgerP.textContent = "Cheeseburger";
    const cheeseburgerPriceP = document.createElement("p");
    cheeseburgerPriceP.textContent = "$11.99";
    const cheeseburgerImg = document.createElement("img");
    cheeseburgerImg.src = "/src/assets/cheeseburger.jpg";
    cheeseburgerImg.style = "width: 400px";
    divElement2.appendChild(cheeseburgerP);
    divElement2.appendChild(cheeseburgerPriceP);
    divElement2.appendChild(cheeseburgerImg);
    return divElement2;
}