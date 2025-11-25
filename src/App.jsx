import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import ClinicaGeral from './pages/ClinicaGeral'


export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      <Header />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/clinica-geral" element={<ClinicaGeral />} />
          <Route path="/exames" element={<Services />} />
          <Route path="/ginecologia" element={<Services />} />
        </Routes>
      </motion.main>

      <Footer />
    </div>
  )
}