//function hasTargetSum(array, target) {
  // Write your algorithm here
//  for(let i = 0; i < array.length; i++){
//    for(let j = i + 1; j < array.length; j++){
//      if(array[i] + array[j] === target){
//        return true
//      }
//    }
//  }
//  return false
//}

function hasTargetSum(array, target) {
  const seenNumbers = new Set();
  for (const number of array) {
    const complement = target - number;
    if (seenNumbers.has(complement)) return true;

    seenNumbers.add(number);
  }
  return false;
}

console.log(hasTargetSum([1, 2, 5], 4));

/* 
  Write the Big O time complexity of your function here
  O(n * n) or O(n²)
*/

/* 
  Add your pseudocode here
  initialize function with array and number value

  iterate over the array starting at index 0
    interate over the array but starting at index 1
      if first array index plus second array index equal to target
        return true

*/

/*
  Add written explanation of your solution here
  first, my hasTargetSum function will recieve two arguments, an array and number value(target)
  second, the code will loop through the array
  next, the code will loop through the array but begining on index ahead of the previous loop
  following the previous step, the code will then add the two array values
  finally, the code will execute if statement
  if the two array values equal to the target the code will return true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
