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
  color: string;
  gradient: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "frontend",
    icon: "mdi-monitor",
    color: "blue-lighten-1",
    gradient: "linear-gradient(135deg, #42a5f5 0%, #1e88e5 100%)",
    skills: [
      { name: "Vue.js 3", icon: "mdi-vuejs" },
      { name: "TypeScript", icon: "mdi-language-typescript" },
      { name: "Angular", icon: "mdi-angular" },
      // { name: "React", icon: "mdi-react" },
      { name: "Vuetify", icon: "mdi-vuetify" },
      { name: "HTML / CSS", icon: "mdi-language-html5" },
      { name: "JavaScript", icon: "mdi-language-javascript" },
    ],
  },
  {
    title: "backend",
    icon: "mdi-server",
    color: "green-lighten-1",
    gradient: "linear-gradient(135deg, #81c784 0%, #66bb6a 100%)",
    skills: [
      { name: "ASP.NET Core", icon: "mdi-dot-net" },
      { name: "C#", icon: "mdi-language-csharp" },
      { name: "Node.js", icon: "mdi-nodejs" },
    ],
  },
  {
    title: "database",
    icon: "mdi-database",
    color: "orange-lighten-1",
    gradient: "linear-gradient(135deg, #ff9800 0%, #f57c00 100%)",
    skills: [
      { name: "SQL Server", icon: "mdi-database" },
      { name: "PostgreSQL", icon: "mdi-database" },
      { name: "MySQL", icon: "mdi-database" },
      { name: "MongoDB", icon: "mdi-database" },
      { name: "Redis", icon: "mdi-database" },
    ],
  },
  {
    title: "devops",
    icon: "mdi-hammer-wrench",
    color: "teal-lighten-1",
    gradient: "linear-gradient(135deg, #26a69a 0%, #00897b 100%)",
    skills: [
      { name: "Git", icon: "mdi-git" },
      { name: "Azure DevOps", icon: "mdi-microsoft-azure-devops" },
      { name: "Docker", icon: "mdi-docker" },
      { name: "Kubernetes", icon: "mdi-kubernetes" },
      { name: "CI/CD", icon: "mdi-autorenew" },
      { name: "Azure", icon: "mdi-microsoft-azure" },
      { name: "AWS", icon: "mdi-aws" },
      { name: "GCP", icon: "mdi-google-cloud" },
      { name: "Terraform", icon: "mdi-terraform" },
    ],
  },
  {
    title: "tools",
    icon: "mdi-tools",
    color: "purple-lighten-1",
    gradient: "linear-gradient(135deg, #ab47bc 0%, #8e24aa 100%)",
    skills: [
      { name: "Swagger / OpenAPI", icon: "mdi-api" },
      { name: "REST API", icon: "mdi-api" },
      { name: "Entity Framework", icon: "mdi-database-cog" },
      { name: "Microservices", icon: "mdi-layers" },
      { name: "WebSocket / SignalR", icon: "mdi-signal" },
    ],
  },
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

    <!-- Sections par catégories -->
    <v-row class="px-4 px-sm-8">
      <v-col cols="12" class="mb-12">
        <div
          v-for="(category, idx) in skillCategories"
          :key="category.title"
          class="mb-12"
          :style="{ 
            animation: `slideUp 0.6s ease-out backwards`,
            animationDelay: `${idx * 0.1}s`
          }"
        >
          <!-- Titre catégorie -->
          <div class="category-title-section mb-6">
            <div class="category-title-wrapper">
              <v-icon 
                :icon="category.icon" 
                :color="category.color"
                size="32"
                class="mr-3"
              ></v-icon>
              <h2 class="text-h5 font-weight-bold">
                {{ t(`views.main.skills.${category.title}`) }}
              </h2>
            </div>
            <v-divider :color="category.color" class="mt-3 mx-auto" style="max-width: 300px;"></v-divider>
          </div>

          <!-- Liste des technologies -->
          <div class="skills-list-wrapper">
            <div
              v-for="(skill, itemIdx) in category.skills"
              :key="skill.name"
              class="skill-item-simple"
              :style="{ 
                animation: `slideIn 0.4s ease-out backwards`,
                animationDelay: `${itemIdx * 0.05}s`
              }"
            >
              <div class="skill-icon-box" v-if="skill.icon">
                <v-icon 
                  :icon="skill.icon"
                  :color="category.color"
                  size="36"
                ></v-icon>
              </div>
              <div v-else class="skill-icon-placeholder"></div>
              <p class="skill-label">{{ skill.name }}</p>
            </div>
          </div>
        </div>
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

.introduction-text {
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.05rem;
  letter-spacing: 0.3px;
}

.category-title-section {
  animation: fadeIn 0.6s ease-out;
}

.category-title-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
}

.skills-list-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 16px 0;
  justify-content: center;
  align-items: center;
}

.skill-item-simple {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
  transition: all 0.3s ease;
}

/* .skill-item-simple:hover {
  transform: translateY(-8px);
} */

.skill-icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, rgba(129, 199, 132, 0.08) 0%, rgba(102, 187, 106, 0.08) 100%);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.skill-item-simple:hover .skill-icon-box {
  background: linear-gradient(135deg, rgba(129, 199, 132, 0.16) 0%, rgba(102, 187, 106, 0.16) 100%);
  box-shadow: 0 8px 16px rgba(129, 199, 132, 0.12);
  transform: scale(1.08);
}

.skill-icon-placeholder {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, rgba(129, 199, 132, 0.06) 0%, rgba(102, 187, 106, 0.06) 100%);
  border-radius: 12px;
}

.skill-label {
  font-size: 0.9rem;
  font-weight: 500;
  color: #333;
  margin: 0;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .skills-list-wrapper {
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    gap: 16px;
  }

  .skill-icon-box {
    width: 50px;
    height: 50px;
  }

  .skill-label {
    font-size: 0.8rem;
  }
}

@media (max-width: 600px) {
  .introduction-text {
    font-size: 0.95rem;
  }

  .skills-list-wrapper {
    grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
    gap: 12px;
  }

  .skill-icon-box {
    width: 45px;
    height: 45px;
  }
}
</style>
