var prompt = require('prompt-sync')();

class Filme {

    constructor(titulo, ano, genero, duracao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.assistido = false;
        this.avaliacao = null;
    }

    avaliarFilme(avaliacao){
        this.avaliacao = avaliacao;
        console.log(`Nota ${avaliacao} adicionada para o filme ${this.titulo}. `);
    }

    assistidoFilme(){
        this.assistido = true;
    }

    mostraFilme(){
        console.log(`Titulo: ${this.titulo}`);
        console.log(`Ano de lançamento: ${this.ano}`);
        console.log(`Genero: ${this.genero}`);
        console.log(`Duração: ${this.duracao}`);
        console.log(`Assistido: ${this.assistido}`);
        console.log(`Avaliação: ${this.avaliacao}`);
    }

}

var filmes = [];
var op = 0;

while(op != 5){
    console.log('Entre com a opção desejada:\n1) Adicionar filme\n2) Marcar filme como assistido\n3) Avaliar um filme');
    console.log('4) Mostrar informações do filme\n5) Sair do programa');
    op = parseInt(prompt());
    console.log('')

    switch(op){
        case 1:
            titulo = prompt('Insira o titulo do filme: ');
            ano = prompt('Insira o ano de lançamento do filme: ');
            genero = prompt('Insira o genero do filme: ');
            duracao = prompt('Insira o duracao do filme: ');
            const filme = new Filme(titulo,ano,genero,duracao);
            filmes.push(filme);
            console.log(`O filme ${titulo} foi inserido com sucesso`);
            console.log('');
            break;   
        case 2:
            console.log('Qual filme deseja assistir?')
            filmes.forEach((filme, i)  => {console.log(`para ${filme.titulo} digite ${i}`)});
            var valor = prompt();
            filmes[valor].assistidoFilme();
            console.log('Filme marcado como assistido!!')
            console.log('');
            break;
        case 3:
            console.log('Qual filme deseja avaliar?')
            filmes.forEach((filme, i)  => {console.log(`para ${filme.titulo} digite ${i}`)});
            var valor = prompt();
            nota = prompt('Insira a nota do filme: ')
            filmes[valor].avaliarFilme(nota);
            console.log('Filme avaliado!')
            console.log('');
            break;
        case 4:
            filmes.forEach(filme => {filme.mostraFilme()});
            console.log('');
            break;
        case 5:
            break;
        default:
            console.log('Opção invalida, entre com uma opção de 1 a 5')
            console.log('');
            break;
    }
}