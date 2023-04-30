/* Coding Steps:
The answer to all questions must be printed to your Browser’s console -- using console.log():
1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
*/
    
console.log('Question 1:');

/*---------------------------------------------*/

let ages = [3, 9, 23, 64, 2, 8, 28, 93];            /* ages Array */
console.log('Ages array = ' + ages);                /* Returns: 3, 9, 23, 64, 2, 8, 28, 93. */
 
/* 
2. Programmatically subtract the value of the first element in the array from the value in the last element of the array 
       Do not use numbers to reference the last element, find it programmatically, 
       ages[7] – ages[0] is not allowed! */

console.log('Question 2:');

/*---------------------------------------------*/

console.log('93 - 3 = ' + (ages[ages.length - 1] - ages[0])); /*Should return: 90 (93 - 3 = 90) */

/* 
3. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths). */

console.log('Question 3:');

/*---------------------------------------------*/

const count = ages.push(35);                                            /* Adds age 35 to the array. */
console.log('New ages array is: ' + ages);                      /* New array should be: [3, 9, 23, 64, 2, 8, 28, 93, 35] */
console.log('35 - 3 = ' + (ages[ages.length - 1] - ages[0]));   /*Should return: 32 (35 - 3 = 32) */


/* 
4. Use a loop to iterate through the array and calculate the average age. */

console.log('Question 4:');

/*---------------------------------------------*/

function averageAge(ages) {
    
    let sum = 0; 

    for (let i = 0; i < ages.length; i++){
        sum += ages[i];
    }
    return sum;
}
console.log('The average age is ' + ((averageAge(ages)) / (ages.length)));  /* Average age: 3 + 9 + 23 + 64 + 2 + 8 + 28 + 93 + 35 = 265; 265 / 9 = 29.444444444444444  */


/* 
5. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’. */
 
console.log('Question 5:');

/*---------------------------------------------*/

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];            /* names Array */
console.log('The names in the array are ' + names);             /* displays list of names*/


/* 
6. Use a loop to iterate through the array and calculate the average number of letters per name. */

console.log('Question 6:');

/*---------------------------------------------*/


let avgLetters = 0;

    for (let i = 0; i < names.length; i++){
        avgLetters += names[i].length;
    }
    let avgLettersPerName = avgLetters / names.length;
    console.log(avgLettersPerName);  /* Returns total of 23 letters / 6 elements = 3.833333333*/

/* 
7. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. */

console.log('Question 7:');

/*---------------------------------------------*/


    for (let i = 0; i < names.length; i++) {
        console.log(names.join(' '));                       /* Returns names listed and separated by spaces: Sam Tommy Tim Sally Buck Bob */
    } 
    
    
/* 
8. How do you access the last element of any array? */

console.log('Question 8:');

/*---------------------------------------------*/

console.log('You can access the last element in an array by adding .length - 1 to the end of the array. Ex. console.log(names[names.length - 1]). Returns:  ' 
+ (names[names.length - 1])); /* Expected return is the last element name "Bob". */

/* 
9. How do you access the first element of any array? */

console.log('Question 9:');

/*---------------------------------------------*/

console.log('You can access the first element in an array by printing (names[0]). Ex. console.log(names[0]). Returns:  ' + (names[0])); /* Expected return is the first element in the array "Sam" */

/* 
10. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array. 
/
/ For example:
/ let names = ["Kelly", "Sam", "Kate"]; 	//starting with this array
/ let nameLengths = [5, 3, 4]; 			//create this new array
/
*/

console.log('Question 10:');

/*---------------------------------------------*/

let nameLengths = [];

    for (let i = 0; i < names.length; i++) {
        nameLengths.push(names[i].length);
    }
    console.log(nameLengths);                    /* Returns the following index positions and the letter count for each name in the array. 
 /                                                 [3, 5, 3, 5, 4, 3]
 /                                                 [Sam, Tommy, Tim, Sally, Buck, Bob] */

/* 
11. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.*/

