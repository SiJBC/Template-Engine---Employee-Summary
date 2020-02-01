const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js")
const Manager = require("./lib/Manager.js");
const open = require('open');
const GenerateHtml = require('./lib/htmlString.js')

// initiate the program by setting up the html document to add the employee info into,
// as the team will be run by a single manager the manager question prompts run when the application is first opened

init()
    // after we have run our intial function where we get the user info for the manager we are setting up a promise where we enter in the user input
    .then((answers) => {
        // we are using the class constructor to generate a new variable that we can enter into our html file
        let headerHtmlString = GenerateHtml.header();
        // initially we want to set up a new html document so we use the write file fs function
        fs.writeFile("./output/index.html", headerHtmlString, function (err) {
            if (err) {
                return console.log(err);
            }
        })
        // here we enter the manager values into our manager object in the class constructor
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        let managerHtml = GenerateHtml.manager(manager);
        fs.appendFile("./output/index.html", managerHtml, function (err) {
            if (err) {
                return console.log(err);
            }
        })
        console.log(`Manager ${answers.name} profile has been added`)
        keepBuilding();
    });

// prompting for manager questions
function init() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: `What is your manager's name?`,
            // use the validation and regular expression to check that the strings matches the expected format and syntax in this case it must be a word containing only letters
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
            // the format must be only numbers
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
            // the format must match the typical email format of user@domain.syntax
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
                // the fomat must be only numbers
                if (/[1-9]/gi.test(name)) {
                    return true;
                }
                else console.log("please enter a valid ID number")
            }
        }
    ])
}

// decide if the user wants to add more team members or not
function keepBuilding() {
    inquirer.prompt([
        {
            type: "confirm",
            name: "moreTeamMembers",
            message: "would you like to add any more team members ?"
        }
    ])

        .then((answers) => {
            if (answers.moreTeamMembers === true) {
                // if the user decides to add more members then the function to continue building the team is run
                continueTeam()
            }
            // if the user decides not to add more members then the function to open the html is run
            else { openHTML() }
        })
}

// continue building the team function 
// both engineer and intern answer the same initial questions the first three questions prompts are the same for both
function continueTeam() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your team members name ?",
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
            message: " what is your team members ID number ?",
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
            message: `What is your team members email?`,
            validate: function (name) {
                if (/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/gi.test(name)) {
                    return true;
                }
                else console.log("please enter a valid email in the format user@domain.com")
            }
        },
        {
            type: "list",
            name: "role",
            message: "What type of team member would you like to add?",
            choices: ["Engineer", "Intern"]
        },
    ])
        // we use a promise statement to run an extra function where we are checking if the user would like to add an intern or an engineer
        .then((answers) => {
            getRole(answers)
        })
}

function getRole(answers) {
    // a condition statement is used to determine which code is run
    if (answers.role === "Engineer") {

        inquirer.prompt([{
            type: "input",
            name: "github",
            message: `What is your engineer's GitHub?`,
            // as only the engineers github is required then only that question is included
            validate: function (name) {
                // as github usernames can have numbers and special symbols we just want to make sure that it is not an empty string
                if (name != ``) {
                    return name != ``;
                }
                else console.log("please enter a valid Github username")
            }
        }
        ])
            // using the class constructor from engineer.js to create a new variable which enters the information into the html file
            .then((role) => {
                let engineer = new Engineer(answers.name, answers.id, answers.email, role.github);
                console.log(`Engineer ${answers.name} profile has been added`)
                let engineerHtml = GenerateHtml.engineer(engineer)
                fs.appendFile("./output/index.html", engineerHtml, function (err) {
                    if (err) {
                        return console.log(err);
                    }
                })
                keepBuilding();

            })

    }

    //  prompting for the intern information
    else {
        inquirer.prompt([
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
        ])

            .then((role) => {
                let intern = new Intern(answers.name, answers.id, answers.email, role.school);
                console.log(`Intern ${answers.name} profile has been added`)
                let internHtml = GenerateHtml.intern(intern)
                fs.appendFile("./output/index.html", internHtml, function (err) {
                    if (err) {
                        return console.log(err);
                    }
                    keepBuilding();
                })


            })
    }
}
// function to open the html file 
function openHTML(answers) {
    // close the html file by adding in the end of the html string
    let footerHtmlString = GenerateHtml.footer();
    fs.appendFile("./output/index.html", footerHtmlString, function (err) {
        if (err) {
            return console.log(err);
        }
    })
    // use the npm module open to run the file in the browser
    open('./output/index.html');
    return
}




