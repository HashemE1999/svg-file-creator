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
    // Function that logs answers to prompts
    testFunction() {
        console.log(this.logoText, this.textColor, this.shape, this.shapeColor);
    }
    // Renders template code for shapes using var emptyString, if-statements, templates from W3 Schools and answers to prompts
    renderSvg() {
        var emptyString = "";
        if (this.shape == 'Triangle') {
            emptyString = `<polygon points="150,0 300,200 0,200" style="fill:${this.shapeColor}" />`
        };
        if (this.shape == 'Circle') {
            emptyString = `<circle r="90" cx="150" cy="105" fill="${this.shapeColor}" />`
        };
        if (this.shape == 'Square') {
            emptyString = `<rect width="500" height="500" x="10" y="10" fill="${this.shapeColor}" />`
        };
        var svgString2 = `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="24" fill = "${this.textColor}">${this.logoText}</text>`
        var svgString = `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">${emptyString}${svgString2}</svg>`
        return svgString;
    };
};

module.exports = Shape;