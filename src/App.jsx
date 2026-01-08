// COMPLETE App.jsx w/ Figma Slider + Cards (file:60, file:61 EXACT)

import { useState, useEffect } from 'react'
import { Home, Heart, Search, User, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { supermarketData } from './data/supermarketData'

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="h-dvh bg-gradient-to-br from-gray-50 to-emerald-50 font-['Inter']">
                <HomeScreen />
                <BottomNav />
            </div>
        </QueryClientProvider>
    )
}

function HomeScreen() {
    const { data: products = supermarketData.featuredProducts.slice(0, 6) } = useQuery({
        queryKey: ['products'],
        queryFn: () => Promise.resolve(supermarketData.featuredProducts)
    })

    return (
        <div className="pt-2 px-4 pb-28 space-y-6">
            {/* Search Bar */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-sm p-4 flex items-center">
                <Search size={20} className="text-gray-400 mr-3 flex-shrink-0" />
                <input
                    className="flex-1 bg-transparent outline-none placeholder-gray-500 text-base"
                    placeholder="Search groceries, fruits, vegetables..."
                />
            </div>

            {/* Figma Slider - EXACT file:60 */}
            <PromoSlider />

            {/* Categories */}
            <Categories />

            
            {/* Horizontal Fruits Scroll - EXACT file:88 */}
            <section className="mb-8">
                <div className="flex items-center justify-between mb-4 px-1">
                    <h2 className="text-xl font-bold text-gray-900">Fresh Fruits</h2>
                    <button className="text-emerald-600 text-sm font-semibold px-3 py-1 rounded-full bg-emerald-50 hover:bg-emerald-100 transition-colors">
                        See all
                    </button>
                </div>
                {/* FIXED: Remove -mx-1 px-1, increase gap */}
                <div className="flex gap-6 overflow-x-auto pb-3 scrollbar-hide snap-x snap-mandatory">
                    {products.map((product) => (
                        <div key={product.id} className="flex-none shrink-0 snap-center w-[160px]">
                            <FigmaProductCard product={product} />
                        </div>
                    ))}
                </div>
            </section>


        </div>
    )
}

// 🔥 Figma Slider (file:60) - Auto + Indicators
function PromoSlider() {
    const slides = [
        { id: 1, title: 'Up to 30%', subtitle: 'Fresh veggies', image: '/images/veggies.jpg' },
        { id: 2, title: '25% First Order', subtitle: 'New customers', image: '/images/bag.jpg' },
        { id: 3, title: 'Free Delivery', subtitle: 'QAR 50+', image: '/images/delivery.jpg' }
    ]

    const [current, setCurrent] = useState(0)
    const visibleSlides = 1.25  // Lulu partial next slide

    return (
        <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Main content col */}
            <div className="col-span-2 lg:col-span-1">
                {/* Your fruits/products grid */}
            </div>

            {/* Swiper col-span-2 (full width slider) */}
            <div className="col-span-2 relative rounded-2xl overflow-hidden shadow-xl">

                {/* Swiper Track */}
                <div className="swiper-wrapper flex nowrap" style={{ transform: `translateX(-${current * 79}%)` }}>
                    {slides.map((slide, index) => (
                        <div key={slide.id} className="swiper-slide flex-none w-[79%] h-48 rounded-xl p-6 flex items-center bg-gradient-to-r from-emerald-400 to-green-500 text-white shadow-2xl hover:scale-[1.02] transition-all">
                            <div className="flex items-center space-x-4">
                                <img src={slide.image} className="w-24 h-24 object-contain opacity-80" />
                                <div>
                                    <h3 className="text-xl font-bold mb-1">{slide.title}</h3>
                                    <p className="text-sm opacity-90 mb-4 line-clamp-2">{slide.subtitle}</p>
                                    <button className="bg-white text-emerald-600 px-6 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl">
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lulu Indicators (bottom center) */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            className={`w-3 h-3 rounded-full transition-all ${i === current ? 'w-8 bg-white shadow-lg' : 'bg-white/60'
                                }`}
                            onClick={() => setCurrent(i)}
                        />
                    ))}
                </div>

                {/* Arrows */}
                <button className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-2 rounded-full text-white shadow-lg">
                    <ChevronLeft size={18} strokeWidth={3} />
                </button>
                <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-2 rounded-full text-white shadow-lg">
                    <ChevronRight size={18} strokeWidth={3} />
                </button>
            </div>
        </div>
    )
}

