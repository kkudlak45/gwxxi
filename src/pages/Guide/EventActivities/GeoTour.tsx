import { Fragment } from 'react/jsx-runtime'
import { GuideHeader } from '../GuideHeader'
import { GuideBody } from '../GuideBody'
import { Grid, Typography } from '@mui/material'
import { BigOrangeButton } from '../BigOrangeButton'
import { CHARCOAL } from '../../../constants/theme'
import { CacheType, ICON_MAP } from '../../../components/icons/Icons'
import { useIsMobile } from '../../../hooks/useIsMobile'

function Card({
  children,
  title,
  color,
}: {
  children: React.ReactNode
  title: string
  color: string
}) {
  return (
    <Grid item xs={12} sm={6} justifyContent="center" display="flex">
      <div
        style={{
          // @ts-ignore
          backgroundColor: color,
          padding: '12px 24px',
          border: `1px solid ${CHARCOAL}`,
          borderRadius: '8px',
          width: '80%',
          height: 'calc(100% - 24px)',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography
          fontSize="1.4rem"
          fontFamily="KGRedHands"
          marginBottom="0.4rem"
        >
          {title}
        </Typography>
        {children}
      </div>
    </Grid>
  )
}

function GCDisplay({
  title,
  type,
  gcCode,
}: {
  title: string
  type: CacheType
  gcCode: string
}) {
  const Component = ICON_MAP[type]
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        gap: '8px',
        marginBottom: '0.8rem',
      }}
    >
      <div style={{ height: '2rem', aspectRatio: '1' }}>
        <Component />
      </div>
      <Typography textAlign="start">
        {title} (
        <a target="_blank" href={`https://coord.info/${gcCode}`}>
          {gcCode}
        </a>
        )
      </Typography>
    </div>
  )
}

