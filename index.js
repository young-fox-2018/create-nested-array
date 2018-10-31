
function createNestedArray(jumlahRow, jumlahCol){

    var result = [];
    var kamus = "abcdefghijklmnopqrstuvwxyz";
    // var words = ""
    for(let i = 0; i < jumlahRow; i++){
        // console.log(i)
        result.push([]);
        for(let j = 0; j < jumlahCol; j++){
            // console.log(j)
            result[i].push(kamus[Math.floor(Math.random()*kamus.length)]);
        }
    }
    return result;
}
console.log(createNestedArray(5, 3));
console.log(createNestedArray(4, 2));