import { useCart } from '../context/CartContext'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Checkout() {
  const { items, total, clear } = useCart()
  const [done, setDone] = useState(false)
  const [code, setCode] = useState('')
  const discount = code==='FLASH10' ? 0.1 : 0
  const final = total*(1-discount)
  if (done) return <div className="p-10 text-center"><h2 className="text-2xl font-bold text-success">Order placed!</h2><Link to="/orders" className="text-link">View orders</Link></div>
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-brand mb-6">Checkout</h1>
      <div className="bg-surface p-6 rounded-xl shadow space-y-4">
        <input placeholder="Full name" className="w-full border rounded p-2"/>
        <input placeholder="Address" className="w-full border rounded p-2"/>
        <input placeholder="Card number" className="w-full border rounded p-2"/>
        <div className="flex gap-2"><input value={code} onChange={e=>setCode(e.target.value)} placeholder="Discount code" className="flex-1 border rounded p-2"/><span className="text-success text-sm self-center">{code==='FLASH10'?'10% off applied':''}</span></div>
        <div className="border-t pt-4 flex justify-between font-bold"><span>Total</span><span>${final.toFixed(2)}</span></div>
        <button onClick={()=>{clear();setDone(true)}} className="w-full bg-flash text-brand font-bold py-3 rounded-lg">Place Order</button>
      </div>
    </div>
  )
}
