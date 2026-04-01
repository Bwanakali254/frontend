import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppWidget from './components/WhatsAppWidget'
import CookieConsent from './components/CookieConsent'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import SolarSolution from './pages/Pricing'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'

function App() {
  return (
    <Router>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <ToastContainer position="top-right" autoClose={3000} />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/solar-solution" element={<SolarSolution />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
        </Routes>
        <Footer />
        <WhatsAppWidget />
        <CookieConsent />
      </div>
    </Router>
  )
}

export default App
