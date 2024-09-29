<script lang="ts" setup>
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { useAuthStore } from "../stores/auth";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();
const isMobileMenuOpen = ref(false);

const user = computed(() => authStore.user);
const isAuthenticated = computed(() => authStore.isAuthenticated);

async function logout() {
  try {
    await authStore.logout();
    router.replace({ name: "home" });
  } catch (err) {
    console.log(err.message);
  }
}
</script>

<template>
  <nav class="bg-green-700 border-b border-green-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <!-- Left side: Logo -->
        <div class="flex items-center">
          <a class="flex items-center mr-4" href="/">
            <i class="pi pi-briefcase text-white text-3xl"></i>
            <span class="hidden md:block text-white text-2xl font-bold ml-2">JobFinder</span>
          </a>
        </div>

        <!-- Right side: Menu and nav items -->
        <div class="flex items-center space-x-2">
          <!-- Nav items for larger screens -->
          <div class="hidden md:flex space-x-4">
            <a href="/" class="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Home</a>
            <a href="/jobs" class="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Jobs</a>
            <a href="/add/job" class="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Add Job</a>
            <a href="/register" class="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 flex items-center">
              <FontAwesomeIcon :icon="faUserPlus" class="mr-2" />
              Register
            </a>
            <a href="/login" class="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 flex items-center">
              <FontAwesomeIcon :icon="faSignInAlt" class="mr-2" />
              Login
            </a>
          </div>

          <!-- Hamburger menu for smaller screens -->
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="md:hidden text-white text-3xl focus:outline-none"
          >
            <i class="pi pi-bars"></i>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        :class="{
          'block': isMobileMenuOpen,
          'hidden': !isMobileMenuOpen
        }"
        class="md:hidden mt-2 bg-green-700"
      >
        <div class="flex flex-col space-y-1">
          <a href="/" class="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Home</a>
          <a href="/jobs" class="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Jobs</a>
          <a href="/add/job" class="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Add Job</a>
          <a href="/register" class="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 flex items-center">
            <FontAwesomeIcon :icon="faUserPlus" class="mr-2" />
            Register
          </a>
          <a href="/login" class="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 flex items-center">
            <FontAwesomeIcon :icon="faSignInAlt" class="mr-2" />
            Login
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>
