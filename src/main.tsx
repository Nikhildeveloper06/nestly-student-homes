import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './Layout.tsx'
import HomePage from './pages/HomePage.tsx'
import StudentHomesPage from './pages/StudentHomesPage.tsx'
import CommunityPage from './pages/CommunityPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/student-homes" element={<StudentHomesPage />} />
          <Route path="/community" element={<CommunityPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
