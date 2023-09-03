const { log } = require("console");
const inquirer = require("inquirer");

console.log("**************************");
console.log("*       EMPLOYEE         *");
console.log("*      MANAGER APP       *");
console.log("*                        *");
console.log("**************************");
inquirer.prompt([
  {
    type: "list",
    name: "menu",
    message: "What would you like to do? ↑ ↓",
    choices: [
      "View All Employees",
      "Update Employee Role",
      "View All Roles",
      "Add Role",
      "View All Departments",
      "Add Departments",
      "Quit"
    ],
  },
]);
