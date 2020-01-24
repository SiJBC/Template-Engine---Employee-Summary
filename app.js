const inquirer = require("inquirer")
const fs = require("fs")
const Employee = require("./lib/employee.js")
const Engineer = require("./lib/engineer.js")
const Intern = require("./lib/intern.js")
const Manager = require("./lib/Manager.js");
const htmlString = require("./lib/htmlString.js")
const team = htmlString



function init() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: `What is your manager's name?`
        },
        {
            type: "input",
            name: "id",
            message: `What is your manager's ID?`
        },
        {
            type: "input",
            name: "email",
            message: `What is your manager's email?`
        },
        {
            type: "input",
            name: "officeNumber",
            message: `What is your manager's office number?`
        }
    ])
}

function buildTeam() {
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "What type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"]
        }

    ])
        .then((answer) => {
            if (answer.role === "Engineer") {
                return inquirer.prompt([
                    {
                        type: "input",
                        name: "name",
                        message: `What is your engineer's name?`
                    },
                    {
                        type: "input",
                        name: "id",
                        message: `What is your engineer's ID?`
                    },
                    {
                        type: "input",
                        name: "email",
                        message: `What is your engineer's email?`
                    },
                    {
                        type: "input",
                        name: "github",
                        message: `What is your engineer's GitHub??`
                    }
                ]).then((answers) => {
                    let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                    console.log(engineer)
                    let engineerHtml = `${answers.name, answers.id, answers.email, answers.github}`
                    fs.appendFile("engineer.html", engineerHtml, function (err) {
                        if (err) {
                            return console.log(err);
                        }
                    })

                    buildTeam();
                })
            }
            if (answer.role === "Intern") {
                return inquirer.prompt([
                    {
                        type: "input",
                        name: "name",
                        message: `What is your intern's name?`
                    },
                    {
                        type: "input",
                        name: "id",
                        message: `What is your intern's ID?`
                    },
                    {
                        type: "input",
                        name: "email",
                        message: `What is your intern's email?`
                    },
                    {
                        type: "input",
                        name: "school",
                        message: `What is your intern's school?`
                    }

                ]).then((answers) => {
                    let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                    console.log(intern)
                    let internHtml = `${answers.name, answers.id, answers.email, answers.school}`
                    fs.appendFile("intern.html", internHtml, function (err) {
                        if (err) {
                            return console.log(err);
                        }
                    })
                    buildTeam();
                })
            }
            if (answer.role === "I don't want to add any more team members") {
                console.log("please check your file")



            }
        })


}

init()
    .then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        let managerHtml = `${answers.name, answers.id, answers.email, answers.school}`
        console.log(manager)
        fs.appendFile("manager.html", managerHtml, function (err) {
            if (err) {
                return console.log(err);
            }
        })
        buildTeam();
    });

// create html files, populate those with the information from inquirer and
//  then append all those onto the main html read file write file,
//  fs package, use the readme...