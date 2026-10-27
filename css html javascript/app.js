/**
 * Nomad & Bean — Camper Cafe & Trail Outpost
 * Interactive Application Logic
 */

// ==========================================
// 1. Data Store (Menu, Shop, Schedule)
// ==========================================

const MENU_DATA = [
  {
    id: 'm1',
    category: 'signature',
    name: "Campfire S'mores Latte",
    price: 6.50,
    desc: 'Double shot of house espresso, toasted graham cracker syrup, smoked bittersweet chocolate, topped with a flame-torched marshmallow.',
    tags: ['House Favorite', 'Specialty'],
    isFeatured: true
  },
  {
    id: 'm2',
    category: 'signature',
    name: 'Wild Cardamom & Maple Cortado',
    price: 5.25,
    desc: 'Equal parts espresso and warm velvety oat milk, infused with organic cardamom pod tincture and Vermont amber maple syrup.',
    tags: ['Barista Pick', 'Vegan'],
    isFeatured: true
  },
  {
    id: 'm3',
    category: 'espresso',
    name: 'Summit Pour-Over (Single Origin)',
    price: 5.00,
    desc: 'Hand-poured Ethiopian Guji heirloom. Tasting notes of wild huckleberry, jasmine blossom, and crisp mountain citrus.',
    tags: ['Single Origin', 'Light Roast']
  },
  {
    id: 'm4',
    category: 'espresso',
    name: 'Timberline Flat White',
    price: 4.75,
    desc: 'Micro-foamed whole milk over a ristretto double shot of our deep chocolatey Timberline roast blend.',
    tags: ['Classic']
  },
  {
    id: 'm5',
    category: 'cold',
    name: 'Cascade Nitro Cold Brew',
    price: 5.75,
    desc: 'Slow-steeped for 20 hours with mountain spring water, infused with nitrogen for an impossibly creamy, Guinness-like head.',
    tags: ['High Caffeine', 'Draft']
  },
  {
    id: 'm6',
    category: 'cold',
    name: 'Pine Needle Tonic & Espresso',
    price: 6.00,
    desc: 'Fever-Tree artisanal Indian tonic poured over wild spruce tip cordial, layered with a floating chilled espresso float.',
    tags: ['Botanical', 'Refreshing']
  },
  {
    id: 'm7',
    category: 'bakery',
    name: 'Cast-Iron Sourdough Cinnamon Roll',
    price: 5.50,
    desc: 'Slow-fermented sourdough pastry baked fresh in our camper deck ovens, glazed with Bourbon vanilla bean cream.',
    tags: ['Baked Fresh Daily'],
    isFeatured: true
  },
  {
    id: 'm8',
    category: 'bakery',
    name: 'Trailhead Energy Pocket (V/GF)',
    price: 4.50,
    desc: 'Chewy rolled oats, Medjool dates, chia seed butter, raw cocoa nibs, and toasted pumpkin seeds.',
    tags: ['Gluten-Free', 'Vegan']
  },
  {
    id: 'm9',
    category: 'bakery',
    name: 'Smoked Gouda & Camp Bacon Galette',
    price: 7.25,
    desc: 'Flaky rosemary butter crust packed with applewood bacon, caramelized onions, and aged mountain gouda.',
    tags: ['Savory Warm']
  }
];

const SHOP_DATA = [
  {
    id: 'p1',
    category: 'beans',
    name: 'Summit Roast — Ethiopia Guji',
    price: 21.00,
    weight: '12 oz (340g)',
    image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=600&q=80',
    desc: 'Washed process heirloom variety. Notes of bright bergamot, candied peach, and wild berry honey.',
    badge: 'Best Seller'
  },
  {
    id: 'p2',
    category: 'beans',
    name: 'Timberline Espresso Dark Roast',
    price: 19.50,
    weight: '12 oz (340g)',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80',
    desc: 'A robust blend crafted for stove-top moka pots and espresso machines. Molasses, cedarwood, and 85% cocoa.',
    badge: 'Camper Blend'
  },
  {
    id: 'p3',
    category: 'gear',
    name: 'Campfire Speckled Enamel Mug',
    price: 18.00,
    weight: '16 fl oz capacity',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    desc: 'Heavy-gauge steel with durable baked porcelain enamel. Double-dipped rim, campfire and dishwasher safe.',
    badge: 'Durable Gear'
  },
  {
    id: 'p4',
    category: 'gear',
    name: 'Titanium Ultralight Collapsible Dripper',
    price: 36.00,
    weight: 'Weighs only 48 grams',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=600&q=80',
    desc: 'Packs completely flat for backpacking or camper van storage. Compatible with standard V60 cone filters.',
    badge: 'Backpacker Pick'
  },
  {
    id: 'p5',
    category: 'merch',
    name: 'Nomad 1974 Embroidered Wool Cap',
    price: 28.00,
    weight: 'One size fits all',
    image: 'https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=600&q=80',
    desc: 'Unstructured vintage brass buckle strapback, made with 100% recycled deadstock wool blend in forest pine.',
    badge: 'Limited Run'
  },
  {
    id: 'p6',
    category: 'merch',
    name: 'Heavyweight Heavy Trail Canvas Tote',
    price: 24.00,
    weight: '18 oz Waxed Duck Canvas',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
    desc: 'Built to carry firewood, two 6-packs, or your favorite reading books out to the lake.',
    badge: 'Trail Proof'
  }
];

