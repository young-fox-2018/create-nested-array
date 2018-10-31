function createNestedArr(jumlahRow, jumlahCol) {
    const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var resultArr = [];
    
    for (let i = 0; i < jumlahRow; i++) {
        let arr = [];

        for (let j = 0; j < jumlahCol; j++) {
            let random = Math.floor(Math.random() * Math.floor(ALPHABET.length));

            arr.push(ALPHABET[random]);
        }
        resultArr.push(arr);
    }    
    return resultArr;
}

console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));