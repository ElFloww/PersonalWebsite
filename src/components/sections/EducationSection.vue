<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SectionHeader from '@/components/shared/SectionHeader.vue'
import Icon from '@/components/ui/Icon.vue'
import upjvLogo from '@/assets/images/logo_upjv.webp'
import inssetLogo from '@/assets/images/logo_insset.webp'

const { t, tm, rt } = useI18n()

const schools = [
  { key: 'second', logo: inssetLogo },
  { key: 'first', logo: upjvLogo },
] as const

const base = (key: string) => `views.main.education.${key}`
const list = (path: string) => (tm(path) as unknown[]).map((m) => rt(m as never))
// Module titles only: the long explanation after the colon lives in the CV
const modules = (key: string) => list(`${base(key)}.modules`).map((m) => String(m).split(' : ')[0])
</script>

<template>
  <section id="education" class="section">
    <div class="wrap grid gap-12 lg:grid-cols-12">
      <div class="lg:col-span-4">
        <SectionHeader
          :title="t('views.main.education.sectionTitle')"
          :description="t('views.main.education.sectionDescription')"
        />
      </div>

      <ol class="m-0 list-none p-0 lg:col-span-8">
        <li v-for="s in schools" :key="s.key" class="grid gap-3 border-t border-line py-10 first:border-t-0 first:pt-0 sm:grid-cols-[9.5rem_1fr] sm:gap-8">
          <p class="m-0 text-[0.95rem] font-bold text-brand">{{ t(`${base(s.key)}.date`) }}</p>

          <article>
            <div class="flex items-start gap-4">
              <img :src="s.logo" alt="" width="48" height="48" class="size-12 shrink-0 rounded-lg border border-line bg-white object-contain p-1" />
              <div>
                <h3 class="m-0 text-[1.65rem] font-bold">{{ t(`${base(s.key)}.title`) }}</h3>
                <p class="mt-1 mb-0 font-semibold text-ink">{{ t(`${base(s.key)}.school`) }}</p>
              </div>
            </div>

            <ul class="m-0 mt-5 flex list-none flex-wrap gap-2 p-0">
              <li v-for="h in list(`${base(s.key)}.highlights`)" :key="h" class="tag">{{ h }}</li>
            </ul>

            <details class="group mt-6">
              <summary class="inline-flex min-h-11 cursor-pointer list-none items-center gap-2 font-bold text-brand [&::-webkit-details-marker]:hidden">
                <span class="grid size-6 place-items-center rounded-full border border-current transition-transform duration-300 group-open:rotate-180"><Icon name="chevron" :size="14" /></span>
                <span class="group-open:hidden">{{ t('views.main.education.viewProgram') }} ({{ modules(s.key).length }})</span>
                <span class="hidden group-open:inline">{{ t('views.main.ui.hideDetails') }}</span>
              </summary>
              <div class="mt-4 rounded-2xl border border-line bg-surface p-5">
                <ul class="m-0 grid list-disc gap-x-8 gap-y-2 pl-5 text-[0.98rem] text-muted marker:text-brand sm:grid-cols-2">
                  <li v-for="m in modules(s.key)" :key="m">{{ m }}</li>
                </ul>
              </div>
            </details>
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>
