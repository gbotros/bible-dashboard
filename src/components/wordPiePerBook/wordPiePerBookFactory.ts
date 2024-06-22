import type { BibleLoaderService } from '@/data/bibleLoader'
import { WordPiePerBookModel } from './wordPiePerBookModel'
import type { IBookWordCount } from './IBookWordCount'
import type { ISummary } from '@/data/iBibleSummary'
import { Testament } from '@/data/bibleBookMeta'

export class WordPiePerBookFactory {
  constructor(private bibleLoaderService: BibleLoaderService) {}

  public getModelFor(word: string, testamentFilter: Testament | undefined): WordPiePerBookModel {
    const summary = this.bibleLoaderService.getBibleSummary()
    const model = new WordPiePerBookModel()
    model.word = word

    const wordBooks: IBookWordCount[] = []

    let oldTestamentBooks: [string, ISummary][]
    let newTestamentBooks: [string, ISummary][]

    if (testamentFilter == undefined || testamentFilter.valueOf() === Testament.oldTestament) {
      oldTestamentBooks = Object.entries(summary.oldTestamentSummary.books)
      oldTestamentBooks.forEach((bookEntry) => {
        const bookName = bookEntry[0]
        const bookSummary = bookEntry[1]
        const wordBookCount = bookSummary.words[word]
        if (wordBookCount) wordBooks.push({ bookName: bookName, count: wordBookCount })
      })
    }

    if (testamentFilter == undefined || testamentFilter.valueOf() === Testament.newTestament) {
      newTestamentBooks = Object.entries(summary.newTestamentSummary.books)
      newTestamentBooks.forEach((bookEntry) => {
        const bookName = bookEntry[0]
        const bookSummary = bookEntry[1]
        const wordBookCount = bookSummary.words[word]
        if (wordBookCount) wordBooks.push({ bookName: bookName, count: wordBookCount })
      })
    }

    wordBooks.sort((a, b) => b.count - a.count)
    model.books = wordBooks

    return model
  }
}
