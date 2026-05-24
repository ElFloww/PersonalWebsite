<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import upjvLogo from "@/assets/images/logo_upjv.png";
import inssetLogo from "@/assets/images/logo_insset.png";
import { getToolIcon } from "@/utils/techIcons";

const { t, tm, locale } = useI18n();

interface EducationCategory {
  titleFr: string;
  titleEn: string;
  icon: string;
  accent?: string;
  gradient?: string;
  skills: string[];
}

interface Education {
  key: string;
  icon: string;
  color: string;
  gradient: string;
  logo?: string;
  categories: EducationCategory[];
  additionalTechnologies?: string[];
}

const educations: Education[] = [
  {
    key: "second",
    icon: "mdi-cloud",
    color: "green-lighten-1",
    gradient: "linear-gradient(135deg, #81c784 0%, #66bb6a 100%)",
    logo: inssetLogo,
    categories: [
      {
        titleFr: "Cloud Platforms",
        titleEn: "Cloud Platforms",
        icon: "mdi-cloud-outline",
        accent: "#1976D2",
        gradient: "linear-gradient(135deg, #2196F3 0%, #1565C0 100%)",
        skills: ["Azure", "AWS", "Google Cloud Platform (GCP)"]
      },
      {
        titleFr: "Containers & Orchestration",
        titleEn: "Containers & Orchestration",
        icon: "mdi-kubernetes",
        accent: "#8E24AA",
        gradient: "linear-gradient(135deg, #AB47BC 0%, #8E24AA 100%)",
        skills: ["Docker", "Kubernetes (K8s)", "Docker Swarm"]
      },
      {
        titleFr: "DevOps & Automation",
        titleEn: "DevOps & Automation",
        icon: "mdi-cog-sync",
        accent: "#43A047",
        gradient: "linear-gradient(135deg, #66BB6A 0%, #388E3C 100%)",
        skills: ["Azure DevOps", "GitLab CI", "Pipelines CI/CD", "Déploiements automatisés", "Monitoring", "Infrastructure as Code (IaC)", "Terraform", "ARM Templates"]
      }
    ],
    additionalTechnologies: [
      "Architectures Microservices",
      "Cloud-native patterns",
      "Virtualisation",
      "Architectures événementielles",
      "Internet of Things (IoT)",
      "Big Data & Cloud Data Management",
      "Intelligence Artificielle",
      "Développement Mobile (iOS/Android)"
    ]
  },
  {
    key: "first",
    icon: "mdi-laptop",
    color: "blue-lighten-1",
    gradient: "linear-gradient(135deg, #42a5f5 0%, #1e88e5 100%)",
    logo: upjvLogo,
    categories: [
      {
        titleFr: "Programming & Scripting",
        titleEn: "Programming & Scripting",
        icon: "mdi-code-braces",
        accent: "#FB8C00",
        gradient: "linear-gradient(135deg, #FFA726 0%, #FB8C00 100%)",
        skills: ["C#", "Java", "Python", "C++", "PHP", "JavaScript", "HTML/CSS"]
      },
      {
        titleFr: "DevOps & Automation",
        titleEn: "DevOps & Automation",
        icon: "mdi-cog-sync",
        accent: "#43A047",
        gradient: "linear-gradient(135deg, #66BB6A 0%, #388E3C 100%)",
        skills: ["Administration Linux", "Git"]
      }
    ],
    additionalTechnologies: [
      "Programmation Orientée Objet (POO)",
      "Design Patterns",
      "UML / MCD",
      "Architecture logicielle",
      "SQL Server",
      "PostgreSQL",
      "NoSQL",
      "Réseaux TCP/IP",
      "Méthode Agile (Scrum)",
      "Tests unitaires & d'intégration",
      "Couverture de code"
    ]
  },
];

const getEducationHighlights = (educationKey: string): string[] => {
  const highlightsKey = `views.main.education.${educationKey}.highlights`;
  const highlights = tm(highlightsKey);
  return Array.isArray(highlights) ? (highlights as string[]) : [];
};

const selectedEducation = ref<Education | null>(null);
const dialog = ref(false);

const showDetails = (edu: Education) => {
  selectedEducation.value = edu;
  dialog.value = true;
};
</script>

