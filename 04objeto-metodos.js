// Método é uma função dentro de um objto
const senai = {

    codigo: 603,
    cidade: 'Araraquara',

    descreverEscola: function(){
        // A palavra reservada this refere ao objeto no contexto atual. É usada para acessar  a variavel
        console.log(`O código ${this.codigo} pertence a escola SENAI de ${this.cidade}`)
    }
};

senai.descreverEscola();
senai.codigo = 339;
senai.cidade = 'Piracicaba';
senai.descreverEscola();

// //Acessando os dados de forma dinamica

console.log(senai['codigo']); //Através de uma coleção

console.log(senai.codigo); //Através do objeto



