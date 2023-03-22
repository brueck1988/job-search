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

export const evenOrOdd = (number) => {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};
