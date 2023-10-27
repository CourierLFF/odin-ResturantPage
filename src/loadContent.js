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
    container.appendChild(divElement1);

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
    container.appendChild(divElement2);

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
    container.appendChild(divElement3);
}