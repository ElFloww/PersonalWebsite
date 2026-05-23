<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

interface Skill {
  name: string;
  icon?: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  featured?: boolean;
  accent?: string;
  gradient?: string;
  chipColor?: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Cloud Platforms",
    icon: "mdi-cloud-outline",
    featured: true,
    accent: "#1976D2",
    gradient: "linear-gradient(135deg, #2196F3 0%, #1565C0 100%)",
    chipColor: "blue-lighten-1",
    skills: [
      { name: "Google Cloud Platform", icon: "mdi-google-cloud" },
      { name: "Amazon AWS", icon: "mdi-aws" },
      { name: "Microsoft Azure", icon: "mdi-microsoft-azure" },
    ],
  },
    {
    title: "Containers & Orchestration",
    icon: "mdi-kubernetes",
    accent: "#8E24AA",
    gradient: "linear-gradient(135deg, #AB47BC 0%, #8E24AA 100%)",
    chipColor: "purple-lighten-1",
    skills: [
      { name: "Kubernetes", icon: "mdi-kubernetes" },
      { name: "Docker", icon: "mdi-docker" },
      { name: "Docker Swarm", icon: "mdi-docker" },
      { name: "Microservices", icon: "mdi-layers" },
    ],
  },
  {
    title: "DevOps & Automation",
    icon: "mdi-cog-sync",
    featured: true,
    accent: "#43A047",
    gradient: "linear-gradient(135deg, #66BB6A 0%, #388E3C 100%)",
    chipColor: "green-lighten-1",
    skills: [
      { name: "Terraform", icon: "mdi-wrench-outline" },
      { name: "Terragrunt", icon: "mdi-file-tree" },
      { name: "Linux", icon: "mdi-linux" },
      { name: "Proxmox", icon: "mdi-server" },
      { name: "Azure DevOps", icon: "mdi-microsoft-azure-devops" },
      { name: "GitLab", icon: "mdi-gitlab" },
      { name: "GitHub Actions", icon: "mdi-github" },
    ],
  },
  {
    title: "Programming & Scripting",
    icon: "mdi-code-braces",
    accent: "#FB8C00",
    gradient: "linear-gradient(135deg, #FFA726 0%, #FB8C00 100%)",
    chipColor: "orange-lighten-1",
    skills: [
      { name: "C#", icon: "mdi-language-csharp" },
      { name: "ASP.NET Core", icon: "mdi-dot-net" },
      { name: "Vue.js 3", icon: "mdi-vuejs" },
      { name: "Vuetify", icon: "mdi-vuetify" },
      { name: "TypeScript", icon: "mdi-language-typescript" },
      { name: "Python", icon: "mdi-language-python" },
      { name: "Bash", icon: "mdi-console" },
    ],
  }
];

const additionalTechnologies = [
  { name: 'Entity Framework', icon: 'mdi-database-cog' },
  { name: 'WebSocket / SignalR', icon: 'mdi-signal' },
  { name: "SQL Server", icon: "mdi-database" },
  { name: "PostgreSQL", icon: "mdi-database" },
  { name: "MySQL", icon: "mdi-database" },
  { name: "MongoDB", icon: "mdi-database" },
  { name: "Redis", icon: "mdi-database" },
  { name: 'Database Management', icon: 'mdi-database' },
  { name: 'SQL', icon: 'mdi-database' },
  { name: 'NoSQL', icon: 'mdi-database' },
  { name: 'Firebase', icon: 'mdi-google-cloud' },
  { name: 'Git', icon: 'mdi-git' },
  { name: 'Angular', icon: 'mdi-angular' },
];
</script>

<template>
  <v-container id="skills" fluid class="skills-section py-16">
    <!-- Section Titre et Introduction -->
    <v-row justify="center" class="mb-16">
      <v-col cols="12" md="10" lg="8" class="text-center">
        <div class="title-container">
          <v-icon
            icon="mdi-code-tags"
            size="56"
            color="green-lighten-1"
            class="mb-4"
          ></v-icon>
          <h1 class="text-h2 font-weight-bold mb-4">
            {{ t("views.main.skills.sectionTitle") }}
          </h1>

          <!-- Texte d'introduction inspirant -->
          <p class="introduction-text text-body1 text-grey-darken-1 mb-6 font-weight-500">
            {{ t("views.main.skills.introduction") }}
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
        <div class="technical-grid">
          <v-card
            v-for="category in skillCategories"
            :key="category.title"
            class="technical-card"
            :class="{ 'technical-card--featured': category.featured }"
            elevation="0"
          >
            <v-card-text class="pa-6">
              <div class="technical-card-header mb-5">
                <div class="technical-title-wrap">
                  <div class="technical-icon" :style="{ background: category.gradient || 'linear-gradient(135deg, #66bb6a 0%, #43a047 100%)' }">
                    <v-icon :icon="category.icon" size="22" color="white"></v-icon>
                  </div>
                  <h2 class="text-h6 font-weight-bold ma-0">
                    {{ category.title }}
                  </h2>
                </div>
              </div>

              <div class="skills-mini-grid">
                <v-sheet
                  v-for="skill in category.skills"
                  :key="skill.name"
                  class="skill-mini-card"
                  rounded="lg"
                  :style="{ borderColor: category.accent || 'var(--line)' }"
                >
                  <v-icon
                    v-if="skill.icon"
                    :icon="skill.icon"
                    size="18"
                    :color="category.accent || 'green-darken-1'"
                    class="mr-2"
                  ></v-icon>
                  {{ skill.name }}
                </v-sheet>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>

    <!-- Additional Technologies -->
    <v-row justify="center" class="mt-10">
      <v-col cols="12" md="10" lg="8" class="text-center">
        <h3 class="text-h5 font-weight-bold mb-4">Additional Technologies</h3>
        <div class="additional-tech">
          <v-chip
            v-for="tech in additionalTechnologies"
            :key="tech.name"
            class="ma-2"
            variant="outlined"
            color="grey lighten-3"
            size="small"
          >
            <v-icon v-if="tech.icon" :icon="tech.icon" size="16" class="mr-2"></v-icon>
            {{ tech.name }}
          </v-chip>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.skills-section {
  background: transparent;
  position: relative;
}

.title-container {
  position: relative;
  z-index: 1;
}

.introduction-text {
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.05rem;
  letter-spacing: 0.3px;
}

.technical-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
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

.technical-card--featured {
  box-shadow: 0 16px 40px rgba(0,0,0,0.06);
}

.skills-mini-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
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

/* Responsive */
@media (max-width: 768px) {
  .technical-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .introduction-text {
    font-size: 0.95rem;
  }

  .technical-card .v-card-text {
    padding: 1rem !important;
  }

  .skills-mini-grid {
    grid-template-columns: 1fr;
  }
}

.additional-tech {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}

.additional-tech .v-chip {
  border-radius: 999px;
  background: rgba(245,245,245,0.8);
  color: var(--ink);
}
</style>
