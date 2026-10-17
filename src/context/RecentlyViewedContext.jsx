import { createContext, useContext, useState } from 'react'
const Ctx = createContext()
export function RecentlyViewedProvider({children}) {
  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem('rv')||'[]'))
  const add = (p) => {
    const filtered = items.filter(i=>i.id!==p.id)
    const next = [p,...filtered].slice(0,8)
    setItems(next); localStorage.setItem('rv', JSON.stringify(next))
  }
  return <Ctx.Provider value={{items,add}}>{children}</Ctx.Provider>
}
export const useRecentlyViewed = () => useContext(Ctx)
