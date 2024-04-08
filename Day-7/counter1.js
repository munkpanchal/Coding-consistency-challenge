// var createCounter = (n) => () => n++;
var createCounter = function (n) {
    let count = n;
    return function () {
        return count++;
    };
};

let n = 10;
const fn = createCounter(10);
console.log(fn());
console.log(fn());
console.log(fn());
