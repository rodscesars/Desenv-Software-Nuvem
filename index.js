const express = require('express');
const path = require('path')

const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.resolve('./views'));
app.use(express.static(__dirname + "/public/"))



app.get('/', (req, res) => {
  res.render('home')
});

app.listen(3000, () => {
  console.log('server started');
});
