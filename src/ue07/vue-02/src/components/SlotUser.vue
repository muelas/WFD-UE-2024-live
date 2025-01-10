<script setup lang="ts">
import SlotComponent from "@/components/SlotComponent.vue";
</script>

<template>
  <slot-component>
    <!--   Default Slot Content-->
    Button Content
    <h2>Test</h2>

    <!-- Named Slot Content -->
    <template #below>
      <p>Text below</p>
    </template>

    <!--   Fallback Slot Content-->
    <!--  <template #above>-->
    <!--    <p>Text above</p>-->
    <!--  </template>-->
  </slot-component>
</template>

<style scoped>

</style>
