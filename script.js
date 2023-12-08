const extendHex = (shortHex) => {
  // write your code here
	let i = shortHex.length - 3, isCapital = false;
	let output = "#";
	while(i < shortHex.length){
		let ascii = shortHex[i].charCodeAt[0];
		if(acii >= 60 && ascii <= 90){
			isCapital = true;
		}

		output += shortHex[i] + shortHex[i];
	}

	return isCapital ? output.toUppercase() : output;

};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));

