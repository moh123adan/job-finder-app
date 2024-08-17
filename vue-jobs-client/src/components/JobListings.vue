<script lang="ts" setup>
import { ref, defineProps } from "vue";
import jobData from "@/jobs.json";
import JobListing from "./JobListing.vue";

// Define the props with TypeScript
const props = defineProps<{
  limit?: number; // Make limit optional
}>();

// Interface for job
interface Job {
  id: string;
  title: string;
  description: string;
  salary: string; // Assuming salary is a string based on the JSON you shared earlier
  location: string;
}

// Extract only the id, title, description, salary, and location fields from jobData
const jobs = ref<Job[]>(
  jobData.jobs.map((job: any) => ({
    id: job.id,
    title: job.title,
    description: job.description,
    salary: job.salary,
    location: job.location,
  }))
);

console.log(jobs.value); // Confirm data is being logged correctly
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobListing
          v-for="job in jobs.slice(0, props.limit || jobs.length)"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>
  </section>

  <section class="m-auto max-w-lg my-10 px-6">
    <a
      href="job.html"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
    >
    </a>
  </section>
</template>
