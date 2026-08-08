/* ================================================================
   SpamShield AI — Main JavaScript (Futuristic Edition)
   ================================================================ */

'use strict';

// ── State ────────────────────────────────────────────────────────
const STATE = {
  emails: [],
  filteredEmails: [],
  currentFolder: 'inbox',
  currentFilter: 'all',
  searchQuery: '',
  sortBy: 'date-desc',
  metrics: null,
  stats: null,
  chartsInitialized: false,
  pieChart: null,
  barChart: null,
};

// ── DOM helpers ──────────────────────────────────────────────────
const $ = (id) => document.getElementById(id);
const show = (el) => el && el.classList.remove('hidden');
const hide = (el) => el && el.classList.add('hidden');

// ════════════════════════════════════════════
// PARTICLE SYSTEM
// ════════════════════════════════════════════
const ParticleSystem = (() => {
  let canvas, ctx, particles = [], animId;
  const PARTICLE_COUNT = 60;

  function init() {
    canvas = $('particleCanvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    resize();
    for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(createParticle());
    animate();
    window.addEventListener('resize', resize);
  }

  function resize() {
    if (!canvas) return;
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticle() {
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    const colors = isDark
      ? ['rgba(0,212,255,', 'rgba(0,102,255,', 'rgba(191,95,255,', 'rgba(0,255,136,']
      : ['rgba(37,99,235,', 'rgba(124,58,237,', 'rgba(5,150,105,'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    return {
      x: Math.random() * (canvas?.width || window.innerWidth),
      y: Math.random() * (canvas?.height || window.innerHeight),
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      color,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
    };
  }

  function animate() {
    if (!ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;
      p.pulse += p.pulseSpeed;

      // Wrap around
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      const alpha = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse));

      // Draw connection lines
      particles.slice(i + 1).forEach(p2 => {
        const dx = p.x - p2.x, dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          const lineAlpha = (1 - dist / 120) * 0.15 * alpha;
          ctx.strokeStyle = p.color + lineAlpha + ')';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color + alpha + ')';
      ctx.fill();

      // Glow effect
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
      ctx.fillStyle = p.color + (alpha * 0.15) + ')';
      ctx.fill();
    });

    animId = requestAnimationFrame(animate);
  }

  function refreshColors() {
    particles = particles.map(() => createParticle());
  }

  return { init, refreshColors };
})();

// ════════════════════════════════════════════
// TYPING EFFECT
// ════════════════════════════════════════════
function typeText(element, text, speed = 40) {
  element.textContent = '';
  element.classList.add('typing-cursor');
  let i = 0;
  const timer = setInterval(() => {
    element.textContent += text[i++];
    if (i >= text.length) {
      clearInterval(timer);
      element.classList.remove('typing-cursor');
    }
  }, speed);
}

// ════════════════════════════════════════════
// COUNTER ANIMATION
// ════════════════════════════════════════════
function animateCounter(el, target, suffix = '', duration = 1200) {
  if (!el) return;
  const start = 0;
  const startTime = performance.now();
  const isFloat = String(target).includes('.');
  const decimals = isFloat ? (String(target).split('.')[1] || '').length : 0;

  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const current = start + (target - start) * eased;
    el.textContent = (isFloat ? current.toFixed(decimals) : Math.floor(current)) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

// ════════════════════════════════════════════
// GLITCH TEXT EFFECT
// ════════════════════════════════════════════
function glitchElement(el, finalText, duration = 600) {
  const chars = '01█▓▒░⣿⣾⣽⣼⣻⣺⣹⣸⣷⣶⣵⣴⣳⣲⣱⣰';
  let elapsed = 0;
  const interval = setInterval(() => {
    if (elapsed >= duration) {
      el.textContent = finalText;
      clearInterval(interval);
      return;
    }
    el.textContent = finalText.split('').map((c, i) =>
      elapsed / duration > i / finalText.length
        ? c
        : chars[Math.floor(Math.random() * chars.length)]
    ).join('');
    elapsed += 40;
  }, 40);
}

// ── Init ─────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Fade in body
  document.body.classList.add('loaded');

  // Start particle system
  ParticleSystem.init();

  // Load data
  loadEmails();
  loadMetrics();
  setupSearch();
  updateThemeUI();
});

// ── Theme ────────────────────────────────────────────────────────
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  updateThemeUI();
  ParticleSystem.refreshColors();
  if (STATE.chartsInitialized) setTimeout(rebuildCharts, 100);
}

function updateThemeUI() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  $('themeIcon').textContent  = isDark ? '☀️' : '🌙';
  $('themeLabel').textContent = isDark ? 'Light Mode' : 'Dark Mode';
}

// ── Sidebar ──────────────────────────────────────────────────────
function toggleSidebar() {
  const sidebar = $('sidebar');
  const overlay = $('overlay');
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    sidebar.classList.toggle('mobile-open');
    overlay.classList.toggle('hidden');
  } else {
    sidebar.classList.toggle('collapsed');
    $('mainContent').classList.toggle('sidebar-collapsed');
  }
}

function closeSidebar() {
  $('sidebar').classList.remove('mobile-open');
  $('overlay').classList.add('hidden');
}

