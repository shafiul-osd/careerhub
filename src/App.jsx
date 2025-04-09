
import { Link, Outlet } from 'react-router'
import './App.css'
import Footer from './Component/Footer/Footer'

function App() {
  

  return (
    <>
    <div className='flex justify-between px-10 mt-4 items-center'>
      <div>
        <h2 className='font-bold text-4xl'>CareerHub</h2>
        </div>
      <div className='flex gap-10'>
        <Link to="/">Statistics</Link>
        <Link to="/appliedjob">AppliedJob</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <div>
        <button className='bg-indigo-400 p-2 rounded-lg text-white'>Star Appling</button>
      </div>
      
    </div>
    <Outlet></Outlet>
    
      <div className>
      <Footer></Footer>
      </div>
    
    </>
  )
}

export default App
