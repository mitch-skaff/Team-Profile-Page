const Engineer = require("../lib/Engineer");

describe("engineer", () => {
    const e = new Engineer('Mitch', '1', 'email@email.com', 'github');

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
        expect(e.getGithub()).toEqual('github');
    })
});
