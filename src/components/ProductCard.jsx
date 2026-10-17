import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import { Heart } from 'lucide-react'
import gsap from 'gsap'
import { useRef } from 'react'

export default function ProductCard({ product }) {
  const { add } = useCart()
  const { toggle, has } = useWishlist()
  const ref = useRef()
  const onEnter = () => gsap.to(ref.current, { scale: 1.03, duration: 0.2 })
  const onLeave = () => gsap.to(ref.current, { scale: 1, duration: 0.2 })
  const liked = has(product.id)
  return (
    <div ref={ref} onMouseEnter={onEnter} onMouseLeave={onLeave} className="bg-surface rounded-xl shadow p-4 flex flex-col">
      <div className="relative">
        <Link to={`/product/${product.id}`}><img src={product.img} alt={product.name} className="w-full h-48 object-cover rounded-lg"/></Link>
        {product.oldPrice && <span className="absolute top-2 left-2 bg-sale text-white text-xs px-2 py-1 rounded">SALE</span>}
        <button onClick={()=>toggle(product)} className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow">
          <Heart size={16} className={liked?'fill-red-500 text-red-500':'text-gray-400'}/>
        </button>
      </div>
      <Link to={`/product/${product.id}`} className="mt-3 font-semibold text-brand hover:text-link">{product.name}</Link>
      <div className="flex items-center gap-1 text-sm text-muted mt-1">
        <span className="text-yellow-500">★</span>{product.rating} ({product.reviews})
      </div>
      <div className="mt-auto pt-3 flex items-center justify-between">
        <div>
          <span className="font-bold text-brand">${product.price.toFixed(2)}</span>
          {product.oldPrice && <span className="text-muted line-through text-sm ml-2">${product.oldPrice.toFixed(2)}</span>}
        </div>
        <button onClick={()=>add(product)} disabled={product.stock===0} className="bg-flash text-brand font-bold px-3 py-1.5 rounded-lg disabled:opacity-40 text-sm">
          {product.stock===0?'Out':'Add'}
        </button>
      </div>
    </div>
  )
}
