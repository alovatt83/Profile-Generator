// Static Assigned Dependencies 
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

// Start of Code

// 'Empty Array' setup to store input from inquirer inputs. 
const emptyArray = [];

// Inquirer questions to display seeking user input.


// Manager Input
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


//Engineer Input
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

//Intern Input
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

// Add 'list' question for user to add addition emplyees or complete the inquirer process.
const addLoop = [
    {
        type: 'list',
        name: 'nextEmployee',
        message: 'Choose the next employee to add to your team. If there is no more, select Done: ',
        choices: ['Done', 'Engineer', 'Intern']
    }
]


// Initiate questions.
function init() {

    // Start inquirer with manager questions.
    managerPrompt();

}
// Control function to allow users to add additional employees or end process. 
function next() {
    inquirer.prompt(addLoop).then((response) => {
        
        console.log(response);
        switch (response.nextEmployee) {
            case 'Engineer':
                engineerPrompt();
                break;
            case 'Intern':
                internPrompt();
                break;
            case 'Done':
                console.log('Generating your profile!')
                finalizeTeam();
        }
    })
}

// Function for calling the 'Manager' questions.
function managerPrompt() {
    inquirer.prompt(managerInput).then((response) => {

        let name = response.managerName;
        let id = response.managerID;
        let email = response.managerEmail;
        let officePhone = response.officePhone;
        // Generate Object for 'Manager' inquirer input.
        const manager = new Manager(name, id, email, officePhone);
        // Direct input to empty array.
        emptyArray.push(manager);
        
        console.log(emptyArray);
        // Move user to select 'nextEmployee'
        next();
    })
}
//  Function for calling the 'Engineer' questions.
function engineerPrompt() {
    inquirer.prompt(engineerInput).then((response) => {

        let name = response. engName;
        let id = response.engID;
        let email = response.engEmail;
        let github = response.engGithub;
        // Generate Object for 'Engineer'' inquirer input.        
        const engineer = new Engineer (name, id, email, github);

        emptyArray.push(engineer);
        console.log(emptyArray);
        // Move user to select 'nextEmployee'
        next();
    })
}

// Function for calling the 'Intern' questions.
function internPrompt() {
    inquirer.prompt(internInput).then((response) => {

        let name = response. internName;
        let id = response.internID;
        let email = response.internEmail;
        let internSchool = response.internSchool;
        // Generate Object for 'Intern' inquirer input.        
        const intern = new Intern (name, id, email, internSchool);

        emptyArray.push(intern);
        console.log(emptyArray);
        // Move user to select 'nextEmployee'        
        next();
    })
}

// Finalize and Create file.
function finalizeTeam() {
fs.writeFile(renderedPath, render(emptyArray), function(err) {
if (err) { 
    return console.log(err)
}
})

}

// Call the functions.
init();


