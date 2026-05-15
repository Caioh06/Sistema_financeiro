/* ========= CommitPay - Versão Corrigida ========= */

/* ---------- Icons (inline SVG) ---------- */
const ICONS = {
  dashboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>',
  swap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  wallet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4z"/></svg>',
  pie: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>',
  arrowUp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>',
  arrowDown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="17" y1="7" x2="7" y2="17"/><polyline points="17 17 7 17 7 7"/></svg>',
  trending: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
  piggy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z"/><path d="M16 11h0"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  minus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  pencil: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
  more: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>',
  filter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  chevronLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',
  chevronRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',
};

/* ---------- Categories & defaults ---------- */
const DEFAULT_CATEGORIES = [
  { id: 'salary', name: 'Salário', type: 'income', color: '#10b981' },
  { id: 'freelance', name: 'Freelance', type: 'income', color: '#06b6d4' },
  { id: 'investments', name: 'Investimentos', type: 'income', color: '#8b5cf6' },
  { id: 'food', name: 'Alimentação', type: 'expense', color: '#f59e0b' },
  { id: 'transport', name: 'Transporte', type: 'expense', color: '#3b82f6' },
  { id: 'housing', name: 'Moradia', type: 'expense', color: '#ef4444' },
  { id: 'leisure', name: 'Lazer', type: 'expense', color: '#ec4899' },
  { id: 'health', name: 'Saúde', type: 'expense', color: '#14b8a6' },
  { id: 'education', name: 'Educação', type: 'expense', color: '#6366f1' },
  { id: 'shopping', name: 'Compras', type: 'expense', color: '#a855f7' },
  { id: 'other', name: 'Outros', type: 'both', color: '#64748b' },
];

const STORAGE_KEY = 'commitpay:state:v1';

function seedDemo() {
  const now = new Date();
  const ymd = (d) => { const offset = d.getTimezoneOffset() * 60000; return new Date(d.getTime() - offset).toISOString().slice(0, 10); };
  const mk = (daysAgo) => { const d = new Date(now); d.setDate(d.getDate() - daysAgo); return ymd(d); };
  const currentMonthStr = ymd(now).slice(0, 7);
  return {
    categories: DEFAULT_CATEGORIES,
    transactions: [
      { id: 't1', type: 'income', amount: 6500, description: 'Salário mensal', categoryId: 'salary', date: mk(2) },
      { id: 't2', type: 'income', amount: 1200, description: 'Projeto site', categoryId: 'freelance', date: mk(7) },
      { id: 't3', type: 'expense', amount: 1800, description: 'Aluguel', categoryId: 'housing', date: mk(5) },
      { id: 't4', type: 'expense', amount: 480, description: 'Supermercado', categoryId: 'food', date: mk(4) },
      { id: 't5', type: 'expense', amount: 220, description: 'Uber', categoryId: 'transport', date: mk(3) },
      { id: 't6', type: 'expense', amount: 150, description: 'Cinema e jantar', categoryId: 'leisure', date: mk(1) },
    ],
    goals: [
      { id: 'g1', name: 'Viagem Europa', target: 15000, saved: 4200, deadline: '2026-12-01', color: '#06b6d4' },
      { id: 'g2', name: 'Reserva de emergência', target: 20000, saved: 8500, deadline: '2026-08-01', color: '#10b981' },
    ],
    budgets: [
      { id: 'b1', categoryId: 'food', limit: 800, month: currentMonthStr },
      { id: 'b2', categoryId: 'transport', limit: 400, month: currentMonthStr },
    ],
  };
}

let state;
try {
  const raw = localStorage.getItem(STORAGE_KEY);
  state = raw ? JSON.parse(raw) : seedDemo();
 
  if (!state || !state.transactions || !state.categories || !state.budgets || !state.goals) {
    throw new Error("Estado corrompido");
  }
} catch (e) { 
  state = seedDemo(); 
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); 
}

function persist() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function uid() { return Math.random().toString(36).slice(2, 11); }

/* ---------- Funções Utilitárias ---------- */

function parseCurrency(val) {
  if (typeof val === 'number') return val;
  const str = String(val).trim();
  if (!str) return 0;
  if (str.includes('.') && str.includes(',')) return parseFloat(str.replace(/\./g, '').replace(',', '.'));
  if (str.includes(',')) return parseFloat(str.replace(',', '.'));
  return parseFloat(str);
}

