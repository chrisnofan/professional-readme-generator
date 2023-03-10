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
            'Apache License 2.0',
            'Boost Software License 1.0',
            'BSD 3-Clause "New" or "Revised" license',
            'GNU General Public License v2.0',
            'MIT license',
            'Mozilla Public License 2.0',
            'The Unlicense',
        ],
        
    },

    // QUESTIONS section -- github 
    {
        type: "input",
        name: "username",
        message: "Your GitHub username?",
    },

    // QUESTIONS section -- email address
    {
        type: "input",
        name: "email",
        message: "What is your GitHub email address that contributors may contact?",
        
    },

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((data) => {
        fs.writeFile('./sample/README.md', generateMarkdown(data), (err) =>
      err ? console.log(err) : console.log('A Professional README file for your project has been successfully created in the Sample folder')
    )}
)}

// function call to initialize program
init();
