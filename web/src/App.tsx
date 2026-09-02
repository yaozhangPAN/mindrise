import { Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PilotPage from './pages/PilotPage'
import ProductsPage from './pages/ProductsPage'
import ProofPage from './pages/ProofPage'
import TeamPage from './pages/TeamPage'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<AboutPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="proof" element={<ProofPage />} />
        <Route path="pilot" element={<PilotPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
    </Routes>
  )
}
