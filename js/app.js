// js/app.js

// ========== HELPER FUNCTIONS ==========
function getVendorById(vendorId) {
  if (!vendorId || !CONFIG.vendors) return null;
  return CONFIG.vendors.find(v => v.id === vendorId);
}

document.addEventListener('DOMContentLoaded', () => {
  // ========== RENDER FUNCTIONS ==========
  
  function renderCategories() {
    const container = document.getElementById('categoriesGrid');
    if (!container) return;

    container.innerHTML = CONFIG.categories.map(cat => `
      <a href="${cat.link}" class="category-card reveal">
        <img src="${cat.image}" alt="${cat.name}" loading="lazy" />
        <div class="category-card-content">
          <h3>${cat.name}</h3>
          <span>Shop Now <i class="fas fa-arrow-right"></i></span>
        </div>
      </a>
    `).join('');
  }

  function renderCollection(collectionId, sectionId) {
    const container = document.getElementById(`${sectionId}Grid`);
    if (!container) return;

    const collection = CONFIG.collections[collectionId];
    if (!collection) return;

    container.innerHTML = collection.items.map(item => {
      const vendor = getVendorById(item.vendorId);
      const vendorHTML = vendor ? `
        <div class="vendor-hover-badge">
          <img src="${vendor.image}" alt="${vendor.name}" />
          <span>by ${vendor.name}</span>
        </div>
      ` : '';

      return `
        <div class="collection-card reveal" onclick="openProductModal(${item.id}, '${collectionId}')">
          <div class="collection-card-img">
            <img src="${item.image}" alt="${item.name}" loading="lazy" />
            ${vendorHTML}
          </div>
          <div class="collection-card-body">
            <h4>${item.name}</h4>
            <p>${item.description.substring(0, 40)}...</p>
            <p style="margin-top:8px;font-weight:700;color:var(--brown);font-size:0.95rem;">₦${item.price.toLocaleString()}</p>
          </div>
        </div>
      `;
    }).join('');
  }

  function renderProducts() {
    const container = document.getElementById('productsGrid');
    if (!container) return;

    container.innerHTML = CONFIG.products.map(product => {
      const badgeHTML = product.badge ? 
        `<span class="product-badge badge-${product.badge.toLowerCase()}">${product.badge}</span>` : '';
      
      const oldPriceHTML = product.oldPrice ? 
        `<span class="price-old">₦${product.oldPrice.toLocaleString()}</span>` : '';

      const vendor = getVendorById(product.vendorId);
      const vendorHTML = vendor ? `
        <div class="vendor-hover-badge">
          <img src="${vendor.image}" alt="${vendor.name}" />
          <span>by ${vendor.name}</span>
        </div>
      ` : '';

      return `
        <div class="product-card reveal" data-category="${product.category}">
          ${badgeHTML}
          <div class="product-img">
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
            ${vendorHTML}
          </div>
          <div class="product-body">
            <h4>${product.name}</h4>
            <p class="product-desc">${product.description}</p>
            <div class="product-price">
              <span class="price-current">₦${product.price.toLocaleString()}</span>
              ${oldPriceHTML}
            </div>
            <div class="product-actions">
              <button class="btn-cart" onclick="cart.addItem(${JSON.stringify(product).replace(/"/g, '&quot;')})">Add to Cart</button>
              <button class="btn-buy" onclick="buyNow(${product.id})">Buy Now</button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  function renderFeatures() {
    const container = document.getElementById('featuresGrid');
    if (!container) return;

    container.innerHTML = CONFIG.features.map(feature => `
      <div class="feature-card reveal">
        <div class="feature-icon"><i class="${feature.icon}"></i></div>
        <h3>${feature.title}</h3>
        <p>${feature.description}</p>
      </div>
    `).join('');
  }

  function renderTestimonials() {
    const container = document.getElementById('testimonialsGrid');
    if (!container) return;

    container.innerHTML = CONFIG.testimonials.map(testimonial => `
      <div class="testimonial-card reveal">
        <div class="stars">
          ${Array(testimonial.rating).fill('<i class="fas fa-star"></i>').join('')}
        </div>
        <p class="testimonial-text">"${testimonial.text}"</p>
        <div class="testimonial-author">
          <div class="author-avatar">${testimonial.initials}</div>
          <div class="author-info">
            <h5>${testimonial.name}</h5>
            <span>${testimonial.location}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  function renderVendors() {
    const container = document.getElementById('vendorsGrid');
    if (!container || !CONFIG.vendors) return;

    container.innerHTML = CONFIG.vendors.map(vendor => `
      <a href="supplier.html?id=${vendor.id}" class="category-card reveal" style="aspect-ratio: auto; padding-bottom: 0; text-decoration: none; color: inherit;">
        <img src="${vendor.image}" alt="${vendor.name}" loading="lazy" style="aspect-ratio: 4/3;" />
        <div class="category-card-content" style="position: relative; background: linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.4) 100%); padding: 20px;">
          <span style="font-size: 0.75rem; color: var(--gold); text-transform: uppercase; letter-spacing: 1px;">${vendor.role} • ${vendor.location}</span>
          <h3 style="font-size: 1.2rem; margin: 8px 0;">${vendor.name}</h3>
          <p style="font-size: 0.85rem; color: rgba(255,255,255,0.8); margin-bottom: 12px; line-height: 1.5;">${vendor.description}</p>
          <span style="font-size: 0.8rem; color: var(--gold); font-weight: 600;">Specialty: ${vendor.specialty}</span>
        </div>
      </a>
    `).join('');
  }

  function renderFooter() {
    const socialContainer = document.getElementById('socialIcons');
    if (socialContainer) {
      socialContainer.innerHTML = CONFIG.social.map(social => `
        <a href="${social.url}" target="_blank" aria-label="${social.name}">
          <i class="${social.icon}"></i>
        </a>
      `).join('');
    }

    // Update contact info
    const phoneEl = document.getElementById('contactPhone');
    const emailEl = document.getElementById('contactEmail');
    const addressEl = document.getElementById('contactAddress');
    const hoursEl = document.getElementById('contactHours');

    if (phoneEl) phoneEl.textContent = CONFIG.contact.phone;
    if (emailEl) emailEl.textContent = CONFIG.contact.email;
    if (addressEl) addressEl.textContent = CONFIG.contact.address;
    if (hoursEl) hoursEl.textContent = CONFIG.contact.hours;
  }

  // ========== INITIALIZE ==========
  
  renderCategories();
  renderCollection('men', 'men');
  renderCollection('women', 'women');
  renderCollection('kids', 'kids');
  renderCollection('accessories', 'accessories');
  renderVendors(); 
  renderProducts();
  renderFeatures();
  renderTestimonials();
  renderFooter();

  // Re-observe new elements for scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => observer.observe(el));
});

// ========== GLOBAL FUNCTIONS ==========

function buyNow(productId) {
  const product = CONFIG.products.find(p => p.id === productId) || findProductById(productId);
  if (!product) return;

  const message = `Hello Abundance Footwears! I'd like to buy:\n\n• ${product.name}\n• Price: ₦${product.price.toLocaleString()}\n\nPlease confirm availability and delivery details.`;
  const whatsappUrl = `https://wa.me/${CONFIG.contact.whatsapp.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}

function openCartModal() {
  const modal = document.getElementById('cartModal');
  if (modal) {
    modal.style.display = 'flex';
    cart.updateCartModal();
  }
}

function closeCartModal() {
  const modal = document.getElementById('cartModal');
  if (modal) {
    modal.style.display = 'none';
  }
}

function openSearchModal() {
  const modal = document.getElementById('searchModal');
  if (modal) {
    modal.style.display = 'flex';
    setTimeout(() => {
      const input = modal.querySelector('input');
      if (input) input.focus();
    }, 100);
  }
}

function closeSearchModal() {
  const modal = document.getElementById('searchModal');
  if (modal) {
    modal.style.display = 'none';
  }
}

function searchProducts(query) {
  if (!query.trim()) return;

  const results = CONFIG.products.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase())
  );

  const container = document.getElementById('searchResults');
  if (!container) return;

  if (results.length === 0) {
    container.innerHTML = '<p style="text-align:center;padding:40px;color:var(--gray);">No products found</p>';
    return;
  }

  container.innerHTML = results.map(product => `
    <div class="search-result-item" style="display:flex;gap:16px;padding:16px;border-bottom:1px solid var(--light-gray);cursor:pointer;" onclick="viewProduct(${product.id})">
      <img src="${product.image}" alt="${product.name}" style="width:80px;height:80px;object-fit:cover;border-radius:8px;">
      <div style="flex:1;">
        <h4 style="font-size:1rem;margin-bottom:4px;">${product.name}</h4>
        <p style="font-size:0.85rem;color:var(--gray);margin-bottom:8px;">${product.description}</p>
        <p style="font-weight:700;color:var(--brown);">₦${product.price.toLocaleString()}</p>
      </div>
    </div>
  `).join('');
}

function viewProduct(productId) {
  const product = CONFIG.products.find(p => p.id === productId) || findProductById(productId);
  if (!product) return;

  openProductModal(productId, product.category);
}

// Filter products by category
function filterProducts(category) {
  const productCards = document.querySelectorAll('.product-card');
  
  productCards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// ========== PRODUCT DETAIL MODAL ==========
let currentModalProduct = null;
let modalQty = 1;
let selectedSize = '40';

function findProductById(id) {
  // Search in featured products first
  const featured = CONFIG.products.find(p => p.id === id);
  if (featured) return featured;

  // Then search in collections
  for (const key in CONFIG.collections) {
    const found = CONFIG.collections[key].items.find(item => item.id === id);
    if (found) return found;
  }
  return null;
}

function openProductModal(productId, collectionKey) {
  const product = findProductById(productId);
  if (!product) return;

  currentModalProduct = product;
  modalQty = 1;
  selectedSize = '40';

  // Fill modal content
  document.getElementById('productModalImage').src = product.image;
  document.getElementById('productModalImage').alt = product.name;
  document.getElementById('productModalName').textContent = product.name;
  document.getElementById('productModalDesc').textContent = product.description;
  document.getElementById('productModalPrice').textContent = `₦${product.price.toLocaleString()}`;
  document.getElementById('modalQty').textContent = modalQty;

  // --- VENDOR INFO IN MODAL ---
  const vendor = getVendorById(product.vendorId);
  const modalVendorEl = document.getElementById('modalVendorInfo');
  if (vendor && modalVendorEl) {
    modalVendorEl.innerHTML = `
      <div class="modal-vendor-badge" style="display: flex;">
        <img src="${vendor.image}" alt="${vendor.name}" />
        <div>
          <span>Crafted by</span>
          <strong>${vendor.name}</strong>
        </div>
      </div>
    `;
    modalVendorEl.style.display = 'block';
  } else if (modalVendorEl) {
    modalVendorEl.style.display = 'none';
  }

  // Category label
  const categoryLabel = collectionKey ? collectionKey.charAt(0).toUpperCase() + collectionKey.slice(1) : (product.category || '');
  document.getElementById('productModalCategory').textContent = categoryLabel + ' Collection';

  // Old price (if any)
  const oldPriceEl = document.getElementById('productModalOldPrice');
  if (product.oldPrice) {
    oldPriceEl.textContent = `₦${product.oldPrice.toLocaleString()}`;
    oldPriceEl.style.display = 'inline';
  } else {
    oldPriceEl.style.display = 'none';
  }

  // Badge
  const badgeEl = document.getElementById('productModalBadge');
  if (product.badge) {
    badgeEl.textContent = product.badge;
    badgeEl.className = `product-badge badge-${product.badge.toLowerCase()}`;
    badgeEl.style.display = 'block';
  } else {
    badgeEl.style.display = 'none';
  }

  // Update URL hash for shareability
  window.location.hash = `product/${productId}`;

  // Show modal
  document.getElementById('productModal').classList.add('active');
  document.body.style.overflow = 'hidden';

  // Reset size selection
  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.size === '40');
  });
}

function closeProductModal() {
  document.getElementById('productModal').classList.remove('active');
  document.body.style.overflow = '';
  // Clear hash
  if (window.location.hash.startsWith('#product/')) {
    history.replaceState(null, '', window.location.pathname + window.location.search);
  }
}

function updateModalQty(change) {
  modalQty = Math.max(1, modalQty + change);
  document.getElementById('modalQty').textContent = modalQty;
}

// Size selection
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('size-btn')) {
    document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    selectedSize = e.target.dataset.size;
  }
});

// Add to cart from modal
document.addEventListener('DOMContentLoaded', () => {
  const addToCartBtn = document.getElementById('modalAddToCart');
  if (addToCartBtn) {


    addToCartBtn.addEventListener('click', () => {
      if (!currentModalProduct) return;
      
      // Add item once with the correct quantity
      cart.addItem(currentModalProduct, modalQty);
      
      // Close modal after adding
      closeProductModal();
    });



  }

  const buyNowBtn = document.getElementById('modalBuyNow');
  if (buyNowBtn) {
    buyNowBtn.addEventListener('click', () => {
      if (!currentModalProduct) return;
      const p = currentModalProduct;
      const total = p.price * modalQty;
      const message = `Hello Abundance Footwears! I'd like to order:\n\n• ${p.name}\n• Size: ${selectedSize}\n• Quantity: ${modalQty}\n• Price: ₦${p.price.toLocaleString()} each\n• Total: ₦${total.toLocaleString()}\n\nPlease confirm availability and delivery details.`;
      const whatsappUrl = `https://wa.me/${CONFIG.contact.whatsapp.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    });
  }

  // Handle direct URL hash (e.g., someone shares a product link)
  if (window.location.hash.startsWith('#product/')) {
    const productId = parseInt(window.location.hash.split('/')[1]);
    if (productId) {
      setTimeout(() => openProductModal(productId), 300);
    }
  }
});

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProductModal();
    closeCartModal();
    closeSearchModal();
  }
});

// ========== INFO MODALS ==========
function openInfoModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeInfoModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close info modals on ESC key (already handled in existing ESC listener)
// Close on outside click
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.info-modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
});

// ========== ORDER TRACKING ==========
const TRACKING_API_URL = 'https://script.google.com/macros/s/AKfycbwI9xvgWhhXq_GutJTVchx158C5nDXBj8kwemPV4Du2uKNmraf7kNEU0BMS-d5i5UxV/exec';

const ORDER_STEPS = [
  { key: 'Order Received', label: 'Order Received', desc: 'We got your order!' },
  { key: 'Processing', label: 'Processing', desc: 'Preparing your items' },
  { key: 'Shipped', label: 'Shipped', desc: 'On the way to you' },
  { key: 'Out for Delivery', label: 'Out for Delivery', desc: 'Arriving today' },
  { key: 'Delivered', label: 'Delivered', desc: 'Enjoy your purchase!' }
];

function openTrackingModal() {
  document.getElementById('trackingModal').classList.add('active');
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    const input = document.getElementById('trackingInput');
    if (input) input.focus();
  }, 100);
}

function closeTrackingModal() {
  document.getElementById('trackingModal').classList.remove('active');
  document.body.style.overflow = '';
  resetTracking();
}

function resetTracking() {
  document.getElementById('trackingSearch').style.display = 'block';
  document.getElementById('trackingResult').style.display = 'none';
  document.getElementById('trackingLoading').style.display = 'none';
  document.getElementById('trackingInput').value = '';
  document.getElementById('trackingError').style.display = 'none';
}

async function trackOrder() {
  const orderId = document.getElementById('trackingInput').value.trim().toUpperCase();
  const errorEl = document.getElementById('trackingError');
  const trackBtn = document.getElementById('trackBtn');
  
  errorEl.style.display = 'none';
  
  if (!orderId) {
    errorEl.textContent = 'Please enter an Order ID';
    errorEl.style.display = 'block';
    return;
  }
  
  // Show loading
  document.getElementById('trackingSearch').style.display = 'none';
  document.getElementById('trackingLoading').style.display = 'block';
  trackBtn.disabled = true;
  
  try {
    const response = await fetch(`${TRACKING_API_URL}?orderId=${encodeURIComponent(orderId)}`);
    const data = await response.json();
    
    document.getElementById('trackingLoading').style.display = 'none';
    
    if (data.success) {
      displayTrackingResult(data.order);
    } else {
      document.getElementById('trackingSearch').style.display = 'block';
      errorEl.textContent = data.message || 'Order not found';
      errorEl.style.display = 'block';
    }
  } catch (error) {
    document.getElementById('trackingLoading').style.display = 'none';
    document.getElementById('trackingSearch').style.display = 'block';
    errorEl.textContent = 'Network error. Please check your connection and try again.';
    errorEl.style.display = 'block';
    console.error('Tracking error:', error);
  } finally {
    trackBtn.disabled = false;
  }
}

function displayTrackingResult(order) {
  // Fill in order details
  document.getElementById('resultOrderId').textContent = order.orderId;
  document.getElementById('resultDate').textContent = order.orderDate;
  document.getElementById('resultProduct').textContent = order.product;
  document.getElementById('resultCustomer').textContent = order.customerName;
  document.getElementById('resultNotes').textContent = order.trackingNotes;
  document.getElementById('resultEta').textContent = order.estimatedDelivery;
  
  // Build timeline
  const timeline = document.getElementById('trackingTimeline');
  const currentStatusIndex = ORDER_STEPS.findIndex(step => step.key === order.status);
  
  if (order.status === 'Cancelled') {
    timeline.innerHTML = `
      <div style="padding:20px;background:#fdecea;border-radius:var(--radius);text-align:center;">
        <i class="fas fa-times-circle" style="font-size:2rem;color:#c0392b;margin-bottom:8px;"></i>
        <h5 style="color:#c0392b;margin:0;">Order Cancelled</h5>
        <p style="color:var(--gray);margin:8px 0 0;font-size:0.9rem;">${order.trackingNotes}</p>
      </div>
    `;
  } else {
    timeline.innerHTML = ORDER_STEPS.map((step, index) => {
      let statusClass = 'pending';
      if (index < currentStatusIndex) statusClass = 'completed';
      else if (index === currentStatusIndex) statusClass = 'active';
      
      return `
        <div class="timeline-step ${statusClass}">
          <div class="timeline-step-content">
            <h5>${step.label}</h5>
            <p>${step.desc}</p>
          </div>
        </div>
      `;
    }).join('');
  }
  
  // Show result
  document.getElementById('trackingResult').style.display = 'block';
}

// Allow Enter key to trigger tracking
document.addEventListener('DOMContentLoaded', () => {
  const trackingInput = document.getElementById('trackingInput');
  if (trackingInput) {
    trackingInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') trackOrder();
    });
  }
}); 

// ========== COMMISSION CALCULATOR ==========
function calculateCommission(productId, sellingPrice) {
  const commission = CONFIG.productCommissions[productId];
  if (!commission) {
    return { partner: null, partnerShare: 0, abundanceShare: sellingPrice };
  }
  
  const partner = CONFIG.partners.find(p => p.id === commission.partnerId);
  if (!partner) return { partner: null, partnerShare: 0, abundanceShare: sellingPrice };
  
  const partnerShare = Math.round(sellingPrice * (commission.sharePercent / 100));
  const abundanceShare = sellingPrice - partnerShare;
  
  return {
    partner: partner,
    partnerShare: partnerShare,
    abundanceShare: abundanceShare,
    sharePercent: commission.sharePercent
  };
}

// Show commission breakdown in product modal (admin view)
function showCommissionBreakdown(productId, sellingPrice) {
  const calc = calculateCommission(productId, sellingPrice);
  if (!calc.partner) return;
  
  console.log(`
═══════════════════════════════════════
💰 COMMISSION BREAKDOWN
═══════════════════════════════════════
Product: ${CONFIG.products.find(p => p.id === productId)?.name || 'Product'}
Selling Price: ₦${sellingPrice.toLocaleString()}
Partner: ${calc.partner.name} (${calc.partner.role})
Partner Share (${calc.sharePercent}%): ₦${calc.partnerShare.toLocaleString()}
Abundance Share: ₦${calc.abundanceShare.toLocaleString()}
═══════════════════════════════════════
  `);
}
