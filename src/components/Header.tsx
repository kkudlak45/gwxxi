import * as React from 'react'
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
import { ArrowDropDown } from '@mui/icons-material'
import { useIsMobile } from '../hooks/useIsMobile'

export const pages = [
  {
    text: 'Home',
    href: `${import.meta.env.BASE_URL}`,
  },
  {
    text: 'Events & Activities',
    href: `${import.meta.env.BASE_URL}events`,
  },
  {
    text: 'Travel & Lodging',
    href: `${import.meta.env.BASE_URL}travel`,
  },
  {
    text: 'Morgantown',
    href: `${import.meta.env.BASE_URL}morgantown`,
  },
  {
    text: 'Shop',
    href: 'https://geowoodstock-xxi.square.site/s/shop',
  },
]

export const infoPages = [
  {
    text: 'Sponsors',
    href: `${import.meta.env.BASE_URL}sponsors`,
  },
  {
    text: 'FAQs',
    href: `${import.meta.env.BASE_URL}faqs`,
  },
]

function ResponsiveAppBar() {
  const isMobile = useIsMobile()
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElInfo, setAnchorElInfo] = React.useState<null | HTMLElement>(
    null,
  )

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

  return (
    <AppBar position="static" sx={{ width: '100vw' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ height: '84px', maxHeight: '84px' }}>
          <a
            href="/"
            style={{
              height: isMobile ? 'auto' : '70%',
              aspectRatio: 1000 / 345,
              marginTop: '-4px',
            }}
          >
            <img
              src={`${import.meta.env.BASE_URL}headericon.webp`}
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
              {[...pages, ...infoPages].map((page) => (
                <MenuItem
                  key={page.text}
                  href={page.href}
                  onClick={handleCloseNavMenu}
                >
                  <a
                    href={page.href}
                    target={page.text === 'Shop' ? '_blank' : undefined}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <Typography textAlign="center">{page.text}</Typography>
                  </a>
                </MenuItem>
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
                vertical: 'top',
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
                  <MenuItem key={page.href} onClick={handleInfoClose}>
                    <a
                      href={page.href}
                      target={page.text === 'Shop' ? '_blank' : undefined}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <Typography textAlign="center">{page.text}</Typography>
                    </a>
                  </MenuItem>
                )
              })}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'block' } }}>
            <Button
              variant="contained"
              color="warning"
              href="https://coord.info/gcanxx1"
              target="_blank"
              sx={{
                width: '200px',
                borderRadius: '64px',
                fontWeight: 'bold',
                lineHeight: '1rem',
                textAlign: 'center',
              }}
            >
              Log your will attend! GCANXX1
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
