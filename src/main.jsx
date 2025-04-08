import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Statistics from './Component/Statistics.jsx'
import Appliedjob from './Component/Appliedjob/Appliedjob.jsx'
import Blog from './Component/Blog/Blog.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<App></App>}>
      
      <Route index element={<Statistics></Statistics>}></Route>
      <Route path="/appliedjob" element={<Appliedjob></Appliedjob>}></Route>
      <Route path="/blog" element={<Blog></Blog>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
