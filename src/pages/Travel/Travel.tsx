import { Button, Grid, Typography, styled, useTheme } from '@mui/material'
import { Fragment } from 'react/jsx-runtime'
import { Section } from '../../components/Section'
import StarIcon from '@mui/icons-material/Star'
import { useIsMobile } from '../../hooks/useIsMobile'
import { BLUE, CHARCOAL } from '../../constants/theme'
import LaunchIcon from '@mui/icons-material/Launch'
import { Helmet } from 'react-helmet'

const StyledGrid = styled(Grid)(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '16px',
  }
})

const HOTELS = [
  {
    name: 'Appalachian Hotel',
    address: '17600 Veterans Memorial Hwy Kingwood, WV 26537',
    distance: 30,
    imgSrc: `${import.meta.env.BASE_URL}hotelpictures/appalachian_200x200.png`,
    phone: '304-329-7829',
  },
  {
    name: 'Courtyard by Marriott',
    address: '460 Courtyard St Morgantown, WV 26501',
    distance: 5,
    href: 'https://www.marriott.com/event-reservations/reservation-link.mi?id=1718718538441&key=GRP&app=resvlink',
    code: 'GEO',
    imgSrc: `${import.meta.env.BASE_URL}hotelpictures/courtyard_200x200.png`,
  },
  {
    name: 'Hampton Inn & Suites',
    address: '325 Granville Square Morgantown, WV 26501',
    distance: 4,
    href: 'https://www.hilton.com/en/hotels/mgwtchx-hampton-suites-morgantown-university-town-centre',
    code: 'GEO',
    imgSrc: `${import.meta.env.BASE_URL}hotelpictures/hampton_200x200.png`,
  },
  {
    name: 'Hilton Garden Inn',
    address: '150 Suncrest Town Centre Dr Morgantown, WV 26505',
    distance: 7,
    href: 'https://www.hilton.com/en/book/reservation/deeplink/?ctyhocn=MGWGIGI&groupCode=GEO&arrivaldate=2025-05-21&departuredate=2025-05-26&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT',
    code: 'GEO',
    imgSrc: `${import.meta.env.BASE_URL}hotelpictures/hilton_200x200.png`,
  },
  {
    name: 'Holiday Inn Morgantown',
    address: '1188 Pineview Dr Morgantown, WV 26505',
    distance: 6,
    href: 'https://www.holidayinn.com/redirect?path=rates&brandCode=HI&localeCode=en&regionCode=1&hotelCode=MGWPD&checkInDate=21&checkInMonthYear=042025&checkOutDate=26&checkOutMonthYear=042025&_PMID=99801505&GPC=GEO&cn=no&viewfullsite=true',
    code: 'GEO',
    imgSrc: `${import.meta.env.BASE_URL}hotelpictures/holiday_200x200.png`,
  },
  {
    name: 'Hotel Morgan',
    address: '127 High St Morgantown, WV 26505',
    distance: 7,
    href: 'https://www.hotelmorgan.com/',
    code: '052125DLB',
    imgSrc: `${import.meta.env.BASE_URL}hotelpictures/morgan_200x200.png`,
  },
  {
    name: 'Scholar Morgantown by Hilton',
    address: '345 Chestnut St Morgantown, WV 26505',
    distance: 7,
    href: 'https://www.hilton.com/en/attend-my-event/geowoodstockmorgantownwv2024/',
    imgSrc: `${import.meta.env.BASE_URL}hotelpictures/scholar_200x200.png`,
  },
  {
    name: 'Residence Inn',
    address: '1046 Willowdale Rd Morgantown, WV 26505',
    distance: 7,
    href: 'https://www.marriott.com/event-reservations/reservation-link.mi?id=1718291793348&key=GRP&app=resvlink',
    imgSrc: `${import.meta.env.BASE_URL}hotelpictures/residence_200x200.png`,
  },
  {
    name: 'The Cranberry',
    address: '2700 Cranberry Square Morgantown, WV 26508',
    distance: 19,
    code: 'GeoWoodstock',
    href: 'https://cranberrywv.com/',
    imgSrc: `${import.meta.env.BASE_URL}hotelpictures/cranberry_200x200.png`,
  },
  {
    name: 'Lakeview Resort',
    address: 'One Lakeview Dr, Morgantown, WV 26508',
    distance: 21,
    href: 'https://linkprotect.cudasvc.com/url?a=https%3A%2F%2Fwww.lakeviewresort.com%2Freservations%3Fpromo_code%3DGEO52125&c=E,1,gq-fB3OvXlnAOrkLqskxBnwy2poM3PfMu42tD7PtykoqJDTHZXtaZankHTnb0nu9mUw0lRP50z1WMhAkVYEUL3OOon55rYBRYmLRZMY_XUDr&typo=1',
    imgSrc: `${import.meta.env.BASE_URL}hotelpictures/lakeview_200x200.png`,
  },
  {
    name: 'Euro-Suites Hotel',
    address: '501 Chestnut Ridge Rd, Morgantown, WV 26505',
    distance: 6,
    phone: '304-598-1000',
    imgSrc: `${import.meta.env.BASE_URL}hotelpictures/euro_200x200.png`,
  },
  {
    name: 'Quality Inn and Suites',
    address: '366 Boyers Ave, Morgantown, WV 26505',
    distance: 4,
    href: 'https://www.choicehotels.com/west-virginia/morgantown/quality-inn-hotels/wv017/rates?hotel=WV017&pu=no&ratePlanCode=LVMC&checkInDate=2025-05-24&checkOutDate=2025-05-25',
    imgSrc: `${import.meta.env.BASE_URL}hotelpictures/quality_200x200.png`,
  },
  {
    name: 'Alpine Lake Resort',
    address: '700 W Alpine Dr, Terra Alta, WV 26764',
    distance: 46,
    code: 'GEO25',
    href: 'https://www.myhms4.com/myres/bh/search.do?hotelCode=21166&Group=Geo25',
    imgSrc: `${import.meta.env.BASE_URL}hotelpictures/alpine_200x200.jpg`,
  },
  {
    name: 'Clarksburg Hilton Garden Inn',
    address: '606 Emily Dr, Clarksburg, WV 26301',
    distance: 40,
    href: 'https://www.hilton.com/en/book/reservation/rooms/?ctyhocn=CKBGIGI&arrivalDate=2025-05-21&departureDate=2025-05-25&groupCode=GEO25&room1NumAdults=1&cid=OM%2CWW%2CHILTONLINK%2CEN%2CDirectLink',
    imgSrc: `${import.meta.env.BASE_URL}hotelpictures/ckb_hilton_200x200.png`,
  },
  {
    name: 'Days Inn & Suites - Bridgeport',
    address: '112 Tolley Dr, Bridgeport, WV 26330',
    distance: 38,
    href: 'http://www.wyndhamhotels.com/hotels/04686?checkInDate=05/22/2025&checkOutDate=05/25/2025&groupCode=052225GEO',
    imgSrc: `${import.meta.env.BASE_URL}hotelpictures/daysbgpt_200x200.png`,
  },
  {
    name: 'Hampton Inn Morgantown',
    address: '1053 Van Voorhis Road, Morgantown, WV 26505',
    distance: 5,
    href: 'https://www.hilton.com/en/book/reservation/deeplink/?ctyhocn=MGWVVHX&groupCode=CHHGEO&arrivaldate=2025-05-22&departuredate=2025-05-25&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT',
    imgSrc: `${import.meta.env.BASE_URL}hotelpictures/hamptonmgw_200x200.png`,
  },
  {
    name: 'Fairfield Inn & Suites Marriott - Fairmont',
    address: '27 Southland Dr, Fairmont, WV 26554',
    distance: 25,
    href: 'https://www.marriott.com/event-reservations/reservation-link.mi?id=1725645270833&key=GRP&guestreslink2=true',
    imgSrc: `${import.meta.env.BASE_URL}hotelpictures/mariottfmnt_200x200.png`,
  },
  {
    name: 'Sonesta Essential - Fairmont',
    address: '20 Southland Dr, Fairmont, WV 26554',
    distance: 26,
    href: 'https://www.sonesta.com/sonesta-essential/wv/fairmont/sonesta-essential-fairmont?isGroupCode=true&groupCode=GEO&checkin=2025-05-23&checkout=2025-05-25',
    imgSrc: `${import.meta.env.BASE_URL}hotelpictures/sonestafmt_200x200.png`,
  },
  {
    name: 'Sonesta Essential - Morgantown',
    address: '15 Lawless Rd, Morgantown, WV 26501',
    distance: 5,
    href: 'https://www.sonesta.com/sonesta-essential/wv/morgantown/sonesta-essential-morgantown?isGroupCode=true&groupCode=GEO&checkin=2025-05-23&checkout=2025-05-25',
    imgSrc: `${import.meta.env.BASE_URL}hotelpictures/sonestamgw_200x200.png`,
  },
  {
    name: 'Candlewood Suites',
    address: '7200 Willie G Ave, Morgantown, WV 26501',
    distance: 2,
    href: 'https://linkprotect.cudasvc.com/url?a=https%3a%2f%2fwww.candlewoodsuites.com%2fredirect%3fpath%3dhd%26brandCode%3dCW%26localeCode%3den%26hotelCode%3dMGWCW%26rateCode%3dAE81N%26_PMID%3d99502056%26corporateNumber%3d787055017%26cn%3dno%26viewfullsite%3dtrue&c=E,1,d_fZLobDxZT_wlLxPBU2xAtLCQPNIf8G0w2--BpY0HdXZ6hKgrFUKtkxmyCVu6C3_iSKroBPodZR_BE0By7g3k5aWkJpjpCoaJzPQhjbLazCmlk,&typo=1&ancr_add=1',
    imgSrc: `${import.meta.env.BASE_URL}hotelpictures/candlewood_200x200.png`,
  },
  {
    name: 'Days Inn - Fairmont',
    address: '166 Middletown Road, Fairmont, West Virginia 26554',
    distance: 26,
    href: 'https://www.wyndhamhotels.com/days-inn/fairmont-west-virginia/days-inn-fairmont/overview?CID=LC:iqv0j1dklijly45:12149&iata=00093796',
    imgSrc: `${import.meta.env.BASE_URL}hotelpictures/daysfmnt.png`,
  },
  {
    name: 'Fairfield Inn and Suites',
    address: '161 Lewis Dr, Morgantown, WV 26501',
    distance: 3,
    href: 'https://www.marriott.com/event-reservations/reservation-link.mi?id=1739390655872&key=GRP&guestreslink2=true&app=resvlink',
    imgSrc: `${import.meta.env.BASE_URL}hotelpictures/fairfieldmgw.png`,
  },
]