// ── Folder Navigation ─────────────────────────────────────────────
function showFolder(folder) {
  STATE.currentFolder = folder;
  STATE.currentFilter = 'all';
  STATE.searchQuery   = '';
  $('searchInput').value = '';
  hide($('searchClear'));

  ['inbox','spam','safe','analyze','dashboard'].forEach(f => {
    $(`nav-${f}`)?.classList.remove('active');
  });
  $(`nav-${folder}`)?.classList.add('active');

  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.filter-btn')[0]?.classList.add('active');

  hide($('emailListPanel'));
  hide($('emailDetailPanel'));
  hide($('analyzePanel'));
  hide($('dashboardPanel'));

  const titleMap = {
    inbox: 'INBOX', spam: 'SPAM VAULT', safe: 'SAFE ZONE',
    analyze: 'AI SCANNER', dashboard: 'DASHBOARD'
  };

  const titleEl = $('pageTitle');
  titleEl.textContent = titleMap[folder] || 'INBOX';
  // glitch effect on title
  glitchElement(titleEl, titleMap[folder] || 'INBOX', 400);

  const showFilterBar = ['inbox','spam','safe'].includes(folder);
  $('searchContainer').style.display  = showFilterBar ? '' : 'none';
  $('filterGroup').style.display      = showFilterBar ? '' : 'none';

  if (folder === 'analyze') {
    show($('analyzePanel'));
  } else if (folder === 'dashboard') {
    show($('dashboardPanel'));
    renderDashboard();
  } else {
    show($('emailListPanel'));
    applyFiltersAndRender();
  }
  closeSidebar();
}

// ── Load Emails ──────────────────────────────────────────────────
async function loadEmails() {
  try {
    const res = await fetch('/api/emails');
    const data = await res.json();
    if (!data.success) throw new Error(data.error);
    STATE.emails = data.emails;
    updateBadges();
    applyFiltersAndRender();
  } catch (err) {
    $('emailList').innerHTML = `
      <div class="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        <h3>CONNECTION FAILED</h3>
        <p>${escHtml(err.message)}</p>
      </div>`;
  }
}

async function loadMetrics() {
  try {
    const [mRes, sRes] = await Promise.all([fetch('/api/metrics'), fetch('/api/stats')]);
    const mData = await mRes.json();
    const sData = await sRes.json();
    if (mData.success) STATE.metrics = mData.metrics;
    if (sData.success) STATE.stats   = sData.stats;
  } catch (err) {
    console.warn('Could not load metrics:', err.message);
  }
}

// ── Update Sidebar Badges ────────────────────────────────────────
function updateBadges() {
  const total = STATE.emails.length;
  const spam  = STATE.emails.filter(e => e.ml_prediction === 'spam').length;
  const safe  = total - spam;
  $('badge-inbox').textContent = total;
  $('badge-spam').textContent  = spam;
  $('badge-safe').textContent  = safe;
}

// ── Filter + Render ───────────────────────────────────────────────
function applyFiltersAndRender() {
  let emails = [...STATE.emails];

  if (STATE.currentFolder === 'spam')      emails = emails.filter(e => e.ml_prediction === 'spam');
  else if (STATE.currentFolder === 'safe') emails = emails.filter(e => e.ml_prediction === 'safe');

  if (STATE.currentFilter === 'spam')        emails = emails.filter(e => e.ml_prediction === 'spam');
  else if (STATE.currentFilter === 'safe')   emails = emails.filter(e => e.ml_prediction === 'safe');
  else if (STATE.currentFilter === 'unread') emails = emails.filter(e => !e.read);

  const q = STATE.searchQuery.toLowerCase();
  if (q) {
    emails = emails.filter(e =>
      e.subject?.toLowerCase().includes(q) ||
      e.sender?.toLowerCase().includes(q) ||
      e.sender_name?.toLowerCase().includes(q) ||
      e.body?.toLowerCase().includes(q)
    );
  }

  emails = sortEmailList(emails, STATE.sortBy);
  STATE.filteredEmails = emails;
  renderEmailList(emails);
}

function sortEmailList(emails, sortBy) {
  return [...emails].sort((a, b) => {
    switch (sortBy) {
      case 'date-asc':         return new Date(a.timestamp) - new Date(b.timestamp);
      case 'date-desc':        return new Date(b.timestamp) - new Date(a.timestamp);
      case 'confidence-desc':  return b.confidence - a.confidence;
      case 'risk-desc':        return b.risk_score - a.risk_score;
      default: return 0;
    }
  });
}

function sortEmails() {
  STATE.sortBy = $('sortSelect').value;
  applyFiltersAndRender();
}

function setFilter(filter, btn) {
  STATE.currentFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  applyFiltersAndRender();
}

// ── Render Email List ─────────────────────────────────────────────
function renderEmailList(emails) {
  const list = $('emailList');
  const countEl = $('listCount');
  countEl.textContent = '';
  typeText(countEl, `[ ${emails.length} EMAIL${emails.length !== 1 ? 'S' : ''} ]`);

  if (emails.length === 0) {
    const folderLabel = STATE.currentFolder === 'spam' ? 'spam' : STATE.currentFolder === 'safe' ? 'safe' : '';
    list.innerHTML = `
      <div class="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-6l-2 3H10L8 12H2"/><path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"/></svg>
        <h3>NO SIGNALS DETECTED</h3>
        <p>${STATE.searchQuery ? 'TRY A DIFFERENT QUERY' : `NO ${folderLabel.toUpperCase()} EMAILS`}</p>
      </div>`;
    return;
  }

  list.innerHTML = emails.map((email, i) => renderEmailItem(email, i)).join('');
}

