<script setup lang="ts">
import { onMounted } from 'vue'
import { useAppTheme } from '@/composables/useAppTheme'
import AppBar from '@/components/shared/AppBar.vue'
import Footer from '@/components/shared/Footer.vue'
import ScrollToTop from '@/components/shared/ScrollToTop.vue'
import CookieConsent from '@/components/shared/CookieConsent.vue'

const { initTheme } = useAppTheme()

onMounted(initTheme)
</script>

<template>
  <div id="app" class="flex min-h-screen flex-col">
    <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-brand focus:px-5 focus:py-2 focus:font-bold focus:text-onaccent">{{ $t('views.main.ui.skip') }}</a>
    <AppBar />
    <main id="main" tabindex="-1" class="flex-1 outline-none">
      <router-view />
    </main>
    <Footer />
    <ScrollToTop />
    <CookieConsent />
  </div>
</template>
