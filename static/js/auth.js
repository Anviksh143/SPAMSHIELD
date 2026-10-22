/**
 * SpamShield AI — Authentication & Agent Profile System
 * STRICT Security Clearance:
 * 1. Default state is LOCKED.
 * 2. If no account exists, user MUST SIGN UP with Name, Email & Password.
 * 3. Registered user's Name is saved and shown in Top Bar and Sidebar.
 * 4. Cannot bypass by clicking outside or pressing Escape.
 */

const Auth = (() => {
  const KEY_ACTIVE  = 'spamshield_active_user_v3';
  const KEY_USERS   = 'spamshield_users_db_v3';

  // Wipe any legacy/guest data from older versions
  try {
    localStorage.removeItem('spamshield_active_user');
    localStorage.removeItem('spamshield_active_user_v2');
  } catch (e) {}

  function getUsers() {
    try {
      const data = localStorage.getItem(KEY_USERS);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  function saveUsers(users) {
    try {
      localStorage.setItem(KEY_USERS, JSON.stringify(users));
    } catch (e) {}
  }

  function getActiveUser() {
    try {
      const data = localStorage.getItem(KEY_ACTIVE);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  }

  function setActiveUser(user) {
    try {
      localStorage.setItem(KEY_ACTIVE, JSON.stringify(user));
    } catch (e) {}
    updateUI(user);
  }

  function clearActiveSession() {
    try {
      localStorage.removeItem(KEY_ACTIVE);
    } catch (e) {}
    resetUI();
  }

  let _forced = true;

  function init() {
    const active = getActiveUser();
    const users = getUsers();

    // Verify active user truly exists in registered database
    const verified = active && active.email && users.some(u => u.email.toLowerCase() === active.email.toLowerCase());

    if (verified) {
      _forced = false;
      updateUI(active);
      const modal = document.getElementById('authModal');
      if (modal) modal.classList.add('hidden');
    } else {
      clearActiveSession();
      _forced = true;
      // If no users registered yet, prompt SIGN UP directly!
      const tab = users.length === 0 ? 'register' : 'login';
      openModal(tab, true);
    }
  }

  function updateUI(user) {
    if (!user) {
      resetUI();
      return;
    }

    const name = user.name || 'Agent';
    const role = user.role || 'Cyber Security Analyst';
    const initial = name.charAt(0).toUpperCase();

    _set('topbarUserName', name);
    _set('sidebarUserName', name);
    _set('userAvatar', initial);
    _set('sidebarAvatar', initial);
    _set('sidebarUserRole', role);

    const rankEl = document.getElementById('userRank');
    if (rankEl) rankEl.textContent = 'AGENT ONLINE';

    const badge = document.getElementById('sidebarAgentBadge');
    if (badge) {
      badge.textContent = 'ONLINE';
      badge.style.color = 'var(--neon-green)';
      badge.style.borderColor = 'rgba(0, 255, 136, 0.4)';
      badge.style.background = 'rgba(0, 255, 136, 0.1)';
    }

    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) logoutBtn.style.display = 'inline-flex';
  }

  function resetUI() {
    _set('topbarUserName', 'Login / Sign Up');
    _set('sidebarUserName', 'Agent Locked');
    _set('userAvatar', '🔒');
    _set('sidebarAvatar', '🔒');
    _set('sidebarUserRole', 'Access Required');

    const rankEl = document.getElementById('userRank');
    if (rankEl) rankEl.textContent = 'AUTH REQUIRED';

    const badge = document.getElementById('sidebarAgentBadge');
    if (badge) {
      badge.textContent = 'LOCKED';
      badge.style.color = 'var(--neon-red)';
      badge.style.borderColor = 'rgba(255, 45, 85, 0.4)';
      badge.style.background = 'rgba(255, 45, 85, 0.1)';
    }

    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) logoutBtn.style.display = 'none';
  }

  function _set(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  function openModal(tab = 'login', forced = false) {
    _forced = forced;
    const modal = document.getElementById('authModal');
    const closeBtn = document.getElementById('authCloseBtn');
    if (!modal) return;

    modal.classList.remove('hidden');
    switchTab(tab);
    clearError();

    if (closeBtn) {
      closeBtn.style.display = forced ? 'none' : 'block';
    }
  }

  function closeModal() {
    if (_forced) {
      showError('Access denied: You must Sign Up or Login first!');
      return;
    }
    const modal = document.getElementById('authModal');
    if (modal) modal.classList.add('hidden');
    clearError();
  }

  function switchTab(tab) {
    clearError();
    const isReg = tab === 'register';
    const loginTab = document.getElementById('tabBtnLogin');
    const registerTab = document.getElementById('tabBtnRegister');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    loginTab?.classList.toggle('active', !isReg);
    registerTab?.classList.toggle('active', isReg);
    loginForm?.classList.toggle('hidden', isReg);
    registerForm?.classList.toggle('hidden', !isReg);
  }

  function handleRegister(e) {
    if (e) e.preventDefault();
    clearError();

    const name = (document.getElementById('regName')?.value || '').trim();
    const email = (document.getElementById('regEmail')?.value || '').trim().toLowerCase();
    const pass = document.getElementById('regPassword')?.value || '';
    const role = document.getElementById('regRole')?.value || 'Cyber Security Analyst';

    if (!name || name.length < 2) {
      return showError('Please enter your full name (minimum 2 characters).');
    }
    if (!email || !_validEmail(email)) {
      return showError('Please enter a valid email address.');
    }
    if (!pass || pass.length < 4) {
      return showError('Password must be at least 4 characters long.');
    }

    const users = getUsers();
    if (users.some(u => u.email.toLowerCase() === email)) {
      return showError('An account with this email already exists! Please click LOGIN.');
    }

    const newUser = {
      name,
      email,
      password: pass,
      role,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    saveUsers(users);
    setActiveUser(newUser);

    _forced = false;
    const modal = document.getElementById('authModal');
    if (modal) modal.classList.add('hidden');

    ['regName', 'regEmail', 'regPassword'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });

    if (typeof showToast === 'function') {
      showToast(`⚡ Identity Created! Welcome Agent ${name}`);
    }
    return false;
  }

  function handleLogin(e) {
    if (e) e.preventDefault();
    clearError();

    const email = (document.getElementById('loginEmail')?.value || '').trim().toLowerCase();
    const pass = document.getElementById('loginPassword')?.value || '';

    if (!email) return showError('Please enter your registered email.');
    if (!pass) return showError('Please enter your password.');

    const users = getUsers();
    if (users.length === 0) {
      return showError('No accounts found on this system! Please click SIGN UP to create your account.');
    }

    const user = users.find(u => u.email.toLowerCase() === email);
    if (!user) {
      return showError('Account not found! You must SIGN UP first before logging in.');
    }

    if (user.password !== pass) {
      return showError('Incorrect password! Please check your credentials.');
    }

    setActiveUser(user);
    _forced = false;
    const modal = document.getElementById('authModal');
    if (modal) modal.classList.add('hidden');

    ['loginEmail', 'loginPassword'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });

    if (typeof showToast === 'function') {
      showToast(`⚡ Access Granted — Welcome Agent ${user.name}`);
    }
    return false;
  }

  function logout() {
    clearActiveSession();
    _forced = true;
    const users = getUsers();
    openModal(users.length === 0 ? 'register' : 'login', true);
    if (typeof showToast === 'function') {
      showToast('Session ended. Please login again.');
    }
  }

  function showError(msg) {
    const box = document.getElementById('authError');
    if (box) {
      box.textContent = `⚠ ${msg}`;
      box.classList.remove('hidden');
    }
  }

  function clearError() {
    const box = document.getElementById('authError');
    if (box) box.classList.add('hidden');
  }

  function _validEmail(e) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  }

  return {
    init,
    openModal,
    closeModal,
    switchTab,
    handleRegister,
    handleLogin,
    logout,
    getActiveUser,
    isForced: () => _forced
  };
})();
