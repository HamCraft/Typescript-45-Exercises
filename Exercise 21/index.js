"use strict";
const bouquet = {
    name: "Spring Delight",
    price: 250,
    description: "Beautiful arrangement of spring flowers"
};
let bouquets = [];
bouquets.push(bouquet);
bouquets.push({
    name: "Summer bliss",
    price: 350,
    description: "beautiful arrangement of Summer flowers"
});
let bouquet3 = {
    name: "Red Hot",
    price: 350,
    description: "Beautiful arrangement of red roses"
};
bouquets.push(bouquet3);
bouquets.push({ name: "Freshness", price: 250, description: "A beautiful arrangement of white and yellow roses" });
function displayBouquets(bouquets) {
    for (let i of bouquets) {
        console.log(`
        ${i.name}
        ${i.description}
        price: ${i.price} USD
        ______________\n`);
    }
}
displayBouquets(bouquets);
