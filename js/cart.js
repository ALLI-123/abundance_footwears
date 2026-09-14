// js/cart.js
class ShoppingCart {
  constructor() {
    this.items = JSON.parse(localStorage.getItem('cart')) || [];
    this.updateCartCount();
  }

  addItem(product, quantity = 1) {
    const existingItem = this.items.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ ...product, quantity: quantity });
    }
    
    this.saveToLocalStorage();
    this.updateCartCount();
    this.updateCartModal(); // Auto-refresh cart modal
    this.showNotification(`${quantity} × ${product.name} added to cart!`);
  }


  updateQuantity(productId, quantity) {
    const item = this.items.find(item => item.id === productId);
    if (item) {
      item.quantity = Math.max(1, quantity);
      this.saveToLocalStorage();
      this.updateCartCount();
      this.updateCartModal();
    }
  }

  getTotal() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getItemCount() {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  }

  saveToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
      const count = this.getItemCount();
      cartCount.textContent = count;
      cartCount.style.display = count > 0 ? 'flex' : 'none';
      
      // Add bounce animation
      cartCount.classList.remove('bounce');
      setTimeout(() => cartCount.classList.add('bounce'), 10);
    }
  }


  
  updateCartModal() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (!cartItemsContainer) return;

    if (this.items.length === 0) {
      cartItemsContainer.innerHTML = '<p style="text-align:center;padding:40px 20px;color:var(--gray);">Your cart is empty</p>';
      cartTotal.textContent = '₦0';
      return;
    }

    cartItemsContainer.innerHTML = this.items.map(item => `
      <div class="cart-item" style="display:flex;gap:12px;padding:16px;border-bottom:1px solid var(--light-gray);">
        <img src="${item.image}" alt="${item.name}" style="width:70px;height:70px;object-fit:cover;border-radius:8px;">
        <div style="flex:1;">
          <h5 style="font-size:0.95rem;margin-bottom:4px;">${item.name}</h5>
          <p style="font-size:0.85rem;color:var(--gray);margin-bottom:8px;">₦${item.price.toLocaleString()}</p>
          <div style="display:flex;align-items:center;gap:8px;">
            <button onclick="cart.updateQuantity(${item.id}, ${item.quantity - 1})" style="width:28px;height:28px;border:1px solid var(--light-gray);border-radius:4px;background:var(--white);cursor:pointer;">−</button>
            <span style="font-weight:600;">${item.quantity}</span>
            <button onclick="cart.updateQuantity(${item.id}, ${item.quantity + 1})" style="width:28px;height:28px;border:1px solid var(--light-gray);border-radius:4px;background:var(--white);cursor:pointer;">+</button>
            <button onclick="cart.removeItem(${item.id})" style="margin-left:auto;color:#c0392b;background:none;border:none;cursor:pointer;font-size:1.1rem;">×</button>
          </div>
        </div>
      </div>
    `).join('');

    cartTotal.textContent = `₦${this.getTotal().toLocaleString()}`;
  }

  showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: var(--gold);
      color: var(--black);
      padding: 16px 24px;
      border-radius: 8px;
      box-shadow: var(--shadow-md);
      z-index: 10000;
      font-weight: 600;
      animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease';
      setTimeout(() => notification.remove(), 300);
    }, 2000);
  }

  clearCart() {
    this.items = [];
    this.saveToLocalStorage();
    this.updateCartCount();
    this.updateCartModal();
  }

  checkout() {
    if (this.items.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    const message = `Hello Abundance FootWears! I'd like to order:\n\n` + 
      this.items.map(item => `• ${item.name} (Qty: ${item.quantity}) - ₦${(item.price * item.quantity).toLocaleString()}`).join('\n') +
      `\n\nTotal: ₦${this.getTotal().toLocaleString()}`;

    const whatsappUrl = `https://wa.me/${CONFIG.contact.whatsapp.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
}

// Initialize cart
const cart = new ShoppingCart();
