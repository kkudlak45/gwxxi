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
import { Register } from './pages/Register'
import 'react-multi-carousel/lib/styles.css'
import { Guide } from './pages/Guide/Guide'
import { MorgantownLive } from './pages/Guide/Tabs/MorgantownLive'
import { Experiences } from './pages/Guide/Tabs/Experiences'
import { EventActivities } from './pages/Guide/Tabs/EventActivities'
import { EventInformation } from './pages/Guide/Tabs/EventInformation'

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
            <Route path="register" element={<Register />} />
            <Route path="guide" element={<Guide />} />
            <Route path="guide/*">
              <Route path="morgantown" element={<MorgantownLive />} />
              <Route path="experiences" element={<Experiences />} />
              <Route path="activities" element={<EventActivities />} />
              <Route path="info" element={<EventInformation />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
