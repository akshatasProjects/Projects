# Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should create a function named findLongestWordLength that takes a string as an argument.
The function should return the length of the longest word in the string.

---

longestWord:
It’s a temporary storage variable that keeps track of the longest word found so far as you loop through the list of words.

for (let word of words) {
if (word.length > longestWord.length) {
longestWord = word;
}
}

Step 1:
word = "The"
longestWord is ""

Compare: "The".length (3) > 0 ✅
→ Update longestWord = "The"

Step 2:
word = "quick"

Compare: "quick".length (5) > "The".length (3) ✅
→ Update longestWord = "quick"

Step 3:
word = "brown"
Compare: "brown".length (5) > "quick".length (5) ❌
→ Do nothing

Step 4:
word = "fox"
Compare: "fox".length (3) > "quick".length (5) ❌
→ Do nothing

Step 5:
word = "jumped"
Compare: "jumped".length (6) > "quick".length (5) ✅
→ Update longestWord = "jumped"
