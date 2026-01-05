// ============================================
// SHARED UTILITIES & DATA MODEL
// ============================================

// Mock Product Catalog (Arabic)
const PRODUCTS = [
  {
    id: 1,
    name: 'ساعة يد فاخرة من الذهب الأبيض',
    category: 'ساعات',
    price: 12500,
    compareAtPrice: 15000,
    rating: 4.8,
    badges: ['جديد', 'الأكثر مبيعًا'],
    colors: ['ذهبي', 'فضي', 'أسود'],
    sizes: ['واحد'],
    shortDesc: 'ساعة يد فاخرة بتصميم عصري وأنيق، مثالية للمناسبات الخاصة',
    imageDesc: 'ساعة يد ذهبية فاخرة على خلفية داكنة'
  },
  {
    id: 2,
    name: 'حقيبة يد جلدية فاخرة',
    category: 'حقائب',
    price: 8500,
    compareAtPrice: null,
    rating: 4.9,
    badges: ['خصم'],
    colors: ['أسود', 'بني', 'أبيض'],
    sizes: ['صغير', 'متوسط', 'كبير'],
    shortDesc: 'حقيبة يد جلدية عالية الجودة بتصميم كلاسيكي أنيق',
    imageDesc: 'حقيبة يد جلدية سوداء فاخرة'
  },
  {
    id: 3,
    name: 'نظارة شمسية فاخرة',
    category: 'نظارات',
    price: 3200,
    compareAtPrice: 4000,
    rating: 4.7,
    badges: ['جديد'],
    colors: ['أسود', 'بني', 'أزرق'],
    sizes: ['واحد'],
    shortDesc: 'نظارة شمسية فاخرة بحماية 100% من الأشعة فوق البنفسجية',
    imageDesc: 'نظارة شمسية سوداء فاخرة'
  },
  {
    id: 4,
    name: 'سوار ذهبي منقوش',
    category: 'مجوهرات',
    price: 6500,
    compareAtPrice: null,
    rating: 4.6,
    badges: ['الأكثر مبيعًا'],
    colors: ['ذهبي', 'فضي'],
    sizes: ['صغير', 'متوسط', 'كبير'],
    shortDesc: 'سوار ذهبي بتصميم منقوش فاخر وأنيق',
    imageDesc: 'سوار ذهبي منقوش فاخر'
  },
  {
    id: 5,
    name: 'محفظة جلدية فاخرة',
    category: 'إكسسوارات',
    price: 1800,
    compareAtPrice: 2500,
    rating: 4.5,
    badges: ['خصم'],
    colors: ['أسود', 'بني', 'أحمر'],
    sizes: ['واحد'],
    shortDesc: 'محفظة جلدية فاخرة بتصميم أنيق ومتعدد الجيوب',
    imageDesc: 'محفظة جلدية سوداء فاخرة'
  },
  {
    id: 6,
    name: 'عطر فاخر 100 مل',
    category: 'عطور',
    price: 4200,
    compareAtPrice: null,
    rating: 4.9,
    badges: ['جديد', 'الأكثر مبيعًا'],
    colors: ['واحد'],
    sizes: ['50 مل', '100 مل', '200 مل'],
    shortDesc: 'عطر فاخر برائحة مميزة تدوم طويلاً',
    imageDesc: 'زجاجة عطر فاخرة على خلفية أنيقة'
  },
  {
    id: 7,
    name: 'سلسال ماسي فاخر',
    category: 'مجوهرات',
    price: 18500,
    compareAtPrice: 22000,
    rating: 5.0,
    badges: ['جديد'],
    colors: ['ذهبي', 'فضي', 'أبيض'],
    sizes: ['40 سم', '45 سم', '50 سم'],
    shortDesc: 'سلسال ماسي فاخر بتصميم راقي وأنيق',
    imageDesc: 'سلسال ماسي فاخر على خلفية داكنة'
  },
  {
    id: 8,
    name: 'حذاء جلد فاخر',
    category: 'أحذية',
    price: 5500,
    compareAtPrice: 7000,
    rating: 4.7,
    badges: ['خصم'],
    colors: ['أسود', 'بني', 'أبيض'],
    sizes: ['40', '41', '42', '43', '44'],
    shortDesc: 'حذاء جلد فاخر بتصميم كلاسيكي أنيق',
    imageDesc: 'حذاء جلد أسود فاخر'
  },
  {
    id: 9,
    name: 'قميص حرير فاخر',
    category: 'ملابس',
    price: 2800,
    compareAtPrice: null,
    rating: 4.6,
    badges: ['الأكثر مبيعًا'],
    colors: ['أبيض', 'أسود', 'أزرق'],
    sizes: ['صغير', 'متوسط', 'كبير', 'كبير جداً'],
    shortDesc: 'قميص حرير فاخر بتصميم أنيق ومريح',
    imageDesc: 'قميص حرير أبيض فاخر'
  },
  {
    id: 10,
    name: 'ساعة حائط فاخرة',
    category: 'ديكور',
    price: 12000,
    compareAtPrice: 15000,
    rating: 4.8,
    badges: ['جديد'],
    colors: ['ذهبي', 'فضي', 'أسود'],
    sizes: ['واحد'],
    shortDesc: 'ساعة حائط فاخرة بتصميم كلاسيكي راقي',
    imageDesc: 'ساعة حائط ذهبية فاخرة'
  },
  {
    id: 11,
    name: 'حقيبة سفر فاخرة',
    category: 'حقائب',
    price: 15000,
    compareAtPrice: null,
    rating: 4.9,
    badges: ['الأكثر مبيعًا'],
    colors: ['أسود', 'بني', 'رمادي'],
    sizes: ['صغير', 'متوسط', 'كبير'],
    shortDesc: 'حقيبة سفر فاخرة متينة بتصميم أنيق',
    imageDesc: 'حقيبة سفر سوداء فاخرة'
  },
  {
    id: 12,
    name: 'خاتم ماسي فاخر',
    category: 'مجوهرات',
    price: 25000,
    compareAtPrice: 30000,
    rating: 5.0,
    badges: ['جديد', 'الأكثر مبيعًا'],
    colors: ['ذهبي', 'فضي', 'أبيض'],
    sizes: ['15', '16', '17', '18', '19'],
    shortDesc: 'خاتم ماسي فاخر بتصميم راقي وأنيق',
    imageDesc: 'خاتم ماسي فاخر على خلفية أنيقة'
  },
  {
    id: 13,
    name: 'معطف صوف فاخر',
    category: 'ملابس',
    price: 9800,
    compareAtPrice: 12000,
    rating: 4.7,
    badges: ['خصم'],
    colors: ['أسود', 'بني', 'رمادي'],
    sizes: ['صغير', 'متوسط', 'كبير', 'كبير جداً'],
    shortDesc: 'معطف صوف فاخر بتصميم أنيق ودافئ',
    imageDesc: 'معطف صوف أسود فاخر'
  },
  {
    id: 14,
    name: 'محفظة نقود جلدية فاخرة',
    category: 'إكسسوارات',
    price: 2200,
    compareAtPrice: null,
    rating: 4.5,
    badges: ['الأكثر مبيعًا'],
    colors: ['أسود', 'بني'],
    sizes: ['واحد'],
    shortDesc: 'محفظة نقود جلدية فاخرة بتصميم أنيق',
    imageDesc: 'محفظة نقود جلدية سوداء فاخرة'
  },
  {
    id: 15,
    name: 'عقد لؤلؤ فاخر',
    category: 'مجوهرات',
    price: 14500,
    compareAtPrice: 18000,
    rating: 4.8,
    badges: ['جديد'],
    colors: ['أبيض', 'وردي', 'أسود'],
    sizes: ['40 سم', '45 سم', '50 سم'],
    shortDesc: 'عقد لؤلؤ فاخر بتصميم كلاسيكي راقي',
    imageDesc: 'عقد لؤلؤ فاخر على خلفية أنيقة'
  },
  {
    id: 16,
    name: 'حذاء رياضي فاخر',
    category: 'أحذية',
    price: 3800,
    compareAtPrice: 5000,
    rating: 4.6,
    badges: ['خصم'],
    colors: ['أبيض', 'أسود', 'رمادي'],
    sizes: ['40', '41', '42', '43', '44', '45'],
    shortDesc: 'حذاء رياضي فاخر مريح وأنيق',
    imageDesc: 'حذاء رياضي أبيض فاخر'
  },
  {
    id: 17,
    name: 'ساعة يد رياضية فاخرة',
    category: 'ساعات',
    price: 6800,
    compareAtPrice: null,
    rating: 4.7,
    badges: ['الأكثر مبيعًا'],
    colors: ['أسود', 'أبيض', 'أزرق'],
    sizes: ['واحد'],
    shortDesc: 'ساعة يد رياضية فاخرة بميزات متقدمة',
    imageDesc: 'ساعة يد رياضية سوداء فاخرة'
  },
  {
    id: 18,
    name: 'حقيبة كمبيوتر فاخرة',
    category: 'حقائب',
    price: 4500,
    compareAtPrice: 6000,
    rating: 4.5,
    badges: ['خصم'],
    colors: ['أسود', 'رمادي', 'بني'],
    sizes: ['واحد'],
    shortDesc: 'حقيبة كمبيوتر فاخرة بتصميم عصري',
    imageDesc: 'حقيبة كمبيوتر سوداء فاخرة'
  },
  {
    id: 19,
    name: 'قميص كاجوال فاخر',
    category: 'ملابس',
    price: 2100,
    compareAtPrice: null,
    rating: 4.4,
    badges: ['الأكثر مبيعًا'],
    colors: ['أبيض', 'أسود', 'أزرق', 'رمادي'],
    sizes: ['صغير', 'متوسط', 'كبير', 'كبير جداً'],
    shortDesc: 'قميص كاجوال فاخر مريح وأنيق',
    imageDesc: 'قميص كاجوال أبيض فاخر'
  },
  {
    id: 20,
    name: 'نظارة طبية فاخرة',
    category: 'نظارات',
    price: 2800,
    compareAtPrice: 3500,
    rating: 4.6,
    badges: ['خصم'],
    colors: ['أسود', 'بني', 'أزرق'],
    sizes: ['واحد'],
    shortDesc: 'نظارة طبية فاخرة بتصميم أنيق',
    imageDesc: 'نظارة طبية سوداء فاخرة'
  },
  {
    id: 21,
    name: 'سوار فضي منقوش',
    category: 'مجوهرات',
    price: 3200,
    compareAtPrice: null,
    rating: 4.5,
    badges: ['جديد'],
    colors: ['فضي', 'ذهبي'],
    sizes: ['صغير', 'متوسط', 'كبير'],
    shortDesc: 'سوار فضي بتصميم منقوش فاخر',
    imageDesc: 'سوار فضي منقوش فاخر'
  },
  {
    id: 22,
    name: 'عطر نسائي فاخر',
    category: 'عطور',
    price: 3800,
    compareAtPrice: 4800,
    rating: 4.8,
    badges: ['جديد', 'الأكثر مبيعًا'],
    colors: ['واحد'],
    sizes: ['50 مل', '100 مل'],
    shortDesc: 'عطر نسائي فاخر برائحة مميزة',
    imageDesc: 'زجاجة عطر نسائي فاخرة'
  },
  {
    id: 23,
    name: 'حذاء كعب عالي فاخر',
    category: 'أحذية',
    price: 4200,
    compareAtPrice: 5500,
    rating: 4.7,
    badges: ['خصم'],
    colors: ['أسود', 'أحمر', 'أبيض'],
    sizes: ['37', '38', '39', '40', '41'],
    shortDesc: 'حذاء كعب عالي فاخر بتصميم أنيق',
    imageDesc: 'حذاء كعب عالي أسود فاخر'
  },
  {
    id: 24,
    name: 'قماش حرير فاخر',
    category: 'ديكور',
    price: 3500,
    compareAtPrice: null,
    rating: 4.6,
    badges: ['الأكثر مبيعًا'],
    colors: ['ذهبي', 'فضي', 'أبيض'],
    sizes: ['واحد'],
    shortDesc: 'قماش حرير فاخر بتصميم راقي',
    imageDesc: 'قماش حرير ذهبي فاخر'
  }
];

