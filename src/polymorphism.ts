// одно действие - несколько реализаций

class Animal {
  constructor(
    public name: string,
  ) {}

  run(): void {} // действие
}

class Dog extends Animal {
  constructor(
    public name: string,
  ) {
    super(name);
  }

  run() {
    console.log('Бегаю виляя хвостиком!');
  }
}

class Lion extends Animal {
  constructor(
    public name: string,
  ) {
    super(name);
  }

  run() {
    console.log('Бежать и хватать добычу');
  }
}