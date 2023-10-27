export function showSteak() {
    const divElement3 = document.createElement("div");
    const steakP = document.createElement("p");
    steakP.textContent = "Steak";
    const steakPriceP = document.createElement("p");
    steakPriceP.textContent = "$13.99";
    const steakImg = document.createElement("img");
    steakImg.src = "/src/assets/steak.jpg";
    steakImg.style = "width: 400px";
    divElement3.appendChild(steakP);
    divElement3.appendChild(steakPriceP);
    divElement3.appendChild(steakImg);
    return divElement3;
}