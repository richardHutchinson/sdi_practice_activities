var two = 2;

function numberChange(two) {
	//Note: the following is short hand for: two = two + 2;
	two += 2;
	
	console.log(two); //this will run the math problem above which changes the value of the variable "two"
}

numberChange(two);

//note: this is only displaying the first occurrence of the variable "two" which is declared at the top of the page.
//console.log(two);