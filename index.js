function createNestedArray(jumlahRow, jumlahCol){
    const dictionary = "abcdefghijklmnopqrstuvwxyz"
    const result = []

    for(let i = 0; i < jumlahRow; i++){
        result.push([])
        for(let j = 0; j < jumlahCol; j++){
            result[i].push(dictionary[Math.floor(Math.random() * dictionary.length)])
        }
    }

    return result
}

console.log(createNestedArray(5, 3))
console.log(createNestedArray(4,2))