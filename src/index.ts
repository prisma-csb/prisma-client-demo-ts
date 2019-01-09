import { exec } from 'child_process'
import { checkWritesEnabled } from './helpers/checkWritesEnabled'
import { determineScript } from './helpers/determineScript'

async function main() {

  // Determine command
  const writesEnabled = await checkWritesEnabled()
  const script = await determineScript(writesEnabled)
  const command = `yarn ${script}`

  // Run command
  console.log(`\$ ${command}`)
  exec(command, (err, stdout) => {
    console.log(stdout)
  })

}

main()
