class Ninja{
  constructor(name){
    this.name = name;
    this.health = 100;
    this.strength = 3;
    this.speed = 3;
  }
  sayName(){
    console.log(`Name: ${this.name}`);
  }
  showStats(){
    console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`);
  }
  drinkSake(){
    this.health += 10;
  }
}

let ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
console.log("Stats before drinking sake");
ninja1.showStats();
ninja1.drinkSake();
console.log("Stats after drinking sake");
ninja1.showStats();
