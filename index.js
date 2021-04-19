// # Declaring Functions 

// #### 1. Multiply - Function Declaration
// * Create a function that multiples a number by another number.

function multiplier (a, b) {
    console.log(a * b);
}

multiplier(5, 2);
multiplier(7, 10);

// #### 2. Multiply - Function Declarations as Values
// * Rework the syntax of the above function so that the function declaration is stored as a value.

const multiplierTwo = function(num1, num2) {
    console.log(num1 * num2);
}

multiplierTwo(3, 5);


// #### 3. Multiply - Arrow Function
// * Rework the syntax of the function declaration so that is uses the arrow function shorthand.

const mutliplierThree = (num1, num2) => { console.log(num1 * num2) }

mutliplierThree(5, 100);



// #### 4. Declarations
// * Create functions (using all three declarations) to check the remainder of division given two numbers. 



function testOne (one, two) {
    console.log(one % two);
}

testOne(2, 3);
testOne(10, 5);

const testTwo = function (one, two) {
    console.log(one % two);
}

testOne(2, 3);
testOne(10, 5);

const testThree = (one, two) => { console.log(one % two) }

testOne(2, 3);
testOne(10, 5);

// Is this correct ??