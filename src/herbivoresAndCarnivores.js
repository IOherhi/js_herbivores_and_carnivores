'use strict';

class Animal {
  static alive = [];
  health = 100;
  name;
}

class Herbivore extends Animal {
  hidden = false;

  constructor(name) {
    super();
    this.name = name;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super();
    this.name = name;
    Animal.alive.push(this);
  }

  bite(animal) {
    if (animal instanceof Carnivore) {
      return;
    }

    if (animal.hidden !== true && animal.health >= 50) {
      animal.health = animal.health - 50;
    }

    if (animal.health === 0) {
      const indexThis = Animal.alive.indexOf(animal);

      if (indexThis !== -1) {
        Animal.alive.splice(indexThis, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
