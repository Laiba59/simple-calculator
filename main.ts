#! /usr/bin/env node

import inquirer from "inquirer";

let answer = await inquirer.prompt([
  { name: "firstNumber", type: "number", message: "Enter first Number" },
  { name: "secondNumber", type: "number", message: "Enter second Number" },
  {
    name: "operator",
    type: "list",
    message: "Select one of the operator to perform operations", 
    choices: ["Addition", "Substraction", "Multiplication", "Division"]
        
    
  },
]);

if (answer.operator === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber)
} else if (answer.operator === "Substraction"){
    console.log(answer.firstNumber - answer.secondNumber)
} else if (answer.operator === "Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber)
}else if (answer.operator === "Division"){
    console.log(answer.firstNumber / answer.secondNumber)
} else{
    console.log("Please select a valid operator")
};