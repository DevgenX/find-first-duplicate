function findFirstDuplicate(array) {
  const newArr = new Set();

  for (const char of array) {
    if (newArr.has(char)) return char;
    newArr.add(char);
  }
  return -1;
}

// type your code here

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
