<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import upjvLogo from "@/assets/images/logo_upjv.png";
import inssetLogo from "@/assets/images/logo_insset.png";

const { t } = useI18n();

interface Education {
  key: string;
  icon: string;
  color: string;
  gradient: string;
  logo?: string;
  highlights: string[];
  modules: string[];
}

const educations: Education[] = [
  {
    key: "second",
    icon: "mdi-cloud",
    color: "green-lighten-1",
    gradient: "linear-gradient(135deg, #81c784 0%, #66bb6a 100%)",
    logo: inssetLogo,
    highlights: [
      "Spécialisation Cloud & Microservices",
      "Architecture & Infrastructure pratiques",
      "DevOps & Stratégies déploiement",
      "Développement mobile & SaaS",
      "Réalisé en alternance Orange Business",
    ],
    modules: [
      "Infrastructures Cloud (IaaS/PaaS) : déploiement et administration sur Azure, AWS et Google Cloud",
      "Architecture réseau Cloud : design, optimisation et bonnes pratiques sur GCP et AWS",
      "Infrastructure as Code : Terraform, ARM Templates, virtualisation et provisioning automatisé",
      "Containerisation & orchestration : Docker, Kubernetes (Swarm, K8s) et patterns Cloud-native",
      "DevOps & Culture : pipelines CI/CD complexes, Azure DevOps, GitLab CI, déploiements automatisés et monitoring",
      "Architecture microservices : conception d'architectures distribuées et événementielles",
      "Internet of Things (IoT) : connectivité, protocoles et intégration des appareils au Cloud",
      "Virtualisation : hyperviseurs, machines virtuelles et abstraction des ressources",
      "CI/CD avancés : pipelines complexes, Azure DevOps, GitLab CI et déploiements automatisés",
      "Développement mobile : applications cross-platform et natives (iOS, Android) connectées au Cloud",
      "Sécurité du Cloud : audit des environnements, gestion des secrets, compliance",
      "Big Data & Cloud Data Management : gestion des données distribuées",
      "Intelligence Artificielle intégrée : intégration services IA à l'échelle Cloud",
      "Projet de fin d'année Tuuuur : jeu de culture générale compétitif (développement, architecture, gameplay)",
    ],
  },
  {
    key: "first",
    icon: "mdi-laptop",
    color: "blue-lighten-1",
    gradient: "linear-gradient(135deg, #42a5f5 0%, #1e88e5 100%)",
    logo: upjvLogo,
    highlights: [
      "Parcours : Réalisation d'applications",
      "3ème année en alternance Orange Business",
      "Élu représentant étudiant",
      "Fondations solides & architectures",
      "Cycle de vie logiciel complet",
    ],
    modules: [
      "Algorithmique & structures de données : maîtrise rigoureuse des fondations",
      "Programmation orientée objet : Java, Python, C#, C++, PHP avec applications réelles",
      "Conception logicielle : UML, MCD, design patterns et bonnes pratiques architecture",
      "Bases de données relationnelles : SQL Server, PostgreSQL et transactions",
      "Bases de données NoSQL : concepts et implémentations modernes",
      "Développement web fullstack : HTML, CSS, JavaScript, PHP et frameworks",
      "Développement logiciel lourd : applications desktop et systèmes",
      "Qualité logicielle : tests unitaires, tests d'intégration, couverture de code",
      "Gestion de projets Agile : Scrum, sprints et méthodologies itératives",
      "Réseaux & systèmes : TCP/IP, administration Linux, bases d'infrastructure",
      "Stage alternance Orange Business : immersion professionnelle et mise en pratique",
      "Engagement étudiant : représentant étudiant au Conseil de l'IUT, leadership et défense des intérêts",
    ],
  },
];

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
          <h1 class="text-h2 font-weight-bold mb-3">
            {{ t("views.main.education.sectionTitle") }}
          </h1>
          <p class="text-h6 text-grey-darken-1">
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
      <v-col cols="12" lg="10">
        <div class="education-grid">
          <v-card
            v-for="(edu, index) in educations"
            :key="edu.key"
            elevation="8"
            class="education-card"
            @click="showDetails(edu)"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <!-- En-tête -->
            <div class="education-header" :style="{ background: edu.gradient }">
              <v-icon
                :icon="edu.icon"
                size="40"
                color="white"
                class="mb-2"
              ></v-icon>
              <v-chip
                color="rgba(255,255,255,0.25)"
                variant="flat"
                size="small"
                class="text-white"
              >
                <v-icon icon="mdi-calendar" start size="small"></v-icon>
                {{ t(`views.main.education.${edu.key}.date`) }}
              </v-chip>
              <div v-if="edu.logo" class="mt-2">
                <img
                  :src="edu.logo"
                  :alt="t(`views.main.education.${edu.key}.school`)"
                  class="edu-school-logo"
                />
              </div>
            </div>

            <v-card-text class="pa-6">
              <h2
                class="text-h6 font-weight-bold mb-1"
                :style="{ color: edu.key === 'second' ? '#66bb6a' : '#42a5f5' }"
              >
                {{ t(`views.main.education.${edu.key}.title`) }}
              </h2>

              <div class="d-flex align-center mb-3">
                <v-icon
                  icon="mdi-map-marker"
                  size="16"
                  class="mr-1 text-medium-emphasis"
                ></v-icon>
                <span class="text-body-2 text-medium-emphasis">
                  {{ t(`views.main.education.${edu.key}.school`) }}
                </span>
              </div>

              <!-- Parcours badge (BUT uniquement) -->
              <v-chip
                v-if="edu.key === 'first'"
                :color="edu.color"
                variant="tonal"
                size="small"
                class="mb-4"
              >
                <v-icon start size="14">mdi-tag</v-icon>
                {{ t("views.main.education.first.parcours") }}
              </v-chip>

              <!-- Résumé principal -->
              <p
                class="text-body-2 text-medium-emphasis mb-4"
                style="line-height: 1.7"
              >
                {{
                  t(`views.main.education.${edu.key}.content1`) ||
                  t(`views.main.education.${edu.key}.content`)
                }}
              </p>

              <!-- Points clés -->
              <div class="d-flex flex-wrap ga-2">
                <v-chip
                  v-for="highlight in edu.highlights"
                  :key="highlight"
                  :color="edu.color"
                  variant="outlined"
                  size="x-small"
                >
                  {{ highlight }}
                </v-chip>
              </div>
            </v-card-text>

            <v-card-actions class="pa-6 pt-0">
              <v-btn
                :color="edu.color"
                variant="tonal"
                append-icon="mdi-arrow-right"
                block
              >
                {{ t("views.main.education.viewProgram") }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-col>
    </v-row>

    <!-- Dialog pour les détails -->
    <v-dialog v-model="dialog" max-width="720">
      <v-card v-if="selectedEducation">
        <v-card-title
          class="text-h6 pa-6"
          :style="{ background: selectedEducation.gradient, color: 'white' }"
        >
          <v-icon
            :icon="selectedEducation.icon"
            class="mr-3"
            color="white"
          ></v-icon>
          {{ t(`views.main.education.${selectedEducation.key}.title`) }}
        </v-card-title>

        <v-card-text class="pa-6">
          <div class="d-flex flex-wrap ga-2 mb-4">
            <v-chip
              :color="selectedEducation.color"
              variant="flat"
              size="small"
            >
              <v-icon icon="mdi-calendar" start size="small"></v-icon>
              {{ t(`views.main.education.${selectedEducation.key}.date`) }}
            </v-chip>
            <v-chip color="grey" variant="tonal" size="small">
              <v-icon icon="mdi-map-marker" start size="small"></v-icon>
              {{ t(`views.main.education.${selectedEducation.key}.school`) }}
            </v-chip>
          </div>

          <!-- Contenu descriptif -->
          <div v-if="selectedEducation.key === 'first'" class="mb-4">
            <p class="text-body-2 mb-3" style="line-height: 1.8">
              {{ t("views.main.education.first.content1") }}
            </p>
            <p class="text-body-2 mb-3" style="line-height: 1.8">
              {{ t("views.main.education.first.content2") }}
            </p>
            <p class="text-body-2" style="line-height: 1.8">
              {{ t("views.main.education.first.content3") }}
            </p>
          </div>
          <div v-else class="mb-4">
            <p class="text-body-2 mb-3" style="line-height: 1.8">
              {{ t("views.main.education.second.content1") }}
            </p>
            <p class="text-body-2 mb-3" style="line-height: 1.8">
              {{ t("views.main.education.second.content2") }}
            </p>
            <p class="text-body-2" style="line-height: 1.8">
              {{ t("views.main.education.second.content3") }}
            </p>
          </div>

          <v-divider class="my-4"></v-divider>

          <h3 class="text-subtitle-1 font-weight-bold mb-3">
            <v-icon
              icon="mdi-book-open-page-variant"
              :color="selectedEducation.color"
              class="mr-2"
            ></v-icon>
            {{ t("views.main.education.modulesAndSkills") }}
          </h3>
          <v-list density="compact" bg-color="transparent">
            <v-list-item
              v-for="(module, idx) in selectedEducation.modules"
              :key="idx"
              class="px-1 mb-1"
            >
              <template v-slot:prepend>
                <v-icon
                  :color="selectedEducation.color"
                  icon="mdi-check-circle"
                  size="18"
                  class="mr-2"
                ></v-icon>
              </template>
              <v-list-item-title
                class="text-body-2"
                style="white-space: normal; line-height: 1.6"
                >{{ module }}</v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-card-text>

        <v-card-actions class="pa-6">
          <v-spacer></v-spacer>
          <v-btn
            :color="selectedEducation.color"
            variant="flat"
            @click="dialog = false"
            prepend-icon="mdi-close"
          >
            {{ t("views.main.education.close") }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<style scoped>
.education-section {
  background: white;
  position: relative;
}

.title-container {
  position: relative;
  z-index: 1;
}

.education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.education-card {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  animation: fadeIn 0.6s ease-out backwards;
  border: 2px solid transparent;
  display: flex;
  flex-direction: column;
}


.education-header {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 130px;
  color: white;
}

.school-logo-wrapper {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 8px;
  padding: 5px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.edu-school-logo {
  max-height: 40px;
  max-width: 120px;
  object-fit: contain;
}

@media (max-width: 960px) {
  .education-grid {
    grid-template-columns: 1fr;
  }
}
</style>
