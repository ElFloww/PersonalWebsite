<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import orangeLogo from "@/assets/images/logo_orange.svg";

const { t, tm } = useI18n();

interface Experience {
  key: string;
  color: string;
  gradient: string;
  logo?: string;
  contractType: "Stage" | "CDD" | "Alternance";
  contractIcon: string;
  technologies: {
    category: string;
    icon: string;
    color: string;
    gradient: string;
    tools: string[];
  }[];
  additionalTechnologies?: string[];
}

const getExperienceDetails = (experienceKey: string): string[] => {
  const detailsKey = `views.main.professionalExperience.${experienceKey}.details`;
  const details = tm(detailsKey);
  return Array.isArray(details) ? (details as string[]) : [];
};

const experiences: Experience[] = [
  {
    key: "third",
    color: "green-lighten-1",
    contractType: "Alternance",
    contractIcon: "mdi-handshake",
    gradient: "linear-gradient(135deg, #81c784 0%, #4caf50 100%)",
    logo: orangeLogo,
    technologies: [
      {
        category: "Programming & Scripting",
        icon: "mdi-code-braces",
        color: "#FB8C00",
        gradient: "linear-gradient(135deg, #FFA726 0%, #FB8C00 100%)",
        tools: ["C#", "TypeScript", "JavaScript", "ASP.NET Core (.NET 6/.NET 8)", "Vue.js 3", "Angular", "Vuetify"],
      },
      {
        category: "Containers & Orchestration",
        icon: "mdi-kubernetes",
        color: "#8E24AA",
        gradient: "linear-gradient(135deg, #AB47BC 0%, #8E24AA 100%)",
        tools: ["Docker"],
      },
      {
        category: "DevOps & Automation",
        icon: "mdi-cog-sync",
        color: "#43A047",
        gradient: "linear-gradient(135deg, #66BB6A 0%, #388E3C 100%)",
        tools: ["Azure DevOps", "CI/CD", "Git"],
      },
    ],
    additionalTechnologies: [
      "Entity Framework Core",
      "MediatR",
      "CQRS",
      "SQL Server",
      "REST",
      "SOAP",
      "Whisper IA (OpenAI)",
      "Agile",
      "Scrum",
      "Revues de code"
    ]
  },
  {
    key: "second",
    color: "blue-lighten-1",
    contractType: "CDD",
    contractIcon: "mdi-file-document-outline",
    gradient: "linear-gradient(135deg, #42a5f5 0%, #1e88e5 100%)",
    logo: orangeLogo,
    technologies: [
      {
        category: "Programming & Scripting",
        icon: "mdi-code-braces",
        color: "#FB8C00",
        gradient: "linear-gradient(135deg, #FFA726 0%, #FB8C00 100%)",
        tools: ["C#", "ASP.NET Core (.NET 6)"],
      },
      {
        category: "DevOps & Automation",
        icon: "mdi-cog-sync",
        color: "#43A047",
        gradient: "linear-gradient(135deg, #66BB6A 0%, #388E3C 100%)",
        tools: ["Azure DevOps", "Git"],
      },
    ],
    additionalTechnologies: [
      "Entity Framework Core",
      "Clean Architecture",
      "xUnit",
      "FluentValidation",
      "MediatR",
      "SQL Server",
      "Swagger / OpenAPI"
    ]
  },
  {
    contractType: "Stage",
    contractIcon: "mdi-school",
    key: "first",
    color: "purple-lighten-1",
    gradient: "linear-gradient(135deg, #ab47bc 0%, #8e24aa 100%)",
    logo: orangeLogo,
    technologies: [
      {
        category: "Programming & Scripting",
        icon: "mdi-code-braces",
        color: "#FB8C00",
        gradient: "linear-gradient(135deg, #FFA726 0%, #FB8C00 100%)",
        tools: ["C#", "ASP.NET Core (.NET 6)", "Vue.js", "Vuetify", "AngularJS"],
      },
      {
        category: "DevOps & Automation",
        icon: "mdi-cog-sync",
        color: "#43A047",
        gradient: "linear-gradient(135deg, #66BB6A 0%, #388E3C 100%)",
        tools: ["Git"],
      },
    ],
    additionalTechnologies: [
      "Entity Framework Core",
      "SQL Server",
      "Clean Architecture",
      "Injection de dépendances",
      "AutoMapper"
    ]
  },
];

