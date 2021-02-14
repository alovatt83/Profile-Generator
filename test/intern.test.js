const Intern = require("../lib/Intern.js");

test("Can you input and display a school?", () => {
  const testInput = "UofT";
  const e = new Intern("Allen", 99, "test@url.com", testInput);
  expect(e.internSchool).toBe(testInput);
});

test('getRole() should return "Intern"', () => {
  const testInput = "Intern";
  const e = new Intern("Allen", 99, "test@url.com", "UofT");
  expect(e.getRole()).toBe(testInput);
});

test("Can return school via getSchool()", () => {
  const testInput = "UofT";
  const e = new Intern("Allen", 99, "test@url.com", testInput);
  expect(e.getSchool()).toBe(testInput);
});
