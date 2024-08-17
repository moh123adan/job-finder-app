<template>
  <div
    id="add-job"
    class="min-h-screen flex items-center justify-center bg-gray-100"
  >
    <div class="container max-w-md mx-auto">
      <div class="bg-white rounded-lg shadow-md p-8">
        <h5 class="text-2xl font-bold text-green-700 mb-6 text-center">
          Add Job
        </h5>
        <form @submit.prevent="submit">
          <div class="mb-5">
            <label for="title" class="block text-sm font-medium text-gray-700"
              >Job Title</label
            >
            <input
              v-model="jobData.title"
              type="text"
              id="title"
              autocomplete="off"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter job title"
            />
          </div>
          <div class="mb-5">
            <label for="type" class="block text-sm font-medium text-gray-700"
              >Job Type</label
            >
            <input
              v-model="jobData.type"
              type="text"
              id="type"
              autocomplete="off"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter job type"
            />
          </div>
          <div class="mb-5">
            <label
              for="description"
              class="block text-sm font-medium text-gray-700"
              >Job Description</label
            >
            <textarea
              v-model="jobData.description"
              id="description"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter job description"
            ></textarea>
          </div>
          <div class="mb-5">
            <label
              for="location"
              class="block text-sm font-medium text-gray-700"
              >Location</label
            >
            <input
              v-model="jobData.location"
              type="text"
              id="location"
              autocomplete="off"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter job location"
            />
          </div>
          <div class="mb-5">
            <label for="salary" class="block text-sm font-medium text-gray-700"
              >Salary</label
            >
            <input
              v-model="jobData.salary"
              type="text"
              id="salary"
              autocomplete="off"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter salary range"
            />
          </div>
          <div class="mb-5">
            <h6 class="text-lg font-semibold text-gray-700 mb-3">
              Company Details
            </h6>
            <label
              for="companyName"
              class="block text-sm font-medium text-gray-700"
              >Company Name</label
            >
            <input
              v-model="jobData.company.name"
              type="text"
              id="companyName"
              autocomplete="off"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter company name"
            />
          </div>
          <div class="mb-5">
            <label
              for="companyDescription"
              class="block text-sm font-medium text-gray-700"
              >Company Description</label
            >
            <textarea
              v-model="jobData.company.description"
              id="companyDescription"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter company description"
            ></textarea>
          </div>
          <div class="mb-5">
            <label
              for="companyEmail"
              class="block text-sm font-medium text-gray-700"
              >Contact Email</label
            >
            <input
              v-model="jobData.company.contactEmail"
              type="email"
              id="companyEmail"
              autocomplete="off"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter contact email"
            />
          </div>
          <div class="mb-5">
            <label
              for="companyPhone"
              class="block text-sm font-medium text-gray-700"
              >Contact Phone</label
            >
            <input
              v-model="jobData.company.contactPhone"
              type="text"
              id="companyPhone"
              autocomplete="off"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter contact phone"
            />
          </div>
          <button
            type="submit"
            class="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300"
          >
            Add Job
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";

interface Company {
  name: string;
  description: string;
  contactEmail: string;
  contactPhone: string;
}

interface JobData {
  title: string;
  type: string;
  description: string;
  location: string;
  salary: string;
  company: Company;
}

const jobData = reactive<JobData>({
  title: "",
  type: "",
  description: "",
  location: "",
  salary: "",
  company: {
    name: "",
    description: "",
    contactEmail: "",
    contactPhone: "",
  },
});

const router = useRouter();
const errorMessage = ref<string | null>(null);

async function submit() {
  try {
    // Send a POST request to your backend API to add the job
    const response = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobData),
    });

    if (!response.ok) {
      throw new Error("Failed to add job");
    }

    // Redirect to the jobs list or another page after successful submission
    router.push({ name: "jobs" });
  } catch (error) {
    errorMessage.value = (error as Error).message;
  }
}
</script>
