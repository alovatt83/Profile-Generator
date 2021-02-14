const Employee = require("../lib/Employee.js");

test("Can you create new emplyee?", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can you setup a name for employee?", () => {
  const name = "Alice";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can you setup an ID for emplpyee?", () => {
  const testInput = 100;
  const e = new Employee("Allen", testInput);
  expect(e.id).toBe(testInput);
});

test("Can you setup an email address for employee?", () => {
  const testInput = "test@test.com";
  const e = new Employee("Allen", 1, testInput);
  expect(e.email).toBe(testInput);
});

test("Can you retrieve name from getName function?)", () => {
  const testInput = "Alice";
  const e = new Employee(testInput);
  expect(e.getName()).toBe(testInput);
});

test("Can you retreive ID from getId function?", () => {
  const testInput = 100;
  const e = new Employee("Allen", testInput);
  expect(e.getId()).toBe(testInput);
});

test("Can you retreive email from getEmail function?", () => {
  const testInput = "test@test.com";
  const e = new Employee("Allen", 1, testInput);
  expect(e.getEmail()).toBe(testInput);
});

test("Doea getRole function return \"Employee\"?", () => {
  const testInput = "Employee";
  const e = new Employee("Allen", 1, "test@test.com");
  expect(e.getRole()).toBe(testInput);
});