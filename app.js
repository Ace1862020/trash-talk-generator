// require related modules used in the project
// include packages and define server related variable
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTrashTalk = require('./generate_trashtalk')
const handlebars = require('handlebars')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting and to use body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// include helper
handlebars.registerHelper('ifit', function (job, checkJob, options) {
  if (job === checkJob) {
    return options.fn(this)
  }
  return options.inverse(this)
})

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  // chosen staff
  const roles = req.body.colleague
  console.log(req.body.colleague)
  console.log(req.body)
  // correspond to the status of the render index 
  const trashTalk = generateTrashTalk(roles)
  res.render('index', { roles: roles, trashTalk: trashTalk })
})

// starts the express server and listening for connections
app.listen(port, () => {
  console.log(`Express app listening on port ${port}`)
})