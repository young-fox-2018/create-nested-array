const cratedNestedArr = (rows, cols) => {
    let kamus = 'abcdefghijklmnopqrstuvwxyz',
        board = []
    for (let i = 0; i < rows; i++) {
        let line = []
        for (let j = 0; j < cols; j++) {
            let idx = Math.floor(Math.random() * 26) + 1
            line.push(kamus[idx])
        }
        board.push(line)
    }
    return board
}

console.log(cratedNestedArr(5, 3))
console.log(cratedNestedArr(4, 2))