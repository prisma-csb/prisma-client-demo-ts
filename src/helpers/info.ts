import * as express from 'express'

const app = express()

const html = `
<html>
<head>
  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gist-embed/2.7.1/gist-embed.min.js"></script>
</head>
<body>
 <code data-gist-id="1bef06e6539ad9e7cbca0fa68384b2aa"></code>
</body>
</html>
`

app.get('/', (req, res) => {
  res.send(html)
})

app.listen(3000, function() {
  console.log('Server started on http://localhost:3000')
})
