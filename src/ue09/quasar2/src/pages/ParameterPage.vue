<script setup lang="ts">
import {useRoute} from "vue-router";

// useRoute verwenden, um aus script auf Route-Parameter zuzugreifen
const route = useRoute();
console.log("Route Parameter 'name' über useRoute: ", route.params.name);

// mit props=true können Route-Parameter als props definiert werden
const props = defineProps<{
  name: string;
}>();
console.log(`Route Parameter 'name' als prop: ${props.name}`);
</script>

<template>
  <q-page>
    <!-- $route.params.name gibt den Wert des Route-Parameters name aus -->
    <p>Hello {{ $route.params.name }}!</p>
  </q-page>
</template>

<style scoped>

</style>
