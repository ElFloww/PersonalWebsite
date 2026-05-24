<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { getAllVisits, type VisitRecord } from '@/services/visitTracker';

// ─── State ───────────────────────────────────────────────────────────────────
const visits     = ref<VisitRecord[]>([]);
const loading    = ref(false);
const refreshing = ref(false);

const isAuthenticated = ref(false);
const passwordInput = ref('');
const passwordError = ref('');

function login() {
  if (passwordInput.value === import.meta.env.VITE_ADMIN_PASSWORD) {
    isAuthenticated.value = true;
    load();
  } else {
    passwordError.value = 'Mot de passe incorrect';
  }
}

// ─── Filters ─────────────────────────────────────────────────────────────────
const searchIP         = ref('');
const selectedBrowsers = ref<string[]>([]);
const selectedOS       = ref<string[]>([]);
const selectedDevices  = ref<string[]>([]);
const selectedCountries= ref<string[]>([]);
const dateFrom         = ref('');
const dateTo           = ref('');
const filtersOpen      = ref(true);

// ─── Table ───────────────────────────────────────────────────────────────────
const tableSearch  = ref('');
const sortBy       = ref([{ key: 'created_at', order: 'desc' as const }]);
const itemsPerPage = ref(25);

// ─── Load ────────────────────────────────────────────────────────────────────
async function load(isRefresh = false) {
  isRefresh ? (refreshing.value = true) : (loading.value = true);
  visits.value = await getAllVisits();
  loading.value = false;
  refreshing.value = false;
}
// ─── Filter Options ───────────────────────────────────────────────────────────
const browserOptions  = computed(() => [...new Set(visits.value.map(v => v.browser))].filter(Boolean).sort());
const osOptions       = computed(() => [...new Set(visits.value.map(v => v.os))].filter(Boolean).sort());
const deviceOptions   = computed(() => [...new Set(visits.value.map(v => v.device_type))].filter(Boolean).sort());
const countryOptions  = computed(() => [...new Set(visits.value.map(v => v.country))].filter(Boolean).sort());

// ─── Filtered Visits ─────────────────────────────────────────────────────────
const filteredVisits = computed(() =>
  visits.value.filter(v => {
    if (searchIP.value && !v.ip?.toLowerCase().includes(searchIP.value.toLowerCase())) return false;
    if (selectedBrowsers.value.length && !selectedBrowsers.value.includes(v.browser)) return false;
    if (selectedOS.value.length && !selectedOS.value.includes(v.os)) return false;
    if (selectedDevices.value.length && !selectedDevices.value.includes(v.device_type)) return false;
    if (selectedCountries.value.length && !selectedCountries.value.includes(v.country)) return false;
    if (dateFrom.value && new Date(v.created_at!) < new Date(dateFrom.value)) return false;
    if (dateTo.value) {
      const to = new Date(dateTo.value); to.setHours(23, 59, 59);
      if (new Date(v.created_at!) > to) return false;
    }
    return true;
  })
);

const activeFilterCount = computed(() => [
  searchIP.value, ...selectedBrowsers.value, ...selectedOS.value,
  ...selectedDevices.value, ...selectedCountries.value, dateFrom.value, dateTo.value,
].filter(Boolean).length);

function clearFilters() {
  searchIP.value = ''; selectedBrowsers.value = []; selectedOS.value = [];
  selectedDevices.value = []; selectedCountries.value = []; dateFrom.value = ''; dateTo.value = '';
}

// ─── KPIs ────────────────────────────────────────────────────────────────────
const totalVisits = computed(() => filteredVisits.value.length);
const uniqueIPs   = computed(() => new Set(filteredVisits.value.map(v => v.ip)).size);
const todayVisits = computed(() => {
  const t = new Date().toDateString();
  return filteredVisits.value.filter(v => new Date(v.created_at!).toDateString() === t).length;
});
const weekVisits  = computed(() => {
  const w = new Date(); w.setDate(w.getDate() - 7);
  return filteredVisits.value.filter(v => new Date(v.created_at!) > w).length;
});
const avgPerDay   = computed(() => {
  if (!filteredVisits.value.length) return '0';
  const dates = new Set(filteredVisits.value.map(v => v.created_at!.slice(0, 10)));
  return (filteredVisits.value.length / Math.max(dates.size, 1)).toFixed(1);
});

