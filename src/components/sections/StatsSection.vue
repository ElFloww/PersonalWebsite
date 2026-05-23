<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

interface Stat {
  value: number;
  suffix?: string;
  label: string;
  sublabel: string;
  icon: string;
  color: string;
  gradient: string;
}

const stats = ref<Stat[]>([
  {
    value: 0,
    suffix: "+",
    label: "years",
    sublabel: "experience",
    icon: "mdi-briefcase-clock",
    color: "green-lighten-1",
    gradient: "linear-gradient(135deg, #81c784 0%, #66bb6a 100%)",
  },
  {
    value: 0,
    suffix: "+",
    label: "projects",
    sublabel: "completed",
    icon: "mdi-rocket-launch",
    color: "blue",
    gradient: "linear-gradient(135deg, #42a5f5 0%, #1e88e5 100%)",
  },
  {
    value: 0,
    suffix: "+",
    label: "technologies",
    sublabel: "mastered",
    icon: "mdi-code-braces",
    color: "purple",
    gradient: "linear-gradient(135deg, #ab47bc 0%, #8e24aa 100%)",
  },
]);

const experienceStart = new Date("2023-04-01");
const experienceYears = Number.parseFloat(
  (
    (Date.now() - experienceStart.getTime()) /
    (1000 * 60 * 60 * 24 * 365.25)
  ).toFixed(0),
);

const targetValues = [experienceYears, 5, 25];

const animateValue = (
  index: number,
  start: number,
  end: number,
  duration: number,
) => {
  const range = end - start;
  const increment = range / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= end) {
      stats.value[index].value = end;
      clearInterval(timer);
    } else {
      stats.value[index].value = Math.floor(current);
    }
  }, 16);
};

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        stats.value.forEach((stat, index) => {
          setTimeout(() => {
            animateValue(index, 0, targetValues[index], 2000);
          }, index * 150);
        });
        observer.disconnect();
      }
    });
  });

  const element = document.getElementById("stats-section");
  if (element) observer.observe(element);
});
</script>

<template>
  <v-container id="stats-section" fluid class="stats-section py-16">
    <div class="stats-wrapper">
      <v-row justify="center" align="center">
        <v-col cols="12" md="10">
          <v-row justify="center" align="center">
            <v-col
              v-for="(stat, index) in stats"
              :key="index"
              cols="12"
              sm="6"
              md="4"
            >
              <div class="stat-card" :style="{ animationDelay: `${index * 0.1}s` }">
                <div
                  class="stat-icon-wrapper"
                  :style="{ background: stat.gradient }"
                >
                  <v-icon
                    :icon="stat.icon"
                    size="48"
                    color="white"
                    class="floating"
                  ></v-icon>
                </div>
                <div class="stat-content">
                  <div class="stat-number gradient-text">
                    {{ stat.value }}{{ stat.suffix }}
                  </div>
                  <div class="stat-label">
                    {{ t(`views.main.stats.${stat.label}`) }}
                  </div>
                  <div class="stat-sublabel">
                    {{ t(`views.main.stats.${stat.sublabel}`) }}
                  </div>
                </div>
                <div class="stat-bg" :style="{ background: stat.gradient }"></div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<style scoped>
.stats-section {
  background: transparent;
  position: relative;
  overflow: visible;
}

.stats-wrapper {
  position: relative;
  z-index: 1;
}

.stat-card {
  background: var(--surface);
  border-radius: 16px;
  padding: 1.75rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow-soft);
  transition: transform 0.32s ease, box-shadow 0.32s ease;
  animation: fadeUp 0.6s ease-out backwards;
}

.stat-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-card);
}

.stat-icon-wrapper {
  width: 84px;
  height: 84px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  position: relative;
  box-shadow: 0 8px 28px rgba(0,0,0,0.06);
}

.stat-number {
  font-size: 2.6rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 0.35rem;
  color: var(--ink);
}

.stat-label {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 0.2rem;
}

.stat-sublabel {
  font-size: 1rem;
  color: var(--ink-muted);
  font-weight: 500;
}

.stat-bg {
  position: absolute;
  bottom: -30%;
  right: -30%;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  opacity: 0.06;
  transition: all 0.4s ease;
  pointer-events: none;
}

@media (max-width: 600px) {
  .stat-number {
    font-size: 2.2rem;
  }

  .stat-label {
    font-size: 1rem;
  }

  .stat-sublabel {
    font-size: 0.95rem;
  }
}
</style>
