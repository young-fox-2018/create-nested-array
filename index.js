function acak(){
  var text = '';
  var abzad = 'abcdefghijklmnopqrstuvwxyz'

  // for (var i = 0 ; i < abzad.length-1 ; i++){
  text += abzad.charAt(Math.floor(Math.random() * abzad.length))
  //}
  return text
}

function createNestedArr(jumlahRow, jumlahCol){
  var result = []

  for(var i = 1 ; i <= jumlahRow ; i++){
    var arr = []
    for(var j = 1 ; j <= jumlahCol; j++){
      arr.push(acak())
    }
    result.push(arr)
  }
  return result
}

console.log(createNestedArr(5,3))
console.log(createNestedArr(4,2))