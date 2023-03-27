// const fruits = ["Apple", "Banana", "Orange"];
// const vegetables = ["Cucumber", "Radish"];

// console.log([...fruits, ...vegetables]);

// const developer = {
//   salary: 100000,
//   experience: 4.5,
//   techStack: ["Vue", "HTML", "CSS"],
//   lookingForWork: true,
//   doubleSalary() {
//     this.salary = this.salary * 2;
//     this.lookingForWork = !this.lookingForWork;
//   },
// };

// console.log(developer.salary);
// console.log(developer.lookingForWork);

// developer.doubleSalary();

// console.log(developer.salary);
// console.log(developer.lookingForWork);

// export const evenOrOdd = (number) => {
//   if (number % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// };

// // JS Map method Lesson
// const numbers = [1, 2, 3, 4, 5];
// // const squares = numbers.map((number) => {
// //   return number * number;
// // });
// // New ES6 syntax that acheives the same as above
// // This is only for one line aero-functions
// const squares = numbers.map((number) => number * number);

// console.log(squares);

// //Dynamic Object Properties in ES6
// const favoriteFood = "sushi";

// const goodFoods = {
//   [favoriteFood]: true, // The square brackets around favoriteFood allow the variable definition to be used
// };

// setTimeout, setInterval and cleanInterval Functions in JS
// setTimeout(() => {
//   // Run function once after 2 seconds
//   console.log("I will print 2 seoconds after the progrma starts");
// }, 2000); // time in milliseconds 2000 = 2 seconds

// const interval = setInterval(() => {
//   // Runs the function every 2 seconds
//   console.log("I will print 2 seoconds after the progrma starts");
// }, 2000); // time in milliseconds 2000 = 2 seconds
// //Javascript will run the entire file once it's run, and then keep running the interval

// setTimeout(() => {
//   // Run function once after 10 seconds
//   clearInterval(interval); // Stop Interval from running forever
// }, 10000); // time in milliseconds 10000 = 10 seconds
