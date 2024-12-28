import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { About, Contact, Gallery, Home, ProjectDetails, Projects, Services } from './pages/index.js'
import { Footer, Navbar, ScrollToTop } from './components'
import styles from './style'
import { useTranslation } from 'react-i18next';


const App = () => {

 
  const { i18n } = useTranslation(); 
  const currentLanguage = i18n.language;

  return (
   <div dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className={currentLanguage === "ar" ? "font-cairo" : "font-poppins"}>
   <Navbar />
   <ScrollToTop />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/services' element={<Services />} />
    <Route path="/projects/:id" element={<ProjectDetails />} />  {/* Route dynamique pour afficher le détail d'un projet */}
    <Route path='/contact' element={<Contact />} />
    <Route path='*' element={<Home />} />
   </Routes>
   <Footer />
   </div>
  )
}

export default App