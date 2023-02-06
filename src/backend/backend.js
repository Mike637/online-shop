const express = require('express')

const PORT = process.env.port || 3001
const app = express()

app.listen(PORT, () => {
  console.log(`Server start on port ${PORT}`)
})
app.get('/api', (req, res) => {
  res.json({
    name: 'MIke',
  })
})
