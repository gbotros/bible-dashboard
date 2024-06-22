export interface IGospelWordCount {
  bookName: string
  count: number
  color: string
}

export class WordGospelsRadarModel {
  public word: String = ''
  public show: boolean = false

  public gospelWordCounts: IGospelWordCount[] = []
}

