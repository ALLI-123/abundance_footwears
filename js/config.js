// js/config.js
const CONFIG = {
  // ========== BRAND INFO ==========
  brand: {
    name: "Abundance FootWears",
    tagline: "Step Into Quality. Walk With Confidence.",
    description: "Discover handpicked shoes and accessories for men, women, and kids. Crafted for comfort, built to last, priced to fit your lifestyle — only at Abundance   FootWears.",
    founded: "Premium Footwear Since Day One"
  },

  // ========== CONTACT INFO ==========
  contact: {
    phone: "+234 816 303 5778",
    whatsapp: "+2348163035778",
    email: "alli.abdulazeez92@gmail.com",
    address: "Zanmu Compound, Car Wash Bus Stop, Around Anglican Primary School, Itoga, Badagry, Lagos, Nigeria",
    hours: "Mon - Sat: 9AM - 7PM"
  },

  // ========== SOCIAL MEDIA ==========
  social: [
    { name: "Facebook", icon: "fab fa-facebook-f", url: "https://facebook.com/Abundancefootwears" },
    { name: "Instagram", icon: "fab fa-instagram", url: "https://instagram.com/Abundancefootwears" },
    { name: "Twitter", icon: "fab fa-twitter", url: "https://twitter.com/Abundancefootwears" },
    { name: "WhatsApp", icon: "fab fa-whatsapp", url: "https://wa.me/2348163035778" },
    { name: "TikTok", icon: "fab fa-tiktok", url: "https://tiktok.com/@Abundancefootwears" }
  ],

  // ========== CATEGORIES ==========
  categories: [
    {
      id: "men",
      name: "Men's Shoes",
      image: "https://images.unsplash.com/photo-1614252369475-531eba83589c?auto=format&fit=crop&w=600&q=80",
      link: "#men"
    },
    {
      id: "women",
      name: "Women's Shoes",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80",
      link: "#women"
    },
    {
      id: "kids",
      name: "Kids Shoes",
      vendorId: "V001",
      image: "https://images.unsplash.com/photo-1514989940723-e8e51635289c?auto=format&fit=crop&w=600&q=80",
      link: "#kids"
    },
    {
      id: "casual",
      name: "Casual Shoes",
      image: "https://images.unsplash.com/photo-1525962620884-67d4ab0c256f?auto=format&fit=crop&w=600&q=80",
      link: "#products"
    },
    {
      id: "formal",
      name: "Formal Shoes",
      image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=600&q=80",
      link: "#products"
    },
    {
      id: "boots",
      name: "Boots",
      image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=600&q=80",
      link: "#products"
    },
    {
      id: "sandals",
      name: "Sandals & Slippers",
      image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=600&q=80",
      link: "#products"
    },
    {
      id: "accessories",
      name: "Accessories",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
      link: "#accessories"
    }
  ],

  // ========== COLLECTIONS ==========
  

collections: {
  men: {
    title: "Men's Collection",
    subtitle: "Sharp, strong, and stylish — footwear built for the modern man.",
    items: [
      { id: 101, name: "Oxford", description: "Classic & refined genuine leather oxford, perfect for formal and semi-formal occasions.", price: 38000, image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=600&q=80", category: "men", badge: "Bestseller" },
      { id: 102, name: "Loafers", description: "Effortless elegance — slip-on comfort with premium leather finish.", price: 32000, image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=600&q=80", category: "men" },
      { id: 2, name: "Sneakers", description: "Lightweight, breathable, everyday wear.", price: 28500, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80", category: "men", badge: "New" },
      { id: 4, name: "Boots", description: "Rugged design, premium leather. Built to last.", price: 48000, oldPrice: 60000, image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=600&q=80", category: "men", badge: "Sale" },
      { id: 103, name: "Sandals", description: "Relaxed & cool — perfect for weekends and casual outings.", price: 14500, image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=600&q=80", category: "men" },
      { id: 104, name: "Slippers", description: "Home & lounge comfort with durable soles.", price: 9500, image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=600&q=80", category: "men" }
    ]
  },
  women: {
    title: "Women's Collection",
    subtitle: "Elegance in every step — heels, flats, and everything in between.",
    items: [
      { id: 3, name: "Heels", description: "Perfect for events and evening wear. Grace & glamour.", price: 32000, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80", category: "women" },
      { id: 5, name: "Flats", description: "Soft cushion, all-day comfort. Everyday chic.", price: 18500, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80", category: "women", badge: "New" },
      { id: 105, name: "Sneakers", description: "Move in style — lightweight and trendy.", price: 24500, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80", category: "women" },
      { id: 106, name: "Sandals", description: "Summer ready — breezy, comfy, stylish.", price: 13500, image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=600&q=80", category: "women" },
      { id: 107, name: "Boots", description: "Bold & beautiful — premium leather ankle boots.", price: 42000, image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=600&q=80", category: "women" }
    ]
  },
  kids: {
    title: "Kids' Collection",
    subtitle: "Durable, playful, and comfy — made for little feet on big adventures.",
    items: [
      { id: 108, name: "School Shoes", description: "Smart & sturdy — built for daily school wear.", price: 14000, image: "https://images.unsplash.com/photo-1514989940723-e8e51635289c?auto=format&fit=crop&w=600&q=80", category: "kids" },
      { id: 6, name: "Sneakers", description: "Play all day — durable, fun, and comfy.", price: 15000, image: "https://images.unsplash.com/photo-1514989940723-e8e51635289c?auto=format&fit=crop&w=600&q=80", category: "kids" },
      { id: 109, name: "Sandals", description: "Breezy & fun — perfect for playtime.", price: 9500, image: "https://images.unsplash.com/photo-1514989940723-e8e51635289c?auto=format&fit=crop&w=600&q=80", category: "kids" },
      { id: 110, name: "Baby Shoes", description: "Soft & adorable — gentle on tiny feet.", price: 7500, image: "https://images.unsplash.com/photo-1514989940723-e8e51635289c?auto=format&fit=crop&w=600&q=80", category: "kids", badge: "New" }
    ]
  },
  accessories: {
    title: "Accessories",
    subtitle: "Complete your look and care for your footwear with our premium accessories.",
    items: [
      { id: 111, name: "Shoe Polish", description: "Keep them shining — premium formula.", price: 3500, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80", category: "accessories" },
      { id: 8, name: "Belts", description: "Genuine leather, polished buckle. Match your style.", price: 9500, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80", category: "accessories", badge: "New" },
      { id: 112, name: "Socks", description: "Comfort first — soft cotton blend.", price: 2500, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80", category: "accessories" },
      { id: 113, name: "Shoelaces", description: "Fresh & clean — premium woven laces.", price: 1500, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80", category: "accessories" },
      { id: 114, name: "Shoe Brushes", description: "Care essentials — durable bristles.", price: 2800, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80", category: "accessories" },
      { id: 115, name: "Insoles", description: "Extra comfort — cushioned support.", price: 3500, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80", category: "accessories" },
      { id: 116, name: "Shoe Bags", description: "Travel smart — protect your footwear.", price: 4500, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80", category: "accessories" }
    ]
  }
},

  // ========== PRODUCTS ==========
  products: [
    {
      id: 1,
      name: "Classic Oxford",
      vendorId: "V001",
      description: "Genuine leather, hand-stitched finish.",
      price: 35000,
      oldPrice: 45000,
      image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=500&q=80",
      badge: "Sale",
      category: "men"
    },
    {
      id: 2,
      name: "Urban Sneaker",
      description: "Lightweight, breathable, everyday wear.",
      price: 28500,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80",
      badge: "New",
      category: "men"
    },
    {
      id: 3,
      name: "Elegant Heels",
      description: "Perfect for events and evening wear.",
      price: 32000,
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=500&q=80",
      category: "women"
    },
    {
      id: 4,
      name: "Leather Boots",
      description: "Rugged design, premium leather.",
      price: 48000,
      oldPrice: 60000,
      image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=500&q=80",
      badge: "Sale",
      category: "men"
    },
    {
      id: 5,
      name: "Women's Flat",
      description: "Soft cushion, all-day comfort.",
      price: 18500,
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=500&q=80",
      badge: "New",
      category: "women"
    },
    {
      id: 6,
      name: "Kids Sneaker",
      description: "Durable, fun, and comfy for little feet.",
      price: 15000,
      image: "https://images.unsplash.com/photo-1514989940723-e8e51635289c?auto=format&fit=crop&w=500&q=80",
      category: "kids"
    },
    {
      id: 7,
      name: "Casual Sandals",
      description: "Relaxed fit, perfect for weekends.",
      price: 12500,
      oldPrice: 16000,
      image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=500&q=80",
      badge: "Hot",
      category: "men"
    },
    {
      id: 8,
      name: "Leather Belt",
      description: "Genuine leather, polished buckle.",
      price: 9500,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80",
      badge: "New",
      category: "accessories"
    }
  ],

  // ========== FEATURES ==========
  features: [
    { icon: "fas fa-gem", title: "Premium Quality", description: "Handpicked materials and craftsmanship you can trust." },
    { icon: "fas fa-tags", title: "Affordable Prices", description: "Luxury footwear without the luxury price tag." },
    { icon: "fas fa-feather-alt", title: "Comfortable Fit", description: "Designed to feel great from the very first step." },
    { icon: "fas fa-shield-alt", title: "Durable Materials", description: "Built to last through every season and adventure." },
    { icon: "fas fa-shipping-fast", title: "Fast Delivery", description: "Quick, reliable shipping right to your doorstep." },
    { icon: "fas fa-headset", title: "Excellent Service", description: "Friendly support whenever you need us." }
  ],

  // ========== TESTIMONIALS ==========
  testimonials: [
    {
      name: "Adebayo O.",
      location: "Lagos, Nigeria",
      initials: "AO",
      rating: 5,
      text: "The quality of my Oxford shoes is amazing. I've worn them for months and they still look brand new. Abundance is now my go-to!"
    },
    {
      name: "Fatimah K.",
      location: "Abuja, Nigeria",
      initials: "FK",
      rating: 5,
      text: "I ordered heels for my wedding and they were perfect! Comfortable all day and absolutely stunning. Thank you Abundance!"
    },
    {
      name: "Chinedu E.",
      location: "Port Harcourt",
      initials: "CE",
      rating: 5,
      text: "Bought school shoes for my kids and sneakers for myself. Fast delivery, great prices, and the quality is top-notch!"
    }
  ],

  // ========== PRE-ORDER PRODUCT ==========
preOrder: {
  status: "coming-soon", // "coming-soon" | "pre-order" | "launched" | "sold-out"
  launchDate: "2026-08-15T10:00:00", // Real launch date (YYYY-MM-DDTHH:MM:SS)
  tagline: "COMING SOON",
  name: "The Royal Oxford",
  subtitle: "Handcrafted in Italy. Limited to 100 pairs.",
  description: "Introducing our most ambitious creation yet — The Royal Oxford. Crafted from premium Italian full-grain leather, hand-stitched by master cobblers with over 30 years of experience. Each pair is numbered and comes with a certificate of authenticity.",
  heroImage: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=1200&q=80",
  
  pricing: {
    earlyBird: 45000,
    regular: 58000,
    currency: "₦"
  },
  
  stock: {
    total: 100,
    reserved: 23, // Update this manually as pre-orders come in
    showRealCount: true // Set false if you don't want to show exact numbers
  },
  
  benefits: [
    { icon: "fas fa-gem", text: "Premium Italian full-grain leather" },
    { icon: "fas fa-hands", text: "Hand-stitched by master cobblers" },
    { icon: "fas fa-certificate", text: "Numbered edition with certificate" }
  ],
  
  waitlist: {
    currentCount: 237, // Update this manually
    showCount: true
  }
},








// ========== PARTNERSHIP & COMMISSIONS ==========
partners: [
  {
    id: "P1",
    name: "Bro. Abdullah - Abu Atiyah",
    role: "Shoemaker",
    whatsapp: "+2348037646143",
    defaultSharePercent: 70, // Partner gets 60%, you keep 40%
    paymentSchedule: "weekly" // weekly, bi-weekly, monthly
  },
  {
    id: "P2",
    name: "Olomu - The librarian",
    role: "Vendor",
    whatsapp: "+2348034301390",
    defaultSharePercent: 70,
    paymentSchedule: "weekly"
  }
],

// Override shares per product (optional)
// If not set, uses partner's defaultSharePercent
productCommissions: {
  1:   { partnerId: "P1", sharePercent: 70 }, // Classic Oxford → Bro Abdullah gets 60%
  2:   { partnerId: "P2", sharePercent: 70 }, // Elegant Heels → Olomu,the Librarian gets 50%

},

  // ========== VENDORS / ARTISANS ==========
  vendors: [
    {
      id: "V001",
      name: "Bro. Abdullah - Abu Atiyah",
      role: "Master Cobbler",
      location: "Itoga, Badagry, Lagos, Nigeria",
      description: "Over 20 years of experience crafting premium leather Oxfords and Loafers. Every stitch is done by hand with meticulous attention to detail.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80", // Replace with actual artisan/workshop photo
      specialty: "Men's, Women's and Kid's Shoes and Footwears"
    },
    {
      id: "V002",
      name: "Olomu - The librarian",
      role: "Premium Supplier",
      location: "High Court, Badagry, Lagos, Nigeria",
      description: "Curating the finest women's footwear, from comfortable everyday flats to stunning event heels, sourced with quality and style in mind.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
      specialty: "All kinds of shoes"
    },
    {
      id: "V003",
      name: "Little Feet Studio",
      role: "Kids Footwear Specialist",
      location: "Abuja, Nigeria",
      description: "Dedicated to making durable, comfortable, and fun shoes for growing children. Designed for play, school, and special occasions.",
      image: "https://images.unsplash.com/photo-1514989940723-e8e51635289c?auto=format&fit=crop&w=600&q=80",
      specialty: "Kids' School Shoes & Sneakers"
    }
  ]




};