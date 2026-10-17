import { Link } from 'react-router-dom'
export default function Register() {
  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-brand mb-6">Register</h1>
      <form className="bg-surface p-6 rounded-xl shadow space-y-4">
        <input placeholder="Name" className="w-full border rounded p-2"/>
        <input placeholder="Email" className="w-full border rounded p-2"/>
        <input type="password" placeholder="Password" className="w-full border rounded p-2"/>
        <button className="w-full bg-flash text-brand py-3 rounded-lg font-bold">Create Account</button>
        <p className="text-sm text-muted text-center">Have account? <Link to="/login" className="text-link">Login</Link></p>
      </form>
    </div>
  )
}