function renderEmailItem(email, i) {
  const isSpam   = email.ml_prediction === 'spam';
  const isUnread = !email.read;
  const initials = getInitials(email.sender_name || email.sender);
  const timeStr  = formatTime(email.timestamp);
  const preview  = email.body?.replace(/\n+/g, ' ').trim().slice(0, 85) || '';
  const riskBar  = getRiskBarHTML(email.risk_score || 0, isSpam);

  return `
    <div class="email-item ${isSpam ? 'is-spam' : 'is-safe'} ${isUnread ? 'unread' : ''}"
         onclick="openEmail(${email.id})"
         role="button" tabindex="0"
         aria-label="${escHtml(email.subject)}"
         style="animation-delay: ${Math.min(i * 0.04, 0.5)}s">
      <div class="email-avatar ${isSpam ? 'avatar-spam' : 'avatar-safe'}">${initials}</div>
      <div class="email-main">
        <div class="email-meta">
          <span class="email-sender">${escHtml(email.sender_name || email.sender)}</span>
          <span class="email-sender-addr">&lt;${escHtml(email.sender)}&gt;</span>
        </div>
        <div class="email-subject">${escHtml(email.subject)}</div>
        <div class="email-preview">${escHtml(preview)}${preview.length >= 85 ? '…' : ''}</div>
      </div>
      <div class="email-right">
        <span class="email-time">${timeStr}</span>
        <div class="email-badges">
          <span class="label-badge label-${isSpam ? 'spam' : 'safe'}">${isSpam ? '◈ SPAM' : '◉ SAFE'}</span>
          <span class="confidence-badge">${email.confidence?.toFixed(1)}%</span>
        </div>
        ${isUnread ? '<span class="unread-dot"></span>' : ''}
      </div>
    </div>`;
}

function getRiskBarHTML(score, isSpam) {
  const color = score >= 60 ? '#ff2d55' : score >= 30 ? '#ff6b00' : '#00ff88';
  return `<div style="width:${score}%;height:2px;background:${color};border-radius:1px;margin-top:4px;"></div>`;
}

// ── Open Email Detail ─────────────────────────────────────────────
async function openEmail(id) {
  try {
    const res  = await fetch(`/api/email/${id}`);
    const data = await res.json();
    if (!data.success) throw new Error(data.error);
    renderEmailDetail(data.email);
    hide($('emailListPanel'));
    show($('emailDetailPanel'));
    const em = STATE.emails.find(e => e.id === id);
    if (em) em.read = true;
  } catch (err) {
    showToast('ERROR: ' + err.message);
  }
}

function closeEmailDetail() {
  hide($('emailDetailPanel'));
  show($('emailListPanel'));
}

