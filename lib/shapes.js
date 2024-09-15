const inquirer = require("inquirer");
const fs = require("fs");

// Defines Shape class with constructor function using prompt answers imported from index.js file as parameters
class Shape {
    constructor(logoText, textColor, shape, shapeColor) {
        //(logoText, textColor, shape, shapeColor);
        this.logoText = logoText;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    };
    // Test function that logs answers to prompts to check if everything is working correctly
    testFunction() {
        console.log(this.logoText, this.textColor, this.shape, this.shapeColor);
    }
    // Renders template code for shapes using var emptyString, if-statements, templates from W3 Schools and answers to prompts
    renderSvg() {
        var emptyString = "";
        if (this.shape == 'Triangle') {
            emptyString = `<polygon points="100,10 150,190 50,190" style="fill:${this.shapeColor};stroke:purple;stroke-width:3" />`
        };
        if (this.shape == 'Circle') {
            emptyString = `<circle r="45" cx="50" cy="50" fill="${this.shapeColor}" />`
        };
        if (this.shape == 'Square') {
            emptyString = `<rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill="${this.shapeColor}" />`
        };
        var svgString2 = `<text fill = "${this.textColor}">${this.logoText}</text>`
        var svgString = `<svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">${emptyString}${svgString2}</svg>`
        return svgString;
    };
};

module.exports = Shape;