export default function Footer() {
  return (
    <footer className="bg-brand text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div><h4 className="text-flash font-bold mb-2">FLASHSTORE</h4><p className="text-sm">Your one-stop shop.</p></div>
        <div><h4 className="font-bold mb-2">Shop</h4><ul className="text-sm space-y-1"><li>Products</li><li>Categories</li><li>Sale</li></ul></div>
        <div><h4 className="font-bold mb-2">Support</h4><ul className="text-sm space-y-1"><li>Help</li><li>Returns</li><li>Shipping</li></ul></div>
        <div><h4 className="font-bold mb-2">Legal</h4><ul className="text-sm space-y-1"><li>Privacy</li><li>Terms</li></ul></div>
      </div>
      <div className="text-center text-xs py-4 border-t border-gray-700">© 2026 FlashStore</div>
    </footer>
  )
}
