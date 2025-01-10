<script setup lang="ts">
import {ref, watch} from "vue";

const question = ref("");
const answer = ref('Questions usually contain a question mark. ;-)');
// whenever question changes, this function will run
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.includes('?')) {
    await getAnswer();
  }
});

async function getAnswer() {
  answer.value = 'Thinking...'
  try {
    const res = await fetch('https://yesno.wtf/api')
    answer.value = (await res.json()).answer
  } catch (error) {
    answer.value = 'Error! Could not reach the API. ' + error
  }
}
</script>

<template>
  <p>
    Ask a yes/no question:
    <input v-model="question"/>
  </p>
  <p>{{ answer }}</p>
</template>

<style scoped>

</style>