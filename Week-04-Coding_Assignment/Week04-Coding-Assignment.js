/* Question 1: Create and array with the following values: 3, 9, 23, 64, 2, 8, 28, 93. */

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

/*Subtracting the value of the first element (3) in the array from the last element (93) */

console.log('Step 1: 93 - 3 = ' + (ages[ages.length - 1] - ages[0])); /*Should return: 90 (93 - 3 = 90) */

/* Adding a new age to the array and repeating the previous step to ensure that the code is dynamic. */

const count = ages.push(35);
console.log(ages); /* New array should be: [3, 9, 23, 64, 2, 8, 28, 93, 35] */
console.log('Step 2: 35 - 3 = ' + (ages[ages.length - 1] - ages[0])); /*Should return: 32 (35 - 3 = 32) */

/* Use a loop to iterate through the array and calculate the average age. */

function averageAge(ages) {
    
    let sum = 0; 

    for (let i = 0; i < ages.length; i++){
        sum += ages[i];
    }
    return sum;
}
console.log('Step 3: The average age is ' + (averageAge([3, 9, 23, 64, 2, 8, 28, 93, 35]) / 9));  /* Average age: 3 + 9 + 23 + 64 + 2 + 8 + 28 + 93 + 35 = 265; 265 / 9 = 29.444444444444444  */
console.log('Step 3: The average age is ' + (averageAge([i]) / (ages[ages.length - 1])));  /* Average age: 3 + 9 + 23 + 64 + 2 + 8 + 28 + 93 + 35 = 265; 265 / 9 = 29.444444444444444  */

/* Array of names: "Sam", "Tommy", "Tim", "Sally", "Buck", "Bob". Get average letters per name. */

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

function averageLettersPerName(names) {

    for (let i = 0; i < names.length; i++){
        sum += names[i];
    }

}


