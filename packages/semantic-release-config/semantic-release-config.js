module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    // `npm` must come before `git` so that updates to `package.json`
    // and `package-lock.json` are committed.
    '@semantic-release/npm',
    '@semantic-release/git',
    '@semantic-release/github'
  ]
}
