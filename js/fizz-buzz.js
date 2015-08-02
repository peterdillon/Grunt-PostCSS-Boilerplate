for (i = 1; i <= 30; i++) {
	 var isModulus = (i % 3);
     if (!isModulus) { console.log( i + " Fizz"); }
     else if (i % 5 === 0) { console.log( i + " Buzz"); }
     else if (i % 15 === 0)  { console.log( i + " Fizz-Buzz"); }
     else { console.log(i); }
}

