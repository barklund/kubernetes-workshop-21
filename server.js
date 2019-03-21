import express from 'express'
const app = express()

app.get('/', (req, res ) => {
  res.send('Hello March 21 For the last time (maybe)!')
})

const PORT = process.env.PORT || 9000
app.listen(PORT, () => console.log('Listening on http://localhost:' + PORT))
