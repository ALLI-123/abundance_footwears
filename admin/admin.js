// admin/admin.js — WITH SERVER-SIDE AUTHENTICATION

// ⚠️ ONLY THE URL — NO PASSWORD HERE!
const ADMIN_API_URL = 'https://script.google.com/macros/s/AKfycbwI9xvgWhhXq_GutJTVchx158C5nDXBj8kwemPV4Du2uKNmraf7kNEU0BMS-d5i5UxV/exec';

let allSales = [];
let allPartners = [];
let authToken = null; // The magic key

// ============================================================
// 🔐 LOGIN SYSTEM
// ============================================================
function verifyAdmin() {
  const input = document.getElementById('adminPassword').value;
  const errorEl = document.getElementById('gateError');
  const btn = document.querySelector('.gate-btn');
  
  if (!input) {
    errorEl.textContent = 'Please enter your password';
    return;
  }
  
  // Disable button, show loading
  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Verifying...';
  errorEl.textContent = '';
  
  // Send password to server for validation
  fetch(`${ADMIN_API_URL}?action=login&password=${encodeURIComponent(input)}`)
    .then(res => res.json())
    .then(data => {
      if (data.success && data.token) {
        // ✅ Login successful — store token
        authToken = data.token;
        sessionStorage.setItem('abundance_auth_token', data.token);
        sessionStorage.setItem('abundance_admin', 'true');
        showDashboard();
      } else {
        // ❌ Login failed
        errorEl.textContent = data.message || 'Incorrect password';
        btn.disabled = false;
        btn.innerHTML = 'Unlock Dashboard';
      }
    })
    .catch(error => {
      console.error('Login error:', error);
      errorEl.textContent = 'Network error. Please try again.';
      btn.disabled = false;
      btn.innerHTML = 'Unlock Dashboard';
    });
}

function logoutAdmin() {
  // Tell server to invalidate the token
  if (authToken) {
    fetch(`${ADMIN_API_URL}?action=logout&token=${authToken}`).catch(() => {});
  }
  
  // Clear local storage
  sessionStorage.removeItem('abundance_auth_token');
  sessionStorage.removeItem('abundance_admin');
  sessionStorage.removeItem('abundance_active_section');
  authToken = null;
  location.reload();
}

function showDashboard() {
  document.getElementById('adminGate').style.display = 'none';
  document.getElementById('adminDashboard').style.display = 'grid';
  loadDashboardData();
}

// Check if already logged in on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedToken = sessionStorage.getItem('abundance_auth_token');
  if (savedToken && sessionStorage.getItem('abundance_admin') === 'true') {
    authToken = savedToken;
    showDashboard();
    
    // Restore last section
    const lastSection = sessionStorage.getItem('abundance_active_section');
    if (lastSection && lastSection !== 'overview') {
      const navItem = document.querySelector(`.nav-item[data-section="${lastSection}"]`);
      if (navItem) {
        setTimeout(() => switchSection(lastSection, navItem), 300);
      }
    }
  }
  
  // Enter key on password field
  const pwInput = document.getElementById('adminPassword');
  if (pwInput) {
    pwInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') verifyAdmin();
    });
  }
});

// ============================================================
// 🔒 SECURE API CALLS (All include the token)
// ============================================================
function secureFetch(action) {
  if (!authToken) {
    // Token missing — force logout
    logoutAdmin();
    return Promise.reject(new Error('No authentication token'));
  }
  
  return fetch(`${ADMIN_API_URL}?action=${action}&token=${authToken}`)
    .then(res => res.json())
    .then(data => {
      // If server says unauthorized, kick user out
      if (data.error === 'UNAUTHORIZED') {
        alert('Your session has expired. Please log in again.');
        logoutAdmin();
        throw new Error('Session expired');
      }
      return data;
    });
}

