/* A arrow function é mais concisa, utilizando => em vez da palavra-chave function.
Os parâmetros e o corpo da função são os mesmos. */

// Função normal que soma dois números
function soma(a, b) {
    return a + b;
  }
  
  // Função anônima que soma dois números
  const somaAnonima = function(a, b) {
    return a + b;
  }
  
  // Função de seta que soma dois números
  const somaSeta = (a, b) => a + b;
  
  
  
  
  
  // Função normal que exibe uma saudação
  function saudacao(nome) {
    console.log(`Olá, ${nome}!`);
  }
  
  // Função anônima que exibe uma saudação
  const saudacaoAnonima = function(nome) {
    console.log(`Olá, ${nome}!`);
  }
  
  // Função de seta que exibe uma saudação
  const saudacaoSeta = nome => console.log(`Olá, ${nome}!`);
  
  // Função normal que calcula o quadrado de um número
  function quadrado(x) {
    return x * x;
  }
  
  // Função anônima que calcula o quadrado de um número
  const quadradoAnonimo = function(x) {
    return x * x;
  }
  
  // Função de seta que calcula o quadrado de um número
  const quadradoSeta = x => x * x;
  
  // Função normal que verifica se o número é par
  function ehPar(num) {
    return num % 2 === 0;
  }
  
  // Função anônima que verifica se o número é par
  const ehParAnonimo = function(num) {
    return num % 2 === 0;
  }
  
  // Função de seta que verifica se o número é par
  const ehParSeta = num => num % 2 === 0;
  
  // Função normal que exibe a data e hora atual
  function exibirDataHora() {
    const data = new Date();
    console.log(data.toLocaleString());
  }
  
  // Função anônima que exibe a data e hora atual
  const exibirDataHoraAnonima = function() {
    const data = new Date();
    console.log(data.toLocaleString());
  }
  
  // Função de seta que exibe a data e hora atual
  const exibirDataHoraSeta = () => {
    const data = new Date();
    console.log(data.toLocaleString());
  }
  
  
  
  
  // Testes das funções
  console.log(soma(2, 3));           // 5
  console.log(somaAnonima(2, 3));    // 5
  console.log(somaSeta(2, 3));       // 5
  
  saudacao("João");                 // Olá, João!
  saudacaoAnonima("Maria");         // Olá, Maria!
  saudacaoSeta("Carlos");           // Olá, Carlos!
  
  console.log(quadrado(4));          // 16
  console.log(quadradoAnonimo(4));   // 16
  console.log(quadradoSeta(4));      // 16
  
  console.log(ehPar(4));             // true
  console.log(ehParAnonimo(5));      // false
  console.log(ehParSeta(6));         // true
  
  exibirDataHora();                 // Exibe data e hora atual
  exibirDataHoraAnonima();          // Exibe data e hora atual
  exibirDataHoraSeta();             // Exibe data e hora atual
  
  
  
  
  
  
  