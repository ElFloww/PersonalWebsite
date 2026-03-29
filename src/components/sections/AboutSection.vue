<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import photoProfil from "@/assets/images/photo_profil.png";

const { t } = useI18n();

// 🔁 Mettre à false pour masquer la bannière "en recherche d'emploi"
const seekingJob = false;

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
    <v-row v-if="seekingJob" justify="center" class="mb-6">
      <v-col cols="12" md="10">
        <v-alert
          color="green-darken-2"
          variant="tonal"
          icon="mdi-briefcase-search"
          border="start"
          class="seeking-banner"
        >
          <div class="d-flex align-center justify-space-between flex-wrap ga-2">
            <span class="font-weight-medium">{{
              t("views.main.presentation.seekingJobBanner")
            }}</span>
            <div class="d-flex flex-wrap ga-1">
              <v-chip color="green-darken-2" variant="flat" size="small">
                <v-icon start size="small">mdi-map-marker</v-icon>
                Marseille
              </v-chip>
              <v-chip color="green-darken-2" variant="flat" size="small">
                <v-icon start size="small">mdi-map-marker</v-icon>
                Aix-en-Provence
              </v-chip>
              <v-chip color="green-darken-2" variant="flat" size="small">
                <v-icon start size="small">mdi-map-marker</v-icon>
                Toulon
              </v-chip>
            </div>
          </div>
        </v-alert>
      </v-col>
    </v-row>

    <!-- Titre -->
    <v-row justify="center" class="mb-2">
      <v-col cols="12" class="text-center">
        <h1 class="text-h2 font-weight-bold mb-3 gradient-text">
          {{ t("views.main.presentation.title") }}
        </h1>
        <p class="text-h6 text-medium-emphasis mb-4">
          {{ t("views.main.presentation.subtitle") }}
        </p>
        <v-divider
          class="mx-auto my-4"
          color="green-lighten-1"
          :thickness="4"
          width="100"
          style="border-radius: 4px"
        />
      </v-col>
    </v-row>

    <!-- Ligne 1 : Avatar + Présentation principale -->
    <v-row justify="center" align="start" class="mb-4">
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
        <v-card elevation="6" class="pa-8 glass-card mb-4">
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

            <!-- Approche / Philosophie -->
            <!-- <v-alert
              variant="tonal"
              color="green-lighten-1"
              class="mt-2"
              icon="mdi-lightbulb-on-outline"
              border="start"
            >
              <div class="font-weight-bold mb-1">
                {{ t("views.main.presentation.philosophyTitle") }}
              </div>
              <div style="line-height: 1.75">
                {{ t("views.main.presentation.philosophyText") }}
              </div>
            </v-alert> -->
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Ligne 2 : Valeurs + Objectif CDI Provence -->
    <v-row justify="center" class="mb-4">
      <!-- Valeurs -->
      <v-col cols="12" md="5">
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
      <v-col cols="12" md="5">
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
    <v-row justify="center">
      <v-col cols="12" md="10">
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
  </v-container>
</template>

<style scoped>
.about-section {
  background: white;
  position: relative;
}

.avatar-container {
  position: relative;
  z-index: 1;
}

.profile-avatar {
  box-shadow: 0 8px 32px rgba(100, 200, 100, 0.25);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

/* .profile-avatar:hover {
  transform: scale(1.03);
  box-shadow: 0 12px 40px rgba(100, 200, 100, 0.4);
} */

.seeking-banner {
  border-radius: 12px;
}

.value-item {
  background: rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
}

/* .value-item:hover {
  background: rgba(129, 199, 132, 0.08);
  border-color: rgba(129, 199, 132, 0.3);
} */

.goal-card {
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.passion-card {
  background: rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 0, 0, 0.06);
  transition: all 0.25s ease;
}

/* .passion-card:hover {
  background: rgba(0, 0, 0, 0.04);
  border-color: rgba(0, 0, 0, 0.12);
  transform: translateY(-2px);
} */

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
