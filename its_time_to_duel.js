class Card {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }
}

class Unit extends Card {
  constructor(name, cost, power, resilience) {
    super(name, cost);
    this.power = power;
    this.resilience = resilience;
  }

  hardAlgorithm() {
    this.resilience += 3;
  }

  unhandledPromiseRejection() {
    this.resilience -= 2;
  }

  pairProgramming() {
    this.power += 2;
  }
  attack(target) {
    target.resilience -= this.power;
  }
}

let unit1 = new Unit("Red Belt Ninja", 3, 3, 4);
unit1.hardAlgorithm();

let unit2 = new Unit("Black Belt Ninja", 4, 5, 4);
unit2.unhandledPromiseRejection();

unit1.pairProgramming();

unit1.attack(unit2);

