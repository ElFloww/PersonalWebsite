<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { getTotalVisitCount } from '@/services/visitTracker';

const { t } = useI18n();
const count = ref<number | null>(null);
const visible = ref(false);

onMounted(async () => {
  const total = await getTotalVisitCount();
  count.value = total;
  // Petite animation d'apparition
  setTimeout(() => { visible.value = true; }, 300);
});
</script>

<template>
  <Transition name="slide-up">
    <div v-if="visible && count !== null" class="visit-counter">
      <span class="visit-counter__icon">👁</span>
      <span class="visit-counter__label">
        <span class="visit-counter__number">{{ count.toLocaleString('fr-FR') }}</span>
        <span class="visit-counter__text">{{ t('components.shared.visitCounter.visits') }}</span>
      </span>
    </div>
  </Transition>
</template>

<style scoped>
.visit-counter {
  position: fixed;
  bottom: 24px;
  left: 24px;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.25);
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.8rem;
  font-family: inherit;
  pointer-events: none;
  user-select: none;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.visit-counter__icon {
  font-size: 1rem;
  line-height: 1;
  opacity: 0.9;
}

.visit-counter__label {
  display: flex;
  align-items: baseline;
  gap: 5px;
}

.visit-counter__number {
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.02em;
  color: #fff;
}

.visit-counter__text {
  font-size: 0.72rem;
  opacity: 0.65;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

/* Slide-up transition */
.slide-up-enter-active {
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
</style>
