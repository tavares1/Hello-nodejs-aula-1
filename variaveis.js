//var - escopo de instância, é uma variavel que pode ter seu valor modificado a qualquer instante.

var x = "hello world"
console.log(x)
var x = "ola mundo"
console.log(x)

//let - permite que você declare variaveis limitando seu escopo no bloco,função, ou expressão.
for (let i = 0; i < 10; i++) {
    console.log("valor atribuido a let = " + i); // 1, 2, 3, 4 ... 9
}
//console.log(i) //não acessa o I aqui


//const - declaração de bloco e imutavel. Utlizado na programação funcional.

const z = 2
console.log("valor de const = " +z)
//const i = 3 //teremos um erro, pois a variavel é imutavel.

console.log("///")