console.log('Question 11:');

/*---------------------------------------------*/


let nameLetters = 0;

    for (let i = 0; i < names.length; i++){
        nameLetters += names[i].length;
    }
    console.log(nameLetters);  /* Adds all numbers 3 + 5 + 3 + 5 + 4 + 3 for a total of 23 letters. */


/* 
12. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’). */

console.log('Question 12:');

/*---------------------------------------------*/

let word = 'help';
let n = 4;

function wordRepeat(word, n) {
    return word.repeat(n);
} console.log(wordRepeat(word, n));     /* Result will be helphelphelphelp */

/* 
13. Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space. */

console.log('Question 13:');

/*---------------------------------------------*/

function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log(fullName('Meila', 'Bolden')); /* Result Meila Bolden due to returning the concatonation of each parameter with ' ' in between. */


/* 
14. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.*/

console.log('Question 14:');

/*---------------------------------------------*/

let numbersArray = [15, 2, 50, 35];

function numbers(numbersArray) {

    let sum = 0;


    for (let i = 0; i < numbersArray.length; i++) {
        sum += numbersArray[i]; 
    } 
    return sum > 100;
}
    console.log(numbers(numbersArray));         /* Answer is true because 15 + 2 + 50 + 35 = 102; 102 > 100. */
  


/* 
15. Write a function that takes an array of numbers and returns the average of all the elements in the array. */

console.log('Question 15:');

/*---------------------------------------------*/

let grades = [90, 85, 82, 100, 78];

function avgNumbers(grades) {
    
    let sum = 0; 

    for (let i = 0; i < grades.length; i++){
        sum += grades[i];
    }
    return sum;
}   
    console.log((avgNumbers(grades)) / grades.length);  /* Adds numbers 90 + 85 + 82 + 100 + 78 = 435; 435 / 5 = 87 average  */


/* 
16. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array. */

console.log('Question 16:');

/*---------------------------------------------*/

    let arr1 = [2, 3, 10];                  /* Avg is 15 / 3 = 5 */
     let arr2 = [0, 2, 4];                   /* Avg is 6 / 3 = 2 */

   function whichAvgIsGreater(arr1, arr2) {

        let sum = 0;

        for (let i = 0; i < arr1.length; i++) {
            sum += arr1[i];
        }   let avg1 = sum / arr1.length;

        let sum1 = 0;

        for (let i = 0; i < arr2.length; i++) {
            sum1 += arr2[i];
        }   let avg2 = sum1 / arr2.length;
            return avg1 > avg2;
    }      

    console.log(whichAvgIsGreater(arr1, arr2));              /* Returns true because arr1 = 15; arr2 = 6; 10 > 6; */

/* 
17. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50. */

console.log('Question 17:');

/*---------------------------------------------*/
let isHotOutside = 'yes';
let moneyInPocket = 11.50;

function willBuyDrink() {
    if ((isHotOutside === 'yes') && (moneyInPocket > 10.50)) {
        return true;
    }
}
    console.log(willBuyDrink(isHotOutside, moneyInPocket));     /* Results in true because isHotOutside is yes and moneyInPocket is > 10.50.  */


/* 
18. Create a function of your own that solves a problem.   In comments, write what the function does and why you created it. */

console.log('Question 18:');

/*---------------------------------------------*/

let dineOutBudget = 60.00;
let totalDineOutCostPerPerson = [6.99, 5.45, 10.99, 12.99, 25.95];

function canWeDineOut() {
    
    let sum = 0;

    for (let i = 0; i < totalDineOutCostPerPerson.length; i++); {
        sum += totalDineOutCostPerPerson[i]; {
            if (dineOutBudget >= totalDineOutCostPerPerson.length) {
                return 'We can dine out for dinner!';
            } else if (dineOutBudget <= totalDineOutCostPerPerson.length){
                return 'We have food at home.';
            }
        }
    }
}   
 console.log(canWeDineOut(dineOutBudget, totalDineOutCostPerPerson));




