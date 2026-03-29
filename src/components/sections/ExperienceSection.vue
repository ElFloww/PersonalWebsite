<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import orangeLogo from "@/assets/images/logo_orange.svg";

const { t } = useI18n();

interface Experience {
  key: string;
  color: string;
  gradient: string;
  logo?: string;
  details: string[];
  contractType: "Stage" | "CDD" | "Alternance";
  contractIcon: string;
  technologies: {
    category: string;
    icon: string;
    tools: string[];
  }[];
}

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
        category: "Langages",
        icon: "mdi-code-tags",
        tools: ["C#", "TypeScript", "JavaScript"],
      },
      {
        category: "Backend",
        icon: "mdi-server",
        tools: ["ASP.NET Core (.NET 6/.NET 8)", "Entity Framework Core", "MediatR", "CQRS"],
      },
      {
        category: "Frontend",
        icon: "mdi-palette",
        tools: ["Vue.js 3", "Angular", "Vuetify"],
      },
      {
        category: "Bases de données",
        icon: "mdi-database",
        tools: ["SQL Server", "Entity Framework Core"],
      },
      {
        category: "APIs & Intégrations",
        icon: "mdi-api",
        tools: ["REST", "SOAP", "Whisper IA (OpenAI)"],
      },
      {
        category: "DevOps",
        icon: "mdi-docker",
        tools: ["Docker", "Azure DevOps", "CI/CD", "Git"],
      },
      {
        category: "Méthodologie",
        icon: "mdi-chart-gantt",
        tools: ["Agile", "Scrum", "Revues de code"],
      },
    ],
    details: [
      "Finalisation et déploiement d'applications (migration vers .NET 8)",
      "Conception complète d'applications métier : modélisation de bases de données, spécifications techniques, développement complet (back-end .NET 8, front Angular/Vue.js) et intégration d'APIs",
      "Création d'outils innovants avec intégration d'intelligence artificielle (OpenAI Whisper)",
      "Modernisation d'applications legacy : refonte d'architecture, réécriture avec technologies modernes, modules d'import/export Excel et logiques complexes",
      "Maintenance évolutive et refactoring de code sur applications critiques",
      "Participation active aux rituels Agile (Daily, Weekly, revues de code)",
      "Mise en place et maintenance de pipelines CI/CD via Azure DevOps",
      "Accompagnement et mentorat d'autres développeurs",
    ],
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
        category: "Langages",
        icon: "mdi-code-tags",
        tools: ["C#"],
      },
      {
        category: "Backend",
        icon: "mdi-server",
        tools: ["ASP.NET Core (.NET 6)", "Entity Framework Core", "Clean Architecture"],
      },
      {
        category: "Tests & Qualité",
        icon: "mdi-check-circle",
        tools: ["xUnit", "FluentValidation", "MediatR"],
      },
      {
        category: "Bases de données",
        icon: "mdi-database",
        tools: ["SQL Server"],
      },
      {
        category: "Documentation",
        icon: "mdi-file-document",
        tools: ["Swagger / OpenAPI"],
      },
      {
        category: "DevOps",
        icon: "mdi-docker",
        tools: ["Git", "Azure DevOps"],
      },
    ],
    details: [
      "Développement d'API en Clean Architecture avec technologies modernes (ASP.NET Core .NET 6, C#, MediatR)",
      "Assurance qualité logicielle : tests unitaires et d'intégration (xUnit) avec objectif de 80% de couverture, réduction du code dupliqué et élimination proactive des code smells",
      "Documentation technique complète avec Swagger / OpenAPI",
      "Gestion de version et pipelines CI/CD via Git et Azure DevOps",
      "Revues de code actives avec l'équipe pour améliorer la maintenabilité",
      "Développement du backoffice web de gestion",
    ],
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
        category: "Langages",
        icon: "mdi-code-tags",
        tools: ["C#"],
      },
      {
        category: "Backend",
        icon: "mdi-server",
        tools: ["ASP.NET Core (.NET 6)", "Entity Framework Core", "Clean Architecture"],
      },
      {
        category: "Frontend",
        icon: "mdi-palette",
        tools: ["Vue.js", "Vuetify", "AngularJS"],
      },
      {
        category: "Bases de données",
        icon: "mdi-database",
        tools: ["SQL Server"],
      },
      {
        category: "Architecture",
        icon: "mdi-blueprint",
        tools: ["Clean Architecture", "Injection de dépendances", "AutoMapper"],
      },
      {
        category: "Gestion de version",
        icon: "mdi-git",
        tools: ["Git"],
      },
    ],
    details: [
      "Initialisation d'une application d'optimisation de l'internationalisation. Développement complet d'une API REST (.NET 6) et du backoffice en Vue.js (Vuetify)",
      "Montée en compétences en bonnes pratiques d'architecture (Clean Architecture) et industrialisation du code (Git, Pipelines, Revues de code)",
      "Apprentissage de l'écosystème .NET Core et maîtrise de la programmation orientée objet",
      "Utilisation de patterns modernes et intégration dans une équipe Agile",
    ],
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
      <v-col cols="12" lg="10">
        <div class="experiences-grid">
          <v-card
            v-for="(exp, index) in experiences"
            :key="exp.key"
            elevation="6"
            class="experience-card"
            @click="showDetails(exp)"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <!-- Badge de type contrat -->
            <div class="contract-badge">
              <v-icon :icon="exp.contractIcon" size="20" class="mr-1"></v-icon>
              <span>{{ exp.contractType }}</span>
            </div>

            <!-- En-tête coloré -->
            <div
              class="experience-header"
              :style="{ background: exp.gradient }"
            >
              <div v-if="exp.logo" class=" mb-3 bg-transparent">
                <img
                  :src="exp.logo"
                  :alt="
                    t(`views.main.professionalExperience.${exp.key}.company`)
                  "
                  class="exp-company-logo"
                />
              </div>
              <v-chip
                color="rgba(255,255,255,0.25)"
                variant="flat"
                size="small"
                class="text-white"
              >
                <v-icon icon="mdi-calendar" start size="small"></v-icon>
                {{ t(`views.main.professionalExperience.${exp.key}.date`) }}
              </v-chip>
            </div>

            <v-card-text class="pa-6 d-flex flex-column" style="flex-grow: 1">
              <h2
                class="text-h6 font-weight-bold mb-1"
                :style="{
                  color:
                    exp.color === 'green-lighten-1' ? '#66bb6a' : exp.color,
                }"
              >
                {{ t(`views.main.professionalExperience.${exp.key}.title`) }}
              </h2>

              <div class="d-flex align-center mb-3">
                <v-icon
                  icon="mdi-office-building"
                  size="16"
                  class="mr-1 text-medium-emphasis"
                ></v-icon>
                <span class="text-body-2 text-medium-emphasis">
                  {{
                    t(`views.main.professionalExperience.${exp.key}.company`)
                  }}
                </span>
              </div>

              <p
                class="text-body-2 text-medium-emphasis mb-4"
                style="line-height: 1.7; flex-grow: 1"
              >
                {{
                  t(`views.main.professionalExperience.${exp.key}.shortDesc`)
                }}
              </p>

              <!-- Tech tags -->
              <div class="d-flex flex-wrap ga-1">
                <v-chip
                  v-for="tech in t(
                    `views.main.professionalExperience.${exp.key}.tech`,
                  ).split(' · ').slice(0, 4)"
                  :key="tech"
                  size="x-small"
                  variant="tonal"
                  :color="exp.color"
                  class="tech-chip"
                >
                  {{ tech }}
                </v-chip>
                <v-chip
                  v-if="t(`views.main.professionalExperience.${exp.key}.tech`).split(' · ').length > 4"
                  size="x-small"
                  variant="tonal"
                  :color="exp.color"
                  class="tech-chip"
                >
                  +{{ t(`views.main.professionalExperience.${exp.key}.tech`).split(' · ').length - 4 }}
                </v-chip>
              </div>
            </v-card-text>

            <v-card-actions class="pa-6 pt-2 d-flex justify-end">
              <v-btn
                :color="exp.color"
                variant="tonal"
                size="small"
                append-icon="mdi-arrow-right"
                class="explore-btn"
              >
                {{ t("views.main.professionalExperience.learnMore") }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-col>
    </v-row>

    <!-- Dialog pour les détails -->
    <v-dialog v-model="dialog" max-width="850">
      <v-card v-if="selectedExperience" class="detailed-dialog">
        <!-- Header gradient -->
        <div
          class="dialog-header"
          :style="{ background: selectedExperience.gradient }"
        >
          <v-row align="center" no-gutters class="pa-6">
            <v-col cols="2" md="1" v-if="selectedExperience.logo" class="text-center">
              <div class="company-logo-dialog">
                <img
                  :src="selectedExperience.logo"
                  :alt="
                    t(
                      `views.main.professionalExperience.${selectedExperience.key}.company`,
                    )
                  "
                  class="exp-company-logo-dialog"
                />
              </div>
            </v-col>
            <v-col :cols="selectedExperience.logo ? 10 : 12" :md="selectedExperience.logo ? 11 : 12">
              <div class="text-white">
                <h2 class="text-h5 font-weight-bold mb-1">
                  {{
                    t(
                      `views.main.professionalExperience.${selectedExperience.key}.title`,
                    )
                  }}
                </h2>
                <p class="text-subtitle-2 mb-0 opacity-90">
                  {{
                    t(
                      `views.main.professionalExperience.${selectedExperience.key}.company`,
                    )
                  }}
                </p>
              </div>
            </v-col>
          </v-row>
        </div>

        <v-card-text class="pa-6">
          <!-- Meta infos -->
          <div class="d-flex flex-wrap ga-2 mb-6">
            <v-chip
              :color="selectedExperience.color"
              variant="flat"
              size="large"
            >
              <v-icon icon="mdi-calendar-outline" start></v-icon>
              {{
                t(
                  `views.main.professionalExperience.${selectedExperience.key}.date`,
                )
              }}
            </v-chip>
            <v-chip
              :color="selectedExperience.color"
              variant="flat"
              size="large"
            >
              <v-icon :icon="selectedExperience.contractIcon" start></v-icon>
              {{ selectedExperience.contractType }}
            </v-chip>
          </div>

          <!-- Contexte -->
          <div class="section-block">
            <h3 class="text-subtitle-1 font-weight-bold mb-3 d-flex align-center">
              <v-icon
                :color="selectedExperience.color"
                icon="mdi-lightbulb-on-outline"
                class="mr-2"
              ></v-icon>
              Contexte
            </h3>
            <p class="text-body-2" style="line-height: 1.8; color: #555">
              {{
                t(
                  `views.main.professionalExperience.${selectedExperience.key}.content`,
                )
              }}
            </p>
          </div>

          <!-- Missions & Réalisations -->
          <div class="section-block mt-6">
            <h3 class="text-subtitle-1 font-weight-bold mb-4 d-flex align-center">
              <v-icon
                :color="selectedExperience.color"
                icon="mdi-checkbox-multiple-marked-circle-outline"
                class="mr-2"
              ></v-icon>
              {{ t("views.main.professionalExperience.missionsAndAchievements") }}
            </h3>
            <v-list density="compact" bg-color="transparent" class="mission-list">
              <v-list-item
                v-for="(detail, idx) in selectedExperience.details"
                :key="idx"
                class="px-0 mb-3 pb-2"
              >
                <template v-slot:prepend>
                  <v-icon
                    :color="selectedExperience.color"
                    icon="mdi-arrow-right-circle"
                    size="20"
                    class="mr-3"
                  ></v-icon>
                </template>
                <v-list-item-title
                  class="text-body-2"
                  style="white-space: normal; line-height: 1.6; color: #333"
                  >{{ detail }}</v-list-item-title
                >
              </v-list-item>
            </v-list>
          </div>

          <!-- Technologies -->
          <div class="section-block mt-6">
            <h3 class="text-subtitle-1 font-weight-bold mb-6 d-flex align-center">
              <v-icon
                :color="selectedExperience.color"
                icon="mdi-code-tags"
                class="mr-2"
              ></v-icon>
              Stack Technique
            </h3>
            
            <!-- Technologies by category -->
            <div class="technologies-grid">
              <div
                v-for="(techCategory, idx) in selectedExperience.technologies"
                :key="idx"
                class="tech-category"
              >
                <div class="category-header">
                  <v-icon
                    :color="selectedExperience.color"
                    :icon="techCategory.icon"
                    size="20"
                    class="mr-2"
                  ></v-icon>
                  <span class="category-title font-weight-bold">
                    {{ techCategory.category }}
                  </span>
                </div>
                <div class="tools-list">
                  <span
                    v-for="(tool, toolIndex) in techCategory.tools"
                    :key="tool"
                    class="tool-item"
                  >
                    {{ tool }}<span v-if="toolIndex < techCategory.tools.length - 1" class="separator">·</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="pa-6 d-flex justify-end">
          <v-btn
            :color="selectedExperience.color"
            variant="elevated"
            @click="dialog = false"
            prepend-icon="mdi-close"
          >
            {{ t("views.main.professionalExperience.close") }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<style scoped>
.experience-section {
  background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%);
  position: relative;
}

.title-container {
  position: relative;
  z-index: 1;
}

.experiences-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2rem;
}

