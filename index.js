// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs")
const path = require('path')
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of the repo"
    },
    {
        type: "list",
        name: "license",
        message: "What license is used in the repo",
        choices: ["MIT", "GPL", "None"]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userPrompts)=>{
        writeToFile("Output/readme.md", generateMarkdown(userPrompts))
        
    })
}

// Function call to initialize app
init();
