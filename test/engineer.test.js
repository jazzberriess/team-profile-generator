const Engineer = require("../lib/engineer")

describe("Engineer tests", () => {
    describe("Engineer name", () => {
        //positive test for over all Engineer class
        it("Engineer class should have four parameters", () => {
            const testEngineer = new Engineer("Jazz", 16, "jazz@email.com", "https://github.com/jazzberriess");

            expect(testEngineer.getName()).toEqual("Jazz");
            expect(testEngineer.getId()).toEqual(16);
            expect(testEngineer.getEmail()).toEqual("jazz@email.com")
            expect(testEngineer.getGitHub()).toEqual("https://github.com/jazzberriess")


        })
        //positive test for engineer role
        it("should have a role of 'Engineer'", () => {
            const testEngineer = new Engineer("Jazz", 16, "jazz@email.com");

            expect(testEngineer.getRole()).toEqual("Engineer");
        })
        //negative test for engineer github
        it("should error if the githib is empty or null", () => {

            const testEngineer = new Engineer("Jazz", 16, "jazz@email.com", "")

            const githubErr = "GitHub URL cannot be null or an empty string."
            expect(() => {
                testEngineer.gitHub()
                    .toThrow(githubErr);
            })
        })
        //negative test for engineer github
        it("should error if the githib URL does not include 'https://' ", () => {

            const testEngineer = new Engineer("Jazz", 16, "jazz@email.com", "github.com/jazzberriess")

            const githubErr = "GitHub URL must include the 'https://'"
            expect(() => {
                testEngineer.gitHub()
                    .toThrow(githubErr);
            })
        })
        //negative test for engineer github
        it("should error if the githib URL does not include anything after the '.com/' ", () => {

            const testEngineer = new Engineer("Jazz", 16, "jazz@email.com", "https://github.com/")

            const githubErr = "GitHub URL must include the gitHub username after the '.com/''"
            expect(() => {
                testEngineer.gitHub()
                    .toThrow(githubErr);
            })
        })
    })
});