<template>
  <nav class="bg-light border-b border-gray-200">
    <div class="container-fluid mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <!-- Brand/Logo -->
        <router-link class="font-semibold text-lg text-gray-800" :to="{ name: 'home' }">
          Navbar
        </router-link>

        <!-- Toggle Button for Small Screens -->
        <button
          class="md:hidden text-gray-800 focus:outline-none"
          type="button"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          aria-controls="appNavbar"
          aria-expanded="isMobileMenuOpen ? 'true' : 'false'"
          aria-label="Toggle navigation"
        >
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        <!-- Collapsible Navbar Content -->
        <div :class="isMobileMenuOpen ? 'block' : 'hidden'" class="md:flex md:flex-grow md:items-center">
          <ul class="flex flex-col md:flex-row md:space-x-4 md:ml-auto">
            <li class="nav-item">
              <router-link :to="{ name: 'home' }" class="text-gray-800 hover:text-gray-600 px-3 py-2 block">
                Home
              </router-link>
            </li>
          </ul>

          <!-- Right-Aligned Links -->
          <ul class="flex flex-col md:flex-row md:space-x-4">
            <li v-if="isAuthenticated" class="relative">
              <button
                class="text-gray-800 hover:text-gray-600 px-3 py-2 flex items-center"
                @click="dropdownOpen = !dropdownOpen"
              >
                {{ user.username }}
                <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <ul
                v-if="dropdownOpen"
                class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg py-1"
              >
                <li>
                  <router-link :to="{ name: 'user' }" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Profile
                  </router-link>
                </li>
                <li><hr class="border-t border-gray-200"></li>
                <li>
                  <button @click="logout" class="w-full text-left block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Logout
                  </button>
                </li>
              </ul>
            </li>
            <template v-else>
              <li class="nav-item">
                <router-link :to="{ name: 'login' }" class="text-gray-800 hover:text-gray-600 px-3 py-2 block">
                  Login
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'register' }" class="text-gray-800 hover:text-gray-600 px-3 py-2 block">
                  Register
                </router-link>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useAuthStore } from '../stores/auth';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();
const isMobileMenuOpen = ref(false);
const dropdownOpen = ref(false);

const user = computed(() => authStore.user);
const isAuthenticated = computed(() => authStore.isAuthenticated);

async function logout() {
  try {
    await authStore.logout();
    router.replace({ name: 'home' });
  } catch (err) {
    console.log(err.message);
  }
}
</script>
