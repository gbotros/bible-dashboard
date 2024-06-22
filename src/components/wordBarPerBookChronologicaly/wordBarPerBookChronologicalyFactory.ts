import type { BibleLoaderService } from '@/data/bibleLoader'
import type { IBookWordCount } from './IBookWordCount'
import { WordBarPerBookChronologicalyModel } from './wordBarPerBookChronologicalyModel'
import { MetaBibleBooksOrderedChronologically, Testament } from '@/data/bibleBookMeta'

export class WordBarPerBookChronologicalyFactory {
  constructor(private bibleLoaderService: BibleLoaderService) { }

  public getModelFor(word: string): WordBarPerBookChronologicalyModel {
    const summary = this.bibleLoaderService.getBibleSummary()
    const model = new WordBarPerBookChronologicalyModel()
    model.word = word

    const wordBooks: IBookWordCount[] = []

    MetaBibleBooksOrderedChronologically.forEach(bookEntry => {
      const bookName = bookEntry[0]
      const metaBook = bookEntry[1]
      const bookSummary
        = metaBook.testament.valueOf() === Testament.oldTestament
          ? summary.oldTestamentSummary.books[bookName]
          : summary.newTestamentSummary.books[bookName]
      const wordBookCount = bookSummary.words[word]
      wordBooks.push({ bookName: bookName, count: wordBookCount ?? 0 })
    })

    model.books = wordBooks
    return model
  }
}
