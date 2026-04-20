import { Button, Grid, Typography, styled, useTheme } from '@mui/material'
import { Fragment } from 'react/jsx-runtime'
import { Section } from '../../components/Section'
import { useIsMobile } from '../../hooks/useIsMobile'
import { BLUE, CHARCOAL, RED } from '../../constants/theme'
import LaunchIcon from '@mui/icons-material/Launch'
import { Helmet } from 'react-helmet'
import { BigOrangeButton } from '../Guide/BigOrangeButton'

const StyledGrid = styled(Grid)(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '16px',
  }
})

const BLUE_HOTELS = [
  {
    name: 'Courtyard by Marriott',
    address: '460 Courtyard St Morgantown, WV 26501',
    distance: 5,
    href: 'https://www.marriott.com/event-reservations/reservation-link.mi?id=1764170778089&key=GRP&app=resvlink&_branch_match_id=1522249708767540740&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXTywo0MtNLCrKzC8p0UvOz9UvSi3OyczLtgdK2ALZZSCOWmaKraG5mYmhuYG5uYWBhaVadmqlrXtQgFpdUWpaKlB3Xnp8UlF%2BeXFqka1rSnoqAJEv1kpeAAAA',
    code: 'GEO',
    imgSrc: `${import.meta.env.BASE_URL}hotelpictures/courtyard_200x200.png`,
    color: BLUE,
    phone: undefined,
  },
  {
    name: 'Hilton Garden Inn',
    address: '150 Suncrest Town Centre Dr Morgantown, WV 26505',
    distance: 7,
    href: 'https://www.hilton.com/en/book/reservation/rooms/?ctyhocn=MGWGIGI&arrivalDate=2026-06-25&departureDate=2026-06-28&groupCode=GEOC&room1NumAdults=1&cid=OM%2CWW%2CHILTONLINK%2CEN%2CDirectLink',
    code: 'GEOC',
    imgSrc: `${import.meta.env.BASE_URL}hotelpictures/hilton_200x200.png`,
    color: BLUE,
  },
]

const RED_HOTELS = [
  {
    name: 'Hampton Inn & Suites',
    address: '325 Granville Square Morgantown, WV 26501',
    distance: 4,
    href: 'https://www.hilton.com/en/book/reservation/rooms/?ctyhocn=MGWTCHX&arrivalDate=2026-06-25&departureDate=2026-06-29&groupCode=CHH6GO&room1NumAdults=1&cid=OM%2CWW%2CHILTONLINK%2CEN%2CDirectLink',
    code: '6GO',
    imgSrc: `${import.meta.env.BASE_URL}hotelpictures/hampton_200x200.png`,
    color: RED,
  },
  {
    name: 'Holiday Inn',
    address: '1188 Pineview Dr Morgantown, WV 26505',
    distance: 6,
    href: 'https://www.ihg.com/holidayinn/hotels/us/en/find-hotels/select-roomrate?fromRedirect=true&qSrt=sBR&qIta=99801505&icdv=99801505&qSlH=MGWPD&qCiD=25&qCiMy=052026&qCoD=29&qCoMy=052026&qGrpCd=GSE&setPMCookies=true&qSHBrC=HI&qDest=1188%20Pineview%20Drive,%20Morgantown,%20WV,%20US&showApp=true&adjustMonth=false&srb_u=1&qRmFltr=',
    code: 'GSE',
    imgSrc: `${import.meta.env.BASE_URL}hotelpictures/holiday_200x200.png`,
    color: RED,
  },
]

