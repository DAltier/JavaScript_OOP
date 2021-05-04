class Ninja {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.strength = 3;
    this.speed = 3;
  }
  sayName() {
    console.log(`Name: ${this.name}`);
    return this;
  }
  showStats() {
    console.log(`Name: ${this.name}, Health: ${this.health}, Strength: ${this.strength}, Speed: ${this.speed}`);
    return this;
  }
  drinkSake() {
    this.health += 10;
    return this;
  }
}

class Sensei extends Ninja {
  constructor(name){
    super(name);
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
  }
  speakWisdom() {
    super.drinkSake();
    console.log("You can never plan the future by the past.");
    return this;
  }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName().showStats().drinkSake().showStats();


const sensei = new Sensei("Master Splinter");
sensei.showStats().speakWisdom().showStats();