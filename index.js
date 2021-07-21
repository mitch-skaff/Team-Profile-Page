// require classes and packages
const inquirer = require("inquirer")
const fs = require("fs");

const html = require("./src/html.js");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// empty array to push generated employees into
const employees = [];

// generic questions for each employee
function employeeQuestions () {
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter the Employee's Name: ",
            name: "name"
        },
    
        {
            type: "input",
            message: "Please enter the Employee's Email: ",
            name: "email"
        },
    
        {
            type: "input",
            message: "Please enter the Employee's ID: ",
            name: "id"
        },
    
        {
            type: "list",
            message: "Please select the Employee's role: ",
            name: "role",
            choices: ["Engineer", "Intern"]
        }
    ])

    .then(answer => {
        if(answer.role === "Engineer")
            internQuestion(answer.name, answer.email, answer.id);
        
        else if(answer.role === "Intern")
            engineerQuestion(answer.name, answer.email, answer.id);
    });
};

// build off generic question then add additional intern question if necessary
function internQuestion(name, email, id){
    inquirer.prompt([
        {
            type: "input",
            name: "school",
            message: "What school does your intern attend?"
        }
    ])
    .then(answer => {
        const newIntern = new Intern(name, email, id, answer.school);
        
        employees.push(newIntern);
        addEmployeeQuestion();
    })
};

// build off generic question then add additional engineer question if necessary
function engineerQuestion(name, email, id){
    inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: "What is your engineer's Github username?"
        }
    ])
    .then(answer => {
        const newEngineer = new Engineer(name, email, id, answer.github);

        employees.push(newEngineer);
        addEmployeeQuestion();
    })
};

// add manager questions
function managerQuestions(){
    // give user instructions to build team
    console.log("\nPlease build your team")
    
    inquirer.prompt([
        {
            type: "input",
            message: "What is the team manager's name?",
            name: "name"
        },
    
        {
            type: "input",
            message: "What is the team manager's email?",
            name: "email"
        },
    
        {
            type: "input",
            message: "What is the team manager's ID?",
            name: "id"
        },
        {
            type: "input",
            name: "office",
            message: "What is the team manager's office number?"
        }
    ])
    .then(answers => {
        const newManager = new Manager(answers.name, answers.email, answers.id, answers.office);

        employees.push(newManager);
        addEmployeeQuestion();
    })
};

function addEmployeeQuestion(){
    inquirer.prompt([
        {
            type:"confirm",
            name: "addEmployee",
            message:"Which type of team member would you like to add?"
        }
    ])

    // if user wants to add another employee run add employeeQuestions function, if not, create file
    .then(response =>{
        if(response.addEmployee === true){
            employeeQuestions();

        } else{
            writeToFile("./dist/index.html", teamMembers);
        }
    })
}

function writeToFile(fileName, data) {

    fs.writeFile(fileName, html(data), 
        // check for error, if not log to console success
        (err) => err ? console.error(err) : console.log("\nSuccess! Your HTML file has been generated.")
    );
}

managerQuestions()