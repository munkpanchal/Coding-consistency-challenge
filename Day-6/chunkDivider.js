var chunk = function (arr, size) {
    let abc = [];

    for (let i = 0; i < arr.length; i += size) {
        let a = [];
        for (let j = i; j < i + size && j < arr.length; j++) {
            // arr.push;
            a.push(arr[j]);
        }
        abc.push(a);
    }
    return abc;
};
let arr = [1, 9, 6, 3, 2],
    size = 1;

console.log(chunk(arr, size));
