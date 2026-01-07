import { useState } from 'react'
import { Home, Heart, Search, User } from 'lucide-react'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: { staleTime: 5 * 60 * 1000 }
    }
})

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="h-dvh bg-gray-50 font-[Inter] relative">
                <div className="pt-12 px-4 pb-28">
                    <HomeScreen />
                </div>
                <BottomNav />
            </div>
        </QueryClientProvider>
    )
}

function HomeScreen() {
    const { data: products = [] } = useQuery({
        queryKey: ['fruits'],
        queryFn: () => Promise.resolve([
            { id: 1, name: 'Banana', price: '4.87', image: 'https://images.unsplash.com/photo-1601001435828-419e309a2f53?w=200&fit=crop', currency: 'QAR' },
            { id: 2, name: 'Pepper', price: '4.87', image: 'https://images.unsplash.com/photo-1546548970-146fdb0116b9?w=200&fit=crop', currency: 'QAR' },
            { id: 3, name: 'Orange', price: '4.87', image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=200&fit=crop', currency: 'QAR' }
        ])
    })

    const categories = [
        'Fruits', 'Milk & Egg', 'Beverages', 'Laundry', 'Vegetables'
    ]

    return (
        <>
            {/* Search Bar */}
            <div className="flex items-center bg-white px-4 py-3 rounded-3xl shadow-sm mb-4">
                <Search size={20} className="text-gray-400 mr-3 flex-shrink-0" />
                <input
                    className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-500 text-base"
                    placeholder="Search groceries..."
                />
            </div>

            {/* Hero Banner - EXACT Figma Match */}
            <section className="relative mb-6 overflow-hidden rounded-3xl shadow-2xl [background:linear-gradient(135deg,#10b981_0%,#047857_50%,#065f46_100%)]">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3133?ixlib=rb-4.0.3&auto=format&fit=crop&w=390&q=80')] bg-cover bg-center opacity-20" />
                <div className="relative z-10 p-6 text-white">
                    <div className="flex items-center mb-2 opacity-80">
                        <div className="w-2 h-2 bg-white rounded-full mr-2" />
                        <span className="text-sm font-medium">Zone 91 Dhafra street</span>
                        <Search size={16} className="ml-auto" />
                    </div>
                    <h1 className="text-3xl font-bold mb-4 leading-tight">Shop Now</h1>
                    <div className="flex items-center">
                        <div className="w-24 h-24 bg-white/20 rounded-2xl mr-4 flex items-center justify-center shadow-2xl">
                            🛍️
                        </div>
                        <div className="flex-1">
                            <button className="w-full bg-white text-emerald-600 py-3 px-6 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all">
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories - Figma Exact */}
            <section className="mb-8">
                <h2 className="text-xl font-bold mb-6">Categories</h2>
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
                    {categories.map((name, i) => (
                        <div key={i} className="flex-none w-28 snap-center">
                            <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all flex flex-col items-center space-y-2">
                                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                                    {i === 0 ? '🍌' : i === 1 ? '🥛' : i === 2 ? '🥤' : i === 3 ? '🧺' : i === 4 ? '🥬' : '🥦'}
                                </div>
                                <span className="text-sm font-semibold text-center text-gray-800 leading-tight">{name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Products Grid - Pixel Perfect */}
            <section className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">Fruits</h2>
                    <button className="text-emerald-600 font-semibold text-sm">See all</button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-3xl shadow-xl p-4 space-y-3 hover:shadow-2xl transition-all hover:-translate-y-1">
                            <div className="relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-32 object-cover rounded-2xl"
                                />
                                <div className="absolute top-2 right-2 bg-white/90 p-1.5 rounded-2xl shadow-lg">
                                    ⭐
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                                <div className="flex items-center justify-between">
                                    <span className="text-2xl font-black text-emerald-600">
                                        {product.currency} {product.price}
                                    </span>
                                    <button className="w-12 h-12 bg-emerald-50 hover:bg-emerald-100 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all">
                                        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

function BottomNav() {
    const [active, setActive] = useState('home')
    const cartCount = 3

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl border-t border-gray-100 px-6 py-3 z-50">
            <div className="flex items-center justify-between">
                <button
                    onClick={() => setActive('home')}
                    className={`flex flex-col items-center p-2 rounded-xl ${active === 'home' ? 'text-emerald-600 bg-emerald-50' : 'text-gray-700 hover:bg-gray-50'} transition-colors`}
                >
                    <Home size={24} strokeWidth={active === 'home' ? 3 : 2} />
                </button>

                <button className="flex flex-col items-center p-2 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors">
                    <Heart size={24} strokeWidth={2} />
                </button>

                <div className="relative">
                    <button className="flex flex-col items-center p-3 bg-emerald-50 text-emerald-600 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h18l-2 12H5L3 3zm0 0L2 8m0 0l1-3m-1 3h16M9 13a2 2 0 100-4 2 2 0 000 4zm6 0a2 2 0 100-4 2 2 0 000 4z" />
                        </svg>
                        <span className="text-xs font-bold mt-1">Cart</span>
                        <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg">
                            {cartCount}
                        </span>
                    </button>
                </div>

                <button className="flex flex-col items-center p-2 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors">
                    <Search size={24} strokeWidth={2} />
                </button>

                <button className="flex flex-col items-center p-2 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors">
                    <User size={24} strokeWidth={2} />
                </button>
            </div>
        </div>
    )
}

export default App