.experience-card {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  animation: fadeIn 0.6s ease-out backwards;
  border: none;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.experience-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, transparent, currentColor, transparent);
}

.contract-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(255, 255, 255, 0.95);
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
  z-index: 10;
  color: #333;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  animation: slideDown 0.5s ease-out;
}

.experience-header {
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 140px;
  position: relative;
  overflow: hidden;
}

.experience-header::after {
  content: '';
  position: absolute;
  bottom: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  animation: pulse-glow 3s ease-in-out infinite;
}

.experience-header > * {
  position: relative;
  z-index: 1;
}

.company-logo-wrapper {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.exp-company-logo {
  max-height: 40px;
  max-width: 120px;
  object-fit: contain;
}

.company-logo-dialog {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
}

.exp-company-logo-dialog {
  max-height: 50px;
  max-width: 100px;
  object-fit: contain;
  filter: brightness(1.2);
}

/* Dialog Styles */
.detailed-dialog {
  border-radius: 16px;
  overflow: hidden;
}

.dialog-header {
  position: relative;
  overflow: hidden;
}

.dialog-header::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  animation: pulse-glow 4s ease-in-out infinite;
}

.dialog-header > * {
  position: relative;
  z-index: 2;
}

.section-block {
  background: linear-gradient(135deg, rgba(129, 199, 132, 0.03) 0%, rgba(66, 165, 245, 0.03) 100%);
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid rgba(129, 199, 132, 0.3);
  transition: all 0.3s ease;
}

