export enum Testament {
  oldTestament,
  newTestament
}

export interface IBibleBookMeta {
  name: string
  abbreviation: string
  chaptersCount: number
  testament: Testament
  color: string
  division: string
  chronologicalOrder: number
}
// using biblegateway as the source for the chronologicalOrder
// https://www.biblegateway.com/blog/2016/02/when-was-each-book-of-the-bible-written/
export const Genesis: IBibleBookMeta = {
  name: 'Genesis',
  abbreviation: 'Gen',
  chaptersCount: 50,
  testament: Testament.oldTestament,
  color: '#ffe169',
  division: 'Pentateuch',
  chronologicalOrder: 2
}
export const Exodus: IBibleBookMeta = {
  name: 'Exodus',
  abbreviation: 'Exo',
  chaptersCount: 40,
  testament: Testament.oldTestament,
  color: '#fad643',
  division: 'Pentateuch',
  chronologicalOrder: 3
}
export const Leviticus: IBibleBookMeta = {
  name: 'Leviticus',
  abbreviation: 'Lev',
  chaptersCount: 27,
  testament: Testament.oldTestament,
  color: '#edc531',
  division: 'Pentateuch',
  chronologicalOrder: 4
}
export const Numbers: IBibleBookMeta = {
  name: 'Numbers',
  abbreviation: 'Num',
  chaptersCount: 36,
  testament: Testament.oldTestament,
  color: '#dbb42c',
  division: 'Pentateuch',
  chronologicalOrder: 5
}
export const Deuteronomy: IBibleBookMeta = {
  name: 'Deuteronomy',
  abbreviation: 'Deu',
  chaptersCount: 34,
  testament: Testament.oldTestament,
  color: '#c9a227',
  division: 'Pentateuch',
  chronologicalOrder: 6
}

