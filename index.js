function createNestedArr(row, column) {
    let alphabetsArr = []
    let alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

    for (let i = 0; i < row; i++) {
        let arrInside = [];
        for (let j = 0; j < column; j++) {
            let randomNum = getRandomInt(26)
            arrInside.push(alphabets[randomNum])
        }
        alphabetsArr.push(arrInside);
    }
    
    return alphabetsArr
}

function getRandomInt(maxNumber) {
    return Math.floor(Math.random() * Math.floor(maxNumber))
}

console.log(createNestedArr (5, 3))