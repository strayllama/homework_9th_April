// Episode 1
const name = 'Keith';

const printName = function () {
  console.log(`My name is ${ name }`);
}

printName();
// MY name is Keith, as Keith is passed in and consoled out with 'My name is...'



// Episode 2
const score = 5;

const result = function () {
  const score = 3;
  return score;
}

console.log(result());
// Can't change const, but if you reasssign it and thus 3


// Episode 3
const myAnimals = ['Chickens', 'Cats', 'Rabbits'];

const listAnimals = function () {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];

  for (const i = 0; i < myAnimals.length; i++) {
    console.log(`${ i }: ${ myAnimals[i] }`);
  }
}

listAnimals();
// Have to reassign myAnimals as a const, or just use it as previously declared, or remove previous declaration
// Also, cant use a const i as counter in for loop, because i++ won't work



// Episode 4
const suspectOne = 'Jay';
const suspectTwo = 'Val';
const suspectThree = 'Keith';
const suspectFour = 'Rick';

const allSuspects = function () {
  const suspectThree = 'Harvey';
  console.log('Suspects include:', suspectOne, suspectTwo, suspectThree, suspectFour);
}

allSuspects();
console.log(`Suspect three is: ${ suspectThree }`);
// Should get:
// Suspects include: Jay, Val, Harvey, Rick
// Suspect three is: Keith
// because supsectThree being re-declared has scope of block, so stays within the function.


// Episode 5
const detective = {
  name: 'Ace Ventura',
  pet: 'monkey'
};

const printName = function (detective) {
  return detective.name;
}

const detectiveInfo = function () {
  detective['name'] = 'Poirot';
  return printName(detective);
}

console.log(detectiveInfo());
// Should get: Poirot
// because we are still able to change the properties of the object even though it is const.


// Episode 6
const murderer = 'rick';

const outerFunction = function () {
  const murderer = 'marc';

  const innerFunction = function () {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log(`The murderer is: ${ murderer }`);
// Reckon its still: rick. Because although it is re-assigned to marc, it is within a funciton, and const has
// scope of block. and then it likely will get error on the inner funciton as murderer is const.
// so add const in front of line valerie



// Episode 7 - Make up your own episode(s)!
// Make up your own episode which can be whatever you wish and the rest of the class will work out together what happened and what the output will be.
const thingy = { thing_name: 'BitsNBobs', thing_wieght: 34};


var righty = function whatsIt(something) {
  something['thing_name'] = 'ITS ME';
  return something;
};

console.log('What is the name of the thingy1:', thingy.thing_name);
console.log('What is the name of the thingy2:', righty(thingy).thing_name);
