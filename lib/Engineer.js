const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, engGithub) {
        super(name, id, email);
        this.engGithub = engGithub;
    }
    getRole() {
        return 'Engineer';
    }
    getGithub() {
        return this.engGithub;
    }
}

module.exports = Engineer;