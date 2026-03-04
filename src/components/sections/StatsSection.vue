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

const targetValues = [experienceYears, 15, 25];

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
  <v-container id="stats-section" fluid class="stats-section pa-0">
    <div class="stats-wrapper py-16">
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
    </div>
  </v-container>
</template>

<style scoped>
.stats-section {
  background: white;
  position: relative;
  overflow: hidden;
}

.stats-wrapper {
  position: relative;
  z-index: 1;
}

.stat-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  animation: scaleIn 0.6s ease-out backwards;
}

.stat-card:hover {
  transform: translateY(-20px) scale(1.05);
  box-shadow: 0 20px 60px rgba(129, 199, 132, 0.3);
}

.stat-card:hover .stat-bg {
  opacity: 0.1;
  transform: scale(1.5);
}

.stat-icon-wrapper {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  position: relative;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.stat-icon-wrapper::before {
  content: "";
  position: absolute;
  inset: -5px;
  border-radius: 50%;
  border: 3px dashed rgba(129, 199, 132, 0.3);
  animation: pulse 3s infinite;
}

.stat-content {
  position: relative;
  z-index: 2;
}

.stat-number {
  font-size: 4rem;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.25rem;
}

.stat-sublabel {
  font-size: 1.1rem;
  color: #666;
  font-weight: 500;
}

.stat-bg {
  position: absolute;
  bottom: -50%;
  right: -50%;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  opacity: 0.05;
  transition: all 0.5s ease;
  pointer-events: none;
}

@media (max-width: 600px) {
  .stat-number {
    font-size: 3rem;
  }

  .stat-label {
    font-size: 1.2rem;
  }

  .stat-sublabel {
    font-size: 1rem;
  }
}
</style>
