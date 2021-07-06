const express = require('express')
const app = express()

app.get('/', (req,res) => {
  res.sendFile(__dirname +'/index.html')
})

app.post('/addRecipe', (req, res) => {
  console.log('Hellooooooooooooooooo!')
})

app.listen(3000, function() {
  console.log('listening on 3000')
})
