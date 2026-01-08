// src/data/supermarketData.js - Complete Sample Backend Data
export const supermarketData = {
  categories: [
    { id: 1, name: 'Fruits', icon: '🍎', color: '#10B981', productsCount: 25 },
    { id: 2, name: 'Vegetables', icon: '🥬', color: '#059669', productsCount: 32 },
    { id: 3, name: 'Milk & Dairy', icon: '🥛', color: '#F59E0B', productsCount: 18 },
    { id: 4, name: 'Meat & Fish', icon: '🐟', color: '#DC2626', productsCount: 15 },
    { id: 5, name: 'Bakery', icon: '🍞', color: '#8B4513', productsCount: 22 },
    { id: 6, name: 'Beverages', icon: '🥤', color: '#3B82F6', productsCount: 28 },
    { id: 7, name: 'Snacks', icon: '🍫', color: '#F97316', productsCount: 40 },
    { id: 8, name: 'Household', icon: '🧺', color: '#6B7280', productsCount: 35 }
  ],

  featuredProducts: [
    {
      id: 1,
      name: 'Fresh Banana',
      category: 'Fruits',
      price: 4.87,
      originalPrice: 6.50,
      image: '/images/banana.png',
      rating: 4.9,
      reviews: 127,
      discount: 25,
      inStock: true,
      unit: 'kg'
    },
    {
      id: 2,
      name: 'Red Bell Pepper',
      category: 'Vegetables',
      price: 4.87,
      originalPrice: 7.20,
      image: '/images/pepper.png',
      rating: 4.7,
      reviews: 89,
      discount: 32,
      inStock: true,
      unit: 'kg'
    },
    {
      id: 3,
      name: 'Juicy Orange',
      category: 'Fruits',
      price: 4.87,
      originalPrice: 5.80,
      image: '/images/orange.png',
      rating: 4.8,
      reviews: 156,
      discount: 16,
      inStock: true,
      unit: 'kg'
    },
    {
      id: 4,
      name: 'Fresh Milk 2L',
      category: 'Milk & Dairy',
      price: 8.99,
      originalPrice: 10.50,
      image: '/images/milk.png',
      rating: 4.9,
      reviews: 234,
      discount: 14,
      inStock: true,
      unit: '2L'
    },
    {
      id: 5,
      name: 'Chicken Breast',
      category: 'Meat & Fish',
      price: 22.50,
      originalPrice: 28.00,
      image: '/images/chicken.png',
      rating: 4.6,
      reviews: 67,
      discount: 20,
      inStock: false,
      unit: 'kg'
    },
    {
      id: 6,
      name: 'Croissant Pack',
      category: 'Bakery',
      price: 7.25,
      originalPrice: 9.00,
      image: '/images/croissant.png',
      rating: 4.8,
      reviews: 98,
      discount: 19,
      inStock: true,
      unit: '6pcs'
    }
  ],

  banners: [
    {
      id: 1,
      title: 'Shop Now Zone 91',
      subtitle: 'Fresh groceries delivered',
      image: '/banners/hero1.jpg',
      cta: 'Start Shopping',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      id: 2,
      title: '20% OFF Fruits',
      subtitle: 'Limited time offer',
      image: '/banners/fruits.jpg',
      cta: 'Grab Deal',
      gradient: 'from-orange-500 to-red-500'
    }
  ]
}
