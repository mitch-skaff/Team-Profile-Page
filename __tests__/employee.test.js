const Employee = require("../lib/Employee");

// set up first suite with test for employee and the four corresponding functions
describe("Employee", () => {

    it("Instantiates new Employee instance", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });

    it("Should set a name via passed in argument", () => {
        const name = "Mitch" 
        const e = new Employee(name);

        expect(e.name).toBe(name);
    });

    it("Should set id via passed in argument", () => {
        
    })


    
});