function renderEmailDetail(email) {
  const isSpam = email.ml_prediction === 'spam';
  const ind    = email.indicators || {};

  const indicatorItems = [
    { label: 'Urgency Language',         active: (ind.urgent_words||[]).length > 0, detail: (ind.urgent_words||[]).slice(0,3).join(', ') },
    { label: 'Money / Reward Mention',   active: (ind.money_symbols||[]).length > 0 },
    { label: 'Suspicious URLs',          active: (ind.suspicious_links||[]).length > 0 },
    { label: 'Excessive Capitalization', active: !!ind.excessive_caps, detail: ind.caps_ratio ? `${ind.caps_ratio}% caps` : '' },
    { label: 'Excessive Exclamations',   active: !!ind.excessive_exclamations, detail: ind.exclamation_count ? `${ind.exclamation_count} found` : '' },
    { label: 'Suspicious Sender Domain', active: !!ind.suspicious_sender },
    { label: 'ALL-CAPS Words Found',     active: (ind.all_caps_words||[]).length >= 3, detail: (ind.all_caps_words||[]).slice(0,3).join(', ') },
  ];

  const indicatorHTML = indicatorItems.map(item => `
    <div class="indicator-item ${item.active ? 'active' : 'inactive'}">
      <div class="indicator-dot"></div>
      <div>
        <div class="indicator-label">${item.label}</div>
        ${item.active && item.detail ? `<div style="font-size:10px;color:var(--text-muted);margin-top:2px;letter-spacing:0.5px;">${escHtml(item.detail)}</div>` : ''}
      </div>
    </div>`).join('');

  const riskFactors  = ind.risk_factors || [];
  const riskHTML     = riskFactors.length > 0
    ? `<ul class="risk-factors-list">${riskFactors.map(f => `<li class="risk-factor-item">${escHtml(f)}</li>`).join('')}</ul>`
    : `<p style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--neon-green);letter-spacing:1px;">// NO THREAT INDICATORS DETECTED</p>`;

  const riskScore = email.risk_score || 0;
  const riskColor = riskScore >= 60 ? 'var(--neon-red)' : riskScore >= 30 ? 'var(--neon-orange)' : 'var(--neon-green)';

  $('emailDetailContent').innerHTML = `
    <div class="detail-header-card">
      <div class="detail-subject">${escHtml(email.subject)}</div>
      <div class="detail-meta">
        <span class="detail-meta-key">From</span>
        <span class="detail-meta-val">${escHtml(email.sender_name || '')} &lt;${escHtml(email.sender)}&gt;</span>
        <span class="detail-meta-key">Date</span>
        <span class="detail-meta-val">${formatFullDate(email.timestamp)}</span>
        <span class="detail-meta-key">Status</span>
        <span class="detail-meta-val" style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--neon-cyan);">${email.read ? '[ READ ]' : '[ UNREAD ]'}</span>
      </div>
    </div>

    <div class="ai-result-banner ${isSpam ? 'spam' : 'safe'}">
      <div class="ai-result-icon">${isSpam ? '🚫' : '✅'}</div>
      <div class="ai-result-info">
        <div class="ai-result-label ${isSpam ? 'spam' : 'safe'}">${isSpam ? 'THREAT DETECTED' : 'SIGNAL CLEAR'}</div>
        <div class="ai-result-sub">
          CONFIDENCE: <strong>${email.confidence?.toFixed(2)}%</strong> &nbsp;|&nbsp;
          P(SPAM): <strong>${email.spam_probability?.toFixed(2)}%</strong> &nbsp;|&nbsp;
          P(SAFE): <strong>${email.safe_probability?.toFixed(2)}%</strong>
        </div>
      </div>
      <div class="confidence-bar-container">
        <div class="confidence-bar-label">THREAT PROBABILITY</div>
        <div class="confidence-bar-track">
          <div class="confidence-bar-fill ${isSpam ? 'spam' : ''}" id="confBar" style="width:0%"></div>
        </div>
        <div class="confidence-bar-pct" style="color:${isSpam ? 'var(--neon-red)' : 'var(--neon-green)'}">
          ${email.spam_probability?.toFixed(1)}%
        </div>
      </div>
      <div class="risk-score-pill">
        <span class="risk-number" style="color:${riskColor}" id="riskNum">0</span>
        <span class="risk-label">RISK SCORE</span>
      </div>
    </div>

    <div class="indicators-card">
      <div class="indicators-title">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        Threat Indicator Matrix
      </div>
      <div class="indicators-grid">${indicatorHTML}</div>
      ${riskFactors.length > 0 ? `<div style="margin-top:18px;"><div class="indicators-title" style="margin-bottom:10px;">⚡ Active Risk Factors</div>${riskHTML}</div>` : `<div style="margin-top:16px;">${riskHTML}</div>`}
    </div>

    <div class="email-body-card" style="position:relative;overflow:hidden;">
      <div class="email-body-title">// EMAIL PAYLOAD</div>
      <div class="email-body-text">${escHtml(email.body || '')}</div>
    </div>`;

  // Animate confidence bar
  setTimeout(() => {
    const bar = $('confBar');
    if (bar) bar.style.width = (email.spam_probability || 0) + '%';
  }, 150);

  // Animate risk score counter
  setTimeout(() => {
    const numEl = $('riskNum');
    if (numEl) animateCounter(numEl, riskScore, '', 800);
  }, 200);
}

// ── Analyze Custom Email ──────────────────────────────────────────
async function analyzeCustomEmail() {
  const sender  = $('analyzeSender').value.trim();
  const subject = $('analyzeSubject').value.trim();
  const body    = $('analyzeBody').value.trim();

  clearFormErrors();

  let hasError = false;
  if (!sender && !subject && !body) {
    showFieldError('senderError', '⚠ At least one field required');
    showFieldError('bodyError', '⚠ At least one field required');
    $('analyzeSender').classList.add('error');
    $('analyzeBody').classList.add('error');
    hasError = true;
  }
  if (hasError) return;

  const btn = $('analyzeBtn');
  btn.disabled = true;
  show($('analyzeLoading'));
  hide($('analyzeResult'));

  try {
    const res  = await fetch('/api/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sender, subject, body })
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.error);
    renderAnalyzeResult(data.result, subject || '(No Subject)');
  } catch (err) {
    $('analyzeResult').innerHTML = `
      <div style="padding:16px;background:var(--neon-red-dim);border:1px solid rgba(255,45,85,0.3);border-radius:var(--radius-sm);color:var(--neon-red);font-family:'JetBrains Mono',monospace;font-size:12px;">
        ⚠ ERROR: ${escHtml(err.message)}
      </div>`;
    show($('analyzeResult'));
  } finally {
    btn.disabled = false;
    hide($('analyzeLoading'));
  }
}

