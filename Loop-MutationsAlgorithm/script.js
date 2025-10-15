/*
Steps:
Convert both strings to lowercase (to ignore case).
Loop through each letter of the second string.
Check if that letter exists in the first string.
If all letters are found, return true. If any letter is missing, return false.
*/

function mutation(arr) {
  let str1 = arr[0].toLowerCase();
  let str2 = arr[1].toLowerCase();
  console.log(str1, str2);

  for (let char of str2) {
    if (!str1.includes(char)) {
      return false;
    }
  }
  return true;
}

console.log(mutation(["hello", "Hello"]));
console.log(mutation(["Alien", "line"]));
console.log(mutation(["hello", "hey"]));
