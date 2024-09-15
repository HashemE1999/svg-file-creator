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
  ]).then(answers => {
    //console.log('Logo text:', answers.logoText);
    //console.log('Selected text color:', answers.textColor);
    //console.log('Logo shape:', answers.shape);
    //console.log('Selected shape color:', answers.shapeColor);
    var shapeTest = new shapes(answers.logoText, answers.textColor, answers.shape, answers.shapeColor);
    shapeTest.testFunction();
    var svgString = shapeTest.renderSvg();
    writeToFile('logo.svg', svgString);
  });
  
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log("SVG file created successfully!")
    });
};