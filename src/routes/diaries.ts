import express from 'express' // ESModule
import * as diaryServices from '../services/diaryService'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.post('/', (_req, res) => {
  res.send('saving valorant')
})

export default router
