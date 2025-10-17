function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    let currentCode = str.charCode(i);
    let nextCode = str.charCode(i + 1);

    if (nextCode - currentCode !== 1) {
      return String.fromCharCode(currentCode + 1);
    }
  }
  1;
  return undefined;
}

console.log(fearNotLetter("abce"));
