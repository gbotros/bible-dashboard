import type { InjectionKey } from 'vue'
import type { BibleLoaderService } from './data/bibleLoader'
import type { WordPiePerTestamentFactory } from './components/wordPiePerTestament/wordPiePerTestamentFactory'
import type { WordPiePerBookFactory } from './components/wordPiePerBook/wordPiePerBookFactory'
import type { WordReferencesFactory } from './components/wordReferences/wordReferencesFactory'
import type { NewWordsAppearanceFactory } from './components/newWordsAppearance/newWordsAppearanceFactory'
import type { WordGospelsRadarFactory } from './components/wordGospelsRadar/wordGospelsRadarFactory'
import type { WordBarPerBookChronologicalyFactory } from './components/wordBarPerBookChronologicaly/wordBarPerBookChronologicalyFactory'
import type { BookWordsPieFactory } from './components/bookWordsPie/bookWordPieFactory'

export const BibleLoaderServiceKey = Symbol() as InjectionKey<BibleLoaderService>
export const WordPiePerTestamentFactoryKey = Symbol() as InjectionKey<WordPiePerTestamentFactory>
export const WordPiePerBookFactoryKey = Symbol() as InjectionKey<WordPiePerBookFactory>
export const WordParPerBookChronologicalyFactoryKey = Symbol() as InjectionKey<WordBarPerBookChronologicalyFactory>
export const WordReferencesFactoryKey = Symbol() as InjectionKey<WordReferencesFactory>
export const NewWordsAppearanceFactoryKey = Symbol() as InjectionKey<NewWordsAppearanceFactory>
export const WordGospelsRadarFactoryKey = Symbol() as InjectionKey<WordGospelsRadarFactory>

export const BookWordsPieFactoryKey = Symbol() as InjectionKey<BookWordsPieFactory>