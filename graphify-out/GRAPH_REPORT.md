# Graph Report - florent-dubut.fr  (2026-11-02)

## Corpus Check
- 68 files · ~373,343 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 6 file(s) not represented in the graph (top: (none) 2, .example 1, .xml 1)

## Summary
- 254 nodes · 309 edges · 20 communities (15 shown, 5 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 10 edges (avg confidence: 0.77)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Vue Core & App Shell
- Changelog & CI Pipeline
- Experience & Project Assets
- About Section
- package.json Scripts
- PWA Manifest
- Contact Form (EmailJS)
- Cookie Consent
- Education Section
- Dev Dependencies
- tsconfig.node
- tsconfig.app
- Runtime Dependencies
- Stats Section
- Footer & Links
- Scroll To Top
- Public Policy Files
- tsconfig Root
- Deps Manifest

## God Nodes (most connected - your core abstractions)
1. `vue-i18n` - 15 edges
2. `vue` - 13 edges
3. `florent-dubut.fr Portfolio Site` - 8 edges
4. `scripts` - 6 edges
5. `compilerOptions` - 6 edges
6. `i18n` - 5 edges
7. `compilerOptions` - 5 edges
8. `Version 2.0 Full Redesign (Dec 2024)` - 5 edges
9. `EmailJS Contact Form Setup` - 5 edges
10. `Build and Deploy to OVH (FTP) workflow` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Build and Deploy to OVH (FTP) workflow` --implements--> `Deployment Options (build to dist)`  [INFERRED]
  .github/workflows/deploy-ovh-ftp.yml → README.md
- `Skills Section added` --semantically_similar_to--> `Site Sections (About, Experience, Education, Skills, Projects, Contact)`  [INFERRED] [semantically similar]
  CHANGELOG.md → README.md
- `Contact Form with validation (mailto)` --semantically_similar_to--> `Contact Form (mailto, EmailJS option)`  [INFERRED] [semantically similar]
  CHANGELOG.md → README.md
- `CV PDF placement (cv-florent-dubut.pdf)` --references--> `Contact Form (mailto, EmailJS option)`  [EXTRACTED]
  public/files/README.md → README.md
- `GitHub secrets (FTP_*, VITE_EMAILJS_*)` --shares_data_with--> `EmailJS env vars (VITE_EMAILJS_SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY)`  [EXTRACTED]
  .github/workflows/deploy-ovh-ftp.yml → README-EMAIL.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **CI/CD pipeline (PR build, release deploy to OVH)** — github_workflows_ci_pr_build_workflow, github_workflows_deploy_ovh_ftp_workflow, github_workflows_deploy_ovh_ftp_action [INFERRED 0.85]
- **EmailJS contact flow** — readme_email_emailjs, readme_email_env_vars, github_workflows_deploy_ovh_ftp_secrets, readme_contactform [INFERRED 0.85]
- **Public site metadata files** — public_robots_txt, public_humans_txt, public_ads_txt, public_well_known_security_txt [INFERRED 0.75]

## Communities (20 total, 5 thin omitted)

### Community 0 - "Vue Core & App Shell"
Cohesion: 0.09
Nodes (22): @mdi/font, vue, vue3-toastify, vue-i18n, vue-router, vuetify, drawer, { initTheme } (+14 more)

### Community 1 - "Changelog & CI Pipeline"
Cohesion: 0.07
Nodes (27): Contact Form with validation (mailto), Hero Section, Projects Section added, Skills Section added, Version 2.0 Full Redesign (Dec 2024), CI - Build Check workflow (PR to develop), SamKirkland FTP-Deploy-Action to ./www/, release branch trigger (+19 more)

### Community 2 - "Experience & Project Assets"
Cohesion: 0.07
Nodes (15): dialog, Experience, experiences, selectedExperience, { t, tm }, hoveredProject, Project, ProjectDetail (+7 more)

### Community 3 - "About Section"
Cohesion: 0.09
Nodes (16): experienceStart, experienceYears, passions, pillars, stats, { t }, age, birthDate (+8 more)

### Community 4 - "package.json Scripts"
Cohesion: 0.10
Nodes (19): name, private, scripts, build, build-only, dev, preview, type-check (+11 more)

### Community 5 - "PWA Manifest"
Cohesion: 0.17
Nodes (11): background_color, categories, description, display, icons, name, orientation, scope (+3 more)

### Community 6 - "Contact Form (EmailJS)"
Cohesion: 0.18
Nodes (11): @emailjs/browser, emailRules, form, formRef, loading, messageRules, nameRules, resetForm() (+3 more)

### Community 7 - "Cookie Consent"
Cohesion: 0.26
Nodes (10): choose(), consent, editing, showBanner, { t, locale }, applyAnalyticsConsent(), clearGoogleAnalyticsCookies(), getStoredAnalyticsConsent() (+2 more)

### Community 8 - "Education Section"
Cohesion: 0.18
Nodes (6): dialog, Education, EducationCategory, educations, selectedEducation, { t, tm, locale }

### Community 9 - "Dev Dependencies"
Cohesion: 0.20
Nodes (10): devDependencies, npm-run-all2, @tsconfig/node22, @types/node, typescript, vite, vite-plugin-vue-devtools, @vitejs/plugin-vue (+2 more)

### Community 10 - "tsconfig.node"
Cohesion: 0.20
Nodes (9): @tsconfig/node22/tsconfig.json, compilerOptions, module, moduleResolution, noEmit, tsBuildInfoFile, types, extends (+1 more)

### Community 11 - "tsconfig.app"
Cohesion: 0.20
Nodes (9): @vue/tsconfig/tsconfig.json, compilerOptions, baseUrl, composite, paths, resolveJsonModule, exclude, extends (+1 more)

### Community 12 - "Runtime Dependencies"
Cohesion: 0.25
Nodes (8): dependencies, @emailjs/browser, @mdi/font, vue, vue3-toastify, vue-i18n, vue-router, vuetify

### Community 13 - "Stats Section"
Cohesion: 0.25
Nodes (6): experienceStart, experienceYears, Stat, stats, { t }, targetValues

### Community 14 - "Footer & Links"
Cohesion: 0.47
Nodes (3): { t }, URL_GITHUB, URL_LINKEDIN

## Knowledge Gaps
- **143 isolated node(s):** `type`, `name`, `version`, `private`, `type` (+138 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 179 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `vue-i18n` connect `Vue Core & App Shell` to `Experience & Project Assets`, `About Section`, `package.json Scripts`, `Contact Form (EmailJS)`, `Cookie Consent`, `Education Section`, `Stats Section`, `Footer & Links`?**
  _High betweenness centrality (0.216) - this node is a cross-community bridge._
- **Why does `vue` connect `Vue Core & App Shell` to `Experience & Project Assets`, `About Section`, `package.json Scripts`, `Contact Form (EmailJS)`, `Cookie Consent`, `Education Section`, `Stats Section`, `Scroll To Top`?**
  _High betweenness centrality (0.150) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Dev Dependencies` to `package.json Scripts`?**
  _High betweenness centrality (0.050) - this node is a cross-community bridge._
- **What connects `type`, `name`, `version` to the rest of the system?**
  _143 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Vue Core & App Shell` be split into smaller, more focused modules?**
  _Cohesion score 0.08558558558558559 - nodes in this community are weakly interconnected._
- **Should `Changelog & CI Pipeline` be split into smaller, more focused modules?**
  _Cohesion score 0.07126436781609195 - nodes in this community are weakly interconnected._
- **Should `Experience & Project Assets` be split into smaller, more focused modules?**
  _Cohesion score 0.07126436781609195 - nodes in this community are weakly interconnected._