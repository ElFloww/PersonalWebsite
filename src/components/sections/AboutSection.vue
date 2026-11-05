<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SectionHeader from '@/components/shared/SectionHeader.vue'

const { t } = useI18n()

</script>

<template>
  <section id="about" class="section">
    <div class="wrap grid gap-12 lg:grid-cols-12">
      <div class="lg:col-span-4">
        <SectionHeader :title="t('components.shared.appBar.about')" />
      </div>

      <div class="lg:col-span-8">
        <p class="measure m-0 font-display text-[clamp(1.45rem,2.6vw,1.9rem)] leading-snug font-semibold text-ink">
          {{ t('views.main.presentation.firstParagraph1') }}
        </p>
        <p class="measure mt-6 mb-0">{{ t('views.main.presentation.firstParagraph2') }}</p>
        <p class="measure mt-4 mb-0">{{ t('views.main.presentation.secondParagraph') }}</p>

      </div>
    </div>
  </section>
</template>
