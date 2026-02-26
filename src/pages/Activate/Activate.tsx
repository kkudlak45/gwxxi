import { Grid, Typography, useTheme } from '@mui/material'
import { BoldKol } from '../Guide/CantMissExperiences/Counties'
import { Justified } from '../Team/Team'
import { useEffect, useState } from 'react'
import './Activate.css'
import { Section } from '../../components/Section'

const DROPDOWNITEMS: Record<string, string> = {
  'GeoWoodstock XXI': 'GWXXI',
  'Middle of Everywhere GeoTour': 'GWXXI',
  'Lumber Heritage GeoTour': 'LUMBER',
  'Visit Mountaineer Country GeoTour': 'EXPLORE',
  'CacheMore 2026': 'RUBATOSE',
}

function ImgBlock({
  title,
  children,
  imgSrc,
}: {
  title: React.ReactNode
  children: React.ReactNode
  imgSrc: string
}) {
  return (
    <Grid
      xs={12}
      md={4}
      display="flex"
      alignItems="center"
      flexDirection="column"
      padding="2rem"
    >
      <img
        src={imgSrc}
        style={{
          maxWidth: '300px',
          width: '100%',
          paddingBottom: '0.4rem',
        }}
      />
      <Typography fontSize="1.2rem" marginBottom="0.4rem">
        <BoldKol>{title}</BoldKol>
      </Typography>
      {children}
    </Grid>
  )
}

export function Activate(): JSX.Element {
  const { palette } = useTheme()
  const [selectedCode, setSelectedCode] = useState('-')
  const [animate, setAnimate] = useState(false)
  useEffect(() => {
    setAnimate(true)
    const to = setTimeout(() => setAnimate(false), 300)
    return () => clearTimeout(to)
  }, [selectedCode])

  return (
    <div style={{ padding: '2rem' }}>
      <Typography variant="h2" marginBottom="1rem">
        ACTIVATE
      </Typography>
      <Justified>
        Congrats! You’ve found a Geocoin or Travel Bug tied to one of our events
        or projects! Whether you discovered it in the wild or earned it along
        the way, we hope the experience brought a little extra adventure and
        that you’ll treasure this token as our thank-you for being part of the
        journey. To get started, simply select the event or GeoTour below to
        retrieve your activation code and make it discoverable for the caching
        community.
      </Justified>
      <p />
      <Typography>
        <BoldKol>Please select the event or GeoTour: </BoldKol>
        <select onChange={(e) => setSelectedCode(e.target.value)}>
          <option value="" disabled selected>
            -
          </option>
          {Object.keys(DROPDOWNITEMS).map((k) => (
            <option value={k}>{k}</option>
          ))}
        </select>
      </Typography>
      <Typography>
        <BoldKol>Activation Code: </BoldKol>
        <span className={animate ? 'pulseanim' : ''}>
          {DROPDOWNITEMS[selectedCode]}
        </span>
      </Typography>
      <p />
      <Section
        style={{ backgroundColor: palette.grey[200], flexDirection: 'column' }}
      >
        <Typography variant="h4">
          To activate your trackable on{' '}
          <a target="_blank" href="http://Geocaching.com">
            Geocaching.com
          </a>
        </Typography>
        <ol>
          <li>
            <Typography>
              Use the dropdown menu above to select the event or GeoTour
              associated with your trackable to retrieve the activation code
            </Typography>
          </li>
          <li>
            <Typography>
              Visit{' '}
              <a
                target="_blank"
                href="https://www.geocaching.com/track/activate.aspx"
              >
                www.geocaching.com/track/activate.aspx
              </a>{' '}
              and enter both the six-character code found on your trackable and
              the activation code from step 1. The code may be found on the back
              or edge of the trackable
            </Typography>
          </li>
          <li>
            <Typography>
              Enter information for your trackable, such as a custom name, goal,
              and description. Feel free to write about how you got this
              trackable, the experience of the adventure, or add a photo
            </Typography>
          </li>
          <li>
            <Typography>
              If the trackable is to remain in your collection, set the page to
              “Discover Only” after activating. This will ensure people can
              still discover your trackable, but they can’t accidentally grab it
              from your profile.
            </Typography>
          </li>
        </ol>
      </Section>
      <p />
      <p />
      <Typography variant="h4">Find your next adventure!</Typography>
      <Grid container>
        <ImgBlock
          imgSrc="/cachemore/activate/moegt.jpeg"
          title="Middle of Everywhere GeoTour"
        >
          <Justified>
            Full of history, culture, and recreational opportunities, Marion
            County really is the Middle of Everywhere! From the rolling rapids
            of Valley Falls State Park to the Italian influence of local
            bakeries, there's so much to do while visiting the area. Learn More
          </Justified>
        </ImgBlock>
        <ImgBlock
          imgSrc="/cachemore/activate/mccvb.png"
          title="Visit Mountaineer Country GeoTour"
        >
          <Justified>
            Come go wild in the heart of Appalachia with the Visit Mountaineer
            Country GeoTour. From lively downtown streets to scenic mountain
            views, each stop offers a new reason to discover what makes
            Mountaineer Country unforgettable. Learn More
          </Justified>
        </ImgBlock>
        <ImgBlock
          imgSrc="/cachemore/activate/lhr.png"
          title="Lumber Heritage Region GeoTour"
        >
          <Justified>
            Built on history and natural beauty, Pennsylvania’s Lumber Heritage
            Region spans 4.2 million acres across 15 counties. From sweeping
            forests and rolling hills to vibrant communities shaped by the
            lumber industry, come explore what makes North-Central Pennsylvania
            so special! Learn More
          </Justified>
        </ImgBlock>
      </Grid>
    </div>
  )
}
