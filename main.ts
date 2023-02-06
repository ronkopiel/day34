type argumentType = number | string | boolean;
function getValueType(arg: argumentType): Object {
  return { value: arg, type: typeof arg };
}
console.log(getValueType("hello")); // { value: "hello", type: "string" }
console.log(getValueType(123)); // { value: 123, type: "number" }
console.log(getValueType(true)); // { value: true, type: "boolean" }

interface Rectangle {
  length: number;
  width: number;
}

// class Rectangle implements Rectangle {
//   length: number;
//   width: number;
//   constructor(length: number, width: number) {
//     this.length = length;
//     this.width = width;
//   }
//   getArea() {
//     return this.length * this.width;
//   }

//   getPerimeter() {
//     return 2 * (this.length + this.width);
//   }
// }

// const rectangle = new Rectangle(2, 4);
// console.log("Area: ", rectangle.getArea());
// console.log("Perimeter: ", rectangle.getPerimeter());

interface point {
  x: number;
  y: number;
}

function distance(point1: point, point2: point): number {
  const lengthX = point2.x - point1.x;
  const lengthY = point2.y - point1.y;
  return Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2));
}
console.log("distance: ", distance({ x: 3, y: 4 }, { x: 0, y: 0 })); // 5

enum CardRank {
  Ace = 14,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
  Six = 6,
  Seven = 7,
  Eight = 8,
  Nine = 9,
  Ten = 10,
  Jack = 11,
  Queen = 12,
  King = 13,
}

interface Card {
  suit: string;
  rank: CardRank;
}

function higherRankedCard(card1: Card, card2: Card): Card {
  if (card1.rank > card2.rank) return card1;
  else return card2;
}
const card1: Card = { suit: "Spades", rank: CardRank.Ace };
const card2: Card = { suit: "Hearts", rank: CardRank.King };
const higherCard = higherRankedCard(card1, card2);
console.log(higherCard);

class Person {
  name: string;
  age: number;
  email: string;
  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
}
const person = new Person("John Doe", 30, "john.doe@example.com");
console.log(person);

interface Circle {
  radius: number;
}

type Shape = Rectangle & Circle;

function rectangleArea(rect: Rectangle) {
  return rect.width * rect.length;
}

function circleArea(circ: Circle) {
  return Math.PI * circ.radius * circ.radius;
}

function area(shape: Shape) {
  return rectangleArea(shape) + circleArea(shape);
}
const myShape: Shape = { width: 2, length: 4, radius: 1 };
console.log(area(myShape));


function swap<T>(a: T, b: T): [T, T] {
  return [b, a];
}
console.log(swap("hello", "world")); // Output: [ 'world', 'hello' ]
console.log(swap(123, 456)); // Output: [456, 123]
console.log(swap(true, false)); // Output: [false, true]
