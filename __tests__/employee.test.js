const Employee = require("../lib/Employee");

describe("employee", () => {
    const e = new Employee('Mitch', '1', 'email@email.com');
    
    it("should return name of employee", () => {
        expect(e.getName()).toEqual('Mitch');
    })
    it("should return id of employee", () => {
        expect(e.getId()).toEqual('1');
    })
    it("should return email of employee", () => {
        expect(e.getEmail()).toEqual('email@email.com');
    })
});