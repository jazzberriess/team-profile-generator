const Manager = require("../lib/manager")

describe("Manager tests", () => {
    describe("Manager name", () => {
        //positive test for over all Manager class
        it("Manager class should have four parameters", () => {
            const testManager = new Manager("Jazz", 16, "jazz@email.com", 887);

            expect(testManager.getName()).toEqual("Jazz");
            expect(testManager.getId()).toEqual(16);
            expect(testManager.getEmail()).toEqual("jazz@email.com")
            expect(testManager.getOfficeNumber()).toEqual(887)


        })
        //positive test for Manager role
        it("should have a role of 'Manager'", () => {
            const testManager = new Manager("Jazz", 16, "jazz@email.com", 887);

            expect(testManager.getRole()).toEqual("Manager");
        })
        //negative test for Manager Office number
        it("should error if the office number is null", () => {

            const testManager = new Manager("Jazz", 16, "jazz@email.com",)

            const officeErr = "Office number cannot be null"
            expect(() => {
                testManager.getOfficeNumber()
                    .toThrow(officeErr);
            })
        })
        //negative test for Manager Office number
        it("should error if the office number is a string ", () => {

            const testManager = new Manager("Jazz", 16, "jazz@email.com", "office");

            const officeErr = "Office number must be a number"
            expect(() => {
                testManager.getOfficeNumber()
                    .toThrow(officeErr);
            })
        })
    })
});