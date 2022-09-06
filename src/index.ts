import express from 'express'

import diarieRouter from './routes/diaries'

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/api/v1/users', (_req, res) => {
  return res.json([
    { name: 'John', date: new Date().toLocaleDateString() },
    { name: 'Jane' }
  ])
})

app.use('api/diaries', diarieRouter)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
