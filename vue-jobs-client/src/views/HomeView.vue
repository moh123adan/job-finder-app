<script setup lang="ts">
import Hero from "@/components/Hero.vue";
import HomeCards from "@/components/HomeCards.vue";
import JobListings from "@/components/JobListings.vue";
</script>

<template>
  <main>
    <Hero />
    <HomeCards />
    <JobListings :limit="3" :showButton="true" />
  </main>
</template>