function renderAnalyzeResult(result, subject) {
  const isSpam    = result.label === 'spam';
  const ind       = result.indicators || {};
  const riskScore = result.risk_score || 0;
  const riskColor = riskScore >= 60 ? 'var(--neon-red)' : riskScore >= 30 ? 'var(--neon-orange)' : 'var(--neon-green)';

  const indicatorItems = [
    { label: 'Urgency Language',         active: (ind.urgent_words||[]).length > 0 },
    { label: 'Money / Reward Mention',   active: (ind.money_symbols||[]).length > 0 },
    { label: 'Suspicious URLs',          active: (ind.suspicious_links||[]).length > 0 },
    { label: 'Excessive Capitalization', active: !!ind.excessive_caps },
    { label: 'Excessive Exclamations',   active: !!ind.excessive_exclamations },
    { label: 'Suspicious Sender Domain', active: !!ind.suspicious_sender },
    { label: 'ALL-CAPS Words Found',     active: (ind.all_caps_words||[]).length >= 3 },
  ];

  const indHTML = indicatorItems.map(item => `
    <div class="indicator-item ${item.active ? 'active' : 'inactive'}">
      <div class="indicator-dot"></div>
      <span class="indicator-label">${item.label}</span>
    </div>`).join('');

  const riskFactors = ind.risk_factors || [];
  const rfHTML = riskFactors.length > 0
    ? `<ul class="risk-factors-list">${riskFactors.map(f=>`<li class="risk-factor-item">${escHtml(f)}</li>`).join('')}</ul>`
    : `<p style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--neon-green);letter-spacing:1px;">// NO THREAT INDICATORS DETECTED</p>`;

  $('analyzeResult').innerHTML = `
    <div class="ai-result-banner ${isSpam ? 'spam' : 'safe'}">
      <div class="ai-result-icon">${isSpam ? '🚫' : '✅'}</div>
      <div class="ai-result-info">
        <div class="ai-result-label ${isSpam ? 'spam' : 'safe'}">${isSpam ? 'THREAT DETECTED' : 'SIGNAL CLEAR'}</div>
        <div class="ai-result-sub">
          TARGET: <strong>${escHtml(subject.slice(0,45))}${subject.length>45?'…':''}</strong><br/>
          P(SPAM): <strong>${result.spam_probability?.toFixed(2)}%</strong> &nbsp;|&nbsp;
          P(SAFE): <strong>${result.safe_probability?.toFixed(2)}%</strong>
        </div>
      </div>
      <div class="confidence-bar-container">
        <div class="confidence-bar-label">THREAT PROBABILITY</div>
        <div class="confidence-bar-track">
          <div class="confidence-bar-fill ${isSpam ? 'spam' : ''}" id="analyzeConfBar" style="width:0%"></div>
        </div>
        <div class="confidence-bar-pct" style="color:${isSpam ? 'var(--neon-red)' : 'var(--neon-green)'}">
          ${result.spam_probability?.toFixed(1)}%
        </div>
      </div>
      <div class="risk-score-pill">
        <span class="risk-number" style="color:${riskColor}" id="analyzeRiskNum">0</span>
        <span class="risk-label">RISK SCORE</span>
      </div>
    </div>
    <div class="indicators-card" style="margin-top:16px;">
      <div class="indicators-title">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>
        Threat Indicator Matrix
      </div>
      <div class="indicators-grid">${indHTML}</div>
      <div style="margin-top:16px;">
        <div class="indicators-title" style="margin-bottom:10px;">⚡ Active Risk Factors</div>
        ${rfHTML}
      </div>
    </div>`;

  show($('analyzeResult'));

  setTimeout(() => {
    const bar = $('analyzeConfBar');
    if (bar) bar.style.width = (result.spam_probability || 0) + '%';
  }, 150);
  setTimeout(() => {
    const numEl = $('analyzeRiskNum');
    if (numEl) animateCounter(numEl, riskScore, '', 800);
  }, 200);

  $('analyzeResult').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  showToast(isSpam ? '⚠ THREAT DETECTED — High spam probability!' : '✓ SIGNAL CLEAR — Email appears safe.');
}

// ── Quick Fill ────────────────────────────────────────────────────
const quickFillData = {
  spam1: {
    sender: 'winner@lottery-international.biz',
    subject: 'CONGRATULATIONS!!! You Are Our $5,000,000 JACKPOT WINNER!!!',
    body: 'DEAR LUCKY WINNER,\n\nYou have been selected as the GRAND PRIZE WINNER of our International Lottery for $5,000,000 (FIVE MILLION DOLLARS)!!!\n\nACT NOW!!! This offer EXPIRES in 24 HOURS!!!\n\nClick here IMMEDIATELY to claim your prize: http://lottery-scam.xyz/claim\n\nProvide your bank details to receive your winnings!\n\nLottery Claims Department'
  },
  spam2: {
    sender: 'prince.alibek@nigeria-royal.net',
    subject: 'Urgent and Confidential - $20 Million Business Proposal',
    body: 'STRICTLY CONFIDENTIAL\n\nDear Friend,\n\nI am Prince Alibek, son of the late King. I have $20,000,000 stuck in a foreign bank that needs urgent transfer.\n\nI need your bank account details to complete this transfer. You will receive 40% ($8,000,000) for your assistance.\n\nGod bless you,\nPrince Alibek'
  },
  safe1: {
    sender: 'manager@techcorp.com',
    subject: 'Team Meeting Scheduled for Friday at 2 PM',
    body: 'Hi Team,\n\nReminder about our weekly team meeting this Friday at 2:00 PM in Conference Room A.\n\nAgenda:\n1. Project status updates\n2. Q4 planning\n3. New team member introduction\n\nBest regards,\nSarah Johnson\nProject Manager'
  },
  safe2: {
    sender: 'orders@techstore.com',
    subject: 'Your Order #TEC-2024-8834 Has Been Shipped',
    body: 'Hello,\n\nGreat news! Your order has been shipped.\n\nOrder #: TEC-2024-8834\nItem: Mechanical Keyboard MK Pro\nTracking: TRK-98234-5621\nExpected: 3-5 business days\n\nThank you for your purchase!\n\nTech Store Customer Service'
  }
};

