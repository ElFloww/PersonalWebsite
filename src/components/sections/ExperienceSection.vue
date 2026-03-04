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
}

const experiences: Experience[] = [
  {
    key: "third",
    color: "green-lighten-1",
    gradient: "linear-gradient(135deg, #81c784 0%, #4caf50 100%)",
    logo: orangeLogo,
    details: [
      "Développement et maintenance d'APIs REST en ASP.NET Core (clean architecture, CQRS)",
      "Intégration de fonctionnalités via Entity Framework Core et SQL Server",
      "Développement front-end avec Vue.js 3 et Angular sur des applications métier internes",
      "Mise en place et maintenance de pipelines CI/CD via Azure DevOps",
      "Rédaction de documentation technique complète (Swagger / OpenAPI)",
      "Participation active aux cérémonies Scrum : daily, sprint review, rétrospective",
      "Revues de code et accompagnement de stagiaires",
    ],
  },
  {
    key: "second",
    color: "blue-lighten-1",
    gradient: "linear-gradient(135deg, #42a5f5 0%, #1e88e5 100%)",
    logo: orangeLogo,
    details: [
      "Développement complet d'une API en clean architecture (ASP.NET Core, C#)",
      "Création d'un backoffice web de gestion interne",
      "Écriture de tests unitaires et d'intégration (xUnit)",
      "Documentation des endpoints avec Swagger",
      "Gestion de version avec Git et Azure DevOps",
      "Revues de code avec l'équipe de consultants",
    ],
  },
  {
    key: "first",
    color: "purple-lighten-1",
    gradient: "linear-gradient(135deg, #ab47bc 0%, #8e24aa 100%)",
    logo: orangeLogo,
    details: [
      "Prise en main de l'écosystème .NET Core en environnement professionnel",
      "Développement d'une API REST en C# — premier projet professionnel",
      "Découverte et application de la clean architecture",
      "Intégration dans une équipe Agile de consultants",
      "Utilisation de Git pour la gestion du code source",
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
            elevation="8"
            class="experience-card"
            @click="showDetails(exp)"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <!-- En-tête coloré -->
            <div
              class="experience-header"
              :style="{ background: exp.gradient }"
            >
              <div v-if="exp.logo" class="company-logo-wrapper mb-3">
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

            <v-card-text class="pa-6">
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
                style="line-height: 1.7"
              >
                {{
                  t(`views.main.professionalExperience.${exp.key}.shortDesc`)
                }}
              </p>

              <!-- Tech tags -->
              <div class="d-flex flex-wrap ga-1 mt-auto">
                <v-chip
                  v-for="tech in t(
                    `views.main.professionalExperience.${exp.key}.tech`,
                  ).split(' · ')"
                  :key="tech"
                  size="x-small"
                  variant="tonal"
                  :color="exp.color"
                  class="tech-chip"
                >
                  {{ tech }}
                </v-chip>
              </div>
            </v-card-text>

            <v-card-actions class="pa-6 pt-0">
              <v-btn
                :color="exp.color"
                variant="tonal"
                append-icon="mdi-arrow-right"
                block
              >
                {{ t("views.main.professionalExperience.learnMore") }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-col>
    </v-row>

    <!-- Dialog pour les détails -->
    <v-dialog v-model="dialog" max-width="700">
      <v-card v-if="selectedExperience">
        <v-card-title
          class="text-h6 pa-6 d-flex align-center ga-4"
          :style="{ background: selectedExperience.gradient, color: 'white' }"
        >
          <div v-if="selectedExperience.logo" class="company-logo-wrapper">
            <img
              :src="selectedExperience.logo"
              :alt="
                t(
                  `views.main.professionalExperience.${selectedExperience.key}.company`,
                )
              "
              class="exp-company-logo"
            />
          </div>
          {{
            t(
              `views.main.professionalExperience.${selectedExperience.key}.title`,
            )
          }}
        </v-card-title>

        <v-card-text class="pa-6">
          <div class="d-flex flex-wrap ga-3 mb-4">
            <v-chip
              :color="selectedExperience.color"
              variant="flat"
              size="small"
            >
              <v-icon icon="mdi-calendar" start size="small"></v-icon>
              {{
                t(
                  `views.main.professionalExperience.${selectedExperience.key}.date`,
                )
              }}
            </v-chip>
            <v-chip color="grey" variant="tonal" size="small">
              <v-icon icon="mdi-office-building" start size="small"></v-icon>
              {{
                t(
                  `views.main.professionalExperience.${selectedExperience.key}.company`,
                )
              }}
            </v-chip>
          </div>

          <p class="text-body-1 mb-5" style="line-height: 1.8">
            {{
              t(
                `views.main.professionalExperience.${selectedExperience.key}.content`,
              )
            }}
          </p>

          <v-divider class="my-4"></v-divider>

          <h3 class="text-subtitle-1 font-weight-bold mb-3">
            <v-icon
              icon="mdi-text-box-check"
              :color="selectedExperience.color"
              class="mr-2"
            ></v-icon>
            {{ t("views.main.professionalExperience.missionsAndAchievements") }}
          </h3>
          <v-list density="compact" bg-color="transparent">
            <v-list-item
              v-for="(detail, idx) in selectedExperience.details"
              :key="idx"
              class="px-1 mb-1"
            >
              <template v-slot:prepend>
                <v-icon
                  :color="selectedExperience.color"
                  icon="mdi-check-circle"
                  size="18"
                  class="mr-2"
                ></v-icon>
              </template>
              <v-list-item-title
                class="text-body-2"
                style="white-space: normal; line-height: 1.6"
                >{{ detail }}</v-list-item-title
              >
            </v-list-item>
          </v-list>

          <v-divider class="my-4"></v-divider>

          <div class="d-flex flex-wrap ga-2">
            <v-chip
              v-for="tech in t(
                `views.main.professionalExperience.${selectedExperience.key}.tech`,
              ).split(' · ')"
              :key="tech"
              :color="selectedExperience.color"
              variant="tonal"
              size="small"
            >
              {{ tech }}
            </v-chip>
          </div>
        </v-card-text>

        <v-card-actions class="pa-6">
          <v-spacer></v-spacer>
          <v-btn
            color="green-lighten-1"
            variant="flat"
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
  background: white;
  position: relative;
}

.title-container {
  position: relative;
  z-index: 1;
}

.experiences-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.experience-card {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: fadeIn 0.6s ease-out backwards;
  border: 2px solid transparent;
  display: flex;
  flex-direction: column;
}

.experience-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(129, 199, 132, 0.25) !important;
  border-color: rgba(129, 199, 132, 0.3);
}

.experience-header {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.tech-chip {
  transition: all 0.2s ease;
}

.company-logo-wrapper {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 8px;
  padding: 4px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.exp-company-logo {
  max-height: 34px;
  max-width: 120px;
  object-fit: contain;
}

@media (max-width: 960px) {
  .experiences-grid {
    grid-template-columns: 1fr;
  }
}
</style>
