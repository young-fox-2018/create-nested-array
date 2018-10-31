function createNestedArr(rows,cols) {
        let output = []
        let dictionary = "0abcdefghijklmnopqrstuvwxyz"
        for (let i = 0; i < rows; i++) {
            let temp = []
            for (let j = 0; j < cols; j++) {
                temp.push(dictionary[Math.floor((Math.random() * 26) + 1)])
            }
            output.push(temp)
        }
        return output
}

// test case
console.log(createNestedArr(5,3))
console.log(createNestedArr(4,2))