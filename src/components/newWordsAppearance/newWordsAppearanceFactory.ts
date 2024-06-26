import type { BibleLoaderService } from '@/data/bibleLoader'
import { MetaBibleBooksDictionary, Testament } from '@/data/bibleBookMeta'

// expermental component to show new words appearance based on the books Ordered chronologicaly
export class NewWordsAppearanceFactory {
  constructor(private bibleLoaderService: BibleLoaderService) {}

  public getModel(): void {
    const summary = this.bibleLoaderService.getBibleSummary()

    const orderedBooks = Object.entries(MetaBibleBooksDictionary).sort(
      (a, b) => a[1].chronologicalOrder - b[1].chronologicalOrder
    )

    const accumulatedUniqueWords = new Set<string>(
      Object.keys(summary.oldTestamentSummary.books['Job'].words)
    )
    orderedBooks.forEach((book) => {
      if (book[0] === 'Job') return

      const bookWords = new Set<string>()
      if (book[1].testament.valueOf() === Testament.oldTestament)
        Object.keys(summary.oldTestamentSummary.books[book[0]].words).forEach((w) =>
          bookWords.add(w)
        )

      if (book[1].testament.valueOf() === Testament.newTestament)
        Object.keys(summary.newTestamentSummary.books[book[0]].words).forEach((w) =>
          bookWords.add(w)
        )

      const newWordsPerBook: string[] = []
      bookWords.forEach((bookWord) => {
        if (accumulatedUniqueWords.has(bookWord)) return

        newWordsPerBook.push(bookWord)
        accumulatedUniqueWords.add(bookWord)
      })

      console.log(book[0])
      console.log(newWordsPerBook)
    })
    
// orderedBooks.map((ob, i)=> (i+1) + " " + ob[0] ).forEach(it=>
//      console.log(it)
// )
 
  }
}
