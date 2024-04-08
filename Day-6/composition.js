var compose = function (functions) {
    /* Without reduce */
    // return function (x) {
    //     functions = functions.reverse();
    //     for (let fn of functions) {
    //         x = fn(x);
    //     }
    //     return x;
    // };
    /* With reduce */

    const fn = (acc, f) => f(acc);
    return function (x) {
        return functions.reduceRight(fn, x);
    };
};

var functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x],
    x = 4;
const fn = compose(functions);
console.log(fn(x));
