// LARGER INTEGER CHECK
        // Variable Declarations
        let input1 = prompt("Please enter an integer:");
        let input2 = prompt("Please enter another integer:");
        let int1 = parseInt(input1);
        let int2 = parseInt(input2);
        let larger_int;

        // Check for larger integer
        alert("Checking for the larger integer...");
        if (int1 > int2) {
            larger_int = int1;
            console.log(`The larger integer is ${larger_int}.`);
            alert(`The larger integer is ${larger_int}.`);
        }
        else if (int2 > int1) {
            larger_int = int2;
            console.log(`The larger integer is ${larger_int}.`);       
            alert(`The larger integer is ${larger_int}.`);
        }
        else {
            console.log("The entered numbers are equal!");       
            alert("The entered numbers are equal!");
        }
        
        // ODD OR EVEN CHECK
        // Variable Declarations
        let input3 = prompt("Try entering another integer:");
        let int3 = parseInt(input3);
        let odd_or_even = int3 % 2;

        // Check if odd or even
        alert("Checking if the integer is odd or even...");
        if (odd_or_even = 0) {
            console.log(`The integer ${int3} is even!`);
            alert(`The integer ${int3} is even!`);
        }
        else {
            console.log(`The integer ${int3} is odd!`);
            alert(`The integer ${int3} is odd!`);
        }        