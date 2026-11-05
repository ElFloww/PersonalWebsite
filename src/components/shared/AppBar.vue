<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { i18n } from '@/plugins/i18n'
import { useAppTheme } from '@/composables/useAppTheme'
import Icon from '@/components/ui/Icon.vue'

const { t, locale } = useI18n()
const { isDark, toggleTheme } = useAppTheme()
const open = ref(false)
const active = ref('')
const toggleBtn = ref<HTMLButtonElement | null>(null)
const closeMenu = () => {
    if (!open.value) return
    open.value = false
    toggleBtn.value?.focus()
}
const toTop = () => window.scrollTo({ top: 0 })

const links = ['about', 'experience', 'education', 'certifications', 'skills', 'projects', 'contact'] as const

const changeLang = (lang: 'en' | 'fr') => {
    i18n.global.locale.value = lang
    document.documentElement.lang = lang
    localStorage.setItem('locale', lang)
}

// The current section is the last one whose top has passed the sticky header
let frame = 0
const updateActive = () => {
    frame = 0
    let current = ''
    for (const id of links) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 140) current = id
    }
    active.value = current
}
const onScroll = () => {
    if (!frame) frame = requestAnimationFrame(updateActive)
}

onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-md" @keydown.esc="closeMenu">
    <div class="wrap flex h-16 items-center justify-between gap-4">
      <a href="#top" class="inline-flex min-h-11 items-center gap-[0.28em] whitespace-nowrap font-display text-xl font-bold tracking-tight text-ink no-underline" @click.prevent="toTop">
        Florent <span class="text-brand">Dubut</span>
      </a>

      <nav class="hidden items-center gap-0.5 xl:flex" :aria-label="t('views.main.ui.mainNav')">
        <a
          v-for="id in links"
          :key="id"
          :href="`#${id}`"
          :aria-current="active === id ? 'location' : undefined"
          class="rounded-full px-2.5 py-2 text-[0.92rem] font-semibold whitespace-nowrap no-underline transition-colors hover:bg-tint hover:text-brand"
          :class="active === id ? 'bg-tint text-brand' : 'text-ink'"
        >
          {{ t(`components.shared.appBar.${id}`) }}
        </a>
      </nav>

      <div class="flex items-center gap-2">
        <div class="hidden items-center gap-2 md:flex">
          <div class="flex overflow-hidden rounded-full border border-line" role="group" :aria-label="t('views.main.ui.language')">
            <button
              v-for="l in (['fr', 'en'] as const)"
              :key="l"
              type="button"
              class="min-h-11 min-w-11 cursor-pointer px-2.5 text-sm font-bold uppercase transition-colors focus-visible:!outline-offset-[-3px]"
              :class="locale === l ? 'bg-brand text-onaccent' : 'bg-transparent text-muted hover:bg-tint'"
              :aria-pressed="locale === l"
              :aria-label="t(`components.shared.icons.${l}.alt`)"
              @click="changeLang(l)"
            >
              {{ l }}
            </button>
          </div>

          <button
            type="button"
            class="grid size-11 cursor-pointer place-items-center rounded-full border border-line text-ink transition-colors hover:bg-tint"
            :aria-label="isDark ? t('views.main.ui.themeLight') : t('views.main.ui.themeDark')"
            @click="toggleTheme"
          >
            <Icon :name="isDark ? 'sun' : 'moon'" />
          </button>
        </div>

        <a class="btn !min-h-11 !px-4 !py-1.5 !text-sm whitespace-nowrap" href="/files/cv-florent-dubut.pdf" target="_blank" rel="noopener noreferrer">
          <Icon name="download" :size="16" />
          {{ t('components.shared.appBar.downloadCv') }}
        </a>

        <button
          ref="toggleBtn"
          type="button"
          class="grid size-11 cursor-pointer place-items-center rounded-full border border-line text-ink xl:hidden"
          :aria-label="open ? t('views.main.ui.closeMenu') : t('views.main.ui.openMenu')"
          :aria-expanded="open"
          aria-controls="mobile-nav"
          @click="open = !open"
        >
          <Icon :name="open ? 'close' : 'menu'" :size="22" />
        </button>
      </div>
    </div>

    <nav v-if="open" id="mobile-nav" class="border-t border-line bg-bg xl:hidden" :aria-label="t('views.main.ui.mainNav')">
      <div class="wrap py-3">
        <a
          v-for="id in links"
          :key="id"
          :href="`#${id}`"
          :aria-current="active === id ? 'location' : undefined"
          class="block rounded-xl px-3 py-3 text-lg font-semibold no-underline hover:bg-tint"
          :class="active === id ? 'bg-tint text-brand' : 'text-ink'"
          @click="open = false"
        >
          {{ t(`components.shared.appBar.${id}`) }}
        </a>

        <div class="mt-3 flex items-center justify-between gap-3 border-t border-line pt-4 md:hidden">
          <div class="flex overflow-hidden rounded-full border border-line" role="group" :aria-label="t('views.main.ui.language')">
            <button
              v-for="l in (['fr', 'en'] as const)"
              :key="l"
              type="button"
              class="min-h-11 min-w-12 cursor-pointer px-3 text-sm font-bold uppercase"
              :class="locale === l ? 'bg-brand text-onaccent' : 'bg-transparent text-muted'"
              :aria-pressed="locale === l"
              :aria-label="t(`components.shared.icons.${l}.alt`)"
              @click="changeLang(l)"
            >
              {{ l }}
            </button>
          </div>
          <button
            type="button"
            class="grid size-11 cursor-pointer place-items-center rounded-full border border-line text-ink"
            :aria-label="isDark ? t('views.main.ui.themeLight') : t('views.main.ui.themeDark')"
            @click="toggleTheme"
          >
            <Icon :name="isDark ? 'sun' : 'moon'" />
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>
