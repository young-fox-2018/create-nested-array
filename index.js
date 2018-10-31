function createdNestedArray(row, col) {

    let results = []
    for (let i = 0; i < row; i++) {
        results.push([])
        for (let j = 0; j < col; j++) {
            results[i].push(randomAlphabeth())
        }
    }
return results
}

function randomAlphabeth() {
    const alph = 'abcdefghijklmnopqrstuvwxyz'
    return alph[Math.floor(Math.random() * 25)]
}

console.log(createdNestedArray(4,4))
console.log('----------------------')
console.log(createdNestedArray(5,2))
