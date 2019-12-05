const reset = '\x1b[0m'
const bright = '\x1b[1m'

const green = '\x1b[32m'
const blue = '\x1b[34m'
const cyan = '\x1b[36m'

console.log(`${bright}${green}@stencila/dev-config${reset}

${blue}If this is the first time you’re installing this package,
or wish to upgrade your configurations to a new version, run:${reset}

${cyan}> npx stencila-dev-config${reset}
`)
