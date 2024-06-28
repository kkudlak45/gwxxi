import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from '@mui/material'
import React from 'react'
import { Fragment } from 'react/jsx-runtime'
import { useIsMobile } from '../../hooks/useIsMobile'
import { Section } from '../../components/Section'
import { Helmet } from 'react-helmet'

const VENUE_LINK =
  'https://www.google.com/maps/place/Hazel+%26+J.W.+Ruby+Community+Center+at+Mylan+Park/@39.6364343,-80.0333398,17z/data=!3m1!4b1!4m6!3m5!1s0x883579357e332689:0x54cc7607d958f900!8m2!3d39.636431!4d-80.0312464!16s%2Fg%2F11cn7g375j?entry=ttu'

export function FaqCard({
  question,
  children,
}: {
  question: string
  children: React.ReactNode
}) {
  return (
    <Grid
      item
      xs={12}
      md={6}
      marginBottom="1rem"
      display="flex"
      justifyContent="center"
    >
      <Accordion sx={{ width: '90%', maxWidth: '98%' }}>
        <AccordionSummary>
          <Typography fontSize="1.2rem" fontWeight="bold" textAlign="start">
            {question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </Grid>
  )
}

export function Faqs() {
  const isMobile = useIsMobile()

  return (
    <Fragment>
      <Helmet>
        <title>GeoWoodstock XXI - Frequently Asked Questions</title>
        <meta
          name="description"
          content="Not finding what you need? Frequently asked questions answered here! Check this page for more information about the upcoming geocaching mega event in Morgantown, West Virginia - GeoWoodstock XXI"
        />
      </Helmet>

      <Typography variant="h2" textAlign="center" marginTop="2rem">
        {isMobile ? 'FAQS' : 'FREQUENTLY ASKED QUESTIONS'}
      </Typography>

      <Typography textAlign="center">
        Here's the top questions asked so far..
      </Typography>

      <Section sx={{ flexDirection: 'column', gap: '2rem' }}>
        <Typography
          variant="h3"
          textAlign="center"
          sx={{ fontSize: { xs: '2.4rem', md: '3rem' } }}
        >
          About GeoWoodstock XXI
        </Typography>

        <Grid container>
          <FaqCard question="What is GeoWoodstock?">
            <Typography>
              Known as the world's Original Mega-event, GeoWoodstock is the
              largest annual gathering of geocachers in North America. It is the
              social event of the year and a great opportunity to meet other
              cachers, shop exclusive vendors, and sharpen your Geocaching
              skills.
            </Typography>
          </FaqCard>

          <FaqCard question="Where is GeoWoodstock XXI?">
            <Typography>
              GeoWoodstock XXI will be held in Morgantown, West Virginia on May
              24, 2025. The big event will take place at the{' '}
              <a target="_blank" href={VENUE_LINK}>
                Hazel & J.W. Ruby Community Center
              </a>{' '}
              at Mylan Park, but side events will sprawl throughout North
              Central West Virginia showcasing the best Appalachia has to offer.
            </Typography>
          </FaqCard>

          <FaqCard question="Is there a fee to attend?">
            <Typography>
              Nope! GeoWoodstock XXI is a completely free-to-attend event and is
              open to the community. In the fall, registration packages will be
              available for those interested in purchasing exclusive SWAG such
              as shirts, trackables, meal tickets, and more! Even the free
              registration package has some freebies; this is the best way to
              get an accurate headcount of attendees.
            </Typography>
          </FaqCard>

          <FaqCard question="Do I need to stay at the event the whole day?">
            <Typography>
              GeoWoodstock XXI will have a lot of activities you won't find
              anywhere else. Informational seminars, presentations, vendors,
              interactive exhibits, catered lunches, trackable trading, and
              meet-and-greets are designed to keep you busy all day, but you're
              welcome to explore the area on Saturday (5/24) as well. We
              recommend scheduling to spend at least half the day at
              GeoWoodstock HQ.
            </Typography>
          </FaqCard>

          <FaqCard question="Are pets allowed?">
            <Typography>
              GeoWoodstock XXI will be held in 2 large indoor and outdoor
              facilities with minimal green space. While pets are welcome to
              attend, we ask cachers to be realistic with the needs of their
              pets. If any animals are disruptive or cause problems for other
              attendees, you will be asked to leave.
            </Typography>
          </FaqCard>

          <FaqCard question="Is the event wheelchair accessible?">
            <Typography>
              Yep! The main event center is wheelchair accessible, and
              handicapped parking spaces will be available on a first-come
              first-served basis. Please have your blue handicap parking pass
              visible. The best way to guarantee parking close to the venue
              would be by purchasing a VIP package with preferred parking.
            </Typography>
          </FaqCard>

          <FaqCard question="Why do I need to log a Will Attend?">
            <Typography>
              Logging a Will Attend helps event organizers best prepare for the
              anticipated crowd at the event. Not only does this help with
              planning, but it also keeps you up to date with announcements and
              information which will emailed directly to you. If you are
              traveling with a family or a group, please have each active player{' '}
              <a
                target="_blank"
                href="https://www.geocaching.com/live/geocache/GCANXX1/log"
              >
                log a Will Attend
              </a>{' '}
              on the event page so that we can best estimate our expected
              attendance.
            </Typography>
          </FaqCard>

          <FaqCard question="Will GWXXI be a Giga-event?">
            <Typography>
              Giga-event status is awarded by Geocaching HQ at 3,000 Will Attend
              logs. While we are expecting a large crowd, we hope to plan a
              great event regardless of total attendees. It is solely in the
              hands of geocachers logging their intention to attend GWXXI.
            </Typography>
          </FaqCard>

          <FaqCard question="Can I volunteer at the event?">
            <Typography>
              It takes a village to support a Mega and we are so excited you are
              interested in volunteering! Several volunteer opportunities will
              be available throughout the event weekend. Keep an eye out for an
              announcement in the spring for more details!
            </Typography>
          </FaqCard>

          <FaqCard question="Where will the next GeoWoodstock be held?">
            <Typography>
              GeoWoodstock is an annual event that travels to different towns
              each year and is hosted by the local caching community. Proposals
              to host GeoWoodstock in 2026 are currently being accepted. Check
              out{' '}
              <a target="_blank" href="https://geowoodstock.org">
                GeoWoodstock.org
              </a>{' '}
              for more information.
            </Typography>
          </FaqCard>
        </Grid>
      </Section>

      <Section sx={{ flexDirection: 'column', gap: '2rem' }}>
        <Typography
          variant="h3"
          textAlign="center"
          sx={{ fontSize: { xs: '2.4rem', md: '3rem' } }}
        >
          About the Weekend
        </Typography>

        <Grid container>
          <FaqCard question="Is there a host hotel?">
            <Typography>
              With hundreds of hotels within north-central West Virginia, you
              {" can't"} go wrong staying anywhere near Interstate 79 in
              Morgantown or Fairmont. Side events and caching opportunities will
              be spread throughout the region, so pick a hotel that best suits
              your needs and budget. Check out the{' '}
              <a href={`${import.meta.env.BASE_URL}travel`}>Travel & Lodging</a>{' '}
              page for recommended hotels and discounts!
            </Typography>
          </FaqCard>

          <FaqCard question="Can I camp at GeoWoodstock XXI?">
            <Typography>
              The best spot to camp in the area is at Coopers Rock State Park. A
              new KOA campground at Mylan Park is scheduled to be opened in
              2025, and bookings will be available as soon as possible. Check
              back later for updates!
            </Typography>
          </FaqCard>

          <FaqCard question="How many days should I plan to attend?">
            <Typography>
              With 8 events spanning from Thursday {'(5/22)'} to Sunday{' '}
              {'(5/25)'}, and hundreds of nearby caches, you’ll want to plan to
              spend as many days as you can in the area. We recommend traveling
              in on Wednesday {'(5/21)'} and leaving on Monday {'(5/26)'} to
              have the best experience possible.
            </Typography>
          </FaqCard>

          <FaqCard question="Do I need to stay at the event the whole day?">
            <Typography>
              In addition to the hundreds of nearby geocaches including the{' '}
              <a target="_blank" href="https://coord.info/GC9KGXX">
                West Virginia State Star
              </a>
              , the{' '}
              <a target="_blank" href="https://coord.info/GCAA1BE">
                F.L.O.A.T. geo-art
              </a>
              , and a variety of local series, new caches will be placed
              specifically for GeoWoodstock XXI. This includes a new GeoTour, a
              new geo-art, gadgets, and Adventure Labs! Check back later for
              more info!
            </Typography>
          </FaqCard>
        </Grid>
      </Section>

      <Section sx={{ flexDirection: 'column', gap: '2rem' }}>
        <Typography
          variant="h3"
          textAlign="center"
          sx={{ fontSize: { xs: '2.4rem', md: '3rem' } }}
        >
          About the Area
        </Typography>

        <Grid container>
          <FaqCard question="Why West Virginia?">
            <Typography>
              West Virginia really is Almost Heaven, and we can't wait to
              introduce cachers to the wild and wonderful culture, experiences,
              and adventures that the Mountain State has to offer. Known as the
              most northern of the southern states and the most southern of the
              northern states, West Virginia has a rich blend of northern
              attitude and southern charm. With close proximity to most major
              cities on the East Coast and several international airports,{' '}
              <a href={`${import.meta.env.BASE_URL}morgantown`}>Morgantown</a>{' '}
              will serve as an ideal central location for GeoWoodstock XXI.
            </Typography>
          </FaqCard>

          <FaqCard question="Are there things to do for non-geocachers?">
            <Typography>
              Of course! North-central West Virginia has something for everyone!
              Included as part of GeoWoodstock weekend will be a variety of
              historical tours, escape rooms, mini golf opportunities, and more!
              Check back later for more info!
            </Typography>
          </FaqCard>

          <FaqCard question="How far away are WVTim's caches?">
            <Typography>
              <a
                target="_blank"
                href="https://www.geocaching.com/play/geotours/berkeley-gadgets"
              >
                WVTim's famous geocaches
              </a>{' '}
              in the eastern panhandle are about 2.5 hours east of Morgantown.
              Many of these geocaches are challenging to complete and could take
              several days to finish the entire GeoTour, assuming all caches are
              operational. If you're interested in finding gadget caches but
              don't want to make the drive to Berkley County, a brand new gadget
              GeoTour will be available closer to GeoWoodstock XXI in nearby
              Marion County starting in October.
            </Typography>
          </FaqCard>

          <FaqCard question="Is the New River Gorge Park worth visiting?">
            <Typography>
              America's newest National Park is well worth visiting if you find
              yourself in the southern half of the state. We highly recommend
              hiking the{' '}
              <a
                target="_blank"
                href="https://www.alltrails.com/trail/us/west-virginia/long-point"
              >
                Long Point Trail
              </a>{' '}
              and getting your picture taken with the longest single-arch bridge
              in the Western Hemisphere and 3rd longest single-arch bridge in
              the world!
            </Typography>
          </FaqCard>
        </Grid>
      </Section>

      <Section>
        <Typography textAlign="center">
          Can't find what you're looking for? Send us a message at{' '}
          <a href="mailto: info@GeoWoodstockXXI.com">
            info@GeoWoodstockXXI.com
          </a>{' '}
          and we will get back to you soon!
        </Typography>
      </Section>
    </Fragment>
  )
}
