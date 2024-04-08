Array.prototype.last = function () {
    return this.length > 0 ? this[this.length - 1] : -1;
};
const arr = [];
console.log(arr.last()); // 3
