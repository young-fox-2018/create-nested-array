function createNestedArray(jumlahRow, jumlahCol) {
    
    var result = [];

    for (let i = 0; i < jumlahRow; i++) {
        result.push([])
        for (let j = 0; j < jumlahCol; j++) {
            var alphabet = "abcdefghijklmnopqrstuvwxyz";
            var random = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            result[i].push(random)            
        }
    }
    return result;
  }
  
  console.log(createNestedArray(5,3));
  console.log(createNestedArray(4,2));