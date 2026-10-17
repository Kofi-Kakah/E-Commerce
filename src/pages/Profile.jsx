import { useRecentlyViewed } from '../context/RecentlyViewedContext'
import ProductCard from '../components/ProductCard'
export default function Profile() {
  const { items } = useRecentlyViewed()
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-brand mb-6">Profile</h1>
      <div className="bg-surface p-6 rounded-xl shadow mb-6">
        <p className="font-semibold text-brand">John Doe</p>
        <p className="text-muted text-sm">john@example.com</p>
      </div>
      <h2 className="text-xl font-bold text-brand mb-4">Recently Viewed</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map(p=><ProductCard key={p.id} product={p}/>)}
      </div>
    </div>
  )
}
