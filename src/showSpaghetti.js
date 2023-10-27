export function showSpaghetti() {
    const divElement1 = document.createElement("div");
    const spaghettiP = document.createElement("p");
    spaghettiP.textContent = "Spaghetti";
    const spaghettiPriceP = document.createElement("p");
    spaghettiPriceP.textContent = "$8.99";
    const spaghettiImg = document.createElement("img");
    spaghettiImg.src = "/src/assets/spaghetti.jpg";
    spaghettiImg.style = "width: 400px";
    divElement1.appendChild(spaghettiP);
    divElement1.appendChild(spaghettiPriceP);
    divElement1.appendChild(spaghettiImg);
    return divElement1;
}