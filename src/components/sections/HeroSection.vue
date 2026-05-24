<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import photoProfil from '@/assets/images/photo_profil.png';

const { t } = useI18n();

const birthDate = new Date('2003-01-27');
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

const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};
</script>

<template>
    <section class="hero-section">
        <!-- Orbs décoratifs -->
        <div class="hero-orb hero-orb--top-left"></div>
        <div class="hero-orb hero-orb--bottom-right"></div>

        <v-container fluid class="hero-container">
            <v-row align="center" justify="center" class="hero-row fill-height">

                <!-- Colonne gauche : Photo -->
                <v-col cols="12" md="5" lg="4" class="d-flex justify-center justify-md-end hero-col-photo">
                    <div class="photo-wrapper animate-photo">
                        <!-- Badge disponibilité -->
                        <div class="availability-badge">
                            <span class="pulse-dot"></span>
                            <span class="badge-text">{{ t('views.main.presentation.seekingJobBanner').replace('🟢 ', '').split('—')[0].trim() }}</span>
                        </div>

                        <!-- Photo -->
                        <div class="photo-ring">
                            <div class="photo-inner">
                                <img :src="photoProfil" alt="Florent Dubut" class="profile-photo" />
                            </div>
                        </div>

                        <!-- Chips info -->
                        <div class="photo-chips">
                            <v-chip color="green-lighten-1" variant="flat" size="small" class="chip-info">
                                <v-icon start size="small">mdi-cake-variant</v-icon>
                                {{ age }} {{ t('views.main.profil.yearsOld') }}
                            </v-chip>
                            <v-chip color="blue-grey" variant="tonal" size="small" class="chip-info">
                                <v-icon start size="small">mdi-map-marker-outline</v-icon>
                                {{ t('views.main.presentation.locationBadge') }}
                            </v-chip>
                        </div>
                    </div>
                </v-col>

                <!-- Colonne droite : Texte + CTA -->
                <v-col cols="12" md="7" lg="6" class="hero-col-text">
                    <div class="hero-text-block">
                        <!-- Tag catégorie -->
                        <div class="hero-tag animate-tag">
                            <span class="tag-dot"></span>
                            <span>{{ t('views.main.profil.description') }}</span>
                        </div>

                        <!-- Nom -->
                        <h1 class="hero-name animate-title">
                            <span class="gradient-text">Florent</span><br />
                            Dubut
                        </h1>

                        <!-- Sous-titre -->
                        <p class="hero-subtitle animate-subtitle">
                            {{ t('views.main.presentation.firstParagraph1') }}
                        </p>

                        <!-- CTA Buttons -->
                        <div class="hero-cta animate-buttons">
                            <v-btn
                                color="green-lighten-1"
                                size="large"
                                variant="flat"
                                class="cta-primary"
                                @click="scrollToSection('about')"
                            >
                                <v-icon start>mdi-account</v-icon>
                                {{ t('components.shared.appBar.about') }}
                            </v-btn>
                            <v-btn
                                color="green-lighten-1"
                                size="large"
                                variant="outlined"
                                class="cta-secondary"
                                @click="scrollToSection('projects')"
                            >
                                <v-icon start>mdi-rocket-launch</v-icon>
                                {{ t('components.shared.appBar.projects') }}
                            </v-btn>
                            <v-btn
                                size="large"
                                variant="text"
                                class="cta-tertiary"
                                href="/files/cv-florent-dubut.pdf"
                                target="_blank"
                            >
                                <v-icon start>mdi-file-download-outline</v-icon>
                                CV PDF
                            </v-btn>
                        </div>

                        <!-- Liens sociaux -->
                        <div class="hero-socials animate-socials">
                            <a
                                href="https://www.linkedin.com/in/florent-dubut/"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="social-link"
                                aria-label="LinkedIn"
                            >
                                <v-icon size="20">mdi-linkedin</v-icon>
                            </a>
                            <a
                                href="https://github.com/florentdubut"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="social-link"
                                aria-label="GitHub"
                            >
                                <v-icon size="20">mdi-github</v-icon>
                            </a>
                            <a
                                href="mailto:contact@florent-dubut.fr"
                                class="social-link"
                                aria-label="Email"
                            >
                                <v-icon size="20">mdi-email-outline</v-icon>
                            </a>
                            <span class="social-divider"></span>
                            <span class="social-hint">Retrouvez-moi</span>
                        </div>
                    </div>
                </v-col>

            </v-row>
        </v-container>

        <!-- Flèche de scroll -->
        <div class="scroll-cue" @click="scrollToSection('about')">
            <v-icon icon="mdi-chevron-down" size="32" color="green-lighten-1" class="scroll-icon"></v-icon>
        </div>
    </section>
</template>

<style scoped>
/* ─── Layout principal ─────────────────────────────── */
.hero-section {
    min-height: calc(100vh - 72px);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

.hero-container {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 3rem 1rem;
}

.hero-row {
    min-height: calc(100vh - 72px - 6rem);
}

/* ─── Orbs décoratifs ──────────────────────────────── */
.hero-orb {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
}

.hero-orb--top-left {
    top: -15%;
    left: -8%;
    width: 520px;
    height: 520px;
    background: radial-gradient(circle, rgba(74, 143, 104, 0.11) 0%, transparent 60%);
}

.hero-orb--bottom-right {
    bottom: -20%;
    right: -10%;
    width: 640px;
    height: 640px;
    background: radial-gradient(circle, rgba(74, 143, 104, 0.07) 0%, transparent 60%);
}

/* ─── Colonne Photo ────────────────────────────────── */
.hero-col-photo {
    position: relative;
    z-index: 1;
}

.photo-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

/* Badge disponibilité */
.availability-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(76, 175, 80, 0.1);
    border: 1px solid rgba(76, 175, 80, 0.25);
    border-radius: 999px;
    padding: 0.35rem 0.9rem;
    font-size: 0.78rem;
    font-weight: 600;
    color: #2e7d52;
    white-space: nowrap;
    backdrop-filter: blur(8px);
}

