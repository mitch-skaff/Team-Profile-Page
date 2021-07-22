const Manager = require("../lib/Manager");

describe("manager", () => {
    const e = new Manager('Mitch', '1', 'email@email.com', '123');

    it("should return name of manager", () => {
        expect(e.getName()).toEqual('Mitch');
    })
    it("should return id of manager", () => {
        expect(e.getId()).toEqual('1');
    })
    it("should return email of manager", () => {
        expect(e.getEmail()).toEqual('email@email.com');
    })
    it("should return office number of manager", () => {
        expect(e.getOfficeNumber()).toEqual('123');
    })
});
