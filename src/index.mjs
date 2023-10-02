import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
JS program to find number of even digits in an array of integers
</div>
`;
//create an array function to take in our array of numbers
//filter the array, create another function that says if the numbers is % divisible by 2 with nothing remaining it even.
// % is the modulous opperator. We're keeping the even numbers in the array. length returns the even numbers left in the array.
const evenDigits = (arr) => 
arr.filter(num => num % 2 === 0).length;


console.log(evenDigits([1, 2, 3, 4, 5, 6]));
console.log(evenDigits([2, 2, 2, 2, 2, 2]));
console.log(evenDigits([1, 3, 5, 7, 9, 10, 100]));






//or you can use a for loop
//practice exercise from codebubb on youtube