// 🔥 Figma Categories
function Categories() {
    const categories = supermarketData.categories.slice(0, 6)
    return (
        <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Categories</h2>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
                {categories.map((cat) => (
                    <div key={cat.id} className="flex-none w-24 snap-center">
                        <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group">
                            <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-xl flex items-center justify-center text-2xl mb-2 shadow-lg group-hover:scale-110 transition-all">
                                {cat.icon}
                            </div>
                            <p className="text-sm font-semibold text-gray-800 text-center leading-tight">{cat.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

// 🔥 Figma Product Card (file:61) - EXACT
function FigmaProductCard({ product }) {
    const [quantity, setQuantity] = useState(0)

    return (
        <div className="w-[182px] h-[245px] bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-all">
            {/* Image + Quantity - Fixed sizes */}
            <div className="relative h-[140px] bg-gray-50 rounded-t-2xl overflow-hidden flex items-center justify-center">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-[110px] w-auto max-w-[140px] object-contain"
                />
                {/* Quantity button - exact Figma position */}
                <div className="absolute top-2 right-2">
                    {quantity === 0 ? (
                        <button className="w-9 h-9 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-all border">
                            <ShoppingCart size={18} className="text-emerald-500" />
                        </button>
                    ) : (
                        <div className="bg-white rounded-full shadow-lg flex items-center space-x-1 px-2 py-1 min-w-[52px] font-bold text-xs border">
                            <button onClick={() => setQuantity(q => Math.max(0, q - 1))}>-</button>
                            <span>{quantity}</span>
                            <button onClick={() => setQuantity(q => q + 1)}>+</button>
                        </div>
                    )}
                </div>
            </div>

            {/* Content - Compact for 245px height */}
            <div className="flex-1 px-3 pt-2 pb-3 flex flex-col justify-between">
                {/* Name */}
                <h3 className="font-semibold text-sm leading-4 mb-1.5 line-clamp-2 text-gray-900">
                    {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center mb-2">
                    <div className="flex items-center bg-yellow-100 px-1.5 py-0.5 rounded text-xs font-bold mr-1.5">
                        <span className="text-yellow-800">★</span>
                        <span className="ml-0.5">{product.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500">({product.reviews})</span>
                </div>

                {/* Price - Bottom aligned */}
                <div className="flex justify-between items-center">
                    <span className="text-base font-black text-emerald-600">QAR {product.price}</span>
                </div>
            </div>
        </div>
    )
}
function BottomNav() {
    const [active, setActive] = useState('home')
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl z-50 px-4 py-2">
            <div className="flex items-center justify-evenly">
                <button onClick={() => setActive('home')} className={`p-2 rounded-xl ${active === 'home' ? 'bg-emerald-50 text-emerald-600 shadow-md' : 'text-gray-700 hover:bg-gray-50'}`}>
                    <Home size={24} strokeWidth={active === 'home' ? 3 : 2} />
                </button>
                <button className="relative p-2 rounded-xl text-gray-700 hover:bg-gray-50 group">
                    <Heart size={24} strokeWidth={2} />
                    <span className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow-lg">3</span>
                </button>
                <button className="p-3 bg-emerald-50 rounded-2xl text-emerald-600 shadow-lg hover:shadow-emerald-500/25 transition-all">
                    <ShoppingCart size={24} strokeWidth={2.5} />
                </button>
                <button className="p-2 rounded-xl text-gray-700 hover:bg-gray-50">
                    <Search size={24} strokeWidth={2} />
                </button>
                <button className="p-2 rounded-xl text-gray-700 hover:bg-gray-50">
                    <User size={24} strokeWidth={2} />
                </button>
            </div>
        </div>
    )
}
export default App
