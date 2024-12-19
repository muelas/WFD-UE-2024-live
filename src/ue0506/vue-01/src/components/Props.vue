<script setup lang="ts">
interface Props {
  text: string,
  color?: string
}

const props = withDefaults(defineProps<Props>(),
    {
      color: "purple"
    });
</script>

<template>
  <p :style="{color: color}">Text: {{ text }}</p>
</template>

<style scoped>

</style>
