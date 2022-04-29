const inquirier = require("inquirer");

const managerInput = [{
    type: "input",
    message: "Please enter your team manager's First and Last name.",
    name: "name",
    validate: (answer) => {
        if (!answer || answer.length >= 2) {
            return ("Your name must contain a minimum of three (3) characters.")
        }
        return true;
    }
},
{
    type: "number",
    message: "Please enter your employee ID (Numeric characters only).",
    name: "id",
    validate: (answer) => {
        if (!answer || answer.length >= 4) {
            return ("Your employee ID is a minimum of four (4) characters.")
        }
        return true;
    }
},

{
    type: "input",
    message: "Please enter your work E-mail address.",
    name: "email",
    validate: (answer) => {
        if (!answer || !answer.includes("@")) {
            return ("Please enter a valid E-mail address.")
        }
        return true;
    }
},

{
    type: "number",
    message: "Please enter your office number. (Numeric charcters only).",
    name: "id",
    validate: (answer) => {
        if (!answer || answer.length >= 6) {
            return ("Your office number is a minimum of six (6) characters.")
        }
        return true;
    }
}
];

const engineerInput = [{

    type: "input",
    message: "Please enter your engineer's First and Last name.",
    name: "name",
    validate: (answer) => {
        if (!answer || answer.length >= 2) {
            return ("A name must contain a minimum of three (3) characters.")
        }
        return true;
    }
},
{
    type: "number",
    message: "Please enter the employee ID (Numeric characters only).",
    name: "id",
    validate: (answer) => {
        if (!answer || answer.length >= 4) {
            return ("An employee ID is a minimum of four (4) characters.")
        }
        return true;
    }
},

{
    type: "input",
    message: "`Please enter your engineer's work E-mail address.`",
    name: "email",
    validate: (answer) => {
        if (!answer || !answer.includes("@")) {
            return ("Please enter a valid E-mail address.")
        }
        return true;
    }
},

{
    type: "input",
    message: "Please enter your engineer's GitHub username.",
    name: "github",
    validate: (answer) => {
        if (!answer) {
            return ("Please enter a gitHub username.")
        }
        return true;
    }
}];

const internInput = [{

    type: "input",
    message: "Please enter your intern's First and Last name.",
    name: "name",
    validate: (answer) => {
        if (!answer || answer.length >= 2) {
            return ("A name must contain a minimum of three (3) characters.")
        }
        return true;
    }
},
{
    type: "number",
    message: "Please enter the employee ID (Numeric characters only).",
    name: "id",
    validate: (answer) => {
        if (!answer || answer.length >= 4) {
            return ("An employee ID is a minimum of four (4) characters.")
        }
        return true;
    }
},

{
    type: "input",
    message: "`Please enter your intern's work E-mail address.`",
    name: "email",
    validate: (answer) => {
        if (!answer || !answer.includes("@")) {
            return ("Please enter a valid E-mail address.")
        }
        return true;
    }
},

{
    type: "input",
    message: "Please enter the name of your intern's School.",
    name: "school",
    validate: (answer) => {
        if (!answer) {
            return ("Please enter a school.")
        }
        return true;
    }
}];