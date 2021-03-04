const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('UTD')
})

app.listen(port, () => {
  console.log(`Ejemplo en http://localhost:${port}`);
  console.log(`Hola Carlo`)
})