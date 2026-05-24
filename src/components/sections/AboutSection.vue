<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

// 🔁 Mettre à false pour masquer la bannière "en recherche d'emploi"
const seekingJob = true;

const experienceStart = new Date("2023-04-01");
const experienceYears = Number.parseFloat(
    (
        (Date.now() - experienceStart.getTime()) /
        (1000 * 60 * 60 * 24 * 365.25)
    ).toFixed(0),
);

const stats = [
    { value: experienceYears + "+", label: "Années d'XP" },
    { value: "3+", label: "Projets réalisés" },
    { value: "25+", label: "Technologies" },
];

const pillars = [
    {
        icon: "mdi-server",
        color: "green",
        gradient: "linear-gradient(135deg, #a5d6a7 0%, #66bb6a 100%)",
        title: "Backend .NET",
        description:
            "APIs REST en Clean Architecture (C#, ASP.NET Core), CQRS avec MediatR, Entity Framework, SQL Server.",
    },
    {
        icon: "mdi-infinity",
        color: "blue",
        gradient: "linear-gradient(135deg, #90caf9 0%, #42a5f5 100%)",
        title: "DevOps & Cloud",
        description:
            "CI/CD via Azure DevOps, containerisation Docker, orchestration Kubernetes, IaC avec Terraform sur GCP/Azure/AWS.",
    },
    {
        icon: "mdi-eye-outline",
        color: "purple",
        gradient: "linear-gradient(135deg, #ce93d8 0%, #ab47bc 100%)",
        title: "Vision produit",
        description:
            "Conception de bout en bout : de la modélisation BDD aux contrats API, avec un code propre, testable et maintenable.",
    },
];

const passions = [
    { icon: "mdi-run-fast", key: "sport", color: "orange" },
    { icon: "mdi-controller", key: "videoGames", color: "purple" },
    { icon: "mdi-pot-steam", key: "cooking", color: "red" },
    { icon: "mdi-music-note-eighth", key: "music", color: "pink" },
];
</script>

