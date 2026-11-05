<script setup lang="ts">
defineProps<{ title: string; description?: string }>()
</script>

<template>
  <header class="lg:sticky lg:top-28 lg:self-start">
    <h2 class="m-0 text-[clamp(2rem,4.2vw,3.25rem)] font-bold">{{ title }}</h2>
    <p v-if="description" class="mt-4 mb-0 max-w-[40ch] text-lg">{{ description }}</p>
  </header>
</template>
