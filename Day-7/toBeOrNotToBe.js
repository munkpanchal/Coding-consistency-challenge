var expect = function (val) {
    /* Method  1 */

    // function toBe(innerVal) {
    //     if (val === innerVal) {
    //         return true;
    //     } else {
    //         throw Error("Not Equal");
    //     }
    // }
    // function notToBe(innerVal) {
    //     if (val !== innerVal) {
    //         return true;
    //     } else {
    //         throw Error("Equal");
    //     }
    // }
    // return {
    //     toBe: toBe,
    //     notToBe: notToBe,
    // };

    /* Method  2 */
    return {
        toBe: (innerVal) => {
            if (val === innerVal) {
                return true;
            } else {
                throw Error("Not Equal");
            }
        },
        notToBe: (innerVal) => {
            if (val !== innerVal) {
                return true;
            } else {
                throw Error("Equal");
            }
        },
    };
};

const res = expect(5);
console.log(res.notToBe(3));
