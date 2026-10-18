import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { ProductProvider } from './context/ProductContext'
import { CartProvider } from './context/CartContext'
import { WishlistProvider } from './context/WishlistContext'
import { RecentlyViewedProvider } from './context/RecentlyViewedContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Orders from './pages/Orders'
import Wishlist from './pages/Wishlist'

export default function App() {
  return (
    <ThemeProvider>
      <ProductProvider>
        <CartProvider>
          <WishlistProvider>
            <RecentlyViewedProvider>
              <BrowserRouter>
              <div className="min-h-screen bg-background dark:bg-gray-900 text-brand dark:text-white flex flex-col">
                <Navbar/>
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/product/:id" element={<ProductDetails/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/checkout" element={<Checkout/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/orders" element={<Orders/>}/>
                    <Route path="/wishlist" element={<Wishlist/>}/>
                  </Routes>
                </main>
                <Footer/>
              </div>
            </BrowserRouter>
          </RecentlyViewedProvider>
        </WishlistProvider>
      </CartProvider>
    </ProductProvider>
  </ThemeProvider>
  )
}
