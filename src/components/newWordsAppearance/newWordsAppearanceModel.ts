import type { IWordCount } from "@/data/IWordCount"

export class WordsAppearanceModel {
  public data: { [bookName: string]: WordsAppearanceBookModel } = {}
}

export class WordsAppearanceBookModel {


  constructor(name: string) {
    this.name = name
  }

  public name: string = ""
  public newWords: IWordCount[] = []
  public uniqueWords: IWordCount[] = []
}