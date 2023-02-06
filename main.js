function getValueType(arg) {
    return { value: arg, type: typeof arg };
}
console.log(getValueType("hello")); // { value: "hello", type: "string" }
console.log(getValueType(123)); // { value: 123, type: "number" }
console.log(getValueType(true)); // { value: true, type: "boolean" }
function distance(point1, point2) {
    var lengthX = point2.x - point1.x;
    var lengthY = point2.y - point1.y;
    return Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2));
}
console.log("distance: ", distance({ x: 3, y: 4 }, { x: 0, y: 0 })); // 5
var CardRank;
(function (CardRank) {
    CardRank[CardRank["Ace"] = 14] = "Ace";
    CardRank[CardRank["Two"] = 2] = "Two";
    CardRank[CardRank["Three"] = 3] = "Three";
    CardRank[CardRank["Four"] = 4] = "Four";
    CardRank[CardRank["Five"] = 5] = "Five";
    CardRank[CardRank["Six"] = 6] = "Six";
    CardRank[CardRank["Seven"] = 7] = "Seven";
    CardRank[CardRank["Eight"] = 8] = "Eight";
    CardRank[CardRank["Nine"] = 9] = "Nine";
    CardRank[CardRank["Ten"] = 10] = "Ten";
    CardRank[CardRank["Jack"] = 11] = "Jack";
    CardRank[CardRank["Queen"] = 12] = "Queen";
    CardRank[CardRank["King"] = 13] = "King";
})(CardRank || (CardRank = {}));
function higherRankedCard(card1, card2) {
    if (card1.rank > card2.rank)
        return card1;
    else
        return card2;
}
var card1 = { suit: "Spades", rank: CardRank.Ace };
var card2 = { suit: "Hearts", rank: CardRank.King };
var higherCard = higherRankedCard(card1, card2);
console.log(higherCard);
var Person = /** @class */ (function () {
    function Person(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    return Person;
}());
var person = new Person("John Doe", 30, "john.doe@example.com");
console.log(person);
function rectangleArea(rect) {
    return rect.width * rect.length;
}
function circleArea(circ) {
    return Math.PI * circ.radius * circ.radius;
}
function area(shape) {
    return rectangleArea(shape) + circleArea(shape);
}
var myShape = { width: 2, length: 4, radius: 1 };
console.log(area(myShape));
function swap(a, b) {
    return [b, a];
}
console.log(swap("hello", "world")); // Output: [ 'world', 'hello' ]
console.log(swap(123, 456)); // Output: [456, 123]
console.log(swap(true, false)); // Output: [false, true]
