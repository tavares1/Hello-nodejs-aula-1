//declarando funções em javascript

function conta(produto,quantidade){
	return produto*quantidade;
}

//é possivel passar uma função dentro de outra função

function imprimir(x){
	console.log(x);
}

imprimir(conta(10,120))


