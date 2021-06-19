// include packages and define server related variables
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const port = 3000
const generatePassword = require('./generatePassword')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const password = generatePassword(req.body)
  res.render('index', {password: password, options: options})
})

// starts the express server and listening for connections
app.listen(port, () => {
  console.log(`Express app listening on port ${port}`)
})