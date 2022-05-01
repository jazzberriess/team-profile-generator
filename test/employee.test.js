const Employee = require("../lib/employee")

describe("Employee tests", () => {
    describe("getName", () => {
        it("should return a string for the employee's name", () => {
            const testEmployee = new Employee("Jazz", 16, "jazz@email.com");

            expect(testEmployee.getName()).toEqual("Jazz");
        })
    })
});