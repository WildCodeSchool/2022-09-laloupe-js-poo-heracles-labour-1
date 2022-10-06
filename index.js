// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const Fighter = require("./src/Fighter.js");

const heracles = new Fighter("🧔 Heracles", 20, 6);
const nemean = new Fighter("🦁 Nemean Lion", 11, 13);

heracles.displayInfo();
nemean.displayInfo();

// heracles.fight(nemean);

// heracles.displayInfo();
// nemean.displayInfo();
let rounds = 1;

while (heracles.life > 0 && nemean.life > 0) {
  heracles.fight(nemean);
  nemean.fight(heracles);
  console.log(`🕛 Round #${rounds}`);
  console.log(
    `${heracles.name} 🗡 ${nemean.name} 💙 ${nemean.name}: ${nemean.life}`
  );
  console.log(
    `${nemean.name} 🗡 ${heracles.name} 💙 ${heracles.name}: ${heracles.life}`
  );
  rounds++;
}

if (heracles.life === 0) {
  console.log(`💀 ${heracles.name} is dead`);
  console.log(`🏆 ${nemean.name} wins (💙 ${nemean.life})`);
} else {
  console.log(`💀 ${nemean.name} is dead`);
  console.log(`🏆 ${heracles.name} wins (💙 ${heracles.life})`);
}
