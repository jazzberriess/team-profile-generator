const fs = require("fs");
const inquirer = require("inquirer");
// const createFile = require("./generate");


const managerInputs = [{
    type: "input",
    name: "name",
    message: "Please enter your team manager's First and Last name.",
    validate: (answer) => {
        if (!answer || answer.length >= 2) {
            return ("Your name must contain a minimum of three (3) characters.")
        }
        return true;
    }
},
{
    type: "input",
    name: "id",
    message: "Please enter your employee ID (Numeric characters only).",
    validate: (answer) => {
        if (!answer || answer.length >= 4) {
            return ("Your employee ID is a minimum of four (4) characters.")
        }
        return true;
    }
},

{
    type: "input",
    name: "email",
    message: "Please enter your work E-mail address.",
    validate: (answer) => {
        if (!answer || !answer.includes("@")) {
            return ("Please enter a valid E-mail address.")
        }
        return true;
    }
},

{
    type: "number",
    name: "officeNo",
    message: "Please enter your office number. (Numeric charcters only).",
    validate: (answer) => {
        if (!answer || answer.length >= 6) {
            return ("Your office number is a minimum of six (6) characters.")
        }
        return true;
    }
},
{
    type: "list",
    name: "addEmployee",
    message: "Add another Employee?",
    choices: ["Engineer", "Intern", "Manager", "Done"],
    validate: (answer) => {
        if (answer.choices("Engineer")) {
            engineerInput();
        } else if (answer.choices("Intern")) {
            internInput();
        } else if (answer.choices("Manager")) {
            managerInput();
        } else {
            quit();
        }
    }
}
];



const engineerInputs = [{

    type: "input",
    name: "name",
    message: "Please enter your engineer's First and Last name.",
    validate: (answer) => {
        if (!answer || answer.length >= 2) {
            return ("A name must contain a minimum of three (3) characters.")
        }
        return true;
    }
},
{
    type: "number",
    name: "id",
    message: "Please enter the employee ID (Numeric characters only).",
    validate: (answer) => {
        if (!answer || answer.length >= 4) {
            return ("An employee ID is a minimum of four (4) characters.")
        }
        return true;
    }
},

{
    type: "input",
    name: "email",
    message: "`Please enter your engineer's work E-mail address.`",
    validate: (answer) => {
        if (!answer || !answer.includes("@")) {
            return ("Please enter a valid E-mail address.")
        }
        return true;
    }
},

{
    type: "input",
    name: "github",
    message: "Please enter your engineer's GitHub username.",
    validate: (answer) => {
        if (!answer) {
            return ("Please enter a gitHub username.")
        }
        return true;
    }
}];



const internInputs = [{

    type: "input",
    name: "name",
    message: "Please enter your intern's First and Last name.",
    validate: (answer) => {
        if (!answer || answer.length >= 2) {
            return ("A name must contain a minimum of three (3) characters.")
        }
        return true;
    }
},
{
    type: "number",
    name: "id",
    message: "Please enter the employee ID (Numeric characters only).",
    validate: (answer) => {
        if (!answer || answer.length >= 4) {
            return ("An employee ID is a minimum of four (4) characters.")
        }
        return true;
    }
},

{
    type: "input",
    name: "email",
    message: "`Please enter your intern's work E-mail address.`",
    validate: (answer) => {
        if (!answer || !answer.includes("@")) {
            return ("Please enter a valid E-mail address.")
        }
        return true;
    }
},

{
    type: "input",
    name: "school",
    message: "Please enter the name of your intern's School.",
    validate: (answer) => {
        if (!answer) {
            return ("Please enter a school.")
        }
        return true;
    }
}];


function quit() {
    process.exitCode = 1;
}

// function writeToFile(answers) {

//     fs.writeFile('test.txt', createFile.generate(answers));

// }

// function init() {
//     inquirer
//         .prompt(questions)
//         .then((answers) => {
//             writeToFile(answers);
//             console.log("File created!")
//         })
//         .catch((error) => console.error(error));
// }

// init();

module.exports = {
    managerInputs,
    engineerInputs,
    internInputs,
}