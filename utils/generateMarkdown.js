// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

![badge](https://img.shields.io/badge/license-${data.license}-blueviolet) 
  <br />

  This application is covered by the ${data.license} License.

 ## Description
 ${data.description}

 ------------------
 ------------------
 
 ## Table of Contents 🔎
   - [Description](#description)
   - [Installation](#installation)
   - [Usage](#usage)
   - [Credits](#credits)
   - [Experiances](#experiances)
   - [Licensing](#licensing)
   - [Questions](#questions)
 
 ------------------
 ------------------

 ## Installation
 ${data.installation}

 ------------------


 ## Usage
 ${data.usage}

 ------------------
 

 ## Credits
 ${data.credits}

 ------------------


 ## Experiances
 ${data.experiances}

 ------------------


 ## Licensing
 ${data.license}
 <br>
  ![badge](https://img.shields.io/badge/license-${data.license}-blueviolet) 
  <br />
  This application is covered by the ${data.license} License.


 ------------------


 ## Questions
 [GitHub](https://github.com/${data.github})
 [Email Me](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
