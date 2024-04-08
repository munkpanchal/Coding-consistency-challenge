function isObjectEmpty(obj) {
    /* One line solution */

    // Object.entries(obj).length == 0;

    /* Multiple lines code */
    let count = 0;
    for (let i in obj) {
        count++;
        if (count !== 0) {
            return false;
        } else {
            return true;
        }
    }
    return true;
}

let obj = {};
console.log(isObjectEmpty(obj));
