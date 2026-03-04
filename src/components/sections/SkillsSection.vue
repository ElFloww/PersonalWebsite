<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

interface Skill {
  name: string;
  level: "primary" | "secondary" | "tertiary";
  icon?: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  gradient: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "backend",
    icon: "mdi-server",
    color: "green-lighten-1",
    gradient: "linear-gradient(135deg, #81c784 0%, #66bb6a 100%)",
    skills: [
      { name: "ASP.NET Core", level: "primary", icon: "mdi-dot-net" },
      { name: "C#", level: "primary", icon: "mdi-language-csharp" },
      { name: "Clean Architecture", level: "primary" },
      { name: "Entity Framework", level: "primary", icon: "mdi-database-cog" },
      { name: "Node.js", level: "secondary", icon: "mdi-nodejs" },
      { name: "Express", level: "secondary" },
      { name: "REST API", level: "primary" },
    ],
  },
  {
    title: "frontend",
    icon: "mdi-monitor",
    color: "blue-lighten-1",
    gradient: "linear-gradient(135deg, #42a5f5 0%, #1e88e5 100%)",
    skills: [
      { name: "Vue.js 3", level: "primary", icon: "mdi-vuejs" },
      { name: "TypeScript", level: "primary", icon: "mdi-language-typescript" },
      { name: "Angular", level: "primary", icon: "mdi-angular" },
      { name: "Vuetify", level: "primary" },
      { name: "HTML / CSS", level: "primary", icon: "mdi-language-html5" },
      { name: "JavaScript", level: "primary", icon: "mdi-language-javascript" },
      { name: "React", level: "tertiary", icon: "mdi-react" },
    ],
  },
  {
    title: "languages",
    icon: "mdi-xml",
    color: "purple-lighten-1",
    gradient: "linear-gradient(135deg, #ab47bc 0%, #8e24aa 100%)",
    skills: [
      { name: "C# / .NET", level: "primary", icon: "mdi-language-csharp" },
      { name: "TypeScript", level: "primary", icon: "mdi-language-typescript" },
      { name: "Python", level: "secondary", icon: "mdi-language-python" },
      { name: "Java", level: "secondary", icon: "mdi-language-java" },
      { name: "C / C++", level: "secondary", icon: "mdi-language-cpp" },
      { name: "PHP", level: "tertiary", icon: "mdi-language-php" },
    ],
  },
  {
    title: "database",
    icon: "mdi-database",
    color: "orange-lighten-1",
    gradient: "linear-gradient(135deg, #ff9800 0%, #f57c00 100%)",
    skills: [
      { name: "SQL Server", level: "primary" },
      { name: "PostgreSQL", level: "primary", icon: "mdi-database" },
      { name: "MySQL", level: "secondary", icon: "mdi-database" },
      { name: "MongoDB", level: "secondary", icon: "mdi-database" },
      { name: "Redis", level: "tertiary", icon: "mdi-database" },
    ],
  },
  {
    title: "tools",
    icon: "mdi-tools",
    color: "teal-lighten-1",
    gradient: "linear-gradient(135deg, #26a69a 0%, #00897b 100%)",
    skills: [
      { name: "Git", level: "primary", icon: "mdi-git" },
      {
        name: "Azure DevOps",
        level: "primary",
        icon: "mdi-microsoft-azure-devops",
      },
      { name: "Docker", level: "secondary", icon: "mdi-docker" },
      { name: "Swagger / OpenAPI", level: "primary" },
      { name: "CI/CD", level: "secondary" },
      { name: "Kubernetes", level: "tertiary", icon: "mdi-kubernetes" },
      { name: "Scrum / Agile", level: "secondary" },
    ],
  },
  {
    title: "cloud",
    icon: "mdi-cloud",
    color: "indigo-lighten-1",
    gradient: "linear-gradient(135deg, #5c6bc0 0%, #3949ab 100%)",
    skills: [
      {
        name: "Microsoft Azure",
        level: "primary",
        icon: "mdi-microsoft-azure",
      },
      { name: "AWS", level: "tertiary", icon: "mdi-aws" },
      { name: "GCP", level: "tertiary" },
      { name: "Microservices", level: "secondary" },
      { name: "Containerisation", level: "secondary" },
    ],
  },
];

