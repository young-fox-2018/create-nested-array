var res = []

function createNestedArr(row, col){
    var arr = []
    const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var arrRow = 0 ; arrRow < row ; arrRow++){
        res.push(arr)
        for(let arrCol = 0; arrCol < col ; arrCol++){
            let randAbc = abc.charAt(Math.floor(Math.random() * abc.length))
            res[arrRow].push(randAbc)
        }
        arr = []
    }
    return res
}



// console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));