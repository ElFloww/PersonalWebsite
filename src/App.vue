<script setup lang="ts">
import { ref } from 'vue';
import Footer from '@/components/shared/Footer.vue';
import AppBar from '@/components/shared/AppBar.vue';
import NavigationDrawer from '@/components/shared/NavigationDrawer.vue';

const drawer = ref(false);
</script>

<template>
  <v-app id="app" class="min-h-screen d-flex flex-column justify-between">
    <AppBar @toggle-drawer="drawer = !drawer" />
    <NavigationDrawer v-model="drawer" />
    <v-main class="flex-grow-1">
      <router-view :key="$route.fullPath" v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </v-main>
    <Footer />
  </v-app>
</template>