import * as inquirer from 'inquirer'
import { exec } from 'child_process'
import {
  initialChoices,
  readingChoices,
  writingChoices,
  moreChoices,
} from './helpers/choices'
import { checkWritesEnabled } from './helpers/checkWritesEnabled' 

async function main() {

  const writesEnabled = await checkWritesEnabled()

  const initialAnswer = await inquirer.prompt([
    {
      type: 'list',
      name: 'theme',
      message: 'Which part of the Prisma client API do you want to explore?',
      choices: initialChoices,
    },
  ])
  var finalChoices = []
  if (initialAnswer.theme === initialChoices[0]) {
    // Reading data
    finalChoices = readingChoices
  } else if (initialAnswer.theme === initialChoices[1]) {
    // Writing data
    if (!writesEnabled) {
      console.log(`You need to fork this Sandbox and regenerate the Prisma client with your own database to perform writes. \nMore info here: TODO`)
      process.exit()
    }
    finalChoices = writingChoices
  } else if (initialAnswer.theme === initialChoices[2]) {
    // More
    console.log(`You need to fork this Sandbox and regenerate the Prisma client with your own database to explore these features. \nMore info here: TODO`)
    process.exit()
    finalChoices = moreChoices
  } else {
    console.error(`Choice not found`)
    process.exit()
  }
  const finalAnswer = await inquirer.prompt([
    {
      type: 'list',
      name: 'theme',
      message: 'What do you want to do?',
      choices: finalChoices,
    },
  ])
  const command = `yarn ${finalAnswer.theme}`
  console.log(`Run \$ ${command}`)
  exec(command, (err, stdout) => {
    console.log(stdout)
  })
}

main()
