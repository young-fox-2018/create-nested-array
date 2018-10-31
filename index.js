"use strict"

function createNestedArr(row, col) {
    let alfabet = "abcdefghijklmnopqrstufwxyz"
    let board = []

    for (let i = 0; i < row; i++) {
        let inner = []
        for (let j = 0; j < col; j++) {
            let index = Math.floor((Math.random() * alfabet.length));
            inner.push(alfabet[index])
        }
        board.push(inner)
    }
    return board

}
console.log(createNestedArr(5, 3));
