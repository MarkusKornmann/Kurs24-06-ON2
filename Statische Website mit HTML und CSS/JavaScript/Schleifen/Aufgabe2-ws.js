function BerechnungmitWhile(n) {
    let erg = 1;
    let i = 1;
    while (i <= n) {
        erg *= i; i++;
    }
    return erg;
}

let n = 5;
console.log(`${n}! = ${BerechnungmitWhile(n)}`);