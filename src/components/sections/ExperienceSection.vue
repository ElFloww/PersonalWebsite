<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SectionHeader from '@/components/shared/SectionHeader.vue'
import Icon from '@/components/ui/Icon.vue'
import orangeLogo from '@/assets/images/logo_orange.svg'

const { t, tm, rt } = useI18n()

const jobs = [
  { key: 'fourth', contract: 'cdi' },
  { key: 'third', contract: 'alternance' },
  { key: 'second', contract: 'cdd' },
  { key: 'first', contract: 'stage' },
] as const

const base = (key: string) => `views.main.professionalExperience.${key}`
const details = (key: string) => (tm(`${base(key)}.details`) as unknown[]).map((m) => rt(m as never))
const allStack = (key: string) => t(`${base(key)}.tech`).split(' · ')
const stack = (key: string) => allStack(key).slice(0, 7)
const hidden = (key: string) => Math.max(0, allStack(key).length - 7)
const highlights = (key: string) => details(key).slice(0, 4)
const rest = (key: string) => details(key).slice(4)
const title = (key: string) => t(`${base(key)}.title`).split(' — ')[0]
</script>

<template>
  <section id="experience" class="section section--soft">
    <div class="wrap grid gap-12 lg:grid-cols-12">
      <div class="lg:col-span-4">
        <SectionHeader
          :title="t('views.main.professionalExperience.sectionTitle')"
          :description="t('views.main.professionalExperience.sectionDescription')"
        />
      </div>

      <ol class="m-0 list-none p-0 lg:col-span-8">
        <li v-for="job in jobs" :key="job.key" class="grid gap-3 border-t border-line py-10 first:border-t-0 first:pt-0 sm:grid-cols-[9.5rem_1fr] sm:gap-8">
          <p class="m-0 text-[0.95rem] font-bold text-brand">{{ t(`${base(job.key)}.date`) }}</p>

          <article>
            <h3 class="m-0 text-[1.65rem] font-bold">{{ title(job.key) }}</h3>
            <p class="mt-2 mb-0 flex flex-wrap items-center gap-x-3 gap-y-1 font-semibold text-ink">
              <img :src="orangeLogo" alt="" width="24" height="24" class="size-6 shrink-0 rounded" />
              {{ t(`${base(job.key)}.company`) }}
              <span class="tag !py-0.5 !text-[0.8rem]">{{ t(`views.main.professionalExperience.contractType.${job.contract}`) }}</span>
            </p>

            <p v-if="t(`${base(job.key)}.shortDesc`)" class="measure mt-4 mb-0 text-[1.05rem]">{{ t(`${base(job.key)}.shortDesc`) }}</p>

            <ul v-if="highlights(job.key).length" class="measure mt-5 mb-0 list-disc space-y-1.5 pl-5 text-[1.02rem] text-ink marker:text-brand">
              <li v-for="(d, i) in highlights(job.key)" :key="i">{{ d }}</li>
            </ul>

            <ul class="m-0 mt-5 flex list-none flex-wrap gap-2 p-0" :aria-label="t('views.main.professionalExperience.stackTitle')">
              <li v-for="tool in stack(job.key)" :key="tool" class="tag">{{ tool }}</li>
              <li v-if="hidden(job.key)" class="tag !bg-transparent !text-muted">+{{ hidden(job.key) }}</li>
            </ul>

            <details v-if="rest(job.key).length" class="group mt-6">
              <summary class="inline-flex min-h-11 cursor-pointer list-none items-center gap-2 font-bold text-brand [&::-webkit-details-marker]:hidden">
                <span class="grid size-6 place-items-center rounded-full border border-current transition-transform duration-300 group-open:rotate-180"><Icon name="chevron" :size="14" /></span>
                <span class="group-open:hidden">{{ t('views.main.professionalExperience.learnMore') }} ({{ rest(job.key).length }})</span>
                <span class="hidden group-open:inline">{{ t('views.main.ui.hideDetails') }}</span>
              </summary>
              <div class="mt-4 rounded-2xl border border-line bg-surface p-5">
                <ul class="measure m-0 list-disc space-y-2 pl-5 text-[0.98rem] text-muted marker:text-brand">
                  <li v-for="(d, i) in rest(job.key)" :key="i">{{ d }}</li>
                </ul>
              </div>
            </details>
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>
