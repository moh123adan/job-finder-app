<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <!-- Brand/Logo -->
      <router-link class="navbar-brand" :to="{ name: 'home' }"
        >Navbar</router-link
      >

      <!-- Toggle Button for Small Screens -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#appNavbar"
        aria-controls="appNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Collapsible Navbar Content -->
      <div class="collapse navbar-collapse" id="appNavbar">
        <!-- Left-Aligned Links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              :to="{ name: 'home' }"
              class="nav-link"
              aria-current="page"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'jobs' }"
              class="nav-link"
              aria-current="page"
              >Jobs</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'add-job' }"
              class="nav-link"
              aria-current="page"
              >Add Job</router-link
            >
          </li>
        </ul>

        <!-- Right-Aligned Links -->
        <ul class="navbar-nav mb-2 mb-lg-0">
          <!-- Dropdown for Authenticated User -->
          <li v-if="isAuthenticated" class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ user.username }}
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link :to="{ name: 'user' }" class="dropdown-item"
                  >Profile</router-link
                >
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <button @click="logout" class="dropdown-item btn btn-danger">
                  Logout
                </button>
              </li>
            </ul>
          </li>

          <!-- Links for Guest Users -->
          <template v-else>
            <li class="nav-item">
              <router-link
                :to="{ name: 'login' }"
                class="nav-link"
                aria-current="page"
                >Login</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                :to="{ name: 'register' }"
                class="nav-link"
                aria-current="page"
                >Register</router-link
              >
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useAuthStore } from "../stores/auth";
import { computed } from "vue";
import { useRouter } from "vue-router";

// Access the authentication store and router
const authStore = useAuthStore();
const router = useRouter();

// Computed property for user details
const user = computed(() => authStore.user);

// Computed property for authentication status
const isAuthenticated = computed(() => authStore.isAuthenticated);

// Logout function
async function logout() {
  try {
    await authStore.logout();
    router.replace({ name: "home" });
  } catch (err) {
    console.log(err.message);
  }
}
</script>
