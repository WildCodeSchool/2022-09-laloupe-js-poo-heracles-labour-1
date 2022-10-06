/* Fighter class definition */
const MAX_LIFE = 100;

class Fighter {
  constructor(name, strength, dexterity) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
  }

  displayInfo() {
    console.log(`${this.name} has ${this.life} 💙`);
  }
}

module.exports = Fighter;
