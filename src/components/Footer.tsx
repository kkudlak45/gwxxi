import { Container, Grid, IconButton, Typography, styled } from '@mui/material'
import { BLUE } from '../constants/theme'
import { infoPages, pages } from './Header'
import { Event, Facebook, Mail, People } from '@mui/icons-material'
import { useIsMobile } from '../hooks/useIsMobile'

const socials = [
  {
    alt: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61558526174705',
    component: <Facebook />,
  },
  {
    alt: 'Mailing List',
    href: 'https://geowoodstockxxi.us17.list-manage.com/subscribe?u=8fcc636b5362e252a516c4a10&id=68d2e501c0',
    component: <Mail />,
  },
  {
    alt: 'Community Group',
    href: 'https://www.facebook.com/groups/2150783441954120',
    component: <People />,
  },
  {
    alt: 'Event Page',
    href: 'https://coord.info/gcanxx1',
    component: <Event />,
  },
]

const FooterDiv = styled('div')(({ theme }) => {
  return {
    backgroundColor: BLUE,
    color: 'white',
    width: '100%',
    padding: '16px 0px',
    borderTop: `1px solid ${theme.palette.primary.main}`,
  }
})

export default function Footer() {
  const isMobile = useIsMobile()

  return (
    <FooterDiv>
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              gap: '12px',
              flexDirection: isMobile ? 'column' : undefined,
              alignItems: isMobile ? 'center' : undefined,
            }}
          >
            <img
              src={`${import.meta.env.BASE_URL}footericon.webp`}
              style={{
                borderRadius: '12px',
                maxWidth: isMobile ? '80%' : '240px',
                maxHeight: isMobile ? '80%' : '240px',
                width: 'auto',
                height: 'auto',
              }}
            />

            <div
              style={{
                display: 'flex',
                alignItems: isMobile ? 'center' : 'flex-start',
                flexDirection: 'column',
                padding: '6px 0',
                gap: isMobile ? '0.4rem' : '1.4rem',
              }}
            >
              <Typography
                variant="h4"
                style={{ color: 'white', fontFamily: 'San Andreas' }}
                fontSize="1.8rem"
                textAlign="start"
              >
                GEOWOODSTOCK XXI
              </Typography>
              <div style={isMobile ? { textAlign: 'center' } : {}}>
                <Typography style={{ color: 'white' }}>
                  Geocaching Mega-Event
                </Typography>
                <Typography style={{ color: 'white' }}>
                  Morgantown, West Virginia
                </Typography>
                <Typography style={{ color: 'white' }}>
                  May 22 - 25, 2025
                </Typography>
              </div>
              <div style={{ display: 'flex', gap: '4px', marginLeft: '-8px' }}>
                {socials.map((social) => {
                  return (
                    <IconButton
                      key={social.alt}
                      href={social.href}
                      target="_blank"
                      style={{ color: 'white' }}
                    >
                      {social.component}
                    </IconButton>
                  )
                })}
              </div>
            </div>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              gap: '12px',
              flexDirection: isMobile ? 'column' : undefined,
              alignItems: isMobile ? 'center' : undefined,
              justifyContent: isMobile ? undefined : 'flex-end',
              marginTop: isMobile ? '1rem' : undefined,
            }}
          >
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Mylan+Park/@39.6364966,-80.0339881,17z/data=!3m1!4b1!4m6!3m5!1s0x883579357e350f2f:0xad6f29585796b9fe!8m2!3d39.6364925!4d-80.0314132!16s%2Fg%2F1tl1jk4c?entry=ttu"
              style={{
                display: isMobile ? undefined : 'none',
                maxWidth: isMobile ? '80%' : '240px',
                maxHeight: isMobile ? '80%' : '240px',
                width: 'auto',
                height: 'auto',
                aspectRatio: 1,
              }}
            >
              <img
                src={`${import.meta.env.BASE_URL}mylan.png`}
                style={{ width: '100%', height: '100%', borderRadius: '12px' }}
              />
            </a>

            <div
              style={{
                display: 'flex',
                alignItems: isMobile ? 'center' : 'flex-end',
                justifyContent: 'space-between',
                flexDirection: 'column',
              }}
            >
              <Typography
                variant="h4"
                style={{ color: 'white', fontFamily: 'San Andreas' }}
                fontSize="1.8em"
                textAlign="end"
              >
                QUICK LINKS
              </Typography>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: isMobile ? 'center' : 'flex-end',
                }}
              >
                {[...pages, ...infoPages].map((page) => {
                  return (
                    <a
                      key={page.text}
                      href={page.href}
                      target={page.text === 'Shop' ? '_blank' : undefined}
                      style={{ textDecoration: 'none' }}
                    >
                      <Typography style={{ color: 'white' }}>
                        {page.text}
                      </Typography>
                    </a>
                  )
                })}
              </div>
            </div>

            <a
              target="_blank"
              href="https://www.google.com/maps/place/Mylan+Park/@39.6364966,-80.0339881,17z/data=!3m1!4b1!4m6!3m5!1s0x883579357e350f2f:0xad6f29585796b9fe!8m2!3d39.6364925!4d-80.0314132!16s%2Fg%2F1tl1jk4c?entry=ttu"
              style={{
                display: isMobile ? 'none' : undefined,
                maxWidth: isMobile ? '80%' : '240px',
                maxHeight: isMobile ? '80%' : '240px',
                width: 'auto',
                height: 'auto',
                aspectRatio: 1,
              }}
            >
              <img
                src={`${import.meta.env.BASE_URL}mylan.png`}
                style={{ width: '100%', height: '100%', borderRadius: '12px' }}
              />
            </a>
          </Grid>
        </Grid>
      </Container>
    </FooterDiv>
  )
}
