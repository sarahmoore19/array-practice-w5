const findMinimum = arr => {
if (arr.length === 0) return undefined;
let high = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < high) high = arr[i];
  }
  return high;
};
// time: O(n) space: O(1)

const runningSum = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum+= arr[i];
    arr[i] = sum;
  }
  return arr;
};
// time: O(n) space: O(1)

const evenNumOfChars = arr => {
  let count = 0;
  arr.forEach((ele) => {
    if (ele.length % 2 === 0) count++;
  })
  return count;
};
// time: O(n) space: O(1)

const smallerThanCurr = arr => {
  let newArr = [];
  let count;
  for (let i = 0; i < arr.length; i++) {
    count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < arr[i]) count++;
    }
    newArr.push(count);
  }
  return newArr;
};

// time: O(n * n) space: O(n)

const twoSum = (arr, target) => {
  let newObj = {};
  for (let i = 0; i < arr.length; i++) {
  if ((target - arr[i]) in newObj) return true;
  else newObj[arr[i]] = arr[i];
  }
  return false;
};
// time: O(n) space: O(n)

let secondLargest = (arr, n = 2) => {
  if (arr.length < n) return undefined;
  let idx;
  let high;
  for (let i = n; i > 0; i--) {
    high = -Infinity
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > high) {
        high = arr[j];
        idx = j;
      }
    }
    if (i === 1) return high;

    [arr[idx], arr[arr.length - 1]] = [arr[arr.length - 1], arr[idx]];
    arr.pop();
  }
};

// made into a dynamic function, will find nth highest number
// time: O(n) space: O(1)

const shuffle = (arr) => {
  array = [...arr]
  return array.sort(() => Math.random() - 0.5);
};

// time: O(n) space: O(n)

module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
