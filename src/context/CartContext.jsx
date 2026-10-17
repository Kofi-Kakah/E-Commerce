import { createContext, useContext, useState } from 'react'
const Ctx = createContext()
export function CartProvider({children}) {
  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem('cart')||'[]'))
  const persist = (v) => { setItems(v); localStorage.setItem('cart', JSON.stringify(v)) }
  const add = (p, qty=1) => {
    const ex = items.find(i=>i.id===p.id)
    if (ex) persist(items.map(i=>i.id===p.id?{...i,qty:i.qty+qty}:i))
    else persist([...items,{...p,qty}])
  }
  const remove = (id) => persist(items.filter(i=>i.id!==id))
  const setQty = (id,qty) => persist(items.map(i=>i.id===id?{...i,qty:Math.max(1,qty)}:i))
  const clear = () => persist([])
  const total = items.reduce((s,i)=>s+i.price*i.qty,0)
  const count = items.reduce((s,i)=>s+i.qty,0)
  return <Ctx.Provider value={{items,add,remove,setQty,clear,total,count}}>{children}</Ctx.Provider>
}
export const useCart = () => useContext(Ctx)
