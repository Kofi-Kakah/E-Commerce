import { Link } from 'react-router-dom'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'

export default function Home() {
  const hero = useRef()
  useEffect(() => { gsap.from(hero.current, { opacity:0, y:40, duration:1 }) }, [])
  return (
    <div>
      <section ref={hero} className="bg-brand text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to <span className="text-flash">FlashStore</span></h1>
          <p className="text-gray-300 mb-6">Discover amazing products at unbeatable prices.</p>
          <Link to="/products" className="bg-flash text-brand font-bold px-6 py-3 rounded-lg inline-block">Shop Now</Link>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-brand mb-6">Featured Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.slice(0,8).map(p=><ProductCard key={p.id} product={p}/>)}
        </div>
      </section>
    </div>
  )
}
