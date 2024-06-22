<script setup lang="ts">
import { computed } from 'vue'
import { MetaBibleBooksDictionary } from '@/data/bibleBookMeta'
import type { BookWordsPieModel } from './bookWordsPieModel';

const props = defineProps<{
  bookWordsPieModel: BookWordsPieModel
}>()

const emit = defineEmits(['bookSelected'])

const options = computed(() => {
  return {
    chart: {
      background: 'transparent'
    },
    labels: props.bookWordsPieModel.words.map((b) => b.word),
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
  const values = props.bookWordsPieModel.words.map((b) => b.count)
  return [{
    name: "books data",
    data: values
  }];

  // const values = props.bookWordsPieModel.words.map((b) => b.count)
  // return values
})

const dataPointSelection = (event: MouseEvent, chartContext: any, config: any) => {
  // var selectedBookIndex = config.selectedDataPoints[0][0]
  // var selectedBook = config.w.config.labels[selectedBookIndex]

  // if (selectedBook == undefined) {
  //   emitBookSelected(undefined)
  // } else {
  //   emitBookSelected(selectedBook)
  // }
}

const emitBookSelected = (bookName: string | undefined) => {
  // emit('bookSelected', bookName)
}
</script>

<template>
  <div>
    <apexchart width="100%" type="bar" :options="options" :series="series" @dataPointSelection="dataPointSelection">
    </apexchart>
  </div>
</template>

<style scoped></style>