.mission-list {
  border-radius: 8px;
}

.mission-list .v-list-item {
  border-radius: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.mission-list .v-list-item:last-child {
  border-bottom: none;
}

/* Technologies Grid */
.technologies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  animation: fadeIn 0.6s ease-out;
}

.tech-category {
  background: rgba(255, 255, 255, 0.5);
  padding: 1.25rem;
  border-radius: 12px;
  border: 1px solid rgba(129, 199, 132, 0.1);
  backdrop-filter: blur(4px);
}

.category-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid rgba(129, 199, 132, 0.2);
}

.category-title {
  color: #333;
  font-size: 14px;
  letter-spacing: 0.5px;
}

.tools-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  line-height: 1.8;
  font-size: 14px;
  color: #555;
}

.separator {
  margin: 0 0.5rem;
  color: #999;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse-glow {
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

/* Responsive Design */
@media (max-width: 960px) {
  .experiences-grid {
    grid-template-columns: 1fr;
  }
  
  .tech-chip {
    font-size: 11px;
  }
}

@media (max-width: 600px) {
  .experience-header {
    min-height: 110px;
    padding: 1.5rem 1rem;
  }
  
  .contract-badge {
    font-size: 11px;
    padding: 4px 10px;
  }
  
  .section-block {
    padding: 1rem;
  }
}
</style>
