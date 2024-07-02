import { Grid, Typography, useTheme } from '@mui/material'
import { Fragment } from 'react/jsx-runtime'
import { Section } from '../../components/Section'
import {
  blackDiamondBackers,
  bronzeSponsors,
  friends,
  goldSponsors,
  platinumSponsors,
  silverSponsors,
  CorporateSponsor,
} from './sponsorsConstants'
import { Helmet } from 'react-helmet'
import Carousel from 'react-multi-carousel'

const carouselBreakpoints = {
  xl: {
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  md: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  sm: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  xs: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

function CorporateSponsorBlock({
  title,
  sponsors,
}: {
  title: string
  sponsors: CorporateSponsor[]
}) {
  return (
    <div style={{ marginBottom: '3rem' }}>
      <Typography
        variant="h3"
        sx={{ fontSize: '2.4rem', padding: '0 8px', marginBottom: '1rem' }}
      >
        {title}
      </Typography>

      <Carousel
        responsive={carouselBreakpoints}
        swipeable
        draggable
        infinite
        autoPlay
        arrows={false}
        showDots
        autoPlaySpeed={3000}
        keyBoardControl
        removeArrowOnDeviceType={['xs', 'sm']}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {sponsors.map((sponsor) => {
          return (
            <div
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                paddingBottom: '1.6rem',
              }}
            >
              <a
                href={sponsor.href}
                target="_blank"
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <img
                  alt={sponsor.name}
                  src={sponsor.imgSrc}
                  style={{
                    aspectRatio: 1,
                    maxWidth: '80%',
                    borderRadius: '16px',
                  }}
                />
              </a>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

function SponsorBlock({
  title,
  sponsors,
  children,
}: {
  title: string
  sponsors: string[]
  children: React.ReactNode
}) {
  return (
    <div>
      <Typography
        variant="h3"
        sx={{ fontSize: '2.4rem', padding: '0 8px 1rem 8px' }}
      >
        {title}
      </Typography>
      {children}
      <Grid container padding="1.4rem 0 1rem 0">
        {sponsors.sort().map((sponsor) => {
          return (
            <Grid item xs={6} sm={4} md={3}>
              <Typography textAlign="center" fontWeight="bold">
                {sponsor}
              </Typography>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export function Sponsors() {
  const { palette } = useTheme()

  return (
    <Fragment>
      <Helmet>
        <title>GeoWoodstock XXI - Morgantown</title>
        <meta
          name="description"
          content="The GeoWoodstock XXI team wants to thank our excellent sponsors for helping to fund and support the original geocaching Mega Event. Thanks to our sponsors for their contributions to helping us host the event in Wild and Wonderful Morgantown, West Virginia!"
        />
      </Helmet>

      <Typography variant="h2" textAlign="center" marginTop="2rem">
        SPONSORS
      </Typography>
      <Typography textAlign="center" marginBottom="1rem">
        A special thanks for supporting GeoWoodstock XXI.
      </Typography>

      <div
        style={{
          padding: '1rem',
          backgroundColor: palette.grey[200],
        }}
      >
        <CorporateSponsorBlock
          title="Platinum Sponsors"
          sponsors={platinumSponsors}
        />
        <CorporateSponsorBlock title="Gold Sponsors" sponsors={goldSponsors} />
        <CorporateSponsorBlock
          title="Silver Sponsors"
          sponsors={silverSponsors}
        />
        <CorporateSponsorBlock
          title="Bronze Sponsors"
          sponsors={bronzeSponsors}
        />
        <Typography textAlign="center">
          Thank you to all our sponsors! Your support allows guest to have the
          best experience possible. To learn more and consider donating
          yourself, please email{' '}
          <a href="mailto: contact@geowoodstockxxi.com">
            contact@GeoWoodstockXXI.com
          </a>
          .
        </Typography>
      </div>

      <Section sx={{ flexDirection: 'column' }}>
        <SponsorBlock title="Friends of GeoWoodstock XXI" sponsors={friends}>
          <Typography textAlign="center">
            GeoWoodstock wouldn't be possible without the amazing community that
            makes it happen. Help support the event by becoming a 'Friend of
            GeoWoodstock' and receive a limited-edition geocoin that won't be
            available in any registration package. In addition, your Geocaching
            name will be listed on the event website and in any applicable event
            programming or signage.{' '}
            <a
              target="_blank"
              href="https://geowoodstock-xxi.square.site/product/friends-of-geowoodstock/2?cp=true&sa=true&sbp=false&q=false"
            >
              CLICK HERE FOR MORE INFO
            </a>
          </Typography>
        </SponsorBlock>
      </Section>

      <Section sx={{ flexDirection: 'column' }}>
        <SponsorBlock
          title="Black Diamond Backers"
          sponsors={blackDiamondBackers}
        >
          <Typography textAlign="center">
            Want to share your excitement for GeoWoodstock XXI and help promote
            the event while caching? Our Black Diamond Backer fundraiser allows
            you to customize a trackable t-shirt with your Geocaching username
            and receive it in the mail months before the event.{' '}
            <a
              target="_blank"
              href="https://geowoodstock-xxi.square.site/product/black-diamond-backer/5?cp=true&sa=true&sbp=false&q=false"
            >
              CLICK HERE FOR MORE INFO
            </a>
          </Typography>
        </SponsorBlock>
      </Section>
    </Fragment>
  )
}
