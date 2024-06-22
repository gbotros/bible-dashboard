<script setup lang="ts">
import { computed, ref } from 'vue'
import type { WordPiePerTestamentModel } from './wordPiePerTestamentModel'
import { Testament } from '@/data/bibleBookMeta'

const props = defineProps<{
  wordPiePerTestamentModel: WordPiePerTestamentModel
}>()

const emit = defineEmits(['testamentSelected'])

const options = ref({
  chart: {
    background: 'transparent'
  },
  labels: ['Old Testament', 'New Testament'],
  legend: {
    show: false
    // position: 'bottom'
  },
  theme: {
    mode: 'dark',
    palette: 'palette1'
    // monochrome: {
    //   enabled: true,
    //   color: '#255aee',
    //   shadeTo: 'light',
    //   shadeIntensity: 0.65
    // }
  },
  selection: {
    enabled: false
  }
})

const dataPointSelection = (event: MouseEvent, chartContext: any, config: any) => {
  var selectedTestament = config.selectedDataPoints[0][0]
  if (selectedTestament == undefined) {
    emitTestamentSelected(undefined)
  } else {
    emitTestamentSelected(selectedTestament as Testament)
  }
}

const series = computed(() => {
  return [
    props.wordPiePerTestamentModel.countInOldTestament,
    props.wordPiePerTestamentModel.countInNewTestament
  ]
})

const emitTestamentSelected = (testament: Testament | undefined) => {
  emit('testamentSelected', testament)
}
</script>

<template>
  <div>
    <apexchart width="100%" type="pie" :options="options" :series="series" @dataPointSelection="dataPointSelection">
    </apexchart>
  </div>

  <!-- 
  <h1>word: {{ wordPiePerTestamentModel.word }}</h1>
  <h1>word count in bible: {{ wordPiePerTestamentModel.countInBible }}</h1>
  <h1>word count in old testament: {{ wordPiePerTestamentModel.countInOldTestament }}</h1>
  <h1>word count in new testament: {{ wordPiePerTestamentModel.countInNewTestament }}</h1> 
  -->
</template>

<style scoped></style>
