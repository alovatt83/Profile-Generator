const Employee = require('./Employee.js');

class Manager extends Employee{
    constructor (name, id, email, officePhone) {
        super(name, id, email);
        this.officeNumber = officePhone;
    }
    getRole() {
        return 'Manager';
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;