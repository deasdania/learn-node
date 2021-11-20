// function multiply dan add adalah function yang memiliki parameter number dan function

// function multiply
function multiply(number, cb) {
    let resultMultiply = number * 15
    console.log(`Result multiply ${resultMultiply}`);
    cb(resultMultiply, result);
}

// function add
function add(number, cb) {
    let resultAdd = number + 1
    console.log(`Result add ${resultAdd}`);
    cb(resultAdd);
}

// function result untuk log hasil akhir
function result(resultAdd) {
    console.log(`Result multiply & add is ${resultAdd}`);
}


multiply(5, add);

// expected result: 
// Result multiply 75
// Result add 76
// Result multiply & add is 76
