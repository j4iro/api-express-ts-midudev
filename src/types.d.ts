export type Weather = "sunny" | "rainy" | "cloudy" | "windy";
export type Visibility = "great" | "good" | "ok";

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

// Asi se hereda
// export interface SpecialDiaryEntry extends DiaryEntry {
//   flightNumber: number;
// }
