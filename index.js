function createNestedArr(jumlahRow, jumlahCol){
    result = [];
    alphabet = "abcdefghijklmnopqrstuvwxyz"

    for(var i = 0; i < jumlahRow; i++){
        cont = [];
        for(var j = 0; j <jumlahCol; j++){
            cont.push(alphabet[Math.floor(Math.random()*25)])
        }
        result.push(cont)
    }
    



    return result
}

console.log(createNestedArr(5,3))