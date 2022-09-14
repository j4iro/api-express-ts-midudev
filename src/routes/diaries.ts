import express from 'express' // ESModule
import * as diaryServices from '../services/diaryService'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diaryEntry = diaryServices.findById(+req.params.id)

  return (diaryEntry != null) ? res.send(diaryEntry) : res.sendStatus(404)
})

router.post('/', (_req, res) => {
  res.send('saving valorant')
})

export default router
