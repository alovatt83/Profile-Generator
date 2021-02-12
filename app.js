// Dependencies 
const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const renderedDir = path.resolve(__dirname, "dist");
const renderedPath = path.join(renderedDir, "team.html");

const render = require("./lib/htmlRenderer");


//-------------------------------------------------------------------------------------------------------------------------

//empty array that can store the team members in, Name ID and Email are in every array becase each array becasue that information is prevalent to every employee 
const emptyArray = [];

// questions for different teams members:

// Manager: 
const managerInput = [

    {
        type: 'input',
        name: 'managerName',
        message: 'Enter team managers First & Last name: '
    },

    {
        type: 'input',
        name: 'managerID',
        message: 'Enter manager ID#: '
    },

    {
        type: 'input',
        name: 'managerEmail',
        message: 'Enter managers e-mail address: '
    },

    {
        type: 'input',
        name: 'officePhone',
        message: 'Enter Managers Office Number [format (999) 999-9999]: '
    },
]

//Engineer: 
const engineerInput = [

    {
        type: 'input',
        name: 'engName',
        message: 'Enter the First & Last name of engineer: '
    },

    {
        type: 'input',
        name: 'engID',
        message: 'Enter engineer ID#: '
    },

    {
        type: 'input',
        name: 'engEmail',
        message: 'Enter engineer e-mail address: '
    },

    {
        type: 'input',
        name: 'engGithub',
        message: 'Enter the engineers GitHub username: '
    },
]

//Intern:
const internInput = [

    {
        type: 'input',
        name: 'internName',
        message: 'Enter interns First & Last name: '
    },

    {
        type: 'input',
        name: 'internID',
        message: 'Enter interns ID#: ',
    },

    {
        type: 'input',
        name: 'internEmail',
        message: 'Enter interns e-mail address: '
    },

    {
        type: 'input',
        name: 'internSchool',
        message: 'Enter the interns current academic enrollment: ',
    },
]

//this question will promt the user if they want to add another employee

const anotherOne = [
    {
        type: 'list',
        name: 'nextEmployee',
        message: 'Select the type of team member you would like to add next, if you are done select "Done" to generate your team ',
        choices: ['Engineer', 'Intern', 'Done']
    }
]
// end of questions 


//starting function - begins with manager because each team will always have a manager 
function init() {
        //starts with the manager function
        managerPromt();
}


//function that will promt the user to select the next type of employee they are adding 
function next() {
    inquirer.prompt(anotherOne).then((response) => {
        
        console.log(response);
        switch (response.nextEmployee) {
            case 'Engineer':
                engineerPromt();
                break;
            case 'Intern':
                internPromt();
                break;
            case 'Done':
                console.log('Creating your team!')
                makeTeam();
        }
    })
}
//function for the manager questions that will be called first when initiated
function managerPromt() {
    inquirer.prompt(managerInput).then((response) => {

        let name = response.managerName;
        let id = response.managerID;
        let email = response.managerEmail;
        let officePhone = response.officePhone;
        // creats an object for this manager 
        const manager = new Manager(name, id, email, officePhone);
        //pushes the new manager object to the empty array to be used later 
        emptyArray.push(manager);
        //this will call the next function which will promt the user to select the next type of employee they are adding 
        console.log(emptyArray);

        next();
    })
}
//Function for Engineer promts
function engineerPromt() {
    inquirer.prompt(engineerInput).then((response) => {

        let name = response. engName;
        let id = response.engID;
        let email = response.engEmail;
        let github = response.engGithub;
        // creats an object for this manager 
        const engineer = new Engineer (name, id, email, github);

        emptyArray.push(engineer);
        console.log(emptyArray);
        //this will call the next function which will promt the user to select the next type of employee they are adding 
        next();
    })
}

//Function for Intern promts
function internPromt() {
    inquirer.prompt(internInput).then((response) => {

        let name = response. internName;
        let id = response.internID;
        let email = response.internEmail;
        let internSchool = response.internSchool;

        const intern = new Intern (name, id, email, internSchool);

        emptyArray.push(intern);
        console.log(emptyArray);

        //this will call the next function which will promt the user to select the next type of employee they are adding 
        next();
    })
}

//function to make the file 
function makeTeam() {
fs.writeFile(renderedPath, render(emptyArray), function(err) {
if (err) { 
    return console.log(err)
}
})

}

//calls the initiating function 
init();


