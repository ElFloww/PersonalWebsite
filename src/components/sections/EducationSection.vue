<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import upjvLogo from "@/assets/images/logo_upjv.png";
import inssetLogo from "@/assets/images/logo_insset.png";

const { t, tm } = useI18n();

interface Education {
  key: string;
  icon: string;
  color: string;
  gradient: string;
  logo?: string;
}

const educations: Education[] = [
  {
    key: "second",
    icon: "mdi-cloud",
    color: "green-lighten-1",
    gradient: "linear-gradient(135deg, #81c784 0%, #66bb6a 100%)",
    logo: inssetLogo,
  },
  {
    key: "first",
    icon: "mdi-laptop",
    color: "blue-lighten-1",
    gradient: "linear-gradient(135deg, #42a5f5 0%, #1e88e5 100%)",
    logo: upjvLogo,
  },
];

const getEducationHighlights = (educationKey: string): string[] => {
  const highlightsKey = `views.main.education.${educationKey}.highlights`;
  const highlights = tm(highlightsKey);
  return Array.isArray(highlights) ? (highlights as string[]) : [];
};

const getEducationModules = (educationKey: string): string[] => {
  const modulesKey = `views.main.education.${educationKey}.modules`;
  const modules = tm(modulesKey);
  return Array.isArray(modules) ? (modules as string[]) : [];
};

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

const groupModulesByCategory = (educationKey: string) => {
  const rawModules = getEducationModules(educationKey);

  const splitIntoTokens = (text: string) => {
    if (!text) return [] as string[];
    // extract parenthesis content separately
    const parenMatches = Array.from(text.matchAll(/\(([^)]+)\)/g)).map((m) => m[1]);
    const base = text.replace(/\([^)]*\)/g, "");
    const parts: string[] = [];
    // split base on common separators
    base
      .split(/,|\/|;|—|\s-\s|\sand\s|\s&\s/i)
      .map((p) => p.trim())
      .forEach((p) => {
        if (p) parts.push(p);
      });

    // split parenthesis contents too
    parenMatches.forEach((p) => {
      p
        .split(/,|\/|;|\s&\s|\sand\s/i)
        .map((s) => s.trim())
        .forEach((s) => {
          if (s) parts.push(s);
        });
    });

    // further split items that have "(" or ":" or "—"
    const tokens: string[] = [];
    parts.forEach((p) => {
      p
        .split(/:|—|\(|\)/)
        .map((x) => x.trim())
        .forEach((x) => {
          if (x) tokens.push(x);
        });
    });

    // normalize and dedupe while preserving order
    const seen = new Set<string>();
    return tokens
      .map((s) => s.replace(/\s+/g, " ").trim())
      .filter((s) => {
        const low = s.toLowerCase();
        if (seen.has(low)) return false;
        seen.add(low);
        return true;
      });
  };

  const categories = skillCategories.map((c) => ({ ...c, modules: [] as string[] }));
  const other: string[] = [];

  rawModules.forEach((raw) => {
    const tokens = splitIntoTokens(raw);
    tokens.forEach((token) => {
      const m = token.toLowerCase();
      let matched = false;

      // Try exact/substring match against known skill names
      for (const cat of categories) {
        for (const s of cat.skills) {
          const skillName = s.name.toLowerCase();
          if (m === skillName || m.includes(skillName) || skillName.includes(m)) {
            if (!cat.modules.includes(token)) cat.modules.push(token);
            matched = true;
            break;
          }
        }
        if (matched) break;
      }

      // Fallback keyword heuristics for common terms
      if (!matched) {
        if (m.includes("docker") || m.includes("kubernetes") || m.includes("container") || m.includes("microservice") || m.includes("cloud-native") || m.includes("cloud native")) {
          const cat = categories.find((c) => c.title.toLowerCase().includes("container")) || categories[0];
          if (!cat.modules.includes(token)) cat.modules.push(token);
          matched = true;
        }
      }

      if (!matched) other.push(token);
    });
  });

  const result = categories
    .filter((c) => c.modules && c.modules.length > 0)
    .map((c) => ({ title: c.title, icon: c.icon, gradient: c.gradient, modules: c.modules }));

  if (other.length) {
    result.push({ title: t("views.main.education.otherSkills") || "Other", icon: "mdi-dots-horizontal", gradient: selectedEducation.value?.gradient || "", modules: other });
  }

  return result;
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

            <v-card class="path-card" elevation="0">
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
                Parcours
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
                    v-for="category in groupModulesByCategory(selectedEducation.key)"
                    :key="category.title"
                    class="education-category-card"
                    elevation="0"
                  >
                    <v-card-text class="pa-4">
                      <div class="technical-card-header mb-3">
                        <div class="technical-title-wrap">
                          <div class="technical-icon" :style="{ background: category.gradient || selectedEducation.gradient }">
                            <v-icon :icon="category.icon" size="20" color="white"></v-icon>
                          </div>
                          <h4 class="text-subtitle-1 font-weight-bold ma-0">{{ category.title }}</h4>
                        </div>
                      </div>

                      <div class="skills-mini-grid">
                        <v-sheet
                          v-for="mod in category.modules"
                          :key="mod"
                          class="skill-mini-card"
                          rounded="lg"
                        >
                          <v-icon :color="selectedEducation.color" icon="mdi-check-circle" size="16" class="mr-2"></v-icon>
                          {{ mod }}
                        </v-sheet>
                      </div>
                    </v-card-text>
                  </v-card>
                </div>
              </div>
            </section>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="dialog-actions pa-4 pa-sm-6">
          <v-spacer></v-spacer>
          <v-btn :color="selectedEducation.color" variant="flat" @click="dialog = false" prepend-icon="mdi-close">
            {{ t("views.main.education.close") }}
          </v-btn>
        </v-card-actions>
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
  background: linear-gradient(180deg, #ffffff 0%, #f8fcf8 100%);
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
  background: linear-gradient(180deg, #ffffff 0%, #f8fcf8 100%);
  border-radius: 10px;
  min-height: 40px;
  padding: 0.5rem 0.65rem;
  display: flex;
  align-items: flex-start;
  font-weight: 600;
  color: var(--ink);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  white-space: normal;
  word-break: break-word;
  overflow-wrap: anywhere;
  line-height: 1.25;
}

.skill-mini-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(56, 142, 60, 0.12);
}

.education-categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

.education-category-card {
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--surface);
  box-shadow: var(--shadow-soft);
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
}
</style>
