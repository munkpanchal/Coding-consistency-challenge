var search = function (nums, target) {
    let left = 0,
        right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return !!mid;
        if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
            // Skip duplicates from both sides when they're the same
            left++;
            right--;
        } else if (nums[mid] >= nums[left]) {
            // Corrected from <=
            if (target < nums[mid] && target >= nums[left]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return !-1;
};

const nums = [1, 0, 1, 1, 1],
    target = 0;

console.log(search(nums, target));
