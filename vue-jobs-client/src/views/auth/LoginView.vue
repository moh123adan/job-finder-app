<template>
  <div id="login" class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="container max-w-md mx-auto">
      <div class="bg-white rounded-lg shadow-md p-8">
        <h5 class="text-2xl font-bold text-green-700 mb-6 text-center">Login</h5>
        <form @submit.prevent="submit">
          <div class="mb-5">
            <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
            <input
              v-model="loginData.email"
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
              v-model="loginData.password"
              type="password"
              id="password"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>
          <button type="submit" class="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300">
            Login
          </button>
        </form>
        <p v-if="errorMessage" class="mt-4 text-red-600 text-center">{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore, type LoginData } from '../../stores/auth';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore()
const router = useRouter()

const loginData = reactive<LoginData>({
  email: "",
  password: "",
})

const errorMessage = ref<string>("")

async function submit(){
  await authStore.login(loginData)
    .then(res => {
      router.replace({name: "user"})
    })
    .catch(err => {
      errorMessage.value = err.message
    })
}

</script>

<style scoped>
#login {
  background-color: #f3f4f6;
}
</style>
