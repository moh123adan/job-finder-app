<script lang="ts" setup>
import HomeView from "./views/HomeView.vue";
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />
  <!-- <HomeView /> -->
  <RouterView />
</template>
