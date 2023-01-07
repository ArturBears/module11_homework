function sumNumber(a) {
    return function(b) {
        return a + b;
    };
}

let c = sumNumber(5);
console.log( c(0), c(3) );

console.log( sumNumber(3)(2), sumNumber(4)(4), sumNumber(33)(2) );