const CAMPGROUNDS = [
  {
    name: 'Sand Springs Campground',
    address: '1309 Sand Springs Rd, Morgantown, WV 26508',
    distance: 26,
    href: 'https://sandspringscampgroundwv.com/',
    imgSrc: `${import.meta.env.BASE_URL}campgrounds/sand_springs_200x200.webp`,
  },
  {
    name: 'Chestnut Ridge Park',
    address: 'Darnell Hollow Rd, Morgantown, WV 26508',
    distance: 26,
    href: 'https://reservations.wvstateparks.com/products/camping',
    imgSrc: `${import.meta.env.BASE_URL}campgrounds/chestnut_200x200.webp`,
  },
  {
    name: 'Coopers Rock State Park',
    address:
      'McCollum Camping Area, 61 County Line Dr, Bruceton Mills, WV 26525',
    distance: 28,
    href: 'https://reservations.wvstateparks.com/products/camping',
    imgSrc: `${import.meta.env.BASE_URL}campgrounds/coopers_200x200.webp`,
  },
  {
    name: 'Camp Mountaineer',
    address: '187 Camp Mountaineer Rd, Morgantown, WV 26508',
    phone: '304-366-3940',
    distance: 16,
    imgSrc: `${import.meta.env.BASE_URL}campgrounds/camp_mountaineer_200x200.png`,
  },
]

