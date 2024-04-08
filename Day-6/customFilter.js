var filter = function (arr, fn) {
    const newArr = new Array();

    for (let i in arr) {
        if (fn(arr[i], Number(i))) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
};

var arr = [1, 2, 3],
    fn = function firstIndex(n, i) {
        return i === 0;
    };
const res = filter(arr, fn);
console.log(res);
