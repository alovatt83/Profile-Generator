const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname, "../templates");

const execute = employees => {
  const html = [];

html.push(employees
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => executeManager(manager))
  );
html.push(employees
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => executeEngineer(engineer))
  );
html.push(employees
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => executeIntern(intern))
  );

  return executeMain(html.join(','));

};
  

const executeManager = manager => {
  let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
  template = addToHTML(template, "name", manager.getName());
  template = addToHTML(template, "role", manager.getRole());
  template = addToHTML(template, "email", manager.getEmail());
  template = addToHTML(template, "id", manager.getId());
  template = addToHTML(template, "officeNumber", manager.getOfficeNumber());
  return template;
};


const executeEngineer = engineer => {
  let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
  template = addToHTML(template, "name", engineer.getName());
  template = addToHTML(template, "role", engineer.getRole());
  template = addToHTML(template, "email", engineer.getEmail());
  template = addToHTML(template, "id", engineer.getId());
  template = addToHTML(template, "github", engineer.getGithub());
  return template;
};

const executeIntern = intern => {
  let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
  template = addToHTML(template, "name", intern.getName());
  template = addToHTML(template, "role", intern.getRole());
  template = addToHTML(template, "email", intern.getEmail());
  template = addToHTML(template, "id", intern.getId());
  template = addToHTML(template, "school", intern.getSchool());
  return template;
};

const executeMain = html => {
  const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
  return addToHTML(template, "team", html);
};

const addToHTML = (template, sectionslector, value) => {
  const pattern = new RegExp("{{ " + sectionslector + " }}", "gm");
  return template.replace(pattern, value);
};

module.exports = execute;