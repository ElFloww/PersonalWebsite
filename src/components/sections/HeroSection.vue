<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Icon from '@/components/ui/Icon.vue'
import photo from '@/assets/images/photo_profil.webp'
import { URL_LINKEDIN, URL_GITHUB } from '@/core/types/contants/constants'

const { t } = useI18n()
</script>

<template>
  <section class="relative overflow-hidden" aria-labelledby="hero-title">
    <div class="wrap grid items-center gap-12 py-14 lg:grid-cols-12 lg:gap-8 lg:py-24">
      <div class="lg:col-span-7">
        <h1 id="hero-title" class="rise rise-2 m-0 text-[clamp(3rem,8.4vw,6rem)] leading-[0.98] font-bold tracking-[-0.035em]">
          Florent <span class="text-brand">Dubut</span>
        </h1>
        <p class="rise rise-3 mt-5 mb-0 font-display text-[clamp(1.4rem,3vw,2.1rem)] leading-tight font-semibold text-ink">
          {{ t('views.main.profil.description') }}
        </p>
        <p class="rise rise-3 mt-5 mb-0 max-w-[52ch] text-lg font-semibold text-ink">
          {{ t('views.main.hero.summary') }}
        </p>
        <p class="rise rise-3 mt-2 mb-0 max-w-[52ch] text-lg">
          {{ t('views.main.hero.outcome') }}
        </p>

        <div class="rise rise-4 mt-9 flex flex-col gap-3 sm:flex-row">
          <a class="btn w-full sm:w-auto" href="/files/cv-florent-dubut.pdf" target="_blank" rel="noopener noreferrer">
            <Icon name="download" :size="18" />
            {{ t('components.shared.appBar.downloadCv') }}
          </a>
          <a class="btn btn--outline w-full sm:w-auto" href="#contact">
            {{ t('views.main.hero.contact') }}
            <Icon name="arrowRight" :size="18" />
          </a>
        </div>

        <div class="rise rise-5 mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.95rem] font-semibold">
          <a class="inline-flex min-h-11 items-center gap-2" :href="URL_GITHUB" target="_blank" rel="noopener noreferrer"><Icon name="github" :size="18" />GitHub</a>
          <a class="inline-flex min-h-11 items-center gap-2" :href="URL_LINKEDIN" target="_blank" rel="noopener noreferrer"><Icon name="linkedin" :size="18" />LinkedIn</a>
        </div>
      </div>

      <div class="rise rise-3 relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-md lg:justify-self-end">
        <img
          :src="photo"
          :alt="t('views.main.hero.photoAlt')"
          width="800"
          height="800"
          fetchpriority="high"
          class="relative aspect-square w-full rounded-[58%_42%_55%_45%/48%_56%_44%_52%] border border-line object-cover object-[50%_22%] shadow-[0_24px_48px_-24px_rgba(15,29,20,0.4)]"
        />
      </div>
    </div>
  </section>
</template>
