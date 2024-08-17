<script lang="ts" setup>
import { defineProps, withDefaults } from "vue";

const props = withDefaults(
  defineProps<{
    title: string;
    subtitle: string;
  }>(),
  {
    title: "Discover Your Dream Job",
    subtitle: "Find the perfect opportunity to advance your career",
  }
);
</script>

<template>
  <section class="bg-green-800 py-32 mb-4">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
    >
      <div class="text-center">
        <div class="flex justify-center items-center mb-4">
          <i class="pi pi-briefcase text-white text-5xl mr-4"></i>
          <h1 class="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            {{ title }}
          </h1>
        </div>
        <p class="mb-6 text-xl text-white">
          {{ subtitle }}
        </p>
        <div class="flex justify-center items-center space-x-6 text-white text-lg">
          <div class="flex items-center space-x-2">
            <i class="pi pi-search text-3xl"></i>
            <span>Search Thousands of Jobs</span>
          </div>
          <div class="flex items-center space-x-2">
            <i class="pi pi-globe text-3xl"></i>
            <span>Worldwide Opportunities</span>
          </div>
          <div class="flex items-center space-x-2">
            <i class="pi pi-users text-3xl"></i>
            <span>Connect with Top Employers</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
