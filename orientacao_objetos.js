//utilizando conceito de POO com JavaScript

class Aluno{
	constructor (nome,matricula,serie,media){
		this.nome = nome;
		this.matricula = matricula;
		this.serie = serie;
		this.media = media;
	}

	dados_aluno(){
		console.log("Nome: " + this.nome +"\nMatricula: "+this.matricula +"\nSerie: "+this.serie + "\nMedia: "+this.media)
	}

	modificar_matricula(new_matricula){
		this.matricula = new_matricula;
	}

}


class AlunoTop extends Aluno{
	constructor(nome,matricula,serie,media,turma_especial){
		super(nome,matricula,serie,media)
		this.turma_especial = turma_especial;
	}
}
