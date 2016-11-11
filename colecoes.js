let nomes = [];
//podemos adicionar um elemento no array com o metodo push
nomes.push("Lucas");
//assim como podemos adicionar dois elementos no array
nomes.push("Thais","Tavares")
//podemos adicionar outros elementos, e fazer uma lista com vários tipos
nomes.push(2)
//podemos remover do final com o metodo .pop
nomes.pop()
//e remover do inicio com o metodo shift
nomes.shift()
//também podemos adicionar um elemento no inicio com unshift
nomes.unshift("Robersvaldo")
//e podemos saber o tamanho da lista com o metodo length
nomes.length;


console.log("Tamanho do Array nomes : " + nomes.length)
console.log(nomes)



//Também temos os mapas, onde passamos um chave para cada valor.

let mapa = {
	1 : "Lucas",
	2 : "Tavares",
	3 : "Vasconcelos"
}

for (let x in mapa){
	console.log(mapa[x])
}
