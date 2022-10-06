// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const Fighter = require("./src/Fighter.js");

const heracles = new Fighter("🧔 Heracles", 20, 6);
const nemean = new Fighter("🦁 Nemean Lion", 11, 13);

heracles.displayInfo();
nemean.displayInfo();

heracles.fight(nemean);

heracles.displayInfo();
nemean.displayInfo();
