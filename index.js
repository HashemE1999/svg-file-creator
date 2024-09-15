// Templates provided by Xpert Learning Asssistant
const inquirer = require("inquirer");
const fs = require("fs");

const shapes = require("./lib/shapes.js");

inquirer
.prompt([
    // Prompts user to input up to 3 characters for the logo text
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
    },
    // Prompts user to input text color as either a color keyword or a hexadecimal number
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (color keyword or hexadecimal number):',
      validate: function(input) {
        return true;
      }
    },
    // Prompts user to select a triangle, circle or square from a list for the logo shape
    {
      type: 'list',
      name: 'shape',
      message: 'Select the shape for your logo:',
      choices: ['Triangle', 'Circle', 'Square']
    },
    // Prompts user to input shape color as either a color keyword or a hexadecimal number
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (color keyword or hexadecimal number):',
      validate: function(input) {
        return true;
      }
    }
    // Creates shapeTest variable that takes prompt answers and uses them to create a new child class based on the Shape constructor function from shapes.js
  ]).then(answers => {
    var shapeTest = new shapes(answers.logoText, answers.textColor, answers.shape, answers.shapeColor);
    // Calls testFunction from shapes.js on shapeTest var
    shapeTest.testFunction();
    // Creates new var svgString by calling renderSvg function on shapeTest
    var svgString = shapeTest.renderSvg();
    // Creates file using generated content in svgString
    writeToFile('logo.svg', svgString);
  });
  // Logs message "Generated logo.svg" to terminal on generation of file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg")
    });
};