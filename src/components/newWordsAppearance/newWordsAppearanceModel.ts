
export class WordsAppearanceModel {
  public data: { [bookName: string]: WordsAppearanceBookModel } = {}
}

export class WordsAppearanceBookModel {


  constructor(name: string) {
    this.name = name
  }

  public name: string = ""
  public newWords: string[] = []
  public uniqueWords: string[] = []
}