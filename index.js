function getChar(){
    let char = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let max = 25
    let min = 0
    let random = Math.floor(Math.random() * (max - min + 1)) + min
    
    return char[random]
}

function createNestedArr(jumlahRow, jumlahCol) {
    var temp = []
    for(i=0; i<jumlahRow;i++){
        temp.push([])
        for(j=0;j<jumlahCol;j++){
            temp[i].push(getChar())

        }
    }

    return temp
}  

console.log(createNestedArr(5,3))
console.log(createNestedArr(3,3))