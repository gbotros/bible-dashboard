import type { BibleLoaderService } from '@/data/bibleLoader'
import { WordGospelsRadarModel, type IGospelWordCount } from './wordGospelsRadarModel'
import { John, Luke, Mark, Matthew } from '@/data/bibleBookMeta'

export class WordGospelsRadarFactory {
  constructor(private bibleLoaderService: BibleLoaderService) { }

  public getModelFor(word: string): WordGospelsRadarModel {
    const summary = this.bibleLoaderService.getBibleSummary()
    const model = new WordGospelsRadarModel()
    model.word = word


    const markData: IGospelWordCount = {
      bookName: Mark.name,
      color: Mark.color(),
      count: summary.newTestamentSummary.books[Mark.name].words[word] ?? 0
    };

    const matthewData: IGospelWordCount = {
      bookName: Matthew.name,
      color: Matthew.color(),
      count: summary.newTestamentSummary.books[Matthew.name].words[word] ?? 0
    };

    const lukeData: IGospelWordCount = {
      bookName: Luke.name,
      color: Luke.color(),
      count: summary.newTestamentSummary.books[Luke.name].words[word] ?? 0
    };

    const johnData: IGospelWordCount = {
      bookName: John.name,
      color: John.color(),
      count: summary.newTestamentSummary.books[John.name].words[word] ?? 0
    };

    model.gospelWordCounts.push(markData, matthewData, lukeData, johnData)
    model.show = markData.count > 0 || matthewData.count > 0 || lukeData.count > 0 || johnData.count > 0;

    return model
  }
}
