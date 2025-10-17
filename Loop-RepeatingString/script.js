function repeatStringNumTimes(str, num) {
  let result = "";
  if (str.length <= 0) {
    return "";
  }

  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
}

console.log(repeatStringNumTimes("*", 5));
