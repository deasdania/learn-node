function kali (number, cb) {
    let res = number * number
    console.log(cb(res)); 
}

function tambah (number, cb) {
    let res = number + number
    cb(res, hasil)    
}

function hasil (number){
    // console.log(number);
    return number;
}

tambah(5, kali)


// callback sync memanggil fungsi lain sebagai parameter