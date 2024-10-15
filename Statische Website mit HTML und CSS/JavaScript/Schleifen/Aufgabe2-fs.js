function factorialFor(n) {
    let erg = 1;
    let schritte = "";
    for (let i = 1; i <= n; i++) {
        erg *= i; schritte += (i == 1) ? `${i}` : ` * ${i}`;
    }
    return {erg, schritte};
}

function calculateFactorial() {
    let n = document.getElementById('number').value;
    let { erg, schritte } = factorialFor(n);
    document.getElementById('erg').innerText = `${n}! = ${erg}`;
    document.getElementById('schritte').innerText = `Lösungsweg: ${schritte}`;
}