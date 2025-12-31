import { Button, Grid, Typography, useTheme } from '@mui/material'
import { Fragment } from 'react/jsx-runtime'
import PlaceIcon from '@mui/icons-material/Place'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { Helmet } from 'react-helmet'
import { Section } from '../../components/Section'
import { BLUE, CHARCOAL } from '../../constants/theme'
import { useIsMobile } from '../../hooks/useIsMobile'
import { goldSponsors } from '../Sponsors/sponsorsConstants'
import { CorporateSponsorBlock } from '../Sponsors/Sponsors'
import './Home.css'
import { BigOrangeButton } from '../Guide/BigOrangeButton'

const BANNER_CODE = `<p style="text-align:center"><a target="_blank" href="https://coord.info/GCBEBMA"><img src="https://s3.amazonaws.com/gs-geo-images/00d954dd-8dbe-44a8-bc60-fb34fb78e9b6.png" style="height:135px;width:600px;max-width:670px;"/></a></p>`

const InfoBlockStuff = [
  {
    title: 'Pre-Event Puzzles',
    imgSrc: `${import.meta.env.BASE_URL}home/Home1.png`,
    href: '/events/2026/puzzles',
    text: 'Warm up before the main event with a series of puzzles released in the weeks leading up to CacheMore. Solve them solo or with your team to earn bragging rights, unlock bonus clues, and gain a strategic edge before the weekend begins.',
  },
  {
    title: 'Tech Team Challenge',
    imgSrc: `${import.meta.env.BASE_URL}home/Home2.png`,
    href: '/events/2026/teams',
    text: 'Attendees can join a team for a city-wide escape-room adventure testing Cache AI. Teams will explore Mountaineer Country, find Adventure Labs, solve puzzles, and decode transmissions as the story unfolds. Can you complete the circuit?',
  },
  {
    title: 'CacheMore Trading Card Challenge',
    imgSrc: `${import.meta.env.BASE_URL}home/home3.png`,
    href: '/events/2026/trading-cards',
    // italicize parentheses
    text: 'Create your own trackable trading card to swap with others and drop in caches. But these cards are more than collectibles; hidden within the full event set is a mystery. Be the first to solve it and find the bonus cache to win a special FTF prize!',
  },
  {
    title: 'Mountaineer Country GeoTour',
    imgSrc: `${import.meta.env.BASE_URL}home/Home4.png`,
    href: '/projects/vmc-gt',
    text: "Explore Mountaineer Country like you're a local with this new official GeoTour. Expanding on the Country Roads Challenge, this 20-stop GeoTour will feature 10 brand-new gadget caches and a trackable Geocoin!",
  },
]

// const shopInfoBlock = {
//   title: 'Shop',
//   imgSrc: `${import.meta.env.BASE_URL}homeicons/shop_400x400.webp`,
//   href: 'https://www.GeoWoodstockXXI.com/Register',
//   text: 'The official GeoWoodstock XXI has reopened! Now is your chance to buy geocoins, pathtags, event shirts, and more! All items are in limited quantities and will be shipped to the address provided. The store will only be available for a limited time, so if you missed any GWXXI SWAG, this is your FINAL chance.',
// }

