const { qualifiedTypeIdentifier } = require("@babel/types");
const fs = require("fs");
const inquirer = require("inquirer");
const generateFile = require("./lib/generate");
// const engineerInputs = require("./lib/inquirer");

const createEmployee = () => {
    inquirer
        .prompt([
            {
                type: "list",
                name: "addEmployee",
                message: "Add another Employee?",
                choices: ["Engineer", "Intern", "Manager", "Done"],
            }])
        .then((answer) => {
            if (answer.addEmployee === "Engineer") {
                console.log("Engineer chosen")
                return engineerInputs();
            } else if (answer.addEmployee === ("Intern")) {
                console.log("Intern chosen")
                return internInputs();
            } else if (answer.addEmployee === "Manager") {
                console.log("Manager chosen")
                return managerInputs();
            } else {
                quit();
            }
        });
}

const managerInputs = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter your team manager's First and Last name.",
                validate: (answer) => {
                    if (!answer || answer.length <= 2) {
                        return ("Your name must contain a minimum of three (3) characters.")
                    }
                    return true;
                }
            },
            {
                type: "number",
                name: "id",
                message: "Please enter your employee ID (Numeric characters only).",
                validate: (answer) => {
                    if (!answer || answer.length <= 4) {
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
            }
        ])
        .then(writeToFile)
        .then(createEmployee);
};

const internInputs = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter your intern's First and Last name.",
                validate: (answer) => {
                    if (!answer || answer.length <= 2) {
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
                    if (!answer || answer.length <= 4) {
                        return ("An employee ID is a minimum of four (4) characters.")
                    }
                    return true;
                }
            },

            {
                type: "input",
                name: "email",
                message: "Please enter your intern's work E-mail address.",
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
            }
        ])
        .then(writeToFile)
        .then(createEmployee);
};

// {
//     type: "list",
//     name: "addEmployee",
//     message: "Add another Employee?",
//     choices: ["Engineer", "Intern", "Manager", "Done"],
//     validate: (answer) => {
//         if (this.addEmployee.choice("Engineer")) {
//             console.log("Employee chosen")
//             return engineerInputs;
//         } else if (answer.choices("Intern")) {
//             internInputs;
//         } else if (answer.choices("Manager")) {
//             managerInputs;
//         } else {
//             quit();
//         }
//     },
// validate: (answer) => {
//     if (answer.choices === "Engineer") {
//         inquirer.prompt(questions.engineerInputs);
//     }
// }
// }
// },
// {
//     type: "input",
//     name: "name",
//     message: "Please enter your engineer's First and Last name.",
//     when(answer) {
//         return answer.addEmployee.choices === "Engineer"

//     },
//     validate: (answer) => {
//         if (!answer || answer.length >= 2) {
//             return ("A name must contain a minimum of three (3) characters.")
//         }
//         return true;
//     }
// },

const engineerInputs = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter your engineer's First and Last name.",
                validate: (answer) => {
                    if (!answer || answer.length <= 2) {
                        return ("A name must contain a minimum of three (3) characters.")
                    }
                    console.log(answer);
                    return true;
                }
            },
            {
                type: "number",
                name: "id",
                message: "Please enter the employee ID (Numeric characters only). Line 113",
                validate: (answer) => {
                    if (!answer || answer.length <= 4) {
                        return ("An employee ID is a minimum of four (4) characters.")
                    }
                    console.log(answer);
                    return true;
                }
            },

            {
                type: "input",
                name: "email",
                message: "Please enter your engineer's work E-mail address.",
                validate: (answer) => {
                    if (!answer || !answer.includes("@")) {
                        return ("Please enter a valid E-mail address.")
                    }
                    console.log(answer);
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
                    console.log(answer);
                    return true;
                }
            }])
        .then(writeToFile)
        .then(createEmployee);
}


function writeToFile(answer) {

    console.log(answer, "line 231");

    let finalAnswers = {
        ...answer
    };

    fs.writeFileSync('test.txt', generateFile(finalAnswers));

}

function quit() {
    process.exitCode = 1;
}

// function generateFile() {
//     writeToFile();
// }

// function init() {
//     createEmployee()
//         .then((answers) => {
//             if (answers.addEmployee === "Engineer") {
//                 inquirer
//                     .prompt(engineerInputs)
//             }
//             // writeToFile(answers);
//             console.log("File created!")
//         })
//         .catch((error) => console.error(error));
// }
// function quit(answer) {
//     process.exitCode = 1;
//     writeToFile(answer);
// }

createEmployee();


module.exports = {
    managerInputs,
    engineerInputs,
    internInputs,
    generateFile,
}