const AIRPORTS = [
  {
    distance: 9,
    icao: 'mgw',
    name: 'Morgantown Municipal Airport',
  },
  { distance: 36, icao: 'ckb', name: 'Clarksburg Airport' },
  {
    distance: 77,
    icao: 'pit',
    name: 'Pittsburgh International Airport',
    emph: true,
  },
  {
    distance: 204,
    icao: 'cmh',
    name: 'Columbus International Airport',
    emph: true,
  },
  {
    distance: 206,
    icao: 'cle',
    name: 'Cleveland International Airport',
    emph: true,
  },
  { distance: 158, icao: 'crw', name: 'West Virginia International Airport' },
  {
    distance: 211,
    icao: 'iad',
    name: 'Dulles International Airport',
    emph: true,
  },
  { distance: 222, icao: 'dca', name: 'Washington National Airport' },
  { distance: 223, icao: 'bwi', name: 'Baltimore International Airport' },
  { distance: 193, icao: 'cak', name: 'Akron-Canton Airport' },
  { distance: 383, icao: 'clt', name: 'Charlotte International Airport' },
  { distance: 320, icao: 'cvg', name: 'Cincinnati International Airport' },
  { distance: 233, icao: 'mdt', name: 'Harrisburg International Airport' },
  { distance: 273, icao: 'day', name: 'Dayton International Airport' },
  { distance: 339, icao: 'lex', name: 'Lexington Airport' },
]

