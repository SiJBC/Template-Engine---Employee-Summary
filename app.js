const inquirer = require("inquirer");
const fs = require("fs");
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
        console.log(`Manager ${answers.name} profile has been added`)
        buildTeam();
    });

function init() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: `What is your manager's name?`,
            validate: function (name) {
                if (/[a-z]/gi.test(name)) {
                    return true;
                }
                else console.log("please enter a valid name only containing letters")
            }
        },
        {
            type: "input",
            name: "id",
            message: `What is your manager's ID?`,
            validate: function (name) {
                if (/[1-9]/gi.test(name)) {
                    return true;
                }
                else console.log("please enter a valid ID number")
            }
        },
        {
            type: "input",
            name: "email",
            message: `What is your manager's email?`,
            validate: function (name) {
                if (/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/gi.test(name)) {
                    return true;
                }
                else console.log("please enter a valid email address in the format user@domain.com")
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: `What is your manager's office number?`,
            validate: function (name) {
               
                if (/[1-9]/gi.test(name)) {
                    return true;
                }
                else console.log("please enter a valid ID number")
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
            choices: ["Manager", "Engineer", "Intern", "I don't want to add any more team members"]
        }

    ])
        .then((answers) => {
            if (answers.role === "Engineer") {
                return inquirer.prompt([
                    {
                        type: "input",
                        name: "name",
                        message: `What is your engineer's name?`,
                        validate: function (name) {
                            if (/[a-z]/gi.test(name)) {
                                return true;
                            }
                            else console.log("please enter a valid name only containing letters")
                       }
                    },
                    {
                        type: "input",
                        name: "id",
                        message: `What is your engineer's ID?`,
                        validate: function (name) {
                            if (/[1-9]/gi.test(name)) {
                                return true;
                            }
                            else console.log("please enter a valid ID number")
                       }
                    },
                    {
                        type: "input",
                        name: "email",
                        message: `What is your engineer's email?`,
                        validate: function (name) {
                            if (/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/gi.test(name)) {
                                return true;
                            }
                            else console.log("please enter a valid email in the format user@domain.com")
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
                            else console.log("please enter a valid Github username")
                        }
                    }

                ]).then((answers) => {
                    let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                    console.log(`Engineer ${answers.name} profile has been added`)
                    let engineerHtml = GenerateHtml.engineer(engineer)
                    fs.appendFile("./output/index.html", engineerHtml, function (err) {
                        if (err) {
                            return console.log(err);
                        }
                    })

                    buildTeam();
                })
            }
            if (answers.role === "Intern") {
                return inquirer.prompt([
                    {
                        type: "input",
                        name: "name",
                        message: `What is your intern's name?`,
                        validate: function (name) {
                            if (/[a-z]/gi.test(name)) {
                                return true;
                            }
                            else console.log("please enter a valid name only containing letters")
                       }
                    },
                    {
                        type: "input",
                        name: "id",
                        message: `What is your intern's ID?`,
                        validate: function (name) {
                            if (/[1-9]/gi.test(name)) {
                                return true;
                            }
                            else console.log("please enter a valid ID number")
                       }
                    },
                    {
                        type: "input",
                        name: "email",
                        message: `What is your intern's email?`,
                        validate: function (name) {
                            if (/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/gi.test(name)) {
                                return true;
                            }
                            else console.log("please enter a valid email in the format user@domain.com")
                        }
                    },
                    {
                        type: "input",
                        name: "school",
                        message: `What is your intern's school?`,
                        validate: function (name) {
                            if (/[a-z]/gi.test(name)) {
                                return true;
                            }
                            else console.log("please enter a valid name only containing letters")
                        }
                    }

                ]).then((answers) => {
                    let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                    console.log(`Intern ${answers.name} profile has been added`)
                    let internHtml = GenerateHtml.intern(intern)
                fs.appendFile("./output/index.html", internHtml, function (err) {
                    if (err) {
                        return console.log(err);
                    }
                })
                    buildTeam();
                })
            }
            if(answers.role === "Manager")
            return inquirer.prompt ([
                {
                    type: "input",
                    name: "name",
                    message: `What is your manager's name? 
                    answer must be a word to continue`,
                    validate: function (name) {
                        return /[a-z]/gi.test(name);
                    }
                },
                {
                    type: "input",
                    name: "id",
                    message: `What is your manager's ID? 
                    your answer must be a number to continue`,
                    validate: function managerIDValidate(name) {
                        return /[1-9]/gi.test(name);
                    }
                },
                {
                    type: "input",
                    name: "email",
                    message: `What is your manager's email? 
                    use email format "user@domain.com" to continue`,
                    validate: function managerEmailValidate(name) {
                        return /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/gi.test(name);
                    }
                },
                {
                    type: "input",
                    name: "officeNumber",
                    message: `What is your manager's office number?
                    answer with numbers to continue`,
                    validate: function managerOfficeNumberValidate(name) {
                        return /[1-9]/gi.test(name);
                   }
                }
            ]).then((answers) => {
                const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
                console.log(manager)
                let managerHtml = GenerateHtml.manager(manager);
            fs.appendFile("./output/index.html", managerHtml, function (err) {
                if (err) {
                    return console.log(err);
                }
            })
                buildTeam();
            })
        

            if (answers.role === "I don't want to add any more team members") {
                let footerHtmlString = GenerateHtml.footer();
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


