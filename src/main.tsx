import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './Layout.tsx'
import HomePage from './pages/HomePage.tsx'
import StudentHomesPage from './pages/StudentHomesPage.tsx'
import CommunityPage from './pages/CommunityPage.tsx'
import ContactPage from './pages/ContactPage.tsx'
import OurWayOfLivingPage from './pages/OurWayOfLivingPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/student-homes" element={<StudentHomesPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/our-way-of-living" element={<OurWayOfLivingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
