//import packages
const fs = require("fs");
const inquirer = require("inquirer");

//import modules for Manager, Engineer and Intern
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

//import module to generate the file
const generateFile = require("./src/generate");

//set empty array variable to store responses from inquirer
const allEmployees = [];

//create employee enquirer prompt
const createEmployee = () => {
    inquirer
        .prompt([
            {
                type: "list",
                name: "addEmployee",
                message: "Add Employee?",
                choices: ["Manager", "Engineer", "Intern", "Done"],
            }])
        .then((answer) => {
            if (answer.addEmployee === "Manager") {
                console.log("Manager chosen")
                return managerInputs();
            } else if (answer.addEmployee === ("Engineer")) {
                console.log("Engineer chosen")
                return engineerInputs();
            } else if (answer.addEmployee === "Intern") {
                console.log("Intern chosen")
                return internInputs();
            } else {

                writeToFile();
            }
        })
        .catch((error) => console.error(error))
};

//manager inquirer prompts
const managerInputs = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter your Team Manager's Name.",
                validate: (answer) => {
                    if (!answer || answer.length <= 2) {
                        return ("Names must contain a minimum of three (3) characters.")
                    }
                    return true;
                }
            },
            {
                type: "number",
                name: "id",
                message: "Please enter the employee ID (Numeric characters only).",
                validate: (answer) => {
                    if (!answer || typeof answer != "number") {
                        return ("The employee ID must be a numeric value.")
                    }
                    return true;
                }
            },

            {
                type: "input",
                name: "email",
                message: "Please enter the work E-mail address.",
                validate: (answer) => {

                    const regexEmailVal = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

                    if (regexEmailVal.test(answer)) {
                        return true
                    }
                    return ("Please enter a valid E-mail address.");
                }
            },

            {
                type: "number",
                name: "officeNumber",
                message: "Please enter the office number. (Numeric charcters only).",
                validate: (answer) => {
                    if (!answer || typeof answer != "number") {
                        return ("The office number must be a numeric value.")
                    }
                    return true;
                }
            }
        ])
        .then((answer) => {
            let newManager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
            allEmployees.push(newManager);
        })
        .then(createEmployee)
        .catch((error) => console.error(error))

};

//Engineer inquirer prompts
const engineerInputs = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter your engineer's name.",
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
                    if (!answer || typeof answer != "number") {
                        return ("The employee ID must be a numeric value.")
                    }
                    return true;
                }
            },

            {
                type: "input",
                name: "email",
                message: "Please enter your engineer's work E-mail address.",
                validate: (answer) => {
                    const regexEmailVal = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

                    if (regexEmailVal.test(answer)) {
                        return true
                    }
                    return ("Please enter a valid E-mail address.");
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
            }])
        .then((answer) => {
            let newEngineer = new Engineer(
                answer.name, answer.id, answer.email, answer.github);
            allEmployees.push(newEngineer);
        })
        .then(createEmployee)
        .catch((error) => console.error(error))

};

//Intern inquirer prompts
const internInputs = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter your intern's name.",
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
                    if (!answer || typeof answer != "number") {
                        return ("The employee ID must be a numeric value.")
                    }
                    return true;
                }
            },

            {
                type: "input",
                name: "email",
                message: "Please enter your intern's work E-mail address.",
                validate: (answer) => {
                    const regexEmailVal = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

                    if (regexEmailVal.test(answer)) {
                        return true
                    }
                    return ("Please enter a valid E-mail address.");
                }
            },

            {
                type: "input",
                name: "school",
                message: "Please enter the name of your intern's school.",
                validate: (answer) => {
                    if (!answer) {
                        return ("Please enter a school.")
                    }
                    return true;
                }
            }
        ])
        .then((answer) => {

            let newIntern = new Intern(answer.name, answer.id, answer.email, answer.school); //parameters go here!
            allEmployees.push(newIntern);
        })
        .then(createEmployee)
        .catch((error) => console.error(error))
};

//Create an index.html file that contains the data stored in the allEmployees array
function writeToFile() {

    fs.writeFile("./dist/index.html", generateFile(allEmployees), (err) => {
        err ? console.error(err) : console.log("Team roster generated in the index.html file!")
    });


}

//function to initiate the app starting with the manager inputs as they're the first employee required
function init() {
    managerInputs();
}

//BEGIN!
init();