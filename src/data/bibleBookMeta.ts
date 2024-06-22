export enum Testament {
  oldTestament, newTestament
}

export class BibleBookMeta {

  constructor(public name: string,
    public abbreviation: string,
    public chaptersCount: number,
    public testament: Testament,
    public hslColor: number[],
    public division: string,
    public chronologicalOrder: number,
    public christianOrder: number) {
  }
  // name: string = "";
  // abbreviation: string = "";
  // chaptersCount: number = 0;
  // testament: Testament = Testament.oldTestament;
  // hslColor: number[] = [];
  // division: string = "";
  // chronologicalOrder: number = 0;
  // christianOrder: number = 0;

  public color(): string {
    const h = this.hslColor[0];
    const s = this.hslColor[1];
    let l = this.hslColor[2];

    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  }

}
// using biblegateway as the source for the chronologicalOrder
// https://www.biblegateway.com/blog/2016/02/when-was-each-book-of-the-bible-written/
export const Genesis: BibleBookMeta = new BibleBookMeta('Genesis', 'Gen', 50, Testament.oldTestament, [10, 50, 50], 'Pentateuch', 2, 1);
export const Exodus: BibleBookMeta = new BibleBookMeta('Exodus', 'Exo', 40, Testament.oldTestament, [15, 50, 50], 'Pentateuch', 3, 2);
export const Leviticus: BibleBookMeta = new BibleBookMeta('Leviticus', 'Lev', 27, Testament.oldTestament, [20, 50, 50], 'Pentateuch', 4, 3);
export const Numbers: BibleBookMeta = new BibleBookMeta('Numbers', 'Num', 36, Testament.oldTestament, [25, 50, 50], 'Pentateuch', 5, 4);
export const Deuteronomy: BibleBookMeta = new BibleBookMeta('Deuteronomy', 'Deu', 34, Testament.oldTestament, [30, 50, 50], 'Pentateuch', 6, 5);

export const Joshua: BibleBookMeta = new BibleBookMeta('Joshua', 'Jos', 24, Testament.oldTestament, [35, 50, 50], 'Historical', 8, 6);
export const Judges: BibleBookMeta = new BibleBookMeta('Judges', 'Jdg', 21, Testament.oldTestament, [40, 50, 50], 'Historical', 9, 7);
export const Ruth: BibleBookMeta = new BibleBookMeta('Ruth', 'Rut', 4, Testament.oldTestament, [45, 50, 50], 'Historical', 10, 8);
export const OneSamuel: BibleBookMeta = new BibleBookMeta('1 Samuel', '1Sa', 31, Testament.oldTestament, [50, 50, 50], 'Historical', 14, 9);
export const TwoSamuel: BibleBookMeta = new BibleBookMeta('2 Samuel', '2Sa', 24, Testament.oldTestament, [55, 50, 50], 'Historical', 15, 10);
export const OneKings: BibleBookMeta = new BibleBookMeta('1 Kings', '1Ki', 22, Testament.oldTestament, [60, 50, 50], 'Historical', 29, 11);
export const TwoKings: BibleBookMeta = new BibleBookMeta('2 Kings', '2Ki', 25, Testament.oldTestament, [65, 50, 50], 'Historical', 30, 12);
export const OneChronicles: BibleBookMeta = new BibleBookMeta('1 Chronicles', '1Ch', 29, Testament.oldTestament, [70, 50, 50], 'Historical', 35, 13);
export const TwoChronicles: BibleBookMeta = new BibleBookMeta('2 Chronicles', '2Ch', 36, Testament.oldTestament, [75, 50, 50], 'Historical', 36, 14);
export const Ezra: BibleBookMeta = new BibleBookMeta('Ezra', 'Ezr', 10, Testament.oldTestament, [80, 50, 50], 'Historical', 34, 15);
export const Nehemiah: BibleBookMeta = new BibleBookMeta('Nehemiah', 'Neh', 13, Testament.oldTestament, [85, 50, 50], 'Historical', 39, 16);
export const Esther: BibleBookMeta = new BibleBookMeta('Esther', 'Est', 10, Testament.oldTestament, [90, 50, 50], 'Historical', 37, 17);

export const Job: BibleBookMeta = new BibleBookMeta('Job', 'Job', 42, Testament.oldTestament, [95, 50, 50], 'Poetry', 1, 18);
export const Psalms: BibleBookMeta = new BibleBookMeta('Psalms', 'Psa', 150, Testament.oldTestament, [100, 50, 50], 'Poetry', 7, 19);
export const Proverbs: BibleBookMeta = new BibleBookMeta('Proverbs', 'Pro', 31, Testament.oldTestament, [105, 50, 50], 'Poetry', 12, 20);
export const Ecclesiastes: BibleBookMeta = new BibleBookMeta('Ecclesiastes', 'Ecc', 12, Testament.oldTestament, [110, 50, 50], 'Poetry', 13, 21);
export const SongOfSongs: BibleBookMeta = new BibleBookMeta('The Song of Songs', 'Sos', 8, Testament.oldTestament, [115, 50, 50], 'Poetry', 11, 22);

