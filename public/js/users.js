import { showToast } from './utils.js';

export const CAREER_LABELS = {
  'atrfb': '🏛️ Receita Federal (ATRFB)',
  'ses_rj': '🏥 SES-RJ / IASERJ 2026 (IBDO)',
  'marinha_rm2': '⚓ Marinha do Brasil (Praças RM2)',
  'adm_tribunais': '🏢 Tribunais & Área Administrativa',
  'custom': '➕ Concurso Personalizado'
};

export const AVAILABLE_EMOJIS = ['👨‍💼', '👩‍💼', '👨‍⚕️', '👩‍⚕️', '⚓', '🏢', '👨‍🎓', '👩‍🎓', '🎯', '🚀', '⚖️', '💡', '🏆', '🔥'];

export async function render(container) {
  const currentUserId = localStorage.getItem('concursa_active_user_id') || 'user_joao';

  // Fetch users from API
  let users = [];
  try {
    const res = await fetch('/api/users');
    if (res.ok) {
      users = await res.json();
    }
  } catch (err) {
    console.error('Error fetching users:', err);
  }

  container.innerHTML = `
    <div class="users-selection-container fade-in">
      <!-- Header Section -->
      <div class="users-header">
        <div class="users-header-badge">
          <span>👥 Multi-User Switcher</span>
        </div>
        <h1 class="users-title">Quem está estudando agora?</h1>
        <p class="users-subtitle">
          Selecione seu perfil para restaurar automaticamente seu concurso-alvo, 
          histórico de sessões, cronograma e anotações.
        </p>

        <div style="margin-top:1.25rem;">
          <a href="#profile-creator" class="btn btn-primary" style="display:inline-flex; align-items:center; gap:0.5rem; padding:0.75rem 1.5rem; font-weight:700;">
            <span>➕ Criar Novo Perfil de Estudante (Assistente)</span>
          </a>
        </div>
      </div>

      <!-- Profiles Grid -->
      <div class="users-grid" id="users-grid">
        ${users.map(u => {
          const isActive = u.id === currentUserId;
          const careerName = CAREER_LABELS[u.active_career_id] || '🏛️ Receita Federal (ATRFB)';
          return `
            <div class="card user-profile-card ${isActive ? 'user-active' : ''}" data-id="${u.id}" style="position:relative;">
              <button class="btn-edit-user-trigger" data-id="${u.id}" title="Editar Perfil" style="position:absolute; top:10px; right:10px; background:var(--bg-tertiary); border:1px solid var(--border-color); border-radius:6px; padding:3px 8px; font-size:0.75rem; font-weight:600; color:var(--text-secondary); cursor:pointer; z-index:2;">
                ✏️ Editar
              </button>

              <div class="user-avatar-wrapper">
                <div class="user-avatar-emoji">${u.avatar_emoji || '👨‍🎓'}</div>
                ${isActive ? '<span class="user-active-badge">✓ Ativo</span>' : ''}
              </div>

              <div class="user-info">
                <h3 class="user-name">${u.name}</h3>
                <div class="user-career-badge">
                  <span>${careerName}</span>
                </div>
                ${u.target_role ? `<div style="font-size:0.75rem; font-weight:600; color:var(--text-primary); margin-top:0.25rem;">🎯 Cargo: ${u.target_role} (${u.target_banca || 'FGV'})</div>` : ''}
                ${u.experience_level ? `<div style="font-size:0.72rem; color:var(--text-muted); margin-top:0.25rem; text-transform:capitalize;">📊 Nível: ${u.experience_level} • ${u.daily_hours || 4}h/dia</div>` : ''}
                ${u.is_default ? '<span class="user-tag-default">👑 Perfil Titular</span>' : ''}
              </div>

              <div class="user-card-actions">
                <button class="btn ${isActive ? 'btn-primary' : 'btn-secondary'} btn-block btn-select-user" data-id="${u.id}">
                  ${isActive ? '🚀 Continuar Estudando' : '⚡ Entrar neste Perfil'}
                </button>
              </div>
            </div>
          `;
        }).join('')}

        <!-- Add Profile Card via Wizard -->
        <a href="#profile-creator" class="card user-profile-card user-card-add" style="text-decoration:none; color:inherit;">
          <div class="add-user-content">
            <div class="add-user-icon">➕</div>
            <h3>Criar Novo Perfil</h3>
            <p>Configurar um novo estudante com metas e rotina personalizadas.</p>
            <span class="btn btn-secondary btn-sm">Abrir Assistente →</span>
          </div>
        </a>
      </div>
    </div>

    <!-- Modal: Edit User Profile -->
    <div id="modal-edit-user" class="modal" style="display:none;">
      <div class="modal-content" style="max-width:540px;">
        <div class="modal-header" style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-color); padding:1rem 1.25rem;">
          <h3 style="margin:0; font-size:1.15rem; color:var(--text-primary);">✏️ Editar Perfil de Estudante</h3>
          <button class="btn-close" id="btn-close-edit-user-modal" style="background:none; border:none; font-size:1.2rem; cursor:pointer; color:var(--text-muted);">✕</button>
        </div>
        <div class="modal-body" style="display:flex; flex-direction:column; gap:1rem; padding:1.25rem; max-height:75vh; overflow-y:auto;">
          <input type="hidden" id="edit-user-id">

          <!-- Nome -->
          <div>
            <label style="font-size:0.85rem; font-weight:700; display:block; margin-bottom:0.35rem;">Nome do Estudante:</label>
            <input type="text" id="edit-user-name" class="form-control" placeholder="Ex: João, Maria..." maxlength="30">
          </div>

          <!-- Avatar Emoji -->
          <div>
            <label style="font-size:0.85rem; font-weight:700; display:block; margin-bottom:0.35rem;">Avatar Emoji:</label>
            <div class="emoji-picker-row" id="edit-emoji-picker" style="display:flex; flex-wrap:wrap; gap:0.4rem;">
              ${AVAILABLE_EMOJIS.map((emoji) => `
                <button type="button" class="emoji-chip-btn edit-emoji-btn" data-emoji="${emoji}" style="font-size:1.3rem; padding:6px 10px; border-radius:8px; border:1px solid var(--border-color); background:var(--bg-tertiary); cursor:pointer;">${emoji}</button>
              `).join('')}
            </div>
          </div>

          <!-- Concurso Alvo -->
          <div>
            <label style="font-size:0.85rem; font-weight:700; display:block; margin-bottom:0.35rem;">Concurso-Alvo Principal:</label>
            <select id="edit-user-career" class="form-control">
              <option value="atrfb">🏛️ Receita Federal do Brasil (ATRFB)</option>
              <option value="ses_rj">🏥 Saúde Pública (SES-RJ)</option>
              <option value="marinha_rm2">⚓ Marinha do Brasil (Praças RM2)</option>
              <option value="adm_tribunais">🏢 Carreiras Administrativas & Tribunais</option>
            </select>
          </div>

          <!-- Cargo & Banca -->
          <div class="grid-2">
            <div>
              <label style="font-size:0.85rem; font-weight:700; display:block; margin-bottom:0.35rem;">Cargo Pretendido:</label>
              <input type="text" id="edit-user-role" class="form-control" placeholder="Ex: Analista, Auditor, Enfermeiro...">
            </div>
            <div>
              <label style="font-size:0.85rem; font-weight:700; display:block; margin-bottom:0.35rem;">Banca Examinadora:</label>
              <input type="text" id="edit-user-banca" class="form-control" placeholder="Ex: FGV, Cebraspe, IBDO...">
            </div>
          </div>

          <!-- Nível e Horas -->
          <div class="grid-2">
            <div>
              <label style="font-size:0.85rem; font-weight:700; display:block; margin-bottom:0.35rem;">Nível de Experiência:</label>
              <select id="edit-user-level" class="form-control">
                <option value="iniciante">🌱 Iniciante (Construindo Base)</option>
                <option value="intermediario">📖 Intermediário (Consolidação)</option>
                <option value="reta_final">🔥 Reta Final (Pós-Edital / Questões)</option>
              </select>
            </div>
            <div>
              <label style="font-size:0.85rem; font-weight:700; display:block; margin-bottom:0.35rem;">Meta de Horas Diárias:</label>
              <select id="edit-user-hours" class="form-control">
                <option value="2">2 horas / dia</option>
                <option value="3">3 horas / dia</option>
                <option value="4">4 horas / dia (Recomendado)</option>
                <option value="6">6 horas / dia</option>
                <option value="8">8 horas / dia (Intensivo)</option>
              </select>
            </div>
          </div>

          <!-- Turnos de Estudo -->
          <div>
            <label style="font-size:0.85rem; font-weight:700; display:block; margin-bottom:0.35rem;">Turnos Disponíveis para Estudar:</label>
            <div style="display:flex; gap:1.25rem; font-size:0.85rem;">
              <label style="display:flex; align-items:center; gap:0.4rem; cursor:pointer;">
                <input type="checkbox" name="edit-user-shift" value="manha"> 🌅 Manhã
              </label>
              <label style="display:flex; align-items:center; gap:0.4rem; cursor:pointer;">
                <input type="checkbox" name="edit-user-shift" value="tarde"> ☀️ Tarde
              </label>
              <label style="display:flex; align-items:center; gap:0.4rem; cursor:pointer;">
                <input type="checkbox" name="edit-user-shift" value="noite"> 🌙 Noite
              </label>
            </div>
          </div>

          <!-- Material Preferido -->
          <div>
            <label style="font-size:0.85rem; font-weight:700; display:block; margin-bottom:0.35rem;">Estilo de Material Preferido:</label>
            <select id="edit-user-material" class="form-control">
              <option value="enxuto">⚡ Caderno Enxuto IA (Direto ao ponto, artigos e súmulas)</option>
              <option value="detalhado">📚 Teoria Completa & Doutrina Detalhada</option>
              <option value="questoes">🎯 Foco Extremo em Questões e Engenharia Reversa</option>
            </select>
          </div>
        </div>

        <div class="modal-footer" style="display:flex; justify-content:space-between; align-items:center; padding:1rem 1.25rem; border-top:1px solid var(--border-color); background:var(--bg-tertiary);">
          <button class="btn btn-danger btn-sm" id="btn-delete-user-profile" style="display:none;">🗑️ Excluir Perfil</button>
          <div style="display:flex; gap:0.5rem; margin-left:auto;">
            <button class="btn btn-secondary" id="btn-cancel-edit-user">Cancelar</button>
            <button class="btn btn-primary" id="btn-save-edit-user">💾 Salvar Alterações</button>
          </div>
        </div>
      </div>
    </div>
  `;

  setupUserEvents(users, container);
}

