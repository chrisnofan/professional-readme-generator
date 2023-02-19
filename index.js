const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
    
    // prompt for project title
    {
        type: "input",
        name: "title",
        message: "Project title?",
        
    },
    // prompt for project Description
    {
        type: "input",
        name: "description",
        message: "Project description?",
    
    },

    // prompt for Installation instruction
    {
        type: "input",
        name: "installation",
        message: "Installation instructions?",
        
    },

    // Question for Usage
    {
        type: "input",
        name: "usage",
        message: "Project usage instructions?",
        
    },
    
    // Question for Contributing 
    {
        type: "input",
        name: "contributing",
        message: "How can users contribute to your project.",
        
    },

    // Question for Tests
    {
        type: "input",
        name: "tests",
        message: "Please enter any testing instructions you would like to provide for this project.",
        
    },

    // Question for License 
    {
        type: "list",
        name: "license",
        message: "Please select a license for this project.",
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Apache 2.0",
            "Boost Software 1.0",
            "MIT",
            "Mozilla",
        ],
        
    },

    // QUESTIONS section -- github 
    {
        type: "input",
        name: "userName",
        message: "Your GitHub username?",
    },

    // QUESTIONS section -- email address
    {
        type: "input",
        name: "userEmail",
        message: "What is your GitHub email address that contributors may contact?",
        
    },

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((data) => {
        fs.writeFile('Readme.md', generateMarkdown(data), (err) =>
      err ? console.log(err) : console.log('Success!')
    )}
)}

// function call to initialize program
init();
