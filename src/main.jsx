import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './providers/ThemeProvider.jsx'
import { BrowserRouter, Routes, Route } from 'react-router';
import ListA from './components/ListA.jsx';
import ListB from './components/ListB.jsx';
import SignUpForm from './components/SignUpForm.jsx'
import SignInForm from './components/SignInForm.jsx'
import ProtectedRoute from './routes/ProtectedRoute.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/" element={<ProtectedRoute />} />
          <Route index element={<App />} />
          <Route path="/list-a" element={<ListA />} />
          <Route path="/list-b" element={<ListB />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
