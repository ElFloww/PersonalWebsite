<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  applyAnalyticsConsent,
  getStoredAnalyticsConsent,
  storeAnalyticsConsent,
} from '@/services/analyticsConsent'

const { t, locale } = useI18n()
const consent = ref<'unknown' | 'accepted' | 'rejected' | null>(null)
const editing = ref(false)
const showBanner = computed(() => consent.value === 'unknown' || editing.value)

onMounted(() => {
  window.addEventListener('open-cookie-settings', () => (editing.value = true))
  const savedConsent = getStoredAnalyticsConsent()
  consent.value = savedConsent === null ? 'unknown' : savedConsent ? 'accepted' : 'rejected'

  applyAnalyticsConsent(savedConsent === true)
})

function choose(accepted: boolean): void {
  storeAnalyticsConsent(accepted)
  applyAnalyticsConsent(accepted)
  consent.value = accepted ? 'accepted' : 'rejected'
  editing.value = false
}
</script>

<template>
  <aside
    v-if="showBanner"
    class="card fixed inset-x-4 bottom-4 z-[1200] mx-auto flex max-w-3xl flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between"
    aria-labelledby="cookie-consent-title"
    role="region"
  >
    <div class="max-w-xl">
      <h2 id="cookie-consent-title" class="m-0 font-sans text-base font-bold">{{ t('components.shared.cookieConsent.title') }}</h2>
      <p class="mt-1 mb-1 text-sm leading-relaxed">{{ t('components.shared.cookieConsent.description') }}</p>
      <a
        class="text-sm"
        :href="locale === 'fr' ? 'https://policies.google.com/privacy?hl=fr' : 'https://policies.google.com/privacy?hl=en'"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ t('components.shared.cookieConsent.privacyLink') }}
      </a>
    </div>

    <div class="grid shrink-0 grid-cols-2 gap-2.5">
      <button class="btn btn--outline !min-h-11 !px-5" @click="choose(false)">
        {{ t('components.shared.cookieConsent.reject') }}
      </button>
      <button class="btn !min-h-11 !px-5" @click="choose(true)">
        {{ t('components.shared.cookieConsent.accept') }}
      </button>
    </div>
  </aside>
</template>
