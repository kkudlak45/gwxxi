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
import { EVENT_GUIDE_PAGES } from './pages/Guide/pages'
import { GeoTour } from './pages/Guide/EventActivities/GeoTour'
import { Live } from './pages/Guide/Live'

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
            <Route path="geotour" element={<GeoTour />} />
            <Route path="live" element={<Live />} />
            <Route path="guide" element={<Guide />} />
            <Route path="guide/*">
              {EVENT_GUIDE_PAGES.filter((p) => !!p.component).map((p) => (
                // @ts-ignore
                <Route path={p.route} element={<p.component />} />
              ))}
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