function quickFill(type) {
  const data = quickFillData[type];
  if (!data) return;
  $('analyzeSender').value = data.sender;
  $('analyzeSubject').value = data.subject;
  $('analyzeBody').value = data.body;
  clearFormErrors();
  showToast('// Example loaded — run AI analysis to classify');
}

function clearAnalyzeForm() {
  $('analyzeSender').value = '';
  $('analyzeSubject').value = '';
  $('analyzeBody').value = '';
  clearFormErrors();
  hide($('analyzeResult'));
  hide($('analyzeLoading'));
}

function clearFormErrors() {
  ['senderError','subjectError','bodyError'].forEach(id => { const el = $(id); if (el) el.textContent = ''; });
  ['analyzeSender','analyzeSubject','analyzeBody'].forEach(id => $(id)?.classList.remove('error'));
}
function showFieldError(fieldId, msg) { const el = $(fieldId); if (el) el.textContent = msg; }

// ── Dashboard ─────────────────────────────────────────────────────
async function renderDashboard() {
  if (!STATE.metrics || !STATE.stats) await loadMetrics();

  if (STATE.stats) {
    const s = STATE.stats;
    animateCounter($('stat-total'), s.total,            '', 1000);
    animateCounter($('stat-spam'),  s.spam,             '', 1000);
    animateCounter($('stat-safe'),  s.safe,             '', 1000);
    animateCounter($('stat-pct'),   s.spam_percentage,  '%', 1200);
  }

  if (STATE.metrics) {
    const m = STATE.metrics;
    const metricsMap = [
      { id: 'm-accuracy',  ring: 'ring-acc',  val: m.accuracy },
      { id: 'm-precision', ring: 'ring-prec', val: m.precision },
      { id: 'm-recall',    ring: 'ring-rec',  val: m.recall },
      { id: 'm-f1',        ring: 'ring-f1',   val: m.f1_score },
    ];
    metricsMap.forEach(({ id, ring, val }) => {
      const pct = Math.round(val * 100);
      const el = $(id);
      if (el) glitchElement(el, pct + '%', 600);
      const offset = 251.3 * (1 - val);
      setTimeout(() => {
        const ringEl = $(ring);
        if (ringEl) ringEl.style.strokeDashoffset = offset;
      }, 400);
    });

    const cm = m.confusion_matrix;
    if (cm) {
      ['tn','fp','fn','tp'].forEach(key => {
        const el = $(`cm-${key}`)?.querySelector('span');
        if (el) animateCounter(el, cm[key], '', 800);
      });
    }
    $('train-size').textContent = m.train_size + ' emails';
  }

  buildCharts();
}

