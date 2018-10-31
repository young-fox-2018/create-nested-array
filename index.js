function angka(jumlahRow, jumlahColumn){
    let letterLib = ['a','b','c','d','e','f','g','h','j','i','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let result = []
    
    for(let i = 0; i < jumlahRow; i++){
        let temp = []
        for(let j = 0; j< jumlahColumn; j++){
            let rand = Math.floor(Math.random()*letterLib.length)
            temp.push(letterLib[rand])
        }
        result.push(temp)
    }

    return result
}

console.log(angka(5,5))