.pulse-dot {
    width: 8px;
    height: 8px;
    background: #4caf50;
    border-radius: 50%;
    flex-shrink: 0;
    animation: pulse-ring 2s infinite;
}

@keyframes pulse-ring {
    0% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.5); }
    70% { box-shadow: 0 0 0 6px rgba(76, 175, 80, 0); }
    100% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0); }
}

/* Ring photo */
.photo-ring {
    position: relative;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    padding: 4px;
    background: linear-gradient(135deg, var(--accent), var(--accent-strong), var(--accent-soft));
    box-shadow: 0 24px 60px rgba(74, 143, 104, 0.22), 0 0 0 6px rgba(74, 143, 104, 0.08);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.photo-ring:hover {
    box-shadow: 0 32px 72px rgba(74, 143, 104, 0.3), 0 0 0 8px rgba(74, 143, 104, 0.12);
    transform: translateY(-4px);
}

.photo-inner {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    background: var(--surface-muted);
}

.profile-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
}

/* Chips photo */
.photo-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
}

.chip-info {
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
}

/* ─── Colonne Texte ────────────────────────────────── */
.hero-col-text {
    position: relative;
    z-index: 1;
}

.hero-text-block {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

/* Tag */
.hero-tag {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--accent-strong);
    letter-spacing: 0.3px;
}

.tag-dot {
    width: 6px;
    height: 6px;
    background: var(--accent);
    border-radius: 50%;
    flex-shrink: 0;
}

/* Nom */
.hero-name {
    font-family: var(--font-display);
    font-size: clamp(3rem, 7vw, 5.5rem);
    font-weight: 700;
    line-height: 1.05;
    letter-spacing: -0.03em;
    color: var(--ink);
    margin: 0;
}

/* Sous-titre */
.hero-subtitle {
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--ink-muted);
    max-width: 520px;
    margin: 0;
}

/* Boutons */
.hero-cta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    align-items: center;
}

.cta-primary {
    background: linear-gradient(90deg, var(--accent), var(--accent-strong)) !important;
    color: white !important;
    border-radius: 999px !important;
    font-weight: 600 !important;
    box-shadow: 0 10px 28px rgba(74, 143, 104, 0.28) !important;
    transition: transform 0.2s ease, box-shadow 0.2s ease !important;
}

.cta-primary:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 16px 36px rgba(74, 143, 104, 0.36) !important;
}

.cta-secondary {
    border-radius: 999px !important;
    border-color: rgba(74, 143, 104, 0.4) !important;
    color: var(--accent-strong) !important;
    font-weight: 600 !important;
    transition: transform 0.2s ease, background 0.2s ease !important;
}

.cta-secondary:hover {
    transform: translateY(-2px) !important;
    background: rgba(74, 143, 104, 0.06) !important;
}

.cta-tertiary {
    border-radius: 999px !important;
    color: var(--ink-muted) !important;
    font-weight: 500 !important;
}

.cta-tertiary:hover {
    color: var(--accent-strong) !important;
}

/* Liens sociaux */
.hero-socials {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.social-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: var(--surface-muted);
    border: 1px solid var(--line);
    color: var(--ink-muted);
    text-decoration: none;
    transition: all 0.2s ease;
}

.social-link:hover {
    background: var(--accent-soft);
    border-color: rgba(74, 143, 104, 0.3);
    color: var(--accent-strong);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(74, 143, 104, 0.15);
}

.social-divider {
    width: 1px;
    height: 20px;
    background: var(--line);
    margin: 0 0.25rem;
}

.social-hint {
    font-size: 0.78rem;
    color: var(--ink-muted);
    font-weight: 500;
}

/* ─── Flèche de scroll ─────────────────────────────── */
.scroll-cue {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    z-index: 2;
    animation: scrollBounce 2s ease-in-out infinite;
    opacity: 0.7;
    transition: opacity 0.2s;
}

.scroll-cue:hover {
    opacity: 1;
}

@keyframes scrollBounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(6px); }
}

/* ─── Animations d'entrée ──────────────────────────── */
.animate-photo {
    animation: fadeUp 0.9s ease-out 0.1s backwards;
}

.animate-tag {
    animation: fadeUp 0.7s ease-out 0.2s backwards;
}

.animate-title {
    animation: fadeUp 0.9s ease-out 0.3s backwards;
}

.animate-subtitle {
    animation: fadeUp 0.8s ease-out 0.45s backwards;
}

.animate-buttons {
    animation: fadeUp 0.8s ease-out 0.55s backwards;
}

.animate-socials {
    animation: fadeUp 0.7s ease-out 0.65s backwards;
}

/* ─── Responsive ───────────────────────────────────── */
@media (max-width: 960px) {
    .hero-row {
        flex-direction: column-reverse;
        text-align: center;
        gap: 2rem;
        padding: 2rem 0;
    }

    .hero-col-text {
        display: flex;
        justify-content: center;
    }

    .hero-text-block {
        align-items: center;
        text-align: center;
    }

    .hero-subtitle {
        text-align: center;
    }

    .hero-cta {
        justify-content: center;
    }

    .hero-socials {
        justify-content: center;
    }

    .photo-ring {
        width: 240px;
        height: 240px;
    }
}

@media (max-width: 600px) {
    .hero-name {
        font-size: 2.8rem;
    }

    .photo-ring {
        width: 200px;
        height: 200px;
    }

    .availability-badge {
        font-size: 0.7rem;
    }
}
</style>
