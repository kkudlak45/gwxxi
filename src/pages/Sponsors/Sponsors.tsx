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
} from './sponsorsConstants'

function SponsorBlock({
  title,
  sponsors,
}: {
  title: string
  sponsors: string[]
}) {
  return (
    <div>
      <Typography
        variant="h3"
        sx={{ fontSize: { xs: '2.4rem', sm: '3rem' }, padding: '0 8px' }}
      >
        {title}
      </Typography>
      <Grid container padding="1rem 0">
        {sponsors.map((sponsor) => {
          return (
            <Grid item xs={6} sm={4} md={3}>
              <Typography textAlign="center">{sponsor}</Typography>
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
      <Typography variant="h2" textAlign="center" marginTop="2rem">
        SPONSORS
      </Typography>
      <Typography textAlign="center" marginBottom="1rem">
        A special thanks for supporting GeoWoodstock XXI.
      </Typography>

      <Section
        sx={{
          backgroundColor: palette.grey[400],
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <SponsorBlock title="Platinum Sponsors" sponsors={platinumSponsors} />
        <SponsorBlock title="Gold Sponsors" sponsors={goldSponsors} />
        <SponsorBlock title="Silver Sponsors" sponsors={silverSponsors} />
        <SponsorBlock title="Bronze Sponsors" sponsors={bronzeSponsors} />
        <Typography textAlign="center">
          Thank you to all our sponsors! Your support allows guest to have the
          best experience possible. To learn more and consider donating
          yourself, please email{' '}
          <a href="mailto: contact@GeoWoodstock.com">
            contact@GeoWoodstock.com
          </a>
          .
        </Typography>
      </Section>

      <Section sx={{ flexDirection: 'column' }}>
        <SponsorBlock title="Friends of GeoWoodstock XXI" sponsors={friends} />
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
      </Section>

      <Section sx={{ flexDirection: 'column' }}>
        <SponsorBlock
          title="Black Diamond Backers"
          sponsors={blackDiamondBackers}
        />
        <Typography textAlign="center">
          Want to share your excitement for GeoWoodstock XXI and help promote
          the event while caching? Our Black Diamond Backer fundraiser allows
          you to customize a trackable t-shirt with your Geocaching username and
          receive it in the mail months before the event.{' '}
          <a
            target="_blank"
            href="https://geowoodstock-xxi.square.site/product/black-diamond-backer/3?cp=true&sa=true&sbp=false&q=false"
          >
            CLICK HERE FOR MORE INFO
          </a>
        </Typography>
      </Section>
    </Fragment>
  )
}
