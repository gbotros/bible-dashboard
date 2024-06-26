<script setup lang="ts">
import { computed } from 'vue'
import type { WordGospelsRadarModel } from './wordGospelsRadarModel'

const props = defineProps<{
  wordGospelsRadarModel: WordGospelsRadarModel
}>()

const options = computed(() => {
  return {
    labels: props.wordGospelsRadarModel.gospelWordCounts.map(gwc => gwc.bookName),
    // colors: props.wordGospelsRadarModel.gospelWordCounts.map(gwc => gwc.color),
    legend: {
      show: false
    },
    dataLabels: {
      enabled: true
    },
    theme: {
      mode: 'dark',
      palette: 'palette1'
    },
    plotOptions: {
      radar: {
        polygons: {
          strokeColor: '#e8e8e8',
          strokeWidth: 1, 
          fill: {
            colors: []
          }
        }
      }
    },
    selection: {
      enabled: false
    }
  }
})

const series = computed(() => {
  return [{
    name: props.wordGospelsRadarModel.word,
    data: props.wordGospelsRadarModel.gospelWordCounts.map(gwc => gwc.count),
  }]
})



</script>

<template>
  <div>
    <apexchart height="400px" type="radar" :options="options" :series="series"></apexchart>
  </div>
</template>

<style scoped></style>
