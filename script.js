/**************
 *  Variables and data types
 */
/*
var firstName = "John";
console.log(firstName);

var lastName = "Smith";
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = "Teacher";
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
var function = 23;
*/

/**************
 *  Variables mutation and type coercion
 */
/*
var firstName = "John";
var age = 28;

// Type coercion
console.log(firstName + " " + age);

var job, isMarried;
job = "teacher";
isMarried = false;

console.log(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
);

// Variable mutation
age = "twenty eight";
job = "driver";

alert(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
);

var lastName = prompt("What is his last Name?");
console.log(firstName + " " + lastName);
*/

/********************
 * Basic operators
 */
/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "Mark is older than John");
var x;
console.log(typeof x);
*/

/***********************
 * Operator precedence
 */
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);
*/

/******************
 * CODING CHALLENGE 1
 */
/*
var markMass = 78; // kg
var markHeight = 1.69; // meters

var johnMass = 92;
var johnHeight = 1.95;

var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);
console.log(markBMI, johnBMI);

var compare = markBMI > johnBMI;
console.log("Is Mark's BMI higher than John's? " + compare);
*/

/***************
 * If / else statements
 */
/*
var firstName = "John";
var civilStatus = "single";

if (civilStatus === "married") {
  console.log(firstName + " is married!");
} else {
  console.log(firstName + " will hopefully marry soon :)");
}

var isMarried = true;
if (isMarried) {
  console.log(firstName + " is married!");
} else {
  console.log(firstName + " will hopefully marry soon :)");
}

var markMass = 78; // kg
var markHeight = 1.69; // meters

var johnMass = 92;
var johnHeight = 1.95;

var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);

if (markBMI > johnBMI) {
  console.log("Mark's BMI is higher than John's.");
} else {
  console.log("John's BMI is higher than Mark's.");
}
*/

/******************
 * Boolean logic
 */
/*
var firstName = "John";
var age = 16;

if (age < 13) {
  console.log(firstName + " is a boy.");
} else if (age >= 13 && age < 20) {
  // Between 13 and 20 = >= 13 AND age > 20
  console.log(firstName + " is a teenager.");
} else if (age >= 20 && age < 30) {
  console.log(firstName + " is a young man.");
} else {
  console.log(firstName + " is a man.");
}
*/

/************
 * The Ternary Operator and Switch Statements
 */
/*
var firstName = "John";
var age = 22;

// Ternary Operator
age >= 18
  ? console.log(firstName + " drinks beer.")
  : console.log(firstName + " drinks juice.");

var drink = age >= 18 ? "beer" : "juice";
console.log(drink);


if (age >= 18) {
  var drink = 'beer';
} else {
  var drink = 'juice'
}
*/

// Switch statement
/*
var job = "teacher";
switch (job) {
  case "teacher":
  case "instructor":
    console.log(firstName + " teaches kids how to code.");
    break;
  case "driver":
    console.log(firstName + " drives an uber in Lisbon.");
    break;
  case "designer":
    console.log(firstName + " designs beautiful websites.");
    break;
  default:
    console.log(firstNmae + " does something else.");
}

age = 56;
switch (true) {
  case age < 13:
    console.log(firstName + " is a boy.");
    break;
  case age >= 13 && age < 20:
    console.log(firstName + " is a teenager.");
    break;
  case age >= 20 && age < 30:
    console.log(firstName + " is a young man.");
    break;
  default:
    console.log(firstName + " is a man.");
}
*/

/***************
 * Truthy and Falsy values and equality operators
 */

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

/*
var height;

height = "";

if (height || height === 0) {
  console.log("Variable is defined");
} else {
  console.log("Variable has not been defined");
}

// Equality operators
if (height == "23") {
  console.log("The == operator does type coercion!");
}
*/

/****************************
 * CODING CHALLENGE 2
 */
/*
var johnScores = [89, 120, 103];
total = 0;
for (var i = 0; i < johnScores.length; i++) {
  total += johnScores[i];
}

var johnAvg = total / johnScores.length;

var mikeScores = [116, 94, 123];
total = 0;
for (var i = 0; i < mikeScores.length; i++) {
  total += mikeScores[i];
}

var mikeAvg = total / mikeScores.length;

var maryScores = [97, 134, 105];
total = 0;
for (var i = 0; i < maryScores.length; i++) {
  total += maryScores[i];
}

var maryAvg = total / maryScores.length;
console.log(johnAvg, mikeAvg, maryAvg);

if (mikeAvg > johnAvg && mikeAvg > maryAvg) {
  console.log("Mike's team won with an average score of " + mikeAvg);
} else if (johnAvg > mikeAvg && johnAvg > maryAvg) {
  console.log("John's team won with an average score of " + johnAvg);
} else if (maryAvg > johnAvg && maryAvg > mikeAvg) {
  console.log("Mary's team won with an average score of " + maryAvg);
} else {
  console.log("There was a draw! The average score was " + johnAvg);
}
*/

