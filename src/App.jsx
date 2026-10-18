import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { ProductProvider } from './context/ProductContext'
import { CartProvider } from './context/CartContext'
import { WishlistProvider } from './context/WishlistContext'
import { RecentlyViewedProvider } from './context/RecentlyViewedContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Categories from './pages/Categories'
import Sale from './pages/Sale'
import Help from './pages/Help'
import Returns from './pages/Returns'
import Shipping from './pages/Shipping'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import About from './pages/About'
import Contact from './pages/Contact'
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
              <ScrollToTop/>
              <div className="min-h-screen bg-background dark:bg-gray-900 text-brand dark:text-white flex flex-col">
                <Navbar/>
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/product/:id" element={<ProductDetails/>}/>
                    <Route path="/categories" element={<Categories/>}/>
                    <Route path="/sale" element={<Sale/>}/>
                    <Route path="/help" element={<Help/>}/>
                    <Route path="/returns" element={<Returns/>}/>
                    <Route path="/shipping" element={<Shipping/>}/>
                    <Route path="/privacy" element={<Privacy/>}/>
                    <Route path="/terms" element={<Terms/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
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
