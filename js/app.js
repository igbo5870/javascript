console.log("Bonjour tous le monde ");
console.log("Opération avec 10 et 2");

function add(a,b){
	return a+b;
}

console.log("Addition: " + add(10,2));

function sub(a,b){
	return a-b;
}

console.log("Soustraction: " + sub(10,2));

function div(a,b){
	if(b != 0){
		return a/b;
	}else{
		console.log("Erreur : impossible de diviser");
	}
}

console.log("Division: " + div( 10,2));

function multi(a,b){
	return a * b;
}

console.log("Multiplication: " + multi(10,2));
console.log("Les opérations sont fini ");