<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Icon from '@/components/ui/Icon.vue'

const { t } = useI18n()
const visible = ref(false)
const toTop = () => window.scrollTo({ top: 0 })
const onScroll = () => (visible.value = window.scrollY > 700)

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <button
    v-if="visible"
    type="button"
    class="btn fixed right-4 bottom-4 z-40 !min-h-12 !w-12 !p-0 ring-2 ring-bg shadow-[var(--shadow-card)]"
    :aria-label="t('views.main.ui.backToTop')"
    @click="toTop"
  >
    <Icon name="arrowUp" :size="22" />
  </button>
</template>
