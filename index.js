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
        message: "What is your project title?",
        
    },
    // prompt for project Description
    {
        type: "input",
        name: "description",
        message: "Please enter your project description.",
    
    },

    // prompt for Installation instruction
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?",
        
    },

    // Question for Usage
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples of how to use this project.",
        
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

    // QUESTIONS section -- github 
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?",
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
    inquirer.prompt(questions).then((data) => console.log("Success!"));

}

// function call to initialize program
init();