export const Isaiah: BibleBookMeta = new BibleBookMeta('Isaiah', 'Isa', 66, Testament.oldTestament, [120, 50, 50], 'Major Prophets', 22, 23);
export const Jeremiah: BibleBookMeta = new BibleBookMeta('Jeremiah', 'Jer', 52, Testament.oldTestament, [125, 50, 50], 'Major Prophets', 28, 24);
export const Lamentations: BibleBookMeta = new BibleBookMeta('Lamentations', 'Lam', 5, Testament.oldTestament, [130, 50, 50], 'Major Prophets', 27, 25);
export const Ezekiel: BibleBookMeta = new BibleBookMeta('Ezekiel', 'Eze', 48, Testament.oldTestament, [135, 50, 50], 'Major Prophets', 26, 26);
export const Daniel: BibleBookMeta = new BibleBookMeta('Daniel', 'Dan', 12, Testament.oldTestament, [140, 50, 50], 'Major Prophets', 31, 27);

export const Hosea: BibleBookMeta = new BibleBookMeta('Hosea', 'Hos', 14, Testament.oldTestament, [145, 50, 50], 'Minor Prophets', 20, 28);
export const Joel: BibleBookMeta = new BibleBookMeta('Joel', 'Joe', 3, Testament.oldTestament, [150, 50, 50], 'Minor Prophets', 17, 29);
export const Amos: BibleBookMeta = new BibleBookMeta('Amos', 'Amo', 9, Testament.oldTestament, [155, 50, 50], 'Minor Prophets', 19, 30);
export const Obadiah: BibleBookMeta = new BibleBookMeta('Obadiah', 'Oba', 1, Testament.oldTestament, [160, 50, 50], 'Minor Prophets', 16, 31);
export const Jonah: BibleBookMeta = new BibleBookMeta('Jonah', 'Jon', 4, Testament.oldTestament, [165, 50, 50], 'Minor Prophets', 18, 32);
export const Micah: BibleBookMeta = new BibleBookMeta('Micah', 'Mic', 7, Testament.oldTestament, [170, 50, 50], 'Minor Prophets', 21, 33);
export const Nahum: BibleBookMeta = new BibleBookMeta('Nahum', 'Nah', 3, Testament.oldTestament, [175, 50, 50], 'Minor Prophets', 23, 34);
export const Habakkuk: BibleBookMeta = new BibleBookMeta('Habakkuk', 'Hab', 3, Testament.oldTestament, [180, 50, 50], 'Minor Prophets', 25, 35);
export const Zephaniah: BibleBookMeta = new BibleBookMeta('Zephaniah', 'Zep', 3, Testament.oldTestament, [185, 50, 50], 'Minor Prophets', 24, 36);
export const Haggai: BibleBookMeta = new BibleBookMeta('Haggai', 'Hag', 2, Testament.oldTestament, [190, 50, 50], 'Minor Prophets', 32, 37);
export const Zechariah: BibleBookMeta = new BibleBookMeta('Zechariah', 'Zec', 14, Testament.oldTestament, [195, 50, 50], 'Minor Prophets', 33, 38);
export const Malachi: BibleBookMeta = new BibleBookMeta('Malachi', 'Mal', 4, Testament.oldTestament, [200, 50, 50], 'Minor Prophets', 38, 39);

export const Matthew: BibleBookMeta = new BibleBookMeta('Matthew', 'Mat', 28, Testament.newTestament, [230, 50, 50], 'The Gospels', 43, 40);
export const Mark: BibleBookMeta = new BibleBookMeta('Mark', 'Mar', 16, Testament.newTestament, [235, 50, 50], 'The Gospels', 42, 41);
export const Luke: BibleBookMeta = new BibleBookMeta('Luke', 'Luk', 24, Testament.newTestament, [240, 50, 50], 'The Gospels', 49, 42);
export const John: BibleBookMeta = new BibleBookMeta('John', 'Joh', 21, Testament.newTestament, [245, 50, 50], 'The Gospels', 62, 43);

export const Acts: BibleBookMeta = new BibleBookMeta('Acts', 'Act', 28, Testament.newTestament, [250, 50, 50], 'Acts', 54, 44);

