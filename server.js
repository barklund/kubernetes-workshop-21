import express from 'express'
const app = express()

app.get('/', (req, res ) => {
  res.send('Hello March 21 Once Again!')
})

const PORT = process.env.PORT || 9000
app.listen(PORT, () => console.log('Listening on http://localhost:' + PORT))