export const Joshua: IBibleBookMeta = {
  name: 'Joshua',
  abbreviation: 'Jos',
  chaptersCount: 24,
  testament: Testament.oldTestament,
  color: '#edc4b3',
  division: 'Historical',
  chronologicalOrder: 8
}
export const Judges: IBibleBookMeta = {
  name: 'Judges',
  abbreviation: 'Jdg',
  chaptersCount: 21,
  testament: Testament.oldTestament,
  color: '#e6b8a2',
  division: 'Historical',
  chronologicalOrder: 9
}
export const Ruth: IBibleBookMeta = {
  name: 'Ruth',
  abbreviation: 'Rut',
  chaptersCount: 4,
  testament: Testament.oldTestament,
  color: '#deab90',
  division: 'Historical',
  chronologicalOrder: 10
}
export const OneSamuel: IBibleBookMeta = {
  name: '1 Samuel',
  abbreviation: '1Sa',
  chaptersCount: 31,
  testament: Testament.oldTestament,
  color: '#d69f7e',
  division: 'Historical',
  chronologicalOrder: 14
}
export const TwoSamuel: IBibleBookMeta = {
  name: '2 Samuel',
  abbreviation: '2Sa',
  chaptersCount: 24,
  testament: Testament.oldTestament,
  color: '#cd9777',
  division: 'Historical',
  chronologicalOrder: 15
}
export const OneKings: IBibleBookMeta = {
  name: '1 Kings',
  abbreviation: '1Ki',
  chaptersCount: 22,
  testament: Testament.oldTestament,
  color: '#c38e70',
  division: 'Historical',
  chronologicalOrder: 29
}
export const TwoKings: IBibleBookMeta = {
  name: '2 Kings',
  abbreviation: '2Ki',
  chaptersCount: 25,
  testament: Testament.oldTestament,
  color: '#b07d62',
  division: 'Historical',
  chronologicalOrder: 30
}
export const OneChronicles: IBibleBookMeta = {
  name: '1 Chronicles',
  abbreviation: '1Ch',
  chaptersCount: 29,
  testament: Testament.oldTestament,
  color: '#9d6b53',
  division: 'Historical',
  chronologicalOrder: 35
}
export const TwoChronicles: IBibleBookMeta = {
  name: '2 Chronicles',
  abbreviation: '2Ch',
  chaptersCount: 36,
  testament: Testament.oldTestament,
  color: '#8a5a44',
  division: 'Historical',
  chronologicalOrder: 36
}
export const Ezra: IBibleBookMeta = {
  name: 'Ezra',
  abbreviation: 'Ezr',
  chaptersCount: 10,
  testament: Testament.oldTestament,
  color: '#774936',
  division: 'Historical',
  chronologicalOrder: 34
}
export const Nehemiah: IBibleBookMeta = {
  name: 'Nehemiah',
  abbreviation: 'Neh',
  chaptersCount: 13,
  testament: Testament.oldTestament,
  color: '#653a2a',
  division: 'Historical',
  chronologicalOrder: 39
}
export const Esther: IBibleBookMeta = {
  name: 'Esther',
  abbreviation: 'Est',
  chaptersCount: 10,
  testament: Testament.oldTestament,
  color: '#532c1e',
  division: 'Historical',
  chronologicalOrder: 37
}
export const Job: IBibleBookMeta = {
  name: 'Job',
  abbreviation: 'Job',
  chaptersCount: 42,
  testament: Testament.oldTestament,
  color: '#fff056',
  division: 'Poetry',
  chronologicalOrder: 1
}
export const Psalms: IBibleBookMeta = {
  name: 'Psalms',
  abbreviation: 'Psa',
  chaptersCount: 150,
  testament: Testament.oldTestament,
  color: '#ffe246',
  division: 'Poetry',
  chronologicalOrder: 7
}
export const Proverbs: IBibleBookMeta = {
  name: 'Proverbs',
  abbreviation: 'Pro',
  chaptersCount: 31,
  testament: Testament.oldTestament,
  color: '#ffda3d',
  division: 'Poetry',
  chronologicalOrder: 12
}
export const Ecclesiastes: IBibleBookMeta = {
  name: 'Ecclesiastes',
  abbreviation: 'Ecc',
  chaptersCount: 12,
  testament: Testament.oldTestament,
  color: '#fecf3e',
  division: 'Poetry',
  chronologicalOrder: 13
}
export const SongOfSongs: IBibleBookMeta = {
  name: 'The Song of Songs',
  abbreviation: 'Sos',
  chaptersCount: 8,
  testament: Testament.oldTestament,
  color: '#fdc43f',
  division: 'Poetry',
  chronologicalOrder: 11
}
export const Isaiah: IBibleBookMeta = {
  name: 'Isaiah',
  abbreviation: 'Isa',
  chaptersCount: 66,
  testament: Testament.oldTestament,
  color: '#e3f2fd',
  division: 'Major Prophets',
  chronologicalOrder: 22
}
export const Jeremiah: IBibleBookMeta = {
  name: 'Jeremiah',
  abbreviation: 'Jer',
  chaptersCount: 52,
  testament: Testament.oldTestament,
  color: '#bbdefb',
  division: 'Major Prophets',
  chronologicalOrder: 28
}
export const Lamentations: IBibleBookMeta = {
  name: 'Lamentations',
  abbreviation: 'Lam',
  chaptersCount: 5,
  testament: Testament.oldTestament,
  color: '#90caf9',
  division: 'Major Prophets',
  chronologicalOrder: 27
}
export const Ezekiel: IBibleBookMeta = {
  name: 'Ezekiel',
  abbreviation: 'Eze',
  chaptersCount: 48,
  testament: Testament.oldTestament,
  color: '#64b5f6',
  division: 'Major Prophets',
  chronologicalOrder: 26
}
export const Daniel: IBibleBookMeta = {
  name: 'Daniel',
  abbreviation: 'Dan',
  chaptersCount: 12,
  testament: Testament.oldTestament,
  color: '#42a5f5',
  division: 'Major Prophets',
  chronologicalOrder: 31
}
export const Hosea: IBibleBookMeta = {
  name: 'Hosea',
  abbreviation: 'Hos',
  chaptersCount: 14,
  testament: Testament.oldTestament,
  color: '#2196f3',
  division: 'Minor Prophets',
  chronologicalOrder: 20
}
export const Joel: IBibleBookMeta = {
  name: 'Joel',
  abbreviation: 'Joe',
  chaptersCount: 3,
  testament: Testament.oldTestament,
  color: '#1e88e5',
  division: 'Minor Prophets',
  chronologicalOrder: 17
}
export const Amos: IBibleBookMeta = {
  name: 'Amos',
  abbreviation: 'Amo',
  chaptersCount: 9,
  testament: Testament.oldTestament,
  color: '#1976d2',
  division: 'Minor Prophets',
  chronologicalOrder: 19
}
export const Obadiah: IBibleBookMeta = {
  name: 'Obadiah',
  abbreviation: 'Oba',
  chaptersCount: 1,
  testament: Testament.oldTestament,
  color: '#1565c0',
  division: 'Minor Prophets',
  chronologicalOrder: 16
}
export const Jonah: IBibleBookMeta = {
  name: 'Jonah',
  abbreviation: 'Jon',
  chaptersCount: 4,
  testament: Testament.oldTestament,
  color: '#0d47a1',
  division: 'Minor Prophets',
  chronologicalOrder: 18
}
export const Micah: IBibleBookMeta = {
  name: 'Micah',
  abbreviation: 'Mic',
  chaptersCount: 7,
  testament: Testament.oldTestament,
  color: '#0f80aa',
  division: 'Minor Prophets',
  chronologicalOrder: 21
}
export const Nahum: IBibleBookMeta = {
  name: 'Nahum',
  abbreviation: 'Nah',
  chaptersCount: 3,
  testament: Testament.oldTestament,
  color: '#16679a',
  division: 'Minor Prophets',
  chronologicalOrder: 23
}
export const Habakkuk: IBibleBookMeta = {
  name: 'Habakkuk',
  abbreviation: 'Hab',
  chaptersCount: 3,
  testament: Testament.oldTestament,
  color: '#1a5b92',
  division: 'Minor Prophets',
  chronologicalOrder: 25
}
export const Zephaniah: IBibleBookMeta = {
  name: 'Zephaniah',
  abbreviation: 'Zep',
  chaptersCount: 3,
  testament: Testament.oldTestament,
  color: '#1c558e',
  division: 'Minor Prophets',
  chronologicalOrder: 24
}
export const Haggai: IBibleBookMeta = {
  name: 'Haggai',
  abbreviation: 'Hag',
  chaptersCount: 2,
  testament: Testament.oldTestament,
  color: '#1d4e89',
  division: 'Minor Prophets',
  chronologicalOrder: 32
}
export const Zechariah: IBibleBookMeta = {
  name: 'Zechariah',
  abbreviation: 'Zec',
  chaptersCount: 14,
  testament: Testament.oldTestament,
  color: '#3fc1c0',
  division: 'Minor Prophets',
  chronologicalOrder: 33
}
export const Malachi: IBibleBookMeta = {
  name: 'Malachi',
  abbreviation: 'Mal',
  chaptersCount: 4,
  testament: Testament.oldTestament,
  color: '#20bac5',
  division: 'Minor Prophets',
  chronologicalOrder: 38
}

