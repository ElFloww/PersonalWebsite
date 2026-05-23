<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import photoProfil from "@/assets/images/photo_profil.png";

const { t } = useI18n();

// 🔁 Mettre à false pour masquer la bannière "en recherche d'emploi"
const seekingJob = true;

const birthDate = new Date("2003-01-27");

const age = computed(() => {
  const today = new Date();
  let years = today.getFullYear() - birthDate.getFullYear();
  const hasHadBirthday =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());
  if (!hasHadBirthday) years--;
  return years;
});

const passions = [
  { icon: "mdi-run-fast", key: "sport", color: "orange" },
  { icon: "mdi-controller", key: "videoGames", color: "purple" },
  { icon: "mdi-pot-steam", key: "cooking", color: "red" },
  { icon: "mdi-music-note-eighth", key: "music", color: "pink" },
  // { icon: "mdi-book-open-variant", key: "reading", color: "brown" },
];

const values = [
  {
    icon: "mdi-share-variant",
    key: "knowledgeSharing",
    color: "green-lighten-1",
  },
  {
    icon: "mdi-file-document-check",
    key: "documentation",
    color: "blue-lighten-2",
  },
  { icon: "mdi-magnify-scan", key: "pragmatism", color: "orange-lighten-2" },
  {
    icon: "mdi-refresh-circle",
    key: "continuousImprovement",
    color: "purple-lighten-2",
  },
];
</script>

