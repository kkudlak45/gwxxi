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
import { Register } from './pages/Register'
import 'react-multi-carousel/lib/styles.css'
import { Expect } from './pages/expect/Expect'
import { Team } from './pages/Team/Team'
import { Puzzles } from './pages/Puzzles/Puzzles'
import { Trading } from './pages/Trading/Trading'
import { Activate } from './pages/Activate/Activate'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Container maxWidth="xl" sx={{ padding: '8px 0px' }}>
          <Routes>
            <Route path="projects">
              <Route
                index
                element={
                  <div style={{ width: '100%', height: '90vh' }}>
                    coming soon...
                  </div>
                }
              />
              <Route path="*" element={<Navigate to="/projects" />} />
            </Route>
            <Route path="activate" element={<Activate />} />
            <Route path="events">
              <Route path="2026">
                <Route index element={<Home />} />
                <Route path="schedule" element={<Events />} />
                <Route path="travel" element={<Travel />} />
                <Route path="faqs" element={<Faqs />} />
                <Route path="sponsors" element={<Sponsors />} />
                <Route path="about" element={<Expect />} />
                {/* <Route path="morgantown" element={<Morgantown />} /> */}
                <Route path="register" element={<Register />} />
                <Route path="puzzles" element={<Puzzles />} />
                <Route path="teams" element={<Team />} />
                <Route path="trading-cards" element={<Trading />} />
                {/* <Route path="geotour" element={<GeoTour />} /> */}
                {/* <Route path="live" element={<Live />} /> */}
                {/* <Route path="guide" element={<Guide />} /> */}
                {/* <Route path="guide/*">
                  {EVENT_GUIDE_PAGES.filter((p) => !!p.component).map((p) => (
                    // @ts-ignore
                    <Route path={p.route} element={<p.component />} />
                  ))}
                  <Route path="*" element={<Navigate to="/" />} />
                </Route> */}
                <Route path="*" element={<Navigate to="/events/2026" />} />
              </Route>
            </Route>

            <Route path="*" element={<Navigate to="/events/2026" />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
