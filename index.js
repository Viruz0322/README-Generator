// TODO: Include packages needed for this application
const inquirer = require('./node_modules/inquirer');

const generateMarkdown = require('./utils/generateMarkdown')

const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
   {
        type: "input",
        message: "What do you want your README file to be named?",
        name: "fileName"
   },
   //Cool Name
    {
        type: "input",
        message: "What is the name of your project?",
        name: "title"
    },
    //Description of the project
    {
        type: "input",
        message: "What is your project about?",
        name: "description"
    },
    //Badges
    {
    type: "list",
    message: "What kind of licence is your project?",
    name: "license",
    choices: [
        {name: 'MIT', value:"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"},
        {name: 'CC0', value:"[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"},
        {name: 'IBM', value:"[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"},
        {name: 'ISC', value:"[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"},
        ]
    },
    //Installation
    {
        type: "input",
        message: 'What is the installation process if any?',
        name: "installation"
    },
    //Usage
    {
        type: "input",
        message: "What is this used for?",
        name: "usage"
    },
    //Credits
    {
        type: "input",
        message: "Aside from yourself, who else contributed to the project?",
        name: "credits"
    },
    //How to Contribute
    {
        type: "input",
        message: "Where can other reach you for contribution?",
        name: "contribution"
    },
    //Tests
    {
        type: "input",
        message: "What kind of tests were run?",
        name: "tests"
    } 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(response => {
            const md = generateMarkdown(response)
            writeToFile(`${response.fileName}.md`, md)
        })
}

// Function call to initialize app
init();
