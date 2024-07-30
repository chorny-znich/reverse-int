module.exports = function reverse(n) {
    let str = String(Math.abs(n));
    const arr = str.split("");
    if (arr.length === 1) {
        return n;
    }
    let result = "";
    const startIndex =
        arr[arr.length - 1] === "0" ? arr.length - 2 : arr.length - 1;
    for (let i = startIndex; i >= 0; i--) {
        result += arr[i];
    }
    return result;
};
