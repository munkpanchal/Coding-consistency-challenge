var searchMatrix = function (matrix, target) {
    let abc = matrix.flat();
    return abc.includes(target);
};
let matrix = [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
    ],
    target = 3;

console.log(searchMatrix(matrix, target));
