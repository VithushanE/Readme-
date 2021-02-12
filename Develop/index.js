// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
const util = require ('util')
const writeFileAsync = util.promisify(fs.writeFile);
const question = [`What is the title of your Project?`,
`What is the description of your project? `,
`What are the installation instructions?`,
`How would you like your application to be used?`,
`Please chooose your license?`,
`Who contributed on this project?`,
`What are the test instructions?`,
`What is your github Username?`,
`What is your email ?`]


// TODO: Create an array of questions for user input
function promptUser() {
    return inquirer.prompt(
        [
            {
                type: 'input',
                message: `${question[0]}`,
                name: 'Title'
            },
            {
                type: 'input',
                message: `${question[1]}`,
                name: 'description'
            },
            {
                type: "input",
                message: `${question[2]}`,
                name: 'installation'
            },
            {
                type: "input",
                message: `${question[3]}`,
                name: 'Usage'
            },
            {
                type: 'list',
                message: `${question[4]}`,
                choices: [
                    "Apache",
                    "MIT",
                    "ISC",
                    "GNU GPLv3",
                    "None"
                ],
                name: "license"
            },
            {
                type: "input",
                message: `${question[5]}`,
                name: 'contribution'
            },
            {
                type: "input",
                message: `${question[6]}`,
                name: 'Test'
            },
            {
                type: "input",
                message: `${question[7]}`,
                name: 'GitHubUsername'
            },
            {
                type: "input",
                message: `${question[8]}`,
                name: 'GitHubEmail'
            },
    
        ]
    )
}

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

//create a file named mynewfile3.txt:

// TODO: Create a function to initialize app

// Function call to initialize app

async function init() {
    try {
        const response = await promptUser();

        const readMe = generateMarkdown(response);

        await writeFileAsync('README.md', readMe)
        console.log('Success!')
    } catch (err) {
        console.log(err);
    }
}
 
init()