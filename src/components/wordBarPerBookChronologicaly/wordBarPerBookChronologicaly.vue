<script setup lang="ts">
import { computed, ref } from 'vue'
import { MetaBibleBooksDictionary } from '@/data/bibleBookMeta'
import type { WordBarPerBookChronologicalyModel } from './wordBarPerBookChronologicalyModel';

const props = defineProps<{
  wordParPerBookChronologicalyModel: WordBarPerBookChronologicalyModel
}>()

const emit = defineEmits(['bookSelected'])

const options = computed(() => {
  return {
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      }
    },
    labels: props.wordParPerBookChronologicalyModel.books.map((b) => b.bookName),
    colors: props.wordParPerBookChronologicalyModel.books.map((b) => MetaBibleBooksDictionary[b.bookName].color()),
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
  const values = props.wordParPerBookChronologicalyModel.books.map((b) => b.count)
  return [{
    name: "books data",
    data: values
  }];
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
    <apexchart width="100%" height="300px" type="bar" :options="options" :series="series"
      @dataPointSelection="dataPointSelection">
    </apexchart>
  </div>
</template>

<style scoped></style>
