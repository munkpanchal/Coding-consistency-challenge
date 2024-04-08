var map = function (arr, fn) {
    let newArr = new Array(arr.length);
    for (let i in arr) {
        newArr[i] = fn(arr[i], Number(i)); // i will treated here as a string as for-in loop make it object and key in object are string
    }
    return newArr;
};

var arr = [1, 2, 3],
    fn = function plusone(n) {
        return n + 1;
    };
const res = map(arr, fn);
console.log(res);
