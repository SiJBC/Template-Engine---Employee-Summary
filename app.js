const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js")
const Manager = require("./lib/Manager.js");
const open = require('open');
const GenerateHtml = require('./lib/htmlString.js')

init()
    .then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        let headerHtmlString = GenerateHtml.header();
        fs.writeFile("./output/index.html", headerHtmlString, function (err) {
            if (err) {
                return console.log(err);
            }
        })
        let managerHtml = GenerateHtml.manager(manager);
        fs.appendFile("./output/index.html", managerHtml, function (err) {
            if (err) {
                return console.log(err);
            }
        })
        console.log("Your manager has been added")
        buildTeam();
    });

function init() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: `What is your manager's name?`,
            validate: function managerNameValidate(name) {
                return /[a-z1-9]/gi.test(name);
            }
        },
        {
            type: "input",
            name: "id",
            message: `What is your manager's ID?`,
            validate: function managerIDValidate(name) {
                if (name != ``) {
                    return name != ``;
                }
                else console.log("please enter a valid name")
            }
        },
        {
            type: "input",
            name: "email",
            message: `What is your manager's email?`,
            validate: function managerEmailValidate(name) {
                return /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/gi.test(name);
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: `What is your manager's office number?`,
            validate: function managerOfficeNumberValidate(name) {
                if (name != ``) {
                    return name != ``;
                }
                else console.log("please enter a valid name")
           }
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
                        message: `What is your engineer's name?`,
                        validate: function EngineerNameValidate(name) {
                            if (name != ``) {
                                return name != ``;
                            }
                            else console.log("please enter a valid name")
                       }
                    },
                    {
                        type: "input",
                        name: "id",
                        message: `What is your engineer's ID?`,
                        validate: function engineerIdValidate(name) {
                            if (name != ``) {
                                return name != ``;
                            }
                            else console.log("please enter a valid name")
                       }
                    },
                    {
                        type: "input",
                        name: "email",
                        message: `What is your engineer's email?`,
                        validate: function engineerEmailValidate(name) {
                            if (name != ``) {
                                return name != ``;
                            }
                            else console.log("please enter a valid name")
                        }
                    },
                    {
                        type: "input",
                        name: "github",
                        message: `What is your engineer's GitHub??`,
                        validate: function engineerGithublValidate(name) {
                            if (name != ``) {
                                return name != ``;
                            }
                            else console.log("please enter a valid name")
                        }
                    }

                ]).then((answers) => {
                    let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                    console.log(engineer)
                    let engineerHtml = GenerateHtml.engineer(engineer)
                    fs.appendFile("./output/index.html", engineerHtml, function (err) {
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
                    let internHtml = GenerateHtml.intern(intern)
                fs.appendFile("./output/index.html", internHtml, function (err) {
                    if (err) {
                        return console.log(err);
                    }
                })
                    buildTeam();
                })
            }
            if (answer.role === "I don't want to add any more team members") {
                fs.appendFile("./output/index.html", footerHtmlString, function (err) {
                    if (err) {
                        return console.log(err);
                    }
                })
                open('./output/index.html');
                return
            }
        })


}


