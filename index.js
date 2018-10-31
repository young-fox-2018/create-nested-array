function createNestedArr(row, col) {
    const dict = 'abcdefghijklmnopqrstuvwxyz'
    let result = []
    for (let i = 0; i < row; i++) {
        let arr = []
        for (let j = 0; j < col; j++) {
            const random = Math.floor(Math.random() * dict.length)
            arr.push(dict[random])
        }
        result.push(arr)       
    }
    return result
}

console.log(createNestedArr(5, 3))
console.log(createNestedArr(4, 2))