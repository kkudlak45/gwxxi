import { Grid, Typography } from '@mui/material'
import { Section } from '../../components/Section'
import moment from 'moment'

const ATTEND_LOGS = 3201
const COUNTRIES = 21

const formatter = new Intl.NumberFormat('en-US')

function InfoBlock({
  number,
  title,
  children: description,
}: {
  number: string
  title: string
  children: React.ReactNode
}) {
  return (
    <Grid
      item
      xs={12}
      md={2}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      margin="2rem 0"
      gap="1rem"
    >
      <div>
        <Typography variant="h2">{number}</Typography>
        <Typography variant="h2" fontSize="2rem">
          {title}
        </Typography>
      </div>
      <Typography>{description}</Typography>
    </Grid>
  )
}

export function Numbers() {
  return (
    <Section>
      <Grid
        container
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <InfoBlock
          number={moment('2025-05-24').diff(moment(), 'days').toFixed(0)}
          title="days"
        >
          <Typography>until GeoWoodstock XXI</Typography>
        </InfoBlock>

        <InfoBlock
          number={formatter.format(ATTEND_LOGS)}
          title="Will Attend Logs"
        >
          <Typography>
            You won't want to miss the largest annual Geocaching event in the
            U.S.{' '}
            <a
              href="https://www.geocaching.com/live/geocache/GCANXX1/log"
              target="_blank"
            >
              Click here to log a will attend
            </a>
          </Typography>
        </InfoBlock>

        <InfoBlock
          number={formatter.format(Math.ceil(ATTEND_LOGS * 1.5))}
          title="Estimated Attendees"
        >
          Whether or not you find a lot of geocaches on May 24th, you'll
          definitely find a lot of friends!
        </InfoBlock>

        <InfoBlock number={COUNTRIES.toFixed()} title="Countries">
          Cachers from {COUNTRIES.toFixed()} different countries around the
          world are planning to make the trip!
        </InfoBlock>

        <InfoBlock number="50" title="U.S. States">
          Pre-registrants represent all 50 states of the U.S. plus the District
          of Columbia!
        </InfoBlock>
      </Grid>
    </Section>
  )
}