const RENTAL_CARS = [
  { name: 'Enterprise', link: 'enterprise.com' },
  { name: 'Avis', link: 'avis.com' },
  { name: 'Hertz', link: 'hertz.com' },
  { name: 'Budget', link: 'budget.com' },
  { name: 'Alamo', link: 'alamo.com' },
  { name: 'Dollar', link: 'dollar.com' },
  { name: 'National', link: 'nationalcar.com' },
  { name: 'Sixt', link: 'sixt.com' },
]

export function Travel() {
  const { palette } = useTheme()
  const isMobile = useIsMobile()

  return (
    <Fragment>
      <Helmet>
        <title>GeoWoodstock XXI - Travel and Lodging</title>
        <meta
          name="description"
          content="Wondering how to get to Morgantown, West Virginia or where to stay on the weekend of GeoWoodstock XXI? Check this page for deals and discounts relating to hotels, campgrounds, airports, flights, and car rentals!"
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
              src={`${import.meta.env.BASE_URL}travel/map.webp`}
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
              {
                'Welcome to Wild and Wonderful, West Virginia. Come for the day, or make a week out of it; there are endless adventures when caching in West Virginia. '
              }
              <em>
                {
                  '(Travel time is greatly dependent on how many caches you stop for.)'
                }
              </em>
            </Typography>
            <Typography>
              {
                "For those flying, the closest airport is located about an hour north in Pittsburgh. Following I-79, you'll have the opportunity to explore the home of Mr. Rogers in Pittsburgh or enjoy the hundreds of caches in the most haunted county in America, Greene County. Looking east, flights into Dulles International Airport will have you driving through the heart of WVTim territory in the Eastern Panhandle. If you enjoy gadget caches, this is a must-do during your visit to West Virginia. Ohio airports such as Cleveland or Columbus are also great options for those who want to explore the Buckeye State. Lastly, for those looking to add another National Park to their map, flying into Charlotte will give you the unique opportunity to check out what wild and wonderful is all about as you travel through Fayetteville."
              }
            </Typography>
            <Typography>
              {
                "Check out our list of host hotels with discounts and rates exclusive to those joining us for GeoWoodstock weekend. We recommend traveling to Morgantown on Wednesday (5/21) and staying until Monday (5/26) to soak up all the caching fun planned. We promise, one weekend won't be long enough! With side events showcasing the best that north central West Virginia has to offer, you can't go wrong with staying in Morgantown or Fairmont. We can't wait to see you!"
              }
            </Typography>
          </StyledGrid>
        </Grid>
      </Section>

      <Section sx={{ backgroundColor: palette.grey[200] }}>
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
              🚨 Update: United Airlines now offers direct flights <br />
              from IAD and ORD to MGW.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </Section>

      <Section
        sx={{
          flexDirection: 'column',
          textAlign: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h2">HOTELS</Typography>
        <Typography>
          Enjoy your stay at one of our host hotels. Check back for additional
          offerings.
        </Typography>
        <Grid container justifyContent="center">
          {HOTELS.sort((h1, h2) => h1.distance - h2.distance).map((item) => {
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
                    >
                      {item.name}
                    </Typography>
                    <Typography sx={{ fontSize: { xs: '1rem', md: '1.2rem' } }}>
                      {item.address.split('(br)').map((text) => {
                        return (
                          <Fragment>
                            {text}
                            <br />
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
                          <LaunchIcon
                            style={{ width: '1rem', height: '1rem' }}
                          />
                        </a>
                      </Typography>
                    )}
                    {item.phone && (
                      <Typography>
                        Call <a href={`Tel:${item.phone}`}>{item.phone}</a> and
                        mention GeoWoodstock.
                      </Typography>
                    )}
                  </StyledGrid>
                </Grid>
              </Grid>
            )
          })}
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
        <Typography>
          Enjoy the rustic atmosphere of wild and wonderful at one of our
          campgrounds. Check back for additional offerings.
        </Typography>
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
                              <br />
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
