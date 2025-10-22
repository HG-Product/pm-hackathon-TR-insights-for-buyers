import React from 'react'
import ReactDOM from 'react-dom/client'
import PersonaReviewsPage from '../components/PersonaReviewsPage.jsx'
import '../index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersonaReviewsPage personaType="IT Directors" />
  </React.StrictMode>,
)

