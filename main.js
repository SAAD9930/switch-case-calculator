import inquirer from "inquirer";
import chalk from "chalk";
//step 01
const answers = await inquirer.prompt([
    { type: "number",
        name: "numberOne",
        massage: "Enter your first number",
    },
    { type: "number",
        name: "numberTwo",
        massage: "Enter your second number",
    },
    { type: "list",
        name: "operator",
        massage: "Enter your operator",
        choices: ["+", "-", "*", "/"] }
]);
//step 02 use switch case
const { numberOne, numberTwo, operator } = answers;
let result;
switch (operator) {
    case "+":
        result = numberOne + numberTwo;
        break;
    case "-":
        result = numberOne - numberTwo;
        break;
    case "*":
        result = numberOne * numberTwo;
        break;
    case "/":
        result = numberOne / numberTwo;
        break;
    default:
        console.log("invalid operator");
}
console.log(chalk.yellow(`${numberOne} ${operator} ${numberTwo} = ${result}`));
