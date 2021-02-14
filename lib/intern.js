const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(name, id, email, internSchool) {
        super(name, id, email);
        this.internSchool = internSchool;
    }
    getRole() {
        return 'Intern';
    }
    getSchool() {
        return this.internSchool;
    }
}

module.exports = Intern;