// ─── Chart Helpers ───────────────────────────────────────────────────────────
function getTopStats(key: keyof VisitRecord, n = 7) {
  const counts: Record<string, number> = {};
  filteredVisits.value.forEach(v => {
    const val = (v[key] as string) || 'Unknown';
    counts[val] = (counts[val] ?? 0) + 1;
  });
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, n);
  const max = sorted[0]?.[1] ?? 1;
  return sorted.map(([label, count]) => ({
    label, count,
    pct: totalVisits.value ? Math.round((count / totalVisits.value) * 100) : 0,
    barPct: Math.round((count / max) * 100),
  }));
}
const browserStats = computed(() => getTopStats('browser'));
const osStats      = computed(() => getTopStats('os'));
const countryStats = computed(() => getTopStats('country', 10));
const deviceStats  = computed(() => getTopStats('device_type'));

// ─── Timeline ────────────────────────────────────────────────────────────────
const timeline = computed(() => {
  const days: Record<string, number> = {};
  for (let i = 13; i >= 0; i--) {
    const d = new Date(); d.setDate(d.getDate() - i);
    days[d.toISOString().slice(0, 10)] = 0;
  }
  filteredVisits.value.forEach(v => {
    const k = v.created_at!.slice(0, 10);
    if (k in days) days[k]++;
  });
  const entries = Object.entries(days);
  const max = Math.max(...entries.map(([, c]) => c), 1);
  return entries.map(([date, count]) => ({
    date,
    label: new Date(date + 'T12:00:00').toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' }),
    count,
    pct: Math.round((count / max) * 100),
  }));
});

// ─── Table ───────────────────────────────────────────────────────────────────
const headers = [
  { title: 'Date',       key: 'created_at',       width: '145px' },
  { title: 'IP',         key: 'ip',                width: '135px' },
  { title: 'Pays',       key: 'country',           width: '130px' },
  { title: 'Ville',      key: 'city',              width: '110px' },
  { title: 'Navigateur', key: 'browser' },
  { title: 'OS',         key: 'os' },
  { title: 'Appareil',   key: 'device_type',       width: '100px' },
  { title: 'Langue',     key: 'language',          width: '85px'  },
  { title: 'Résolution', key: 'screen_resolution', width: '125px' },
  { title: 'Timezone',   key: 'timezone' },
  { title: 'Referrer',   key: 'referrer' },
];

function fmt(iso: string) {
  return new Date(iso).toLocaleString('fr-FR', {
    day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit',
  });
}
function deviceIcon(d: string) {
  return d === 'Mobile' ? 'mdi-cellphone' : d === 'Tablet' ? 'mdi-tablet' : 'mdi-monitor';
}
function browserIcon(b: string) {
  const m: Record<string, string> = {
    Chrome: 'mdi-google-chrome', Firefox: 'mdi-firefox',
    Safari: 'mdi-apple-safari', Edge: 'mdi-microsoft-edge', Opera: 'mdi-opera',
  };
  return m[b] ?? 'mdi-web';
}
function deviceColor(d: string) {
  return d === 'Mobile' ? '#16a34a' : d === 'Tablet' ? '#d97706' : '#4a8f68';
}

