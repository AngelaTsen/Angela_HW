// class User {
//   constructor(name, lastname) {
//     this.name = name;
//     this.lastname = lastname;
//   }
//   get fullName() {
//     return `${this.name} ${this.lastname}`;
//   }
//   set fullName(fullName) {
//     [this.name, this.lastname] = fullName.split(" ");
//   }
// }
// const user = new User("Jane", "Doe");
// console.log(user.fullName);
// user.fullName = "Alice Wood";
// console.log(user.fullName);

// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   printPosition() {
//     console.log(`Current point position X: ${this.x}, Y: ${this.y}`);
//   }
// }
// // class Child extends Parent
// class Point3D extends Point {
//   constructor(x, y, z) {
//     super(x, y);
//     this.z = z;
//   }
//   printPosition() {
//     super.printPosition();
//     console.log ( `Current point position X: ${this.x}, Y: ${this.y}, Z: ${this.z}`);
//   }
// }
// const point = new Point3D(10, -2, 5);
// point.printPosition();


class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get Radius() {
    return `радіус ${this.radius} см`;
  }
  set Radius(newRadius) {
    this.radius = newRadius;
  }
  get diameter() {
    return `діамет ${this.radius * 2} см`;
  }
  circleArea() {
    return `площа кола ${this.radius ** 2 * 3.14} см`;
  }
  circleLength() {
    return `довжина кола ${this.radius * 2 * 3.14} см`;
  }
}
const myCircle = new Circle(15);
console.log(myCircle.radius);

myCircle.radius = 35;
console.log(myCircle.radius);

console.log(myCircle.diameter);
console.log(myCircle.circleArea());
console.log(myCircle.circleLength());


class Marker {
  constructor(color, inkLevel) {
    this.color = color;
    this.inkLevel = inkLevel;
  }
  write(text) {
    let output = "";

    for (let i = 0; i < text.length; i++) {
      if (text[i] !== " " && this._inkLevel > 0) {
        output += text[i];
        this._inkLevel -= 0.5;
      } else {
        output += " ";
      }
    }

    console.log(`[${this._color}]: ${output}`);
  }
}

class Marker {
  constructor(color, inkLevel) {
    this._color = color;
    this._inkLevel = inkLevel;
  }

  // Метод для вводу тексту кольором маркера
  write(text) {
    let output = "";

    for (let i = 0; i < text.length; i++) {
      if (text[i] !== " " && this._inkLevel > 0) {
        output += text[i];
        this._inkLevel -= 0.5;
      } else {
        output += " ";
      }
    }

    console.log(`[${this._color}]: ${output}`);
  }
}

class RefillableMarker extends Marker {
  refill(inkAmount) {
    this._inkLevel += inkAmount;
    console.log(`Маркер перезаправлений. Поточний рівень чорнила: ${this._inkLevel}%`);
  }
}

const marker = new Marker("синій", 50);

marker.write("Привіт, світ!"); 

const refillableMarker = new RefillableMarker("червоний", 20);

refillableMarker.write("Це маркер, який можна перезаправляти."); // Виведе: [червоний]: Це маркер, яки

refillableMarker.refill(50); 
refillableMarker.write("ти перезаправив!"); // Виведе: [червоний]: ти перезаправи

// const myMarker = new Marker('жовтий', 65 + '%');
// console.log(myMarker.)

