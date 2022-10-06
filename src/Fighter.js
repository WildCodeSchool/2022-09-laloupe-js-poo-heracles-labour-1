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
    console.log(`${this.name} has ${this.life}💙`);
  }

  fight(enemy) {
    let damagePoints = Math.floor(Math.random() * this.strength) + 1;

    damagePoints = enemy.dexterity - damagePoints;

    if (damagePoints < 0) {
      damagePoints = 0;
    }

    if (enemy.life - damagePoints < 0) {
      enemy.life = 0;
    } else {
      enemy.life -= damagePoints;
    }
  }

  isAlive() {
    return this.life > 0;
  }
}

module.exports = Fighter;
