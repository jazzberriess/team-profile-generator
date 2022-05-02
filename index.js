const fs = require("fs");
const inquirer = require("inquirer");
const generateFile = require("./lib/generate");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// const engineerInputs = require("./lib/inquirer");
// const responsesArray = new Map();
// const responsesArray = [];

// const managerResponses = new Map();
// const engineerResponses = new Map();
// const internResponses = new Map();

const allEmployees = [];

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
                // quit();
                writeToFile();
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
                    if (!answer || answer.length <= 2) {
                        return ("Your employee ID is a minimum of two (2) characters.")
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
                    if (!answer || answer.length >= 2) {
                        return ("Your office number is a minimum of two (2) characters.")
                    }
                    return true;
                }
            }
        ])
        // .then(pushResponses)
        // .then(console.log(responsesArray))
        .then((answer) => {
            // managerResponses.set("Manager Name", answer.name)
            //     .set("Manager ID", answer.id)
            //     .set("Manager Email", answer.email)
            //     .set("Manager OfficeNo", answer.officeNo))
            let newManager = new Manager(answer.name, answer.id, answer.email, answer.github); //parameters go here!
            allEmployees.push(newManager);
        })
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
                    if (!answer || answer.length <= 2) {
                        return ("Your employee ID is a minimum of two (2) characters.")
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
        // .then(writeToFile)
        // .then(pushResponses)
        // .then(console.log(responsesArray))
        .then((answer) => {
            // internResponses.set("Intern Name", answer.name)
            //     .set("Intern ID", answer.id)
            //     .set("Intern Email", answer.email)
            //     .set("Intern School", answer.school))
            let newIntern = new Intern(answer.name, answer.id, answer.email, answer.github); //parameters go here!
            allEmployees.push(newIntern);
        })
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
                    if (!answer || answer.length <= 2) {
                        return ("Your employee ID is a minimum of two (2) characters.")
                    }
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

        // .then(writeToFile)
        // .then(pushResponses)
        // .then(console.log(responsesArray))
        .then((answer) => {
            let newEngineer = new Engineer(
                answer.name, answer.id, answer.email, answer.github); //parameters go here!
            allEmployees.push(newEngineer);
        })
        // engineerResponses.set("Engineer Name", answer.name)
        //     .set("Engineer ID", answer.id)
        //     .set("Engineer Email", answer.email)
        //     .set("Engineer GitHub", answer.github))
        .then(createEmployee)

}

// function pushResponses(answer) {
//     responsesArray.push(answer)
// };

function writeToFile(answer) {

    console.log(answer, "line 231");
    console.log(allEmployees + "line279");
    // console.log(responsesArray, "line 251");
    // console.log(managerResponses, "line 270");
    // console.log(internResponses, "line 271");
    // console.log(engineerResponses, "line 272");
    // let managerAnswers = managerInputs(answer);
    // let engineerAnswers = engineerInputs(answer);
    // let internAnswers = internInputs(answer);

    // let finalAnswers =
    //     responsesArray
    // ...answer,

    // console.log(responsesArray, "line 249");

    fs.appendFileSync('test.html', generateFile(allEmployees));
    // fs.appendFileSync('test.html', generateFile(managerResponses, internResponses, engineerResponses));

}

// function quit() {
//     process.exitCode = 1;
// }

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
    Employee,
    Manager,
    Engineer,
    Intern,
    allEmployees,
    generateFile,

}