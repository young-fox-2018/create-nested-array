function createNestedArr(jumlahRow, jumlahCol) {
    // YOUR CODE HERE
    let result = []
    let arr = []
    let dict = 'abcdefghijklmnopqrstuvwxyz'

        for(let j = 1; j <= jumlahRow*jumlahCol; j++) {
            arr.push(dict[Math.floor(Math.random()*25)])
            if(j % jumlahCol === 0) {
                result.push(arr)
                arr = []
            }
        }
        return result
}

console.log(createNestedArr(5,3))
console.log(createNestedArr(4,2))