// ─── Export CSV ──────────────────────────────────────────────────────────────
function exportCSV() {
  const cols: (keyof VisitRecord)[] = ['created_at','ip','country','city','browser','browser_version','os','device_type','language','screen_resolution','timezone','referrer','page'];
  const rows = filteredVisits.value.map(v => cols.map(c => `"${v[c] ?? ''}"`).join(','));
  const blob = new Blob([[cols.join(','), ...rows].join('\n')], { type: 'text/csv' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `visits_${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
}

const barColors = ['#4a8f68','#2f6d4e','#6aab88','#3b82f6','#8b5cf6','#f59e0b','#ef4444','#ec4899'];
</script>

<template>
  <div v-if="!isAuthenticated" class="auth-wrapper">
    <div class="auth-card">
      <div class="adm-badge mb-4">ACCÈS RESTREINT</div>
      <h1 class="adm-title mb-6">Authentification</h1>
      <v-text-field
        v-model="passwordInput"
        type="password"
        label="Mot de passe"
        variant="outlined"
        density="compact"
        @keyup.enter="login"
        :error-messages="passwordError"
        bg-color="transparent"
      ></v-text-field>
      <button class="adm-btn adm-btn--primary w-100 mt-2" @click="login">
        Accéder
      </button>
    </div>
  </div>

  <div v-else class="adm">

    <!-- ══════════ HEADER ══════════ -->
    <div class="adm-header">
      <div>
        <div class="adm-badge">SECRET · ADMIN</div>
        <h1 class="adm-title">Analytics Dashboard</h1>
        <p class="adm-sub">florent-dubut.fr · Historique complet des visites</p>
      </div>
      <div class="adm-actions">
        <button class="adm-btn adm-btn--outline" @click="exportCSV" :disabled="!totalVisits">
          <v-icon size="15">mdi-download</v-icon> Exporter CSV
        </button>
        <button class="adm-btn adm-btn--primary" @click="load(true)">
          <v-icon size="15" :class="{ 'spin': refreshing }">mdi-refresh</v-icon>
          {{ refreshing ? 'Actualisation…' : 'Actualiser' }}
        </button>
      </div>
    </div>

    <!-- ══════════ LOADING ══════════ -->
    <div v-if="loading" class="adm-loading">
      <div class="adm-spinner" />
      <p>Chargement des données…</p>
    </div>

    <template v-else>

      <!-- ══════════ KPI CARDS ══════════ -->
      <div class="kpi-grid">
        <div class="kpi" style="--c:#4a8f68;--cb:rgba(74,143,104,0.08)">
          <div class="kpi__icon"><v-icon color="#4a8f68" size="22">mdi-eye-outline</v-icon></div>
          <div>
            <div class="kpi__value">{{ totalVisits.toLocaleString('fr-FR') }}</div>
            <div class="kpi__label">Visites totales</div>
          </div>
        </div>
        <div class="kpi" style="--c:#3b82f6;--cb:rgba(59,130,246,0.08)">
          <div class="kpi__icon"><v-icon color="#3b82f6" size="22">mdi-account-group-outline</v-icon></div>
          <div>
            <div class="kpi__value">{{ uniqueIPs.toLocaleString('fr-FR') }}</div>
            <div class="kpi__label">IPs uniques</div>
          </div>
        </div>
        <div class="kpi" style="--c:#2f6d4e;--cb:rgba(47,109,78,0.08)">
          <div class="kpi__icon"><v-icon color="#2f6d4e" size="22">mdi-calendar-today</v-icon></div>
          <div>
            <div class="kpi__value">{{ todayVisits }}</div>
            <div class="kpi__label">Aujourd'hui</div>
          </div>
        </div>
        <div class="kpi" style="--c:#d97706;--cb:rgba(217,119,6,0.08)">
          <div class="kpi__icon"><v-icon color="#d97706" size="22">mdi-calendar-week</v-icon></div>
          <div>
            <div class="kpi__value">{{ weekVisits }}</div>
            <div class="kpi__label">7 derniers jours</div>
          </div>
        </div>
        <div class="kpi" style="--c:#7c3aed;--cb:rgba(124,58,237,0.08)">
          <div class="kpi__icon"><v-icon color="#7c3aed" size="22">mdi-chart-line</v-icon></div>
          <div>
            <div class="kpi__value">{{ avgPerDay }}</div>
            <div class="kpi__label">Moy. / jour</div>
          </div>
        </div>
      </div>

      <!-- ══════════ TIMELINE ══════════ -->
      <div class="dash-card mb16">
        <div class="dash-card__head">
          <v-icon size="16" color="#4a8f68">mdi-chart-areaspline</v-icon>
          Activité — 14 derniers jours
        </div>
        <div class="timeline">
          <div
            v-for="day in timeline" :key="day.date"
            class="tl-col"
            :title="`${day.date} : ${day.count} visite(s)`"
          >
            <div class="tl-count">{{ day.count || '' }}</div>
            <div class="tl-track">
              <div class="tl-bar" :style="{ height: day.pct + '%' }" />
            </div>
            <div class="tl-label">{{ day.label }}</div>
          </div>
        </div>
      </div>

      <!-- ══════════ STATS ROW ══════════ -->
      <div class="stats-row mb16">

        <!-- Navigateurs -->
        <div class="dash-card">
          <div class="dash-card__head">
            <v-icon size="16" color="#4a8f68">mdi-web</v-icon>Navigateurs
          </div>
          <div class="bar-list">
            <div v-for="(item, i) in browserStats" :key="item.label" class="bar-item">
              <div class="bar-item__top">
                <div class="bar-item__name">
                  <v-icon :icon="browserIcon(item.label)" size="13" :color="barColors[i]" />
                  {{ item.label }}
                </div>
                <span class="bar-item__meta">{{ item.count }} · <b>{{ item.pct }}%</b></span>
              </div>
              <div class="bar-track">
                <div class="bar-fill" :style="{ width: item.barPct + '%', background: barColors[i % barColors.length] }" />
              </div>
            </div>
            <p v-if="!browserStats.length" class="empty">Aucune donnée</p>
          </div>
        </div>

        <!-- OS -->
        <div class="dash-card">
          <div class="dash-card__head">
            <v-icon size="16" color="#4a8f68">mdi-laptop</v-icon>Systèmes d'exploitation
          </div>
          <div class="bar-list">
            <div v-for="(item, i) in osStats" :key="item.label" class="bar-item">
              <div class="bar-item__top">
                <div class="bar-item__name">{{ item.label }}</div>
                <span class="bar-item__meta">{{ item.count }} · <b>{{ item.pct }}%</b></span>
              </div>
              <div class="bar-track">
                <div class="bar-fill" :style="{ width: item.barPct + '%', background: barColors[(i+2) % barColors.length] }" />
              </div>
            </div>
            <p v-if="!osStats.length" class="empty">Aucune donnée</p>
          </div>
        </div>

        <!-- Appareils + Pays -->
        <div class="stats-right">
          <div class="dash-card">
            <div class="dash-card__head">
              <v-icon size="16" color="#4a8f68">mdi-cellphone-link</v-icon>Appareils
            </div>
            <div class="device-row">
              <div v-for="item in deviceStats" :key="item.label" class="device-pill"
                :style="{ color: deviceColor(item.label), borderColor: deviceColor(item.label), background: deviceColor(item.label) + '12' }">
                <v-icon :icon="deviceIcon(item.label)" size="13" :color="deviceColor(item.label)" />
                {{ item.label }} <strong>{{ item.count }}</strong>
                <span class="device-pct">{{ item.pct }}%</span>
              </div>
              <p v-if="!deviceStats.length" class="empty">Aucune donnée</p>
            </div>
          </div>

          <div class="dash-card" style="flex:1">
            <div class="dash-card__head">
              <v-icon size="16" color="#4a8f68">mdi-earth</v-icon>Top pays
            </div>
            <div class="country-list">
              <div v-for="(item, i) in countryStats" :key="item.label" class="country-row">
                <span class="country-rank">{{ i + 1 }}</span>
                <span class="country-name">{{ item.label }}</span>
                <div class="country-track">
                  <div class="country-bar" :style="{ width: item.barPct + '%' }" />
                </div>
                <span class="country-count">{{ item.count }}</span>
              </div>
              <p v-if="!countryStats.length" class="empty">Aucune donnée</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ══════════ FILTERS ══════════ -->
      <div class="dash-card mb16">
        <div class="dash-card__head clickable" @click="filtersOpen = !filtersOpen">
          <div style="display:flex;align-items:center;gap:8px">
            <v-icon size="16" color="#d97706">mdi-filter-variant</v-icon>
            Filtres
            <span v-if="activeFilterCount" class="filter-badge">{{ activeFilterCount }}</span>
          </div>
          <div style="display:flex;align-items:center;gap:12px">
            <button v-if="activeFilterCount" class="clear-btn" @click.stop="clearFilters">
              <v-icon size="13" color="#ef4444">mdi-close-circle</v-icon> Effacer
            </button>
            <v-icon size="20" color="#9ca3af" :style="{ transform: filtersOpen ? 'rotate(180deg)' : '', transition:'.25s' }">
              mdi-chevron-down
            </v-icon>
          </div>
        </div>

        <Transition name="expand">
          <div v-show="filtersOpen" class="filters-grid">

            <div class="fg">
              <label class="fg__label">Date de</label>
              <input type="date" v-model="dateFrom" class="fg__input" />
            </div>
            <div class="fg">
              <label class="fg__label">Date à</label>
              <input type="date" v-model="dateTo" class="fg__input" />
            </div>
            <div class="fg">
              <label class="fg__label">Recherche IP</label>
              <div style="position:relative">
                <v-icon size="14" style="position:absolute;left:10px;top:50%;transform:translateY(-50%);color:#9ca3af">mdi-magnify</v-icon>
                <input v-model="searchIP" placeholder="ex: 192.168" class="fg__input fg__input--icon" />
              </div>
            </div>

            <div class="fg">
              <label class="fg__label">Navigateur</label>
              <div class="chip-group">
                <span v-for="opt in browserOptions" :key="opt" class="fchip"
                  :class="{ 'fchip--on': selectedBrowsers.includes(opt) }"
                  @click="selectedBrowsers.includes(opt) ? selectedBrowsers.splice(selectedBrowsers.indexOf(opt),1) : selectedBrowsers.push(opt)">
                  <v-icon :icon="browserIcon(opt)" size="11" />{{ opt }}
                </span>
              </div>
            </div>

            <div class="fg">
              <label class="fg__label">Système</label>
              <div class="chip-group">
                <span v-for="opt in osOptions" :key="opt" class="fchip"
                  :class="{ 'fchip--on': selectedOS.includes(opt) }"
                  @click="selectedOS.includes(opt) ? selectedOS.splice(selectedOS.indexOf(opt),1) : selectedOS.push(opt)">
                  {{ opt }}
                </span>
              </div>
            </div>

            <div class="fg">
              <label class="fg__label">Appareil</label>
              <div class="chip-group">
                <span v-for="opt in deviceOptions" :key="opt" class="fchip"
                  :class="{ 'fchip--on': selectedDevices.includes(opt) }"
                  @click="selectedDevices.includes(opt) ? selectedDevices.splice(selectedDevices.indexOf(opt),1) : selectedDevices.push(opt)">
                  <v-icon :icon="deviceIcon(opt)" size="11" />{{ opt }}
                </span>
              </div>
            </div>

            <div class="fg fg--wide">
              <label class="fg__label">Pays</label>
              <div class="chip-group">
                <span v-for="opt in countryOptions" :key="opt" class="fchip"
                  :class="{ 'fchip--on': selectedCountries.includes(opt) }"
                  @click="selectedCountries.includes(opt) ? selectedCountries.splice(selectedCountries.indexOf(opt),1) : selectedCountries.push(opt)">
                  {{ opt }}
                </span>
              </div>
            </div>

          </div>
        </Transition>
      </div>

      <!-- ══════════ TABLE ══════════ -->
      <div class="dash-card">
        <div class="dash-card__head">
          <div style="display:flex;align-items:center;gap:8px">
            <v-icon size="16" color="#4a8f68">mdi-table-large</v-icon>
            Historique détaillé
            <span class="result-pill">{{ filteredVisits.length.toLocaleString('fr-FR') }} résultat{{ filteredVisits.length > 1 ? 's' : '' }}</span>
          </div>
          <div style="position:relative">
            <v-icon size="14" style="position:absolute;left:10px;top:50%;transform:translateY(-50%);color:#9ca3af;z-index:1">mdi-magnify</v-icon>
            <input v-model="tableSearch" placeholder="Recherche…" class="fg__input fg__input--icon table-search" />
          </div>
        </div>

        <v-data-table
          :headers="headers"
          :items="filteredVisits"
          :search="tableSearch"
          :sort-by="sortBy"
          :items-per-page="itemsPerPage"
          density="compact"
          class="adm-table"
          hover
        >
          <template #item.created_at="{ item }">
            <span class="mono text-caption" style="color:#4b5f54">{{ fmt(item.created_at!) }}</span>
          </template>
          <template #item.ip="{ item }">
            <span class="ip-pill mono">{{ item.ip }}</span>
          </template>
          <template #item.browser="{ item }">
            <div style="display:flex;align-items:center;gap:5px">
              <v-icon :icon="browserIcon(item.browser)" size="13" color="#4a8f68" />
              <span class="text-caption" style="color:#0f1d14">{{ item.browser }} {{ item.browser_version?.split('.')[0] }}</span>
            </div>
          </template>
          <template #item.device_type="{ item }">
            <v-icon :icon="deviceIcon(item.device_type)" size="15" :color="deviceColor(item.device_type)" />
          </template>
          <template #item.referrer="{ item }">
            <span style="display:block;max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#4b5f54;font-size:0.78rem" :title="item.referrer">
              {{ item.referrer }}
            </span>
          </template>
          <template #item.country="{ item }">
            <span style="font-size:0.82rem;color:#0f1d14">{{ item.country }}</span>
          </template>
          <template #item.city="{ item }">
            <span style="font-size:0.82rem;color:#4b5f54">{{ item.city }}</span>
          </template>
          <template #item.os="{ item }">
            <span style="font-size:0.82rem;color:#0f1d14">{{ item.os }}</span>
          </template>
          <template #item.language="{ item }">
            <span style="font-size:0.82rem;color:#4b5f54">{{ item.language }}</span>
          </template>
          <template #item.screen_resolution="{ item }">
            <span style="font-size:0.78rem;color:#4b5f54" class="mono">{{ item.screen_resolution }}</span>
          </template>
          <template #item.timezone="{ item }">
            <span style="font-size:0.78rem;color:#4b5f54">{{ item.timezone }}</span>
          </template>
        </v-data-table>
      </div>

    </template>
  </div>
</template>

<style scoped>
.auth-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 72px);
  background: var(--background);
  padding: 1rem;
}

.auth-card {
  background: var(--surface);
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: var(--shadow-card);
  width: 100%;
  max-width: 400px;
  border: 1px solid var(--line);
  text-align: center;
}

/* ── ROOT ── */
.adm {
  min-height: 100vh;
  padding: 36px 32px 72px;
  max-width: 1560px;
  margin: 0 auto;
  font-family: var(--font-body);
  color: var(--ink);
}
.mb16 { margin-bottom: 16px; }

/* ── HEADER ── */
.adm-header {
  display: flex; align-items: flex-end; justify-content: space-between;
  flex-wrap: wrap; gap: 16px; margin-bottom: 28px;
}
.adm-badge {
  display: inline-block;
  font-size: 0.62rem; font-weight: 700; letter-spacing: 0.15em;
  padding: 3px 10px; border-radius: 999px;
  background: #fef3c7; border: 1px solid #fde68a; color: #92400e;
  margin-bottom: 8px;
}
.adm-title {
  font-family: var(--font-display);
  font-size: 2rem; font-weight: 700; color: var(--ink);
  margin: 0 0 4px; letter-spacing: -0.02em;
}
.adm-sub { font-size: 0.82rem; color: var(--ink-muted); margin: 0; }
.adm-actions { display: flex; gap: 10px; }

.adm-btn {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 9px 18px; border-radius: 999px;
  font-size: 0.8rem; font-weight: 600; cursor: pointer;
  border: none; transition: all .2s ease;
}
.adm-btn:disabled { opacity: .45; cursor: not-allowed; }
.adm-btn--primary {
  background: var(--accent); color: #fff;
  box-shadow: 0 4px 14px rgba(74,143,104,0.25);
}
.adm-btn--primary:hover:not(:disabled) { background: var(--accent-strong); transform: translateY(-1px); }
.adm-btn--outline {
  background: var(--surface); color: var(--accent-strong);
  border: 1.5px solid var(--line);
  box-shadow: var(--shadow-soft);
}
.adm-btn--outline:hover:not(:disabled) { border-color: var(--accent); transform: translateY(-1px); }

.spin { animation: spin .8s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }

/* ── LOADING ── */
.adm-loading {
  display: flex; flex-direction: column; align-items: center;
  justify-content: center; gap: 16px; min-height: 400px;
  color: var(--ink-muted); font-size: 0.9rem;
}
.adm-spinner {
  width: 40px; height: 40px; border-radius: 50%;
  border: 3px solid var(--line);
  border-top-color: var(--accent);
  animation: spin .8s linear infinite;
}

/* ── CARD ── */
.dash-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
  overflow: hidden;
  margin-bottom: 0;
}
.dash-card__head {
  display: flex; align-items: center; justify-content: space-between;
  gap: 8px; padding: 14px 20px;
  border-bottom: 1px solid var(--line);
  font-size: 0.78rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.07em;
  color: var(--ink-muted);
}
.dash-card__head.clickable { cursor: pointer; user-select: none; }
.dash-card__head.clickable:hover { background: var(--surface-muted); }

/* ── KPI ── */
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 14px; margin-bottom: 16px;
}
@media (max-width: 1100px) { .kpi-grid { grid-template-columns: repeat(3,1fr); } }
@media (max-width: 680px)  { .kpi-grid { grid-template-columns: repeat(2,1fr); } }

.kpi {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
  padding: 20px 18px;
  display: flex; align-items: center; gap: 14px;
  transition: transform .2s ease, box-shadow .2s ease;
}
.kpi:hover { transform: translateY(-2px); box-shadow: var(--shadow-card); }
.kpi__icon {
  width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  background: var(--cb);
}
.kpi__value {
  font-size: 1.75rem; font-weight: 800; line-height: 1;
  color: var(--ink); font-family: var(--font-display);
}
.kpi__label {
  font-size: 0.7rem; color: var(--ink-muted);
  text-transform: uppercase; letter-spacing: 0.08em; margin-top: 4px;
}

/* ── TIMELINE ── */
.timeline {
  display: flex; align-items: flex-end; gap: 6px;
  padding: 16px 20px 16px; height: 160px;
}
.tl-col {
  flex: 1; display: flex; flex-direction: column;
  align-items: center; gap: 4px; height: 100%; cursor: default;
}
.tl-col:hover .tl-bar { filter: brightness(1.2); }
.tl-count {
  font-size: 0.63rem; color: var(--ink-muted); font-weight: 600; min-height: 14px;
}
.tl-track {
  flex: 1; width: 100%; background: var(--accent-soft);
  border-radius: 5px; display: flex; align-items: flex-end; overflow: hidden;
}
.tl-bar {
  width: 100%;
  background: linear-gradient(to top, var(--accent-strong), var(--accent));
  border-radius: 5px;
  transition: height .5s cubic-bezier(.34,1.56,.64,1);
  min-height: 2px;
}
.tl-label { font-size: 0.6rem; color: var(--ink-muted); white-space: nowrap; }

/* ── STATS ROW ── */
.stats-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 14px;
}
@media (max-width: 1000px) { .stats-row { grid-template-columns: 1fr 1fr; } }
@media (max-width: 680px)  { .stats-row { grid-template-columns: 1fr; } }
.stats-right { display: flex; flex-direction: column; gap: 14px; }

/* Bar lists */
.bar-list { padding: 14px 20px 16px; display: flex; flex-direction: column; gap: 10px; }
.bar-item__top {
  display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;
}
.bar-item__name {
  display: flex; align-items: center; gap: 5px;
  font-size: 0.82rem; color: var(--ink);
}
.bar-item__meta { font-size: 0.75rem; color: var(--ink-muted); }
.bar-item__meta b { color: var(--ink); }
.bar-track {
  height: 6px; border-radius: 999px;
  background: var(--accent-soft); overflow: hidden;
}
.bar-fill {
  height: 100%; border-radius: 999px;
  transition: width .7s cubic-bezier(.34,1.56,.64,1);
}

/* Device pills */
.device-row { padding: 12px 20px 16px; display: flex; flex-wrap: wrap; gap: 8px; }
.device-pill {
  display: flex; align-items: center; gap: 5px;
  padding: 6px 12px; border-radius: 999px;
  font-size: 0.78rem; font-weight: 500;
  border: 1.5px solid; cursor: default;
}
.device-pct { font-weight: 400; opacity: .65; margin-left: 3px; font-size: 0.7rem; }

/* Country list */
.country-list { padding: 10px 20px 14px; display: flex; flex-direction: column; gap: 7px; }
.country-row { display: flex; align-items: center; gap: 8px; }
.country-rank { width: 16px; font-size: 0.65rem; font-weight: 700; color: var(--ink-muted); text-align: center; }
.country-name { font-size: 0.8rem; color: var(--ink); min-width: 90px; }
.country-track { flex: 1; height: 5px; background: var(--accent-soft); border-radius: 999px; overflow: hidden; }
.country-bar { height: 100%; background: linear-gradient(90deg, var(--accent-strong), var(--accent)); border-radius: 999px; transition: width .6s ease; }
.country-count { font-size: 0.72rem; font-weight: 700; color: var(--ink-muted); min-width: 22px; text-align: right; }

.empty { font-size: 0.8rem; color: var(--ink-muted); font-style: italic; margin: 0; padding: 8px 0; }

/* ── FILTERS ── */
.filter-badge {
  background: var(--accent); color: #fff;
  font-size: 0.62rem; font-weight: 700;
  padding: 2px 7px; border-radius: 999px; min-width: 20px; text-align: center;
}
.clear-btn {
  display: flex; align-items: center; gap: 4px;
  font-size: 0.72rem; color: #ef4444;
  background: none; border: none; cursor: pointer; padding: 0;
  font-family: var(--font-body);
}
.clear-btn:hover { text-decoration: underline; }

.filters-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px; padding: 20px;
}
@media (max-width: 900px) { .filters-grid { grid-template-columns: repeat(2,1fr); } }
@media (max-width: 600px) { .filters-grid { grid-template-columns: 1fr; } }

.fg { display: flex; flex-direction: column; gap: 7px; }
.fg--wide { grid-column: span 2; }
@media (max-width: 900px) { .fg--wide { grid-column: span 1; } }

.fg__label {
  font-size: 0.68rem; font-weight: 700; color: var(--ink-muted);
  text-transform: uppercase; letter-spacing: 0.08em;
}
.fg__input {
  background: var(--surface-muted);
  border: 1.5px solid var(--line);
  border-radius: 10px; padding: 8px 12px;
  color: var(--ink); font-size: 0.82rem;
  font-family: var(--font-body);
  transition: border-color .2s, box-shadow .2s;
  width: 100%;
}
.fg__input:focus {
  outline: none; border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(74,143,104,0.12);
}
.fg__input--icon { padding-left: 30px; }

.chip-group { display: flex; flex-wrap: wrap; gap: 6px; }
.fchip {
  display: inline-flex; align-items: center; gap: 3px;
  padding: 4px 10px; border-radius: 999px;
  font-size: 0.74rem; cursor: pointer; user-select: none;
  background: var(--surface-muted);
  border: 1.5px solid var(--line);
  color: var(--ink-muted);
  transition: all .15s ease;
}
.fchip:hover { border-color: var(--accent); color: var(--accent-strong); background: var(--accent-soft); }
.fchip--on { background: var(--accent-soft); border-color: var(--accent); color: var(--accent-strong); font-weight: 600; }

/* expand anim */
.expand-enter-active, .expand-leave-active { transition: opacity .2s, transform .2s; }
.expand-enter-from, .expand-leave-to { opacity: 0; transform: translateY(-6px); }

/* ── TABLE ── */
.result-pill {
  font-size: 0.72rem; font-weight: 400;
  color: var(--ink-muted);
  background: var(--surface-muted);
  border: 1px solid var(--line);
  padding: 2px 10px; border-radius: 999px;
}
.table-search { width: 200px; }

.adm-table :deep(th) {
  font-size: 0.68rem !important;
  text-transform: uppercase !important;
  letter-spacing: 0.08em !important;
  color: var(--ink-muted) !important;
  background: var(--surface-muted) !important;
  border-bottom: 1.5px solid var(--line) !important;
  white-space: nowrap;
}
.adm-table :deep(tr:hover td) { background: var(--accent-soft-2) !important; }
.adm-table :deep(td) {
  border-bottom: 1px solid var(--line) !important;
  color: var(--ink) !important;
}

.mono { font-family: 'JetBrains Mono', 'Fira Code', ui-monospace, monospace; }
.ip-pill {
  display: inline-block;
  background: var(--accent-soft);
  border: 1px solid rgba(74,143,104,0.3);
  color: var(--accent-strong);
  padding: 2px 8px; border-radius: 6px;
  font-size: 0.72rem;
}
</style>
