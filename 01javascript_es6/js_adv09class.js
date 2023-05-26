class Human {
  /* TODO */(/* TODO */'human') {
    this.type = type;
  }

  static /* TODO */(human) {
    return human /* TODO */ Human;
  }

  breathe() {
    alert('h-a-a-a-m');
  }
}

class Zero /* TODO */ Human {
  /* TODO */(type, firstName, lastName) {
    super(type);
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayName() {
    super.breathe();
    alert(`${this.firstName} ${this.lastName}`);
  }
}

const newZero = new Zero('human', 'Zero', 'Cho');
Human.isHuman(newZero); // true
