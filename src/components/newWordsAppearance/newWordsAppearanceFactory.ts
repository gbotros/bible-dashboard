import type { BibleLoaderService } from '@/data/bibleLoader'
import { Job, MetaBibleBooksDictionary, MetaBibleBooksOrderedChronologically, MetaBibleBooksOrderedChronologicallyDesc, Revelation, Testament, type IBibleBookMeta } from '@/data/bibleBookMeta'
import { WordsAppearanceBookModel, type WordsAppearanceModel } from './newWordsAppearanceModel'
import type { IBibleSummary } from '@/data/iBibleSummary';

// expermental component to show new words appearance based on the books Ordered chronologicaly
export class NewWordsAppearanceFactory {
  constructor(private bibleLoaderService: BibleLoaderService) { }

  private loaded = false;
  private model: WordsAppearanceModel = { data: {} }

  public getModel(): WordsAppearanceModel {

    if (this.loaded) return this.model

    console.log("Loading data for NewWordsAppearanceFactory")

    const summary = this.bibleLoaderService.getBibleSummary()
    this.model = this.buildEmptyModel()

    const accumulatedUniqueWords = new Set<string>()

    // loop from oldest to newest to build new words array
    MetaBibleBooksOrderedChronologically.forEach((bookEntry) => {
      const bookName = bookEntry[0]

      const bookWords = this.getAllWordsForBook(bookName, summary);
      const bookModel = this.model.data[bookName];

      bookWords.forEach((word) => {
        if (accumulatedUniqueWords.has(word)) return

        bookModel.newWords.push(word)
        accumulatedUniqueWords.add(word)
      })
    })

    // move words from new words to unique words if they are unique
    // all new words in revelation must be unique to revelation since it is the last book
    const usedWords = new Set<string>()
    MetaBibleBooksOrderedChronologicallyDesc.forEach((metaBookEntry) => {
      const bookName = metaBookEntry[1].name

      const bookNewWords = this.model.data[bookName].newWords;
      const bookUniqueWords = this.model.data[bookName].uniqueWords;
      // console.log({ bookName });

      for (let i = bookNewWords.length - 1; i >= 0; i--) {
        const word = bookNewWords[i]
        // console.log({ word })
        if (!usedWords.has(word)) {
          bookNewWords.splice(i, 1);
          bookUniqueWords.push(word);
          // console.log(`${ word } is unique to ${bookName}`)
        }
      }

      const bookWords = this.getAllWordsForBook(bookName, summary);
      bookWords.forEach(w => usedWords.add(w));
    })

    for (const bookName in this.model.data) {
      this.model.data[bookName].newWords = this.model.data[bookName].newWords.sort()
      this.model.data[bookName].uniqueWords = this.model.data[bookName].uniqueWords.sort()
    }

    this.loaded = true;
    return this.model;
  }

  private getAllWordsForBook(bookName: string, summary: IBibleSummary) {
    const bookWords = new Set<string>()
    const book = MetaBibleBooksDictionary[bookName]
    if (book.testament.valueOf() === Testament.oldTestament)
      Object.keys(summary.oldTestamentSummary.books[bookName].words).forEach((w) => bookWords.add(w)
      );

    if (book.testament.valueOf() === Testament.newTestament)
      Object.keys(summary.newTestamentSummary.books[bookName].words).forEach((w) => bookWords.add(w)
      );
    return bookWords;
  }

  private buildEmptyModel(): WordsAppearanceModel {
    const model: WordsAppearanceModel = { data: {} }

    // add books in decsinding order
    // newer books expected to have fewer new words
    MetaBibleBooksOrderedChronologicallyDesc.forEach((metaBookEntry) => {
      const metaBook = metaBookEntry[1]
      const bookModel = new WordsAppearanceBookModel(metaBook.name)
      model.data[metaBook.name] = bookModel
    })

    return model
  }
}