// Categories
const CATEGORIES = ['جميع المنتجات', 'ساعات', 'حقائب', 'نظارات', 'مجوهرات', 'إكسسوارات', 'عطور', 'أحذية', 'ملابس', 'ديكور'];

// Storage Helpers
const Storage = {
  getCart() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  },
  setCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    this.updateCartCounter();
  },
  getWishlist() {
    return JSON.parse(localStorage.getItem('wishlist') || '[]');
  },
  setWishlist(wishlist) {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    this.updateWishlistCounter();
  },
  addToCart(productId, color, size, quantity = 1) {
    const cart = this.getCart();
    const existing = cart.findIndex(
      item => item.productId === productId && item.color === color && item.size === size
    );
    if (existing >= 0) {
      cart[existing].quantity += quantity;
    } else {
      cart.push({ productId, color, size, quantity });
    }
    this.setCart(cart);
  },
  removeFromCart(index) {
    const cart = this.getCart();
    cart.splice(index, 1);
    this.setCart(cart);
  },
  updateCartQuantity(index, quantity) {
    const cart = this.getCart();
    if (quantity <= 0) {
      cart.splice(index, 1);
    } else {
      cart[index].quantity = quantity;
    }
    this.setCart(cart);
  },
  getCartTotal() {
    const cart = this.getCart();
    return cart.reduce((sum, item) => {
      const product = PRODUCTS.find(p => p.id === item.productId);
      return sum + (product ? product.price * item.quantity : 0);
    }, 0);
  },
  updateCartCounter() {
    const cart = this.getCart();
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    const counters = document.querySelectorAll('.cart-counter');
    counters.forEach(counter => {
      counter.textContent = total;
      counter.classList.toggle('hidden', total === 0);
    });
  },
  updateWishlistCounter() {
    const wishlist = this.getWishlist();
    const counters = document.querySelectorAll('.wishlist-counter');
    counters.forEach(counter => {
      counter.textContent = wishlist.length;
      counter.classList.toggle('hidden', wishlist.length === 0);
    });
  },
  addToWishlist(productId) {
    const wishlist = this.getWishlist();
    if (!wishlist.includes(productId)) {
      wishlist.push(productId);
      this.setWishlist(wishlist);
    }
  },
  removeFromWishlist(productId) {
    const wishlist = this.getWishlist();
    const index = wishlist.indexOf(productId);
    if (index >= 0) {
      wishlist.splice(index, 1);
      this.setWishlist(wishlist);
    }
  },
  isInWishlist(productId) {
    return this.getWishlist().includes(productId);
  },
  addToRecentlyViewed(productId) {
    let recent = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
    recent = recent.filter(id => id !== productId);
    recent.unshift(productId);
    recent = recent.slice(0, 10);
    localStorage.setItem('recentlyViewed', JSON.stringify(recent));
  },
  getRecentlyViewed() {
    const ids = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
    return ids.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
  }
};

// Dark Mode
const DarkMode = {
  init() {
    const isDark = localStorage.getItem('darkMode') === 'true';
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
    const toggle = document.getElementById('darkModeToggle');
    if (toggle) {
      toggle.addEventListener('click', () => this.toggle());
    }
  },
  toggle() {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
  }
};

// Toast Notification
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `fixed top-20 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ${
    type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
  }`;
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Format Price
function formatPrice(price) {
  return new Intl.NumberFormat('ar-SA', { style: 'currency', currency: 'SAR' }).format(price);
}

// Render Rating Stars
function renderRatingStars(rating, container) {
  container.innerHTML = '';
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  for (let i = 0; i < 5; i++) {
    const star = document.createElement('span');
    if (i < fullStars) {
      star.innerHTML = '★';
      star.className = 'text-yellow-400';
    } else if (i === fullStars && hasHalfStar) {
      star.innerHTML = '★';
      star.className = 'text-yellow-400 opacity-50';
    } else {
      star.innerHTML = '★';
      star.className = 'text-gray-300 dark:text-gray-600';
    }
    container.appendChild(star);
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  DarkMode.init();
  Storage.updateCartCounter();
  Storage.updateWishlistCounter();
});

