function createNestedArray(jumlahRow, jumlahCol) {
    const huruf = "qwertyuiopasdfghjklzxcvbnm"
    let output = []
    for (let i = 0; i < jumlahRow; i++) {
        let tmp = []
        for (let j = 0; j < jumlahCol; j++) {
            tmp.push(huruf[Math.floor(Math.random() * huruf.length)])
        }
        output.push(tmp)
    }
    return output
}
console.log(createNestedArray(4, 4))