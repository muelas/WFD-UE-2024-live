<script setup lang="ts">
import {ref} from "vue";

const display = ref(true);
</script>

<template>
  <div class="container">
    <Transition>
      <p v-show="display">Transition with ease animation!</p>
    </Transition>
    <Transition name="trans">
      <p v-show="display">Transition with translation!</p>
    </Transition>
    <Transition name="rotate">
      <p v-show="display">Transition with rotate animation!</p>
    </Transition>
    <Transition name="none">
      <p v-show="display">Transition without animation!</p>
    </Transition>
  </div>
  <button @click="display = !display">Toggle</button>
</template>

<style scoped>

.container {
  height: 200px;
  width: 450px;
  border: 2px solid black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  flex-direction: column;
}

.v-enter-active, .v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}

.trans-enter-active {
  transition: translate 0.5s cubic-bezier(0.1, 0, 0.9, 2);
}

.trans-leave-active {
  transition: opacity 0.5s ease;
}

.trans-enter-from {
  translate: 192px 0;
}

.trans-leave-to {
  opacity: 0;
}

.rotate-enter-from {
  rotate: 180deg;
}

.rotate-enter-active {
  transition: rotate 1.0s ease;
}

.rotate-leave-to {
  rotate: 540deg;
  opacity: 0;
}

.rotate-leave-active {
  transition: rotate 0.5s ease, opacity 0.5s ease;
}
</style>
