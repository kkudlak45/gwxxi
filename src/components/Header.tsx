import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { useIsMobile } from '../hooks/useIsMobile'
import { ArrowDropDown } from '@mui/icons-material'

export const pages = [
  {
    text: 'Home',
    href: `${import.meta.env.BASE_URL}events/2026`,
  },
  {
    text: 'Schedule',
    href: `${import.meta.env.BASE_URL}events/2026/schedule`,
  },
  // {
  //   text: 'Info',
  //   href: `${import.meta.env.BASE_URL}events/2026/information`,
  // },
  // {
  //   text: 'Activities',
  //   href: `${import.meta.env.BASE_URL}events/2026/activities`,
  // },
  {
    text: 'Register',
    href: 'https://cachemore.store/collections/cachemore-2026',
  },
  // {
  //   text: 'Shop',
  //   href: 'https://geowoodstockxxi.myshopify.com/collections/all',
  // },
]

export const infoPages = [
  {
    text: 'Registration',
    href: `${import.meta.env.BASE_URL}events/2026/register`,
  },
  {
    text: 'Travel & Lodging',
    href: `${import.meta.env.BASE_URL}events/2026/travel`,
  },
  {
    text: 'What to Expect',
    href: `${import.meta.env.BASE_URL}events/2026/about`,
  },
  {
    text: 'FAQs',
    href: `${import.meta.env.BASE_URL}events/2026/faqs`,
  },
  {
    text: 'Sponsors',
    href: `${import.meta.env.BASE_URL}events/2026/sponsors`,
  },
]

export const activityPages = [
  {
    text: 'Pre-Event Puzzles',
    href: `${import.meta.env.BASE_URL}events/2026/puzzles`,
  },
  {
    text: 'Tech Team Challenge',
    href: `${import.meta.env.BASE_URL}events/2026/teams`,
  },
  {
    text: 'Trading Card Challenge',
    href: `${import.meta.env.BASE_URL}events/2026/trading-cards`,
  },
  {
    text: 'Visit Mountaineer Country GeoTour',
    href: `${import.meta.env.BASE_URL}projects/vmc-gt`,
  },
]

function ResponsiveAppBar() {
  const isMobile = useIsMobile()
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElInfo, setAnchorElInfo] = React.useState<null | HTMLElement>(
    null,
  )
  const [anchorElActivities, setAnchorElActivities] =
    React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleInfo = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElInfo(event.currentTarget)
  }

  const handleInfoClose = () => {
    setAnchorElInfo(null)
  }

  const handleActivities = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElActivities(event.currentTarget)
  }

  const handleActivitiesClose = () => {
    setAnchorElActivities(null)
  }

  return (
    <AppBar position="static" sx={{ width: '100%' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ height: '84px', maxHeight: '84px' }}>
          <a
            href="/events/2026"
            style={{
              height: isMobile ? 'auto' : '70%',
              maxHeight: '70%',
              aspectRatio: 1000 / 345,
              marginTop: '-4px',
            }}
          >
            <img
              alt="geowoodstock XXI brand logo linking to the home page"
              src={`${import.meta.env.BASE_URL}cachemore/branding/logosimple.png`}
              style={{ height: '100%', width: '100%' }}
            />
          </a>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'flex-end',
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {[...pages, ...infoPages, ...activityPages].map((page) => (
                <a
                  href={page.href}
                  target={page.text === 'Shop' ? '_blank' : undefined}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <MenuItem
                    key={page.text}
                    href={page.href}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">{page.text}</Typography>
                  </MenuItem>
                </a>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.text}
                target={page.text === 'Shop' ? '_blank' : undefined}
                href={page.href}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  fontSize: '1.1rem',
                  color: 'white',
                  display: 'block',
                  textAlign: 'center',
                  borderRight: '2px solid white',
                  borderRadius: '0px',
                  paddingLeft: '1.2rem',
                  paddingRight: '1.2rem',
                }}
              >
                {page.text}
              </Button>
            ))}

            <Button
              key="info"
              style={{ fontSize: '1.1rem !important' }}
              onClick={handleActivities}
              sx={{
                my: 2,
                color: 'white',
                display: 'flex',
                paddingLeft: '1rem',
                textAlign: 'center',
                borderRight: '2px solid white',
              }}
              endIcon={
                <ArrowDropDown
                  sx={{
                    marginLeft: '-0.5rem',
                    marginTop: '-0.2rem',
                    height: '1.4rem',
                    width: '1.4rem',
                  }}
                />
              }
            >
              <Typography color="white" fontSize="1.1rem">
                Activities
              </Typography>
            </Button>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElActivities}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElActivities)}
              onClose={handleActivitiesClose}
            >
              {activityPages.map((page) => {
                return (
                  <a
                    href={page.href}
                    target={page.text === 'Shop' ? '_blank' : undefined}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <MenuItem key={page.href} onClick={handleActivitiesClose}>
                      <Typography textAlign="center">{page.text}</Typography>
                    </MenuItem>
                  </a>
                )
              })}
            </Menu>

            <Button
              key="info"
              style={{ fontSize: '1.1rem !important' }}
              onClick={handleInfo}
              sx={{
                my: 2,
                color: 'white',
                display: 'flex',
                paddingLeft: '1rem',
                textAlign: 'center',
              }}
              endIcon={
                <ArrowDropDown
                  sx={{
                    marginLeft: '-0.5rem',
                    marginTop: '-0.2rem',
                    height: '1.4rem',
                    width: '1.4rem',
                  }}
                />
              }
            >
              <Typography color="white" fontSize="1.1rem">
                Info
              </Typography>
            </Button>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElInfo}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElInfo)}
              onClose={handleInfoClose}
            >
              {infoPages.map((page) => {
                return (
                  <a
                    href={page.href}
                    target={page.text === 'Shop' ? '_blank' : undefined}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <MenuItem key={page.href} onClick={handleInfoClose}>
                      <Typography textAlign="center">{page.text}</Typography>
                    </MenuItem>
                  </a>
                )
              })}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'block' } }}>
            <Button
              variant="contained"
              color="warning"
              href="https://coord.info/GCBEBMA"
              target="_blank"
              sx={{
                width: '200px',
                borderRadius: '64px',
                fontWeight: 'bold',
                lineHeight: '1rem',
                textAlign: 'center',
              }}
            >
              Log your will attend! GCBEBMA
            </Button>
          </Box>
        </Toolbar>
      </Container>

      {/* <Alert variant="filled" severity="warning">
        Your last chance to buy individual SWAG items such as Geocoins, shirts,
        Pathtags, meal tickets, and more is <BoldKol>April 25</BoldKol>. Some
        items may not be available for purchase at the event.{' '}
        <a
          href={`${import.meta.env.BASE_URL}register`}
          style={{ color: 'lightblue' }}
        >
          Click here to shop.
        </a>
      </Alert> */}
    </AppBar>
  )
}
export default ResponsiveAppBar
