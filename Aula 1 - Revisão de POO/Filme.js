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

    const filme1 = new Filme ('Star Wars: Episódio IV', 1977, 'Ficção científica','2h1m');
    const filme2 = new Filme ('Harry Potter e a Pedra Filosofal', 2001, 'Fantasia', '2h32m');
    const filme3 = new Filme ('O Senhor dos Anéis: A Sociedade do Anel', 2001, 'Fantasia','2h58m');

    filme1.avaliarFilme(4.6);
    filme2.avaliarFilme(4.5);
    filme3.avaliarFilme(4.6);

    filme1.assistidoFilme();
    filme3.assistidoFilme();

    filme1.mostraFilme();
    filme2.mostraFilme();
    filme3.mostraFilme();