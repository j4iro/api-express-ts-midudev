import { NewDiaryEntry, Weather } from './types'

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment')
  }
  return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }
  return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest)) {
    throw new Error('Incorrect or missing weather')
  }

  return weatherFromRequest
}

const isString = (string: any): boolean => {
  return typeof string !== 'string'
}
const isDate = (string: any): boolean => {
  return Boolean(Date.parse(string))
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newDiary: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather)
  }

  return newDiary
}

export default { toNewDiaryEntry }
