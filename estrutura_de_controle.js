let numero1 = 1;
let numero2 = 2;
let numero3 = 3;
// utilizando if/ese if/else
if (numero1 > numero2 && numero1 > numero3){
	console.log(numero1)
}

else if (numero2 > numero1 && numero2 > numero3){
	console.log(numero2)
}

else{
	console.log(numero3)
}

//utilizando switch

let key = 10;

switch(key){
	case 1:
		console.log(key);
		break;
	case 5:
		console.log(key);
		break;
	case 10:
		console.log(key);
		break;
	default:
		break;
}


//utilizando for

for (let iterador = 0; iterador < 10; iterador++){
	console.log("valor do iterador = " + iterador)
}

//utilizando while

let valor = 10;

while(valor > 0){
	console.log("Valores do While = " + valor)
	valor--
}


//utilizando do while
let k = 20

do{
	k = k - 1
}while(k);
