import { Grid, Typography } from '@mui/material'
import { BigOrangeButton } from '../Guide/BigOrangeButton'
import { VMCGTCACHES } from './constants'
import { GCDisplay } from '../Guide/EventActivities/GeoTour'
import { BoldKol } from '../Guide/CantMissExperiences/Counties'

export function VMCGT() {
  return (
    <div
      style={{
        marginTop: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <Typography variant="h2">Visit Mountaineer Country GeoTour</Typography>
      <img
        src="/eventguide/eventactivities/moegtheader.jpg"
        style={{ width: '100%', aspectRatio: '1800 / 540' }}
      />
      <Typography>
        Come go wild in the heart of Appalachia with the Visit Mountaineer
        Country GeoTour. From lively downtown streets to scenic mountain views,
        each stop offers a new reason to discover what makes Mountaineer Country
        unforgettable. Combining multiple unique experiences, this officially
        registered GeoTour highlights our favorite locations, from parks and
        forests to museums and more. Find select caches to earn limited-edition
        GeoTour coins, or find them all to unlock a unique souvenir added to
        your Geocaching profile.
      </Typography>
      <BigOrangeButton href="https://www.geocaching.com/play/geotours/mountaineercountry">
        MORE INFORMATION
      </BigOrangeButton>

      <Typography variant="h4">Getting Started</Typography>
      <Typography>
        Welcome to Mountaineer County! This officially registered GeoTour will
        have you exploring Morgantown as well as the surrounding areas as you
        hunt for letterbox-hybrids and gadget caches. Each letterbox-hybrid
        cache contains a stamp; all other caches contain a code word. Collect 10
        stamps to earn the black ‘Country Roads Challenge’ Geocoin and collect
        10 code words to earn the diamond ‘Visit Mountaineer Country’ Geocoin.
        Find all 20 to earn a souvenir for your Geocaching profile. 20 caches, 2
        coins, 1 big adventure! Please record the code words or stamps found in
        the Geocaches at each location on your passport. You can pick up a
        passport at the Visit Mountaineer Country CVB office, or print one off
        using the link below to help keep track.
      </Typography>
      <BigOrangeButton href="/eventguide/eventactivities/Visit-Mountaineer-GeoTour-v7.pdf">
        DOWNLOAD THE PASSPORT
      </BigOrangeButton>

      <br />

      <Grid container padding="0 1rem">
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          justifyContent="center"
          paddingBottom="2rem"
        >
          <img
            style={{ width: '80%', maxWidth: '240px', aspectRatio: 1 }}
            src="/eventguide/eventactivities/crcblack.jpg"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          justifyContent="center"
          paddingBottom="2rem"
        >
          <img
            style={{
              height: '100%',
              maxHeight: '240px',
              aspectRatio: '1686/1294',
            }}
            src="/eventguide/eventactivities/vmclogo.png"
          />
        </Grid>
        {VMCGTCACHES.map((c) => {
          return (
            <Grid item xs={12} md={6}>
              <GCDisplay
                title={`VMC-GT: ${c.name}`}
                type={c.type}
                gcCode={c.gcCode}
              />
            </Grid>
          )
        })}
      </Grid>

      <Typography variant="h4">Claim your coin</Typography>
      <Typography>
        You can earn two Geocoins by participating in the Visit Mountaineer
        Country GeoTour; both will be awarded on a first-come, first-served
        basis at the CVB office in Morgantown. Bring in your passport to show
        you have collected all 10 stamps and/or all 10 codewords to claim your
        prize. Geocoins will not be mailed. Finding all 20 caches is required to
        earn the digital souvenir.
      </Typography>
      <div style={{ width: '100%', marginTop: '1rem' }}>
        <BoldKol>Visit Mountaineer Country CVB</BoldKol>
        <Typography>
          341 Chaplin Road, 1st floor, Morgantown, WV 26501
        </Typography>
        <Typography>Monday - Friday, 9 am - 5 pm</Typography>
        <Typography>
          <a href="mailto:info@VisitMountaineerCountry.com">
            info@VisitMountaineerCountry.com
          </a>
        </Typography>
      </div>

      <Typography variant="h4">Know before you go</Typography>
      <ul>
        <li>
          <Typography>
            The entire GeoTour spans Monongalia and Preston counties and is
            expected to take between 6 and 8 hours to complete. There are plenty
            of Geocoins available, so don’t feel like you need to rush or skip
            out on any of the great lunch options!
          </Typography>
        </li>
        <li>
          <Typography>
            <a target="_blank" href="https://coord.info/GCBKCNK">
              GCBKCNK
            </a>
            ,{' '}
            <a target="_blank" href="https://coord.info/GCBKCMQ">
              GCBKCMQ
            </a>
            ,{' '}
            <a target="_blank" href="https://coord.info/GCBKCPA">
              GCBKCPA
            </a>
            , and{' '}
            <a target="_blank" href="https://coord.info/GCBKCJC">
              GCBKCJC
            </a>{' '}
            are located inside and have restricted hours. If visiting on a
            weekend, please make sure to review the hours of operation before
            starting your day.
          </Typography>
        </li>
        <li>
          <Typography>
            You won’t need any special equipment to complete any of the
            Geocaches, but there are three Adventure Lab sets, so you may want
            to bring a battery pack for your phone.
          </Typography>
        </li>
        <li>
          <Typography>
            The further you get from Morgantown, the less service you are
            expected to have. Please make sure to download all the caches to
            your GPS and let someone know where you are going before venturing
            out.
          </Typography>
        </li>
        <li>
          <Typography>
            Please be considerate of each location on the tour. Several
            businesses have graciously opened their doors to our caching
            community, so remember to be kind guests. Treat all caches with
            respect; you won't need more than pinky strength to open or access
            any of the gadgets.
          </Typography>
        </li>
      </ul>

      <a
        target="_blank"
        href="https://VisitMountaineerCountry.com"
        style={{ width: '100%', maxWidth: '384px', aspectRatio: '438/230' }}
      >
        <img
          src="/eventguide/eventactivities/vmcreq.png"
          style={{ width: '100%' }}
        />
      </a>
    </div>
  )
}
