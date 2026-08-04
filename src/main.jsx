import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import App from './App.jsx'
import Alldesign from './Alldesign.jsx'
import Herosection from './Herosection.jsx'
import Herosection1 from './Herosection1.jsx'
import Signin from './Signin.jsx'
import Signin1 from './Signin1.jsx'
import Bentogrid from './Bentogrid.jsx'
import Bentogrid1 from './Bentogrid1.jsx'
import Cta from './Cta.jsx'
import Cta1 from './Cta1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Alldesign" element={<Alldesign />} />
        <Route path="/herosection" element={<Herosection />} />
        <Route path="/herosection1" element={<Herosection1 />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signin1" element={<Signin1 />} />
        <Route path="/bentogrid" element={<Bentogrid />} />
        <Route path="/bentogrid1" element={<Bentogrid1 />} />
        <Route path="/cta" element={<Cta />} />
        <Route path="/cta1" element={<Cta1 />} />
      </Routes>
    </Router>
  </StrictMode>
)