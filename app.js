const inquirer = require("inquirer")
const fs = require("fs")
const employee = require("./lib/employee")
const engineer = require("./lib/engineer")
const intern = require("./lib/intern")
const manager = require("./lib/Manager");
const htmlString = require("./lib/htmlString.js")

function startProgram() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the manager's name ?",
            name: "name",
        },
        {
            type: "input",
            message: "what is your managers ID ?",
            name: "ID",
        },
        {
            type: "input",
            message: "What is your managers email ?",
            name: "email",
        },
        {
            type: "input",
            message: "What is your managers office number ?",
            name: " officeNumber",
        },
    ]
    )
}
