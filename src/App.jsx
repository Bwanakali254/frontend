import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import GetQuoteWidget from './components/GetQuoteWidget'
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
        <GetQuoteWidget />
        <WhatsAppWidget />
        <CookieConsent />
      </div>
    </Router>
  )
}

export default App
