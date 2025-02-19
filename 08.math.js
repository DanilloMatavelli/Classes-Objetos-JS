// //Função anônima para gerar um número aleatório entre 1 e 15

// const gerarNumeroAleatorio = () => {

//     // Math.random() gera um número entre 0 e 1 (exclusivo)
//     let numeroAleatorio = Math.random();
//     console.log(`Sorteio: ${numeroAleatorio}`);
    
//     // Multiplicamos por 15 para obter um número entre 0 e 14 (exclusivo)
//     numeroAleatorio *= 15; // numeroAleatorio = numeroAleatorio * 15
//     console.log(`Multiplicar: ${numeroAleatorio}`);

//     //Math.floor() para arredondar para baixo para um número inteiro
//     numeroAleatorio = Math.floor(numeroAleatorio);
//     console.log(`Arredondar: ${numeroAleatorio}`);

//     // Somamos 1 para obter um número entre 1 e 15 (inclusivo)
//     numeroAleatorio += 1; // numeroAleatorio = numeroAleatorio + 1
//     console.log(`Somar 1: ${numeroAleatorio}`);
   
//     // Retorna o número aleatório
//     return numeroAleatorio;
//   }
  
//   // Atribuindo a Função a uma variável
//   let numeroSorteado = gerarNumeroAleatorio();
  
//   //Exibindo o número sorteado
//   console.log(`Número sorteado: ${numeroSorteado}`);

// ------------------------------------CÓDIGO REFATORADO----------------------------------------------

//Função anônima para gerar um número aleatório entre 1 e 15

// const gerarNumeroAleatorio = (numero) => {

//     // Math.random() gera um número entre 0 e 1 (exclusivo)
//     let numeroAleatorio = Math.random();
//     console.log(`Sorteio: ${numeroAleatorio}`);
    
//     // Multiplicamos por 15 para obter um número entre 0 e 14 (exclusivo)
//     numeroAleatorio *= numero // numeroAleatorio = numeroAleatorio * 15
//     console.log(`Multiplicar: ${numeroAleatorio}`);

//     //Math.floor() para arredondar para baixo para um número inteiro
//     numeroAleatorio = Math.floor(numeroAleatorio);
//     console.log(`Arredondar: ${numeroAleatorio}`);

//     // Somamos 1 para obter um número entre 1 e 15 (inclusivo)
//     numeroAleatorio += 1; // numeroAleatorio = numeroAleatorio + 1
//     console.log(`Somar 1: ${numeroAleatorio}`);
   
//     // Retorna o número aleatório
//     return numeroAleatorio;
//   }
  
//   // Atribuindo a Função a uma variável
//   let numeroSorteado = gerarNumeroAleatorio(15);
  
//   //Exibindo o número sorteado
//   console.log(`Número sorteado: ${numeroSorteado}`);

// ------------------------------------CÓDIGO REDUZIDO----------------------------------------------


//Função anônima para gerar um número aleatório entre 1 e 15

// const gerarNumeroAleatorio = (min = 1, max = 15) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min
// };

const gerarNumeroAleatorio = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
console.log(gerarNumeroAleatorio(200,900)) // Gera um número entre 200 a 900



