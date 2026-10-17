import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-brand mb-6">Login</h1>
      <form className="bg-surface p-6 rounded-xl shadow space-y-4">
        <input placeholder="Email" className="w-full border rounded p-2"/>
        <input type="password" placeholder="Password" className="w-full border rounded p-2"/>
        <button className="w-full bg-brand text-white py-3 rounded-lg font-bold">Sign In</button>
        <p className="text-sm text-muted text-center">No account? <Link to="/register" className="text-link">Register</Link></p>
      </form>
    </div>
  )
}
