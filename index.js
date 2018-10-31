function createNestedArr(row,col){
    let result = []
    let randomHuruf
    
    for(let i=0 ; i<row ; i++){
        let arrayRow = []
        for(let j=0 ;j<col ;j++){
            randomHuruf = Math.floor(Math.random() * 26) + 97 //random number between 97-122
            arrayRow.push(String.fromCharCode(randomHuruf)) //convert to ASCII code a(97) - z(122)
        }
        result.push(arrayRow)
    }
    return result
}

console.log(createNestedArr(5,3))
console.log(createNestedArr(4,2))