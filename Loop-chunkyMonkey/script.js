/*
  Step-by-step logic:
  1. Create an empty array to hold the result (chunks).
  2. Loop through the main array in steps of the given size.
  3. Use .slice(start, end) to get each subarray (chunk).
  4. Push each chunk into the result array.
  5. Return the result.
*/

function chunkArrayInGroups(arr, num) {
  let resultArr = [];

  for (let i = 0; i < arr.length; i += num) {
    let chunk = arr.slice(i, i + num);
    resultArr.push(chunk);
  }

  return resultArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
