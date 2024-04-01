var searchRange = function (nums, target) {
    console.log(nums.indexOf(target));
    console.log(nums.lastIndexOf(target));
    return [nums.indexOf(target), nums.lastIndexOf(target)];
};
const nums = [5, 7, 7, 8, 8, 10],
    target = 8;

console.log(searchRange(nums, target));
