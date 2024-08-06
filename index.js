const inquirer = require("inquirer");
const fs = require("fs");
// Prompts user to input up to 3 characters
// Template by Xpert Learning Assistant
inquirer.prompt([
    {
        type: 'input',
        name: 'logoText',
        message: 'Enter up to three characters for the logo:',
        validate: function(input) {
            if (input.length > 3) {
                return 'Please enter up to three characters.';
            }
            return true;
        }
    }
]).then(answers => {
    console.log('Logo Text:', answers.logoText);
});