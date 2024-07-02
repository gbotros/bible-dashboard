import { MetaBibleBooksDictionary, type Testament } from '@/data/bibleBookMeta'
import type { BibleLoaderService } from '@/data/bibleLoader'
import type { IVerse } from '@/data/iBible'

export class WordReferencesFactory {
  constructor(private bibleLoaderService: BibleLoaderService) { }

  public getModelFor(
    word: string,
    testamentFilter: Testament | undefined,
    bookNameFilter: string | undefined
  ): IVerse[] {
    const theBible = this.bibleLoaderService.getTheBible()
    const allrefs = this.bibleLoaderService.getWordReferencesSummary()
    const refs = allrefs[word] ?? []

    const verses: IVerse[] = []

    refs.forEach((ref) => {
      const lastSpaceIndex = ref.lastIndexOf(' ')
      const bookNameSection = ref.slice(0, lastSpaceIndex)
      const chapterVerseSections = ref.slice(lastSpaceIndex + 1)
      const [chapterSection, verseSection] = chapterVerseSections.split(':')

      if (bookNameFilter && bookNameFilter != bookNameSection) return
      if (testamentFilter && testamentFilter != MetaBibleBooksDictionary[bookNameSection].testament)
        return

      const verse = theBible.books[bookNameSection].chapters[+chapterSection].verses[+verseSection]
      verses.push(verse)
    })

    return verses
  }
}
