const api = require('../src/core/api.js')

api.downloadGitRepo('assuming/vue-gt', './templateTest', err => {
  if (err) {
    throw err
  }

  console.log('done!')
})