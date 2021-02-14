const Engineer = require("../lib/Engineer.js");

test("Can you assign and display Github account?", () => {
  const testInput = "GitHubAccount";
  const e = new Engineer("Allen", 1, "test@url.com", testInput);
  expect(e.engGithub).toBe(testInput);
});

test("getRole() should return \"Engineer\"", () => {
  const testInput = "Engineer";
  const e = new Engineer("Allen", 1, "test@url.com", "GitHubAccount");
  expect(e.getRole()).toBe(testInput);
});

test("Can get GitHub username via getGithub()", () => {
  const testInput = "GitHubAccount";
  const e = new Engineer("Allen", 1, "test@url.com", testInput);
  expect(e.getGithub()).toBe(testInput);
});