const selectedExperience = ref<Experience | null>(null);
const dialog = ref(false);

const showDetails = (exp: Experience) => {
  selectedExperience.value = exp;
  dialog.value = true;
};
</script>

<template>
  <v-container id="experience" fluid class="experience-section py-16">
    <v-row justify="center" class="mb-12">
      <v-col cols="12" class="text-center">
        <div class="title-container">
          <v-icon
            icon="mdi-briefcase-variant"
            size="56"
            color="green-lighten-1"
            class="mb-4"
          ></v-icon>
          <h1 class="text-h2 font-weight-bold mb-3">
            {{ t("views.main.professionalExperience.sectionTitle") }}
          </h1>
          <p class="text-h6 text-grey-darken-1">
            {{ t("views.main.professionalExperience.sectionDescription") }}
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
        <div class="professional-path">
          <article
            v-for="(exp, index) in experiences"
            :key="exp.key"
            class="path-item"
            :style="{ animationDelay: `${index * 0.12}s` }"
          >
            <div class="path-node" :style="{ background: exp.gradient }">
              <v-icon :icon="exp.contractIcon" size="18" color="white"></v-icon>
            </div>

            <v-card class="path-card" elevation="0" @click="showDetails(exp)">
              <v-card-text class="pa-6">
                <div class="path-top mb-4">
                  <v-chip :color="exp.color" variant="tonal" size="small">
                    <v-icon icon="mdi-calendar" start size="small"></v-icon>
                    {{ t(`views.main.professionalExperience.${exp.key}.date`) }}
                  </v-chip>

                  <v-chip :color="exp.color" variant="outlined" size="small">
                    <v-icon :icon="exp.contractIcon" start size="small"></v-icon>
                    {{ exp.contractType }}
                  </v-chip>
                </div>

                <div class="path-company mb-3">
                  <div v-if="exp.logo" class="company-logo-wrapper">
                    <img
                      :src="exp.logo"
                      :alt="t(`views.main.professionalExperience.${exp.key}.company`)"
                      class="exp-company-logo"
                    />
                  </div>
                </div>

                <h2 class="text-h6 font-weight-bold mb-1 path-title">
                  {{ t(`views.main.professionalExperience.${exp.key}.title`) }}
                </h2>

                <div class="d-flex align-center mb-3">
                  <v-icon
                    icon="mdi-office-building"
                    size="16"
                    class="mr-1"
                    color="primary"
                  ></v-icon>
                  <span class="text-body-2 text-medium-emphasis">
                    {{ t(`views.main.professionalExperience.${exp.key}.company`) }}
                  </span>
                </div>

                <p class="text-body-2 text-medium-emphasis mb-4 path-summary">
                  {{ t(`views.main.professionalExperience.${exp.key}.shortDesc`) }}
                </p>

                <div class="d-flex flex-wrap ga-1 mb-4">
                  <v-chip
                    v-for="tech in t(`views.main.professionalExperience.${exp.key}.tech`).split(' · ').slice(0, 4)"
                    :key="tech"
                    size="x-small"
                    variant="tonal"
                    :color="exp.color"
                  >
                    {{ tech }}
                  </v-chip>
                  <v-chip
                    v-if="t(`views.main.professionalExperience.${exp.key}.tech`).split(' · ').length > 4"
                    size="x-small"
                    variant="tonal"
                    :color="exp.color"
                  >
                    +{{ t(`views.main.professionalExperience.${exp.key}.tech`).split(' · ').length - 4 }}
                  </v-chip>
                </div>

                <v-btn
                  :color="exp.color"
                  variant="tonal"
                  size="small"
                  append-icon="mdi-arrow-right"
                  @click.stop="showDetails(exp)"
                >
                  {{ t("views.main.professionalExperience.learnMore") }}
                </v-btn>
              </v-card-text>
            </v-card>
          </article>
        </div>
      </v-col>
    </v-row>

    <!-- Dialog pour les détails -->
    <v-dialog v-model="dialog" max-width="940">
      <v-card v-if="selectedExperience" class="detailed-dialog experience-dialog">
        <div class="dialog-accent" :style="{ background: selectedExperience.gradient }"></div>

        <div class="dialog-header">
          <div class="dialog-header-main">
            <div v-if="selectedExperience.logo" class="company-logo-dialog">
              <img
                :src="selectedExperience.logo"
                :alt="t(`views.main.professionalExperience.${selectedExperience.key}.company`)"
                class="exp-company-logo-dialog"
              />
            </div>

            <div class="dialog-heading-copy">
              <p class="dialog-kicker mb-2">{{ selectedExperience.contractType }}</p>
              <h2 class="text-h5 font-weight-bold mb-1">
                {{ t(`views.main.professionalExperience.${selectedExperience.key}.title`) }}
              </h2>
              <p class="dialog-company text-subtitle-2 mb-0">
                {{ t(`views.main.professionalExperience.${selectedExperience.key}.company`) }}
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
            <v-chip :color="selectedExperience.color" variant="tonal" size="small">
              <v-icon icon="mdi-calendar-outline" start size="small"></v-icon>
              {{ t(`views.main.professionalExperience.${selectedExperience.key}.date`) }}
            </v-chip>
            <v-chip :color="selectedExperience.color" variant="tonal" size="small">
              <v-icon :icon="selectedExperience.contractIcon" start size="small"></v-icon>
              {{ selectedExperience.contractType }}
            </v-chip>
          </div>

          <div class="dialog-grid">
            <section class="dialog-panel">
              <h3 class="panel-title d-flex align-center mb-3">
                <v-icon :color="selectedExperience.color" icon="mdi-lightbulb-on-outline" class="mr-2"></v-icon>
                Contexte
              </h3>
              <p class="panel-text">
                {{ t(`views.main.professionalExperience.${selectedExperience.key}.content`) }}
              </p>

              <h3 class="panel-title d-flex align-center mt-6 mb-3">
                <v-icon :color="selectedExperience.color" icon="mdi-checkbox-multiple-marked-circle-outline" class="mr-2"></v-icon>
                {{ t("views.main.professionalExperience.missionsAndAchievements") }}
              </h3>
              <v-list density="compact" bg-color="transparent" class="mission-list">
                <v-list-item
                  v-for="(detail, idx) in getExperienceDetails(selectedExperience.key)"
                  :key="idx"
                  class="px-0 mb-3 pb-2"
                >
                  <template #prepend>
                    <v-icon :color="selectedExperience.color" icon="mdi-arrow-right-circle" size="20" class="mr-3"></v-icon>
                  </template>
                  <v-list-item-title class="text-body-2 mission-text">{{ detail }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </section>

            <section class="dialog-panel dialog-panel--soft">
              <h3 class="panel-title d-flex align-center mb-4">
                <v-icon :color="selectedExperience.color" icon="mdi-code-tags" class="mr-2"></v-icon>
                Stack Technique
              </h3>

              <div class="education-categories-grid mt-4">
                <v-card
                  v-for="category in selectedExperience.technologies"
                  :key="category.category"
                  class="technical-card mb-4"
                  elevation="0"
                >
                  <v-card-text class="pa-4">
                    <div class="technical-card-header mb-4">
                      <div class="technical-title-wrap">
                        <div class="technical-icon" :style="{ background: category.gradient }">
                          <v-icon :icon="category.icon" size="20" color="white"></v-icon>
                        </div>
                        <h4 class="text-subtitle-1 font-weight-bold ma-0">{{ category.category }}</h4>
                      </div>
                    </div>
                    <div class="skills-mini-grid">
                      <v-sheet
                        v-for="tool in category.tools"
                        :key="tool"
                        class="skill-mini-card"
                        rounded="lg"
                        :style="{ borderColor: category.color }"
                      >
                        <v-icon :color="category.color" icon="mdi-check-circle" size="18" class="mr-2"></v-icon>
                        {{ tool }}
                      </v-sheet>
                    </div>
                  </v-card-text>
                </v-card>
              </div>

              <div v-if="selectedExperience.additionalTechnologies && selectedExperience.additionalTechnologies.length > 0" class="mt-6">
                <h4 class="text-subtitle-1 font-weight-bold mb-3 d-flex align-center">
                  Additional Technologies
                </h4>
                <div class="additional-tech">
                  <v-chip
                    v-for="tech in selectedExperience.additionalTechnologies"
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
            </section>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="dialog-actions pa-4 pa-sm-6">
          <v-spacer></v-spacer>
          <v-btn :color="selectedExperience.color" variant="flat" @click="dialog = false" prepend-icon="mdi-close">
            {{ t("views.main.professionalExperience.close") }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<style scoped>
.experience-section {
  background: transparent;
  position: relative;
}

.title-container {
  position: relative;
  z-index: 1;
}

.professional-path {
  position: relative;
  padding-left: 2.75rem;
}

.professional-path::before {
  content: "";
  position: absolute;
  left: 14px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: linear-gradient(180deg, rgba(74, 143, 104, 0.2) 0%, rgba(74, 143, 104, 0.06) 100%);
}

.path-item {
  position: relative;
  margin-bottom: 1.25rem;
  animation: fadeUp 0.55s ease-out backwards;
}

.path-item:last-child {
  margin-bottom: 0;
}

.path-node {
  position: absolute;
  left: -2.75rem;
  top: 1.2rem;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
  box-shadow: 0 6px 16px rgba(15, 29, 20, 0.14);
}

.path-card {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid var(--line);
  border-radius: 14px;
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

.path-company {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.company-logo-wrapper {
  background: var(--surface-muted);
  border-radius: 10px;
  padding: 6px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--line);
}

.exp-company-logo {
  max-height: 40px;
  max-width: 120px;
  object-fit: contain;
}

.path-title {
  color: var(--ink);
}

.path-summary {
  line-height: 1.75;
}

.company-logo-dialog {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.exp-company-logo-dialog {
  max-height: 50px;
  max-width: 100px;
  object-fit: contain;
}

.detailed-dialog {
  border-radius: 14px;
  overflow: hidden;
}

.experience-dialog {
  background: var(--surface);
  box-shadow: var(--shadow-card);
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
  grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
  gap: 1rem;
}

.dialog-panel {
  border: 1px solid var(--line);
  border-radius: 14px;
  background: #fff;
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

.mission-list {
  border-radius: 8px;
}

.mission-list .v-list-item {
  border-radius: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
}

.mission-list .v-list-item:last-child {
  border-bottom: none;
}

.mission-text {
  white-space: normal;
  line-height: 1.65;
  color: var(--ink);
}

.dialog-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}

.education-categories-grid {
  display: flex;
  flex-direction: column;
}

.technical-card {
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--surface);
  box-shadow: var(--shadow-soft);
  transition: transform 0.22s ease, box-shadow 0.22s ease;
}

.technical-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-card);
}

.technical-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.technical-title-wrap {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.technical-icon {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
}

.skills-mini-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 0.65rem;
}

.skill-mini-card {
  border: 1px solid var(--line);
  background: linear-gradient(180deg, #ffffff 0%, #f8fcf8 100%);
  border-radius: 10px;
  min-height: 48px;
  height: auto;
  padding: 0.55rem 0.7rem;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 0.88rem;
  color: var(--ink);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  white-space: normal;
  word-break: break-word;
  overflow-wrap: break-word;
  line-height: 1.25;
}

.skill-mini-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-soft);
}

.additional-tech {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 0.5rem;
}

.additional-tech .v-chip {
  border-radius: 999px;
  background: rgba(245,245,245,0.8);
  color: var(--ink);
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 960px) {
  .professional-path {
    padding-left: 2.25rem;
  }

  .professional-path::before {
    left: 11px;
  }

  .path-node {
    left: -2.25rem;
    width: 26px;
    height: 26px;
    top: 1.35rem;
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

  .skills-mini-grid {
    grid-template-columns: 1fr;
  }
}
</style>