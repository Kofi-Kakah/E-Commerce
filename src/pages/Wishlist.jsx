import { useWishlist } from '../context/WishlistContext'
import ProductCard from '../components/ProductCard'
export default function Wishlist() {
  const { items } = useWishlist()
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-brand mb-6">Wishlist</h1>
      {items.length===0 ? <p className="text-muted">Empty.</p> : <div className="grid grid-cols-2 md:grid-cols-4 gap-6">{items.map(p=><ProductCard key={p.id} product={p}/>)}</div>}
    </div>
  )
}