export const Matthew: IBibleBookMeta = {
  name: 'Matthew',
  abbreviation: 'Mat',
  chaptersCount: 28,
  testament: Testament.newTestament,
  color: '#ff5400',
  division: 'The Gospels',
  chronologicalOrder: 43
}
export const Mark: IBibleBookMeta = {
  name: 'Mark',
  abbreviation: 'Mar',
  chaptersCount: 16,
  testament: Testament.newTestament,
  color: '#ff6d00',
  division: 'The Gospels',
  chronologicalOrder: 42
}
export const Luke: IBibleBookMeta = {
  name: 'Luke',
  abbreviation: 'Luk',
  chaptersCount: 24,
  testament: Testament.newTestament,
  color: '#ff8500',
  division: 'The Gospels',
  chronologicalOrder: 49
}
export const John: IBibleBookMeta = {
  name: 'John',
  abbreviation: 'Joh',
  chaptersCount: 21,
  testament: Testament.newTestament,
  color: '#ff9100',
  division: 'The Gospels',
  chronologicalOrder: 62
}
export const Acts: IBibleBookMeta = {
  name: 'Acts',
  abbreviation: 'Act',
  chaptersCount: 28,
  testament: Testament.newTestament,
  color: '#6247aa',
  division: 'Acts',
  chronologicalOrder: 54
}
export const Romans: IBibleBookMeta = {
  name: 'Romans',
  abbreviation: 'Rom',
  chaptersCount: 16,
  testament: Testament.newTestament,
  color: '#99e2b4',
  division: 'Pauline Epistles',
  chronologicalOrder: 48
}
export const OneCorinthians: IBibleBookMeta = {
  name: '1 Corinthians',
  abbreviation: '1Co',
  chaptersCount: 16,
  testament: Testament.newTestament,
  color: '#88d4ab',
  division: 'Pauline Epistles',
  chronologicalOrder: 46
}
export const TwoCorinthians: IBibleBookMeta = {
  name: '2 Corinthians',
  abbreviation: '2Co',
  chaptersCount: 13,
  testament: Testament.newTestament,
  color: '#b7efc5',
  division: 'Pauline Epistles',
  chronologicalOrder: 47
}
export const Galatians: IBibleBookMeta = {
  name: 'Galatians',
  abbreviation: 'Gal',
  chaptersCount: 6,
  testament: Testament.newTestament,
  color: '#78c6a3',
  division: 'Pauline Epistles',
  chronologicalOrder: 41
}
export const Ephesians: IBibleBookMeta = {
  name: 'Ephesians',
  abbreviation: 'Eph',
  chaptersCount: 6,
  testament: Testament.newTestament,
  color: '#67b99a',
  division: 'Pauline Epistles',
  chronologicalOrder: 50
}
export const Philippians: IBibleBookMeta = {
  name: 'Philippians',
  abbreviation: 'Phi',
  chaptersCount: 4,
  testament: Testament.newTestament,
  color: '#56ab91',
  division: 'Pauline Epistles',
  chronologicalOrder: 51
}
export const Colossians: IBibleBookMeta = {
  name: 'Colossians',
  abbreviation: 'Col',
  chaptersCount: 4,
  testament: Testament.newTestament,
  color: '#469d89',
  division: 'Pauline Epistles',
  chronologicalOrder: 53
}
export const OneThessalonians: IBibleBookMeta = {
  name: '1 Thessalonians',
  abbreviation: '1Th',
  chaptersCount: 5,
  testament: Testament.newTestament,
  color: '#358f80',
  division: 'Pauline Epistles',
  chronologicalOrder: 44
}
export const TwoThessalonians: IBibleBookMeta = {
  name: '2 Thessalonians',
  abbreviation: '2Th',
  chaptersCount: 3,
  testament: Testament.newTestament,
  color: '#248277',
  division: 'Pauline Epistles',
  chronologicalOrder: 45
}
export const OneTimothy: IBibleBookMeta = {
  name: '1 Timothy',
  abbreviation: '1Ti',
  chaptersCount: 6,
  testament: Testament.newTestament,
  color: '#14746f',
  division: 'Pauline Epistles',
  chronologicalOrder: 55
}
export const TwoTimothy: IBibleBookMeta = {
  name: '2 Timothy',
  abbreviation: '2Ti',
  chaptersCount: 4,
  testament: Testament.newTestament,
  color: '#036666',
  division: 'Pauline Epistles',
  chronologicalOrder: 58
}
export const Titus: IBibleBookMeta = {
  name: 'Titus',
  abbreviation: 'Tit',
  chaptersCount: 3,
  testament: Testament.newTestament,
  color: '#10451d',
  division: 'Pauline Epistles',
  chronologicalOrder: 56
}
export const Philemon: IBibleBookMeta = {
  name: 'Philemon',
  abbreviation: 'Phm',
  chaptersCount: 1,
  testament: Testament.newTestament,
  color: '#155d27',
  division: 'Pauline Epistles',
  chronologicalOrder: 52
}
export const Hebrews: IBibleBookMeta = {
  name: 'Hebrews',
  abbreviation: 'Heb',
  chaptersCount: 13,
  testament: Testament.newTestament,
  color: '#1a7431',
  division: 'Epistles',
  chronologicalOrder: 60
}
export const James: IBibleBookMeta = {
  name: 'James',
  abbreviation: 'Jam',
  chaptersCount: 5,
  testament: Testament.newTestament,
  color: '#208b3a',
  division: 'Epistles',
  chronologicalOrder: 40
}
export const OnePeter: IBibleBookMeta = {
  name: '1 Peter',
  abbreviation: '1Pe',
  chaptersCount: 5,
  testament: Testament.newTestament,
  color: '#25a244',
  division: 'Epistles',
  chronologicalOrder: 57
}
export const TwoPeter: IBibleBookMeta = {
  name: '2 Peter',
  abbreviation: '2Pe',
  chaptersCount: 3,
  testament: Testament.newTestament,
  color: '#2dc653',
  division: 'Epistles',
  chronologicalOrder: 59
}
export const OneJohn: IBibleBookMeta = {
  name: '1 John',
  abbreviation: '1Jo',
  chaptersCount: 5,
  testament: Testament.newTestament,
  color: '#4ad66d',
  division: 'Epistles',
  chronologicalOrder: 63
}
export const TwoJohn: IBibleBookMeta = {
  name: '2 John',
  abbreviation: '2Jo',
  chaptersCount: 1,
  testament: Testament.newTestament,
  color: '#6ede8a',
  division: 'Epistles',
  chronologicalOrder: 64
}
export const ThreeJohn: IBibleBookMeta = {
  name: '3 John',
  abbreviation: '3Jo',
  chaptersCount: 1,
  testament: Testament.newTestament,
  color: '#92e6a7',
  division: 'Epistles',
  chronologicalOrder: 65
}
export const Jude: IBibleBookMeta = {
  name: 'Jude',
  abbreviation: 'Jud',
  chaptersCount: 1,
  testament: Testament.newTestament,
  color: '#b7efc5',
  division: 'Epistles',
  chronologicalOrder: 61
}
export const Revelation: IBibleBookMeta = {
  name: 'Revelation',
  abbreviation: 'Rev',
  chaptersCount: 22,
  testament: Testament.newTestament,
  color: '#dec9e9',
  division: 'Revelation',
  chronologicalOrder: 66
}

