import { Container, Grid, IconButton, Typography, styled } from '@mui/material'
import { BLUE } from '../constants/theme'
import { infoPages, pages } from './Header'
import { Event, Facebook, Mail, People } from '@mui/icons-material'
import { useIsMobile } from '../hooks/useIsMobile'

const socials = [
  {
    alt: 'Event Page',
    href: 'https://coord.info/gcanxx1',
    component: <Event />,
  },
  {
    alt: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61558526174705',
    component: <Facebook />,
  },
  {
    alt: 'Community Group',
    href: 'https://www.facebook.com/groups/2150783441954120',
    component: <People />,
  },
  {
    alt: 'Mailing List',
    href: 'https://geowoodstockxxi.us17.list-manage.com/subscribe?u=8fcc636b5362e252a516c4a10&id=68d2e501c0',
    component: <Mail />,
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
              alt="the GeoWoodstock XXI footer brand icon"
              src={`${import.meta.env.BASE_URL}footericonnobg.webp`}
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
                  Geocaching GIGA-Event
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9400.605678906746!2d-80.03521567883406!3d39.63810638345896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883579357e350f2f%3A0xad6f29585796b9fe!2sMylan%20Park!5e0!3m2!1sen!2sus!4v1739558531179!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{
                display: isMobile ? undefined : 'none',
                maxWidth: '80%',
                maxHeight: '80%',
                width: 'auto',
                height: 'auto',
                aspectRatio: '1',
              }}
              loading="lazy"
            ></iframe>
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

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9400.605678906746!2d-80.03521567883406!3d39.63810638345896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883579357e350f2f%3A0xad6f29585796b9fe!2sMylan%20Park!5e0!3m2!1sen!2sus!4v1739558531179!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{
                display: isMobile ? 'none' : undefined,
                maxWidth: isMobile ? '80%' : '240px',
                maxHeight: isMobile ? '80%' : '240px',
                width: 'auto',
                height: 'auto',
                aspectRatio: 1,
              }}
              loading="lazy"
            ></iframe>
          </Grid>
        </Grid>
      </Container>
    </FooterDiv>
  )
}
