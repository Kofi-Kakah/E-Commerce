import { useParams, Link } from 'react-router-dom'
import { getProduct, related, products } from '../data/products'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import { useRecentlyViewed } from '../context/RecentlyViewedContext'
import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

export default function ProductDetails() {
  const { id } = useParams()
  const product = getProduct(id)
  const { add } = useCart()
  const { toggle, has } = useWishlist()
  const { add: rvAdd } = useRecentlyViewed()
  const [qty, setQty] = useState(1)
  useEffect(() => { if (product) rvAdd(product) }, [product])
  if (!product) return <div className="p-10">Not found</div>
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <img src={product.img} alt={product.name} className="w-full rounded-xl shadow"/>
        <div>
          <h1 className="text-3xl font-bold text-brand">{product.name}</h1>
          <div className="text-yellow-500 mt-2">{'★'.repeat(Math.round(product.rating))} <span className="text-muted text-sm">{product.rating} ({product.reviews} reviews)</span></div>
          <div className="mt-4">
            <span className="text-3xl font-bold text-brand">${product.price.toFixed(2)}</span>
            {product.oldPrice && <span className="text-sale line-through ml-3">${product.oldPrice.toFixed(2)}</span>}
          </div>
          <p className="text-muted mt-4">{product.desc}</p>
          <p className={`mt-4 font-semibold ${product.stock>0?'text-success':'text-sale'}`}>{product.stock>0?`In stock (${product.stock})`:'Out of stock'}</p>
          <div className="flex items-center gap-3 mt-6">
            <input type="number" min="1" max={product.stock} value={qty} onChange={e=>setQty(Number(e.target.value))} className="w-20 border rounded p-2"/>
            <button onClick={()=>add(product,qty)} disabled={product.stock===0} className="bg-flash text-brand font-bold px-6 py-3 rounded-lg disabled:opacity-40">Add to Cart</button>
            <button onClick={()=>toggle(product)} className="border rounded p-3">{has(product.id)?'♥':'♡'}</button>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-brand mt-12 mb-6">Related Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {related(product.id).map(p=><ProductCard key={p.id} product={p}/>)}
      </div>
    </div>
  )
}
