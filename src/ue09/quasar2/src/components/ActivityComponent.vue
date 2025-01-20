<script setup lang="ts">

import {type Activity} from "components/models";

defineProps<{
  activity: Activity;
}>();
</script>

<template>
  <div>ID: {{activity.id}}</div>
  <div>Type: {{activity.type}}</div>
  <div>Date: {{activity.date}}</div>
  <div>Duration: {{ activity.duration}}</div>
</template>

<style scoped>

</style>
