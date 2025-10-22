import React from 'react'
import ReactDOM from 'react-dom/client'
import QuestionDetailPage from '../components/QuestionDetailPage.jsx'
import '../index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuestionDetailPage questionId={1} />
  </React.StrictMode>,
)