const CAMPGROUNDS = [
  {
    name: 'Sand Springs Campground',
    address: '1309 Sand Springs Rd, Morgantown, WV 26508',
    distance: 26,
    href: 'https://sandspringscampgroundwv.com/',
    imgSrc: `${import.meta.env.BASE_URL}campgrounds/sand_springs_200x200.webp`,
    phone: undefined,
  },
  // {
  //   name: 'Chestnut Ridge Park',
  //   address: 'Darnell Hollow Rd, Morgantown, WV 26508',
  //   distance: 26,
  //   href: 'https://reservations.wvstateparks.com/products/camping',
  //   imgSrc: `${import.meta.env.BASE_URL}campgrounds/chestnut_200x200.webp`,
  // },
  {
    name: 'Coopers Rock State Park',
    address:
      'McCollum Camping Area, 61 County Line Dr, Bruceton Mills, WV 26525',
    distance: 28,
    href: 'https://reservations.wvstateparks.com/products/camping',
    imgSrc: `${import.meta.env.BASE_URL}campgrounds/coopers_200x200.webp`,
  },
  // {
  //   name: 'Camp Mountaineer',
  //   address: '187 Camp Mountaineer Rd, Morgantown, WV 26508',
  //   phone: '304-366-3940',
  //   distance: 16,
  //   imgSrc: `${import.meta.env.BASE_URL}campgrounds/camp_mountaineer_200x200.png`,
  // },
]

// const AIRPORTS = [
//   {
//     distance: 9,
//     icao: 'mgw',
//     name: 'Morgantown Municipal Airport',
//   },
//   { distance: 36, icao: 'ckb', name: 'Clarksburg Airport' },
//   {
//     distance: 77,
//     icao: 'pit',
//     name: 'Pittsburgh International Airport',
//     emph: true,
//   },
//   {
//     distance: 204,
//     icao: 'cmh',
//     name: 'Columbus International Airport',
//     emph: true,
//   },
//   {
//     distance: 206,
//     icao: 'cle',
//     name: 'Cleveland International Airport',
//     emph: true,
//   },
//   { distance: 158, icao: 'crw', name: 'West Virginia International Airport' },
//   {
//     distance: 211,
//     icao: 'iad',
//     name: 'Dulles International Airport',
//     emph: true,
//   },
//   { distance: 222, icao: 'dca', name: 'Washington National Airport' },
//   { distance: 223, icao: 'bwi', name: 'Baltimore International Airport' },
//   { distance: 193, icao: 'cak', name: 'Akron-Canton Airport' },
//   { distance: 383, icao: 'clt', name: 'Charlotte International Airport' },
//   { distance: 320, icao: 'cvg', name: 'Cincinnati International Airport' },
//   { distance: 233, icao: 'mdt', name: 'Harrisburg International Airport' },
//   { distance: 273, icao: 'day', name: 'Dayton International Airport' },
//   { distance: 339, icao: 'lex', name: 'Lexington Airport' },
// ]

// const RENTAL_CARS = [
//   { name: 'Enterprise', link: 'enterprise.com' },
//   { name: 'Avis', link: 'avis.com' },
//   { name: 'Hertz', link: 'hertz.com' },
//   { name: 'Budget', link: 'budget.com' },
//   { name: 'Alamo', link: 'alamo.com' },
//   { name: 'Dollar', link: 'dollar.com' },
//   { name: 'National', link: 'nationalcar.com' },
//   { name: 'Sixt', link: 'sixt.com' },
// ]

function HotelBlock({
  item,
}: {
  item: (typeof RED_HOTELS)[number] | (typeof BLUE_HOTELS)[number]
}): JSX.Element {
  return (
    <Grid item xs={12} key={item.name}>
      <Grid container>
        <StyledGrid item xs={12} md={4}>
          <a href={item.href} target="_blank">
            <img
              alt={`an exterior shot of ${item.name}`}
              src={item.imgSrc}
              width="80%"
              style={{
                aspectRatio: 1,
                borderRadius: '12px',
                border: `2px solid ${CHARCOAL}`,
                maxWidth: '320px',
              }}
            />
          </a>
        </StyledGrid>
        <StyledGrid
          item
          xs={12}
          md={8}
          sx={{
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            textAlign: { xs: 'center', md: 'start' },
          }}
        >
          <Typography
            fontSize="2rem"
            fontWeight="bold"
            lineHeight="2.2rem"
            marginBottom="0.6rem"
            textAlign="start"
          >
            {item.name}
          </Typography>
          <Typography sx={{ fontSize: { xs: '1rem', md: '1.2rem' } }}>
            {item.address.split('(br)').map((text) => {
              return (
                <Fragment>
                  {text}
                  <p />
                </Fragment>
              )
            })}
          </Typography>
          <Typography>
            <em>Distance: {item.distance} miles</em>
          </Typography>
          {item.code && (
            <Typography>
              Use code{' '}
              <em style={{ fontWeight: 'bold', marginRight: '3px' }}>
                {item.code}
              </em>
              {' when booking!'}
            </Typography>
          )}
          {item.href && (
            <Typography>
              <a
                target="_blank"
                href={item.href}
                style={{
                  color: BLUE,
                  textDecorationColor: BLUE,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2px',
                }}
              >
                Click here to book
                <LaunchIcon style={{ width: '1rem', height: '1rem' }} />
              </a>
            </Typography>
          )}
          {/* @ts-ignore */}
          {item.phone && (
            <Typography>
              {/* @ts-ignore */}
              Call <a href={`Tel:${item.phone}`}>{item.phone}</a> and mention
              GeoWoodstock.
            </Typography>
          )}
        </StyledGrid>
      </Grid>
    </Grid>
  )
}