function buildCharts() {
  const isDark    = document.documentElement.getAttribute('data-theme') === 'dark';
  const textColor = isDark ? 'rgba(126, 184, 212, 0.8)' : '#6b7280';
  const gridColor = isDark ? 'rgba(0, 180, 255, 0.07)'  : '#e5e7eb';

  Chart.defaults.color = textColor;
  Chart.defaults.font.family = "'JetBrains Mono', monospace";

  if (STATE.pieChart)  STATE.pieChart.destroy();
  if (STATE.barChart)  STATE.barChart.destroy();

  const s = STATE.stats;
  const m = STATE.metrics;

  // Doughnut chart
  const pieCtx = $('pieChart')?.getContext('2d');
  if (pieCtx && s) {
    STATE.pieChart = new Chart(pieCtx, {
      type: 'doughnut',
      data: {
        labels: ['Safe Emails', 'Spam Emails'],
        datasets: [{
          data: [s.safe, s.spam],
          backgroundColor: [
            isDark ? 'rgba(0,255,136,0.75)'  : 'rgba(5,150,105,0.75)',
            isDark ? 'rgba(255,45,85,0.75)'  : 'rgba(220,38,38,0.75)',
          ],
          borderColor: [
            isDark ? '#00ff88' : '#059669',
            isDark ? '#ff2d55' : '#dc2626',
          ],
          borderWidth: 2,
          hoverOffset: 12,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '68%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              padding: 20,
              usePointStyle: true,
              pointStyleWidth: 8,
              font: { size: 11, family: "'JetBrains Mono', monospace" }
            }
          },
          tooltip: {
            backgroundColor: isDark ? 'rgba(5,20,50,0.95)' : 'rgba(255,255,255,0.95)',
            borderColor: isDark ? 'rgba(0,212,255,0.3)' : '#e5e7eb',
            borderWidth: 1,
            callbacks: {
              label: ctx => ` ${ctx.label}: ${ctx.parsed} (${Math.round(ctx.parsed/s.total*100)}%)`
            }
          }
        }
      }
    });
  }

  // Bar chart
  const barCtx = $('barChart')?.getContext('2d');
  if (barCtx && m) {
    const vals = [m.accuracy, m.precision, m.recall, m.f1_score].map(v => Math.round(v * 100));
    const colors = isDark
      ? ['rgba(0,212,255,0.8)', 'rgba(191,95,255,0.8)', 'rgba(0,255,136,0.8)', 'rgba(255,107,0,0.8)']
      : ['rgba(37,99,235,0.8)', 'rgba(124,58,237,0.8)', 'rgba(5,150,105,0.8)', 'rgba(234,88,12,0.8)'];
    const borders = isDark
      ? ['#00d4ff', '#bf5fff', '#00ff88', '#ff6b00']
      : ['#2563eb', '#7c3aed', '#059669', '#ea580c'];

    STATE.barChart = new Chart(barCtx, {
      type: 'bar',
      data: {
        labels: ['ACCURACY', 'PRECISION', 'RECALL', 'F1 SCORE'],
        datasets: [{
          label: 'Score (%)',
          data: vals,
          backgroundColor: colors,
          borderColor: borders,
          borderWidth: 1.5,
          borderRadius: 8,
          borderSkipped: false,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            grid: { color: gridColor },
            ticks: {
              callback: v => v + '%',
              font: { size: 10, family: "'JetBrains Mono', monospace" }
            }
          },
          x: {
            grid: { display: false },
            ticks: { font: { size: 9, family: "'JetBrains Mono', monospace" } }
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: isDark ? 'rgba(5,20,50,0.95)' : 'rgba(255,255,255,0.95)',
            borderColor: isDark ? 'rgba(0,212,255,0.3)' : '#e5e7eb',
            borderWidth: 1,
            callbacks: { label: ctx => ` ${ctx.dataset.label}: ${ctx.parsed.y}%` }
          }
        }
      }
    });
  }

  STATE.chartsInitialized = true;
}

function rebuildCharts() {
  if (STATE.currentFolder === 'dashboard') buildCharts();
}

// ── Search ────────────────────────────────────────────────────────
function setupSearch() {
  const input    = $('searchInput');
  const clearBtn = $('searchClear');
  let debounceTimer;

  input.addEventListener('input', () => {
    STATE.searchQuery = input.value.trim();
    clearBtn.classList.toggle('visible', STATE.searchQuery.length > 0);
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      if (['inbox','spam','safe'].includes(STATE.currentFolder)) applyFiltersAndRender();
    }, 280);
  });

  input.addEventListener('keydown', e => { if (e.key === 'Escape') clearSearch(); });
}

function clearSearch() {
  $('searchInput').value = '';
  $('searchClear').classList.remove('visible');
  STATE.searchQuery = '';
  applyFiltersAndRender();
}

// ── Toast ─────────────────────────────────────────────────────────
let toastTimer;
function showToast(msg, duration = 3500) {
  const toast = $('toast');
  $('toastMsg').textContent = msg;
  toast.classList.remove('hidden');
  requestAnimationFrame(() => toast.classList.add('show'));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.classList.add('hidden'), 400);
  }, duration);
}

// ── Helpers ───────────────────────────────────────────────────────
function getInitials(name) {
  if (!name) return '?';
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

function escHtml(str) {
  if (!str) return '';
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

function formatTime(ts) {
  if (!ts) return '';
  const d    = new Date(ts);
  const now  = new Date();
  const diff = now - d;
  const diffH = diff / 3600000;
  const diffD = diff / 86400000;
  if (diffH < 1)  return 'JUST NOW';
  if (diffH < 24) return d.toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' });
  if (diffD < 7)  return d.toLocaleDateString([], { weekday:'short' }).toUpperCase();
  return d.toLocaleDateString([], { month:'short', day:'numeric' }).toUpperCase();
}

function formatFullDate(ts) {
  if (!ts) return '';
  return new Date(ts).toLocaleDateString('en-US', {
    weekday:'long', year:'numeric', month:'long', day:'numeric',
    hour:'2-digit', minute:'2-digit'
  });
}

// ── Keyboard Nav ──────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (!$('emailDetailPanel').classList.contains('hidden')) closeEmailDetail();
    if (!$('overlay').classList.contains('hidden')) closeSidebar();
  }
  if ((e.ctrlKey && e.key === 'f') || (e.key === '/' && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName))) {
    const sf = $('searchContainer');
    if (sf && sf.style.display !== 'none') { e.preventDefault(); $('searchInput').focus(); }
  }
});
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && e.target.classList.contains('email-item')) e.target.click();
});

// ════════════════════════════════════════════
// HUD CLOCK — LIVE REAL-TIME
// ════════════════════════════════════════════
function startClock() {
  const el = $('hudClock');
  if (!el) return;
  function tick() {
    const now = new Date();
    const hh  = String(now.getHours()).padStart(2, '0');
    const mm  = String(now.getMinutes()).padStart(2, '0');
    const ss  = String(now.getSeconds()).padStart(2, '0');
    el.textContent = `${hh}:${mm}:${ss}`;
  }
  tick();
  setInterval(tick, 1000);
}

