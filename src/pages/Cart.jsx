import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

export default function Cart() {
  const { items, remove, setQty, total } = useCart()
  if (items.length===0) return <div className="p-10 text-center"><h2 className="text-2xl font-bold">Cart is empty</h2><Link to="/products" className="text-link">Shop now</Link></div>
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-brand mb-6">Shopping Cart</h1>
      {items.map(i=>(
        <div key={i.id} className="flex items-center gap-4 bg-surface p-4 rounded-xl shadow mb-3">
          <img src={i.img} alt={i.name} className="w-20 h-20 object-cover rounded"/>
          <div className="flex-1">
            <h3 className="font-semibold text-brand">{i.name}</h3>
            <p className="text-muted text-sm">${i.price.toFixed(2)}</p>
          </div>
          <input type="number" min="1" value={i.qty} onChange={e=>setQty(i.id,Number(e.target.value))} className="w-16 border rounded p-1"/>
          <span className="font-bold">${(i.price*i.qty).toFixed(2)}</span>
          <button onClick={()=>remove(i.id)} className="text-sale">✕</button>
        </div>
      ))}
      <div className="text-right mt-6">
        <p className="text-xl font-bold text-brand">Total: ${total.toFixed(2)}</p>
        <Link to="/checkout" className="bg-flash text-brand font-bold px-6 py-3 rounded-lg inline-block mt-3">Checkout</Link>
      </div>
    </div>
  )
}