// ============================================================
// 📊 LOAD DATA
// ============================================================
async function loadDashboardData() {
  try {
    const [salesRes, partnersRes, summaryRes] = await Promise.all([
      secureFetch('sales'),
      secureFetch('partners'),
      secureFetch('summary')
    ]);
    
    if (salesRes.success) {
      allSales = salesRes.sales;
      renderSalesTable(allSales);
    }
    
    if (partnersRes.success) {
      allPartners = partnersRes.partners;
      renderPartnersGrid(allPartners);
      populatePartnerFilter(allPartners);
    }
    
    if (summaryRes.success) {
      renderSummary(summaryRes.summary);
    }
    
  } catch (error) {
    console.error('Error loading data:', error);
    if (error.message !== 'Session expired') {
      alert('Failed to load data. Please check your connection.');
    }
  }
}

function refreshData() {
  loadDashboardData();
}

// ============================================================
// 📈 RENDER SUMMARY
// ============================================================
function renderSummary(summary) {
  document.getElementById('totalSales').textContent = `₦${summary.totalSales.toLocaleString()}`;
  document.getElementById('totalTransactions').textContent = summary.totalTransactions;
  document.getElementById('abundanceEarnings').textContent = `₦${summary.totalabundanceShare.toLocaleString()}`;
  document.getElementById('partnerPayout').textContent = `₦${summary.totalPartnerShare.toLocaleString()}`;
  document.getElementById('paidCount').textContent = summary.paidCount;
  document.getElementById('pendingPayout').textContent = `₦${(summary.totalPartnerShare - getTotalPaid(allSales)).toLocaleString()}`;
  document.getElementById('pendingCount').textContent = summary.pendingCount;
}

function getTotalPaid(sales) {
  return sales.filter(s => s.status === 'Paid').reduce((sum, s) => sum + s.partnerShareAmount, 0);
}