// ════════════════════════════════════════════
// TOP LOADING BAR
// ════════════════════════════════════════════
const TopLoader = {
  el: null, timer: null, progress: 0,
  start() {
    this.el = $('topLoader');
    if (!this.el) return;
    this.progress = 0;
    this.el.style.width = '0%';
    this.el.classList.add('active');
    const targets = [30, 60, 80, 90]; let i = 0;
    this.timer = setInterval(() => {
      if (i < targets.length && this.el) { this.el.style.width = targets[i++] + '%'; }
    }, 200);
  },
  done() {
    if (this.timer) clearInterval(this.timer);
    if (!this.el) return;
    this.el.style.width = '100%';
    setTimeout(() => { if (this.el) { this.el.classList.remove('active'); this.el.style.width = '0%'; } }, 400);
  }
};

const _origFetch = window.fetch;
window.fetch = async (...args) => {
  TopLoader.start();
  try { const res = await _origFetch(...args); TopLoader.done(); return res; }
  catch (e) { TopLoader.done(); throw e; }
};

// ════════════════════════════════════════════
// MATRIX RAIN EFFECT
// ════════════════════════════════════════════
const MatrixRain = (() => {
  let canvas, ctx, drops = [];
  const CHARS    = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%SPAM';
  const FONT_SZ  = 13;
  const WIDTH    = 180;

  function init() {
    canvas = $('matrixCanvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    canvas.width  = WIDTH;
    canvas.height = window.innerHeight;
    drops = Array(Math.floor(WIDTH / FONT_SZ)).fill(1);
    setInterval(draw, 70);
    window.addEventListener('resize', () => {
      if (canvas) { canvas.height = window.innerHeight; drops = Array(Math.floor(WIDTH / FONT_SZ)).fill(1); }
    });
  }

  function draw() {
    if (!ctx) return;
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    if (!isDark) { ctx.clearRect(0, 0, WIDTH, canvas.height); return; }
    ctx.fillStyle = 'rgba(1,4,9,0.1)';
    ctx.fillRect(0, 0, WIDTH, canvas.height);
    ctx.font = `${FONT_SZ}px "JetBrains Mono",monospace`;
    drops.forEach((y, i) => {
      const c = CHARS[Math.floor(Math.random() * CHARS.length)];
      ctx.fillStyle = `rgba(0,212,255,${Math.random() > 0.9 ? 0.9 : 0.25})`;
      ctx.fillText(c, i * FONT_SZ, y * FONT_SZ);
      if (y * FONT_SZ > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    });
  }
  return { init };
})();

// ════════════════════════════════════════════
// SIDEBAR STATUS ACCURACY
// ════════════════════════════════════════════
function updateSidebarStatus() {
  const accEl = $('sidebarAccuracy');
  if (!accEl || !STATE.metrics) return;
  const pct = Math.round(STATE.metrics.accuracy * 100);
  let val = 0;
  const step = setInterval(() => {
    val = Math.min(val + 2, pct);
    accEl.textContent = `ACC: ${val}%`;
    if (val >= pct) clearInterval(step);
  }, 25);
}

// ════════════════════════════════════════════
// RIPPLE EFFECT ON CLICK
// ════════════════════════════════════════════
document.addEventListener('click', e => {
  const btn = e.target.closest('.btn-analyze, .filter-btn, .nav-item, .quick-btn, .back-btn');
  if (!btn) return;
  const rect   = btn.getBoundingClientRect();
  const size   = Math.max(rect.width, rect.height) * 2;
  const ripple = document.createElement('span');
  ripple.style.cssText = `
    position:absolute; border-radius:50%; pointer-events:none; z-index:1000;
    width:${size}px; height:${size}px;
    left:${e.clientX - rect.left - size/2}px; top:${e.clientY - rect.top - size/2}px;
    background:rgba(0,212,255,0.15);
    transform:scale(0); animation:rippleAnim 0.6s ease-out forwards;
  `;
  btn.style.position = btn.style.position || 'relative';
  btn.style.overflow = 'hidden';
  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 700);
});

if (!document.getElementById('ripple-css')) {
  const s = document.createElement('style');
  s.id = 'ripple-css';
  s.textContent = '@keyframes rippleAnim{to{transform:scale(1);opacity:0}}';
  document.head.appendChild(s);
}

// ════════════════════════════════════════════
// BOOT SEQUENCE
// ════════════════════════════════════════════
function bootSequence() {
  const titleEl = $('pageTitle');
  if (!titleEl) return;
  const steps = ['BOOT...', 'ML READY', 'INBOX'];
  let i = 0;
  const iv = setInterval(() => {
    if (i < steps.length - 1) { glitchElement(titleEl, steps[i++], 250); }
    else { glitchElement(titleEl, 'INBOX', 400); clearInterval(iv); }
  }, 400);
}

// ════════════════════════════════════════════
// INIT FUTURISTIC EFFECTS
// ════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  startClock();
  MatrixRain.init();
  bootSequence();

  const watcher = setInterval(() => {
    if (STATE.metrics) { updateSidebarStatus(); clearInterval(watcher); }
  }, 500);
});
