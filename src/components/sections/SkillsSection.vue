<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

interface Skill {
    name: string;
    level: number;
    grade: string;
    icon?: string;
}

const getGrade = (level: number): string => {
    if (level >= 85) return 'A';
    if (level >= 75) return 'B';
    if (level >= 65) return 'C';
    if (level >= 55) return 'D';
    return 'E';
};

interface SkillCategory {
    title: string;
    skills: Skill[];
    color: string;
    gradient: string;
    icon: string;
}

const skillCategories: SkillCategory[] = [
    {
        title: 'languages',
        icon: 'mdi-xml',
        color: 'green-lighten-1',
        gradient: 'linear-gradient(135deg, #81c784 0%, #66bb6a 100%)',
        skills: [
            { name: 'TypeScript / JavaScript', level: 90, grade: 'A', icon: 'mdi-language-typescript' },
            { name: 'C#', level: 85, grade: 'A', icon: 'mdi-language-csharp' },
            { name: 'Python', level: 75, grade: 'B', icon: 'mdi-language-python' },
            { name: 'Java', level: 70, grade: 'C', icon: 'mdi-language-java' },
            { name: 'C / C++', level: 65, grade: 'C', icon: 'mdi-language-cpp' },
            { name: 'PHP', level: 60, grade: 'D', icon: 'mdi-language-php' },
        ]
    },
    {
        title: 'frontend',
        icon: 'mdi-monitor',
        color: 'blue',
        gradient: 'linear-gradient(135deg, #42a5f5 0%, #1e88e5 100%)',
        skills: [
            { name: 'Vue.js', level: 90, grade: 'A', icon: 'mdi-vuejs' },
            { name: 'Vuetify', level: 85, grade: 'A' },
            { name: 'Angular', level: 80, grade: 'B', icon: 'mdi-angular' },
            { name: 'HTML / CSS', level: 90, grade: 'A', icon: 'mdi-language-html5' },
            { name: 'React', level: 65, grade: 'C', icon: 'mdi-react' },
        ]
    },
    {
        title: 'backend',
        icon: 'mdi-server',
        color: 'purple',
        gradient: 'linear-gradient(135deg, #ab47bc 0%, #8e24aa 100%)',
        skills: [
            { name: 'ASP.NET Core', level: 85, grade: 'A', icon: 'mdi-dot-net' },
            { name: 'Node.js', level: 80, grade: 'B', icon: 'mdi-nodejs' },
            { name: 'Express', level: 75, grade: 'B', icon: 'mdi-highway' },
            { name: 'Entity Framework', level: 80, grade: 'B', icon: 'mdi-database-cog' },
        ]
    },
    {
        title: 'database',
        icon: 'mdi-database',
        color: 'orange',
        gradient: 'linear-gradient(135deg, #ff9800 0%, #f57c00 100%)',
        skills: [
            { name: 'PostgreSQL', level: 80, grade: 'B', icon: 'mdi-database' },
            { name: 'MySQL', level: 75, grade: 'B', icon: 'mdi-database' },
            { name: 'MongoDB', level: 70, grade: 'C', icon: 'mdi-database' },
            { name: 'Redis', level: 65, grade: 'C', icon: 'mdi-database' },
        ]
    },
    {
        title: 'tools',
        icon: 'mdi-tools',
        color: 'teal',
        gradient: 'linear-gradient(135deg, #26a69a 0%, #00897b 100%)',
        skills: [
            { name: 'Git', level: 90, grade: 'A', icon: 'mdi-git' },
            { name: 'Docker', level: 80, grade: 'B', icon: 'mdi-docker' },
            { name: 'Azure DevOps', level: 75, grade: 'B', icon: 'mdi-microsoft-azure-devops' },
            { name: 'Kubernetes', level: 60, grade: 'D', icon: 'mdi-kubernetes' },
        ]
    },
    {
        title: 'cloud',
        icon: 'mdi-cloud',
        color: 'indigo',
        gradient: 'linear-gradient(135deg, #5c6bc0 0%, #3949ab 100%)',
        skills: [
            { name: 'Microsoft Azure', level: 80, grade: 'B', icon: 'mdi-microsoft-azure' },
            { name: 'AWS', level: 60, grade: 'D', icon: 'mdi-aws' },
        ]
    }
];
</script>

<template>
    <v-container id="skills" fluid class="skills-section py-16">
        <v-row justify="center" class="mb-12">
            <v-col cols="12" class="text-center">
                <div class="title-container">
                    <v-icon icon="mdi-code-tags" size="56" color="green-lighten-1" class="mb-4"></v-icon>
                    <h1 class="text-h2 font-weight-bold mb-3">
                        {{ t('views.main.skills.sectionTitle') }}
                    </h1>
                    <p class="text-h6 text-grey-darken-1">{{ t('views.main.skills.sectionDescription') }}</p>
                </div>
                <v-divider class="mx-auto my-4" color="green-lighten-1" :thickness="4" width="100" style="border-radius: 4px;"></v-divider>
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
                    elevation="8" 
                    class="skill-category-card h-100"
                    :style="{ animationDelay: `${idx * 0.1}s` }"
                >
                    <div class="category-header" :style="{ background: category.gradient }">
                        <v-icon :icon="category.icon" size="48" color="white"></v-icon>
                        <h3 class="text-h5 font-weight-bold mt-3" style="color: white;">
                            {{ t(`views.main.skills.${category.title}`) }}
                        </h3>
                    </div>

                    <v-card-text class="pa-5">
                        <div v-for="skill in category.skills" :key="skill.name" class="skill-item mb-4">
                            <div class="d-flex align-center justify-space-between mb-2">
                                <div class="d-flex align-center">
                                    <v-icon 
                                        v-if="skill.icon" 
                                        :icon="skill.icon" 
                                        size="20"
                                        :color="category.color"
                                        class="mr-2"
                                    ></v-icon>
                                    <span class="text-body-1 font-weight-medium">{{ skill.name }}</span>
                                </div>
                                <v-chip 
                                    :color="category.color" 
                                    size="small" 
                                    variant="flat"
                                    class="font-weight-bold"
                                >
                                    {{ skill.grade }}
                                </v-chip>
                            </div>
                            <div class="skill-bar-container">
                                <div 
                                    class="skill-bar"
                                    :style="{ 
                                        width: `${skill.level}%`,
                                        background: category.gradient 
                                    }"
                                ></div>
                            </div>
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
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    animation: fadeIn 0.6s ease-out backwards;
    border: 2px solid transparent;
}

.skill-category-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(129, 199, 132, 0.25) !important;
    border-color: rgba(129, 199, 132, 0.3);
}

.category-header {
    padding: 2rem;
    text-align: center;
    position: relative;
}

.skill-item {
    position: relative;
    padding: 0.5rem;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.skill-bar-container {
    height: 8px;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    overflow: hidden;
    position: relative;
}

.skill-bar {
    height: 100%;
    border-radius: 10px;
    transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    animation: growBar 1.5s ease-out;
}

@keyframes growBar {
    from {
        width: 0 !important;
    }
}
</style>