export function Home() {
  const isMobile = useIsMobile()
  const { palette } = useTheme()

  const infoBlocks = InfoBlockStuff

  return (
    <Fragment>
      <Helmet>
        <title>CacheMore - Home</title>
        <meta
          name="description"
          content="Geocaching is on the brink of its most ambitious evolution as a renowned coder known as RUBATOSE unveils Cache AI, a cutting-edge system designed to deliver faster finds, easier puzzles, and fewer DNFs. Rally your friends, form your team, and hit the ground running as you search for caches, gather clues, and race the clock to unravel a mystery that unfolds in real time. As each discovery feeds new information back into the system, the challenges grow more complex and the signals more cryptic, hinting that something isn't quite behaving as expected. Your mission is simple: participate, collaborate, and uncover the truth hidden within the test ... the fate of Geocaching may depend on it."
        />
      </Helmet>
      <Section sx={{ flexDirection: 'column', alignItems: 'center' }}>
        <img
          alt="CacheMore brand logo"
          src={`${import.meta.env.BASE_URL}cachemore/branding/logobig.png`}
          style={{
            maxWidth: '100%',
            maxHeight: '50vh',
            width: 'auto',
            height: 'auto',
            marginBottom: '24px',
          }}
        />
        <Typography
          textAlign="center"
          fontWeight="bold"
          fontSize={isMobile ? '1.4rem' : '2rem'}
          lineHeight="2.2rem"
          padding="0 8px"
        >
          {'CacheMore 2026 (GCBEBMA)'}
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
          {'June 26 - 28, 2026'}
        </Typography>

        <br />
        <br />

        <Typography
          variant="h3"
          marginBottom="24px"
          textAlign="center"
          fontSize={isMobile ? '2.4rem' : undefined}
          textTransform="none"
        >
          {'Do you have what it takes to crack the CacheMore code?'}
        </Typography>

        <Typography
          textAlign="justify"
          lineHeight="1.6rem"
          fontSize="1.1rem"
          padding="0 1rem"
        >
          Geocaching is on the brink of its most ambitious evolution as a
          renowned coder known as RUBATOSE unveils Cache AI, a cutting-edge
          system designed to deliver faster finds, easier puzzles, and fewer
          DNFs. Rally your friends, form your team, and hit the ground running
          as you search for caches, gather clues, and race the clock to unravel
          a mystery that unfolds in real time. As each discovery feeds new
          information back into the system, the challenges grow more complex and
          the signals more cryptic, hinting that something isn't quite behaving
          as expected. Your mission is simple: participate, collaborate, and
          uncover the truth hidden within the test ... the fate of Geocaching
          may depend on it. <a href="/events/2026/about">Learn More</a>
        </Typography>
      </Section>

      <Section sx={{ backgroundColor: palette.grey[200] }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ width: '100%' }}
        >
          <Grid
            item
            xs={12}
            md={5}
            width="100%"
            display="flex"
            justifyContent="center"
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                placeItems: 'center center',
                width: 'fit-content',
                gap: '16px',
              }}
            >
              <a
                target="_blank"
                href="https://cachemore.store/products/register1"
              >
                <img
                  className="info-block-image"
                  src="/home/nexus.png"
                  style={{
                    height: '144px',
                    aspectRatio: '1',
                    borderRadius: '8px',
                    border: `1px solid ${CHARCOAL}`,
                    boxShadow: `0 0 12px 4px ${CHARCOAL}88`,
                  }}
                />
              </a>
              <a
                target="_blank"
                href="https://cachemore.store/products/register2"
              >
                <img
                  className="info-block-image"
                  src="/home/byte.png"
                  style={{
                    height: '144px',
                    aspectRatio: '1',
                    borderRadius: '8px',
                    border: `1px solid ${CHARCOAL}`,
                    boxShadow: `0 0 12px 4px ${CHARCOAL}88`,
                  }}
                />
              </a>
              <a
                target="_blank"
                href="https://cachemore.store/products/register0"
              >
                <img
                  className="info-block-image"
                  src="/home/generalregistration.png"
                  style={{
                    height: '144px',
                    aspectRatio: '1',
                    borderRadius: '8px',
                    border: `1px solid ${CHARCOAL}`,
                    boxShadow: `0 0 12px 4px ${CHARCOAL}88`,
                  }}
                />
              </a>
              <a
                target="_blank"
                href="https://cachemore.store/products/register3"
              >
                <img
                  className="info-block-image"
                  src="/home/doublecrossed.png"
                  style={{
                    height: '144px',
                    aspectRatio: '1',
                    borderRadius: '8px',
                    border: `1px solid ${CHARCOAL}`,
                    boxShadow: `0 0 12px 4px ${CHARCOAL}88`,
                  }}
                />
              </a>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="16px"
          >
            <Typography
              fontSize={isMobile ? undefined : '1.4rem'}
              padding={isMobile ? '16px' : '0px 16px 0px 8px'}
              textAlign={isMobile ? 'center' : 'start'}
            >
              This year's event is free to attend, however, to participate in
              most of the activities and get the best experience possible, we
              highly recommend registering for a team. Choose your side, connect
              with other cachers, and work together to crack the CacheMore code.
              Registration comes with a variety of Geocoins, trackable items,
              shirts, and Pathtags that you won't be able to get anywhere else.
            </Typography>
            <Button
              target="_blank"
              href="https://cachemore.store/collections/cachemore-2026"
              variant="contained"
              color="warning"
              sx={{
                borderRadius: '64px',
                fontWeight: 'bold',
                fontSize: '1.4rem',
                textAlign: 'center',
              }}
            >
              Click here to register
            </Button>
          </Grid>
        </Grid>
      </Section>

      <br />
      <br />

      <Section sx={{ flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h3" width="80%" marginBottom="1.6rem">
          Join our mailing list to stay up to date on important announcements,
          event details, and things to do while caching in West Virginia!
        </Typography>
        <BigOrangeButton href="https://geowoodstockxxi.us17.list-manage.com/subscribe?u=8fcc636b5362e252a516c4a10&id=68d2e501c0">
          Join the CacheMore Mailing List!
        </BigOrangeButton>
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
                  <a href={info.href} style={{ width: '80%' }}>
                    <img
                      src={info.imgSrc}
                      className="info-block-image"
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '12px',
                      }}
                    />
                  </a>
                  <Typography
                    variant="h4"
                    fontSize="1.2rem"
                    textAlign="center"
                    sx={{ padding: isMobile ? '16px' : '16px 16px 0px 16px' }}
                  >
                    {info.title}
                  </Typography>
                  <Typography
                    textAlign={isMobile ? 'center' : 'start'}
                    sx={{ padding: isMobile ? '1rem' : '0.4rem 1rem 0px 1rem' }}
                  >
                    {info.text} <a href={info.href}>Learn More</a>
                  </Typography>
                </div>
              </Grid>
            )
          })}
        </Grid>
      </Section>

      <div
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          marginTop: '1rem',
          paddingTop: '1rem',
          backgroundColor: palette.grey[200],
        }}
      >
        <Typography variant="h2">THANK YOU TO OUR SPONSORS</Typography>
        <div
          style={{
            justifyContent: 'flex-start',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography textAlign="center">
            {
              'Thank you to our incredible sponsors for helping make CacheMore 2026 a reality!'
            }
            <br />
            {'Check out our '}
            <a
              style={{ color: BLUE }}
              target="_blank"
              href={`${import.meta.env.BASE_URL}events/2026/sponsors`}
            >
              {'Sponsorship'}
            </a>
            {' page for sponsorship information.'}
          </Typography>
          <CorporateSponsorBlock sponsors={goldSponsors} />
        </div>
      </div>
      <br />
      <Section sx={{ flexDirection: 'column', alignItems: 'center' }}>
        <Typography textAlign="center">
          Want to share your excitement and let the world know you're heading to
          West Virginia for CacheMore 2026?
          <br /> Copy and paste the following HTML code to your Geocaching
          Profile!
        </Typography>

        <pre style={{ width: '80%' }}>
          <code style={{ textAlign: 'center', textWrap: 'wrap' }}>
            {BANNER_CODE}
          </code>
        </pre>

        <div style={{ maxWidth: '90%', width: '90%', overflowX: 'scroll' }}>
          <p style={{ textAlign: 'center' }}>
            <a target="_blank" href="https://coord.info/GCBEBMA">
              <img
                src="https://s3.amazonaws.com/gs-geo-images/00d954dd-8dbe-44a8-bc60-fb34fb78e9b6.png"
                style={{ height: '135px', width: '600px', maxWidth: '670px' }}
              />
            </a>
          </p>
        </div>
      </Section>
    </Fragment>
  )
}
