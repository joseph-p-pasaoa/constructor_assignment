// JOSEPH P. PASAOA
//



// global function declarations
const print = function(forDisplay, bool) {
  if (bool) { // for outputs
    console.log(forDisplay,'\n');
  } else { // for inputs
    console.log(forDisplay);
  }
}



// 1 //
// a
console.log("1a // Write a constructor function called `Person` that has 3 properties: a first name, a last name and a middle name.\nCreate 2 instances of a `Person`. Print one of their first names.");
function Person(firstName, lastName, middleName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.middleName = middleName;
}

let william = new Person('William', 'Garrison', 'Lloyd');
let franklin = new Person('Franklin', 'Roosevelt', 'Delano');
print(william);
print(franklin);
print(william.firstName, 1);

// b
console.log("1b // Write a prototype function in `Person` called `fullName` that will return a formatted string of an instance's full name. \nCall this method on both the instances you created in part a.");

Person.prototype.fullName = function() {
  return (`${this.firstName} ${this.middleName} ${this.lastName}`);
}
print(william.fullName());
print(franklin.fullName(), 1);
//


// 2 //
// a
console.log("2a // Create a constructor function called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.");
function Book(title, author, rating) {
   this.title = title;
   this.author = author;
   this.rating = rating;
}

let war = new Book('War & Peace', 'Leo Tolstoy', 7);
let earthsea = new Book('A Wizard of Earthsea', 'Ursula K. Le Guin', 6);
let boiled = new Book('Hard-Boiled Wonderland & the End of the World', 'Haruki Murakami', 8);
print(war);
print(earthsea);
print(boiled, 1);

// b
console.log("2b // Add a prototype function to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7");

Book.prototype.isGood = function() {
  if (this.rating >= 7) {
    return true;
  }
  return false;
}
print(war.isGood());
print(earthsea.isGood());
print(boiled.isGood(), 1);
//


// 3 //
// a
console.log("3a // Create a `Dog` constructor function with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.");

function Dog(name, breed, mood, isHungry) {
  this.name = name;
  this.breed = breed;
  this.mood = mood;
  this.isHungry = isHungry;
}
let snoopy = new Dog('Snoopy', 'Beagle', 'sleepy', false);
print(snoopy);

// b
console.log("3b // Add a prototype function called `playFetch`. It should set the dog's `hungry` property to `true`, set its mood property to `playful`, and log 'Ruff!'");

Dog.prototype.playFetch = function() {
  this.isHungry = true;
  this.mood = 'playful';
  console.log("Ruff!");
}
snoopy.playFetch();
print(snoopy);

// c
console.log("3c. Add a prototype function called `feed`. If the dog is hungry, it should set `hungry` to `false` and print 'Woof!''\nIf the dog is not hungry, it should log 'The dog doesn't look hungry'");

Dog.prototype.feed = function() {
  if (this.isHungry) {
    this.isHungry = false;
    console.log("Woof!");
  } else {
    console.log("The dog doesn't look hungry");
  }
}
snoopy.feed();
print(snoopy);

// d
console.log('3d. Add a prototype function called `toString` that returns a description of the dog');

Dog.prototype.toString = function() {
  console.log(Object.values(this).join(', '));
}
snoopy.toString();
print('');
//


// 4 //
// a
console.log("4a // Make an object called `freezingPoint` that has three properties: `celsius`, `fahrenheit`, and `kelvin`.\nGive them all values equal to the freezing point of water.");
let freezingPoint = {
  celsius: 0,
  fahrenheit: 32,
  kelvin: 273.2
}
console.log(freezingPoint);

// b
console.log("4b // Make a constructor function called `Celsius` that has one property: `celsius`, and two methods `getFahrenheitTemp`, and `getKelvinTemp`");
function Celsius(celsius) {
  this.celsius = celsius;
  this.getFahrenheitTemp = function() {
    return (celsius * 9 / 5) + 32;
  }
  this.getKelvinTemp = function() {
    return (celsius + 273.2);
  }
}
let outsideTempt = new Celsius(10.0);
print(outsideTempt.celsius);
print(outsideTempt.getKelvinTemp());
print(outsideTempt.getFahrenheitTemp());

// c
console.log("4c // Give `Celsius` a prototype function called `isBelowFreezing` that returns a `Bool` (true if the temperature is below freezing).");
Celsius.prototype.isBelowFreezing = function() {
  if (this.celsius < 0) {
    return true;
  }
  return false;
}
print(`Input: ${outsideTempt.celsius}`);
print(outsideTempt.isBelowFreezing(), 1);
//


// 5 //
// a
console.log("5a // Create a constructor function called `Movie` that has properties for `name`, `year`, `genre`, `cast`, and `description`.\nCreate an instance of your `Movie`");

function Movie(name, year, genre, cast, description) {
  this.name = name;
  this.year = year;
  this.genre = genre;
  this.cast = cast;
  this.description = description;
}
let swiss = new Movie(
  'Swiss Army Man',
  2016,
  'drama',
  ['Paul Dano', 'Daniel Radcliffe', 'Mary Elizabeth Winstead'],
  'A hopeless man stranded on a deserted island befriends a dead body and together they go on a surreal journey to get home.'
);
print(swiss);

// b
console.log("5b // Create an prototype function inside `Movie` called `blurb` that returns a formatted string describing the movie.");
Movie.prototype.blurb = function() {
  let castStr = this.cast;
  castStr[castStr.length - 1] = "and " + castStr[castStr.length - 1];
  castStr = castStr.join(', ');
  return (`${this.name} came out in ${this.year}. A ${this.genre} film starring ${castStr}.\n${this.description}`);
}
print(swiss.blurb(), 1);
//


// 6 //
console.log("6a // Write a constructor Vector that represents a vector in two-dimensional space.");
function Vector(x, y) {
  this.x = x;
  this.y = y;
}
var v1 = new Vector(1, 2)
var v2 = new Vector(2, 3)
print(v1);
print(v2);

console.log("6b // Give the Vector prototype two methods, `plus` and `minus`");
Vector.prototype.plus = function(vector) {
  this.x = this.x + vector.x;
  this.y = this.y + vector.y;
  return this;
}
Vector.prototype.minus = function(vector) {
  this.x = this.x - vector.x;
  this.y = this.y - vector.y;
  return this;
}
print(v1.plus(v2));
print(v1.minus(v2));

console.log("6c // Add a method `getLength` to the prototype that computes the length of the vector");
Vector.prototype.getLength = function() {
  return (this.x ** 2 + this.y ** 2) ** (1/2);
}

var v3 = new Vector(3, 4)
print(v3.getLength(), 1);
//