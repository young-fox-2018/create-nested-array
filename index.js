function nested(row, col) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var result = [];
    for (let i = 0; i < row; i++) {
        result.push([]);
        for (let j = 0; j < col; j++) {
            result[i].push(alphabet[Math.floor(Math.random() * 24) + 1]);
        }
    }
    return result;
}
console.log(nested(5, 3));
console.log(nested(4, 2));