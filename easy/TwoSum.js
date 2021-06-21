/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var currentIndex = -1;
  var result = [];
  while (result.length === 0 && nums.length > 1) {
    var currentItem = nums.shift();
    currentIndex++;

    for (let [i, e] of nums.entries()) {
      if (currentItem + e === target) {
        result = [currentIndex, i + currentIndex + 1];
        break;
      }
    }
  }
  return result;
};

var nums = [2, 7, 11, 15];
var target = 26;
twoSum(nums, target);
