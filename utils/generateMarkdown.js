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
  return `# ${data.title}
  
  ${data.license}

  ## Description
${data.description}

  ## Table of Contents
  -[Description](#description)
  -[License](#license)
  -[Installation](#installation)
  -[Usage](#usage)
  -[Credits](#credits)
  -[Contribution](#contribution)
  -[Tests](#tests)

  ## License
${data.license}

  ## Installation
${data.installation}

  ## Usage
${data.usage}

  ## Credits
${data.credits}

  ## Contribution
${data.contribution}

  ## Tests
${data.tests}

`;
}

module.exports = generateMarkdown;
