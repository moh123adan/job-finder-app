<template>
  <div id="register" class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="container max-w-md mx-auto">
      <div class="bg-white rounded-lg shadow-md p-8">
        <h5 class="text-2xl font-bold text-green-700 mb-6 text-center">Register</h5>
        <form @submit.prevent="submit">
          <p v-if="errorMessage" class="text-red-600 text-center mb-4">
            {{ errorMessage }}
          </p>
          <div class="mb-5">
            <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
            <input
              v-model="registerData.username"
              type="text"
              id="username"
              autocomplete="off"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your username"
            />
          </div>
          <div class="mb-5">
            <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
            <input
              v-model="registerData.email"
              type="email"
              id="email"
              autocomplete="off"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="you@example.com"
            />
          </div>
          <div class="mb-5">
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input
              v-model="registerData.password"
              type="password"
              id="password"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>
          <div class="mb-5">
            <label for="password_confirm" class="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              v-model="registerData.password_confirm"
              type="password"
              id="password_confirm"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Confirm your password"
            />
          </div>
          <button type="submit" class="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300">
            Register
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore, type RegisterData } from "../../stores/auth";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const registerData = reactive<RegisterData>({
  username: "",
  email: "",
  password: "",
  password_confirm: "",
});

const errorMessage = ref<string>("");

async function submit() {
  await authStore
    .register(registerData)
    .then(() => {
      router.replace({ name: "login" });
    })
    .catch((err) => {
      errorMessage.value = err.message;
    });
}
</script>

<style scoped>
#register {
  background-color: #f3f4f6;
}
</style>
