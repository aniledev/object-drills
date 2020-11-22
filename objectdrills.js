// 1. Object initializers and methods
("use strict");
const loaf = {
  flour: 300,
  water: 210,
  hydration: function () {
    return (this.water / this.flour) * 100;
  },
};

console.log(loaf.hydration());

//2. Iterating over an object's properties
("use strict");
const newObject = {
  foo: 1,
  bar: 2,
  fum: 3,
  quux: 4,
  spam: 5,
};

for (const property in newObject) {
  console.log(`${property}: ${newObject[property]}`);
}

//3. Arrays in objects
("use strict");
const eat = {
  meals: [
    "breakfast",
    "second breakfast",
    "elevenses",
    "lunch",
    "afternoon tea",
    "dinner",
    "supper",
  ],
};

console.log(eat.meals[3]);

//4. Arrays of objects
const obj1 = {
  name: "Tyanna",
  jobTitle: "Boss",
};

const obj2 = {
  name: "Aisha",
  jobTitle: "Trainer",
};

const obj3 = {
  name: "Jocelyn",
  jobTitle: "Caterer",
};

const objectList = [obj1, obj2, obj3];

function loopObjects() {
  for (let i = 0; i < objectList.length; i++) {
    // accessing the array index
    for (const property in objectList[i]) {
      //applying a for in loop to each object
      console.log(`${property}: ${objectList[i][property]}`);
    }
  }
}

loopObjects();

function loopObjects() {
  for (let i = 0; i < objectList.length; i++) {
    // accessing the array index
    for (const property in objectList[i]) {
      //applying a for in loop to each object
      console.log(`${property}: ${objectList[i][property]}`);
    }
  }
}

//5. Properties that aren't there
obj2.boss = "Tyanna";
obj3.boss = "Tyanna";

function reportsTo() {
  for (let i = 0; i < objectList.length; i++) {
    // accessing the array index and the object

    if (objectList[i].boss === undefined) {
      console.log(
        `${objectList[i].jobTitle} ${objectList[i].name} doesn't report to anybody.`
      );
    } else {
      console.log(
        `${objectList[i].jobTitle} ${objectList[i].name} reports to ${objectList[i].boss}.`
      );
    }
  }
}

reportsTo();

const cipher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5,
};

// 6. Cracking the code
function decode() {
  //   for (let i = 0; i < cipher.length; i++)
  let word = "cycle";
  for (const property in cipher) {
    if (word[0] == `${property}`) {
      console.log(cipher[`${property}`]);
      console.log(word[cipher[`${property}`] - 1]); // word[4 - 1]
    }
  }
}

decode();

//COME BACK TO THIS ONE
function decodeWords() {
  let sentence = "cycle bike apple laptop";
  let answer = "lkp ";

  let separates = sentence.split(" ");
  console.log(sentence.split(" ")); // cycle...
  console.log(separates); // cycle...

  let single = sentence.split(" ")[1];
  console.log(sentence.split(" ")[1]); // bike
  console.log(single); // bike

  for (let i = 0; i < separates.length; i++) {
    let word = separates[i];
    let arr = [];
    // console.log(separates.length); = 4
    for (const property in cipher) {
      if (word[0] == `${property}`) {
        console.log(cipher[`${property}`]);
        console.log(word[cipher[`${property}`] - 1]); // word[4 - 1]  // lkp how to get this to print as one array not separate console logs
      }
    }
  }
}

decodeWords();

// 7. LORD OF THE RINGS FACTORY FUNCTIONS

//Write a factory function called createCharacter that could appropriately build characters from LOTR that have the following attributes:

// ===============================================================================================
// | Name                      | Nickname    | Race       | Origin         | Attack   | Defense  |
// -----------------------------------------------------------------------------------------------
// | Gandalf the White         | gandalf     | Wizard     | Middle Earth   | 10       | 6        |
// -----------------------------------------------------------------------------------------------
// | Bilbo Baggins             | bilbo       | Hobbit     | The Shire      | 2        | 1        |
// -----------------------------------------------------------------------------------------------
// | Frodo Baggins             | frodo       | Hobbit     | The Shire      | 3        | 2        |
// -----------------------------------------------------------------------------------------------
// | Aragorn son of Arathorn   | aragorn     | Man        | Dunnedain      | 6        | 8        |
// -----------------------------------------------------------------------------------------------
// | Legolas                   | legolas     | Elf        | Woodland Realm | 8        | 5        |
// -----------------------------------------------------------------------------------------------

("use strict");
function createCharacter(name, nickname, race, origin, attack, defense) {
  // could create a const variable that defines valid strings for each parameter
  // could then define if statements that throw an error when the parameter does not match the valid types
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe: function () {
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    },
    evaluateFight: function (character) {
      if (character["defense"] > this.attack) {
        let x = 0;
        let y = 0;
      } else {
        let x = character["defense"] - this.attack;
        let y = character["attack"] - this.defense;
      }
      return `Your opponent takes ${x} damage and you receive ${y} damage.`;
    },
  };
}

const characters = [
  // using array literal syntax to create an array of characters that calls your factory functions for each charaer in the table with the above relevant parameters

  createCharacter(
    "Gandalf the White",
    "gandalf",
    "Wizard",
    "Middle earth",
    10,
    6
  ),
  createCharacter("Bilbo Baggins", "bilbo", "Hobbit", "The Shire", 2, 1),
  createCharacter("Frodo Baggins", "frodo", "Hobbit", "The Shire", 3, 2),
  createCharacter(
    "Aragorn son of Arathorn",
    "aragorn",
    "Man",
    "Dunnedain",
    6,
    2
  ),
  createCharacter("Legolas", "legolas", "Elf", "Woodland Realm", 8, 5),
];

console.log(`this is an array of ${characters}`); // this is me just checking my work as I go, solution did not call for this

characters.push(
  // using array literal syntax to create an array of characters that calls your factory functions for each charaer in the table with the above relevant parameters
  createCharacter("Arwen Undomiel", "arwen", "Half-Elf", "Rivendell", 7, 4)
);

let found = characters.find(
  (character) =>
    // Using the .find() function, retrieve your character nicknamed aragorn from characters and then call his describe method.
    character["nickname"] == "aragorn"
);
found.describe(); // review with mentor. why am i getting the error i'm getting with found.evaluateFight();

// Using the .filter() function, create a new array from characters that ONLY contains characters of the race Hobbit.
let hobbits = characters.filter((character) => character["race"] === "Hobbit");
console.log(hobbits); // also me checking me code, not required
// Using the .filter() function, create a new array from characters that ONLY contains characters with attack value above 5.
let attackGreaterThanFive = characters.filter(
  (character) => character["attack"] > 5
);
console.log(attackGreaterThanFive); // checking the above code
