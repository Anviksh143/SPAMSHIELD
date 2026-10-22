/**
 * SpamShield AI — Authentication & Agent Profile System
 * Enforces proper Register → Login flow.
 * Data stored in localStorage (client-side only, no server needed).
 */

const Auth = (() => {
  const KEY_ACTIVE = 'spamshield_active_user';
  const KEY_USERS  = 'spamshield_users_db';

  // ── Helpers ──────────────────────────────────────────────────────
  function getUsers() {
    try { return JSON.parse(localStorage.getItem(KEY_USERS) || '[]'); }
    catch { return []; }
  }

  function saveUsers(users) {
    localStorage.setItem(KEY_USERS, JSON.stringify(users));
  }

  function getActiveUser() {
    try { return JSON.parse(localStorage.getItem(KEY_ACTIVE)); }
    catch { return null; }
  }

  function setActiveUser(user) {
    localStorage.setItem(KEY_ACTIVE, JSON.stringify(user));
    updateUI(user);
  }

  function clearActiveUser() {
    localStorage.removeItem(KEY_ACTIVE);
  }

  // ── Init ─────────────────────────────────────────────────────────
  // Called on page load. If no active user → force login modal.
  function init() {
    const user = getActiveUser();
    if (user) {
      updateUI(user);
    } else {
      // No active session — force the modal open (can't close without logging in)
      setTimeout(() => openModal('login', true), 600);
    }
  }

  // ── Update Top Bar & Sidebar UI ───────────────────────────────────
  function updateUI(user) {
    if (!user) return;
    const displayName = user.name || 'Agent';
    const initial     = displayName.charAt(0).toUpperCase();

    _set('topbarUserName',  displayName);
    _set('sidebarUserName', displayName);
    _set('userAvatar',      initial);
    _set('sidebarAvatar',   initial);
    _set('sidebarUserRole', user.role || 'Security Analyst');
  }

  function _set(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  // ── Modal Control ─────────────────────────────────────────────────
  // forcedOpen = true means user CANNOT close it without logging in
  let _forced = false;

  function openModal(defaultTab = 'login', forced = false) {
    _forced = forced;
    const modal = document.getElementById('authModal');
    if (!modal) return;
    modal.classList.remove('hidden');
    switchTab(defaultTab);
    clearError();

    // Show or hide the close button based on forced mode
    const closeBtn = document.getElementById('authCloseBtn');
    if (closeBtn) closeBtn.style.display = forced ? 'none' : 'block';
  }

  function closeModal() {
    if (_forced) {
      // Don't allow closing unless logged in
      showError('Please login or sign up to access SpamShield.');
      return;
    }
    const modal = document.getElementById('authModal');
    if (modal) modal.classList.add('hidden');
    clearError();
  }

  function switchTab(tab) {
    const loginTab     = document.getElementById('tabBtnLogin');
    const registerTab  = document.getElementById('tabBtnRegister');
    const loginForm    = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    clearError();

    if (tab === 'register') {
      loginTab?.classList.remove('active');
      registerTab?.classList.add('active');
      loginForm?.classList.add('hidden');
      registerForm?.classList.remove('hidden');
    } else {
      registerTab?.classList.remove('active');
      loginTab?.classList.add('active');
      registerForm?.classList.add('hidden');
      loginForm?.classList.remove('hidden');
    }
  }

  // ── Register ──────────────────────────────────────────────────────
  function handleRegister(e) {
    if (e) e.preventDefault();
    clearError();

    const name  = document.getElementById('regName')?.value.trim();
    const email = document.getElementById('regEmail')?.value.trim().toLowerCase();
    const pass  = document.getElementById('regPassword')?.value;
    const role  = document.getElementById('regRole')?.value || 'Security Analyst';

    // Validation
    if (!name)  return showError('Agent name is required.');
    if (name.length < 2) return showError('Name must be at least 2 characters.');
    if (!email) return showError('Email address is required.');
    if (!isValidEmail(email)) return showError('Enter a valid email address.');
    if (!pass)  return showError('Password is required.');
    if (pass.length < 4) return showError('Password must be at least 4 characters.');

    const users = getUsers();
    if (users.find(u => u.email === email)) {
      return showError('An account with this email already exists. Please login.');
    }

    // Save new user
    const newUser = { name, email, password: pass, role, registeredAt: new Date().toISOString() };
    users.push(newUser);
    saveUsers(users);
    setActiveUser(newUser);

    _forced = false;
    document.getElementById('authModal')?.classList.add('hidden');

    if (typeof showToast === 'function') {
      showToast(`⚡ Welcome Agent ${name}! Account created.`);
    }

    // Clear form
    ['regName','regEmail','regPassword'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });
    return false;
  }

  // ── Login ─────────────────────────────────────────────────────────
  function handleLogin(e) {
    if (e) e.preventDefault();
    clearError();

    const email = document.getElementById('loginEmail')?.value.trim().toLowerCase();
    const pass  = document.getElementById('loginPassword')?.value;

    if (!email) return showError('Please enter your email address.');
    if (!pass)  return showError('Please enter your password.');

    const users = getUsers();
    const user  = users.find(u => u.email === email);

    if (!user) {
      return showError('No account found with this email. Please sign up first.');
    }

    if (user.password !== pass) {
      return showError('Incorrect password. Please try again.');
    }

    // Success
    setActiveUser(user);
    _forced = false;
    document.getElementById('authModal')?.classList.add('hidden');
    clearError();

    if (typeof showToast === 'function') {
      showToast(`⚡ Access Granted: Agent ${user.name}`);
    }

    // Clear fields
    ['loginEmail','loginPassword'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });
    return false;
  }

  // ── Logout ────────────────────────────────────────────────────────
  function logout() {
    clearActiveUser();
    _forced = true;
    openModal('login', true);
    if (typeof showToast === 'function') {
      showToast('Session ended. Please authenticate again.');
    }
  }

  // ── Helpers ───────────────────────────────────────────────────────
  function showError(msg) {
    const box = document.getElementById('authError');
    if (box) { box.textContent = `⚠ ${msg}`; box.classList.remove('hidden'); }
  }

  function clearError() {
    const box = document.getElementById('authError');
    if (box) box.classList.add('hidden');
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // ── Public API ────────────────────────────────────────────────────
  return {
    init,
    openModal,
    closeModal,
    switchTab,
    handleRegister,
    handleLogin,
    logout,
    getActiveUser
  };
})();