const formatBRL = (n) => Number(n || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const currentMonth = () => { const d = new Date(); const offset = d.getTimezoneOffset() * 60000; return new Date(d.getTime() - offset).toISOString().slice(0, 7); };
const isoDay = (d) => { const offset = d.getTimezoneOffset() * 60000; return new Date(d.getTime() - offset).toISOString().slice(0, 10); };
function shiftMonth(ym, delta) {
  const [y, m] = ym.split('-').map(Number);
  const d = new Date(y, m - 1 + delta, 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}
function monthLabel(ym) {
  return new Date(ym + '-02').toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
}
function fmtDate(iso) { return new Date(iso + 'T12:00:00').toLocaleDateString('pt-BR'); }
function escapeHtml(s) { return String(s || '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
function getCat(id) { return state.categories.find((c) => c.id === id); }

/* ---------- Toast ---------- */
function toast(msg, type = 'info') {
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.textContent = msg;
  const toaster = document.getElementById('toaster');
  if(toaster) {
      toaster.appendChild(t);
      setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity .2s'; setTimeout(() => t.remove(), 200); }, 2500);
  }
}

/* ---------- Routing ---------- */
const ROUTES = [
  { id: 'dashboard', label: 'Dashboard', icon: ICONS.dashboard },
  { id: 'transactions', label: 'Transações', icon: ICONS.swap },
  { id: 'goals', label: 'Metas', icon: ICONS.target },
  { id: 'budget', label: 'Orçamento', icon: ICONS.wallet },
  { id: 'reports', label: 'Relatórios', icon: ICONS.pie },
];

let currentRoute = 'dashboard';
let currentCharts = [];

function destroyCharts() { currentCharts.forEach((c) => c.destroy()); currentCharts = []; }

function navigateTo(id) {
  currentRoute = id;
  location.hash = id;
  render();
  closeDrawer();
}

window.addEventListener('hashchange', () => {
  const id = location.hash.replace('#', '') || 'dashboard';
  if (ROUTES.find((r) => r.id === id)) { currentRoute = id; render(); }
});

/* ---------- Sidebar / nav ---------- */
function renderNav() {
  const html = ROUTES.map((r) => `
    <button class="nav-item ${r.id === currentRoute ? 'active' : ''}" data-route="${r.id}">
      ${r.icon}<span>${r.label}</span>
    </button>`).join('');
  document.getElementById('nav').innerHTML = html;
  document.getElementById('navMobile').innerHTML = html;
  document.querySelectorAll('[data-route]').forEach((el) => {
    el.addEventListener('click', () => navigateTo(el.dataset.route));
  });
  const cur = ROUTES.find((r) => r.id === currentRoute);
  document.getElementById('topbarTitle').textContent = cur ? cur.label : '';
}

function openDrawer() { const d = document.getElementById('drawer'); d.hidden = false; }
function closeDrawer() { const d = document.getElementById('drawer'); d.hidden = true; }
document.getElementById('menuBtn').addEventListener('click', openDrawer);
document.querySelectorAll('[data-close]').forEach((el) => el.addEventListener('click', () => { closeDrawer(); closeModal(); }));

/* ---------- Render ---------- */
function render() {
  destroyCharts();
  renderNav();
  const view = document.getElementById('view');
  if(!view) return;
  switch (currentRoute) {
    case 'transactions': renderTransactions(view); break;
    case 'goals': renderGoals(view); break;
    case 'budget': renderBudget(view); break;
    case 'reports': renderReports(view); break;
    default: renderDashboard(view);
  }
}

/* ====================== DASHBOARD ====================== */
function renderDashboard(root) {
  const month = currentMonth();
  const monthTx = state.transactions.filter((t) => t.date.startsWith(month));
  const income = monthTx.filter((t) => t.type === 'income').reduce((s, t) => s + t.amount, 0);
  const expense = monthTx.filter((t) => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
  const balance = state.transactions.reduce((s, t) => s + (t.type === 'income' ? t.amount : -t.amount), 0);
  const totalSaved = state.goals.reduce((s, g) => s + g.saved, 0);

  const last7 = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(); d.setDate(d.getDate() - i);
    const key = isoDay(d);
    const dayTx = state.transactions.filter((t) => t.date === key);
    last7.push({
      date: d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' }),
      receitas: dayTx.filter((t) => t.type === 'income').reduce((s, t) => s + t.amount, 0),
      despesas: dayTx.filter((t) => t.type === 'expense').reduce((s, t) => s + t.amount, 0),
    });
  }

  const expByCatMap = new Map();
  monthTx.filter((t) => t.type === 'expense').forEach((t) => expByCatMap.set(t.categoryId, (expByCatMap.get(t.categoryId) || 0) + t.amount));
  const expByCat = Array.from(expByCatMap.entries()).map(([id, v]) => ({ name: getCat(id)?.name || '—', value: v, color: getCat(id)?.color || '#94a3b8' }));

  const recent = state.transactions.slice().sort((a, b) => b.date.localeCompare(a.date)).slice(0, 5);

  root.innerHTML = `
    <div class="page-header">
      <div>
        <h1 class="page-title">Bem-vindo de volta</h1>
        <p class="page-desc" style="text-transform:none">Resumo financeiro do seu mês</p>
      </div>
      <button class="btn" id="newTxBtn">${ICONS.plus} Nova transação</button>
    </div>

    <div class="grid grid-4 section">
      ${statCard('Saldo total', formatBRL(balance), ICONS.wallet, 'primary')}
      ${statCard('Receitas do mês', formatBRL(income), ICONS.arrowUp, 'income')}
      ${statCard('Despesas do mês', formatBRL(expense), ICONS.arrowDown, 'expense')}
      ${statCard('Total guardado', formatBRL(totalSaved), ICONS.piggy, 'accent')}
    </div>

    <div class="grid section" style="grid-template-columns:1fr">
      <div class="card" style="grid-column:1/-1">
        <div class="card-header">
          <div><h2 class="card-title">Fluxo dos últimos 7 dias</h2><p class="card-subtitle">Receitas vs despesas</p></div>
          <span style="color:var(--muted)">${ICONS.trending}</span>
        </div>
        <div class="chart-wrap"><canvas id="flowChart"></canvas></div>
      </div>
    </div>

    <div class="grid grid-2 section">
      <div class="card">
        <div class="card-header"><div><h2 class="card-title">Despesas por categoria</h2><p class="card-subtitle">No mês atual</p></div></div>
        <div class="chart-wrap-sm">${expByCat.length === 0 ? '<div class="chart-empty">Sem despesas no mês</div>' : '<canvas id="expCat"></canvas>'}</div>
      </div>
      <div class="card">
        <h2 class="card-title" style="margin-bottom:14px">Transações recentes</h2>
        <div class="tx-list">
          ${recent.length === 0 ? '<p style="color:var(--muted);font-size:13px">Nenhuma transação ainda.</p>' : recent.map(txRow).join('')}
        </div>
      </div>
    </div>

    <div class="card section">
      <h2 class="card-title" style="margin-bottom:14px">Progresso de orçamentos</h2>
      <div style="display:flex;flex-direction:column;gap:14px">
        ${state.budgets.filter(b => b.month === month).length === 0 ? '<p style="color:var(--muted);font-size:13px">Sem orçamentos definidos.</p>' :
          state.budgets.filter(b => b.month === month).map((b) => {
            const cat = getCat(b.categoryId);
            const spent = monthTx.filter((t) => t.type === 'expense' && t.categoryId === b.categoryId).reduce((s, t) => s + t.amount, 0);
            const pct = Math.min(100, (spent / b.limit) * 100);
            return `
              <div>
                <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px">
                  <span style="font-weight:500">${escapeHtml(cat?.name || '—')}</span>
                  <span style="color:var(--muted)">${formatBRL(spent)} / ${formatBRL(b.limit)}</span>
                </div>
                <div class="progress"><div class="progress-bar" style="width:${pct}%"></div></div>
              </div>`;
          }).join('')}
      </div>
    </div>
  `;

  document.getElementById('newTxBtn').onclick = () => openTxModal();

  // Inicialização Segura de Gráficos
  setTimeout(() => {
      const flowEl = document.getElementById('flowChart');
      if(flowEl && window.Chart) {
          const flowCtx = flowEl.getContext('2d');
          const gradInc = flowCtx.createLinearGradient(0, 0, 0, 280);
          gradInc.addColorStop(0, 'rgba(45,212,191,0.4)'); gradInc.addColorStop(1, 'rgba(45,212,191,0)');
          const gradExp = flowCtx.createLinearGradient(0, 0, 0, 280);
          gradExp.addColorStop(0, 'rgba(248,113,113,0.4)'); gradExp.addColorStop(1, 'rgba(248,113,113,0)');
          currentCharts.push(new Chart(flowEl, {
            type: 'line',
            data: {
              labels: last7.map((d) => d.date),
              datasets: [
                { label: 'Receitas', data: last7.map((d) => d.receitas), borderColor: '#2dd4bf', backgroundColor: gradInc, fill: true, tension: 0.35, borderWidth: 2, pointRadius: 3 },
                { label: 'Despesas', data: last7.map((d) => d.despesas), borderColor: '#f87171', backgroundColor: gradExp, fill: true, tension: 0.35, borderWidth: 2, pointRadius: 3 },
              ],
            },
            options: chartOpts({ legend: true, currency: true }),
          }));
      }

      if (expByCat.length && window.Chart) {
        const expEl = document.getElementById('expCat');
        if(expEl) {
            currentCharts.push(new Chart(expEl, {
              type: 'doughnut',
              data: { labels: expByCat.map((d) => d.name), datasets: [{ data: expByCat.map((d) => d.value), backgroundColor: expByCat.map((d) => d.color), borderColor: 'transparent', borderWidth: 2 }] },
              options: { ...chartOpts({ legend: true, currency: true }), cutout: '60%' },
            }));
        }
      }
  }, 50);
}

function statCard(label, value, icon, tone = 'primary') {
  return `
    <div class="stat-card">
      <div class="stat-row">
        <div style="min-width:0">
          <p class="stat-label">${label}</p>
          <p class="stat-value">${value}</p>
        </div>
        <div class="stat-icon stat-icon--${tone}">${icon}</div>
      </div>
    </div>`;
}

function txRow(t) {
  const cat = getCat(t.categoryId);
  const color = cat?.color || '#94a3b8';
  return `
    <div class="tx-row">
      <div class="tx-left">
        <div class="tx-icon" style="background:${color}22;color:${color}">${t.type === 'income' ? ICONS.arrowUp : ICONS.arrowDown}</div>
        <div style="min-width:0">
          <p class="tx-name">${escapeHtml(t.description)}</p>
          <p class="tx-meta">${escapeHtml(cat?.name || '—')} • ${fmtDate(t.date)}</p>
        </div>
      </div>
      <span class="tx-amount ${t.type}">${t.type === 'income' ? '+' : '-'}${formatBRL(t.amount)}</span>
    </div>`;
}

function chartOpts({ legend = false, currency = false } = {}) {
  return {
    responsive: true, maintainAspectRatio: false,
    plugins: {
      legend: { display: legend, labels: { color: '#8b95a3', font: { size: 11 } } },
      tooltip: {
        backgroundColor: '#1c2128', borderColor: '#2c333d', borderWidth: 1,
        titleColor: '#e8edf3', bodyColor: '#e8edf3',
        callbacks: currency ? { label: (ctx) => `${ctx.dataset.label || ctx.label}: ${formatBRL(ctx.parsed.y ?? ctx.parsed)}` } : {},
      },
    },
    scales: {
      x: { ticks: { color: '#8b95a3', font: { size: 11 } }, grid: { color: '#2c333d' } },
      y: { ticks: { color: '#8b95a3', font: { size: 11 } }, grid: { color: '#2c333d' } },
    },
  };
}

/* ====================== TRANSACTIONS ====================== */
const txFilters = { q: '', type: 'all', cat: 'all', sort: 'date-desc', preset: 'all', from: '', to: '', min: '', max: '' };
let showFilters = false;

function renderTransactions(root) {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  let fromDate = null, toDate = null;
  if (txFilters.preset === 'custom') { fromDate = txFilters.from || null; toDate = txFilters.to || null; }
  else if (txFilters.preset === 'month') { fromDate = isoDay(new Date(today.getFullYear(), today.getMonth(), 1)); toDate = isoDay(today); }
  else if (txFilters.preset === '7d' || txFilters.preset === '30d') {
    const days = txFilters.preset === '7d' ? 6 : 29;
    const f = new Date(today); f.setDate(f.getDate() - days);
    fromDate = isoDay(f); toDate = isoDay(today);
  }
  const min = parseCurrency(txFilters.min) || 0;
  const max = txFilters.max ? parseCurrency(txFilters.max) : Infinity;

  const filtered = state.transactions.filter((t) => {
    if (txFilters.type !== 'all' && t.type !== txFilters.type) return false;
    if (txFilters.cat !== 'all' && t.categoryId !== txFilters.cat) return false;
    if (txFilters.q && !t.description.toLowerCase().includes(txFilters.q.toLowerCase())) return false;
    if (fromDate && t.date < fromDate) return false;
    if (toDate && t.date > toDate) return false;
    if (t.amount < min || t.amount > max) return false;
    return true;
  }).sort((a, b) => {
    switch (txFilters.sort) {
      case 'date-asc': return a.date.localeCompare(b.date);
      case 'amount-desc': return b.amount - a.amount;
      case 'amount-asc': return a.amount - b.amount;
      default: return b.date.localeCompare(a.date);
    }
  });

  const totIncome = filtered.filter((t) => t.type === 'income').reduce((s, t) => s + t.amount, 0);
  const totExpense = filtered.filter((t) => t.type === 'expense').reduce((s, t) => s + t.amount, 0);

  const active = (txFilters.q ? 1 : 0) + (txFilters.type !== 'all' ? 1 : 0) + (txFilters.cat !== 'all' ? 1 : 0)
    + (txFilters.preset !== 'all' ? 1 : 0) + (txFilters.min ? 1 : 0) + (txFilters.max ? 1 : 0);

  root.innerHTML = `
    <div class="page-header">
      <div>
        <h1 class="page-title">Transações</h1>
        <p class="page-desc" style="text-transform:none">Gerencie suas receitas e despesas</p>
      </div>
      <button class="btn" id="newTxBtn">${ICONS.plus} Nova</button>
    </div>

    <div class="filters-bar">
      <div class="filters-top">
        <div class="search-wrap">
          <span class="search-icon">${ICONS.search}</span>
          <input class="input input-search" id="fq" placeholder="Buscar descrição..." value="${escapeHtml(txFilters.q)}" />
        </div>
        <select class="select" id="fsort" style="width:auto;min-width:170px">
          <option value="date-desc"${txFilters.sort === 'date-desc' ? ' selected' : ''}>Mais recentes</option>
          <option value="date-asc"${txFilters.sort === 'date-asc' ? ' selected' : ''}>Mais antigas</option>
          <option value="amount-desc"${txFilters.sort === 'amount-desc' ? ' selected' : ''}>Maior valor</option>
          <option value="amount-asc"${txFilters.sort === 'amount-asc' ? ' selected' : ''}>Menor valor</option>
        </select>
        <button class="btn btn-outline" id="ftoggle">${ICONS.filter} Filtros${active ? `<span class="badge">${active}</span>` : ''}</button>
      </div>
      ${showFilters ? `
        <div class="filters-grid">
          <div class="field"><label class="label">Tipo</label>
            <select class="select" id="ftype">
              <option value="all"${txFilters.type === 'all' ? ' selected' : ''}>Todos</option>
              <option value="income"${txFilters.type === 'income' ? ' selected' : ''}>Receitas</option>
              <option value="expense"${txFilters.type === 'expense' ? ' selected' : ''}>Despesas</option>
            </select>
          </div>
          <div class="field"><label class="label">Categoria</label>
            <select class="select" id="fcat">
              <option value="all"${txFilters.cat === 'all' ? ' selected' : ''}>Todas</option>
              ${state.categories.map((c) => `<option value="${c.id}"${txFilters.cat === c.id ? ' selected' : ''}>${escapeHtml(c.name)}</option>`).join('')}
            </select>
          </div>
          <div class="field"><label class="label">Período</label>
            <select class="select" id="fpreset">
              <option value="all"${txFilters.preset === 'all' ? ' selected' : ''}>Todo período</option>
              <option value="7d"${txFilters.preset === '7d' ? ' selected' : ''}>Últimos 7 dias</option>
              <option value="30d"${txFilters.preset === '30d' ? ' selected' : ''}>Últimos 30 dias</option>
              <option value="month"${txFilters.preset === 'month' ? ' selected' : ''}>Este mês</option>
              <option value="custom"${txFilters.preset === 'custom' ? ' selected' : ''}>Personalizado</option>
            </select>
          </div>
          ${txFilters.preset === 'custom' ? `
            <div class="field"><label class="label">De</label><input type="date" class="input" id="ffrom" value="${txFilters.from}"/></div>
            <div class="field"><label class="label">Até</label><input type="date" class="input" id="fto" value="${txFilters.to}"/></div>
          ` : ''}
          <div class="field"><label class="label">Valor mínimo (R$)</label><input class="input" id="fmin" placeholder="0,00" value="${escapeHtml(txFilters.min)}"/></div>
          <div class="field"><label class="label">Valor máximo (R$)</label><input class="input" id="fmax" placeholder="Sem limite" value="${escapeHtml(txFilters.max)}"/></div>
          ${active ? `<div style="display:flex;align-items:end;grid-column:1/-1"><button class="btn btn-ghost" id="fclear">${ICONS.x} Limpar filtros</button></div>` : ''}
        </div>` : ''}
    </div>

    <div class="grid grid-3 section">
      <div class="pill"><p class="pill-label">Resultados</p><p class="pill-value">${filtered.length}</p></div>
      <div class="pill"><p class="pill-label">Receitas</p><p class="pill-value success">${formatBRL(totIncome)}</p></div>
      <div class="pill"><p class="pill-label">Despesas</p><p class="pill-value danger">${formatBRL(totExpense)}</p></div>
    </div>

    <div class="table-wrap">
      <table class="table">
        <thead><tr>
          <th>Descrição</th><th>Categoria</th><th>Data</th><th class="right">Valor</th><th></th>
        </tr></thead>
        <tbody>
          ${filtered.length === 0 ? '<tr><td colspan="5" style="text-align:center;color:var(--muted);padding:48px 16px">Nenhuma transação encontrada</td></tr>' :
            filtered.map((t) => {
              const cat = getCat(t.categoryId); const color = cat?.color || '#94a3b8';
              return `<tr>
                <td><div class="tx-left"><div class="tx-icon" style="width:32px;height:32px;background:${color}22;color:${color}">${t.type === 'income' ? ICONS.arrowUp : ICONS.arrowDown}</div><span style="font-weight:500">${escapeHtml(t.description)}</span></div></td>
                <td style="color:var(--muted)">${escapeHtml(cat?.name || '—')}</td>
                <td style="color:var(--muted)">${fmtDate(t.date)}</td>
                <td class="right tx-amount ${t.type}">${t.type === 'income' ? '+' : '-'}${formatBRL(t.amount)}</td>
                <td class="right"><button class="icon-link" data-del-tx="${t.id}" aria-label="Excluir">${ICONS.trash}</button></td>
              </tr>`;
            }).join('')}
        </tbody>
      </table>
      <div class="tx-cards">
        ${filtered.length === 0 ? '<p style="text-align:center;color:var(--muted);padding:48px 16px">Nenhuma transação encontrada</p>' :
          filtered.map((t) => {
            const cat = getCat(t.categoryId); const color = cat?.color || '#94a3b8';
            return `<div class="tx-card">
              <div class="tx-left">
                <div class="tx-icon" style="background:${color}22;color:${color}">${t.type === 'income' ? ICONS.arrowUp : ICONS.arrowDown}</div>
                <div style="min-width:0">
                  <p class="tx-name">${escapeHtml(t.description)}</p>
                  <p class="tx-meta">${escapeHtml(cat?.name || '—')} • ${fmtDate(t.date)}</p>
                </div>
              </div>
              <div style="display:flex;align-items:center;gap:8px">
                <span class="tx-amount ${t.type}">${t.type === 'income' ? '+' : '-'}${formatBRL(t.amount)}</span>
                <button class="icon-link" data-del-tx="${t.id}" aria-label="Excluir">${ICONS.trash}</button>
              </div>
            </div>`;
          }).join('')}
      </div>
    </div>
  `;

  document.getElementById('newTxBtn').onclick = () => openTxModal();
  document.getElementById('fq').oninput = (e) => { 
    // Guarda a posição exata onde o cursor estava
    const cursorPosition = e.target.selectionStart; 
    
    txFilters.q = e.target.value; 
    renderTransactions(root); 
    
    // Devolve o foco para o campo e coloca o cursor no lugar certo
    const inputBusca = document.getElementById('fq');
    inputBusca.focus(); 
    inputBusca.setSelectionRange(cursorPosition, cursorPosition); 
  };
  document.getElementById('fsort').onchange = (e) => { txFilters.sort = e.target.value; renderTransactions(root); };
  document.getElementById('ftoggle').onclick = () => { showFilters = !showFilters; renderTransactions(root); };
  if (showFilters) {
    document.getElementById('ftype').onchange = (e) => { txFilters.type = e.target.value; renderTransactions(root); };
    document.getElementById('fcat').onchange = (e) => { txFilters.cat = e.target.value; renderTransactions(root); };
    document.getElementById('fpreset').onchange = (e) => { txFilters.preset = e.target.value; renderTransactions(root); };
    if (txFilters.preset === 'custom') {
      document.getElementById('ffrom').onchange = (e) => { txFilters.from = e.target.value; renderTransactions(root); };
      document.getElementById('fto').onchange = (e) => { txFilters.to = e.target.value; renderTransactions(root); };
    }
    document.getElementById('fmin').oninput = (e) => { txFilters.min = e.target.value; };
    document.getElementById('fmin').onblur = () => renderTransactions(root);
    document.getElementById('fmax').oninput = (e) => { txFilters.max = e.target.value; };
    document.getElementById('fmax').onblur = () => renderTransactions(root);
    const clr = document.getElementById('fclear');
    if (clr) clr.onclick = () => { Object.assign(txFilters, { q: '', type: 'all', cat: 'all', sort: 'date-desc', preset: 'all', from: '', to: '', min: '', max: '' }); renderTransactions(root); };
  }
  document.querySelectorAll('[data-del-tx]').forEach((b) => b.onclick = () => {
    const id = b.dataset.delTx;
    const tx = state.transactions.find((t) => t.id === id); // Encontra qual foi a transação clicada
    
    // Chama o modal de confirmação antes de apagar
    confirmDialog({ 
      title: 'Excluir Transação?', 
      desc: `Tem certeza que deseja excluir "<b>${escapeHtml(tx.description)}</b>" no valor de ${formatBRL(tx.amount)}?`, 
      onOk: () => { 
        // Se o usuário clicar em "Excluir", ele roda o código para apagar
        state.transactions = state.transactions.filter((t) => t.id !== id); 
        persist(); 
        toast('Transação removida', 'success'); 
        render(); 
      } 
    });
  });
}

/* ====================== TRANSACTION MODAL ====================== */
let txModal = { type: 'expense', amount: '', description: '', categoryId: '', date: isoDay(new Date()) };

function openTxModal() {
  txModal = { type: 'expense', amount: '', description: '', categoryId: '', date: isoDay(new Date()) };
  showModal(renderTxModal());
}

function renderTxModal() {
  const validCats = state.categories.filter((c) => c.type === txModal.type || c.type === 'both');
  return `
    <h3 class="modal-title">Nova transação</h3>
    <form class="form" id="txForm">
      <div class="type-toggle">
        <button type="button" class="${txModal.type === 'expense' ? 'active expense' : ''}" data-tx-type="expense">Despesa</button>
        <button type="button" class="${txModal.type === 'income' ? 'active income' : ''}" data-tx-type="income">Receita</button>
      </div>
      <div class="field"><label class="label">Valor (R$)</label><input class="input" id="txAmt" placeholder="0,00" inputmode="decimal" value="${escapeHtml(txModal.amount)}"/></div>
      <div class="field"><label class="label">Descrição</label><input class="input" id="txDesc" placeholder="Ex: Mercado da semana" maxlength="80" value="${escapeHtml(txModal.description)}"/></div>
      
      <div class="field"><label class="label">Categoria</label>
        <select class="select" id="txCat">
          <option value="">Selecione</option>
          ${validCats.map((c) => `<option value="${c.id}"${txModal.categoryId === c.id ? ' selected' : ''}>${escapeHtml(c.name)}</option>`).join('')}
        </select>
      </div>

      <div class="field" style="display:flex; align-items:center; gap:8px;">
        <input type="checkbox" id="txRecurring" style="width:auto; cursor:pointer;">
        <label for="txRecurring" style="margin:0; font-size:14px; cursor:pointer;">Repetir por 12 meses (Fixa)</label>
      </div>

      <div class="field"><label class="label">Data</label><input type="date" class="input" id="txDate" value="${txModal.date}"/></div>
      
      <div class="modal-actions">
        <button type="button" class="btn btn-ghost" onclick="closeModal()">Cancelar</button>
        <button type="submit" class="btn">Salvar</button>
      </div>
    </form>`;
}

function bindTxModal() {
  document.querySelectorAll('[data-tx-type]').forEach((b) => b.onclick = () => {
    txModal.type = b.dataset.txType; txModal.categoryId = '';
    document.getElementById('modalPanel').innerHTML = renderTxModal(); bindTxModal();
  });
  document.getElementById('txForm').onsubmit = (e) => {
    e.preventDefault();
    const amt = parseCurrency(document.getElementById('txAmt').value);
    const desc = document.getElementById('txDesc').value.trim();
    const cat = document.getElementById('txCat').value;
    const dt = document.getElementById('txDate').value;
    if (!amt || amt <= 0) return toast('Informe um valor válido', 'error');
    if (!desc) return toast('Informe uma descrição', 'error');
    if (!cat) return toast('Selecione uma categoria', 'error');
    const isRecurring = document.getElementById('txRecurring') && document.getElementById('txRecurring').checked;
    
    if (isRecurring) {
        // Se for recorrente, cria 12 cópias lançando para os meses seguintes
        for (let i = 0; i < 12; i++) {
            let nextDate = new Date(dt + 'T12:00:00'); // Evita bugs de fuso horário
            nextDate.setMonth(nextDate.getMonth() + i);
            let nextDtStr = nextDate.toISOString().slice(0,10);
            let descRec = i === 0 ? desc : `${desc} (${i+1}/12)`;
            state.transactions.unshift({ id: uid(), type: txModal.type, amount: amt, description: descRec, categoryId: cat, date: nextDtStr });
        }
        toast('12 transações fixas adicionadas', 'success');
    } else {
        // Transação normal única
        state.transactions.unshift({ id: uid(), type: txModal.type, amount: amt, description: desc, categoryId: cat, date: dt });
        toast('Transação adicionada', 'success');
    }
    persist(); 
    closeModal(); 
    render();
  };
}

/* ====================== GOALS ====================== */
const GOAL_COLORS = ['#10b981', '#06b6d4', '#8b5cf6', '#f59e0b', '#ec4899', '#3b82f6'];
let openMenuId = null;

function renderGoals(root) {
  root.innerHTML = `
    <div class="page-header">
      <div><h1 class="page-title">Metas</h1><p class="page-desc" style="text-transform:none">Defina objetivos e acompanhe seu progresso</p></div>
      <button class="btn" id="newGoalBtn">${ICONS.plus} Nova meta</button>
    </div>
    ${state.goals.length === 0 ? `<div class="empty">${ICONS.target}<p>Crie sua primeira meta para começar</p></div>` :
      `<div class="grid grid-3">${state.goals.map(goalCard).join('')}</div>`}
  `;
  document.getElementById('newGoalBtn').onclick = () => openGoalModal();
  bindGoalActions();
}

function goalCard(g) {
  const pct = Math.min(100, (g.saved / g.target) * 100);
  const remaining = Math.max(0, g.target - g.saved);
  return `
    <div class="gb-card">
      <div class="gb-head">
        <div class="gb-icon-wrap">
          <div class="gb-icon" style="background:${g.color}22;color:${g.color}">${ICONS.target}</div>
          <div><h3 class="gb-title">${escapeHtml(g.name)}</h3><p class="gb-sub">Meta: ${fmtDate(g.deadline)}</p></div>
        </div>
        <div class="menu-wrap">
          <button class="menu-btn" data-menu="${g.id}">${ICONS.more}</button>
          ${openMenuId === g.id ? `<div class="menu">
            <button data-edit-goal="${g.id}">${ICONS.pencil} Editar</button>
            <hr>
            <button class="danger" data-del-goal="${g.id}">${ICONS.trash} Excluir</button>
          </div>` : ''}
        </div>
      </div>
      <div class="gb-progress-row"><span style="font-weight:600">${formatBRL(g.saved)}</span><span style="color:var(--muted)">de ${formatBRL(g.target)}</span></div>
      <div class="progress"><div class="progress-bar" style="width:${pct}%"></div></div>
      <p class="gb-foot">Faltam ${formatBRL(remaining)} (${pct.toFixed(0)}% concluído)</p>
      <div class="gb-actions">
        <input class="input" id="ga-${g.id}" placeholder="Valor" inputmode="decimal"/>
        <button class="btn btn-outline btn-icon" data-goal-sub="${g.id}">${ICONS.minus}</button>
        <button class="btn btn-icon" data-goal-add="${g.id}">${ICONS.plus}</button>
      </div>
    </div>`;
}

function bindGoalActions() {
  document.querySelectorAll('[data-menu]').forEach((b) => b.onclick = (e) => {
    e.stopPropagation(); openMenuId = openMenuId === b.dataset.menu ? null : b.dataset.menu; render();
  });
  document.querySelectorAll('[data-edit-goal]').forEach((b) => b.onclick = () => { openMenuId = null; openGoalModal(state.goals.find((g) => g.id === b.dataset.editGoal)); });
  document.querySelectorAll('[data-del-goal]').forEach((b) => b.onclick = () => {
    const g = state.goals.find((x) => x.id === b.dataset.delGoal); openMenuId = null;
    confirmDialog({ title: 'Excluir meta?', desc: `"${escapeHtml(g.name)}" será excluída permanentemente.`, onOk: () => { state.goals = state.goals.filter((x) => x.id !== g.id); persist(); toast('Meta excluída', 'success'); render(); } });
  });
  document.querySelectorAll('[data-goal-add]').forEach((b) => b.onclick = () => adjustGoal(b.dataset.goalAdd, 1));
  document.querySelectorAll('[data-goal-sub]').forEach((b) => b.onclick = () => adjustGoal(b.dataset.goalSub, -1));
}

function adjustGoal(id, sign) {
  const inp = document.getElementById('ga-' + id);
  const v = parseCurrency(inp.value);
  if (!v || v <= 0) return toast('Informe um valor válido', 'error');
  const g = state.goals.find((x) => x.id === id);
  g.saved = Math.max(0, g.saved + sign * v);
  persist(); toast(sign > 0 ? 'Depósito registrado' : 'Retirada registrada', 'success'); render();
}

let goalForm = null;
function openGoalModal(goal) {
  goalForm = goal ? { ...goal } : { name: '', target: '', saved: '', deadline: '', color: GOAL_COLORS[0] };
  showModal(renderGoalModal(!!goal));
  document.getElementById('goalForm').onsubmit = (e) => {
    e.preventDefault();
    const t = parseCurrency(goalForm.target);
    const s = parseCurrency(goalForm.saved || '0');
    if (!goalForm.name.trim()) return toast('Informe o nome', 'error');
    if (!t || t <= 0) return toast('Informe a meta', 'error');
    if (!goalForm.deadline) return toast('Informe o prazo', 'error');
    if (goal) { Object.assign(goal, { name: goalForm.name.trim(), target: t, saved: s, deadline: goalForm.deadline, color: goalForm.color }); toast('Meta atualizada', 'success'); }
    else { state.goals.push({ id: uid(), name: goalForm.name.trim(), target: t, saved: s, deadline: goalForm.deadline, color: goalForm.color }); toast('Meta criada', 'success'); }
    persist(); closeModal(); render();
  };
  document.getElementById('gName').oninput = (e) => goalForm.name = e.target.value;
  document.getElementById('gTarget').oninput = (e) => goalForm.target = e.target.value;
  document.getElementById('gSaved').oninput = (e) => goalForm.saved = e.target.value;
  document.getElementById('gDeadline').oninput = (e) => goalForm.deadline = e.target.value;
  document.querySelectorAll('[data-color]').forEach((b) => b.onclick = () => {
    goalForm.color = b.dataset.color;
    document.querySelectorAll('[data-color]').forEach((x) => x.classList.toggle('active', x.dataset.color === goalForm.color));
  });
}

function renderGoalModal(isEdit) {
  return `
    <h3 class="modal-title">${isEdit ? 'Editar meta' : 'Nova meta'}</h3>
    <form class="form" id="goalForm">
      <div class="field"><label class="label">Nome</label><input class="input" id="gName" maxlength="60" placeholder="Ex: Viagem para Itália" value="${escapeHtml(goalForm.name)}"/></div>
      <div class="form-row-2">
        <div class="field"><label class="label">Valor da meta</label><input class="input" id="gTarget" inputmode="decimal" placeholder="0,00" value="${escapeHtml(goalForm.target)}"/></div>
        <div class="field"><label class="label">Já guardado</label><input class="input" id="gSaved" inputmode="decimal" placeholder="0,00" value="${escapeHtml(goalForm.saved)}"/></div>
      </div>
      <div class="field"><label class="label">Prazo</label><input type="date" class="input" id="gDeadline" value="${goalForm.deadline}"/></div>
      <div class="field"><label class="label">Cor</label>
        <div class="color-picker">${GOAL_COLORS.map((c) => `<button type="button" class="color-dot ${c === goalForm.color ? 'active' : ''}" data-color="${c}" style="background:${c}"></button>`).join('')}</div>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn btn-ghost" data-close>Cancelar</button>
        <button type="submit" class="btn">${isEdit ? 'Salvar alterações' : 'Criar meta'}</button>
      </div>
    </form>`;
}

/* ====================== BUDGET ====================== */
function renderBudget(root) {
  const month = currentMonth();
  const monthBudgets = state.budgets.filter((b) => b.month === month);
  const totalLimit = monthBudgets.reduce((s, b) => s + b.limit, 0);
  const totalSpent = monthBudgets.reduce((s, b) => {
    const spent = state.transactions.filter((t) => t.type === 'expense' && t.categoryId === b.categoryId && t.date.startsWith(month)).reduce((a, t) => a + t.amount, 0);
    return s + spent;
  }, 0);

  root.innerHTML = `
    <div class="page-header">
      <div><h1 class="page-title">Orçamento</h1><p class="page-desc" style="text-transform:none">Limites de gastos por categoria neste mês</p></div>
      <button class="btn" id="newBudgetBtn">${ICONS.plus} Novo orçamento</button>
    </div>
    <div class="grid grid-3 section">
      <div class="pill"><p class="pill-label">Limite total</p><p class="pill-value">${formatBRL(totalLimit)}</p></div>
      <div class="pill"><p class="pill-label">Gasto até agora</p><p class="pill-value">${formatBRL(totalSpent)}</p></div>
      <div class="pill summary-card-highlight"><p class="pill-label">Disponível</p><p class="pill-value">${formatBRL(Math.max(0, totalLimit - totalSpent))}</p></div>
    </div>
    ${monthBudgets.length === 0 ? `<div class="empty">${ICONS.wallet}<p>Defina seu primeiro orçamento mensal</p></div>` : `
      <div class="grid grid-2">${monthBudgets.map((b) => budgetCard(b, month)).join('')}</div>`}
  `;
  document.getElementById('newBudgetBtn').onclick = () => openBudgetModal();
  bindBudgetActions(month);
}

function budgetCard(b, month) {
  const cat = getCat(b.categoryId); const color = cat?.color || '#94a3b8';
  const spent = state.transactions.filter((t) => t.type === 'expense' && t.categoryId === b.categoryId && t.date.startsWith(month)).reduce((s, t) => s + t.amount, 0);
  const pct = (spent / b.limit) * 100;
  const over = pct >= 100, warn = pct >= 80 && !over;
  return `
    <div class="gb-card">
      <div class="gb-head">
        <div class="gb-icon-wrap">
          <div class="gb-icon" style="background:${color}22;color:${color}">${ICONS.wallet}</div>
          <div><h3 class="gb-title">${escapeHtml(cat?.name || '—')}</h3><p class="gb-sub">Limite mensal: ${formatBRL(b.limit)}</p></div>
        </div>
        <div class="menu-wrap">
          <button class="menu-btn" data-menu="${b.id}">${ICONS.more}</button>
          ${openMenuId === b.id ? `<div class="menu">
            <button data-edit-budget="${b.id}">${ICONS.pencil} Editar limite</button>
            <hr>
            <button class="danger" data-del-budget="${b.id}">${ICONS.trash} Excluir</button>
          </div>` : ''}
        </div>
      </div>
      <div class="gb-progress-row">
        <span class="spent ${over ? 'over' : warn ? 'warn' : ''}" style="font-weight:600">${formatBRL(spent)}</span>
        <span style="color:var(--muted)">${pct.toFixed(0)}% usado</span>
      </div>
      <div class="progress"><div class="progress-bar" style="width:${Math.min(100, pct)}%"></div></div>
      ${over ? `<p class="gb-warn over">${ICONS.alert} Estourou em ${formatBRL(spent - b.limit)}</p>` : ''}
      ${warn ? `<p class="gb-warn warn">${ICONS.alert} Atenção: próximo do limite</p>` : ''}
    </div>`;
}

function bindBudgetActions(month) {
  document.querySelectorAll('[data-menu]').forEach((b) => b.onclick = (e) => {
    e.stopPropagation(); openMenuId = openMenuId === b.dataset.menu ? null : b.dataset.menu; render();
  });
  document.querySelectorAll('[data-edit-budget]').forEach((b) => b.onclick = () => { openMenuId = null; openBudgetModal(state.budgets.find((x) => x.id === b.dataset.editBudget)); });
  document.querySelectorAll('[data-del-budget]').forEach((b) => b.onclick = () => {
    const bg = state.budgets.find((x) => x.id === b.dataset.delBudget); const cat = getCat(bg.categoryId); openMenuId = null;
    confirmDialog({ title: 'Excluir orçamento?', desc: `O limite de "${escapeHtml(cat?.name || '')}" será removido.`, onOk: () => { state.budgets = state.budgets.filter((x) => x.id !== bg.id); persist(); toast('Orçamento excluído', 'success'); render(); } });
  });
}

let budgetForm = null;
function openBudgetModal(budget) {
  const month = currentMonth();
  const used = new Set(state.budgets.filter((b) => b.month === month).map((b) => b.categoryId));
  budgetForm = budget ? { ...budget, isEdit: true } : { categoryId: '', limit: '', month, isEdit: false };
  const expenseCats = state.categories.filter((c) => (c.type === 'expense' || c.type === 'both') && (budgetForm.isEdit || !used.has(c.id)));
  showModal(`
    <h3 class="modal-title">${budgetForm.isEdit ? 'Editar orçamento' : 'Novo orçamento mensal'}</h3>
    <form class="form" id="budgetForm">
      <div class="field"><label class="label">Categoria</label>
        <select class="select" id="bCat"${budgetForm.isEdit ? ' disabled' : ''}>
          <option value="">Selecione</option>
          ${expenseCats.map((c) => `<option value="${c.id}"${budgetForm.categoryId === c.id ? ' selected' : ''}>${escapeHtml(c.name)}</option>`).join('')}
        </select>
        ${budgetForm.isEdit ? '<p style="font-size:11.5px;color:var(--muted);margin:0">A categoria não pode ser alterada. Exclua e crie outro para mudar.</p>' : ''}
      </div>
      <div class="field"><label class="label">Limite mensal (R$)</label><input class="input" id="bLimit" inputmode="decimal" placeholder="0,00" value="${escapeHtml(budgetForm.limit)}"/></div>
      <div class="modal-actions">
        <button type="button" class="btn btn-ghost" data-close>Cancelar</button>
        <button type="submit" class="btn">${budgetForm.isEdit ? 'Salvar alterações' : 'Salvar'}</button>
      </div>
    </form>
  `);
  document.getElementById('budgetForm').onsubmit = (e) => {
    e.preventDefault();
    const cat = document.getElementById('bCat').value || budgetForm.categoryId;
    const v = parseCurrency(document.getElementById('bLimit').value);
    if (!cat) return toast('Selecione a categoria', 'error');
    if (!v || v <= 0) return toast('Informe um limite válido', 'error');
    if (budgetForm.isEdit) { budget.limit = v; toast('Orçamento atualizado', 'success'); }
    else { state.budgets.push({ id: uid(), categoryId: cat, limit: v, month }); toast('Orçamento criado', 'success'); }
    persist(); closeModal(); render();
  };
}

/* ====================== REPORTS ====================== */
let reportMonth = currentMonth();
let pickerYear = Number(reportMonth.slice(0, 4));
let pickerOpen = false;
const MONTHS_SHORT = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

function renderReports(root) {
  const monthTx = state.transactions.filter((t) => t.date.slice(0, 7) === reportMonth);
  const receitas = monthTx.filter((t) => t.type === 'income').reduce((s, t) => s + t.amount, 0);
  const despesas = monthTx.filter((t) => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
  const saldo = receitas - despesas;
  const taxa = receitas > 0 ? (saldo / receitas) * 100 : 0;

  const prev = shiftMonth(reportMonth, -1);
  const prevTx = state.transactions.filter((t) => t.date.slice(0, 7) === prev);
  const prevReceitas = prevTx.filter((t) => t.type === 'income').reduce((s, t) => s + t.amount, 0);
  const prevDespesas = prevTx.filter((t) => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
  const prevSaldo = prevReceitas - prevDespesas;

  const variation = (cur, p) => p === 0 ? (cur === 0 ? 0 : 100) : ((cur - p) / Math.abs(p)) * 100;

  const expByCat = catBreakdown(monthTx, 'expense');
  const incByCat = catBreakdown(monthTx, 'income');

  const months = [];
  for (let i = 5; i >= 0; i--) months.push(shiftMonth(reportMonth, -i));
  const monthly = months.map((m) => {
    const txs = state.transactions.filter((t) => t.date.slice(0, 7) === m);
    const r = txs.filter((t) => t.type === 'income').reduce((s, t) => s + t.amount, 0);
    const d = txs.filter((t) => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
    return { label: new Date(m + '-01').toLocaleDateString('pt-BR', { month: 'short', year: '2-digit' }), receitas: r, despesas: d, saldo: r - d };
  });

  root.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:16px;margin-bottom:24px" class="rep-head">
      <div style="display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:16px">
        <div>
          <h1 class="page-title">Relatórios mensais</h1>
          <p class="page-desc">${monthLabel(reportMonth)}</p>
        </div>
        <div style="display:flex;align-items:center;gap:8px">
          <button class="icon-btn btn-outline" id="prevMonth" aria-label="Mês anterior">${ICONS.chevronLeft}</button>
          <div class="month-picker">
            <button class="month-picker-btn" id="pickerToggle">${ICONS.calendar}<span>${monthLabel(reportMonth)}</span></button>
            ${pickerOpen ? renderCalendar() : ''}
          </div>
          <button class="icon-btn btn-outline" id="nextMonth" aria-label="Próximo mês">${ICONS.chevronRight}</button>
        </div>
      </div>
    </div>

    <div class="card section">
      <h2 class="card-title" style="margin-bottom:16px">Exportar</h2>
      <div style="display:flex; flex-wrap:wrap; gap:16px; align-items:flex-end;">
        <div class="field" style="width:auto; min-width:140px;">
          <label class="label">Data inicial</label>
          <input type="date" class="input" id="expStart">
        </div>
        <div class="field" style="width:auto; min-width:140px;">
          <label class="label">Data final</label>
          <input type="date" class="input" id="expEnd">
        </div>
        <button class="btn btn-outline" id="btnExpCSV" style="display:flex; align-items:center; gap:8px;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Exportar CSV
        </button>
        <button class="btn" id="btnExpPDF" style="display:flex; align-items:center; gap:8px; background:var(--primary); color:var(--primary-fg);">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          Exportar PDF
        </button>
      </div>
      <p style="margin-top:12px; font-size:11.5px; color:var(--muted); line-height:1.5;">
        CSV: deixe as datas em branco para exportar todos.<br>
        PDF: exporta os lançamentos e resumo do período selecionado.
      </p>
    </div>
    <div class="grid grid-4 section">
      ${reportSummaryCard('Receitas', formatBRL(receitas), variation(receitas, prevReceitas), ICONS.arrowUp, 'income')}
      ${reportSummaryCard('Despesas', formatBRL(despesas), variation(despesas, prevDespesas), ICONS.arrowDown, 'expense', true)}
      ${reportSummaryCard('Saldo', formatBRL(saldo), variation(saldo, prevSaldo), ICONS.wallet, saldo >= 0 ? 'income' : 'expense')}
      ${reportSummaryCard('Taxa de poupança', `${taxa.toFixed(1)}%`, null, ICONS.piggy, 'primary', false, `${monthTx.length} transações`)}
    </div>

    <div class="grid grid-2 section">
      ${categoryBreakdownCard('Despesas por categoria', expByCat, despesas, 'expCatChart')}
      ${categoryBreakdownCard('Receitas por categoria', incByCat, receitas, 'incCatChart')}
    </div>

    <div class="card section">
      <div class="card-header"><h2 class="card-title">Receitas x Despesas — últimos 6 meses</h2></div>
      <div class="chart-wrap"><canvas id="barChart"></canvas></div>
    </div>

    <div class="card section">
      <div class="card-header"><h2 class="card-title">Evolução do saldo</h2></div>
      <div class="chart-wrap-sm"><canvas id="lineChart"></canvas></div>
    </div>
  `;

  
  document.getElementById('prevMonth').onclick = () => { reportMonth = shiftMonth(reportMonth, -1); render(); };
  document.getElementById('nextMonth').onclick = () => { reportMonth = shiftMonth(reportMonth, 1); render(); };
  document.getElementById('pickerToggle').onclick = (e) => { e.stopPropagation(); pickerOpen = !pickerOpen; if (pickerOpen) pickerYear = Number(reportMonth.slice(0, 4)); render(); };
  if (pickerOpen) bindCalendar();

  
  document.getElementById('btnExpCSV').onclick = () => {
    const start = document.getElementById('expStart').value;
    const end = document.getElementById('expEnd').value;
    let txs = state.transactions;
    if (start) txs = txs.filter(t => t.date >= start);
    if (end) txs = txs.filter(t => t.date <= end);

    let csv = 'Data,Descrição,Categoria,Tipo,Valor\n';
    txs.forEach(t => {
      const catName = getCat(t.categoryId)?.name || 'Outros';
      const tipo = t.type === 'income' ? 'Receita' : 'Despesa';
      
      csv += `${fmtDate(t.date)},"${t.description}",${catName},${tipo},${t.amount}\n`;
    });
    
    
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `commitpay_relatorio_${new Date().toISOString().slice(0,10)}.csv`;
    link.click();
    toast('Relatório CSV exportado!', 'success');
  };

  
  document.getElementById('btnExpPDF').onclick = () => {
    const start = document.getElementById('expStart').value;
    const end = document.getElementById('expEnd').value;
    let txs = state.transactions;
    if (start) txs = txs.filter(t => t.date >= start);
    if (end) txs = txs.filter(t => t.date <= end);

    const inc = txs.filter(t => t.type === 'income').reduce((a,b) => a+b.amount, 0);
    const exp = txs.filter(t => t.type === 'expense').reduce((a,b) => a+b.amount, 0);
    const saldo = inc - exp;

    
    const printWin = window.open('', '_blank');
    printWin.document.write(`
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <title>Relatório CommitPay</title>
        <style>
          body { font-family: sans-serif; color: #1f2937; padding: 30px; }
          h1 { color: #0d9488; font-size: 24px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px; margin-bottom: 5px; }
          .subtitle { font-size: 13px; color: #6b7280; margin-top: 0; margin-bottom: 30px; }
          .summary { display: flex; gap: 20px; margin-bottom: 30px; }
          .summary div { padding: 15px; background: #f3f4f6; border-radius: 8px; flex: 1; }
          .summary span { font-size: 18px; font-weight: bold; display: block; margin-top: 6px; }
          table { width: 100%; border-collapse: collapse; font-size: 13px; }
          th, td { border-bottom: 1px solid #e5e7eb; padding: 10px 12px; text-align: left; }
          th { background: #f9fafb; font-weight: 600; text-transform: uppercase; font-size: 11px; }
          .income { color: #10b981; }
          .expense { color: #ef4444; }
        </style>
      </head>
      <body>
        <h1>Relatório de Transações - CommitPay</h1>
        <p class="subtitle">Período: ${start ? fmtDate(start) : 'Início'} até ${end ? fmtDate(end) : 'Hoje'}</p>
        <div class="summary">
          <div>Entradas (Receitas) <span class="income">R$ ${inc.toFixed(2)}</span></div>
          <div>Saídas (Despesas) <span class="expense">R$ ${exp.toFixed(2)}</span></div>
          <div>Saldo do Período <span style="color: ${saldo >= 0 ? '#10b981' : '#ef4444'}">R$ ${saldo.toFixed(2)}</span></div>
        </div>
        <table>
          <thead><tr><th>Data</th><th>Descrição</th><th>Categoria</th><th>Valor</th></tr></thead>
          <tbody>
            ${txs.length === 0 ? '<tr><td colspan="4" style="text-align:center;">Nenhuma transação encontrada neste período.</td></tr>' : 
              txs.map(t => `
              <tr>
                <td>${fmtDate(t.date)}</td>
                <td>${t.description}</td>
                <td>${getCat(t.categoryId)?.name||'Outros'}</td>
                <td class="${t.type}">${t.type==='income'?'+':'-'} R$ ${t.amount.toFixed(2)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        <script>
          // Espera a página carregar e chama a caixa de impressão para gerar o PDF
          setTimeout(() => { window.print(); window.close(); }, 500);
        </script>
      </body>
      </html>
    `);
    printWin.document.close();
  };

  
  if (expByCat.length) renderCatChart('expCatChart', expByCat);
  if (incByCat.length) renderCatChart('incCatChart', incByCat);

  currentCharts.push(new Chart(document.getElementById('barChart'), {
    type: 'bar',
    data: {
      labels: monthly.map((m) => m.label),
      datasets: [
        { label: 'Receitas', data: monthly.map((m) => m.receitas), backgroundColor: '#2dd4bf', borderRadius: 6 },
        { label: 'Despesas', data: monthly.map((m) => m.despesas), backgroundColor: '#f87171', borderRadius: 6 },
      ],
    },
    options: chartOpts({ legend: true, currency: true }),
  }));

  currentCharts.push(new Chart(document.getElementById('lineChart'), {
    type: 'line',
    data: { labels: monthly.map((m) => m.label), datasets: [{ label: 'Saldo', data: monthly.map((m) => m.saldo), borderColor: '#3b82f6', backgroundColor: 'rgba(59,130,246,0.15)', fill: true, tension: 0.35, borderWidth: 3, pointRadius: 4 }] },
    options: chartOpts({ legend: false, currency: true }),
  }));
}

function reportSummaryCard(label, value, variation, icon, tone, invert = false, sub = '') {
  let varHtml = '';
  if (variation !== null && variation !== undefined && Number.isFinite(variation)) {
    const positive = variation >= 0;
    const good = invert ? !positive : positive;
    varHtml = `<p class="stat-variation ${good ? 'up' : 'down'}">${positive ? '+' : ''}${variation.toFixed(1)}% vs. mês anterior</p>`;
  } else if (sub) {
    varHtml = `<p class="stat-sub">${sub}</p>`;
  }
  return `
    <div class="stat-card">
      <div class="stat-row">
        <div style="min-width:0;flex:1"><p class="stat-label">${label}</p><p class="stat-value">${value}</p>${varHtml}</div>
        <div class="stat-icon stat-icon--${tone}">${icon}</div>
      </div>
    </div>`;
}

function catBreakdown(monthTx, type) {
  const map = new Map();
  monthTx.filter((t) => t.type === type).forEach((t) => map.set(t.categoryId, (map.get(t.categoryId) || 0) + t.amount));
  return Array.from(map.entries()).map(([id, v]) => ({ name: getCat(id)?.name || '—', value: v, color: getCat(id)?.color || '#94a3b8' })).sort((a, b) => b.value - a.value);
}

function categoryBreakdownCard(title, data, total, canvasId) {
  return `
    <div class="card">
      <div style="display:flex;align-items:baseline;justify-content:space-between"><h2 class="card-title">${title}</h2><span style="color:var(--muted);font-size:13px">${formatBRL(total)}</span></div>
      ${data.length === 0 ? '<div class="chart-empty" style="height:280px">Sem dados neste mês</div>' : `
        <div class="cat-grid">
          <div style="height:180px;position:relative"><canvas id="${canvasId}"></canvas></div>
          <ul class="cat-list">
            ${data.slice(0, 6).map((d) => {
              const pct = total > 0 ? (d.value / total) * 100 : 0;
              return `<li class="cat-row">
                <div class="cat-row-top"><span><span class="cat-dot" style="background:${d.color}"></span>${escapeHtml(d.name)}</span><span style="font-weight:500">${formatBRL(d.value)}</span></div>
                <div class="progress progress-thin"><div class="progress-bar" style="width:${pct}%;background:${d.color}"></div></div>
              </li>`;
            }).join('')}
          </ul>
        </div>`}
    </div>`;
}

function renderCatChart(id, data) {
  currentCharts.push(new Chart(document.getElementById(id), {
    type: 'doughnut',
    data: { labels: data.map((d) => d.name), datasets: [{ data: data.map((d) => d.value), backgroundColor: data.map((d) => d.color), borderColor: 'transparent', borderWidth: 2 }] },
    options: { responsive: true, maintainAspectRatio: false, cutout: '60%', plugins: { legend: { display: false }, tooltip: { backgroundColor: '#1c2128', borderColor: '#2c333d', borderWidth: 1, callbacks: { label: (ctx) => `${ctx.label}: ${formatBRL(ctx.parsed)}` } } } },
  }));
}

function renderCalendar() {
  return `
    <div class="calendar-pop">
      <div class="cal-head">
        <button id="calPrev" aria-label="Ano anterior">${ICONS.chevronLeft}</button>
        <span>${pickerYear}</span>
        <button id="calNext" aria-label="Próximo ano">${ICONS.chevronRight}</button>
      </div>
      <div class="cal-grid">
        ${MONTHS_SHORT.map((name, idx) => {
          const ym = `${pickerYear}-${String(idx + 1).padStart(2, '0')}`;
          const sel = ym === reportMonth, cur = ym === currentMonth(), future = ym > currentMonth();
          return `<button data-pick="${ym}" ${future ? 'disabled' : ''} class="${sel ? 'selected' : cur ? 'current' : ''}">${name}</button>`;
        }).join('')}
      </div>
    </div>`;
}

function bindCalendar() {
  document.getElementById('calPrev').onclick = (e) => { e.stopPropagation(); pickerYear--; render(); };
  document.getElementById('calNext').onclick = (e) => { e.stopPropagation(); pickerYear++; render(); };
  document.querySelectorAll('[data-pick]').forEach((b) => b.onclick = () => { reportMonth = b.dataset.pick; pickerOpen = false; render(); });
}

/* ====================== MODAL HELPERS ====================== */
function showModal(html) {
  const m = document.getElementById('modal');
  document.getElementById('modalPanel').innerHTML = html;
  m.hidden = false;
  m.querySelectorAll('[data-close]').forEach((el) => el.addEventListener('click', closeModal));
  if (document.getElementById('txForm')) bindTxModal();
}
function closeModal() { document.getElementById('modal').hidden = true; }

let confirmCb = null;
function confirmDialog({ title, desc, onOk }) {
  document.getElementById('confirmTitle').textContent = title;
  document.getElementById('confirmDesc').innerHTML = desc;
  document.getElementById('confirm').hidden = false;
  confirmCb = onOk;
}
document.getElementById('confirmOk').onclick = () => { document.getElementById('confirm').hidden = true; if (confirmCb) confirmCb(); };
document.querySelectorAll('[data-confirm-close]').forEach((el) => el.addEventListener('click', () => { document.getElementById('confirm').hidden = true; }));

document.addEventListener('click', () => { if (openMenuId) { openMenuId = null; render(); } });

/* ====================== INIT ====================== */
function setTopbarDate() {
  document.getElementById('topbarDate').textContent = new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long' });
}

const initialHash = location.hash.replace('#', '');
if (initialHash && ROUTES.find((r) => r.id === initialHash)) currentRoute = initialHash;
setTopbarDate();
render();

/* =========================================
   NOVAS FUNCIONALIDADES: TEMA, BACKUP E PWA
   ========================================= */

// 1. TEMA CLARO/ESCURO
let isLight = localStorage.getItem('commitpay:theme') === 'light';
if (isLight) {
    document.body.classList.add('light-theme');
    document.getElementById('themeToggleBtn').innerText = '🌙';
}

window.toggleTheme = function() {
    isLight = !isLight;
    if (isLight) {
        document.body.classList.add('light-theme');
        localStorage.setItem('commitpay:theme', 'light');
        document.getElementById('themeToggleBtn').innerText = '🌙';
    } else {
        document.body.classList.remove('light-theme');
        localStorage.setItem('commitpay:theme', 'dark');
        document.getElementById('themeToggleBtn').innerText = '☀️';
    }
    render(); // Redesenha os gráficos com as novas cores
};


// 3. REGISTO DO SERVICE WORKER (PWA)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').then(reg => {
            console.log('PWA Service Worker registado!', reg);
        }).catch(err => console.log('Erro no Service Worker:', err));
    });
}