<template>
  <v-container id="education" fluid class="education-section py-16">
    <v-row justify="center" class="mb-12">
      <v-col cols="12" class="text-center">
        <div class="title-container">
          <v-icon
            icon="mdi-school"
            size="56"
            color="green-lighten-1"
            class="mb-4"
          ></v-icon>
          <h1 class="text-h2 font-weight-bold mb-4">
            {{ t("views.main.education.sectionTitle") }}
          </h1>
          <p class="introduction-text text-body1 text-grey-darken-1 mb-6 font-weight-500">
            {{ t("views.main.education.sectionDescription") }}
          </p>
        </div>
        <v-divider
          class="mx-auto my-4"
          color="green-lighten-1"
          :thickness="4"
          width="100"
          style="border-radius: 4px"
        ></v-divider>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" md="10" lg="10">
        <div class="academic-path">
          <article
            v-for="(edu, index) in educations"
            :key="edu.key"
            class="path-item"
            :style="{ animationDelay: `${index * 0.12}s` }"
          >
            <div class="path-node" :style="{ background: edu.gradient }">
              <v-icon :icon="edu.icon" size="22" color="white"></v-icon>
            </div>

            <v-card class="path-card" elevation="0" @click="showDetails(edu)" style="cursor: pointer;">
              <v-card-text class="pa-6">
                <div class="path-top mb-4">
                  <v-chip :color="edu.color" variant="tonal" size="small">
                    <v-icon icon="mdi-calendar" start size="small"></v-icon>
                    {{ t(`views.main.education.${edu.key}.date`) }}
                  </v-chip>

                  <div v-if="edu.logo" class="school-logo-wrapper">
                    <img
                      :src="edu.logo"
                      :alt="t(`views.main.education.${edu.key}.school`)"
                      class="edu-school-logo"
                    />
                  </div>
                </div>

                <h2 class="text-h6 font-weight-bold mb-1 path-title">
                  {{ t(`views.main.education.${edu.key}.title`) }}
                </h2>

                <div class="d-flex align-center mb-3">
                  <v-icon
                    icon="mdi-map-marker"
                    size="16"
                    class="mr-1"
                    color="primary"
                  ></v-icon>
                  <span class="text-body-2 text-medium-emphasis">
                    {{ t(`views.main.education.${edu.key}.school`) }}
                  </span>
                </div>

                <v-chip
                  v-if="edu.key === 'first'"
                  :color="edu.color"
                  variant="outlined"
                  size="small"
                  class="mb-4"
                >
                  <v-icon start size="14">mdi-tag</v-icon>
                  {{ t("views.main.education.first.parcours") }}
                </v-chip>

                <p class="text-body-2 text-medium-emphasis mb-4 path-summary">
                  {{
                    t(`views.main.education.${edu.key}.content1`) ||
                    t(`views.main.education.${edu.key}.content`)
                  }}
                </p>

                <div class="d-flex flex-wrap ga-2 mb-4">
                  <v-chip
                    v-for="highlight in getEducationHighlights(edu.key)"
                    :key="highlight"
                    :color="edu.color"
                    variant="outlined"
                    size="x-small"
                  >
                    {{ highlight }}
                  </v-chip>
                </div>

                <v-btn
                  :color="edu.color"
                  variant="tonal"
                  append-icon="mdi-arrow-right"
                  @click="showDetails(edu)"
                >
                  {{ t("views.main.education.viewProgram") }}
                </v-btn>
              </v-card-text>
            </v-card>
          </article>
        </div>
      </v-col>
    </v-row>

    <!-- Dialog pour les détails -->
    <v-dialog v-model="dialog" max-width="940">
      <v-card v-if="selectedEducation" class="detailed-dialog education-dialog">
        <div class="dialog-accent" :style="{ background: selectedEducation.gradient }"></div>

        <div class="dialog-header">
          <div class="dialog-header-main">
            <div v-if="selectedEducation.logo" class="school-logo-dialog">
              <img
                :src="selectedEducation.logo"
                :alt="t(`views.main.education.${selectedEducation.key}.school`)"
                class="edu-school-logo-dialog"
              />
            </div>

            <div class="dialog-heading-copy">
              <p class="dialog-kicker mb-2">{{ t(`views.main.education.${selectedEducation.key}.date`) }}</p>
              <h2 class="text-h5 font-weight-bold mb-1">
                {{ t(`views.main.education.${selectedEducation.key}.title`) }}
              </h2>
              <p class="dialog-company text-subtitle-2 mb-0">
                {{ t(`views.main.education.${selectedEducation.key}.school`) }}
              </p>
            </div>
          </div>

          <v-btn
            icon="mdi-close"
            variant="text"
            density="comfortable"
            class="dialog-close"
            @click="dialog = false"
          ></v-btn>
        </div>

        <v-card-text class="dialog-body pa-6 pt-2">
          <div class="dialog-meta mb-6">
            <v-chip :color="selectedEducation.color" variant="tonal" size="small">
              <v-icon icon="mdi-calendar-outline" start size="small"></v-icon>
              {{ t(`views.main.education.${selectedEducation.key}.date`) }}
            </v-chip>
            <v-chip :color="selectedEducation.color" variant="tonal" size="small">
              <v-icon icon="mdi-map-marker" start size="small"></v-icon>
              {{ t(`views.main.education.${selectedEducation.key}.school`) }}
            </v-chip>
          </div>

          <div class="dialog-grid">
            <section class="dialog-panel">
              <h3 class="panel-title d-flex align-center mb-3">
                <v-icon :color="selectedEducation.color" icon="mdi-text-box-outline" class="mr-2"></v-icon>
                {{ t('views.main.education.parcours') }}
              </h3>

              <div v-if="selectedEducation.key === 'first'" class="dialog-copy-stack">
                <p class="panel-text">{{ t("views.main.education.first.content1") }}</p>
                <p class="panel-text">{{ t("views.main.education.first.content2") }}</p>
                <p class="panel-text">{{ t("views.main.education.first.content3") }}</p>
              </div>
              <div v-else class="dialog-copy-stack">
                <p class="panel-text">{{ t("views.main.education.second.content1") }}</p>
                <p class="panel-text">{{ t("views.main.education.second.content2") }}</p>
                <p class="panel-text">{{ t("views.main.education.second.content3") }}</p>
              </div>
            </section>

            <section class="dialog-panel dialog-panel--soft">
              <h3 class="panel-title d-flex align-center mb-4">
                <v-icon :color="selectedEducation.color" icon="mdi-book-open-page-variant" class="mr-2"></v-icon>
                {{ t("views.main.education.modulesAndSkills") }}
              </h3>

              <div>
                <div class="education-categories-grid">
                  <v-card
                    v-for="category in selectedEducation.categories"
                    :key="category.titleFr"
                    class="technical-card"
                    elevation="0"
                  >
                    <v-card-text class="pa-6">
                      <div class="technical-card-header mb-5">
                        <div class="technical-title-wrap">
                          <div class="technical-icon" :style="{ background: category.gradient || selectedEducation.gradient }">
                            <v-icon :icon="category.icon" size="22" color="white"></v-icon>
                          </div>
                          <h4 class="text-h6 font-weight-bold ma-0">{{ locale === 'fr' ? category.titleFr : category.titleEn }}</h4>
                        </div>
                      </div>

                      <div class="skills-mini-grid">
                        <v-sheet
                          v-for="skill in category.skills"
                          :key="skill"
                          class="skill-mini-card"
                          rounded="lg"
                          :style="{ borderColor: category.accent || 'var(--line)' }"
                        >
                          <v-icon :color="category.accent || selectedEducation.color" :icon="getToolIcon(skill)" size="18" class="mr-2"></v-icon>
                          {{ skill }}
                        </v-sheet>
                      </div>
                    </v-card-text>
                  </v-card>
                </div>

                <div v-if="selectedEducation.additionalTechnologies && selectedEducation.additionalTechnologies.length > 0" class="mt-6">
                  <h4 class="text-subtitle-1 font-weight-bold mb-3 d-flex align-center">
                    {{ t('views.main.education.additionalTechnologies') }}
                  </h4>
                  <div class="additional-tech">
                    <v-chip
                      v-for="tech in selectedEducation.additionalTechnologies"
                      :key="tech"
                      class="ma-1"
                      variant="outlined"
                      color="grey-darken-1"
                      size="small"
                    >
                      {{ tech }}
                    </v-chip>
                  </div>
                </div>
                
              </div>
            </section>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<style scoped>
