import { DiaryEntry, NonSensitiveInfoDiaryEntry } from '../types'
import diaryData from './diaries.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => {
  return diaries
}

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(entry => entry.id === id)
  if (entry != null) {
    const { comment, ...restOfDiaryEntries } = entry
    return restOfDiaryEntries
  }
  return undefined
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return { id, date, weather, visibility }
  })
}

export const addEntry = (): undefined => {
  return undefined
}

// const diariesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo()
// console.log(diariesWithoutSensitiveInfo[0].comment)
