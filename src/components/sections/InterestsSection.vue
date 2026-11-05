<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SectionHeader from '@/components/shared/SectionHeader.vue'

const { t } = useI18n()
const passions = ['sport', 'videoGames', 'reading', 'cooking', 'music'] as const
</script>

<template>
  <section id="interests" class="section section--soft">
    <div class="wrap grid gap-12 lg:grid-cols-12">
      <div class="lg:col-span-4">
        <SectionHeader :title="t('views.main.presentation.interestsTitle')" />
      </div>
      <dl class="m-0 grid gap-x-10 gap-y-7 md:grid-cols-2 lg:col-span-8">
        <div v-for="p in passions" :key="p">
          <dt class="font-display text-xl font-bold text-ink">{{ t(`views.main.presentation.passions.${p}.title`) }}</dt>
          <dd class="m-0 mt-1 text-[0.98rem] text-muted">{{ t(`views.main.presentation.passions.${p}.description`) }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>
