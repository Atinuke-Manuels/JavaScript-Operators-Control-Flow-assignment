// 3. Bolatito just got admitted to Greenfield High School as an Arts student. To commence her studies, 
// she needs to know the subjects she will be taking as an Arts student. 
// All students have to take the General subjects.
// 	The subjects for each class group are as follows:
// 	Science Subjects - Physics, Chemistry, Biology, Technical Drawing 
// Social Science Subjects - Accounting, Commerce, Marketing, Geography
// Arts Subjects - Government, Economics, Literature, History
// General Subjects - English, Mathematics

// Using if…else conditional statement, write a program that will help Bolatito 
// determine the subjects she will be taking for the session using her class group. Also, in the
//  case of an invalid class group, your output should be the General subjects. 


//All available subjects per classGroup
let Sciences = "Physics, Chemistry, Biology, Technical Drawing ";
let Social_Sciences = "Accounting, Commerce, Marketing, Geography";
let Arts = "Government, Economics, Literature, History";
let General = "English, Mathematics";


// //Damilola's department
let studentCourse = "Arts";

//Conditional statement.
if (studentCourse == "Arts") 
{
    console.log(Arts + ", " + General);
}
 else if(studentCourse == "Sciences") 
{
    console.log(Sciences + ", " + General);
}
else if (studentCourse == "Social_Sciences")
{
    console.log(Social_Sciences + ", " + General);
}
else
{
    console.log(General);
}


// 4. What is the result when the following program is executed?

for (let i = 1; i < 20; i+= 7){
    console.log(i);
}

//OUTPUT are 1, 8, 15


// 5. Write a program that takes a positive number (num) and finds the power of 2 nearest to that number. 
// The program stores the resulting value to pwr. Then you log the answer in this format: 
// “The number (pwr) is the power of 2 nearest to (num).”

//Declare the needed variables.
let num = 10;
power = 2;

//A function to get the nearest power of 2
pwr = Math.pow(num,power);

console.log(pwr +" is the power of 2 nearest to "+ num +".");


