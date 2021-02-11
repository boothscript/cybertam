function randomValue() {
  return Math.floor(Math.random() * 100 + 1);
}
function isFailure(chance) {
  return randomValue() < chance;
}

class CyberPet {
  constructor(name) {
    this.name = name;
    this.health = randomValue();
    this.food = randomValue();
    this.water = randomValue();
    this.happiness = randomValue();
    this.energy = randomValue();
  }
  eat() {
    this.food = Math.min(this.food + 20, 100);
    this.health = Math.min(this.health + 10);
    this.useProperty("happiness", 10);
  }
  drink() {
    this.water = Math.min(this.water + 20, 100);
    this.useProperty("happiness", 10);
    this.health = Math.min(this.health + 10);
  }
  nap() {
    this.energy = Math.min(this.energy + 50, 100);
    this.happiness = Math.min(this.happiness + 15, 100);
    this.useProperty("food", 5);
    this.useProperty("water", 5);
  }
  play() {
    this.happiness = Math.min(this.happiness + 30, 100);
    this.useProperty("food", 20);
    this.useProperty("water", 20);
    this.useProperty("energy", 20);
  }
  pet() {
    this.happiness = Math.min(this.happiness + 20, 100);
    this.useProperty("food", 10);
    this.useProperty("water", 10);
    this.useProperty("energy", 5);
  }
  tick() {
    this.useProperty("happiness", 10);
    this.useProperty("food", 10);
    this.useProperty("water", 10);
    this.useProperty("energy", 5);
  }

  useProperty(property, value) {
    if (value > this[property]) {
      this[property] = 0;
      this.health -= value - this[property];
    } else {
      this[property] -= value;
    }
  }
}
