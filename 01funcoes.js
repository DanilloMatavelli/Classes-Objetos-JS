// Como fazer as funções

function somar(){
    let v1 = 0;
    let v2 = 0; 
    const resultado = v1 + v2;   
    console.log(resultado);
}

// Invocar a função somar

console.log(somar);

// ---------------------------------------------------------------------------------------------------------

// Parâmetros para o cálculo
function somar(v1, v2){
    const resultado = v1 + v2;
    console.log(resultado);
}

// ---------------------------------------------------------------------------------------------------------

// Retornando o valor do cálculo
function somar(v1, v2){
    const resultado = v1 + v2;
    return resultado
}

// ---------------------------------------------------------------------------------------------------------

// Retornando apenas o valor informado no parâmetro
function somar(v1, v2){
    return v1 + v2;
}

// ---------------------------------------------------------------------------------------------------------

// Criar uma função que receba os valores 1 e 2 de um elemento HTML. Retorne o resultado. 

//Resolução
// Selecionar os elementos 

const valor1 = document.getElementById('valor1').value;
const valor2 = document.getElementById('valor2').value;

//Executar o cálculo.
somar(valor1, valor2); 

//Escrever no HTML
document.getElementById('resultado').textContent = `${somar()}`;

// ---------------------------------------------------------------------------------------------------------

/*
01 - Crie um função que retorne a porcentagem de um valor. 
02 - Crie uma função que retorne o valor de uma compra a prazo com juros
03 - Crie uma função que retorne o valor de uma compra à vista com desconto
*/

//Resolução 01 função normal 

function calcPorcentagem(valor, taxa){
    return valor * (taxa / 100);
}
// Resolução 01 função de seta (arrow function)
let calcPorcentagem = (valor, taxa) =>{
    return valor * (taxa / 100);
}
// Resolução 02
let calcPagPrazo = (valor, taxa) =>{
    return valor + (valor * (taxa / 100));
}


// Resolução 03
 let calcPagVista = (valor, taxa) =>{
    return valor - (valor * (taxa / 100)); 
}

console.log(calcPorcentagem(100, 10));
console.log(calcPagPrazo(100,10));
console.log(calcPagVista(100,10)); 











 







