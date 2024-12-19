<script setup lang="ts">
import {computed, ref} from "vue";

// Teil 1
// const pageTitle = ref("Hello Vue DataBindings");
// const content = ref("Welcome to the world of DataBindings");

const pages = ref([
      {
        link: {text: "Home", url: "index.html"},
        pageTitle: "Home Page",
        content: "This is the content of the home page"
      },
      {
        link: {text: "About", url: "about.html"},
        pageTitle: "About Page",
        content: "This is the content of the about page"
      },
      {
        link: {text: "Contact", url: "contact.html"},
        pageTitle: "Contact Page",
        content: "This is the content of the contact page"
      }
    ]
);

const activePage = ref(0);

// Computed property
const activeTitle = computed(() => {
      return pages.value[activePage.value].pageTitle;
    }
);

const useDarkNavbar = ref(false);

// computed property für Darkmode
const navbarClasses = computed(() => {
  return {
    light: !useDarkNavbar.value,
    'bg-light': !useDarkNavbar.value,
    dark: useDarkNavbar.value,
    'bg-dark': useDarkNavbar.value
  }
});
</script>

<template>
  <nav :class="navbarClasses">
    <button v-on:click="useDarkNavbar=!useDarkNavbar">Toggle Dark</button>
    <ul>
      <li
          v-for="(page,index) in pages"
          :key="page.link.text"
          :class="{active: activePage === index}"
      >
        <!-- Erste Variante: :class="activePage===index?'active':''" -->
        <a
            v-bind:href="page.link.url"
            v-on:click.prevent="activePage=index">
          {{ page.link.text }}
        </a>
      </li>
    </ul>
  </nav>
  <!--  Teil 1 -->
  <!--  <h2>{{ pageTitle }}</h2>-->
  <!--  <p>{{ content }}</p>-->
  <!--  Teil 2 -->
  <h2>{{ activeTitle }}</h2>
  <p>{{ pages[activePage].content }}</p>
</template>

<style scoped>
.active {
  font-weight: bold;
  background-color: lightblue;
}

.light {
  color: black;
}

.bg-light {
  background-color: white;
}

.dark {
  color: floralwhite;
}

.bg-dark {
  background-color: black;
}
</style>
