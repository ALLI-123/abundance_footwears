// js/supplier.js
document.addEventListener('DOMContentLoaded', () => {
  // 1. Get vendor ID from URL (e.g., ?id=V001)
  const urlParams = new URLSearchParams(window.location.search);
  const vendorId = urlParams.get('id');

  if (!vendorId || !CONFIG.vendors) {
    document.getElementById('supplierInfo').innerHTML = '<h2>Supplier not found.</h2><a href="index.html" class="btn btn-primary">Return to Store</a>';
    document.getElementById('supplierProductsGrid').innerHTML = '';
    return;
  }

  // 2. Find the vendor
  const vendor = CONFIG.vendors.find(v => v.id === vendorId);
  if (!vendor) {
    document.getElementById('supplierInfo').innerHTML = '<h2>Supplier not found.</h2><a href="index.html" class="btn btn-primary">Return to Store</a>';
    return;
  }

  // 3. Populate Supplier Hero
  document.getElementById('supplierInfo').innerHTML = `
    <div class="supplier-avatar">
      <img src="${vendor.image}" alt="${vendor.name}" />
    </div>
    <div class="supplier-details">
      <span class="supplier-role">${vendor.role} • ${vendor.location}</span>
      <h1>${vendor.name}</h1>
      <p class="supplier-desc">${vendor.description}</p>
      <div class="supplier-specialty">
        <i class="fas fa-star"></i> Specialty: ${vendor.specialty}
      </div>
      <a href="https://wa.me/${vendor.whatsapp ? vendor.whatsapp.replace(/\+/g, '') : CONFIG.contact.whatsapp.replace(/\+/g, '')}" target="_blank" class="btn btn-primary">
        <i class="fab fa-whatsapp"></i> Contact Artisan Directly
      </a>
    </div>
  `;

  document.getElementById('supplierGallerySubtitle').textContent = `Explore the exclusive, handcrafted collection by ${vendor.name}.`;

  // 4. Find all products by this vendor (from both featured products and collections)
  let vendorProducts = [];
  
  // Check featured products
  if (CONFIG.products) {
    vendorProducts = vendorProducts.concat(CONFIG.products.filter(p => p.vendorId === vendorId));
  }
  
  // Check collections
  if (CONFIG.collections) {
    Object.values(CONFIG.collections).forEach(collection => {
      const matches = collection.items.filter(item => item.vendorId === vendorId);
      // Avoid duplicates if product is in both featured and collections
      matches.forEach(match => {
        if (!vendorProducts.find(p => p.id === match.id)) {
          vendorProducts.push(match);
        }
      });
    });
  }

  // 5. Render Products
  const grid = document.getElementById('supplierProductsGrid');
  if (vendorProducts.length === 0) {
    grid.innerHTML = '<p class="loading-text">No products available from this artisan yet.</p>';
  } else {
    grid.innerHTML = vendorProducts.map(product => {
      const badgeHTML = product.badge ? `<span class="product-badge badge-${product.badge.toLowerCase()}">${product.badge}</span>` : '';
      const oldPriceHTML = product.oldPrice ? `<span class="price-old">₦${product.oldPrice.toLocaleString()}</span>` : '';

      return `
        <div class="product-card reveal">
          ${badgeHTML}
          <div class="product-img">
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
          </div>
          <div class="product-body">
            <h4>${product.name}</h4>
            <p class="product-desc">${product.description}</p>
            <div class="product-price">
              <span class="price-current">₦${product.price.toLocaleString()}</span>
              ${oldPriceHTML}
            </div>
            <div class="product-actions">
              <button class="btn-cart" onclick="alert('Please visit the main store to add to cart!')">View on Main Store</button>
              <a href="index.html#product/${product.id}" class="btn btn-buy" style="text-align:center; text-decoration:none;">Buy Now</a>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // 6. Trigger scroll reveal for new elements
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
