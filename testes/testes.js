//1.    Introdução ao objeto Math
console.log(Math.PI); //Valor de PI
console.log(Math.E); //Constante de Euler
console.log(Math.SQRT2); //Raiz quadrada de 2

//2. Arredondamente de Valores
console.log(Math.round(4.4)); //Arredonda para o mais próximo(5)
console.log(Math.floor(4.6)); //Arredonda para Baixo
console.log(Math.ceil(4.1)); //Arredondar para cima

//3. Função para arredondar troco para multiplos de 5 centavos
const arredondarTroco = (valor) => Math.round(valor  * 20) / 20;
console.log(arredondarTroco(2.87)); //2.85

//4. Valores Aleatorios
console.log(Math.random()) //Número entre 0 e 1

//Valores aleatorios entre 1 a 10
const numeroSorteado = () => Math.floor(Math.random() * 10) + 1;
console.log(numeroSorteado());

// Sorteio do Dado
const SorteiaDado = () => Math.floor(Math.random() * 6) + 1;
console.log(SorteiaDado());

//5 Potênciq, Raiz Quadrada e Módulo
console.log(Math.pow(2, 3)); // Potência 2³ = 8
console.log( 2 ** 3);
console.log(Math.sqrt(25)); // Raiz Quadrada de 25
console.log(Math.abs(-50)); // Valor absoluyto de -50

// Cálculo de montante em juros compostos
const calcularMontante = (capital, taxa, meses) => capital * Math.pow(1+taxa, meses);
console.log(calcularMontante(1500, 0.05 ,5)); //Montante Final

//6. Encontrando o Maior e Menor Número
console.log(Math.max(25, 32, 18, 27)); //Maior Número(32)
console.log(Math.min(25, 32, 18, 27)); // Menor Número(19)

//7. Determinar temperatua máxima e mínima da semana
const temperatura = [22, 18, 25, 30, 21, 19, 27, 45];
console.log(Math.max(...temperatura)); // 30
console.log(Math.min(...temperatura)); // 18

// 7. Número Aleatório Par ou Impar
const numeroAleatorio = () => {
    let numero = Math.floor(Math.random() * 10) + 1;
    console.log(`Numero: ${numero} - ${numero %2 === 0 ?  "Par" : "Impar"}`)
}
console.log(numeroAleatorio)

// const numeroAleatorio = () => {
//     let numero = Math.floor(Math.random() * 10) + 1;
//     console.log(`Numero: ${numero} - ${numero % 2 === 0 ? "Par" : "Impar"}`);
//     console.log(numeroAleatorio)
// };