const chipVariant = (level: string): "flat" | "tonal" | "outlined" => {
  if (level === "primary") return "flat";
  if (level === "secondary") return "tonal";
  return "outlined";
};

const chipSize = (level: string): "default" | "small" => {
  return level === "tertiary" ? "small" : "default";
};
</script>

<template>
  <v-container id="skills" fluid class="skills-section py-16">
    <v-row justify="center" class="mb-12">
      <v-col cols="12" class="text-center">
        <div class="title-container">
          <v-icon
            icon="mdi-code-tags"
            size="56"
            color="green-lighten-1"
            class="mb-4"
          ></v-icon>
          <h1 class="text-h2 font-weight-bold mb-3">
            {{ t("views.main.skills.sectionTitle") }}
          </h1>
          <p class="text-h6 text-grey-darken-1">
            {{ t("views.main.skills.sectionDescription") }}
          </p>
        </div>
        <v-divider
          class="mx-auto my-4"
          color="green-lighten-1"
          :thickness="4"
          width="100"
          style="border-radius: 4px"
        ></v-divider>
        <!-- Légende -->
        <div class="d-flex justify-center align-center ga-4 flex-wrap mt-4">
          <div class="d-flex align-center ga-2">
            <v-chip color="green-lighten-1" variant="flat" size="small"
              >Primaire</v-chip
            >
            <span class="text-caption text-medium-emphasis">Maîtrisé</span>
          </div>
          <div class="d-flex align-center ga-2">
            <v-chip color="green-lighten-1" variant="tonal" size="small"
              >Secondaire</v-chip
            >
            <span class="text-caption text-medium-emphasis">Pratiqué</span>
          </div>
          <div class="d-flex align-center ga-2">
            <v-chip color="green-lighten-1" variant="outlined" size="small"
              >Notions</v-chip
            >
            <span class="text-caption text-medium-emphasis">Explorée</span>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row class="px-5">
      <v-col
        v-for="(category, idx) in skillCategories"
        :key="category.title"
        cols="12"
        md="6"
        lg="4"
      >
        <v-card
          elevation="6"
          class="skill-category-card h-100"
          :style="{ animationDelay: `${idx * 0.1}s` }"
        >
          <!-- En-tête catégorie -->
          <div
            class="category-header"
            :style="{ background: category.gradient }"
          >
            <v-icon :icon="category.icon" size="36" color="white"></v-icon>
            <h3 class="text-h6 font-weight-bold mt-2" style="color: white">
              {{ t(`views.main.skills.${category.title}`) }}
            </h3>
          </div>

          <!-- Chips de compétences -->
          <v-card-text class="pa-5">
            <div class="d-flex flex-wrap ga-2">
              <v-chip
                v-for="skill in category.skills"
                :key="skill.name"
                :color="category.color"
                :variant="chipVariant(skill.level)"
                :size="chipSize(skill.level)"
                class="skill-chip"
              >
                <v-icon v-if="skill.icon" :icon="skill.icon" start size="14" />
                {{ skill.name }}
              </v-chip>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.skills-section {
  background: white;
  position: relative;
}

.title-container {
  position: relative;
  z-index: 1;
}

.skill-category-card {
  overflow: hidden;
  transition: all 0.3s ease;
  animation: fadeIn 0.6s ease-out backwards;
  border: 2px solid transparent;
}

.skill-category-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(129, 199, 132, 0.2) !important;
  border-color: rgba(129, 199, 132, 0.25);
}

.category-header {
  padding: 1.5rem;
  text-align: center;
}

.skill-chip {
  transition: transform 0.2s ease;
}

.skill-chip:hover {
  transform: translateY(-2px);
}
</style>
