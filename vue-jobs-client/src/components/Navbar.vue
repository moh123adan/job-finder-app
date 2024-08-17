<script lang="ts" setup>
import logo from "@/assets/img/logo.png";
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { useAuthStore } from "../stores/auth";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();
const isMobileMenuOpen = ref(false);
const dropdownOpen = ref(false);

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
        <div
          class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
          <!-- Logo -->
          <a class="flex flex-shrink-0 items-center mr-4" href="index.html">
            <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
            <span class="hidden md:block text-white text-2xl font-bold ml-2"
              >Vue Jobs</span
            >
          </a>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <a
                href="/"
                class="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >Home</a
              >
              <a
                href="/jobs"
                class="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >Jobs</a
              >
              <a
                href="/jobs/add"
                class="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >Add Job</a
              >
              <a
                href="/register"
                class="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 flex items-center"
              >
                <FontAwesomeIcon :icon="faUserPlus" class="mr-2" />
                Register
              </a>
              <a
                href="/login"
                class="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 flex items-center"
              >
                <FontAwesomeIcon :icon="faSignInAlt" class="mr-2" />
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
