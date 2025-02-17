class Senai {
    codigo;
    cidade;
    ano_de_construcao;
    quantidade_de_cursos;
    //Dentro de uma classe não precisa da palavra

    //Sempre utilizar função anonima em classe
    
    constructor(codigo, cidade, ano_de_construcao, quantidade_de_cursos) {
        this.codigo = codigo;
        this.cidade = cidade;
        this.ano_de_construcao = ano_de_construcao;
        this.quantidade_de_cursos = quantidade_de_cursos;
        console.log('#Relatório Cadastro');
    }

    dadosEscola() {
        console.log(`O codigo ${this.codigo} pertence a Escola SENAI de ${this.cidade}`);
        console.log(`A escola SENAI de ${this.cidade} foi construida em ${this.ano_de_construcao} e tem ${2025 - this.ano_de_construcao} anos`);
    }
        
}

const escolaA = new Senai (603, 'São Carlos', 2023, 230);
const escolaB = new Senai (608, 'Matão', 1880, 230);

escolaA.dadosEscola();
escolaB.dadosEscola();

if (escolaA.quantidade_de_cursos > escolaB.quantidade_de_cursos ) {
    console.log('#Fim Relatório Cadastro');
    console.log('#Relatório de Cursos');
    console.log(`O SENAI de ${escolaA.cidade} tem mais cursos que Senai de ${escolaB.cidade}.`);
    console.log(`${escolaA.cidade}: ${escolaA.quantidade_de_cursos} vs ${escolaB.cidade}: ${escolaB.quantidade_de_cursos}. `);
    console.log('#Fim Relatório de Cursos');

} else if (escolaB.quantidade_de_cursos > escolaA.quantidade_de_cursos) {
    console.log('#Fim Relatório Cadastro');
    console.log('#Relatório de Cursos');
    console.log(`O SENAI de ${escolaB.cidade} tem mais cursos que Senai de ${escolaA.cidade}.`);
    console.log(`${escolaB.cidade}: ${escolaB.quantidade_de_cursos} vs ${escolaA.cidade}: ${escolaA.quantidade_de_cursos}. `); 
    console.log('#Fim Relatório de Cursos');

} else {
    console.log('#Fim Relatório Cadastro');
    console.log('#Relatório de Cursos');
    console.log('As duas escolas têm a mesma quantidade de cursos.');
    console.log(`${escolaA.cidade}: ${escolaA.quantidade_de_cursos} vs ${escolaB.cidade}: ${escolaB.quantidade_de_cursos}. `);
    console.log('#Fim Relatório de Cursos');
}



