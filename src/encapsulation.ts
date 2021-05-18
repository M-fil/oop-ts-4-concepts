// public, private, protected

class Developer {
  public isDeveloper: boolean;

  constructor(
    protected name: string,
    public salary: number,
  ) {
    this.isDeveloper = true;
  }

  getInfo() {
    console.log('name', this.name);
    console.log('salary', this.salary);
  }
}

class JuniorDeveloper extends Developer {
  constructor(
    protected name: string,
    public salary: number,
  ) {
    super(name, salary);
  }

  getName(): string {
    return this.name;
  }
}

const developer = new JuniorDeveloper('Maxim', 2500);
console.log('name', developer.getName());