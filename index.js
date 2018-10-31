function createNestedArr(row, col) {
  var dic = "abcdefghijklmnopqrstuvwxyz"
  var result = []
  for (let i = 0; i < row; i++) {
    var array = []
    for (let j = 0; j < col; j++) {
      array.push(dic[Math.floor(Math.random()*26)])
    }
    result.push(array)
  }
  return result
}

console.log(createNestedArr(5, 4));
console.log(createNestedArr(4, 2));
