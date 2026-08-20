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
import Pricing from './Pricing.jsx'
import Pricing1 from './Pricing1.jsx'
import Newslettersections from './Newslettersections.jsx'
import Newslettersections1 from './Newslettersections1.jsx'
import Statssection from './Statssection.jsx'
import Statssection1 from './Statssection1.jsx'
import Project from './Project.jsx'
import Testimonials from './Testimonials.jsx'
import Testimonials1 from './Testimonials1.jsx'
import Contact from './Contact.jsx'
import Contact1 from './Contact1.jsx'

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
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Pricing1" element={<Pricing1 />} />
        <Route path="/Newslettersections" element={<Newslettersections />} />
        <Route path="/Newslettersections1" element={<Newslettersections1 />} />
        <Route path="/Statssection" element={<Statssection />} />
        <Route path="/Statssection1" element={<Statssection1 />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/Testimonials1" element={<Testimonials1 />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Contact1" element={<Contact1 />} />
      </Routes>
    </Router>
  </StrictMode>
)