function setupUserEvents(users, container) {
  let editSelectedEmoji = AVAILABLE_EMOJIS[0];

  // Select User
  document.querySelectorAll('.btn-select-user').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      const userId = btn.dataset.id;
      const user = users.find(u => u.id === userId);
      if (!user) return;

      await switchActiveUser(user);
    });
  });

  // Edit Modal Elements
  const editModal = document.getElementById('modal-edit-user');
  const btnCloseEdit = document.getElementById('btn-close-edit-user-modal');
  const btnCancelEdit = document.getElementById('btn-cancel-edit-user');
  const btnSaveEdit = document.getElementById('btn-save-edit-user');
  const btnDeleteUser = document.getElementById('btn-delete-user-profile');

  const closeEditModal = () => {
    if (editModal) editModal.style.display = 'none';
  };

  if (btnCloseEdit) btnCloseEdit.addEventListener('click', closeEditModal);
  if (btnCancelEdit) btnCancelEdit.addEventListener('click', closeEditModal);

  // Edit Emoji Picker
  document.querySelectorAll('.edit-emoji-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.edit-emoji-btn').forEach(b => {
        b.style.borderColor = 'var(--border-color)';
        b.style.background = 'var(--bg-tertiary)';
      });
      btn.style.borderColor = 'var(--color-primary)';
      btn.style.background = 'var(--color-primary-bg)';
      editSelectedEmoji = btn.dataset.emoji;
    });
  });

  // Open Edit Modal Triggers
  document.querySelectorAll('.btn-edit-user-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const userId = btn.dataset.id;
      const user = users.find(u => u.id === userId);
      if (!user || !editModal) return;

      document.getElementById('edit-user-id').value = user.id;
      document.getElementById('edit-user-name').value = user.name || '';
      document.getElementById('edit-user-career').value = user.active_career_id || 'atrfb';
      document.getElementById('edit-user-role').value = user.target_role || '';
      document.getElementById('edit-user-banca').value = user.target_banca || 'FGV';
      document.getElementById('edit-user-level').value = user.experience_level || 'iniciante';
      document.getElementById('edit-user-hours').value = user.daily_hours || '4';
      document.getElementById('edit-user-material').value = user.preferred_material || 'enxuto';

      editSelectedEmoji = user.avatar_emoji || AVAILABLE_EMOJIS[0];
      document.querySelectorAll('.edit-emoji-btn').forEach(b => {
        const isSel = b.dataset.emoji === editSelectedEmoji;
        b.style.borderColor = isSel ? 'var(--color-primary)' : 'var(--border-color)';
        b.style.background = isSel ? 'var(--color-primary-bg)' : 'var(--bg-tertiary)';
      });

      // Study shifts checkboxes
      let shifts = [];
      try {
        shifts = typeof user.study_shifts === 'string' ? JSON.parse(user.study_shifts) : (user.study_shifts || []);
      } catch (e) {
        shifts = ['manha', 'noite'];
      }
      document.querySelectorAll('input[name="edit-user-shift"]').forEach(cb => {
        cb.checked = shifts.includes(cb.value);
      });

      // Delete button visibility (hide for default titular user)
      if (btnDeleteUser) {
        btnDeleteUser.style.display = user.is_default ? 'none' : 'inline-block';
        btnDeleteUser.dataset.id = user.id;
        btnDeleteUser.dataset.name = user.name;
      }

      editModal.style.display = 'flex';
      document.getElementById('edit-user-name')?.focus();
    });
  });

  // Save Edit User
  if (btnSaveEdit) {
    btnSaveEdit.addEventListener('click', async () => {
      const id = document.getElementById('edit-user-id')?.value;
      const name = document.getElementById('edit-user-name')?.value.trim();
      const career = document.getElementById('edit-user-career')?.value;
      const role = document.getElementById('edit-user-role')?.value.trim();
      const banca = document.getElementById('edit-user-banca')?.value.trim();
      const level = document.getElementById('edit-user-level')?.value;
      const hours = parseInt(document.getElementById('edit-user-hours')?.value, 10) || 4;
      const material = document.getElementById('edit-user-material')?.value;

      const checkedShifts = Array.from(document.querySelectorAll('input[name="edit-user-shift"]:checked')).map(cb => cb.value);

      if (!name) {
        showToast('O nome do estudante não pode ficar vazio.', 'warning');
        return;
      }

      try {
        const res = await fetch(`/api/users/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            avatar_emoji: editSelectedEmoji,
            active_career_id: career,
            target_role: role,
            target_banca: banca,
            experience_level: level,
            daily_hours: hours,
            study_shifts: checkedShifts,
            preferred_material: material
          })
        });

        if (res.ok) {
          const updated = await res.json();
          showToast(`Perfil "${updated.name}" atualizado com sucesso!`, 'success');
          closeEditModal();

          // Sincroniza localStorage se o usuário editado for o ativo
          const activeId = localStorage.getItem('concursa_active_user_id');
          if (activeId === id) {
            localStorage.setItem('concursa_active_user_name', updated.name);
            localStorage.setItem('concursa_active_user_avatar', updated.avatar_emoji);
            localStorage.setItem('concursa_active_exam', updated.active_career_id);
            localStorage.setItem('concursa_active_exam_title', CAREER_LABELS[updated.active_career_id] || 'Receita Federal (ATRFB)');
            if (window.updateTopBarDisplays) window.updateTopBarDisplays();
          }

          // Recarrega a tela de usuários
          render(container);
        } else {
          showToast('Erro ao atualizar perfil.', 'error');
        }
      } catch (err) {
        console.error('Error updating user:', err);
        showToast('Erro ao atualizar perfil.', 'error');
      }
    });
  }

  // Delete User
  if (btnDeleteUser) {
    btnDeleteUser.addEventListener('click', async () => {
      const id = btnDeleteUser.dataset.id;
      const name = btnDeleteUser.dataset.name;

      if (!confirm(`Tem certeza que deseja excluir o perfil "${name}"?`)) {
        return;
      }

      try {
        const res = await fetch(`/api/users/${id}`, { method: 'DELETE' });
        if (res.ok) {
          showToast(`Perfil "${name}" excluído com sucesso.`, 'success');
          closeEditModal();

          // Se o usuário excluído era o ativo, volta para o titular
          const activeId = localStorage.getItem('concursa_active_user_id');
          if (activeId === id) {
            const fallback = users.find(u => u.is_default) || users[0];
            if (fallback) {
              await switchActiveUser(fallback);
              return;
            }
          }

          render(container);
        } else {
          const errData = await res.json().catch(() => ({}));
          showToast(errData.error || 'Erro ao excluir perfil.', 'error');
        }
      } catch (err) {
        console.error('Error deleting user:', err);
        showToast('Erro ao excluir perfil.', 'error');
      }
    });
  }
}

export async function switchActiveUser(user) {
  try {
    await fetch(`/api/users/${user.id}/activate`, { method: 'POST' });
  } catch (e) {}

  localStorage.setItem('concursa_active_user_id', user.id);
  localStorage.setItem('concursa_active_user_name', user.name);
  localStorage.setItem('concursa_active_user_avatar', user.avatar_emoji || '👨‍💼');

  // Set user active career
  if (user.active_career_id) {
    localStorage.setItem('concursa_active_exam', user.active_career_id);
    localStorage.setItem('concursa_active_exam_title', CAREER_LABELS[user.active_career_id] || 'Receita Federal (ATRFB)');
  }

  showToast(`👋 Perfil Ativo: ${user.name}`, 'success');

  // Update Top Bar Displays
  if (window.updateTopBarDisplays) {
    window.updateTopBarDisplays();
  }

  // Navigate to Dashboard
  setTimeout(() => {
    window.location.hash = '#dashboard';
  }, 300);
}
