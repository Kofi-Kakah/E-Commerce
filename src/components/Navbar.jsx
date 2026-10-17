import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import { useTheme } from '../context/ThemeContext'
import { useState } from 'react'
import { ShoppingCart, Heart, Sun, Moon, Search, Menu } from 'lucide-react'

export default function Navbar() {
  const { count } = useCart()
  const { items: wl } = useWishlist()
  const { dark, toggle } = useTheme()
  const [q, setQ] = useState('')
  const nav = useNavigate()
  const submit = (e) => { e.preventDefault(); nav(`/products?search=${encodeURIComponent(q)}`) }
  return (
    <header className="bg-brand text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        <Link to="/" className="text-2xl font-bold text-flash">FLASH<span className="text-white">STORE</span></Link>
        <form onSubmit={submit} className="flex-1 flex">
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search products..." className="flex-1 px-4 py-2 rounded-l-lg text-brand outline-none" />
          <button className="bg-flash text-brand px-4 rounded-r-lg font-bold"><Search size={18}/></button>
        </form>
        <nav className="flex items-center gap-4">
          <Link to="/products" className="hidden md:block hover:text-flash">Products</Link>
          <Link to="/wishlist" className="relative"><Heart/>{wl.length>0 && <span className="absolute -top-2 -right-2 bg-flash text-brand text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">{wl.length}</span>}</Link>
          <Link to="/cart" className="relative"><ShoppingCart/>{count>0 && <span className="absolute -top-2 -right-2 bg-flash text-brand text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">{count}</span>}</Link>
          <button onClick={toggle}>{dark?<Sun/>:<Moon/>}</button>
          <Link to="/login" className="hidden md:block hover:text-flash">Login</Link>
        </nav>
      </div>
    </header>
  )
}