const SCHEDULE_DATA = [
  {
    day: 'Wednesday',
    date: 'Oct 28',
    location: 'Pine Ridge Trailhead Overlook',
    sub: 'South Rim Parking Lot • MP 14.2 Highway 26',
    hours: '7:30 AM – 3:00 PM',
    tag: 'Trailhead Pop-up',
    isToday: true
  },
  {
    day: 'Thursday',
    date: 'Oct 29',
    location: 'Alder Creek Mountain Outpost',
    sub: 'Lumber Mill Green • Next to the footbridge',
    hours: '7:30 AM – 2:00 PM',
    tag: 'Campers & Locals Morning'
  },
  {
    day: 'Friday',
    date: 'Oct 30',
    location: 'Whistling River Campground',
    sub: 'Riverside Loop A • Public Campsite Gate',
    hours: '8:00 AM – 4:00 PM',
    tag: 'Live Acoustic Session (2 PM)'
  },
  {
    day: 'Saturday',
    date: 'Oct 31',
    location: 'Cascade Valley Farmers & Makers Market',
    sub: 'Town Square Pavilion • Space #4',
    hours: '7:00 AM – 2:00 PM',
    tag: 'Full Bakery Restock'
  },
  {
    day: 'Sunday',
    date: 'Nov 01',
    location: 'Lookout Point Scenic Turnout',
    sub: 'Sunset Vista Deck • Mount Hood View',
    hours: '8:00 AM – 5:00 PM',
    tag: 'Golden Hour Sunset Brews'
  }
];

// ==========================================
// 2. Shopping Cart State
// ==========================================

const CART_STORAGE_KEY = 'nomad_camper_cart_v1';
let cart = loadCart();

function loadCart() {
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    console.error('Failed to load cart', e);
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (e) {
    console.error('Failed to save cart', e);
  }
  updateCartUI();
}

function addToCart(item, quantity = 1) {
  const existing = cart.find(ci => ci.id === item.id);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image || 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=200&q=80',
      category: item.category,
      quantity: quantity
    });
  }
  saveCart();
  showToast(`Added "${item.name}" to your rucksack!`);
  openCartDrawer();
}

function updateQuantity(itemId, delta) {
  const item = cart.find(ci => ci.id === itemId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(ci => ci.id !== itemId);
  }
  saveCart();
}

function removeFromCart(itemId) {
  cart = cart.filter(ci => ci.id !== itemId);
  saveCart();
  showToast('Item removed from cart.');
}

