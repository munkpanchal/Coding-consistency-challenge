// var findMedianSortedArrays = function (nums1, nums2) {
//     const newArr = [];
//     let l = 0,
//         r = 0;

//     while (l < nums1.length && r < nums2.length) {
//         if (nums1[l] < nums2[r]) {
//             newArr.push(nums1[l]);
//             l++;
//         } else {
//             newArr.push(nums2[r]);
//             r++;
//         }
//     }
//     while (l < nums1.length) {
//         newArr.push(nums1[l]);
//         l++;
//     }
//     while (r < nums2.length) {
//         newArr.push(nums2[r]);
//         r++;
//     }
//     const mid = Math.floor(newArr.length / 2);

//     return newArr.length % 2 == 0 ? (newArr[mid] + newArr[mid - 1]) / 2 : newArr[mid];
// };

var findMedianSortedArrays = function (nums1, nums2) {
    const newArr = nums1.concat(nums2).sort((a, b) => a - b);
    const mid = Math.floor(newArr.length / 2);
    return newArr.length % 2 == 0 ? (newArr[mid] + newArr[mid - 1]) / 2 : newArr[mid];
};

let nums1 = [1, 2],
    nums2 = [3, 4];
console.log(findMedianSortedArrays(nums1, nums2));