export const MetaBibleBooksDictionary: { [bookName: string]: IBibleBookMeta } = {
  Genesis,
  Exodus,
  Leviticus,
  Numbers,
  Deuteronomy,
  Joshua,
  Judges,
  Ruth,
  '1 Samuel': OneSamuel,
  '2 Samuel': TwoSamuel,
  '1 Kings': OneKings,
  '2 Kings': TwoKings,
  '1 Chronicles': OneChronicles,
  '2 Chronicles': TwoChronicles,
  Ezra,
  Nehemiah,
  Esther,
  Job,
  Psalms,
  Proverbs,
  Ecclesiastes,
  'The Song of Songs': SongOfSongs,
  Isaiah,
  Jeremiah,
  Lamentations,
  Ezekiel,
  Daniel,
  Hosea,
  Joel,
  Amos,
  Obadiah,
  Jonah,
  Micah,
  Nahum,
  Habakkuk,
  Zephaniah,
  Haggai,
  Zechariah,
  Malachi,
  Matthew,
  Mark,
  Luke,
  John,
  Acts,
  Romans,
  '1 Corinthians': OneCorinthians,
  '2 Corinthians': TwoCorinthians,
  Galatians,
  Ephesians,
  Philippians,
  Colossians,
  '1 Thessalonians': OneThessalonians,
  '2 Thessalonians': TwoThessalonians,
  '1 Timothy': OneTimothy,
  '2 Timothy': TwoTimothy,
  Titus,
  Philemon,
  Hebrews,
  James,
  '1 Peter': OnePeter,
  '2 Peter': TwoPeter,
  '1 John': OneJohn,
  '2 John': TwoJohn,
  '3 John': ThreeJohn,
  Jude,
  Revelation
}
