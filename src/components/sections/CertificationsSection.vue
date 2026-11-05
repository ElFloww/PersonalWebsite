<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SectionHeader from '@/components/shared/SectionHeader.vue'
import Icon from '@/components/ui/Icon.vue'

const { t, tm, rt } = useI18n()
const planned = computed(() =>
  (tm('views.main.certifications.planned') as { title: unknown; issuer: unknown }[]).map((c) => ({
    title: rt(c.title as never),
    issuer: rt(c.issuer as never),
  })),
)
const credentialId = 'a30d0f80-8963-4c0e-a77c-1b72dddd9b3a'
const verifyUrl = `https://certificates.dev/vuejs/certificates/${credentialId}`
</script>

<template>
  <section id="certifications" class="section !py-14 lg:!py-20">
    <div class="wrap grid gap-10 lg:grid-cols-12 lg:gap-12">
      <div class="lg:col-span-4">
        <SectionHeader :title="t('views.main.certifications.sectionTitle')" />
      </div>

      <div class="lg:col-span-8">
      <article class="card p-7 sm:p-8">
        <svg class="mb-5 h-10 w-auto" viewBox="0 0 261.76 226.69" aria-hidden="true">
          <path fill="#41B883" d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" />
          <path fill="#34495E" class="dark:fill-[#e8e8e8]" d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z" />
        </svg>
        <h3 class="m-0 text-[1.65rem] font-bold">{{ t('views.main.certifications.title') }}</h3>
        <p class="mt-2 mb-0 font-semibold text-ink">{{ t('views.main.certifications.issuer') }}</p>
        <p class="mt-3 mb-0">
          {{ t('views.main.certifications.issued') }}
        </p>
        <p class="mt-5 mb-0 text-[0.95rem]">
          <span class="font-bold text-ink">{{ t('views.main.certifications.idLabel') }}</span><br />
          <code class="break-all font-mono text-[0.9rem] text-muted select-all">{{ credentialId }}</code>
        </p>
        <a class="btn btn--outline mt-6" :href="verifyUrl" target="_blank" rel="noopener noreferrer">
          {{ t('views.main.certifications.verify') }}
          <Icon name="external" :size="16" />
        </a>
      </article>

      <h3 class="m-0 mt-10 text-[1.4rem] font-bold">{{ t('views.main.certifications.inProgressTitle') }}</h3>
      <ul class="m-0 mt-4 grid list-none gap-3 p-0 sm:grid-cols-3">
        <li v-for="c in planned" :key="c.title" class="rounded-2xl border border-dashed border-strong bg-surface p-5">
          <p class="m-0 font-display text-lg leading-snug font-bold text-ink">{{ c.title }}</p>
          <p class="mt-1 mb-3 text-[0.95rem] font-semibold text-muted">{{ c.issuer }}</p>
          <span class="tag !text-[0.8rem]">{{ t('views.main.certifications.inProgressTag') }}</span>
        </li>
      </ul>
      </div>
    </div>
  </section>
</template>
