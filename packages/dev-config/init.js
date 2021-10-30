#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const writePkg = require('write-pkg')

const cwd = process.env.INIT_CWD || process.cwd()

// Configurations to merge into `package.json`

const prettier = {
  prettier: '@stencila/dev-config/prettier-config.json'
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

const commitLint = {
  commitlint: {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'scope-case': [2, 'always', 'sentence-case'],
      'subject-case': [2, 'always', 'sentence-case']
    }
  }
}

const renovate = {
  renovate: {
    extends: ['@stencila']
  }
}

const configurations = [commitLint, esLint, prettier, renovate, semanticRelease]

// Files to copy to the project (if missing)

const files = [
  path.join('.vscode', 'extensions.json'),
  path.join('.vscode', 'settings.json'),
  '.editorconfig'
]

// Update the project's `package.json`

const pkgPath = path.join(cwd, 'package.json')

const readPkg = async () =>
  new Promise((resolve, reject) =>
    fs.readFile(pkgPath, (err, data) => (err ? reject(err) : resolve(data)))
  )

const mergeConfigs = (config, newConfig) => ({
  ...config,
  ...newConfig
})

;(async () => {
  const pkg = JSON.parse(await readPkg())
  const updatedPkg = configurations.reduce(mergeConfigs, pkg)
  writePkg(cwd, updatedPkg)
})()

// Copy missing files to the project

files.forEach(file => {
  const src = path.join(__dirname, file)
  const dest = path.join(cwd, file)
  if (!fs.existsSync(dest)) {
    const dir = path.dirname(dest)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir)
    }
    fs.copyFile(src, dest, err => {
      if (err) throw err
    })
  }
})
