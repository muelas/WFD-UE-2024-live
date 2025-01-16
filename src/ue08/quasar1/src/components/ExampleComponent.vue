<template>
  <div>
    <p>{{ title }}</p>
    <ul>
      <li v-for="todo in todos" :key="todo.id" @click="increment">
        {{ todo.id }} - {{ todo.content }}
      </li>
    </ul>
    <p>Count: {{ todoCount }} / {{ meta.totalCount }}</p>
    <p>Active: {{ active ? 'yes' : 'no' }}</p>
    <p>Clicks on todos: {{ clickCount }}</p>
  </div>

  <!-- Quasar Button -->
  <q-btn label="Click me" icon="local_shipping" rounded size="sm" color="secondary"></q-btn>
  <q-list bordered separator>
    <q-item clickable>
      <q-item-section>
        Item 1
      </q-item-section>
    </q-item>
    <q-item>
      <q-item-section>
        <q-item-label>Item 2</q-item-label>
        <q-item-label caption>Item 2 caption</q-item-label>
      </q-item-section>
    </q-item>
    <q-item>
      Item 3
    </q-item>
  </q-list>

  <!-- Quasar Input -->
  <q-input suffix="@gmail.com" clearable outlined  v-model="in1" label="Eingabefeld 1">
    <template #before>
      <q-icon name="mail"></q-icon>
    </template>
    <template #prepend>
      <q-icon name="local_shipping"></q-icon>
    </template>
  </q-input>

  <!-- Quasar Card -->
  <q-card >
    <q-card-section>
      <div class="text-h6">Card Title</div>
      Ich bin eine QCard!
    </q-card-section>
    <q-separator></q-separator>
    <q-card-section>
      <div class="text-h6">Section 2</div>
      Ich bin Section2 der QCard!
    </q-card-section>

    <q-card-actions>
      <q-btn flat size="sm" label="Action Card 1"></q-btn>
      <q-btn flat size="sm">Action 2</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue';
import type {Todo, Meta} from './models';

// variable for quasar input
const in1 = ref('');

interface Props {
  title: string;
  todos?: Todo[];
  meta: Meta;
  active: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  todos: () => []
});

const clickCount = ref(0);

function increment() {
  clickCount.value += 1;
  return clickCount.value;
}

const todoCount = computed(() => props.todos.length);
</script>
