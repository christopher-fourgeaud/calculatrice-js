//=============================================== Methode 1

var egal = $("#buttonForm");

$("#buttonForm").click(function(){
	var input1=$("#input1").val();
	var input2=$("#input2").val();
	var operator =$("#selectOperation").val();
	var result;

	if (operator === "+") {
		result = add(input1,input2);		
		$("#result").text(result)
	}

	if (operator === "-") {
		result = sub(input1,input2);		
		$("#result").text(result)
	}

	if (operator === "*") {
		result = multi(input1,input2);		
		$("#result").text(result)
	}

	if (operator === "/") {
		result = divide(input1,input2);		
		$("#result").text(result)
	}
	console.log(" le résultat est :" + result);

});

function add (a , b ) {
	return parseInt(a)+parseInt(b);

}

function multi (a , b ) {
	return parseInt(a)*parseInt(b);
}

function sub (a , b ) {
	return parseInt(a)-parseInt(b);
}

function divide (a , b ) {
	return parseInt(a)/parseInt(b);
}

// =============================================== Méthode 2
