import { useSearchParams } from 'react-router-dom'
import { products, categories } from '../data/products'
import ProductCard from '../components/ProductCard'
import { useState, useMemo } from 'react'

export default function Products() {
  const [sp] = useSearchParams()
  const [cat, setCat] = useState(sp.get('category')||'All')
  const [sort, setSort] = useState('default')
  const [maxPrice, setMaxPrice] = useState(1000)
  const search = sp.get('search')||''
  const list = useMemo(() => {
    let l = products.filter(p => (cat==='All'||p.category===cat) && p.price<=maxPrice && p.name.toLowerCase().includes(search.toLowerCase()))
    if (sort==='price-asc') l=[...l].sort((a,b)=>a.price-b.price)
    if (sort==='price-desc') l=[...l].sort((a,b)=>b.price-a.price)
    if (sort==='rating') l=[...l].sort((a,b)=>b.rating-a.rating)
    return l
  }, [cat,sort,maxPrice,search])
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex gap-6">
      <aside className="w-64 hidden md:block">
        <h3 className="font-bold mb-2">Categories</h3>
        {categories.map(c=><button key={c} onClick={()=>setCat(c)} className={`block w-full text-left px-3 py-2 rounded ${cat===c?'bg-green-soft text-brand font-bold':'text-muted'}`}>{c}</button>)}
        <h3 className="font-bold mt-6 mb-2">Max Price ${maxPrice}</h3>
        <input type="range" min="0" max="1000" value={maxPrice} onChange={e=>setMaxPrice(Number(e.target.value))} className="w-full"/>
        <h3 className="font-bold mt-6 mb-2">Sort</h3>
        <select value={sort} onChange={e=>setSort(e.target.value)} className="w-full border rounded p-2">
          <option value="default">Default</option>
          <option value="price-asc">Price Low-High</option>
          <option value="price-desc">Price High-Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </aside>
      <div className="flex-1">
        <p className="text-muted mb-4">{list.length} products</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {list.map(p=><ProductCard key={p.id} product={p}/>)}
        </div>
      </div>
    </div>
  )
}
