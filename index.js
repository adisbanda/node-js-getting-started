const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000
const app = express()

app.get('/ping', (req, res) => {
    res.send('pong');
})

app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
