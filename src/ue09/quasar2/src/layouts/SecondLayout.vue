<template>
  <q-layout view="hHh lpR fFf">

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" elevated>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script lang="ts" setup>
import {ref} from 'vue'

const rightDrawerOpen = ref(false)
</script>
