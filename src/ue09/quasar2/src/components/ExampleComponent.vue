<template>
  <activity-component v-if="activity" :activity="activity"/>
  <div v-else>No activity</div>
</template>

<script setup lang="ts">
import {onMounted, type Ref, ref} from "vue";
import {type Activity} from "components/models";
import ActivityComponent from "components/ActivityComponent.vue";

const activity: Ref<Activity | undefined> = ref();

onMounted(async () => {
  const data = await fetch("https://wfd-fitnesstracker.azurewebsites.net/api/getactivitylist");
  const json = await data.json();
  console.log(json[0]);

  activity.value = json[0];
});
</script>