.education-section {
  background: transparent;
  position: relative;
}

.title-container {
  position: relative;
  z-index: 1;
}

.academic-path {
  position: relative;
  padding-left: 2.75rem;
}

.academic-path::before {
  content: "";
  position: absolute;
  left: 14px;
  top: 6px;
  bottom: 6px;
  width: 2px;
  background: linear-gradient(180deg, rgba(74, 143, 104, 0.18) 0%, rgba(74, 143, 104, 0.06) 100%);
}

.path-item {
  position: relative;
  margin-bottom: 1.25rem;
  animation: fadeUp 0.5s ease-out backwards;
}

.path-item:last-child {
  margin-bottom: 0;
}

.path-node {
  position: absolute;
  left: -2.75rem;
  top: 1.2rem;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 16px rgba(15, 29, 20, 0.14);
  border: 2px solid #fff;
}

.path-card {
  position: relative;
  overflow: visible;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--surface);
  box-shadow: var(--shadow-soft);
  transition: transform 0.22s ease, box-shadow 0.22s ease;
}

.path-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-card);
}

.path-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.path-title {
  color: var(--ink);
}

.path-summary {
  line-height: 1.75;
}

.school-logo-wrapper {
  background: rgba(255, 255, 255, 0.92);
  border-radius: 8px;
  padding: 6px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.edu-school-logo {
  max-height: 40px;
  max-width: 120px;
  object-fit: contain;
}

.school-logo-dialog {
  background: rgba(255, 255, 255, 0.92);
  border-radius: 10px;
  padding: 0.35rem 0.65rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
}

.edu-school-logo-dialog {
  max-height: 28px;
  max-width: 72px;
  object-fit: contain;
}

.education-dialog {
  background: var(--surface);
  box-shadow: var(--shadow-card);
  border-radius: 14px;
  overflow: hidden;
}

.dialog-accent {
  height: 6px;
}

.dialog-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.25rem 1.5rem 0.5rem;
}

