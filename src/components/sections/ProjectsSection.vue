<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SectionHeader from '@/components/shared/SectionHeader.vue'
import Icon from '@/components/ui/Icon.vue'
import tuuuurImage from '@/assets/images/tuuuur.webp'
import kairosImage from '@/assets/images/kairos.webp'
import HomelabDiagram from '@/components/ui/HomelabDiagram.vue'

const { t, tm, rt } = useI18n()

interface Project {
  key: string
  image?: string
  diagram?: boolean
  stack: string[]
  link?: string
  github?: string
  detailed: boolean
}

const projects: Project[] = [
  { key: 'tuuuur', image: tuuuurImage, detailed: true, stack: ['C#', '.NET Core', 'Vue.js', 'Flutter', 'SignalR', 'SQL Server', 'Redis', 'GCP', 'Terraform'], github: 'https://github.com/TuuuurProject' },
  { key: 'homelab', diagram: true, detailed: true, stack: ['Proxmox', 'OPNsense', 'WireGuard', 'NGINX Proxy Manager', 'Jellyfin', 'Nextcloud', 'Immich', 'Pterodactyl', 'RAID'] },
  { key: 'kairos', image: kairosImage, detailed: true, stack: ['Vue.js', 'JavaScript', 'MariaDB', 'CI/CD'], github: 'https://github.com/SAE5-Kairos' },
  { key: 'portfolio', detailed: false, stack: ['Vue.js 3', 'TypeScript', 'Tailwind CSS', 'Vite'], link: 'https://florent-dubut.fr' },
]

const base = (key: string) => `views.main.projects.items.${key}`

interface Block { heading: string; items: string[] }
const blocks = (path: string): Block[] =>
  Object.values(tm(path) as Record<string, { heading: unknown; items: unknown[] }>).map((b) => ({
    heading: rt(b.heading as never),
    items: b.items.map((i) => rt(i as never)),
  }))
</script>

<template>
  <section id="projects" class="section">
    <div class="wrap">
      <div class="max-w-2xl">
        <h2 class="m-0 text-[clamp(2rem,4.2vw,3.25rem)] font-bold">{{ t('views.main.projects.sectionTitle') }}</h2>
        <p class="mt-4 mb-0 text-lg">{{ t('views.main.projects.sectionDescription') }}</p>
      </div>

      <ol class="m-0 mt-14 flex list-none flex-col gap-16 p-0">
        <li v-for="(p, i) in projects" :key="p.key">
          <article class="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
            <HomelabDiagram
              v-if="p.diagram"
              class="aspect-video w-full rounded-2xl border border-line shadow-[var(--shadow-card)] lg:col-span-6 lg:row-start-1"
              :class="i % 2 ? 'lg:col-start-7' : 'lg:col-start-1'"
            />
            <img
              v-else-if="p.image"
              :src="p.image"
              :alt="t(`${base(p.key)}.title`)"
              width="960"
              height="540"
              loading="lazy"
              class="aspect-video w-full rounded-2xl border border-line object-cover shadow-[var(--shadow-card)] lg:col-span-6 lg:row-start-1"
              :class="i % 2 ? 'lg:col-start-7' : 'lg:col-start-1'"
            />

            <div class="lg:row-start-1" :class="p.image || p.diagram ? ['lg:col-span-6', i % 2 ? 'lg:col-start-1' : 'lg:col-start-7'] : 'lg:col-span-12'">
              <h3 class="m-0 text-[clamp(1.75rem,3vw,2.4rem)] font-bold">{{ t(`${base(p.key)}.title`) }}</h3>
              <p v-if="p.detailed" class="mt-2 mb-0 text-[0.95rem] font-semibold text-ink">
                <span class="text-brand">{{ t(`${base(p.key)}.period`) }}</span> · {{ t(`${base(p.key)}.roles`) }}
              </p>
              <p class="measure mt-4 mb-0 text-[1.05rem]">{{ t(`${base(p.key)}.shortDescription`) }}</p>

              <ul class="m-0 mt-5 flex list-none flex-wrap gap-2 p-0" :aria-label="t('views.main.projects.technologiesTitle')">
                <li v-for="s in p.stack" :key="s" class="tag">{{ s }}</li>
              </ul>

              <div class="mt-7 flex flex-wrap gap-3">
                <a v-if="p.link" class="btn" :href="p.link" target="_blank" rel="noopener noreferrer">
                  {{ t('views.main.projects.visit') }}<Icon name="external" :size="16" />
                </a>
                <a v-if="p.github" class="btn btn--outline" :href="p.github" target="_blank" rel="noopener noreferrer">
                  <Icon name="github" :size="18" />{{ t('views.main.projects.sourceCode') }}
                </a>
              </div>

            </div>

      <details v-if="p.detailed" class="group lg:col-span-12 lg:row-start-2">
        <summary class="inline-flex min-h-11 cursor-pointer list-none items-center gap-2 font-bold text-brand [&::-webkit-details-marker]:hidden">
          <span class="grid size-6 place-items-center rounded-full border border-current transition-transform duration-300 group-open:rotate-180"><Icon name="chevron" :size="14" /></span>
          <span class="group-open:hidden">{{ t('views.main.projects.details') }}</span>
          <span class="hidden group-open:inline">{{ t('views.main.ui.hideDetails') }}</span>
        </summary>
        <div class="mt-4 grid gap-x-8 gap-y-6 rounded-2xl border border-line bg-soft p-5 lg:grid-cols-2">
          <div v-for="group in ['missions', 'challenges']" :key="group">
            <h4 class="m-0 mb-3 font-sans text-base font-bold text-ink">
              {{ t(group === 'missions' ? 'views.main.projects.missionsTitle' : 'views.main.projects.challengesTitle') }}
            </h4>
            <section v-for="b in blocks(`${base(p.key)}.${group}`)" :key="b.heading" class="mb-4 last:mb-0">
              <h5 class="m-0 font-sans text-[0.95rem] font-bold text-ink">{{ b.heading }}</h5>
              <ul class="mt-1 mb-0 list-disc space-y-1 pl-5 text-[0.95rem] text-muted marker:text-brand">
                <li v-for="it in b.items" :key="it">{{ it }}</li>
              </ul>
            </section>
          </div>
        </div>
      </details>
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>
