/**
 * SpamShield AI — Cyberpunk Authentication & Agent Profile System
 * Manages user registration, login, profile persistence & topbar display
 */

const Auth = (() => {
  const STORAGE_KEY_ACTIVE = 'spamshield_active_user';
  const STORAGE_KEY_USERS  = 'spamshield_users_db';

  // Default demo user if none exists
  const DEFAULT_GUEST = {
    name: 'Anviksh',
    email: 'anviksh@spamshield.ai',
    role: 'Cyber Security Analyst',
    avatar: 'A'
  };

  function getStoredUsers() {
    try {
      const data = localStorage.getItem(STORAGE_KEY_USERS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  function saveUsers(users) {
    try {
      localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(users));
    } catch (e) {}
  }

  function getActiveUser() {
    try {
      const data = localStorage.getItem(STORAGE_KEY_ACTIVE);
      if (data) return JSON.parse(data);
    } catch (e) {}
    return null;
  }

  function setActiveUser(user) {
    try {
      localStorage.setItem(STORAGE_KEY_ACTIVE, JSON.stringify(user));
    } catch (e) {}
    updateUI(user);
  }

  function init() {
    let user = getActiveUser();
    if (!user) {
      // First time visitor - initialize with Anviksh profile as active agent or prompt
      user = DEFAULT_GUEST;
      setActiveUser(user);
    } else {
      updateUI(user);
    }
  }

  function updateUI(user) {
    const nameEl     = document.getElementById('topbarUserName');
    const avatarEl   = document.getElementById('userAvatar');
    const sideAvatar = document.getElementById('sidebarAvatar');
    const roleEl     = document.getElementById('sidebarUserRole');
    const sideNameEl = document.getElementById('sidebarUserName');

    const displayName = user && user.name ? user.name : 'Agent Guest';
    const initial = displayName.charAt(0).toUpperCase();

    if (nameEl)     nameEl.textContent     = displayName;
    if (avatarEl)   avatarEl.textContent   = initial;
    if (sideAvatar) sideAvatar.textContent = initial;
    if (sideNameEl) sideNameEl.textContent = displayName;
    if (roleEl)     roleEl.textContent     = user.role || 'Security Analyst';
  }

  function openModal(defaultTab = 'login') {
    const modal = document.getElementById('authModal');
    if (modal) {
      modal.classList.remove('hidden');
      switchTab(defaultTab);
    }
  }

  function closeModal() {
    const modal = document.getElementById('authModal');
    if (modal) modal.classList.add('hidden');
  }

  function switchTab(tab) {
    const loginTab = document.getElementById('tabBtnLogin');
    const registerTab = document.getElementById('tabBtnRegister');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const errorBox = document.getElementById('authError');

    if (errorBox) errorBox.classList.add('hidden');

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

  function handleRegister(e) {
    if (e) e.preventDefault();
    const nameInput = document.getElementById('regName');
    const emailInput = document.getElementById('regEmail');
    const passInput = document.getElementById('regPassword');
    const roleInput = document.getElementById('regRole');
    const errorBox = document.getElementById('authError');

    const name = nameInput?.value.trim();
    const email = emailInput?.value.trim();
    const pass = passInput?.value.trim();
    const role = roleInput?.value || 'Cyber Security Analyst';

    if (!name) {
      showError('Please enter your Agent / Full Name');
      return false;
    }
    if (!email) {
      showError('Please enter a valid email address');
      return false;
    }

    const users = getStoredUsers();
    const existing = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (existing) {
      showError('Agent profile with this email already exists!');
      return false;
    }

    const newUser = {
      name: name,
      email: email,
      password: pass,
      role: role,
      registeredAt: new Date().toISOString()
    };

    users.push(newUser);
    saveUsers(users);
    setActiveUser(newUser);

    closeModal();
    if (typeof showToast === 'function') {
      showToast(`⚡ Identity Verified! Welcome Agent ${name}`);
    }

    // Clear form
    if (nameInput) nameInput.value = '';
    if (emailInput) emailInput.value = '';
    if (passInput) passInput.value = '';
    return false;
  }

  function handleLogin(e) {
    if (e) e.preventDefault();
    const emailInput = document.getElementById('loginEmail');
    const passInput = document.getElementById('loginPassword');

    const email = emailInput?.value.trim().toLowerCase();
    const pass = passInput?.value.trim();

    if (!email) {
      showError('Please enter your email / Agent ID');
      return false;
    }

    const users = getStoredUsers();
    const user = users.find(u => u.email.toLowerCase() === email);

    if (!user) {
      // Allow fallback login with entered name or credentials
      const tempUser = {
        name: email.split('@')[0].toUpperCase(),
        email: email,
        role: 'Verified Analyst'
      };
      setActiveUser(tempUser);
      closeModal();
      if (typeof showToast === 'function') {
        showToast(`⚡ Access Granted: Agent ${tempUser.name}`);
      }
      return false;
    }

    if (pass && user.password && user.password !== pass) {
      showError('Invalid access password');
      return false;
    }

    setActiveUser(user);
    closeModal();
    if (typeof showToast === 'function') {
      showToast(`⚡ Access Granted: Agent ${user.name}`);
    }
    return false;
  }

  function quickGuestLogin(name = 'Anviksh') {
    const user = {
      name: name,
      email: `${name.toLowerCase()}@spamshield.ai`,
      role: 'Lead Security Agent',
      avatar: name.charAt(0).toUpperCase()
    };
    setActiveUser(user);
    closeModal();
    if (typeof showToast === 'function') {
      showToast(`⚡ Active Profile: Agent ${user.name}`);
    }
  }

  function logout() {
    localStorage.removeItem(STORAGE_KEY_ACTIVE);
    openModal('login');
    if (typeof showToast === 'function') {
      showToast('Session terminated. Please authenticate.');
    }
  }

  function showError(msg) {
    const errorBox = document.getElementById('authError');
    if (errorBox) {
      errorBox.textContent = `⚠ ${msg}`;
      errorBox.classList.remove('hidden');
    }
  }

  return {
    init,
    openModal,
    closeModal,
    switchTab,
    handleRegister,
    handleLogin,
    quickGuestLogin,
    logout,
    getActiveUser
  };
})();
