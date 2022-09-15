import express from 'express' // ESModule
import * as diaryServices from '../services/diaryService'
import { toNewDiaryEntry } from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diaryEntry = diaryServices.findById(+req.params.id)

  return (diaryEntry != null) ? res.send(diaryEntry) : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const addedDiarieEntry = diaryServices.addDiary(newDiaryEntry)

    res.json(addedDiarieEntry)
  } catch (e) {
    res.status(404).json({ error: e.message })
  }
})

export default router
