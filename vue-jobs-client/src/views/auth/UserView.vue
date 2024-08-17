<template>
  <div
    id="user"
    class="min-h-screen flex items-center justify-center bg-gray-100"
  >
    <div class="container max-w-md mx-auto">
      <Suspense>
        <template #default>
          <div v-if="user" class="bg-white rounded-lg shadow-md p-8 mt-4">
            <h5 class="text-2xl font-bold text-green-700 mb-4">
              Username: {{ user.username }}
            </h5>
            <h6 class="text-md text-gray-700 mb-2">Email: {{ user.email }}</h6>
            <h6 class="text-md text-gray-700 mb-2">
              First Name: {{ user.first_name }}
            </h6>
            <h6 class="text-md text-gray-700 mb-2">
              Last Name: {{ user.last_name }}
            </h6>
            <h6 class="text-md text-gray-700">
              Full Name: {{ user.full_name }}
            </h6>
          </div>
        </template>

        <template #fallback>
          <p class="text-center text-green-700">Loading...</p>
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "../../stores/auth";
import { computed, onMounted } from "vue";

const authStore = useAuthStore();

const user = computed(() => {
  return authStore.userDetail;
});

async function getUser() {
  await authStore.getUser();
}

onMounted(async () => {
  await getUser();
});
</script>

<style scoped>
#user .container {
  background-color: #f3f4f6;
}
</style>
