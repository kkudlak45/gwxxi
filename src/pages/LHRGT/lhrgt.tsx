import { Grid, Typography } from '@mui/material'
import { Helmet } from 'react-helmet'
import { Fragment } from 'react/jsx-runtime'
import { BigOrangeButton } from '../Guide/BigOrangeButton'
import { BoldKol } from '../Guide/CantMissExperiences/Counties'
import './lhrgt.css'
import { useIsMobile } from '../../hooks/useIsMobile'
import { LHRGTCACHES } from './constants'
import { GCDisplay } from '../Guide/EventActivities/GeoTour'

export function LHRHT() {
  const isMobile = useIsMobile()

  return (
    <Fragment>
      <Helmet>
        <title>CacheMore - Lumber Heritage Region GeoTour</title>
        <meta
          name="description"
          content="Full of history and natural beauty, Pennsylvania's Lumber Heritage Region spans 4.2 million acres across 15 counties. From sweeping forests and rolling hills to vibrant communities shaped by the lumber industry, come explore what makes North-Central Pennsylvania so special! This officially registered GeoTour highlights our favorite locations, from parks and forests to museums and monuments. Find 20 of the 23 caches to earn a limited-edition GeoTour coin, or find all 23 to unlock a unique souvenir added to your Geocaching profile."
        />
      </Helmet>

      <div
        className="page-base"
        style={{
          padding: '0 1rem 2rem 1rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h2" marginTop="2rem">
          Lumber Heritage Region GeoTour
        </Typography>

        <img
          src="/cachemore/lhrgt/lhrheader_800x240.png"
          style={{ width: '100%', maxWidth: '800px' }}
        />

        <Typography textAlign="justify">
          Full of history and natural beauty, Pennsylvania's Lumber Heritage
          Region spans 4.2 million acres across 15 counties. From sweeping
          forests and rolling hills to vibrant communities shaped by the lumber
          industry, come explore what makes North-Central Pennsylvania so
          special! This officially registered GeoTour highlights our favorite
          locations, from parks and forests to museums and monuments. Find 20 of
          the 23 caches to earn a limited-edition GeoTour coin, or find all 23
          to unlock a unique souvenir added to your Geocaching profile.
        </Typography>

        <BigOrangeButton>CLICK HERE FOR MORE INFO</BigOrangeButton>

        <Typography variant="h4">About the Lumber Heritage Region</Typography>

        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6} padding="1rem">
            <Typography textAlign="justify">
              Unveil Pennsylvania's Rich Lumber Legacy and Natural Wonders &
              embark on an unforgettable journey through Pennsylvania's storied
              forests on the Lumber Heritage Trail. Spanning 15 counties and
              bursting with endless adventures, this trail offers everything
              from heart-pounding outdoor escapades to captivating historical
              experiences. Whether you're kayaking along pristine waterways,
              hiking through dense woodlands, or exploring fascinating museums
              and heritage sites, the Lumber Heritage Region invites you to
              connect with the past and enjoy the best of modern-day
              hospitality—from local dining to charming hometown accommodations.
              <br />
              <a
                target="_blank"
                href="https://lumberheritage.org/explore-the-lumber-heritage-trail/"
              >
                Click here to learn about the Lumber Heritage Region Trail
              </a>
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} padding="1rem">
            <img
              src="/cachemore/lhrgt/lhtmap_700x509.png"
              style={{ width: '100%' }}
            />
          </Grid>
        </Grid>

        <Typography variant="h4">Getting Started</Typography>
        <Typography textAlign="justify">
          The Lumber Heritage Region GeoTour highlights 23 unique locations
          across 15 counties throughout North Central Pennsylvania. It’s
          recommended that you complete the caches sequentially by number, but
          you can start and finish the GeoTour wherever you’d like; all caches
          are to be completed independently of each other. For a full list of
          Geocaches, and to keep track of your code words, you can pick up an
          official passport at participating locations, or you can print your
          own by clicking the link provided.
        </Typography>

        <BigOrangeButton href="/cachemore/lhrgt/LHR-GeoTour-v4.pdf">
          CLICK HERE TO DOWNLOAD THE LHR-GT PASSPORT
        </BigOrangeButton>

        <p />

        <div>
          {LHRGTCACHES.map((c) => {
            return <GCDisplay title={c.name} type={c.type} gcCode={c.gcCode} />
          })}
        </div>

        <iframe
          src="https://www.google.com/maps/d/embed?mid=1qUoKuMkXfpe1wTLtnZWM4E4Z1ngOux4&ehbc=2E312F"
          width="640"
          height="480"
          style={{
            maxWidth: '80%',
            maxHeight: '80%',
            width: '80%',
            height: 'auto',
            marginTop: '2rem',
            aspectRatio: isMobile ? '1' : '640 / 480',
          }}
          loading="lazy"
        />

        <Typography variant="h4">Claim Your Coin</Typography>
        <Typography textAlign="justify">
          Participants in the Lumber Heritage Region GeoTour can earn a FREE
          limited-edition trackable Geocoin by being one of the first 300 people
          to visit at least 20 of the 23 cache locations. At each stop, be sure
          to record the correct code word found on both the cache lid and the
          logbook cover, as these will be required for verification. For stops
          #08 and #23, use the online checker provided on the cache page to
          confirm your answers. Once you've completed the requirements, coins
          can be picked up on a first-come, first-served basis at the Warren
          County CVB office (stop #03), and will not be mailed.
        </Typography>

        <div style={{ width: '100%', marginTop: '1rem' }}>
          <BoldKol>Warren County CVB</BoldKol>
          <Typography>22045 US-6, Warren, PA 16365</Typography>
          <Typography>Monday - Friday, 9 am - 4:30 pm</Typography>
        </div>

        <Typography variant="h4">Know Before You Go!</Typography>
        <ul>
          <li>
            <Typography>
              These caches are not park and grabs. Each stop will have you
              exploring and interacting with a different theme that highlights
              the Lumber Heritage Region. Reading the cache page is very
              important, as you will need to solve for a lock combination at
              each location. Each stop is designed to take 10-15 minutes, but
              some, such as those with accompanying adventure labs, may take
              longer.
            </Typography>
          </li>
          <li>
            <Typography>
              This is not a quick, nor short, GeoTour. The Lumber Heritage
              Region spans 15 counties across North Central Pennsylvania, and it
              can take up to three days to visit all the caches. Hotel and food
              options in some areas are limited, not to mention cell phone
              service, so planning ahead is imperative for a successful
              adventure.
            </Typography>
          </li>
          <li>
            <Typography>
              Stop #05 (
              <a target="_blank" href="https://coord.info/GCBF944">
                GCBF944
              </a>
              ) and stop #09 (
              <a target="_blank" href="https://coord.info/GCBF96F">
                GCBF96F
              </a>
              ) have components that are inside and have restricted hours.
              Please note the current availability on each respective cache page
              before visiting.
            </Typography>
          </li>
          <li>
            <Typography>
              There are two non-physical caches on the GeoTour, stop #08 (
              <a target="_blank" href="https://coord.info/GCBF94P">
                GCBF94P
              </a>
              ) and stop #23 (
              <a target="_blank" href="https://coord.info/GCBM91N">
                GCBM91N
              </a>
              ). For these locations, use the accompanying Certitude checker to
              obtain the code word.
            </Typography>
          </li>
          <li>
            <Typography>
              Geocoins can only be claimed at the Warren County CVB office, stop
              #03 (
              <a target="_blank" href="https://coord.info/GCBF93Y">
                GCBF93Y
              </a>
              ). The office is only open from 9 am to 4:30 pm, Monday to Friday.
              You only need 20/23 code words to claim your Geocoin, so it's
              recommended to find stop #03, then finish with stop #02 and stop
              #01.
            </Typography>
          </li>
          <li>
            <Typography>
              No special equipment is needed to complete any caches on the
              GeoTour, but this is a night cache, stop #17 (
              <a target="_blank" href="https://coord.info/GCBF96Y">
                GCBF96Y
              </a>
              ). This cache is designed to be completed during the day, but
              you'll need to follow fire tacks that will be easier to see in the
              dark.
            </Typography>
          </li>
          <li>
            <Typography>
              Please be considerate of each location on the tour. Several
              businesses have graciously opened their doors to our caching
              community, so remember to be kind guests. Treat all caches with
              respect; you won't need more than pinky strength to open or access
              any of the caches.
            </Typography>
          </li>
        </ul>

        <div className="lhrlogo-container">
          <img className="lhrlogo" src="/cachemore/lhrgt/LHR_Logo.png" />
          <img className="lhrlogo" src="/cachemore/lhrgt/DCNR-left-rgb.png" />
        </div>

        <Typography>
          <em>
            This project was financed in part by a grant from the Community
            Conservation Partnerships Program, the Heritage Areas Program, under
            the administration of the Pennsylvania Department of Conservation
            and Natural Resources, Bureau of Recreation and Conservation.
          </em>
        </Typography>
      </div>
    </Fragment>
  )
}
