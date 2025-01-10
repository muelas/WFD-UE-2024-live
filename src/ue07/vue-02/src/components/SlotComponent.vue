<script setup lang="ts">

</script>

<template>
  <!-- Slot with fallback content -->
  <slot name="above"><p>I am the default content for 'above'</p></slot>
  <button class="fancy">
    <!-- Default slot -->
    <slot></slot>
  </button>
  <!-- Named slot -->
  <slot name="below"></slot>
</template>

<style scoped>
.fancy {
  color: azure;
  background-color: darkorchid;
}
</style>
