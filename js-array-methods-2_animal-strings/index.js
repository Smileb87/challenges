console.clear();

const animalStrings = [
  "cat",
  "dog",
  "elephant",
  "rabbit",
  "lion",
  "tiger",
  "horse",
  "giraffe",
  "zebra",
  "penguin",
  "polar bear",
  "panda",
  "koala",
  "kangoroo",
  "monkey",
  "sloth",
  "hippo",
  "rhino",
];

const hippoExists = animalStrings.includes("hippo");

const catStartingFromIndexFiveExists = animalStrings.slice(5).includes("cat");

const firstAnimalStartingWithLetterP = animalStrings.find(animal => animal.startsWith("p"));

const indexOfGiraffe = animalStrings.findIndex(animal => animal === "giraffe");

const animalsSortedAlphabetically = animalStrings.slice().sort();

const anyAnimalEndsWithLetterZ = animalStrings.some(animal => animal.endsWith("z"));

const everyAnimalHasMoreThanTwoLetters = animalStrings.every(animal => animal.length > 2);

const sumOfAllAnimalCharacters = animalStrings.reduce((sum, animal) => sum + animal.length, 0);

export {
  hippoExists,
  catStartingFromIndexFiveExists,
  firstAnimalStartingWithLetterP,
  indexOfGiraffe,
  animalsSortedAlphabetically,
  anyAnimalEndsWithLetterZ,
  everyAnimalHasMoreThanTwoLetters,
  sumOfAllAnimalCharacters,
};
