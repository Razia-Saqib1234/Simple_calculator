#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "Firstnumber",
        type: "number",
        message: "Enter First number",
    },
    {
        name: "Secondnumber",
        type: "number",
        message: "Enter second number",
    },
    {
        name: "Operator",
        type: "list",
        message: "Slect one operators to perform operation",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// Condition Statment
if (answer.Operator === "Addition") {
    console.log(answer.Firstnumber + answer.Secondnumber);
}
else if (answer.Operator === "Subtraction") {
    console.log(answer.Firstnumber - answer.Secondnumber);
}
else if (answer.Operator === "Multiplication") {
    console.log(answer.Firstnumber * answer.Secondnumber);
}
else if (answer.Operator === "Division") {
    console.log(answer.Firstnumber / answer.Secondnumber);
}