export function GeoTour() {
  const isMobile = useIsMobile()

  return (
    <Fragment>
      <GuideHeader
        title="MIDDLE OF EVERYWHERE GEOTOUR"
        subTitle="Welcome to Marion County, West Virginia!"
      />

      <GuideBody>
        <img
          src="/eventguide/eventactivities/moegeotour_600x600.png"
          style={{ maxWidth: '600px', width: '100%', aspectRatio: 1 }}
        />
        <br />
        <Typography>
          Full of history, culture, and recreational opportunities, Marion
          County really is the Middle of Everywhere! From the rolling rapids of
          Valley Falls State Park to the Italian influence of local bakeries,
          there's so much to do while visiting the area. As part of GeoWoodstock
          XXI, we invite you to join us for the Middle of Everywhere GeoTour!
          This officially registered tour highlights 20 of our favorite
          locations in the area, categorized by shops, history, murals, and
          parks! Find 16/20 caches to qualify for a limited-edition GeoTour
          coin. Find all 20 to get a unique souvenir added to your Geocaching
          profile.
        </Typography>
        <br />
        <BigOrangeButton href="https://www.geocaching.com/play/geotours/everywhere">
          CLICK HERE FOR MORE INFO
        </BigOrangeButton>
        <br />
        <br />
        <br />

        <Typography variant="h3" fontSize="1.4rem">
          Getting Started
        </Typography>
        <br />
        {/* TODO - need the passport link */}
        <Typography>
          You can pick up an official Middle of Everywhere GeoTour booklet by
          visiting the Marion County CVB table at Mylan Park during GeoWoodstock
          XXI. Alternatively, you may print out a passport by{' '}
          <a
            target="_blank"
            href="/eventguide/eventactivities/Middle of Everywhere GeoTour Passport.pdf"
          >
            clicking the link provided
          </a>
          .
        </Typography>
        <br />

        <Grid
          container
          style={{ justifyContent: 'space-evenly' }}
          rowSpacing={6}
        >
          <Card color="#e9830055" title="Marion's Multis">
            <Typography textAlign="justify">
              The tour's multi caches will bring you to park and recreational
              spots throughout the county, including two state parks and a
              campground.
            </Typography>
            <div style={{ height: '1rem' }} />
            <GCDisplay
              type={CacheType.MULTI}
              title="MOE-GT #01: Visiting the Veterans"
              gcCode="GCB2F62"
            />
            <GCDisplay
              type={CacheType.MULTI}
              title="MOE-GT #02: At the Falls"
              gcCode="GCB2H3K"
            />
            <GCDisplay
              type={CacheType.MULTI}
              title="MOE-GT #03: The Pioneers"
              gcCode="GCB2H3M"
            />
            <GCDisplay
              type={CacheType.MULTI}
              title="MOE-GT #04: Fishing in the Dark"
              gcCode="GCB2H3P"
            />
            <GCDisplay
              type={CacheType.MULTI}
              title="MOE-GT #05: Flying Frisbees"
              gcCode="GCB2H3T"
            />
          </Card>

          <Card color="#02874d55" title="Marion's Markets">
            <Typography textAlign="justify">
              In the mood for some food? Stop in at one of our local shops or
              restaurants while you're finding these gadget caches.
            </Typography>
            <div style={{ height: '1rem' }} />
            <GCDisplay
              type={CacheType.TRADITIONAL}
              title="MOE-GT #06: Connect the Dots"
              gcCode="GCB2F9P"
            />
            <GCDisplay
              type={CacheType.TRADITIONAL}
              title="MOE-GT #07: On Tap"
              gcCode="GCB2FG7"
            />
            <GCDisplay
              type={CacheType.TRADITIONAL}
              title="MOE-GT #08: Cabernet Conundrum"
              gcCode="GCB2FHH"
            />
            <GCDisplay
              type={CacheType.TRADITIONAL}
              title="MOE-GT #09: The Bee's Knees"
              gcCode="GCB2FJ6"
            />
            <GCDisplay
              type={CacheType.TRADITIONAL}
              title="MOE-GT #10: Fine-Tuned"
              gcCode="GCB2H3V"
            />
          </Card>

          <Card color="#12508c55" title="Marion's Mining">
            <Typography textAlign="justify">
              Marion County is full of history and culture relating to the coal
              mining industry which West Virginia is famous for. This category
              explores the monuments and sights from the early days of the area.
            </Typography>
            <div style={{ height: '1rem' }} />
            <GCDisplay
              type={CacheType.MYSTERY}
              title="MOE-GT #11: Home of the Pepperoni Roll"
              gcCode="GCB2FJT"
            />
            <GCDisplay
              type={CacheType.MYSTERY}
              title="MOE-GT #12: Number Nine"
              gcCode="GCB2GKW"
            />
            <GCDisplay
              type={CacheType.MYSTERY}
              title="MOE-GT #13: Monongah Mining Disaster"
              gcCode="GCB2GMC"
            />
            <GCDisplay
              type={CacheType.MYSTERY}
              title="MOE-GT #14: Black Diamond"
              gcCode="GCB2GNC"
            />
            <GCDisplay
              type={CacheType.MYSTERY}
              title="MOE-GT #15: Coal Country"
              gcCode="GCB2GNV"
            />
          </Card>

          <Card color="#12508c55" title="Marion's Murals">
            <Typography textAlign="justify">
              Highlighting unique murals and art in the area, these
              letterbox-hybrid caches will require you to do something just a
              little different at each location. Don't forget to stamp your
              passport!
            </Typography>
            <div style={{ height: '1rem' }} />
            <GCDisplay
              type={CacheType.LETTERBOX}
              title="MOE-GT #16: Hometown Heroes"
              gcCode="GCB2H2W"
            />
            <GCDisplay
              type={CacheType.LETTERBOX}
              title="MOE-GT #17: Downtown"
              gcCode="GCB2H33"
            />
            <GCDisplay
              type={CacheType.LETTERBOX}
              title="MOE-GT #18: Colorful Campus"
              gcCode="GCB2H3B"
            />
            <GCDisplay
              type={CacheType.LETTERBOX}
              title="MOE-GT #19: Titans of Industry"
              gcCode="GCB2H3G"
            />
            <GCDisplay
              type={CacheType.LETTERBOX}
              title="MOE-GT #20: Open Happiness"
              gcCode="GCB2FM7"
            />
          </Card>
        </Grid>

        <br />
        <br />

        <iframe
          src="https://www.google.com/maps/d/embed?mid=1Uq0nN5zMAMeijaMEG2VJgsjMjOB6PVY&ehbc=2E312F"
          width="640"
          height="480"
          style={{
            maxWidth: '80%',
            maxHeight: '80%',
            width: '80%',
            height: 'auto',
            aspectRatio: isMobile ? '1' : '640 / 480',
          }}
          loading="lazy"
        />

        <br />
        <br />

        <Typography variant="h3" fontSize="1.4rem">
          Claim your coin!
        </Typography>
        <br />
        <Typography>
          Coins will be awarded on a first-come, first-served basis to any
          cacher who completes 16/20 caches on the tour. Qualifying participants
          must find at least 4/5 caches from each category and note the codeword
          / stamp in this book to be eligible. Finding all 20 caches is required
          to earn the digital souvenir.
        </Typography>
        <br />
        <Typography>
          You can claim your coin at any of the following events by visiting the
          Marion County CVB table:
        </Typography>
        <br />
        <div>
          <Typography fontFamily="KGRedHands">
            GeoWoodstock XXI (
            <a target="_blank" href="https://coord.info/gcanxx1">
              GCANXX1
            </a>
            )
          </Typography>
          <ul style={{ margin: 0 }}>
            <li>
              <Typography>Friday (5/23) from 8 am* - 3 pm</Typography>
              <Typography>
                <em>*8 - 10 am is for VIPs and Friends of GeoWoodstock only</em>
              </Typography>
            </li>
            <li>
              <Typography>Saturday (5/24) from 8 am - 5 pm</Typography>
            </li>
          </ul>

          <br />

          <Typography fontFamily="KGRedHands">
            Breakfast with the Mommas (
            <a target="_blank" href="https://coord.info/GCANXX7">
              GCANXX7
            </a>
            )
          </Typography>
          <ul style={{ margin: 0 }}>
            <li>
              <Typography>Sunday (5/25) from 8 - 11 am</Typography>
            </li>
          </ul>

          <br />

          <Typography fontFamily="KGRedHands">
            Farewell from the Fort (
            <a target="_blank" href="https://coord.info/GCANXX8">
              GCANXX8
            </a>
            )
          </Typography>
          <ul style={{ margin: 0 }}>
            <li>
              <Typography>Sunday (5/25) from 4 - 7 pm</Typography>
            </li>
          </ul>
        </div>

        <br />
        <br />
        <br />

        <Typography variant="h3" fontSize="1.4rem">
          Know before you go!
        </Typography>
        <ul>
          <li>
            <Typography>
              Two of the locations have restricted hours, so please review the
              cache pages for GCB2GNV and GCB2H3G while planning.
            </Typography>
          </li>
          <li>
            <Typography>
              You will need some special equipment to complete all the caches on
              the tour. We highly recommend you bring hiking boots, a 9V
              battery, a flashlight, an NFC capable device, an Adventure Lab
              capable device, and a lot of patience.
            </Typography>
          </li>
          <li>
            <Typography>
              GCB2H3K and GCB2H3P can involve terrain that some cachers might
              find challenging. Please be mindful of your ability level and ask
              for help if you are uncomfortable doing some light rock scrambling
              or walking in the dark.
            </Typography>
          </li>
          <li>
            <Typography>
              The further you get from Fairmont, the less service you are
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

        <Typography>
          The Middle of Everywhere GeoTour will kickoff on May 3, 2025 and coins
          are expected to be available until the end of the ‘Farewell From The
          Fort’ event. If you want to be eligible for a coin, we highly
          recommend prioritizing the GeoTour and claiming your coin at Mylan
          Park. Otherwise, the caches will be available for the next year to be
          eligible for the souvenir.
        </Typography>
        <br />
      </GuideBody>
    </Fragment>
  )
}
