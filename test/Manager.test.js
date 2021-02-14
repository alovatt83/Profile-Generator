const Manager = require("../lib/Manager.js");
const Employee = require("../lib/Employee.js");

test("Can you input and display office phone number?", () => {
  const testInput = 99;
  const e = new Manager("Allen", 99, "test@url.com", testInput);
  expect(e.officeNumber).toBe(testInput);
});

test('getRole() should return "Manager"', () => {
  const testInput = "Manager";
  const e = new Manager("Allen", 1, "test@url.com", 99);
  expect(e.getRole()).toBe(testInput);
});

test("Can get office number via getOffice()", () => {
  const testInput = 99;
  const e = new Manager("Allen", 99, "test@url.com", testInput);
  expect(e.getOfficeNumber()).toBe(testInput);
});