<template>
    <v-container id="about" fluid class="about-section py-16">

        <!-- Bannière recherche d'emploi -->
        <v-row v-if="seekingJob" justify="center" class="mb-10">
            <v-col cols="12" md="10" lg="9" class="d-flex justify-center">
                <div
                    class="availability-banner d-inline-flex align-center flex-wrap justify-center ga-4 px-6 py-3 rounded-xl glass-card"
                >
                    <div class="d-flex align-center ga-3">
                        <div class="status-indicator">
                            <span class="pulse-dot"></span>
                        </div>
                        <span
                            class="text-body-1 font-weight-bold"
                            style="color: var(--ink)"
                        >
                            {{ t("views.main.presentation.seekingJobBanner") }}
                        </span>
                    </div>
                    <v-divider
                        vertical
                        class="mx-1 hidden-sm-and-down"
                        style="height: 24px"
                    ></v-divider>
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

        <!-- Titre de section -->
        <v-row justify="center" class="mb-12">
            <v-col cols="12" class="text-center">
                <div class="title-container">
                    <v-icon
                        icon="mdi-account-circle-outline"
                        size="56"
                        color="green-lighten-1"
                        class="mb-4"
                    ></v-icon>
                    <h2 class="text-h2 font-weight-bold mb-3">
                        {{ t("views.main.presentation.title") }}
                    </h2>
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
            <v-col cols="12" md="10" lg="9">

                <!-- Stats en ligne -->
                <v-row justify="center" class="mb-8">
                    <v-col
                        v-for="(stat, i) in stats"
                        :key="i"
                        cols="4"
                        sm="4"
                        class="text-center"
                    >
                        <div class="stat-block">
                            <div class="stat-value gradient-text">{{ stat.value }}</div>
                            <div class="stat-label">{{ stat.label }}</div>
                        </div>
                    </v-col>
                </v-row>

                <!-- Paragraphe d'intro -->
                <v-row class="mb-8">
                    <v-col cols="12">
                        <v-card elevation="4" class="pa-8 glass-card">
                            <v-card-text class="pa-0">
                                <div class="d-flex align-start ga-4">
                                    <v-icon
                                        icon="mdi-account-circle-outline"
                                        color="green-lighten-1"
                                        size="26"
                                        class="mt-1 flex-shrink-0"
                                    />
                                    <div class="d-flex flex-column ga-3">
                                        <p class="text-body-1 text-justify ma-0" style="line-height: 1.9">
                                            {{ t("views.main.presentation.firstParagraph1") }}
                                        </p>
                                        <p class="text-body-1 text-justify ma-0" style="line-height: 1.9">
                                            {{ t("views.main.presentation.firstParagraph2") }}
                                        </p>
                                        <p class="text-body-1 text-justify ma-0" style="line-height: 1.9">
                                            {{ t("views.main.presentation.secondParagraph") }}
                                        </p>
                                    </div>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>

                <!-- 3 Piliers -->
                <v-row class="mb-8">
                    <v-col
                        v-for="(pillar, i) in pillars"
                        :key="i"
                        cols="12"
                        sm="4"
                    >
                        <div class="pillar-card">
                            <div
                                class="pillar-icon-wrap"
                                :style="{ background: pillar.gradient }"
                            >
                                <v-icon :icon="pillar.icon" color="white" size="24" />
                            </div>
                            <h3 class="pillar-title">{{ pillar.title }}</h3>
                            <p class="pillar-desc">{{ pillar.description }}</p>
                        </div>
                    </v-col>
                </v-row>

                <!-- Objectif CDI -->
                <v-row class="mb-8">
                    <v-col cols="12">
                        <v-card elevation="4" class="pa-6 goal-card">
                            <h3
                                class="text-h6 font-weight-bold mb-4"
                                style="color: white"
                            >
                                <v-icon icon="mdi-map-marker-star-outline" class="mr-2" />
                                {{ t("views.main.presentation.goalTitle") }}
                            </h3>
                            <p
                                class="text-body-1 mb-5 text-justify"
                                style="line-height: 1.85; color: rgba(255,255,255,0.92); white-space: pre-line;"
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

                <!-- Passions -->
                <v-row>
                    <v-col cols="12">
                        <v-card elevation="4" class="pa-6 glass-card">
                            <h3
                                class="text-h6 font-weight-bold mb-5 text-green-lighten-1"
                            >
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
                                                    t(
                                                        `views.main.presentation.passions.${passion.key}.title`,
                                                    )
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

/* ─── Bannière dispo ───────────────────────────────── */
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
    background-color: #4caf50;
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.4);
    animation: pulse-ring 2s infinite;
}

@keyframes pulse-ring {
    0% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.4); }
    70% { box-shadow: 0 0 0 6px rgba(76, 175, 80, 0); }
    100% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0); }
}

/* ─── Stats inline ─────────────────────────────────── */
.stat-block {
    padding: 1rem 0;
    border-radius: var(--radius-md);
}

.stat-value {
    font-family: var(--font-display);
    font-size: 2.4rem;
    font-weight: 800;
    line-height: 1;
    margin-bottom: 0.3rem;
}

.stat-label {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--ink-muted);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

/* ─── Piliers ──────────────────────────────────────── */
.pillar-card {
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: var(--radius-lg);
    padding: 1.75rem;
    height: 100%;
    box-shadow: var(--shadow-soft);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
}

.pillar-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-card);
}

.pillar-icon-wrap {
    width: 52px;
    height: 52px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
}

.pillar-title {
    font-family: var(--font-display);
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--ink);
    margin: 0;
    letter-spacing: -0.01em;
}

.pillar-desc {
    font-size: 0.9rem;
    line-height: 1.7;
    color: var(--ink-muted);
    margin: 0;
}

/* ─── Card objectif ────────────────────────────────── */
.goal-card {
    background: linear-gradient(160deg, var(--accent) 0%, var(--accent-strong) 100%);
    color: white;
    border: none;
    border-radius: var(--radius-lg);
}

/* ─── Passions ─────────────────────────────────────── */
.passion-card {
    background: var(--surface-muted);
    border: 1px solid var(--line);
    transition: all 0.22s ease;
}

.passion-icon-bg {
    flex-shrink: 0;
}
</style>
