//Cria ambas as matrizes
var m1 = [[4,0],[-1,-1]];
    m2 = [[-1,3],[2,7]];
//Multiplicar matrizes
function multiplicar(m1,m2){
    var l1 = m1.length, c1 = m1[0].length,
        l2 = m2.length, c2 = m2[0].length,
        mm = new Array(l1);

    for (var i = 0; i < 2; ++i){
        mm[i] = new Array(c2)
        for (var r = 0; r < 2; ++r){
            mm[i][r] = 0;
            for (var j = 0; j < 2; ++j){
                mm[i][r] += m1[i][j] * m2[j][r];
            }
        }
    }
    return mm;
}
//print
function imprime(matriz){
    for (var i = 0; i < 2; ++i){
        console.log(matriz[i]);
    }
}
console.log("Primeira Matriz:");
imprime(m1);
console.log("Segundo Matriz:");
imprime(m2);
console.log("Matriz da multiplicacao:");
imprime(multiplicar(m1,m2));