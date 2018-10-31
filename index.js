function createNestArr(jumahRow,jumlahCol){
    const alphabeth = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n"]
    var result = []
    console.log(randomAlphabet)
    for(var i = 1 ; i <= jumahRow ; i++){
        let arr = []
        for(var j = 1; j <= jumlahCol; j++){
            var randomAlphabet = Math.floor(Math.random()*Math.floor(alphabeth.length))
            arr.push(alphabeth[randomAlphabet])
        }
        result.push(arr)
    }
    return result
}




console.log(createNestArr(5,3))
console.log(createNestArr(4,2))