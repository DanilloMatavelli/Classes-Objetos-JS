// Classe é uma definição. Como um objeto deve ser. 

class Senai {
    codigo;
    cidade;
    // Dentro de uma classe não precisa da palavra function. 

    //Sempre utilizar função anonima em classe
    descreverEscola(){
        console.log(`O código ${this.codigo} pertence a escola SENAI de ${this.cidade}`)
    }
        
}

// Instância é uma ocorrência. Criação de um novo objeto, utilizando a palavra reservada NEW. 
// Criando uma instância(uma nova escola)
const senaiArqa = new Senai();
senaiArqa.codigo = 603;
senaiArqa.cidade = 'Araraquara';

const senaiMat = new Senai();
senaiMat.codigo = 145;
senaiMat.cidade = 'Matão';

// Exibindo os dados no console
senaiArqa.descreverEscola();
senaiMat.descreverEscola();