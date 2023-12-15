import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { WorkoutContextProvider } from './context/WorkoutContext.jsx'
import './index.css'
import { AuthContextProvider } from './context/authContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
    <WorkoutContextProvider>
    <App />
    </WorkoutContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
