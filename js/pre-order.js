// js/pre-order.js
// ⚠️ REPLACE WITH YOUR GOOGLE APPS SCRIPT URL FOR WAITLIST
const WAITLIST_API_URL = 'https://script.google.com/macros/s/AKfycbwI9xvgWhhXq_GutJTVchx158C5nDXBj8kwemPV4Du2uKNmraf7kNEU0BMS-d5i5UxV/exec';

document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('preOrderPage')) return;
  
  renderPreOrderContent();
  startCountdown();
  setupWaitlistForm();
});

function renderPreOrderContent() {
  const po = CONFIG.preOrder;
  
  document.getElementById('poTagline').textContent = po.tagline;
  document.getElementById('poName').textContent = po.name;
  document.getElementById('poSubtitle').textContent = po.subtitle;
  document.getElementById('poDescription').textContent = po.description;
  document.getElementById('poHeroImage').src = po.heroImage;
  
  // Pricing
  document.getElementById('poEarlyPrice').textContent = `${po.pricing.currency}${po.pricing.earlyBird.toLocaleString()}`;
  document.getElementById('poRegularPrice').textContent = `${po.pricing.currency}${po.pricing.regular.toLocaleString()}`;
  
  // Benefits
  const benefitsEl = document.getElementById('poBenefits');
  benefitsEl.innerHTML = po.benefits.map(b => `
    <div class="po-benefit">
      <i class="${b.icon}"></i>
      <span>${b.text}</span>
    </div>
  `).join('');
  
  // Stock info
  if (po.stock.showRealCount) {
    const available = po.stock.total - po.stock.reserved;
    document.getElementById('poStock').innerHTML = `
      <i class="fas fa-fire"></i> Only <strong>${available}</strong> of ${po.stock.total} pairs available
    `;
    document.getElementById('poStock').style.display = 'block';
  }
  
  // Waitlist count
  if (po.waitlist.showCount) {
    document.getElementById('poWaitlistCount').innerHTML = `
      <i class="fas fa-users"></i> <strong>${po.waitlist.currentCount.toLocaleString()}</strong> people already waiting
    `;
    document.getElementById('poWaitlistCount').style.display = 'block';
  }
}

function startCountdown() {
  const launchDate = new Date(CONFIG.preOrder.launchDate).getTime();
  
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate - now;
    
    if (distance < 0) {
      document.getElementById('poCountdown').innerHTML = '<span class="countdown-launched">🎉 LAUNCHED!</span>';
      return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById('poCountdown').innerHTML = `
      <div class="countdown-item"><span class="countdown-number">${days}</span><span class="countdown-label">Days</span></div>
      <div class="countdown-separator">:</div>
      <div class="countdown-item"><span class="countdown-number">${hours.toString().padStart(2,'0')}</span><span class="countdown-label">Hours</span></div>
      <div class="countdown-separator">:</div>
      <div class="countdown-item"><span class="countdown-number">${minutes.toString().padStart(2,'0')}</span><span class="countdown-label">Minutes</span></div>
      <div class="countdown-separator">:</div>
      <div class="countdown-item"><span class="countdown-number">${seconds.toString().padStart(2,'0')}</span><span class="countdown-label">Seconds</span></div>
    `;
  }
  
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

function setupWaitlistForm() {
  const form = document.getElementById('waitlistForm');
  if (!form) return;
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('wlName').value.trim();
    const whatsapp = document.getElementById('wlWhatsapp').value.trim();
    const submitBtn = document.getElementById('wlSubmitBtn');
    const errorMsg = document.getElementById('wlError');
    const successMsg = document.getElementById('wlSuccess');
    
    errorMsg.style.display = 'none';
    
    if (!name || !whatsapp) {
      errorMsg.textContent = 'Please fill in all fields';
      errorMsg.style.display = 'block';
      return;
    }
    
    if (!/^[0-9+\s]{10,15}$/.test(whatsapp)) {
      errorMsg.textContent = 'Please enter a valid WhatsApp number';
      errorMsg.style.display = 'block';
      return;
    }
    
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Joining...';
    
    try {
      // Send to Google Apps Script
      await fetch(`${WAITLIST_API_URL}?name=${encodeURIComponent(name)}&whatsapp=${encodeURIComponent(whatsapp)}&product=${encodeURIComponent(CONFIG.preOrder.name)}`);
      
      // Show success
      form.style.display = 'none';
      successMsg.style.display = 'block';
      
      // Optional: Open WhatsApp with confirmation
      const message = `As-salamu alaykum! I just joined the waitlist for ${CONFIG.preOrder.name} on your website. My name is ${name}. Looking forward to the launch!`;
      setTimeout(() => {
        window.open(`https://wa.me/${CONFIG.contact.whatsapp.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`, '_blank');
      }, 1500);
      
    } catch (error) {
      errorMsg.textContent = 'Network error. Please try again or WhatsApp us directly.';
      errorMsg.style.display = 'block';
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Join Waitlist →';
    }
  });
}