/*************
 * Functions
 */
/*
function calculateAge(birthYear) {
  return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement > 0) {
    console.log(firstName + " retires in " + retirement + "years.");
  } else {
    console.log(firstName + " is already retired.");
  }
}

yearsUntilRetirement(1990, "John");
yearsUntilRetirement(1948, "Mike");
yearsUntilRetirement(1969, "Jane");
*/

/**********
 * Function Statements and Expressions
 
//
// function whatDoYouDo(job, firstName) {}

// Function expression
var whatDoYouDo = function(job, firstName) {
  switch (job) {
    case "teacher":
      return firstName + " teaches kids how to code.";
    case "driver":
      return firstName + " drives a cab in Lisbon.";
    case "designer":
      return firstName + " designs beautiful websites.";
    default:
      return firstName + " does something else.";
  }
};

console.log(whatDoYouDo("teacher", "John"));
console.log(whatDoYouDo("designer", "Jane"));
console.log(whatDoYouDo("retired", "Mike"));
*/

/*********
 * Arrays
 */
/*
// Initialize new array
var names = ["John", "Mark", "Jane"];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = "Ben";
names[names.length] = "Mary";
console.log(names);

// Different data types
var john = ["John", "Smith", 1990, "designer", false];

john.push("blue");
john.unshift("Mr.");
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));

var isDesigner =
  john.indexOf("designer") === -1
    ? "John is NOT a designer"
    : "John IS a designer";
console.log(isDesigner);
*/

/*********
 * CODING CHALLENGE 3
 */

/*
function tipCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2])
];

var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips, finalValues);
*/

/************************
 * Objects and Properties
 */
/*
// Object literal
var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1990,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false
};

console.log(john.firstName);
console.log(john["lastName"]);
var x = "birthYear";
console.log(john[x]);

john.job = "designer";
john["isMarried"] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.firstName = "Jane";
jane.birthYear = 1969;
jane["lastName"] = "Smith";
*/

/***********************
 * Objects and Methods
 */
/*
var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1992,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false,
  calcAge: function() {
    this.age = 2018 - this.birthYear;
  }
};

john.calcAge();
console.log(john);
*/

/*********
 * CODING CHALLENGE 4
 */
/*
var mark = {
  name: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBmi: function() {
    return this.mass / (this.height * this.height);
  }
};

var john = {
  name: "John Smith",
  mass: 92,
  height: 1.95,
  calcBmi: function() {
    return this.mass / (this.height * this.height);
  }
};

if (john.calcBmi() < mark.calcBmi()) {
  console.log(mark.name + " has a higher BMI of " + mark.calcBmi());
} else if (john.calcBmi() > mark.calcBmi()) {
  console.log(john.name + " has a higher BMI of " + john.calcBmi());
} else {
  console.log(
    "Both " +
      john.name +
      " and " +
      mark.name +
      " have a BMI of " +
      john.calcBmi()
  );
}
*/

/******************
 * Loops and iteration
 */
/*
// For loop
for (var i = 0; i < 10; i++) {
  console.log(i);
}
*/
// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to console, i++
// ...
// i = 9, 9 < 10 true, log i to console, i++
// i = 10, 10 < 10 FALSE, exit the loop!

/*
var john = ["John", "Smith", 1990, "designer", false];

for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

// While loop
var i = 0;
while (i < john.length) {
  console.log(john[i]);
  i++;
}
*/

// continue and break statements
/*
var john = ["John", "Smith", 1990, "designer", false, "blue"];

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") continue;
  console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") break;
  console.log(john[i]);
}

// Looping backwards

for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}
*/

/**********************
 * CODING CHALLENGE 5
 */

var john = {
  fullName: "John Smith",
  bills: [124, 48, 268, 180, 42],
  tipCalc: function() {
    this.tips = [];
    this.finalValues = [];
    for (var i = 0; i < this.bills.length; i++) {
      // Determine percentage based on tipping rules
      var percentage;
      var bill = this.bills[i];
      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }
      // Add results to corresponding arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
};

john.tipCalc();
console.log(john);
