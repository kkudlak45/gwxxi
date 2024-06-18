import Header from './components/Header'
import { Container } from '@mui/material'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import Events from './pages/Events'
import { ThemeProvider } from '@emotion/react'
import { theme } from './constants/theme'
import { Travel } from './pages/Travel'

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
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
