function main() {
  console.log(isUnique(testString)); // false
  console.log(isUnique(testString2)); // true

  console.log(isUniqueWithDataStructures(testString)); // false
  console.log(isUniqueWithDataStructures(testString2)); // true
}

main();

// Is Unique
// Implement an algorithm to determine if a string has all unique characters.

const testString = "abcdefg";
const testString2 = "abcdbfg";

function isUnique(str) {
  const lens = str.length;
  let hasRepeated = false;

  // Loop through the string
  for (let i = 0; i <= lens; i++) {
    let currentLetter = str[i];

    // Loop through the string (displaced by 1)
    // This compares the current letter with the rest of the string
    for (let j = i + 1; j <= lens; j++) {
      if (str[j] === currentLetter) {
        hasRepeated = true;
        break;
      }
    }

    if (hasRepeated) break;
  }

  return hasRepeated;
}

function isUniqueWithDataStructures(str) {
  const initialLens = str.length;
  const arrLens = new Set(str.split("")).size; // The set function will remove any duplicates from the string

  return initialLens === arrLens;
}
