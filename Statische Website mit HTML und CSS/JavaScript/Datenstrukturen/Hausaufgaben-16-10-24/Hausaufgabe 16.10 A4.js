// 4. Zweidimensionale Arrays
matrix = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

function diasumme(matrix) {
    let summe = 0;
    for (let i = 0; i < matrix.length; i++) {
        summe += matrix[i][i];
    }
    return summe;
}

console.log(diasumme(matrix));
console.log("")

function nullEcken(matrix) {
    matrix[0][0] = 0;
    matrix[0][2] = 0;
    matrix[2][0] = 0;
    matrix[2][2] = 0;
    return matrix;
}

console.log(nullEcken(matrix));
console.log("")
