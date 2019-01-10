import { determineScript } from './helpers/determineScript'
import { execute } from './helpers/execute'

async function main() {
  // Determine which script to run by launching an interactive wizard
  const script = await determineScript()

  // Execute the script
  await execute(script)
}

main()
