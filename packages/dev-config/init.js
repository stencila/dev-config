const fs = require('fs')
const path = require('path')
const writePkg = require('write-pkg')

const cwd = process.env.INIT_CWD
const pkgPath = path.join(cwd, 'package.json')

const readPkg = async () =>
  new Promise((resolve, reject) =>
    fs.readFile(pkgPath, (err, data) => (err ? reject(err) : resolve(data)))
  )

const mergeConfigs = (config, newConfig) => ({
  ...config,
  ...newConfig
})

// New configurations to merge in to the project's `package.json`
const prettierConfig = {
  prettier: '@stencila/dev-config/prettier-config.json'
}

const husky = {
  husky: {
    hooks: {
      'pre-commit': 'pretty-quick --staged',
      'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS'
    }
  }
}

const esLint = {
  eslintConfig: {
    extends: '@stencila/eslint-config'
  }
}

const semanticRelease = {
  release: {
    extends: '@stencila/semantic-release-config'
  }
}

const configurations = [prettierConfig, husky, esLint, semanticRelease]

// Update the project's `package.json`
;(async () => {
  const pkg = JSON.parse(await readPkg())
  const updatedPkg = configurations.reduce(mergeConfigs, pkg)

  writePkg(cwd, updatedPkg)
})()
