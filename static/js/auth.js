/**
 * SpamShield AI — Agent Identity & Profile System
 * Instant Access — No Password Barriers!
 * Allows user / reviewer to change display name on the fly.
 */

const Profile = (() => {
  const KEY_NAME = 'spamshield_agent_name';
  const KEY_ROLE = 'spamshield_agent_role';
  const DEFAULT_NAME = 'Anviksh';
  const DEFAULT_ROLE = 'Lead Security Analyst';

  function getName() {
    try {
      return localStorage.getItem(KEY_NAME) || DEFAULT_NAME;
    } catch {
      return DEFAULT_NAME;
    }
  }

  function getRole() {
    try {
      return localStorage.getItem(KEY_ROLE) || DEFAULT_ROLE;
    } catch {
      return DEFAULT_ROLE;
    }
  }

  function setName(name, role) {
    const finalName = (name || DEFAULT_NAME).trim();
    const finalRole = (role || DEFAULT_ROLE).trim();
    try {
      localStorage.setItem(KEY_NAME, finalName);
      localStorage.setItem(KEY_ROLE, finalRole);
    } catch {}
    updateUI(finalName, finalRole);
  }

  function init() {
    updateUI(getName(), getRole());
  }

  function updateUI(name, role) {
    const initial = (name || 'A').charAt(0).toUpperCase();

    _set('topbarUserName', name);
    _set('sidebarUserName', name);
    _set('userAvatar', initial);
    _set('sidebarAvatar', initial);
    _set('sidebarUserRole', role);
  }

  function _set(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  function openEditModal() {
    const modal = document.getElementById('profileEditModal');
    const input = document.getElementById('editAgentName');
    if (modal) {
      if (input) input.value = getName();
      modal.classList.remove('hidden');
      setTimeout(() => input?.focus(), 50);
    }
  }

  function closeEditModal() {
    const modal = document.getElementById('profileEditModal');
    if (modal) modal.classList.add('hidden');
  }

  function saveProfile(e) {
    if (e) e.preventDefault();
    const input = document.getElementById('editAgentName');
    const roleInput = document.getElementById('editAgentRole');
    const newName = input ? input.value : DEFAULT_NAME;
    const newRole = roleInput ? roleInput.value : DEFAULT_ROLE;

    setName(newName, newRole);
    closeEditModal();

    if (typeof showToast === 'function') {
      showToast(`⚡ Identity updated: Agent ${newName}`);
    }
    return false;
  }

  function quickSet(presetName, presetRole) {
    setName(presetName, presetRole || DEFAULT_ROLE);
    closeEditModal();
    if (typeof showToast === 'function') {
      showToast(`⚡ Switched to: Agent ${presetName}`);
    }
  }

  return {
    init,
    getName,
    getRole,
    setName,
    openEditModal,
    closeEditModal,
    saveProfile,
    quickSet
  };
})();

// Alias Auth to Profile for backwards compatibility
const Auth = {
  init: Profile.init,
  openModal: Profile.openEditModal,
  closeModal: Profile.closeEditModal,
  isForced: () => false
};
