const inquirer = require('inquirer');
const fs = require('fs');

const index = require('./index.js');

// Defines Shape class with constructor function using prompt answers imported from index.js file as parameters
class Shape {
    constructor(logoText, textColor, shape, shapeColor) {
        super(logoText, textColor, shape, shapeColor);
    }
}