var reduce = function (nums, fn, init) {
    var res = init;

    for (let i in nums) {
        res = fn(res, nums[i]);
    }

    return res;
};
var nums = [1, 2, 3, 4];
fn = function sum(accum, curr) {
    return accum + curr;
};
init = 0;

var res = reduce(nums, fn, init);
console.log(res);
