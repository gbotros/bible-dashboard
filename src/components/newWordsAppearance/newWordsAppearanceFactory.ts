import type { BibleLoaderService } from '@/data/bibleLoader'
import { MetaBibleBooksDictionary, MetaBibleBooksOrderedChronologically, MetaBibleBooksOrderedChronologicallyDesc, Testament } from '@/data/bibleBookMeta'
import { WordsAppearanceBookModel, type WordsAppearanceModel } from './newWordsAppearanceModel'
import type { IBibleSummary } from '@/data/iBibleSummary';
import type { IWordCount } from '@/data/IWordCount';


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

      bookWords.forEach((wordEntry) => {
        if (accumulatedUniqueWords.has(wordEntry.word)) return

        bookModel.newWords.push(wordEntry)
        accumulatedUniqueWords.add(wordEntry.word)
      })
    })

    // move words from new words to unique words if they are unique
    // all new words in revelation must be unique to revelation since it is the last book
    const usedWords = new Set<string>()
    MetaBibleBooksOrderedChronologicallyDesc.forEach((metaBookEntry) => {
      const bookName = metaBookEntry[1].name

      const bookNewWords = this.model.data[bookName].newWords;
      const bookUniqueWords = this.model.data[bookName].uniqueWords;

      for (let i = bookNewWords.length - 1; i >= 0; i--) {
        const wordEntry = bookNewWords[i]
        if (!usedWords.has(wordEntry.word)) {
          bookNewWords.splice(i, 1);
          bookUniqueWords.push(wordEntry);
        }
      }

      const bookWords = this.getAllWordsForBook(bookName, summary);
      bookWords.forEach(wEntry => usedWords.add(wEntry.word));
    })

    for (const bookName in this.model.data) {
      this.model.data[bookName].newWords = this.model.data[bookName].newWords.sort((wordA, wordB) => wordB.count - wordA.count)
      this.model.data[bookName].uniqueWords = this.model.data[bookName].uniqueWords.sort((wordA, wordB) => wordB.count - wordA.count)
    }

    this.loaded = true;
    return this.model;
  }

  private getAllWordsForBook(bookName: string, summary: IBibleSummary): IWordCount[] {

    const book = MetaBibleBooksDictionary[bookName]
    const bookSummary = (book.testament.valueOf() === Testament.oldTestament)
      ? summary.oldTestamentSummary.books[bookName]
      : summary.newTestamentSummary.books[bookName];
    // console.log(bookSummary)
    const bookWords: IWordCount[] = Object.entries(bookSummary.words).map(e => ({ word: e[0], count: e[1] }))
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
