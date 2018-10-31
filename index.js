
function createNestedArray(jumlahRow, jumlahCol) {

    var result = [];

    for (let row = 0; row < jumlahRow; row++) {
        result.push([])
        for (let col = 0; col < jumlahCol; col++) {
            var alphabet = "abcdefghijklmnopqrstuvwxyz";
            var random = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            result[row].push(random)
        }
    }
    return result;
  }

console.log(createNestedArray(5,3));
console.log(createNestedArray(4,4));
