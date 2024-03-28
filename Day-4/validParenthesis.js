var isValid = function (s) {
    const stack = [];
    for (let val of s) {
        if (val === "(") stack.push(")");
        else if (val === "{") stack.push("}");
        else if (val === "[") stack.push("]");
        else if (stack.length === 0 || stack.pop() != val) return false;
    }
    return true;
};

const s = "()[]{}";

console.log(isValid(s));