.dialog-header-main {
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 0;
}

.dialog-heading-copy {
  min-width: 0;
}

.dialog-kicker {
  display: inline-flex;
  align-items: center;
  padding: 0.3rem 0.65rem;
  border-radius: 999px;
  background: rgba(76, 175, 80, 0.1);
  color: #2e7d32;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.dialog-company {
  color: var(--ink-muted);
}

.dialog-close {
  margin-top: -0.15rem;
}

.dialog-body {
  display: flex;
  flex-direction: column;
}

.dialog-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.dialog-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(300px, 0.9fr);
  gap: 1rem;
}

.dialog-panel {
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--surface);
  padding: 1.15rem;
  box-shadow: var(--shadow-soft);
}

.dialog-panel--soft {
  background: var(--surface-muted);
}

.panel-title {
  font-size: 0.98rem;
  font-weight: 700;
  color: var(--ink);
}

.panel-text {
  line-height: 1.8;
  color: var(--ink-muted);
  font-size: 0.96rem;
}

.dialog-copy-stack {
  display: grid;
  gap: 0.8rem;
}

.modules-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.5rem;
}

.module-mini-card {
  min-height: 42px;
  padding: 0.5rem 0.65rem;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background: linear-gradient(180deg, var(--surface) 0%, var(--surface-muted) 100%);
  border: 1px solid rgba(76, 175, 80, 0.08);
  color: var(--ink);
  font-size: 0.88rem;
  font-weight: 600;
}

/* Reuse skills mini-card styles from SkillsSection for consistent look */
.skills-mini-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.65rem;
}

.skill-mini-card {
  border: 1px solid var(--line);
  background: linear-gradient(180deg, var(--surface) 0%, var(--surface-muted) 100%);
  border-radius: 10px;
  min-height: 48px;
  height: auto;
  padding: 0.55rem 0.7rem;
  display: flex;
  align-items: center;
  font-weight: 600;
  color: var(--ink);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  white-space: normal;
  word-break: break-word;
  overflow-wrap: break-word;
  line-height: 1.25;
}

.skill-mini-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(56, 142, 60, 0.12);
}

.education-categories-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.technical-card {
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--surface);
  box-shadow: var(--shadow-soft);
  transition: transform 0.22s ease, box-shadow 0.22s ease;
}

.technical-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card);
}

.technical-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.technical-title-wrap {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.technical-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 16px rgba(15, 29, 20, 0.08);
}

.additional-tech {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 0.5rem;
}

.additional-tech .v-chip {
  border-radius: 999px;
  background: var(--surface-muted);
  color: var(--ink);
}

@media (max-width: 960px) {
  .academic-path {
    padding-left: 2.25rem;
  }

  .academic-path::before {
    left: 11px;
  }

  .path-node {
    left: -2.25rem;
    width: 26px;
    height: 26px;
    top: 1.35rem;
  }
}

@media (max-width: 768px) {
  .education-categories-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .path-top {
    flex-direction: column;
    align-items: flex-start;
  }

  .dialog-header {
    padding-inline: 1rem;
  }

  .dialog-header-main {
    align-items: flex-start;
  }

  .dialog-grid {
    grid-template-columns: 1fr;
  }

  .dialog-panel {
    padding: 1rem;
  }

  .modules-grid {
    grid-template-columns: 1fr;
  }

  .technical-card .v-card-text {
    padding: 1rem !important;
  }

  .skills-mini-grid {
    grid-template-columns: 1fr;
  }
}
</style>