function getVowelCount(sentence) {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];

  sentence = sentence.toLowerCase();

  for (let char of sentence) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

let vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`"Vowel Count: ${vowelCount}`);

// CONSONANTS
function getConsonantCount(sentence) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let count = 0;

  sentence = sentence.toLowerCase();

  for (let char of sentence) {
    if (consonants.includes(char)) {
      count++;
    }
  }
  return count;
}

let consonantCount = getConsonantCount("Apples are tasty fruits");
console.log(`"Consonant Count: ${consonantCount}`);

// PUNCTUATIONS
function getPunctuationCount(sentence) {
  const punctuations = ".,!?;:-()[]{}\"'–";
  let count = 0;

  for (let char of sentence) {
    if (punctuations.includes(char)) {
      count++;
    }
  }
  return count;
}

// Get word
function getWordCount(sentence) {
  if (sentence.trim() === "") {
    return 0;
  }

  const words = sentence.trim().split(/\s+/);
  return words.length;
}
const wordCount = getWordCount("I love freeCodeCamp");
console.log(`Word Count: ${wordCount}`);
