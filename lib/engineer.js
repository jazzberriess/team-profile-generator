//Import the Employee class
const Employee = require("./employee");

//Engineer class
class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
        this.role = "Engineer";
    }
    getGitHub() {
        return (this.gitHub);
    }
    getRole() {
        return (this.role);
    }
}

module.exports = Engineer;