export function Travel() {
  const { palette } = useTheme()
  const isMobile = useIsMobile()

  return (
    <Fragment>
      <Helmet>
        <title>CacheMore 2026 - Travel and Lodging</title>
        <meta
          name="description"
          content="Wondering how to get to Morgantown, West Virginia or where to stay on the weekend of CacheMore 2026? Check this page for deals and discounts relating to hotels, campgrounds, airports, flights, and car rentals!"
        />
      </Helmet>

      <Typography variant="h2" textAlign="center" marginTop="2rem">
        TRAVEL & LODGING
      </Typography>

      <Section style={isMobile ? { textAlign: 'center' } : {}}>
        <Grid container justifyContent="center" alignItems="center">
          <StyledGrid item xs={12} md={6}>
            <img
              alt="a map displaying relevant locations within proximity to morgantown including: airports, high points, national parks, state oldests, and other nearby events"
              src={`${import.meta.env.BASE_URL}travel/map.png`}
              width="90%"
              style={{ borderRadius: '16px', border: `2px solid ${CHARCOAL}` }}
            />
          </StyledGrid>
          <StyledGrid
            item
            xs={12}
            md={6}
            sx={{ flexDirection: 'column', gap: '1rem' }}
          >
            <Typography>
              Located in the heart of Appalachia, Morgantown is your perfect
              long-weekend destination for a Geocaching adventure. With hundreds
              of caches in and around the city, scenic riverside trails, and a
              lively college-town energy, Morgantown offers a compact,
              cache-packed experience without the long drives.
            </Typography>
            <Typography>
              For those flying in from the East Coast, Pittsburgh International
              Airport is the closest major hub, just over an hour north and an
              easy drive down I-79 straight into Morgantown. Travelers from the
              DC region can also reach the city with a smooth ride from Dulles
              via I-68.
            </Typography>
            <Typography>
              Check out our list of host hotels featuring exclusive CacheMore
              rates. We recommend arriving Thursday (6/25) and staying through
              Sunday (6/28) to enjoy the full slate of events and all the
              Geocaching Morgantown has to offer. One weekend won’t feel like
              enough, but it’s a great place to start. We can’t wait to see you!
            </Typography>
          </StyledGrid>
        </Grid>
      </Section>

      {/* <Section sx={{ backgroundColor: palette.grey[200] }}>
        <Grid container justifyContent="center" alignItems="flex-start">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" color="secondary" textAlign="center">
              AIRPORTS
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: isMobile ? 'none' : undefined }}
          >
            <Typography variant="h3" color="secondary" textAlign="center">
              RENTAL CARS
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            {AIRPORTS.sort((a, b) => {
              if (a.distance < b.distance) {
                return -1
              }
              if (b.distance > a.distance) {
                return 1
              }
              return 0
            }).map((airport) => {
              const divStyling = {
                display: 'flex',
                justifyContent: isMobile ? 'center' : 'space-between',
                padding: isMobile ? undefined : '0 16%',
              }
              return (
                <Fragment>
                  <div key={airport.name} style={divStyling}>
                    <Typography
                      style={{
                        fontWeight: 'bold',
                        color: airport.emph ? palette.warning.main : undefined,
                      }}
                    >
                      {airport.emph && (
                        <StarIcon
                          style={{
                            width: '1rem',
                            height: '1rem',
                            color: palette.warning.main,
                          }}
                        />
                      )}
                      {airport.name} <em>({airport.icao.toUpperCase()})</em>
                    </Typography>
                    <Typography
                      style={{
                        display: isMobile ? 'none' : undefined,
                        fontWeight: airport.emph ? 'bold' : 'normal',
                        color: airport.emph ? palette.warning.main : undefined,
                      }}
                    >
                      {airport.distance} miles
                    </Typography>
                  </div>
                </Fragment>
              )
            })}
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            display={isMobile ? 'flex' : 'none'}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            paddingTop="8px"
          >
            <Typography
              style={{ color: palette.warning.main, fontWeight: 'bold' }}
            >
              <StarIcon
                style={{
                  width: '1rem',
                  height: '1rem',
                  color: palette.warning.main,
                }}
              />{' '}
              <em>Starred airports are recommended</em>
            </Typography>
            <Typography fontStyle="italic" fontWeight="bold" textAlign="center">
              {
                '🚨 Update: United Airlines now offers direct flights from IAD and ORD to MGW.'
              }
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: isMobile ? undefined : 'none', marginTop: '1.4rem' }}
          >
            <Typography variant="h2" color="secondary" textAlign="center">
              RENTAL CARS
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              padding="0 16%"
              textAlign="center"
              lineHeight="1rem"
              paddingBottom="8px"
            >
              The following companies are available at most major airports
              nearby:
            </Typography>
            {RENTAL_CARS.sort((a, b) => {
              if (a.name < b.name) {
                return -1
              }
              if (b.name > a.name) {
                return 1
              }
              return 0
            }).map((cars) => {
              return (
                <div
                  key={cars.name}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: isMobile ? '0 8px' : '0 16%',
                  }}
                >
                  <Typography>{cars.name}</Typography>
                  <Typography>
                    <a target="_blank" href={`https://www.${cars.link}`}>
                      {cars.link}
                    </a>
                  </Typography>
                </div>
              )
            })}
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            display={isMobile ? 'none' : 'flex'}
            flexDirection={'column'}
            justifyContent="center"
            alignItems="center"
            paddingTop="8px"
          >
            <Typography
              style={{ color: palette.warning.main, fontWeight: 'bold' }}
            >
              <StarIcon
                style={{
                  width: '1rem',
                  height: '1rem',
                  color: palette.warning.main,
                }}
              />{' '}
              <em>Starred airports are recommended</em>
            </Typography>
            <Typography fontStyle="italic" fontWeight="bold" textAlign="center">
              🚨 Update: United Airlines now offers direct flights <p />
              from IAD and ORD to MGW.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </Section> */}

      <Section
        sx={{
          flexDirection: 'column',
          textAlign: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h2">Stay in one of our host hotels!</Typography>
        <Typography>
          We’ve partnered with four local Morgantown hotels to offer discounted
          rates for CacheMore teams. Staying in your designated team hotel makes
          it easy to meet fellow participants, collaborate on puzzles, and
          strategize between events. These hotels become a hub for teamwork,
          late-night planning sessions, and sharing discoveries as you navigate
          the Signal Symposium together. There might even be some special
          surprises here as well!
        </Typography>
        <p />

        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            justifyContent="center"
            sx={{ backgroundColor: `${BLUE}44` }}
          >
            <Grid item xs={12}>
              <img
                style={{
                  maxWidth: '360px',
                  width: '80%',
                  maxHeight: '240px',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
                src="/travel/nexus_360x360.png"
              />
            </Grid>
            {BLUE_HOTELS.map((item) => {
              return <HotelBlock item={item} />
            })}
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            justifyContent="center"
            sx={{ backgroundColor: `${RED}44` }}
          >
            <Grid item xs={12}>
              <img
                style={{
                  maxWidth: '360px',
                  width: '80%',
                  maxHeight: '240px',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
                src="/travel/byte_360x360.png"
              />
            </Grid>
            {RED_HOTELS.map((item) => {
              return <HotelBlock item={item} />
            })}
          </Grid>
        </Grid>

        <Button
          variant="contained"
          color="warning"
          sx={{
            borderRadius: '64px',
            fontWeight: 'bold',
            fontSize: '1.4rem',
            width: 'fit-content',
            marginTop: '24px',
          }}
          href="https://www.visitmountaineercountry.com/stay/"
          target="_blank"
        >
          CLICK HERE FOR THE FULL LIST OF HOTELS
        </Button>
      </Section>

      <Section
        sx={{
          flexDirection: 'column',
          textAlign: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: '2.4rem', sm: '3rem' } }}
        >
          CAMPGROUNDS
        </Typography>

        <Grid
          container
          sx={{ backgroundColor: palette.grey[200] }}
          padding="2rem 1rem"
          alignItems="center"
        >
          <Grid item xs={12} md={3}>
            <img src="/travel/koa.png" />
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography textAlign="justify">
              Want to stay off the grid? The KOA at Mylan Park is officially
              open, and with new facilities and beautiful lodging options, we
              expect this venue to fill up quickly. Be steps away from the event
              and enjoy a special bonfire event on Saturday (6/27) night!
            </Typography>
            <p />
            <BigOrangeButton href="https://koa.com/campgrounds/morgantown/?gad_source=1&gad_campaignid=23019580968&gbraid=0AAAAA9cPXpEV1MIDQKq4pAcqiQUf7MVXn&gclid=CjwKCAiAxc_JBhA2EiwAFVs7XOzvhRkYoy9YUXOXvlOffi2ZvSNG-boiFtiwiH5TWdmYD6Q8sBuJaBoCv5MQAvD_BwE">
              Click here to check out the KOA
            </BigOrangeButton>
          </Grid>
        </Grid>

        <p />

        <Grid container>
          {CAMPGROUNDS.sort((h1, h2) => h1.distance - h2.distance).map(
            (item) => {
              return (
                <Grid item xs={12} md={6} key={item.name}>
                  <Grid container>
                    <StyledGrid item xs={12} md={4}>
                      <a href={item.href} target="_blank">
                        <img
                          alt={`an exterior shot of ${item.name}`}
                          src={item.imgSrc}
                          width="80%"
                          style={{
                            aspectRatio: 1,
                            borderRadius: '12px',
                            border: `2px solid ${CHARCOAL}`,
                            maxWidth: '320px',
                          }}
                        />
                      </a>
                    </StyledGrid>
                    <StyledGrid
                      item
                      xs={12}
                      md={8}
                      sx={{
                        flexDirection: 'column',
                        alignItems: { xs: 'center', md: 'flex-start' },
                        textAlign: { xs: 'center', md: 'start' },
                      }}
                    >
                      <Typography
                        fontSize="2rem"
                        fontWeight="bold"
                        lineHeight="2.2rem"
                        marginBottom="0.6rem"
                        textAlign="start"
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize:
                            item.distance === 0
                              ? '0.8rem'
                              : { xs: '1rem', md: '1.2rem' },
                        }}
                      >
                        {item.address.split('(br)').map((text) => {
                          return (
                            <Fragment>
                              {text}
                              <p />
                            </Fragment>
                          )
                        })}
                      </Typography>
                      <Typography>
                        <em>Distance: {item.distance} miles</em>
                      </Typography>
                      {item.href && (
                        <Typography>
                          <a
                            target="_blank"
                            href={item.href}
                            style={{
                              color: BLUE,
                              textDecorationColor: BLUE,
                              display: 'flex',
                              alignItems: 'center',
                              gap: '2px',
                            }}
                          >
                            Click here to book
                            <LaunchIcon
                              style={{ width: '1rem', height: '1rem' }}
                            />
                          </a>
                        </Typography>
                      )}
                      {item.phone && (
                        <Typography>
                          Call <a href={`Tel:${item.phone}`}>{item.phone}</a>{' '}
                          and mention GeoWoodstock.
                        </Typography>
                      )}
                    </StyledGrid>
                  </Grid>
                </Grid>
              )
            },
          )}
        </Grid>
        <Button
          variant="contained"
          color="warning"
          sx={{
            borderRadius: '64px',
            fontWeight: 'bold',
            fontSize: '1.4rem',
            width: 'fit-content',
            marginTop: '24px',
          }}
          href="https://www.visitmountaineercountry.com/stay/"
          target="_blank"
        >
          CLICK HERE FOR THE FULL LIST OF CAMPGROUNDS
        </Button>
      </Section>
    </Fragment>
  )
}
