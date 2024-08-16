const makeChange = (c) => {
  // your name here
	 const result = {
        q: 0, // quarters
        d: 0, // dimes
        n: 0, // nickels
        p: 0  // pennies
    };

    // Calculate quarters
    result.q = Math.floor(c / 25);
    c = c % 25;

    // Calculate dimes
    result.d = Math.floor(c / 10);
    c = c % 10;

    // Calculate nickels
    result.n = Math.floor(c / 5);
    c = c % 5;

    // Remaining amount is all pennies
    result.p = c;

    return result;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
