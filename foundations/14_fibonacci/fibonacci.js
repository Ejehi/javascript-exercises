const fibonacci = function(num) {
    let fib1 = 1;
    let fib2 = 1;

    let fibOfNum;
    if (parseInt(num) < 0) return "OOPS";
    if (parseInt(num) == 0) return 0;
    if (parseInt(num) == 1) return 1;
    if (parseInt(num) == 2) return 1;

    for(let i = 2; i < parseInt(num); i++) {
        fibOfNum = fib1 + fib2;
        fib1 = fib2;
        fib2 = fibOfNum;
    }

    return fibOfNum;
};

// Do not edit below this line
module.exports = fibonacci;
