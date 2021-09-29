// Codigo para criar uma lista e ordena-la
// cria lista e valores dentro dela 
let array = [];
function lista (tam){
    for(i = 0; i<tam; i++){
        numero = Math.round(Math.random()*100)
        array.push(numero);
    }
    imprime(array);
}
// imprime lista antes da ordenação
console.log("Antes da ordenação:")
function imprime(numero){
    console.log(numero);
}
//imprime lista depois da ordenação
function imprime2(numero){
    console.log(numero);
}
// função ordenação
function ordena(vetor){
    for(var i= 0;i<vetor.length; i++){
        if(vetor[i]>vetor[i+1]){
            let temp = vetor[i];
            vetor.splice(i,1);
            vetor.push(temp);
            i=0;
        }
        else{
            i+=1;
        }
    }
    console.log("Depois da ordenação:")
    imprime2(vetor); 
}
lista(5)
ordena(array)