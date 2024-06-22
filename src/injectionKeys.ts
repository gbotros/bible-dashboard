import type { InjectionKey } from 'vue'
import type { BibleLoaderService } from './data/bibleLoader'
import type { WordPiePerTestamentFactory } from './components/wordPiePerTestament/wordPiePerTestamentFactory'
import type { WordPiePerBookFactory } from './components/wordPiePerBook/wordPiePerBookFactory'
import type { WordReferencesFactory } from './components/wordReferences/wordReferencesFactory'
import type { NewWordsAppearanceFactory } from './components/newWordsAppearance/newWordsAppearanceFactory'

export const BibleLoaderServiceKey = Symbol() as InjectionKey<BibleLoaderService>
export const WordPiePerTestamentFactoryKey = Symbol() as InjectionKey<WordPiePerTestamentFactory>
export const WordPiePerBookFactoryKey = Symbol() as InjectionKey<WordPiePerBookFactory>
export const WordReferencesFactoryKey = Symbol() as InjectionKey<WordReferencesFactory>
export const NewWordsAppearanceFactoryKey = Symbol() as InjectionKey<NewWordsAppearanceFactory>
