<script lang="ts" setup>
import { defineProps, PropTypes } from "vue";

const props = withDefaults(
  defineProps<{
    bg: string;
  }>(),
  {
    default: "bg-gray-100",
  }
);
</script>

<template>
  <div :class="`${bg} p-6 rounded-lg shadow-md`">
    <slot></slot>
  </div>
</template>
