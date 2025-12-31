import { Button, Grid, Typography } from '@mui/material'
import { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Section } from '../../components/Section'
import { useIsMobile } from '../../hooks/useIsMobile'
import { FaqCard } from '../Faqs/Faqs'
import { BoldKol } from '../Guide/CantMissExperiences/Counties'
import { CHARCOAL } from '../../constants/theme'
import { BigOrangeButton } from '../Guide/BigOrangeButton'
import { useTheme } from '@emotion/react'

function PictureCard({
  title,
  text,
  imgSrc,
  imgAlt,
}: {
  title: string
  text: React.ReactNode
  imgSrc: string
  imgAlt: string
}): JSX.Element {
  const isMobile = useIsMobile()

  if (isMobile) {
    return (
      <Fragment>
        <Grid item xs={4}>
          <img
            alt={imgAlt}
            src={imgSrc}
            style={{ maxWidth: '100%', aspectRatio: '1' }}
          />
        </Grid>
        <Grid item xs={8}>
          <div
            style={{
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              paddingLeft: '1rem',
            }}
          >
            <Typography
              variant="h3"
              fontSize="1.4rem"
              textAlign="start"
              marginBottom="0.6rem"
            >
              {title}
            </Typography>
            <Typography>{text}</Typography>
          </div>
        </Grid>
      </Fragment>
    )
  }

  return (
    <Fragment>
      <Grid item xs={3}>
        <img
          alt={imgAlt}
          src={imgSrc}
          style={{ maxWidth: '100%', aspectRatio: '1' }}
        />
      </Grid>
      <Grid item xs={9}>
        <div
          style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            paddingLeft: '1rem',
          }}
        >
          <Typography
            variant="h3"
            fontSize="1.6rem"
            textAlign="start"
            marginBottom="0.6rem"
          >
            {title}
          </Typography>
          <Typography>{text}</Typography>
        </div>
      </Grid>
    </Fragment>
  )
}

// function NonPictureCard({
//   title,
//   children,
// }: {
//   title: string
//   children: React.ReactNode
// }): JSX.Element {
//   const isMobile = useIsMobile()

//   return (
//     <Grid item xs={6}>
//       <div
//         style={{
//           borderRadius: '12px',
//           padding: '0rem 0.6rem',
//           height: '100%',
//           textAlign: 'left',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         <Typography
//           variant="h3"
//           fontSize={isMobile ? '1.4rem' : '1.6rem'}
//           fontWeight="bold"
//           textAlign="center"
//           marginTop="0.8rem"
//           marginBottom="0.6rem"
//         >
//           {title}
//         </Typography>
//         {children}
//       </div>
//     </Grid>
//   )
// }

