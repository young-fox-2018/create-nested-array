function randomAlfabet(){
    var text = ''
    var alfabet = 'abcdefghijklmnopqrstuvwxyz'
    for (var i = 0; i < 1; i++){
        text += alfabet.charAt(Math.floor(Math.random() * alfabet.length));
    } 
  return text;
}
randomAlfabet()

function createNestedArr(jumlahRow, jumlahCol){
    var hasil = []
    for(var i = 0; i < jumlahRow; i++){
        hasil.push([])
        for(var j = 0; j < jumlahCol; j++){
            hasil[i].push(randomAlfabet())
        }
    }
    return hasil
}
console.log(createNestedArr(5, 3));
console.log(createNestedArr(4, 2));