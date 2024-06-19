import { Button, Grid, Typography, useTheme } from '@mui/material'
import { Fragment } from 'react/jsx-runtime'
import PlaceIcon from '@mui/icons-material/Place'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { Section } from '../../components/Section'
import './Home.css'
import { BLUE } from '../../constants/theme'
import { useIsMobile } from '../../hooks/useIsMobile'

const InfoBlockStuff = [
  {
    title: 'Schedule',
    imgSrc: `${import.meta.env.BASE_URL}homeicons/events.webp`,
    href: `${import.meta.env.BASE_URL}events`,
    text: "With 8 events spanning from Thursday (5/22) to Sunday (5/25), there's never a dull moment when caching in West Virginia. Explore an 18th-century reconstructed fort, listen to some authentic mountain music, or enjoy a craft brew with your caching buddies - the possibilities are endless!",
  },
  {
    title: 'Travel',
    imgSrc: `${import.meta.env.BASE_URL}homeicons/hotels.webp`,
    href: `${import.meta.env.BASE_URL}travel`,
    text: 'Whether you’re coming from across the country, or just down the road, let us show you what Appalachian hospitality is all about. Check out a full list of our hotel partners as well as helpful travel information for you to plan your trip to West Virginia!',
  },
  {
    title: 'Morgantown',
    imgSrc: `${import.meta.env.BASE_URL}homeicons/morgantown.webp`,
    href: `${import.meta.env.BASE_URL}morgantown`,
    // italicize parentheses
    text: "Welcome to Morgantown, West Virginia, located in the heart of Appalachia. There are tons of great things to explore in the immediate Morgantown area, including Coopers Rock State Park and the state's land-grant institution, West Virginia University (Let's Go Mountaineers).",
  },
  {
    title: 'More Info',
    imgSrc: `${import.meta.env.BASE_URL}homeicons/info.webp`,
    href: `${import.meta.env.BASE_URL}faqs`,
    text: 'Can’t find what you’re looking for? More info will be updated regularly as the event approaches, so check back for sponsorship information, frequently asked questions, and more!',
  },
]

const shopInfoBlock = {
  title: 'Shop',
  imgSrc: `${import.meta.env.BASE_URL}homeicons/shop.webp`,
  href: 'https://geowoodstock-xxi.square.site/s/shop',
  text: 'Want to help support the event and showcase your love for GeoWoodstock? Our store currently has a pre-event fundraiser opportunity as well as the Friends of GeoWoodstock program. The full store to register and purchase SWAG will be available this fall.',
}

