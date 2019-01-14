import * as express from 'express'

const app = express()

const html = `
<div>
  <div>💡 Please fork this CodeSandbox in order to run the examples.</div>
  <div>👉 <strong>Follow the instructions <a href="https://github.com/prisma-csb/prisma-client-demo-ts/blob/master/SETUP.md">here</a>.</strong></div>
  <div>▶️ Once you're done, run <code>$ yarn demo</code> to get started.</div>
</div>
`

app.get('/', (req, res) => {
  res.send(html)
})

app.listen(3000, function() {
  console.log('Server started on http://localhost:3000')
})