<template>
  <v-container id="about" fluid class="about-section py-16">
    <!-- Bannière recherche d'emploi -->
    <v-row v-if="seekingJob" justify="center" class="mb-10">
      <v-col cols="12" md="10" lg="10" class="d-flex justify-center">
        <div class="availability-banner d-inline-flex align-center flex-wrap justify-center ga-4 px-6 py-3 rounded-xl glass-card">
          <div class="d-flex align-center ga-3">
            <div class="status-indicator">
              <span class="pulse-dot"></span>
            </div>
            <span class="text-body-1 font-weight-bold" style="color: var(--ink)">
              {{ t("views.main.presentation.seekingJobBanner") }}
            </span>
          </div>
          <v-divider vertical class="mx-1 hidden-sm-and-down" style="height: 24px"></v-divider>
          <div class="d-flex flex-wrap ga-2 justify-center">
            <v-chip color="green-darken-1" variant="tonal" size="small">
              <v-icon start size="small">mdi-map-marker-outline</v-icon>
              Toulon
            </v-chip>
            <v-chip color="green-darken-1" variant="tonal" size="small">
              <v-icon start size="small">mdi-map-marker-outline</v-icon>
              Aix-en-Provence
            </v-chip>
            <v-chip color="green-darken-1" variant="tonal" size="small">
              <v-icon start size="small">mdi-map-marker-outline</v-icon>
              Marseille
            </v-chip>
          </div>
        </div>
      </v-col>
    </v-row>

    <!-- Titre -->
    <v-row justify="center" class="mb-12">
      <v-col cols="12" class="text-center">
        <div class="title-container">
          <v-icon
            icon="mdi-account-circle-outline"
            size="56"
            color="green-lighten-1"
            class="mb-4"
          ></v-icon>
          <h1 class="text-h2 font-weight-bold mb-3">
            {{ t("views.main.presentation.title") }}
          </h1>
          <p class="text-h6 text-grey-darken-1">
            {{ t("views.main.presentation.subtitle") }}
          </p>
          <v-divider
            class="mx-auto my-6"
            color="green-lighten-1"
            :thickness="4"
            width="100"
            style="border-radius: 4px"
          ></v-divider>
        </div>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" md="10" lg="10">
        
        <!-- Ligne 1 : Avatar + Présentation principale -->
        <v-row justify="center" align="start" class="mb-6">
          <!-- Avatar -->
          <v-col cols="12" md="4" class="text-center">
            <div class="avatar-container">
              <v-avatar
                size="260"
                :image="photoProfil"
                class="mb-6 profile-avatar"
              />
              <div class="text-center">
                <h2 class="text-h4 font-weight-bold mb-3">
                  {{ t("views.main.profil.title") }}
                </h2>
                <v-chip
                  color="green-lighten-1"
                  variant="flat"
                  size="large"
                  class="mb-3 d-flex justify-center mx-auto"
                  style="width: fit-content"
                >
                  <v-icon start>mdi-cake-variant</v-icon>
                  {{ age }} {{ t("views.main.profil.yearsOld") }}
                </v-chip>
                <div class="mb-3">
                  <v-chip color="green-lighten-1" variant="outlined" size="large">
                    <v-icon start>mdi-code-tags</v-icon>
                    {{ t("views.main.profil.description") }}
                  </v-chip>
                </div>
                <div>
                  <v-chip color="blue-grey" variant="tonal" size="small">
                    <v-icon start size="small">mdi-map-marker-outline</v-icon>
                    {{ t("views.main.presentation.locationBadge") }}
                  </v-chip>
                </div>
              </div>
            </div>
          </v-col>

          <!-- Paragraphes + Philosophie -->
          <v-col cols="12" md="8">
            <v-card elevation="6" class="pa-8 glass-card h-100">
              <v-card-text class="pa-0">
                <!-- Paragraphe 1 : Qui suis-je -->
                <div class="d-flex align-start ga-3 mb-5">
                  <v-icon
                    icon="mdi-account-circle-outline"
                    color="green-lighten-1"
                    size="24"
                    class="mt-1 flex-shrink-0"
                  />
                  <div class="d-flex flex-column ga-2">
                    <p
                      class="text-body-1 text-justify ma-0"
                      style="line-height: 1.85"
                    >
                      {{ t("views.main.presentation.firstParagraph1") }}
                    </p>
                    <p
                      class="text-body-1 text-justify ma-0"
                      style="line-height: 1.85"
                    >
                      {{ t("views.main.presentation.firstParagraph2") }}
                    </p>
                    <p
                      class="text-body-1 text-justify ma-0"
                      style="line-height: 1.85"
                    >
                      {{ t("views.main.presentation.firstParagraph3") }}
                    </p>
                  </div>
                </div>
                <!-- Paragraphe 2 : Ce que je fais -->
                <div class="d-flex align-start ga-3 mb-5">
                  <v-icon
                    icon="mdi-laptop"
                    color="green-lighten-1"
                    size="24"
                    class="mt-1 flex-shrink-0"
                  />
                  <div class="d-flex flex-column ga-2">
                    <p
                      class="text-body-1 text-justify ma-0"
                      style="line-height: 1.85"
                    >
                      {{ t("views.main.presentation.secondParagraph") }}
                    </p>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- Ligne 2 : Valeurs + Objectif CDI Provence -->
        <v-row class="mb-6" align="stretch">
          <!-- Valeurs -->
          <v-col cols="12" md="6">
            <v-card elevation="4" class="pa-6 glass-card h-100">
              <h3 class="text-h6 font-weight-bold mb-4 text-green-lighten-1">
                <v-icon icon="mdi-star-circle-outline" class="mr-2" />
                {{ t("views.main.presentation.valuesTitle") }}
              </h3>
              <div class="d-flex flex-column ga-3">
                <div
                  v-for="value in values"
                  :key="value.key"
                  class="value-item d-flex align-start ga-3 pa-3 rounded-lg"
                >
                  <v-icon
                    :icon="value.icon"
                    :color="value.color"
                    size="20"
                    class="mt-1 flex-shrink-0"
                  />
                  <span class="text-body-2" style="line-height: 1.6">
                    {{ t(`views.main.presentation.values.${value.key}`) }}
                  </span>
                </div>
              </div>
            </v-card>
          </v-col>

          <!-- Objectif CDI -->
          <v-col cols="12" md="6">
            <v-card
              elevation="4"
              class="pa-6 goal-card h-100"
              color="green-darken-3"
            >
              <h3 class="text-h6 font-weight-bold mb-4" style="color: white">
                <v-icon icon="mdi-map-marker-star-outline" class="mr-2" />
                {{ t("views.main.presentation.goalTitle") }}
              </h3>
              <p
                class="text-body-1 mb-5 text-justify"
                style="line-height: 1.85; color: rgba(255, 255, 255, 0.92)"
              >
                {{ t("views.main.presentation.goalText") }}
              </p>
              <v-chip color="white" variant="outlined" size="large">
                <v-icon start>mdi-briefcase-search-outline</v-icon>
                {{ t("views.main.presentation.goalCTA") }}
              </v-chip>
            </v-card>
          </v-col>
        </v-row>

        <!-- Ligne 3 : Passions -->
        <v-row>
          <v-col cols="12">
            <v-card elevation="4" class="pa-6 glass-card">
              <h3 class="text-h6 font-weight-bold mb-5 text-green-lighten-1">
                <v-icon icon="mdi-heart-outline" class="mr-2" />
                {{ t("views.main.presentation.interestsTitle") }}
              </h3>
              <v-row>
                <v-col
                  v-for="passion in passions"
                  :key="passion.key"
                  cols="12"
                  sm="6"
                  class="pa-2"
                >
                  <div
                    class="passion-card d-flex align-start ga-4 pa-4 rounded-xl h-100"
                  >
                    <v-sheet
                      :color="`${passion.color}-lighten-4`"
                      class="passion-icon-bg d-flex align-center justify-center flex-shrink-0 rounded-lg"
                      width="44"
                      height="44"
                    >
                      <v-icon
                        :icon="passion.icon"
                        :color="passion.color"
                        size="22"
                      />
                    </v-sheet>
                    <div>
                      <div class="text-body-1 font-weight-bold mb-1">
                        {{
                          t(`views.main.presentation.passions.${passion.key}.title`)
                        }}
                      </div>
                      <div
                        class="text-body-2 text-medium-emphasis"
                        style="line-height: 1.65"
                      >
                        {{
                          t(
                            `views.main.presentation.passions.${passion.key}.description`,
                          )
                        }}
                      </div>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.about-section {
  background: transparent;
  position: relative;
}

.avatar-container {
  position: relative;
  z-index: 1;
}

.profile-avatar {
  box-shadow: var(--shadow-card);
  transition: transform 0.28s ease, box-shadow 0.28s ease;
  border-radius: 18px;
}

.availability-banner {
  border: 1px solid var(--line);
}

.status-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pulse-dot {
  width: 12px;
  height: 12px;
  background-color: #4CAF50;
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.4);
  animation: pulse-ring 2s infinite;
}

@keyframes pulse-ring {
  0% {
    box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(76, 175, 80, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(76, 175, 80, 0);
  }
}

.value-item {
  background: var(--surface-muted);
  border: 1px solid var(--line);
  transition: all 0.16s ease;
}

.goal-card {
  background: linear-gradient(180deg, var(--accent) 0%, var(--accent-strong) 100%);
  color: white;
  border: none;
}

.passion-card {
  background: var(--surface-muted);
  border: 1px solid var(--line);
  transition: all 0.22s ease;
}

.passion-icon-bg {
  flex-shrink: 0;
}

@media (max-width: 960px) {
  .v-avatar {
    width: 200px !important;
    height: 200px !important;
  }
}
</style>
