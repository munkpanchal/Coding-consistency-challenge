var once = function (fn) {
    let firstCall = true;
    return function (...args) {
        if (firstCall) {
            firstCall = false;
            return fn(...args);
        } else {
            return undefined;
        }
    };
};
let fn = (a, b, c) => a + b + c,
    calls = [
        [1, 2, 3],
        [2, 3, 6],
    ];

const fun = once(fn);
console.log(fun(calls[0]));
console.log(fun(calls[1]));
console.log(fun(calls[2]));