export const Romans: BibleBookMeta = new BibleBookMeta('Romans', 'Rom', 16, Testament.newTestament, [255, 50, 50], 'Pauline Epistles', 48, 45);
export const OneCorinthians: BibleBookMeta = new BibleBookMeta('1 Corinthians', '1Co', 16, Testament.newTestament, [260, 50, 50], 'Pauline Epistles', 46, 46);
export const TwoCorinthians: BibleBookMeta = new BibleBookMeta('2 Corinthians', '2Co', 13, Testament.newTestament, [265, 50, 50], 'Pauline Epistles', 47, 47);
export const Galatians: BibleBookMeta = new BibleBookMeta('Galatians', 'Gal', 6, Testament.newTestament, [270, 50, 50], 'Pauline Epistles', 41, 48);
export const Ephesians: BibleBookMeta = new BibleBookMeta('Ephesians', 'Eph', 6, Testament.newTestament, [275, 50, 50], 'Pauline Epistles', 50, 49);
export const Philippians: BibleBookMeta = new BibleBookMeta('Philippians', 'Phi', 4, Testament.newTestament, [280, 50, 50], 'Pauline Epistles', 51, 50);
export const Colossians: BibleBookMeta = new BibleBookMeta('Colossians', 'Col', 4, Testament.newTestament, [285, 50, 50], 'Pauline Epistles', 53, 51);
export const OneThessalonians: BibleBookMeta = new BibleBookMeta('1 Thessalonians', '1Th', 5, Testament.newTestament, [290, 50, 50], 'Pauline Epistles', 44, 52);
export const TwoThessalonians: BibleBookMeta = new BibleBookMeta('2 Thessalonians', '2Th', 3, Testament.newTestament, [295, 50, 50], 'Pauline Epistles', 45, 53);
export const OneTimothy: BibleBookMeta = new BibleBookMeta('1 Timothy', '1Ti', 6, Testament.newTestament, [300, 50, 50], 'Pauline Epistles', 55, 54);
export const TwoTimothy: BibleBookMeta = new BibleBookMeta('2 Timothy', '2Ti', 4, Testament.newTestament, [305, 50, 50], 'Pauline Epistles', 58, 55);
export const Titus: BibleBookMeta = new BibleBookMeta('Titus', 'Tit', 3, Testament.newTestament, [310, 50, 50], 'Pauline Epistles', 56, 56);
export const Philemon: BibleBookMeta = new BibleBookMeta('Philemon', 'Phm', 1, Testament.newTestament, [315, 50, 50], 'Pauline Epistles', 52, 57);

export const Hebrews: BibleBookMeta = new BibleBookMeta('Hebrews', 'Heb', 13, Testament.newTestament, [320, 50, 50], 'Epistles', 60, 58);
export const James: BibleBookMeta = new BibleBookMeta('James', 'Jam', 5, Testament.newTestament, [325, 50, 50], 'Epistles', 40, 59);
export const OnePeter: BibleBookMeta = new BibleBookMeta('1 Peter', '1Pe', 5, Testament.newTestament, [330, 50, 50], 'Epistles', 57, 60);
export const TwoPeter: BibleBookMeta = new BibleBookMeta('2 Peter', '2Pe', 3, Testament.newTestament, [335, 50, 50], 'Epistles', 59, 61);
export const OneJohn: BibleBookMeta = new BibleBookMeta('1 John', '1Jo', 5, Testament.newTestament, [340, 50, 50], 'Epistles', 63, 62);
export const TwoJohn: BibleBookMeta = new BibleBookMeta('2 John', '2Jo', 1, Testament.newTestament, [345, 50, 50], 'Epistles', 64, 63);
export const ThreeJohn: BibleBookMeta = new BibleBookMeta('3 John', '3Jo', 1, Testament.newTestament, [350, 50, 50], 'Epistles', 65, 64);
export const Jude: BibleBookMeta = new BibleBookMeta('Jude', 'Jud', 1, Testament.newTestament, [355, 50, 50], 'Epistles', 61, 65);

export const Revelation: BibleBookMeta = new BibleBookMeta('Revelation', 'Rev', 22, Testament.newTestament, [360, 50, 50], 'Revelation', 66, 66);

export const MetaBibleBooksDictionary: { [bookName: string]: BibleBookMeta } = {
  Genesis, Exodus, Leviticus, Numbers, Deuteronomy,
  Joshua, Judges, Ruth, '1 Samuel': OneSamuel, '2 Samuel': TwoSamuel, '1 Kings': OneKings, '2 Kings': TwoKings, '1 Chronicles': OneChronicles, '2 Chronicles': TwoChronicles, Ezra, Nehemiah, Esther,
  Job, Psalms, Proverbs, Ecclesiastes, 'The Song of Songs': SongOfSongs,
  Isaiah, Jeremiah, Lamentations, Ezekiel, Daniel,
  Hosea, Joel, Amos, Obadiah, Jonah, Micah, Nahum, Habakkuk, Zephaniah, Haggai, Zechariah, Malachi,
  Matthew, Mark, Luke, John,
  Acts,
  Romans, '1 Corinthians': OneCorinthians, '2 Corinthians': TwoCorinthians, Galatians, Ephesians, Philippians, Colossians, '1 Thessalonians': OneThessalonians, '2 Thessalonians': TwoThessalonians, '1 Timothy': OneTimothy, '2 Timothy': TwoTimothy, Titus, Philemon,
  Hebrews, James, '1 Peter': OnePeter, '2 Peter': TwoPeter, '1 John': OneJohn, '2 John': TwoJohn, '3 John': ThreeJohn, Jude,
  Revelation
}

export const MetaBibleBooksOrderedChronologically = Object.entries(MetaBibleBooksDictionary).sort((a, b) => a[1].chronologicalOrder - b[1].chronologicalOrder)
export const MetaBibleBooksOrderedChronologicallyDesc = Object.entries(MetaBibleBooksDictionary).sort((a, b) => b[1].chronologicalOrder - a[1].chronologicalOrder)




