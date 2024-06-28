import Header from './components/Header'
import { Container } from '@mui/material'
import Footer from './components/Footer'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Events } from './pages/Events'
import { ThemeProvider } from '@emotion/react'
import { theme } from './constants/theme'
import { Travel } from './pages/Travel'
import { Faqs } from './pages/Faqs'
import { Sponsors } from './pages/Sponsors'
import { Morgantown } from './pages/Morgantown'
import 'react-multi-carousel/lib/styles.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Container maxWidth="xl" sx={{ padding: '8px 0px' }}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="events" element={<Events />} />
            <Route path="travel" element={<Travel />} />
            <Route path="faqs" element={<Faqs />} />
            <Route path="sponsors" element={<Sponsors />} />
            <Route path="morgantown" element={<Morgantown />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
