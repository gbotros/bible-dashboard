<script setup lang="ts">
import { inject, ref } from 'vue';
import NewWordsAppearance from '@/components/newWordsAppearance/newWordsAppearance.vue';
import { WordsAppearanceModel } from '@/components/newWordsAppearance/newWordsAppearanceModel';
import { NewWordsAppearanceFactory } from '@/components/newWordsAppearance/newWordsAppearanceFactory';
import { NewWordsAppearanceFactoryKey } from '@/injectionKeys';

const newWordsAppearanceModel = ref(new WordsAppearanceModel())

const newWordsAppearanceFactory = inject(NewWordsAppearanceFactoryKey) as NewWordsAppearanceFactory

newWordsAppearanceModel.value = newWordsAppearanceFactory.getModel()

</script>

<template>
  <main>
    <div>
      <RouterLink to="/" class="button bold">Go to Home</RouterLink>

      <NewWordsAppearance :new-words-appearance-model="newWordsAppearanceModel"></NewWordsAppearance>

    </div>
  </main>
</template>

<style scoped></style>
