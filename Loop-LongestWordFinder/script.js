function findLongestWordLength(str) {
  let words = str.split(" ");
  let longestWord = "";
  console.log(words);

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord.length;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
