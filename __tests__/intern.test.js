const Intern = require("../lib/Intern");

describe("intern", () => {
    const e = new Intern ('Mitch', '1', 'email@email.com', 'school');

    it("should return name of employee", () => {
        expect(e.getName()).toEqual('Mitch');
    })
    it("should return id of employee", () => {
        expect(e.getId()).toEqual('1');
    })
    it("should return email of employee", () => {
        expect(e.getEmail()).toEqual('email@email.com');
    })
    it("should return school of employee", () => {
        expect(e.getSchool()).toEqual('school');
    })
});