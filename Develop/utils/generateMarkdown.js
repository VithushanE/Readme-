// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license!=  "None"){
    return ` ! [GitHub license](https://img.shields.io/badge/license-${license}2.0-blue.svg) \n`
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != "None"){
    return `\n* [License](#license)\n`
}
return '';
}
    
 
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license){
  if(license !== 'None'){
      return`
      This project is licensed under the ${license} license.
      For more information about the license, click on the link below.
      -[License] (https://opensource.org/licenses/${license})`
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 
  return`
<h1> ${data.Title}</h1> \n
  
${renderLicenseBadge(data.license)}

<h1> Description</h1>
  ${data.description}

<h1>Table of Contents </h1> \n
* [Installation](#installation) \n 
* [Usage](#Usage) \n
${renderLicenseLink(data.license)} \n
* [contribution](#contribution) \n
* [Test](#Test) \n
* [Questions](#Questions) \n


## Installation
  ${data.installation}

## Usage 
  ${data.Usage}

## License 
  ${renderLicenseSection(data.license)}

## Contribution 
  ${data.contribution}

## Test 
  ${data.Test}

## Questions 
  For questions about my generator, please go to my Github page at: (https://github.com/${data.GitHubUsername})    
  For additional questions please eamil me at: ${data.GitHubEmail}
`;
}


module.exports = generateMarkdown
