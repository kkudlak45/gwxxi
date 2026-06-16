import { Fragment } from 'react/jsx-runtime'
import { GuideHeader } from '../GuideHeader'
import { GuideBody } from '../GuideBody'
import { Grid, Typography } from '@mui/material'
import { BigOrangeButton } from '../BigOrangeButton'
import { CHARCOAL } from '../../../constants/theme'
import { CacheType, ICON_MAP } from '../../../components/icons/Icons'
import { useIsMobile } from '../../../hooks/useIsMobile'
import { BoldKol } from '../CantMissExperiences/Counties'

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
          height: 'calc(100%)',
          display: 'flex',
          alignItems: 'start',
          flexDirection: 'column',
        }}
      >
        <BoldKol
          style={{
            fontSize: '1.4rem',
            marginBottom: '0.4rem',
            width: '100%',
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          {title}
        </BoldKol>
        {children}
      </div>
    </Grid>
  )
}

export function GCDisplay({
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
          src="/eventguide/eventactivities/moegtheader.jpg"
          style={{ width: '100%', aspectRatio: '1800 / 540' }}
        />
        <br />
        <Typography>
          Full of history, culture, and recreational opportunities, Marion
          County really is the Middle of Everywhere! From the rolling rapids of
          Valley Falls State Park to the Italian influence of local bakeries,
          there's so much to do while visiting the area. While you're visiting
          West Virginia, we invite you to join us for the Middle of Everywhere
          GeoTour! This officially registered tour highlights 16 of our favorite
          locations in the area, categorized by shops, history, murals, and
          parks! Find 12/16 caches to qualify for a limited-edition GeoTour
          coin. Find all 16 to get a unique souvenir added to your Geocaching
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
        <Typography zIndex="9999">
          Welcome to Marion County, West Virginia! This officially registered
          GeoTour features 16 unique caches split between 4 areas of interest:
          parks, businesses, history, and art. You must find 3 of the 4 caches
          in each section to claim a limited-edition Geocoin. Please record the
          code words or stamps found in the Geocaches at each location on your
          passport. You can pick up a passport at the Marion County CVB office,
          or print one off using the link below to help keep track of your
          adventure.
        </Typography>
        <br />

        <BigOrangeButton href="/projects/moegt/passport.pdf">
          DOWNLOAD THE PASSPORT
        </BigOrangeButton>

        <br />
        <br />
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
            <br />
            <GCDisplay
              type={CacheType.MULTI}
              title="MOE-GT: Visiting the Veterans"
              gcCode="GCB2F62"
            />
            <GCDisplay
              type={CacheType.MULTI}
              title="MOE-GT: At the Falls"
              gcCode="GCB2H3K"
            />
            <GCDisplay
              type={CacheType.MULTI}
              title="MOE-GT: The Pioneers"
              gcCode="GCB2H3M"
            />
            <GCDisplay
              type={CacheType.MULTI}
              title="MOE-GT: Flying Frisbees"
              gcCode="GCB2H3T"
            />
          </Card>

          <Card color="#02874d55" title="Marion's Markets">
            <Typography textAlign="justify">
              In the mood for some food? Stop in at one of our local shops or
              restaurants while you're finding these gadget caches.
            </Typography>
            <br />
            <GCDisplay
              type={CacheType.TRADITIONAL}
              title="MOE-GT: On Tap"
              gcCode="GCB2FG7"
            />
            <GCDisplay
              type={CacheType.TRADITIONAL}
              title="MOE-GT: Cabernet Conundrum"
              gcCode="GCB2FHH"
            />
            <GCDisplay
              type={CacheType.TRADITIONAL}
              title="MOE-GT: The Bee's Knees"
              gcCode="GCB2FJ6"
            />
            <GCDisplay
              type={CacheType.TRADITIONAL}
              title="MOE-GT: Fine-Tuned"
              gcCode="GCB2H3V"
            />
          </Card>

          <Card color="#12508c55" title="Marion's Mining">
            <Typography textAlign="justify">
              Marion County is full of history and culture relating to the coal
              mining industry which West Virginia is famous for. This category
              explores the monuments and sights from the early days of the area.
            </Typography>
            <br />
            <GCDisplay
              type={CacheType.MYSTERY}
              title="MOE-GT: Home of the Pepperoni Roll"
              gcCode="GCB2FJT"
            />
            <GCDisplay
              type={CacheType.MYSTERY}
              title="MOE-GT: Number Nine"
              gcCode="GCB2GKW"
            />
            <GCDisplay
              type={CacheType.MYSTERY}
              title="MOE-GT: Monongah Mining Disaster"
              gcCode="GCB2GMC"
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
            <br />
            <GCDisplay
              type={CacheType.LETTERBOX}
              title="MOE-GT: Hometown Heroes"
              gcCode="GCB2H2W"
            />
            <GCDisplay
              type={CacheType.LETTERBOX}
              title="MOE-GT: Downtown"
              gcCode="GCB2H33"
            />
            <GCDisplay
              type={CacheType.LETTERBOX}
              title="MOE-GT: Colorful Campus"
              gcCode="GCB2H3B"
            />
            <GCDisplay
              type={CacheType.LETTERBOX}
              title="MOE-GT: Titans of Industry"
              gcCode="GCB2H3G"
            />
          </Card>
        </Grid>

        <br />
        <br />

        <iframe
          src="https://www.google.com/maps/d/embed?mid=1mCgrM5iVEGZLgUNTEfuE5qF944I68zE&ehbc=2E312F"
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
          cacher who completes 12/16 caches on the tour. Qualifying participants
          must find at least 3/4 caches from each category and note the codeword
          / stamp in this book to be eligible. Finding all 16 caches is required
          to earn the digital souvenir. Coins can be claimed by visiting the
          Marion County CVB office.
        </Typography>
        <br />

        <div style={{ width: '100%', marginTop: '1rem' }}>
          <BoldKol>Marion County CVB</BoldKol>
          <Typography>1000 Cole Street, Pleasant Valley, WV 26554</Typography>
          <Typography>Monday - Thursday, 8:30 am - 4:30 pm</Typography>
          <Typography>Friday, 8:30 am - 3:30 pm</Typography>
          <Typography>
            <a href="tel:+13043681123">(304) 368-1123</a> |{' '}
            <a href="mailto:Leah@MarionCVB.com">Leah@MarionCVB.com</a>
          </Typography>
        </div>

        <br />
        <br />

        <Typography variant="h3" fontSize="1.4rem">
          Know before you go!
        </Typography>
        <ul>
          <li>
            <Typography>
              2 of the locations have restricted hours, so please review the
              cache pages for GCB2GNV and GCB2H3G while planning.
            </Typography>
          </li>
          <li>
            <Typography>
              You will need some special equipment to complete all the caches on
              the tour. We highly recommend you bring hiking boots, a 9V
              battery, an NFC-capable device, an Adventure Lab-capable device,
              and a lot of patience.
            </Typography>
          </li>
          <li>
            <Typography>
              GCB2H3K may involve terrain that some cachers might find
              challenging. Please be mindful of your ability level and ask for
              help if you are uncomfortable doing some light rock scrambling.
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

        <a
          target="_blank"
          href="https://MarionCVB.com"
          style={{ width: '100%', maxWidth: '384px', aspectRatio: '384/225' }}
        >
          <img
            src="/eventguide/eventactivities/marioncvb.jpg"
            style={{ width: '100%' }}
          />
        </a>
      </GuideBody>
    </Fragment>
  )
}
