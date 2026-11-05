<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { URL_LINKEDIN, URL_GITHUB } from '@/core/types/contants/constants'
import Icon from '@/components/ui/Icon.vue'

const { t } = useI18n()
const openCookies = () => window.dispatchEvent(new Event('open-cookie-settings'))
</script>

<template>
  <footer class="border-t border-line bg-soft py-10">
    <div class="wrap flex flex-wrap items-center justify-between gap-6">
      <p class="m-0 text-[0.95rem] font-semibold text-ink">Florent Dubut {{ t('components.shared.footer.copyright', { year: new Date().getFullYear() }) }}</p>
      <ul class="m-0 flex list-none flex-wrap items-center gap-x-5 gap-y-3 p-0 text-[0.95rem] font-semibold">
        <li><a class="inline-flex min-h-11 items-center gap-2" :href="URL_GITHUB" target="_blank" rel="noopener noreferrer"><Icon name="github" :size="18" />{{ t('components.shared.footer.github') }}</a></li>
        <li><a class="inline-flex min-h-11 items-center gap-2" :href="URL_LINKEDIN" target="_blank" rel="noopener noreferrer"><Icon name="linkedin" :size="18" />{{ t('components.shared.footer.linkedin') }}</a></li>
        <li><a class="inline-flex min-h-11 items-center gap-2" href="mailto:florent.dubut@gmail.com"><Icon name="mail" :size="18" />{{ t('components.shared.footer.email') }}</a></li>
        <li><button type="button" class="min-h-11 cursor-pointer border-0 bg-transparent p-0 font-semibold text-brand underline underline-offset-4" @click="openCookies">{{ t('views.main.ui.manageCookies') }}</button></li>
      </ul>
    </div>
  </footer>
</template>