export function Register(): JSX.Element {
  const isMobile = useIsMobile()
  const { palette } = useTheme()

  const sectionStyles: React.CSSProperties = isMobile
    ? {
        textAlign: 'center',
        flexDirection: 'column',
        padding: '12px',
        maxWidth: 'calc(100% - 24px)',
        alignItems: 'center',
      }
    : { flexDirection: 'column', alignItems: 'center' }

  return (
    <Fragment>
      <Helmet>
        <title>GeoWoodstock XXI - Registration and SWAG Packages</title>
        <meta
          name="description"
          content="GeoWoodstock XXI is a free-to-attend event, but registering everyone in your party helps the event organizers prepare for an accurate number of attendees. Paid registration options are also available for additional activities such as the Country Roads Challenge and catered lunch. In addition to activities, paid registration options also include souvenirs to remember your time in Almost Heaven such as trackable Geocoins, Pathtags, a shirt, and much more. Not only are these nice keepsakes from the event, but your financial contribution helps ensure GeoWoodstock XXI will be the best event possible. Check out what’s available below, and when you’re ready, click the Shop icon above to visit our store. Registration options will be available starting October 11, 2024, and end in February 2025."
        />
      </Helmet>

      <Typography variant="h2" textAlign="center" marginTop="2rem">
        Registration & SWAG Packages
      </Typography>

      <Section style={sectionStyles}>
        <Typography>
          CacheMore 2026 is free to attend, but SWAG sales such as Geocoins,
          shirts, and Pathtags help fund the event and all additional
          activities. Registration for this year’s event will open on January 1,
          2026 and close on June 5, 2026, while supplies last. To maintain
          demand for the inaugural event, team registration packages are
          extremely limited and are expected to sell out quickly. Items found
          within registration packages will be required to participate in some
          of the weekend’s activities such as the Tech Team and Trading Card
          Challenges. By registering, you are paying for not only the unique
          souvenirs from the event, but also the opportunity to participate in
          one of the most immersive Geocaching activities there is.
        </Typography>
        <br />
        <Typography textAlign="start" width="100%">
          A few important things to note:
        </Typography>
        <ul style={{ textAlign: 'start', margin: '0.5rem 4px' }}>
          <li>
            <Typography>
              Pre-ordered SWAG is ONLY available for in-person pickup on Friday
              (6/26) and Saturday (6/27) at Mylan Park in Morgantown, WV. If you
              are unable to attend, you can designate another attendee to pick
              up your package on your behalf. Registration packages will not be
              shipped after the event.
            </Typography>
          </li>
          <li>
            <Typography>
              Each registration option has a maximum capacity of about 100
              registrants and are expected to sell out before the June 5
              deadline. It’s highly recommended to register early, and select
              the same team as those you are traveling with to get the best
              experience possible.
            </Typography>
          </li>
          <li>
            <Typography>
              If you previously made a purchase, but want to buy additional
              items, please use the same name and contact information and we
              will include all items together during package pickup.
            </Typography>
          </li>
          <li>
            <Typography>
              All sales are final and no refunds will be issued for any reason.
            </Typography>
          </li>
        </ul>

        <Button
          target="_blank"
          href="https://cachemore.store/collections/cachemore-2026"
          variant="contained"
          color="warning"
          sx={{
            marginTop: '0.5rem',
            borderRadius: '64px',
            fontWeight: 'bold',
            fontSize: '1.4rem',
            textAlign: 'center',
            maxWidth: '480px',
          }}
        >
          Click here to visit the store
        </Button>
      </Section>

      <Section style={{ ...sectionStyles, textAlign: 'start' }}>
        <Typography variant="h3">About Registration Options</Typography>
        <Typography textAlign="justify">
          This year, there are three registration options: General registration,
          team registration, and team +1 registration. These options are
          comparable to the general registration, VIP registration, and VIP +1
          registration found at other events.
        </Typography>
        <br />
        <Typography textAlign="justify">
          <BoldKol>General registration</BoldKol> is ideal for those visiting
          for a single day, families, kids, spouses, or anyone who’d rather
          spend the weekend finding existing caches around Morgantown instead of
          cracking the code ... yes, even muggles are welcome. This is a great
          way to support the event without the commitment of having to
          participate in all the weekend’s activities. General Registration does
          not include the components needed to solve all of the weekend’s
          puzzles. For access to exclusive items and the full mystery
          experience, be sure to register with a team.
        </Typography>
        <br />
        <Typography textAlign="justify">
          <BoldKol>Team registration</BoldKol> is our signature registration
          option, giving attendees the opportunity to dive head first into the
          mystery of the event. Both Team Nexus (blue) and Team Byte (red)
          registration options contain the necessary clues, Geocoins, and
          information required to participate in all activities throughout the
          weekend. Each of these packages contain Geocoins, shirts, and
          flashtags that are unique to that team. In addition, we are
          encouraging participants to lean into their team flare by wearing
          their team colors throughout the weekend, signing logs in their team
          color, and dressing up for the{' '}
          <a target="_blank" href="http://coord.info/GCBFQRD">
            Signal Symposium (GCBFQRD)
          </a>{' '}
          event!
        </Typography>
        <br />
        <Typography textAlign="justify">
          <BoldKol>Team + 1 registration</BoldKol> is best for those individuals
          or couples who want to do it all! As a Double-Crossed Agent, you’ll
          sleuth clues from both teams, giving you unmatched flexibility and
          insight across the entire event. It’s perfect for couples or partners
          and functions as a VIP +1 option for those who truly want to do it
          all. This package includes every Geocoin, every Pathtag, the event
          shirt, and additional exclusive items, making you the ultimate cacher
          for CacheMore 2026. If you're a Geocoin or Pathtag collector, you
          won't want to miss this exclusive registration option.
        </Typography>
      </Section>

      <Section style={{ flexDirection: 'column' }}>
        <Typography variant="h3">Join a Tech Team!</Typography>
        <Typography>
          Tech Teams are a fun way to dive into the event’s mystery. Teams are
          color-based factions rather than fixed small groups. You may
          collaborate with anyone on your team (or outside of it) throughout the
          weekend. Registering as part of Team Nexus or Team Byte is required
          for completion of the{' '}
          <a href="/events/2026/teams">Tech Team Challenge</a>.
        </Typography>

        <br />

        <Grid container alignItems="center">
          <Grid
            item
            xs={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img
              src="/home/nexus.png"
              style={{
                width: '60%',
                aspectRatio: 1,
                borderRadius: '8px',
                border: `2px solid ${CHARCOAL}`,
                boxShadow: `0 0 12px 4px ${CHARCOAL}88`,
              }}
            />
          </Grid>
          <Grid
            item
            xs={10}
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Typography>
              Team Nexus is for the masterminds of CacheMore 2026; the thinkers,
              code-breakers, and puzzle fanatics who live for a challenge. As
              the brains of the operation, Team Nexus thrives on logic,
              late-night “aha” moments, and bonding over complex puzzles that
              demand teamwork and strategy.
            </Typography>
            <br />
            <BigOrangeButton href="https://cachemore.store/products/register1">
              Click here to join team Nexus
            </BigOrangeButton>
          </Grid>
        </Grid>

        <br />
        <br />

        <Grid container alignItems="center">
          <Grid
            item
            xs={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img
              src="/home/byte.png"
              style={{
                width: '60%',
                aspectRatio: 1,
                borderRadius: '8px',
                border: `2px solid ${CHARCOAL}`,
                boxShadow: `0 0 12px 4px ${CHARCOAL}88`,
              }}
            />
          </Grid>
          <Grid
            item
            xs={10}
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Typography>
              Team Byte is for the doers, the drivers, and the get-it-done crews
              of CacheMore 2026. They’re the muscle of the operation, never
              afraid of a tough task, a long drive, or a challenge that requires
              boots on the ground. If there’s a clue to chase or a cache to
              grab, Team Byte is already on the move, ready to take a byte out
              of the competition.
            </Typography>
            <br />
            <BigOrangeButton href="https://cachemore.store/products/register2">
              Click here to join team Byte
            </BigOrangeButton>
          </Grid>
        </Grid>

        <br />
        <br />

        <Grid container alignItems="center">
          <Grid
            item
            xs={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img
              src="/home/doublecrossed.png"
              style={{
                width: '60%',
                aspectRatio: 1,
                borderRadius: '8px',
                border: `2px solid ${CHARCOAL}`,
                boxShadow: `0 0 12px 4px ${CHARCOAL}88`,
              }}
            />
          </Grid>
          <Grid
            item
            xs={10}
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Typography>
              Become a Double-Crossed Agent for the ultimate CacheMore 2026
              experience. This is an elite, all-access package for those who
              refuse to miss a single clue or challenge. Built for die-hard
              CacheMore fans, this premium option ensures there’s no cache you
              can’t find and no puzzle you can’t solve.
            </Typography>
            <br />
            <BigOrangeButton href="https://cachemore.store/products/register1">
              Click here to become a Double-Crossed Agent
            </BigOrangeButton>
          </Grid>
        </Grid>
      </Section>

      <Section
        sx={{ backgroundColor: palette.grey[200], flexDirection: 'column' }}
      >
        <Typography variant="h3">Exciting Extras!</Typography>
        <br />
        <Grid container gap={isMobile ? '3rem' : ''}>
          <Grid
            item
            md={6}
            xs={12}
            display="flex"
            flexDirection="column"
            alignItems="center"
            padding="0 2rem"
            gap="1.2rem"
          >
            <img
              src="/register/trading.png"
              style={{
                width: '80%',
                maxWidth: '320px',
                borderRadius: '8px',
                aspectRatio: 1,
                boxShadow: `0 0 12px 4px ${CHARCOAL}88`,
              }}
            />
            <Typography textAlign="justify">
              CacheMore Trading Cards let you show off your team spirit while
              becoming part of the CacheMore 2026 mystery. By creating a
              CacheMore trading card, your card will be randomly dispersed in
              registration packages and placed in caches throughout the weekend,
              weaving you directly into the story. You’ll also receive 200 of
              your own cards to swap, trade, and share with other attendees.
              Each card will be trackable, making them the perfect souvenir to
              drop in caches all year long.
            </Typography>
            <BigOrangeButton href="https://cachemore.store/products/trading-cards">
              Click here to get started
            </BigOrangeButton>
          </Grid>

          <Grid
            item
            md={6}
            xs={12}
            display="flex"
            flexDirection="column"
            alignItems="center"
            padding="0 2rem"
            gap="1.2rem"
          >
            <img
              src="/register/friends.png"
              style={{
                width: '80%',
                maxWidth: '320px',
                borderRadius: '8px',
                aspectRatio: 1,
                boxShadow: `0 0 12px 4px ${CHARCOAL}88`,
              }}
            />
            <Typography textAlign="justify">
              CacheMore, and all the unique experiences we are able to provide,
              wouldn't be possible without the gracious support from our caching
              community. Become a Friend of CacheMore to receive a
              limited-edition CacheMore 2026 trackable Geocoin, as well as some
              bonus hints to the weekend mystery that you won't find anywhere
              else. In addition, your name will also be added to our website as
              well as on select signage at the event.
            </Typography>
            <BigOrangeButton href="https://cachemore.store/products/trading-cards">
              Become a Friend of CacheMore
            </BigOrangeButton>
          </Grid>
        </Grid>
      </Section>

      <Section style={{ flexDirection: 'column' }}>
        <Typography variant="h3" marginBottom="1.4rem">
          Frequently Asked Questions
        </Typography>
        <Grid container>
          <FaqCard question="Do I need to register for CacheMore 2026?">
            <Typography>
              While this is a free-to-attend event, your support is greatly
              appreciated. No purchase is necessary, but participation in select
              activities throughout the event will require registering for a
              team.
            </Typography>
          </FaqCard>
          <FaqCard question="Does it matter which team I am on?">
            <Typography>
              Nope! Registering for a team is a great way to get involved in all
              the event’s activities and collect unique SWAG produced for the
              event. Both teams will have an equal opportunity to participate,
              but it’s recommended to pick a team based on your caching style,
              friend group, or hotel location.
            </Typography>
          </FaqCard>
          <FaqCard question="Which team is best for me?">
            <Typography>
              In general, Team Nexus is designed for those who enjoy puzzles.
              All locations designed for Team Nexus will be handicap accessible.
              Team Byte is designed for those who enjoy challenges; boots on the
              ground operations that may be more physically than mentally
              challenging. When in double, registering as a Double-Crossed agent
              ensures your best chance at collecting all the clues you need to
              solve the weekend’s mystery.
            </Typography>
          </FaqCard>
          <FaqCard question="Can I switch teams?">
            <Typography>
              No. Once you have selected a registration option, you will not
              have the ability to switch, transfer, or refund the registration.
              If you purchased a general registration, but would like to upgrade
              to a team registration, please contact{' '}
              <a href="mailto:info@CacheMore.com">info@CacheMore.com</a>.
            </Typography>
          </FaqCard>
          <FaqCard question="When and where can I pick up my registration package?">
            <Typography>
              Registration packages can be picked up on Friday (6/26) from 10 am
              to 12 pm at the{' '}
              <a target="_blank" href="http://coord.info/GCBFQRA">
                Mainframe Meet & Greet (GCBFQRA)
              </a>{' '}
              event, from 6 pm to 8 pm at{' '}
              <a target="_blank" href="http://coord.info/GCBFQRD">
                The Signal Symposium (GCBFQRD)
              </a>
              , or on Saturday (6/27) from 10 am to 4 pm at the{' '}
              <a target="_blank" href="http://coord.info/GCBEBMA">
                main event (GCBEBMA)
              </a>
              .
            </Typography>
          </FaqCard>
          <FaqCard question="How do I get my Friends of CacheMore Geocoin or Trading Cards?">
            <Typography>
              Trading cards and Friends of CacheMore coins will be available for
              pickup along with registration packages at Mylan Park.
            </Typography>
          </FaqCard>

          <FaqCard question="Can someone else pick up my registration package for me?">
            <Typography>
              With expressed permission from the individual who purchased the
              package, SWAG can be picked up by others if you are unable to
              attend the event. Registration packages will not be mailed out.
            </Typography>
          </FaqCard>
          <FaqCard question="When will the store close?">
            <Typography>
              The final day to pre-order any SWAG items will be June 5. Some
              items may be available in limited quantities at the event in June.
            </Typography>
          </FaqCard>
        </Grid>
        <Typography textAlign="center" padding="0.8rem">
          Questions about registration? Contact us at{' '}
          <a href="mailto:info@CacheMore.com">info@CacheMore.com</a>
        </Typography>
      </Section>
    </Fragment>
  )
}
