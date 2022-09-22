import { DiaryEntry } from '../types'
import { Weather, Visibility } from '../enums'

const diaryEntries: DiaryEntry[] = [
  {
    id: 1,
    date: '2021-04-02',
    weather: Weather.Rainy,
    visibility: Visibility.Good,
    comment: 'todo nice'
  },
  {
    id: 2,
    date: '2021-04-03',
    weather: Weather.Sunny,
    visibility: Visibility.Great,
    comment: 'bad bad'
  }
]

export default diaryEntries
