import Header from './components/Header'
import { Container } from '@mui/material'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Events from './pages/Events'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Container maxWidth="xl">
          <Routes>
            <Route index element={<Home />} />
            <Route path="events" element={<Events />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