export function Home() {
  const isMobile = useIsMobile()
  const { palette } = useTheme()

  const infoBlocks = isMobile
    ? [...InfoBlockStuff, shopInfoBlock]
    : InfoBlockStuff

  return (
    <Fragment>
      <Section sx={{ flexDirection: 'column', alignItems: 'center' }}>
        <img
          src={`${import.meta.env.BASE_URL}gwxxi.jpg`}
          style={{
            maxWidth: '100%',
            maxHeight: '50vh',
            width: 'auto',
            height: 'auto',
            marginBottom: '24px',
          }}
        />
        <Typography
          variant="h3"
          marginBottom="24px"
          textAlign="center"
          fontSize={isMobile ? '2.4rem' : undefined}
        >
          {'JOIN US FOR THE MEGA IN THE MOUNTAINS!'}
        </Typography>
        <Typography
          textAlign="center"
          fontWeight="bold"
          fontSize={isMobile ? '1.4rem' : '2rem'}
          lineHeight="2.2rem"
          padding="0 8px"
        >
          {'GeoWoodstock XXI (GCANXX1)'}
        </Typography>
        <Typography
          textAlign="center"
          fontSize={isMobile ? '1.4rem' : '2.4rem'}
          lineHeight="2.2rem"
          display="flex"
          gap="4px"
          fontFamily="TTNorms-Light"
        >
          <PlaceIcon
            color="error"
            sx={{
              paddingTop: isMobile ? '0.2rem' : undefined,
              height: isMobile ? '1.6rem' : '2.4rem',
              width: isMobile ? '1.6rem' : '2.4rem',
            }}
          />
          {'Morgantown, WV'}
        </Typography>
        <Typography
          textAlign="center"
          fontSize={isMobile ? '1.6rem' : '2.4rem'}
          lineHeight="2.4rem"
          display="flex"
          gap="4px"
          fontFamily="TTNorms-Light"
        >
          <CalendarMonthIcon
            color="error"
            sx={{
              paddingTop: isMobile ? '0.2rem' : undefined,
              height: isMobile ? '1.8rem' : '2.4rem',
              width: isMobile ? '1.8rem' : '2.4rem',
            }}
          />
          {'May 22 - 25, 2025'}
        </Typography>
      </Section>

      <Section sx={{ backgroundColor: palette.grey[200] }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ width: '100%' }}
        >
          <Grid item xs={12} md={6} width="100%" textAlign="center">
            <video
              autoPlay
              muted
              controls
              style={{
                padding: isMobile ? '0px 8px' : '0px 8px 0px 16px',
                width: isMobile ? 'calc(100% - 32px)' : 'calc(100% - 24px)',
              }}
            >
              <source
                src={`${import.meta.env.BASE_URL}gwvideo.mp4`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="16px"
          >
            <Typography
              fontSize={isMobile ? undefined : '1.4rem'}
              padding="0px 16px 0px 8px"
              textAlign={isMobile ? 'center' : 'start'}
            >
              {
                'Nestled in the heart of Appalachia, West Virginia is any geocacher’s gateway to the great outdoors. There is a reason the Mountain State is known as Almost Heaven, and we can’t wait to showcase the world-class adventures, friendly culture, and unique experiences West Virginia has to offer. Join us for a weekend of Geocaching greatness, as we celebrate the 25th anniversary of the hobby with the world’s original Mega event: '
              }
              <em style={{ fontWeight: 'bold' }}>
                Wild and Wonderful GeoWoodstock XXI.
              </em>
            </Typography>
            <Button
              target="_blank"
              href="http://coord.info/gcanxx1"
              variant="contained"
              color="warning"
              sx={{
                borderRadius: '64px',
                fontWeight: 'bold',
                fontSize: '1.4rem',
              }}
            >
              Check out the event page
            </Button>
          </Grid>
        </Grid>
      </Section>

      <Section>
        <Grid container sx={{ width: '100%' }}>
          {infoBlocks.map((info) => {
            return (
              <Grid
                key={info.title}
                item
                xs={12}
                md={6}
                lg={3}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'flex-start',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <a
                    href={info.href}
                    style={{
                      maxWidth: '80%',
                      maxHeight: '100%',
                      width: 'auto',
                      height: 'auto',
                      aspectRatio: 1,
                      marginTop: '16px',
                    }}
                  >
                    <img
                      className="info-block-image"
                      src={info.imgSrc}
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '12px',
                      }}
                    />
                  </a>
                  <Typography
                    textAlign={isMobile ? 'center' : 'start'}
                    sx={{ padding: isMobile ? '16px' : '16px 16px 0px 16px' }}
                  >
                    {info.text}
                  </Typography>
                </div>
              </Grid>
            )
          })}
        </Grid>
      </Section>

      <Section
        sx={{
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: palette.grey[200],
          gap: '16px',
        }}
      >
        <Grid container alignItems="center" justifyContent="cemter">
          <Grid
            item
            xs={12}
            md={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img
              src={shopInfoBlock.imgSrc}
              style={{
                width: '80%',
                margin: '0rem 1rem',
                borderRadius: '16px',
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            display="flex"
            padding="0 4rem 0 2rem"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Typography textAlign="start" fontSize="1.4rem">
              {shopInfoBlock.text}
            </Typography>
            <Button
              target="_blank"
              href={shopInfoBlock.href}
              variant="contained"
              color="warning"
              sx={{
                borderRadius: '64px',
                fontWeight: 'bold',
                fontSize: '1.4rem',
                marginTop: '1rem',
              }}
            >
              Shop now
            </Button>
          </Grid>
        </Grid>
      </Section>

      <Section
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          backgroundColor: isMobile
            ? palette.grey[200]
            : palette.background.default,
        }}
      >
        <Typography variant="h2">PLATINUM SPONSORS</Typography>
        <div
          style={{
            justifyContent: 'flex-start',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography textAlign="center">
            {
              'Thank you to our incredible sponsors for helping make GeoWoodstock XXI a reality! Want to help support the largest gathering of geocachers in North America?'
            }
            <br />
            {'Check out our '}
            <a
              style={{ color: BLUE }}
              target="_blank"
              href={`${import.meta.env.BASE_URL}sponsors`}
            >
              {'More Info'}
            </a>
            {' page for sponsorship information.'}
          </Typography>
          <Grid container marginTop="16px" padding="0 16px">
            <Grid item xs={12} md={4}>
              <a
                href="https://www.geocaching.com"
                target="_blank"
                style={{ width: '100%' }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}geocachinglogo.png`}
                  style={{ width: '100%' }}
                />
              </a>
            </Grid>
          </Grid>
        </div>
      </Section>
    </Fragment>
  )
}
