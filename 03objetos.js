/*

Declaração de um objeto de forma literal.

Objeto é uma coleção de variáveis. 

*/


// Declaração de um objeto. Chave: valor;
const senai = {
    
    codigo: 603,
    cidade: 'Araraquara',
};

const pessoa = {
    nome:'Ivo', 
    idade: 43,
    altura: 1.82,
    peso: 102,
};

// Exibir no console todos os dados do objeto

console.log(`O ${pessoa.nome} tem ${pessoa.idade} anos de idade é instrutor no SENAI  de ${senai.cidade} de código nº ${senai.codigo}.`);


//Para acessar um valor, basta chamar o objeto.chave e ele exibirá o valor.

console.log(senai.codigo);
console.log(senai.cidade);
console.log(pessoa);
console.log(senai);













// -----------------------------------------------------------
//  Incrementar dados ao objeto de forma dinâmica
console.log(senai);
senai.curso = 'Desenvolvimento de Sistemas';
console.log(senai);
console.log(`Curso adicionado: ${senai.curso}`);

senai.curso = 'Mecatrônica';
pessoa.nome = 'Alex';
console.log(`O ${pessoa.nome} faz um curso de ${senai.curso} no SENAI de ${senai.cidade}.`)

// // // Excluir um valor de um objeto 
// delete senai.curso;
// delete pessoa.nome;
// console.log(`Curso apagado.`);
// console.log(senai);
// console.log(pessoa);









