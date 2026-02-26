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
      <Accordion sx={{ width: '90%', maxWidth: '98%', height: 'fit-content' }}>
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
        <title>CacheMore 2026 - Frequently Asked Questions</title>
        <meta
          name="description"
          content="Not finding what you need? Frequently asked questions answered here! Check this page for more information about the upcoming geocaching mega event in Morgantown, West Virginia - CacheMore 2026"
        />
      </Helmet>

      <Typography variant="h2" textAlign="center" marginTop="2rem">
        {isMobile ? 'FAQS' : 'FREQUENTLY ASKED QUESTIONS'}
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Typography textAlign="center" width="80%">
          The hosts of GeoWoodstock XXI are excited to offer a new type of
          event, CacheMore, but with that, surely come some questions. We’re
          here to help! Here’s a list of the top questions asked so far. Can’t
          find what you’re looking for? Send us a message at{' '}
          <a href="mailto:info@CacheMore.com">info@CacheMore.com</a>, and we’ll
          get back to you soon!
        </Typography>
      </div>

      <Section sx={{ flexDirection: 'column', gap: '2rem' }}>
        <Typography
          variant="h3"
          textAlign="center"
          sx={{ fontSize: { xs: '2.4rem', md: '3rem' } }}
        >
          Event Information
        </Typography>

        <Grid container>
          <FaqCard question="What is CacheMore?">
            <Typography>
              CacheMore is a Geocaching-focused event series designed to bring
              geocachers together for unique experiences that blend creativity,
              puzzles, exploration, and community. Each year offers a fresh
              theme, new challenges, and special activities that help
              participants discover more, connect more, and cache more.
            </Typography>
          </FaqCard>

          <FaqCard question="Where is CacheMore 2026?">
            <Typography>
              CacheMore 2026 will be held in Morgantown, West Virginia, bringing
              Geocachers back to the wild and wonderful state with a new twist.
              Even if you attended GeoWoodstock XXI, there will be plenty of new
              reasons to return. Besides, surely you didn’t find all the caches
              in Morgantown, did you?
            </Typography>
          </FaqCard>

          <FaqCard question="Is this going to be an annual event?">
            <Typography>
              The CacheMore Crew hopes to make this an annual event. While
              future events depend on community interest and local support, the
              intention is to continue growing CacheMore into a recurring
              highlight on every Geocacher’s calendar. The date and location
              will likely fluctuate based on availability and preference.
            </Typography>
          </FaqCard>

          <FaqCard question="Will each year have a new theme?">
            <Typography>
              Yep! Each season of CacheMore will have a new theme, and with that
              comes new challenges, puzzles, and activities. From forging the
              digital frontier to a mystery by the campfire, we have some
              exciting things in store. Of course, none of this would be
              possible without our wonderful attendees joining us for these
              unique experiences, so as long as you keep coming, we’ll keep
              hosting!
            </Typography>
          </FaqCard>

          <FaqCard question="Is this a puzzle event?">
            <Typography>
              At its core, CacheMore is an event designed to connect our caching
              community through various challenges, activities, and, of course,
              puzzles. While not solely a puzzle event, there will be plenty of
              fun for puzzlers and non-puzzlers alike!
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
          Logistics & Attendance
        </Typography>

        <Grid container>
          <FaqCard question="Is there a fee to attend?">
            <Typography>
              CacheMore is a completely free-to-attend event and is open to the
              community. However, participation in the team challenge and some
              activities is only possible by registering for the event. While
              not required, game pieces found within registration packages will
              be imperative for cracking the mystery of the event and getting
              the full experience. Registration is highly recommended.
            </Typography>
          </FaqCard>

          <FaqCard question="Are pets allowed?">
            <Typography>
              While pets are welcome to attend, we ask cachers to be realistic
              with the needs of their pets. If any animals are disruptive or
              cause problems for other attendees, you will be asked to leave.
              Some locations highlighted throughout the event weekend, such as
              businesses, coffee shops, and restaurants, are not pet-friendly,
              so please keep that in mind if you are planning on participating
              in all event activities.
            </Typography>
          </FaqCard>

          <FaqCard question="Is the event wheelchair accessible?">
            <Typography>
              Yes! Mylan Park is wheelchair accessible, and some ADA parking
              spaces will be available on a first-come, first-served basis at
              the main event entrance. No preferred parking options will be
              available for the event, but there is plenty of available parking
              nearby.
            </Typography>
          </FaqCard>

          <FaqCard question="Is there a host hotel?">
            <Typography>
              We’ve partnered with four hotels in the Morgantown area to provide
              room blocks and discounted rates to CacheMore attendees. Check out
              our <a href="/events/2026/travel">Travel & Lodging</a> section to
              learn more. Staying in these host hotels isn’t required, but it
              may provide additional fun based on the theme.
            </Typography>
          </FaqCard>

          <FaqCard question="Can I camp at CacheMore 2026?">
            <Typography>
              Absolutely! The{' '}
              <a href="/events/2026/travel">KOA at Mylan Park</a> is located
              only steps away from the event, and with brand new facilities,
              this is a great option that we anticipate filling up quickly.
              Other primitive camping opportunities exist at{' '}
              <a href="https://wvstateparks.com/parks/coopers-rock-state-forest/lodging/camping-at-coopers-rock-state-forest/">
                Coopers Rock State Forest
              </a>{' '}
              and{' '}
              <a href="https://sandspringscampgroundwv.com">
                Sand Springs Campground
              </a>
              .
            </Typography>
          </FaqCard>

          <FaqCard question="How many days should I plan to attend?">
            <Typography>
              We recommend arriving in the area on Thursday (6/25) evening to be
              ready for the kickoff on Friday (6/26) morning. From there, you’ll
              want to stay until Sunday (6/28) to experience all the activities
              the event has to offer.
            </Typography>
          </FaqCard>

          <FaqCard question="Can I host my own event during the weekend?">
            <Typography>
              Our team has worked diligently to craft a unique experience to
              benefit both the local community and attendees alike. Please don’t
              threaten the integrity of the event by hosting ‘flash-mobs’ or
              other casual pop-up events in the week before or after the main
              event. Thank you.
            </Typography>
          </FaqCard>

          <FaqCard question="Can I bring my family?">
            <Typography>
              CacheMore will be fun for the whole family! Even if Geocaching
              isn’t their thing, there are tons of fun opportunities to enjoy
              while participating in various event activities.
            </Typography>
          </FaqCard>

          <FaqCard question="Do I need to be tech-savvy?">
            <Typography>
              Even though this year’s theme will have you diving into the
              digital realm, all activities can be enjoyed the old-fashioned
              way, too. You will want to bring your smartphone to complete
              adventure lab stages and stay up to date on various activities,
              but a laptop or other specialized technology won’t be required
              (though you’re more than welcome to bring it)!
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
          Participation & Activities
        </Typography>

        <Grid container>
          <FaqCard question="Why do I need to log a ‘Will Attend’?">
            <Typography>
              Logging a Will Attend helps event organizers best prepare for the
              anticipated crowd at the event. Not only does this help with
              planning, but it also keeps you up to date with announcements and
              information, which will be emailed directly to you. If you’re
              traveling with a family or a group, please have each active player{' '}
              <a href="https://www.geocaching.com/live/geocache/GCBEBMA/log">
                log a Will Attend
              </a>{' '}
              on the event page so that we can best estimate our expected
              attendance.
            </Typography>
          </FaqCard>

          <FaqCard question="Can I volunteer at the event?">
            <Typography>
              At this time, we’re not expecting a huge need for volunteer
              efforts. While we love and appreciate the community’s willingness
              to help, we want everyone to get to enjoy the unique experience
              we’ve prepared. Help spread the word and recruit your crew for an
              unforgettable weekend of fun in Morgantown!
            </Typography>
          </FaqCard>

          <FaqCard question="Will there be new caches placed?">
            <Typography>
              In addition to the hundreds of nearby Geocaches, 50 new adventure
              labs, and 10 gadget caches will be published throughout the event
              weekend … along with a few … surprises.
            </Typography>
          </FaqCard>

          <FaqCard question="What types of puzzles can I expect?">
            <Typography>
              We can’t give everything away now, can we? Event puzzles are
              designed to be completed throughout the event weekend without
              extensive outside knowledge, similar to an escape room. If you
              want to warm up your brain, check out our{' '}
              <a href="/events/2026/puzzles">pre-event puzzles</a>!
            </Typography>
          </FaqCard>

          <FaqCard question="Will I still have a good time if I’m bad at puzzles?">
            <Typography>
              Absolutely! While the main storyline of the event will revolve
              around a central puzzle with clues throughout the weekend, you’ll
              still have a great time exploring Morgantown, completing the
              GeoTour, and finding the hundreds of nearby Geocaches.
            </Typography>
          </FaqCard>
        </Grid>
      </Section>

      {/* <Section>
        <Typography textAlign="center">
          Can't find what you're looking for? Send us a message at{' '}
          <a href="mailto: info@GeoWoodstockXXI.com">
            info@GeoWoodstockXXI.com
          </a>{' '}
          and we will get back to you soon!
        </Typography>
      </Section> */}
    </Fragment>
  )
}
