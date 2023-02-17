# JavaScript-Operators-Control-Flow-assignment

## List the symbols for each of the below Javascript operators
1. Arithmetic Operators

    + Addition
    - Subtraction
    * Multiplication
    ** Exponentiation 
    / Division
    % Modulus (Remainder)
    ++ Increment
    -- Decrement

2. Assignment Operators
    = 
    += Addition assignment
    -= Subtraction assignment
    *= Multiplication assignment
    /= Division assignment
    %= Remainder assignment
    **= Exponentiation assignment
    &&= Logical AND assignment
    ||= Logical OR assignment
    ??= Nullish coalescing assignment

3. Comparison Operators

    ==  Equal
    !=  Not equal
    === Strict equal
    !== Strict not equal
    >   Greater than
    >=  Greater than or equal
    < Less than
    <= Less than or equal

4. Logical Operators

    && Logical AND
    || Logical OR
    !  Logical NOT   

5. Bitwise Operators

    &  Bitwise AND
    |  Bitwise OR
    ^  Bitwise XOR
    ~  Bitwise NOT
    << Left shift
    >> Right shift
    >>>Zero-fill right shift

## For each JavaScript Operator, write 2 examples.
1. Arithmetic Operators
    
    console.log(2**3);   //output is 8
    console.log(5 + 10); //output is 15


2. Assignment Operators

    let y = 3;            //y has been assigned the value of 3
    console.log(y *= 3);  // output is 9

    let w = 20;
    console.log( w /= 4);  //output is 5  

3. Comparison Operators
    
    let a = 5;
    console.log( 5 == a);   //output is true

    console.log(a === "five")  //returns false


4. Logical Operators

    let b = 6;
    let c = 4;

    console.log(b > 0 && c > 8)    //output is false

    console.log(b > 0 || c > 8)    //output is true

5. Bitwise Operators

    let y = 6;
    let x = 3;
    let w = 4;

    console.log(~y);   //output is -7

    console.log(x << w);    //output is 48




What is the result when the following program is executed?


Write a program that takes a positive number (num) and finds the power of 2 nearest to that number. The program stores the resulting value to pwr. Then you log the answer in this format: 
“The number (pwr) is the power of 2 nearest to (num).”

If there are two candidate values, display the smaller one. For example, 2 and 4 4 are both the powers of 2 nearest to 3. The function should display 2 because it’s smaller than 4.

For example,
If num = 40, pwr = 32. Then you log to your console in this format:
“The number 32 is the power of 2 nearest to 40.”

If num = 50, pwr = 64.. Then you log to your console in this format:
“The number 64 is the power of 2 nearest to 50.”
