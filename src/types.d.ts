// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy'
// export type Visibility = 'great' | 'good' | 'ok'

// Weather para rehusar en validaciones

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// Asi se hereda
// export interface SpecialDiaryEntry extends DiaryEntry {
//   flightNumber: number;
// }

// Cuando necesitemos excluir algunas propiedades de una entidad
// export type NonSensitiveInfoDiaryEntry = Pick<
// DiaryEntry,
// 'id' | 'date',
// 'weather' | 'visibility'
// >

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