// ============================================================
// 👥 RENDER PARTNERS
// ============================================================
function renderPartnersGrid(partners) {
  const grid = document.getElementById('partnersGrid');
  
  if (partners.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-users"></i>
        <p>No partners yet. Add partners in your Google Sheet.</p>
      </div>
    `;
    return;
  }
  
  grid.innerHTML = partners.map(p => {
    const balance = p.totalEarned - p.totalPaid;
    const initials = p.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    
    return `
      <div class="partner-card">
        <div class="partner-header">
          <div class="partner-avatar">${initials}</div>
          <span class="partner-role">${p.role}</span>
        </div>
        <h4 class="partner-name">${p.name}</h4>
        <p style="font-size:0.8rem;color:var(--gray);">Default share: ${p.defaultSharePercent}%</p>
        
        <div class="partner-stats">
          <div class="stat-item">
            <div class="stat-label">Total Earned</div>
            <div class="stat-value">₦${p.totalEarned.toLocaleString()}</div>
          </div>
          <div class="stat-item">
            <div class="stat-label">Total Paid</div>
            <div class="stat-value">₦${p.totalPaid.toLocaleString()}</div>
          </div>
          <div class="stat-item" style="grid-column: span 2;">
            <div class="stat-label">Balance Owed</div>
            <div class="stat-value balance ${balance === 0 ? 'zero' : ''}">
              ${balance === 0 ? '✓ Settled' : `₦${balance.toLocaleString()}`}
            </div>
          </div>
        </div>
        
        <div class="partner-actions">
          <button class="btn-whatsapp-sm" onclick="sendPartnerReminder('${p.whatsapp}', '${p.name}', ${balance})">
            <i class="fab fa-whatsapp"></i> ${balance > 0 ? 'Send Reminder' : 'Message'}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// ============================================================
// 📋 RENDER SALES TABLE
// ============================================================
function renderSalesTable(sales) {
  const tbody = document.getElementById('salesTableBody');
  
  if (sales.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="10" class="empty-state">
          <i class="fas fa-receipt"></i>
          <p>No sales yet. Start selling!</p>
        </td>
      </tr>
    `;
    return;
  }
  
  tbody.innerHTML = sales.map(s => `
    <tr>
      <td>${s.date}</td>
      <td><strong>${s.orderId}</strong></td>
      <td>${s.product}</td>
      <td>${s.customer}</td>
      <td>₦${s.sellingPrice.toLocaleString()}</td>
      <td>${s.partnerName || '—'}</td>
      <td>₦${s.partnerShareAmount.toLocaleString()} <small style="color:var(--gray);">(${s.partnerSharePercent}%)</small></td>
      <td><strong>₦${s.abundanceShare.toLocaleString()}</strong></td>
      <td><span class="status-badge ${s.status.toLowerCase()}">${s.status}</span></td>
      <td>
        <button class="btn-action" onclick="sendSaleReminder('${s.orderId}', '${s.partnerName || ''}', ${s.partnerShareAmount})">
          <i class="fab fa-whatsapp"></i>
        </button>
      </td>
    </tr>
  `).join('');
}

// ============================================================
// 🔍 FILTERS
// ============================================================
function populatePartnerFilter(partners) {
  const select = document.getElementById('filterPartner');
  // Clear existing options except first
  while (select.options.length > 1) select.remove(1);
  
  partners.forEach(p => {
    const option = document.createElement('option');
    option.value = p.id;
    option.textContent = p.name;
    select.appendChild(option);
  });
}

function filterSales() {
  const partnerFilter = document.getElementById('filterPartner').value;
  const statusFilter = document.getElementById('filterStatus').value;
  
  let filtered = allSales;
  
  if (partnerFilter !== 'all') {
    filtered = filtered.filter(s => s.partnerId === partnerFilter);
  }
  if (statusFilter !== 'all') {
    filtered = filtered.filter(s => s.status === statusFilter);
  }
  
  renderSalesTable(filtered);
}

// ============================================================
// 💬 WHATSAPP REMINDERS
// ============================================================
function sendPartnerReminder(whatsapp, name, balance) {
  const cleanNumber = whatsapp.replace(/\+/g, '').replace(/\s/g, '');
  const message = balance > 0
    ? `As-salamu alaykum ${name}. This is a friendly update from Abundance FootWears. Your pending balance of ₦${balance.toLocaleString()} is ready for payout. Please confirm your account details so we can process the transfer. JazakAllahu khairan.`
    : `As-salamu alaykum ${name}. Just checking in from Abundance FootWears. All your payments are up to date. JazakAllahu khairan for your continued partnership!`;
  
  window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`, '_blank');
}

function sendSaleReminder(orderId, partnerName, amount) {
  if (!partnerName) {
    alert('No partner assigned to this sale.');
    return;
  }
  const partner = allPartners.find(p => p.name === partnerName);
  if (!partner) return;
  
  const cleanNumber = partner.whatsapp.replace(/\+/g, '').replace(/\s/g, '');
  const message = `As-salamu alaykum ${partnerName}. Sale update from Abundance:\n\n• Order: ${orderId}\n• Your share: ₦${amount.toLocaleString()}\n\nThis will be included in your next payout. JazakAllahu khairan.`;
  
  window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`, '_blank');
}

// ============================================================
// 🧭 SECTION NAVIGATION
// ============================================================
const sectionTitles = {
  overview: 'Commission Overview',
  sales: 'Sales Log',
  partners: 'Partners Management'
};

function switchSection(sectionName, clickedElement) {
  document.querySelectorAll('.sidebar-nav .nav-item').forEach(item => {
    item.classList.remove('active');
  });
  if (clickedElement) clickedElement.classList.add('active');
  
  const titleEl = document.getElementById('pageTitle');
  if (titleEl) titleEl.textContent = sectionTitles[sectionName] || 'Dashboard';
  
  const allSections = ['section-overview', 'section-sales', 'section-partners'];
  allSections.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  });
  
  const targetId = 'section-' + sectionName;
  const targetEl = document.getElementById(targetId);
  if (targetEl) targetEl.classList.remove('hidden');
  
  sessionStorage.setItem('abundance_active_section', sectionName);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}