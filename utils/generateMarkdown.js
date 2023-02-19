// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description 🔎
${data.description}

## Table of Contents 📖
* [Installation](#installation-⚙️)
* [Usage](#usage-🎮)
* [License](#installation)
* [Contributing](#contributing-🧑‍🤝‍🧑)
* [Tests](#tests-🧪)
* [Questions](#questions-🙋)

## Installation ⚙️
${data.installation}

## Usage 🎮
${data.usage}

## License
${data.license}

## Contributing 🧑‍🤝‍🧑
${data.contributing}

## Tests 🧪
${data.tests}

## Questions 🙋
If there are any questions, feel free to contact my email at: ${data.email}.
You can also find me on GitHub at: [${data.username}](https://www.github.com/${data.username})




`;
}

module.exports = generateMarkdown;
