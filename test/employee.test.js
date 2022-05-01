const Employee = require("../lib/employee")

describe("Employee tests", () => {
    describe("Employee name", () => {
        //positive test for over all employee class
        it("Employee class should have three parameters", () => {
            const testEmployee = new Employee("Jazz", 16, "jazz@email.com");

            expect(testEmployee.getName()).toEqual("Jazz");
            expect(testEmployee.getId()).toEqual(16);
            expect(testEmployee.getEmail()).toEqual("jazz@email.com")

        })
        //positive test for over all employee role
        it("should have a role of 'Employee'", () => {
            const testEmployee = new Employee("Jazz", 16, "jazz@email.com");

            expect(testEmployee.getRole()).toEqual("Employee");
        })
        //positive test for employee name
        it("should return a string for the employee's name", () => {
            const testEmployee = new Employee("Jazz", 16, "jazz@email.com");

            expect(testEmployee.getName()).toEqual("Jazz");
        })

        //negative test for employee name
        it("should error if the employee name empty or null", () => {

            const testEmployee = new Employee("", 16, "jazz@email.com")

            const nameErr = "Name cannot be null or an empty string."
            expect(() => {
                testEmployee.getName()
                    .toThrow(nameErr);
            })
        })

        //positive test for employee name length
        it("should return a string greater than or equal to three characters", () => {
            const testEmployee = new Employee("Jazz", 16, "jazz@email.com");
            expect(testEmployee.name.length).toBeGreaterThanOrEqual(2)
        })
        //negative test for employee name length
        it("should error if the employee name is less than three characters", () => {

            const testEmployee = new Employee("Ja", 16, "jazz@email.com")

            const nameErr = "Name cannot be shorter than three characters."
            expect(() => {
                testEmployee.getName()
                    .toThrow(nameErr);
            })
        })
    })

    describe("Employee ID", () => {

        //positive test for employee id
        it("should return a number", () => {
            const testEmployee = new Employee("Jazz", 16, "jazz@email.com");

            expect(testEmployee.getId()).toEqual(16);
        })
        //negative test for employee id
        it("should error if the employee id is a string or not a number", () => {

            const testEmployee = new Employee("Jazz", "empID", "jazz@email.com")

            const idErr = "Id must be a number."
            expect(() => {
                testEmployee.getId()
                    .toThrow(idErr);
            })
        })
        //negative test for employee id
        it("should error if the employee id is empty", () => {

            const testEmployee = new Employee("Jazz", "", "jazz@email.com")

            const idErr = "Id cannot be null or empty."
            expect(() => {
                testEmployee.getId()
                    .toThrow(idErr);
            })
        })
        //positive test for employee id value
        it("should return a number length greater than or equal to '2'", () => {
            const testEmployee = new Employee("Jazz", 16, "jazz@email.com");
            expect(testEmployee.id).toBeGreaterThanOrEqual(2)
        })
        //negative test for employee id value
        it("should error if the ID is less than '2'", () => {

            const testEmployee = new Employee("Jazz", 1, "jazz@email.com")

            const idErr = "Employee ID cannot be shorter than two characters."
            expect(() => {
                testEmployee.getId()
                    .toThrow(idErr);
            })
        })
    })

    describe("Employee email", () => {

        //positive test for employee email
        it("should return a string for the employee's email", () => {
            const testEmployee = new Employee("Jazz", 16, "jazz@email.com");

            expect(testEmployee.getEmail()).toEqual("jazz@email.com");
        })
        //negative test for employee email
        it("should error if the employee email address does not include an @", () => {

            const testEmployee = new Employee("", 16, "jazzemail.com")

            const emailErr = "Email address must include '@'"
            expect(() => {
                testEmployee.getEmail()
                    .toThrow(emailErr);
            })
        })
        //negative test for employee email
        it("should error if the employee email address does not include a dot '.'", () => {

            const testEmployee = new Employee("", 16, "jazz@emailcom")

            const emailErr = "Email address must include '.'"
            expect(() => {
                testEmployee.getEmail()
                    .toThrow(emailErr);
            })
        })
        //negative test for employee email
        it("should error if the employee email is empty or null", () => {

            const testEmployee = new Employee("", 16, "")

            const emailErr = "Must include valid email address"
            expect(() => {
                testEmployee.getEmail()
                    .toThrow(emailErr);
            })
        })
    })
});