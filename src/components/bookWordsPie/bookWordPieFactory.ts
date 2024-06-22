import type { BibleLoaderService } from '@/data/bibleLoader'
import type { IWordCount } from '../../data/IWordCount'
import { MetaBibleBooksDictionary, Testament } from '@/data/bibleBookMeta'
import { BookWordsPieModel } from './bookWordsPieModel'

export class BookWordsPieFactory {

  private readonly wordLimit: number = 50;

  constructor(private bibleLoaderService: BibleLoaderService) { }

  public getModelFor(bookName: string): BookWordsPieModel {
    const summary = this.bibleLoaderService.getBibleSummary()
    const model = new BookWordsPieModel()

    const isOldTestamentBook = MetaBibleBooksDictionary[bookName].testament.valueOf() == Testament.oldTestament;
    const bookInSummary = isOldTestamentBook ? summary.oldTestamentSummary.books[bookName] : summary.newTestamentSummary.books[bookName];

    const bookWords: IWordCount[] =
      Object.entries(bookInSummary.words)
        .filter(e => e[1] > 3)
        .map(e => ({ word: e[0], count: e[1] }))
        .sort((a, b) => b.count - a.count)
        .slice(0, this.wordLimit); // limit to 50 word


    model.words = bookWords
    return model
  }
}