function calculateSubtotal() {
  return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function calculateTotalItems() {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

// ==========================================
// 3. UI Rendering Functions
// ==========================================

function renderMenu(filterCategory = 'all') {
  const container = document.getElementById('menuGrid');
  if (!container) return;

  const filtered = filterCategory === 'all'
    ? MENU_DATA
    : MENU_DATA.filter(item => item.category === filterCategory);

  container.innerHTML = filtered.map(item => `
    <div class="menu-card" data-id="${item.id}">
      <div class="menu-card-top">
        <h3 class="menu-card-title">${item.name}</h3>
        <span class="menu-card-price">$${item.price.toFixed(2)}</span>
      </div>
      <p class="menu-card-desc">${item.desc}</p>
      <div class="menu-card-footer">
        <div class="menu-tags">
          ${item.tags.map(tag => `
            <span class="tag-badge ${item.isFeatured ? 'featured' : ''}">${tag}</span>
          `).join('')}
        </div>
        <button class="add-menu-btn" onclick="handleMenuQuickAdd('${item.id}')">
          <i data-lucide="plus"></i> Add
        </button>
      </div>
    </div>
  `).join('');

  if (window.lucide) {
    lucide.createIcons();
  }
}

function renderShop(filterShop = 'all') {
  const container = document.getElementById('shopGrid');
  if (!container) return;

  const filtered = filterShop === 'all'
    ? SHOP_DATA
    : SHOP_DATA.filter(p => p.category === filterShop);

  container.innerHTML = filtered.map(item => `
    <div class="shop-card" data-id="${item.id}">
      <div class="shop-card-img">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        ${item.badge ? `<span class="shop-badge">${item.badge}</span>` : ''}
      </div>
      <div class="shop-card-body">
        <span class="shop-category">${item.category} • ${item.weight}</span>
        <h3 class="shop-title">${item.name}</h3>
        <p class="shop-desc">${item.desc}</p>
        <div class="shop-price-row">
          <span class="shop-price">$${item.price.toFixed(2)}</span>
          <button class="add-to-cart-btn" onclick="handleShopAdd('${item.id}')">
            <i data-lucide="shopping-bag"></i> Add to Rucksack
          </button>
        </div>
      </div>
    </div>
  `).join('');

  if (window.lucide) {
    lucide.createIcons();
  }
}

function renderSchedule() {
  const container = document.getElementById('scheduleList');
  if (!container) return;

  container.innerHTML = SCHEDULE_DATA.map(item => `
    <div class="schedule-item ${item.isToday ? 'is-today' : ''}">
      <div class="sched-day">
        <span class="day-name">${item.day}</span>
        <span class="day-date">${item.date}</span>
      </div>
      <div class="sched-details">
        <h4>${item.location}</h4>
        <p>${item.sub}</p>
        <span class="sched-tag">${item.tag}</span>
      </div>
      <div class="sched-hours">
        ${item.hours}
        <span>Walk-ups Welcome</span>
      </div>
    </div>
  `).join('');
}

function updateCartUI() {
  const totalCount = calculateTotalItems();
  const subtotal = calculateSubtotal();

  // Badges
  const cartCountEl = document.getElementById('cartCount');
  const cartBadgeCountEl = document.getElementById('cartBadgeCount');
  if (cartCountEl) cartCountEl.textContent = totalCount;
  if (cartBadgeCountEl) cartBadgeCountEl.textContent = `${totalCount} item${totalCount === 1 ? '' : 's'}`;

  // Subtotal
  const subtotalEl = document.getElementById('cartSubtotal');
  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;

  // Free shipping bar ($45 target)
  const FREE_SHIPPING_THRESHOLD = 45.00;
  const progressFill = document.getElementById('shippingProgress');
  const shippingMsg = document.getElementById('shippingMessage');

  if (progressFill && shippingMsg) {
    if (subtotal >= FREE_SHIPPING_THRESHOLD) {
      progressFill.style.width = '100%';
      shippingMsg.innerHTML = '🎉 <strong>Free Trail Delivery Unlocked!</strong>';
    } else {
      const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
      const pct = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
      progressFill.style.width = `${pct}%`;
      shippingMsg.innerHTML = `Add <strong>$${remaining.toFixed(2)}</strong> more for free trail delivery`;
    }
  }

  // Items container
  const itemsContainer = document.getElementById('cartItemsContainer');
  const cartFooter = document.getElementById('cartFooter');

  if (!itemsContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="empty-cart">
        <i data-lucide="compass" class="empty-cart-icon"></i>
        <h4>Your rucksack is empty</h4>
        <p>Grab a freshly roasted bag of summit beans or an outdoor camp mug to hit the trail.</p>
        <button class="btn btn-primary btn-sm" onclick="closeCartDrawer(); window.location.hash='#shop';">Browse Goods</button>
      </div>
    `;
    if (cartFooter) cartFooter.style.display = 'none';
  } else {
    if (cartFooter) cartFooter.style.display = 'block';
    itemsContainer.innerHTML = cart.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <div class="cart-item-img">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="cart-item-details">
          <h4>${item.name}</h4>
          <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
          <div class="qty-controls">
            <button class="qty-btn" onclick="updateQuantity('${item.id}', -1)" aria-label="Decrease quantity">&minus;</button>
            <span class="qty-val">${item.quantity}</span>
            <button class="qty-btn" onclick="updateQuantity('${item.id}', 1)" aria-label="Increase quantity">&plus;</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" aria-label="Remove item">
          <i data-lucide="trash-2"></i>
        </button>
      </div>
    `).join('');
  }

  if (window.lucide) {
    lucide.createIcons();
  }
}

// ==========================================
// 4. Cart Handlers
// ==========================================

function handleShopAdd(itemId) {
  const product = SHOP_DATA.find(p => p.id === itemId);
  if (product) {
    addToCart(product, 1);
  }
}

function handleMenuQuickAdd(menuId) {
  const item = MENU_DATA.find(m => m.id === menuId);
  if (item) {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=200&q=80',
      category: 'menu'
    }, 1);
  }
}

function openCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  if (drawer && backdrop) {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// ==========================================
// 5. Checkout Modal Flow
// ==========================================

function openCheckoutModal() {
  if (cart.length === 0) {
    showToast('Your rucksack is empty. Add items first!');
    return;
  }
  closeCartDrawer();
  const modal = document.getElementById('checkoutModal');
  const summaryEl = document.getElementById('modalOrderSummary');

  if (summaryEl) {
    const subtotal = calculateSubtotal();
    const shipping = subtotal >= 45 ? 0 : 5.00;
    const total = subtotal + shipping;

    summaryEl.innerHTML = `
      <div class="summary-row">
        <span>Items (${calculateTotalItems()})</span>
        <span>$${subtotal.toFixed(2)}</span>
      </div>
      <div class="summary-row">
        <span>Trail Shipping</span>
        <span>${shipping === 0 ? '<strong style="color: #27AE60">FREE</strong>' : `$${shipping.toFixed(2)}`}</span>
      </div>
      <div class="summary-row total">
        <span>Total Due</span>
        <span>$${total.toFixed(2)}</span>
      </div>
    `;
  }

  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkoutModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// ==========================================
// 6. Toast Notification Helper
// ==========================================

let toastTimeout = null;
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMessage');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// ==========================================
// 7. Event Listeners & Initialization
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  // Render dynamic components
  renderMenu('all');
  renderShop('all');
  renderSchedule();
  updateCartUI();

  // Menu Category Filter tabs
  const menuFilters = document.getElementById('menuFilters');
  if (menuFilters) {
    menuFilters.addEventListener('click', (e) => {
      const btn = e.target.closest('.pill');
      if (!btn) return;

      menuFilters.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      renderMenu(btn.dataset.category);
    });
  }

  // Shop Filter tabs
  const shopFilters = document.getElementById('shopFilters');
  if (shopFilters) {
    shopFilters.addEventListener('click', (e) => {
      const btn = e.target.closest('.pill');
      if (!btn) return;

      shopFilters.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      renderShop(btn.dataset.shop);
    });
  }

  // Cart Drawer open/close buttons
  const openCartBtn = document.getElementById('openCartBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartBackdrop = document.getElementById('cartBackdrop');
  const continueShoppingBtn = document.getElementById('continueShoppingBtn');

  if (openCartBtn) openCartBtn.addEventListener('click', openCartDrawer);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCartDrawer);
  if (cartBackdrop) cartBackdrop.addEventListener('click', closeCartDrawer);
  if (continueShoppingBtn) continueShoppingBtn.addEventListener('click', closeCartDrawer);

  // Checkout modal
  const checkoutBtn = document.getElementById('checkoutBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const checkoutModal = document.getElementById('checkoutModal');
  const checkoutForm = document.getElementById('checkoutForm');

  if (checkoutBtn) checkoutBtn.addEventListener('click', openCheckoutModal);
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeCheckoutModal);
  if (checkoutModal) {
    checkoutModal.addEventListener('click', (e) => {
      if (e.target === checkoutModal) closeCheckoutModal();
    });
  }

  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeCheckoutModal();
      cart = [];
      saveCart();
      showToast('🎉 Order confirmed! Your trail supplies are getting packed.');
    });
  }

  // Booking Form Submission
  const bookingForm = document.getElementById('bookingForm');
  const bookingSuccess = document.getElementById('bookingSuccess');
  const resetBookingBtn = document.getElementById('resetBookingBtn');

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      bookingForm.style.display = 'none';
      if (bookingSuccess) {
        bookingSuccess.classList.add('show');
      }
      showToast('Booking request sent successfully!');
    });
  }

  if (resetBookingBtn) {
    resetBookingBtn.addEventListener('click', () => {
      if (bookingForm) {
        bookingForm.reset();
        bookingForm.style.display = 'flex';
      }
      if (bookingSuccess) {
        bookingSuccess.classList.remove('show');
      }
    });
  }

  // Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    // Close menu when clicking link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // Newsletter Form
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast("Welcome to the Campfire Club! Check your inbox for your 15% code.");
      newsletterForm.reset();
    });
  }

  // Initialize Lucide icons on start
  if (window.lucide) {
    lucide.createIcons();
  }
});
