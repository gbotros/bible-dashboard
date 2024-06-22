<script setup lang="ts">
import { computed, ref } from 'vue'
import type { WordPiePerBookModel } from './wordPiePerBookModel'
import { MetaBibleBooksDictionary } from '@/data/bibleBookMeta'

const props = defineProps<{
  wordPiePerBookModel: WordPiePerBookModel
}>()

const emit = defineEmits(['bookSelected'])

const options = computed(() => {
  return {
    chart: {
      background: 'transparent'
    },
    labels: props.wordPiePerBookModel.books.map((b) => b.bookName),
    colors: props.wordPiePerBookModel.books.map((b) => MetaBibleBooksDictionary[b.bookName].color()),
    legend: {
      show: false
      // position: 'bottom'
    },
    theme: {
      mode: 'dark',
      palette: 'palette1'
    },
    selection: {
      enabled: false
    }
  }
})

const series = computed(() => {
  const values = props.wordPiePerBookModel.books.map((b) => b.count)
  return values
})

const dataPointSelection = (event: MouseEvent, chartContext: any, config: any) => {
  var selectedBookIndex = config.selectedDataPoints[0][0]
  var selectedBook = config.w.config.labels[selectedBookIndex]

  if (selectedBook == undefined) {
    emitBookSelected(undefined)
  } else {
    emitBookSelected(selectedBook)
  }
}

const emitBookSelected = (bookName: string | undefined) => {
  emit('bookSelected', bookName)
}
</script>

<template>
  <div>
    <apexchart width="100%" type="pie" :options="options" :series="series" @dataPointSelection="dataPointSelection">
    </apexchart>
  </div>
</template>

<style scoped></style>
