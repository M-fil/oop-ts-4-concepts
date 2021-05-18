abstract class Car {
  constructor(
    protected owner: string,
    protected speed: number,
    protected year: number,
  ) {}

  public drive() {}
  public repair() {}
}

class BMW extends Car {
  constructor(
    protected speed: number,
    protected year: number,
  ) {
    super('BMW company', speed, year);
  }

  drive() {
    console.log(`The BMW car has speed ${this.speed}`);
  }

  repair() {
    console.log('The BWM car was repaired');
  }
}

const bmwCar = new BMW(200, 2021);
bmwCar.repair();