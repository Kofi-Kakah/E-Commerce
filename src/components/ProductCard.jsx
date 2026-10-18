import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import { Heart } from 'lucide-react'
import gsap from 'gsap'
import { useRef, useState, useEffect } from 'react'

export default function ProductCard({ product }) {
  const { add } = useCart()
  const { toggle, has } = useWishlist()
  const ref = useRef()
  const onEnter = () => gsap.to(ref.current, { scale: 1.03, duration: 0.2 })
  const onLeave = () => gsap.to(ref.current, { scale: 1, duration: 0.2 })
  const liked = has(product.id)
  const [imgSrc, setImgSrc] = useState(product.img)
  useEffect(() => {
    setImgSrc(product.img)
  }, [product.img])
  return (
    <div ref={ref} onMouseEnter={onEnter} onMouseLeave={onLeave} className="bg-surface dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl p-4 flex flex-col transition border border-border/40 dark:border-gray-700">
      <div className="relative">
        <Link to={`/product/${product.id}`} className="block overflow-hidden rounded-lg bg-gray-50 dark:bg-gray-900">
          <img
            src={imgSrc}
            alt={product.name}
            onError={() => setImgSrc('https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400')}
            className="w-full h-48 object-contain p-2 hover:scale-105 transition-transform duration-300"
          />
        </Link>
        {product.oldPrice && (
          <span className="absolute top-2 left-2 bg-sale text-white text-xs px-2 py-0.5 rounded font-bold shadow-sm">
            {product.discountPercentage ? `${product.discountPercentage}% OFF` : 'SALE'}
          </span>
        )}
        <button
          onClick={() => toggle(product)}
          aria-label="Wishlist"
          className="absolute top-2 right-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full p-1.5 shadow hover:scale-110 transition"
        >
          <Heart size={16} className={liked ? 'fill-red-500 text-red-500' : 'text-gray-400'} />
        </button>
      </div>
      <Link
        to={`/product/${product.id}`}
        className="mt-3 font-semibold text-brand dark:text-white hover:text-link transition line-clamp-1"
        title={product.name}
      >
        {product.name}
      </Link>
      <div className="flex items-center gap-1 text-sm text-muted mt-1">
        <span className="text-yellow-500">★</span>
        <span className="font-medium text-brand dark:text-gray-200">{product.rating}</span>
        <span className="text-muted">({product.reviews})</span>
      </div>
      <div className="mt-auto pt-3 flex items-center justify-between">
        <div>
          <span className="font-bold text-brand dark:text-white text-lg">${product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <span className="text-muted line-through text-xs ml-2">${product.oldPrice.toFixed(2)}</span>
          )}
        </div>
        <button
          onClick={() => add(product)}
          disabled={product.stock === 0}
          className="bg-flash hover:bg-flash-hover text-brand font-bold px-3.5 py-1.5 rounded-lg disabled:opacity-40 text-sm transition shadow-sm"
        >
          {product.stock === 0 ? 'Out' : 'Add'}
        </button>
      </div>
    </div>
  )
}
