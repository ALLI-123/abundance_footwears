// js/config.js
const CONFIG = {
  // ========== BRAND INFO ==========
  brand: {
    name: "Abundance FootWears",
    tagline: "Step Into Quality. Walk With Confidence.",
    description: "Discover handpicked shoes and accessories for men, women, and kids. Crafted for comfort, built to last, priced to fit your lifestyle — only at Abundance FootWears.",
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
    { id: "men", name: "Men's Shoes", image: "https://images.unsplash.com/photo-1614252369475-531eba83589c?auto=format&fit=crop&w=600&q=80", link: "#men" },
    { id: "women", name: "Women's Shoes", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80", link: "#women" },
    { id: "kids", name: "Kids Shoes", image: "https://images.unsplash.com/photo-1514989940723-e8e51635289c?auto=format&fit=crop&w=600&q=80", link: "#kids" },
    { id: "casual", name: "Casual Shoes", image: "https://images.unsplash.com/photo-1525962620884-67d4ab0c256f?auto=format&fit=crop&w=600&q=80", link: "#products" },
    { id: "formal", name: "Formal Shoes", image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=600&q=80", link: "#products" },
    { id: "boots", name: "Boots", image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=600&q=80", link: "#products" },
    { id: "sandals", name: "Sandals & Slippers", image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=600&q=80", link: "#products" },
    { id: "accessories", name: "Accessories", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80", link: "#accessories" }
  ],

  // ========== COLLECTIONS ==========
  collections: {
    men: {
      title: "Men's Collection",
      subtitle: "Sharp, strong, and stylish — footwear built for the modern man.",
      items: [
        { id: 101, name: "CAS205", vendorId: "V003", description: "Classic & refined genuine luxury leather shoe.", price: 160000, oldprice: 190000, image: "images/palace_CAS205_160000.jpeg", category: "men", badge: "Bestseller Luxury Shoe" },
        { id: 102, name: "207", vendorId: "V003", description: "Effortless elegance — slip-on comfort.", price: 110000, image: "images/palace_CAS207_110000.jpeg", category: "men" },
        { id: 2, name: "CAS208", vendorId: "V003", description: "Lightweight, breathable, everyday wear.", price: 110000, image: "images/palace_CAS208_110000.jpeg", category: "men", badge: "New" },
        { id: 4, name: "CAS210", vendorId: "V003", description: "Premium leather.", price: 110000,  image: "images/palace_CAS210_110000.jpeg", category: "men", badge: "Hot" },
        { id: 103, name: "CAS207", vendorId: "V003", description: "Relaxed & cool for weekends.", price: 110000, image: "images/palace_CAS207_110000.jpeg", category: "men" },
        { id: 104, name: "CAS221", vendorId: "V003", description: "Quality corporate shoe", price: 160000, image: "images/palace_CAS221_160000.jpeg", category: "men" },



        // stock items

        { id: 5, name: "ELAN", vendorId: "V003", description: "Premium Leather Shoe for all occasions", price: 160000, oldPrice: 200000, image: "images/palace_ELAN_160000.jpeg", category: "men", badge: "Sale" },
        { id: 103, name: "PAT002", vendorId: "V003", description: "Relaxed & cool for outings.", price: 160000, image: "images/palace_PAT002_160000.jpeg", category: "men" },
        { id: 104, name: "PAT003", vendorId: "V003", description: "Classic brogue for real men", price: 160000, image: "images/palace_PAT003_160000.jpeg", category: "men" }
      ]
    },
    women: {
      title: "Women's Collection",
      subtitle: "Elegance in every step — heels, flats, and everything in between.",
      items: [
        { id: 3, name: "Heels", vendorId: "V002", description: "Perfect for events and evening wear.", price: 32000, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80", category: "women" },
        { id: 5, name: "Flats", vendorId: "V002", description: "Soft cushion, all-day comfort.", price: 18500, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80", category: "women", badge: "New" },
        { id: 105, name: "Sneakers", vendorId: "V002", description: "Move in style — lightweight and trendy.", price: 24500, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80", category: "women" },
        { id: 106, name: "Sandals", vendorId: "V002", description: "Summer ready — breezy, comfy, stylish.", price: 13500, image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=600&q=80", category: "women" },
        { id: 107, name: "Boots", vendorId: "V002", description: "Bold & beautiful ankle boots.", price: 42000, image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=600&q=80", category: "women" }
      ]
    },
    kids: {
      title: "Kids' Collection",
      subtitle: "Durable, playful, and comfy — made for little feet on big adventures.",
      items: [
        { id: 108, name: "School Shoes", vendorId: "V001", description: "Smart & sturdy for daily wear.", price: 14000, image: "https://images.unsplash.com/photo-1514989940723-e8e51635289c?auto=format&fit=crop&w=600&q=80", category: "kids" },
        { id: 6, name: "Sneakers", vendorId: "V001", description: "Play all day — durable and fun.", price: 15000, image: "https://images.unsplash.com/photo-1514989940723-e8e51635289c?auto=format&fit=crop&w=600&q=80", category: "kids" },
        { id: 109, name: "Sandals", vendorId: "V001", description: "Breezy & fun for playtime.", price: 9500, image: "https://images.unsplash.com/photo-1514989940723-e8e51635289c?auto=format&fit=crop&w=600&q=80", category: "kids" },
        { id: 110, name: "Baby Shoes", vendorId: "V001", description: "Soft & adorable for tiny feet.", price: 7500, image: "https://images.unsplash.com/photo-1514989940723-e8e51635289c?auto=format&fit=crop&w=600&q=80", category: "kids", badge: "New" }
      ]
    },
    accessories: {
      title: "Accessories",
      subtitle: "Complete your look and care for your footwear.",
      items: [
        { id: 111, name: "Shoe Polish", vendorId: "V002", description: "Keep them shining.", price: 3500, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80", category: "accessories" },
        { id: 8, name: "Very Quality Belt", vendorId: "V003", description: "Genuine leather, polished buckle.", price: 20000, image: "images/palace_UB001_20000.jpeg", category: "accessories", badge: "New" },
        { id: 112, name: "Socks", vendorId: "V002", description: "Comfort first.", price: 2500, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80", category: "accessories" },
        { id: 113, name: "Shoelaces", vendorId: "V002", description: "Fresh & clean.", price: 1500, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80", category: "accessories" }
      ]
    }
  },

  // ========== FEATURED PRODUCTS ==========
  products: [
    { id: 1, name: "palace_CAS151", vendorId: "V003", description: "Genuine leather, hand-stitched finish.", price: 110000, oldPrice: 130000, image: "images/palace_CAS151_110000.jpeg", badge: "Hot", category: "men" },
    { id: 2, name: "Urban Sneaker", vendorId: "V001", description: "Lightweight, breathable, everyday wear.", price: 28500, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80", badge: "New", category: "men" },
    { id: 3, name: "palace_CAS171", vendorId: "V003", description: "Perfect for events and evening wear.", price: 160000, oldprice: 200000, image: "images/palace_CAS171_160000.jpeg", badge: "premium", category: "men" },
    { id: 4, name: "Leather Boots", vendorId: "V001", description: "Rugged design, premium leather.", price: 48000, oldPrice: 60000, image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=500&q=80", badge: "Sale", category: "men" },
    { id: 5, name: "Women's Flat", vendorId: "V002", description: "Soft cushion, all-day comfort.", price: 18500, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=500&q=80", badge: "New", category: "women" },
    { id: 6, name: "Kids Sneaker", vendorId: "V003", description: "Durable, fun, and comfy for little feet.", price: 15000, image: "https://images.unsplash.com/photo-1514989940723-e8e51635289c?auto=format&fit=crop&w=500&q=80", category: "kids" },
    { id: 7, name: "Casual Sandals", vendorId: "V002", description: "Relaxed fit, perfect for weekends.", price: 12500, oldPrice: 16000, image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=500&q=80", badge: "Hot", category: "men" },
    { id: 8, name: "Leather Belt", vendorId: "V002", description: "Genuine leather, polished buckle.", price: 9500, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80", badge: "New", category: "accessories" }
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
    { name: "Adebayo O.", location: "Lagos, Nigeria", initials: "AO", rating: 5, text: "The quality of my Oxford shoes is amazing. I've worn them for months and they still look brand new. Abundance is now my go-to!" },
    { name: "Fatimah K.", location: "Abuja, Nigeria", initials: "FK", rating: 5, text: "I ordered heels for my wedding and they were perfect! Comfortable all day and absolutely stunning. Thank you Abundance!" },
    { name: "Chinedu E.", location: "Port Harcourt", initials: "CE", rating: 5, text: "Bought school shoes for my kids and sneakers for myself. Fast delivery, great prices, and the quality is top-notch!" }
  ],

  // ========== PRE-ORDER PRODUCT ==========
  preOrder: {
    status: "coming-soon",
    launchDate: "2026-08-15T10:00:00",
    tagline: "COMING SOON",
    name: "CAS 171 SERIES",
    subtitle: "Handcrafted. Limited to 30 pairs.",
    description: "Introducing our most ambitious creation yet — CAS 171 SERIES. Crafted from premium Italian full-grain leather, hand-stitched by master cobblers with over 30 years of experience.",
    heroImage: "images/palace_CAS171_160000.jpeg",
    pricing: { earlyBird: 160000, regular: 180000, currency: "₦" },
    stock: { total: 50, reserved: 23, showRealCount: true },
    benefits: [
      { icon: "fas fa-gem", text: "Premium Italian full-grain leather" },
      { icon: "fas fa-hands", text: "Hand-stitched by master cobblers" },
      { icon: "fas fa-certificate", text: "Numbered edition with certificate" }
    ],
    waitlist: { currentCount: 237, showCount: true }
  },

  // ========== PARTNERSHIP & COMMISSIONS ==========
  partners: [
    { id: "P1", name: "Bro. Abdullah - Abu Atiyah", role: "Shoemaker", whatsapp: "+2348037646143", defaultSharePercent: 70, paymentSchedule: "weekly" },
    { id: "P2", name: "Olomu - The librarian", role: "Vendor", whatsapp: "+2348034301390", defaultSharePercent: 70, paymentSchedule: "weekly" }
  ],

  productCommissions: {
    1: { partnerId: "P1", sharePercent: 70 },
    2: { partnerId: "P2", sharePercent: 70 }
  },

  // ========== VENDORS / ARTISANS ==========
  vendors: [
    {
      id: "V001",
      name: "Bro. Abdullah - Abu Atiyah",
      role: "Master Cobbler",
      location: "Itoga, Badagry, Lagos, Nigeria",
      description: "Over 20 years of experience crafting premium leather Oxfords and Loafers. Every stitch is done by hand with meticulous attention to detail.",
      image: "images/BUD.T_Logo.png",
      specialty: "Men's, Women's and Kid's Shoes and Footwears"
    },
    {
      id: "V002",
      name: "Olomu - The librarian",
      role: "Premium Supplier",
      location: "Badagry, Lagos, Nigeria",
      description: "Curating the finest women's footwear, from comfortable everyday flats to stunning event heels, sourced with quality and style in mind.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
      specialty: "All kinds of shoes"
    },
    {
      id: "V003",
      name: "Palace Wears",
      role: "Luxury Footwear Maker",
      location: "Isolo, Lagos, Nigeria",
      description: "PALAZ is a footwear brand built on craftsmanship, creativity, and confidence. We create stylish, comfortable shoes for individuals who value quality and personal style. Each pair is made with quality materials and careful attention to detail, blending timeless craftsmanship with contemporary design.",
      image: "images/palaz_logo.jpeg",
      specialty: "PALAZ — Shoes for Men Who Lead."
    }
  ]
};
