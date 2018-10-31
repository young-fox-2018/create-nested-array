function createNestedArr(rows, cols) {
    let board = []
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < rows; i++) {
        let inner = []
        for (let j = 0; j < cols; j++) {
            let randomAlphabet = Math.floor(Math.random() * alphabet.length)
            inner.push(alphabet[randomAlphabet])
        }
        board.push(inner)
    }
    return board
}

console.log(createNestedArr(5, 4))
console.log(createNestedArr(4, 2))