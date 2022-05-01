const Intern = require("../lib/intern")

describe("Intern tests", () => {
    describe("Intern name", () => {
        //positive test for over all Intern class
        it("Intern class should have four parameters", () => {
            const testIntern = new Intern("Jazz", 16, "jazz@email.com", "Camp Half Blood");

            expect(testIntern.getName()).toEqual("Jazz");
            expect(testIntern.getId()).toEqual(16);
            expect(testIntern.getEmail()).toEqual("jazz@email.com")
            expect(testIntern.getSchool()).toEqual("Camp Half Blood")


        })
        //positive test for Intern role
        it("should have a role of 'Intern'", () => {
            const testIntern = new Intern("Jazz", 16, "jazz@email.com", "Camp Half Blood");

            expect(testIntern.getRole()).toEqual("Intern");
        })
        //negative test for Intern Office number
        it("should error if the school is null", () => {

            const testIntern = new Intern("Jazz", 16, "jazz@email.com",)

            const schoolErr = "School cannot be null"
            expect(() => {
                testIntern.getSchool()
                    .toThrow(schoolErr);
            })
        })
        //negative test for Intern Office number
        it("should error if the school is an empty string", () => {

            const testIntern = new Intern("Jazz", 16, "jazz@email.com", "");

            const schoolErr = "School must not be an empty string"
            expect(() => {
                testIntern.getSchool()
                    .toThrow(schoolErr);
            })
        })
    })
});