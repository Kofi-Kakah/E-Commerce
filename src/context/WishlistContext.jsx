import { createContext, useContext, useState } from 'react'
const Ctx = createContext()
export function WishlistProvider({children}) {
  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem('wishlist')||'[]'))
  const persist = (v) => { setItems(v); localStorage.setItem('wishlist', JSON.stringify(v)) }
  const toggle = (p) => persist(items.some(i=>i.id===p.id)?items.filter(i=>i.id!==p.id):[...items,p])
  const has = (id) => items.some(i=>i.id===id)
  return <Ctx.Provider value={{items,toggle,has}}>{children}</Ctx.Provider>
}
export const useWishlist = () => useContext(Ctx)
