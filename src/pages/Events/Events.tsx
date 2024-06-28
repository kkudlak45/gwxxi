import { Grid, Typography, useTheme } from '@mui/material'
import { Section } from '../../components/Section'
import { Event, EventType, SCHEDULE } from './schedule'
import moment from 'moment'
import { Fragment } from 'react/jsx-runtime'
import { BLUE, CHARCOAL, GREEN } from '../../constants/theme'
import { useIsMobile } from '../../hooks/useIsMobile'
import { Helmet } from 'react-helmet'

function getIconSrc(type: EventType) {
  switch (type) {
    case EventType.CC:
      return `${import.meta.env.BASE_URL}eventicons/communitycelebration.png`
    case EventType.GIGA:
      return `${import.meta.env.BASE_URL}eventicons/giga.png`
    case EventType.MEGA:
      return `${import.meta.env.BASE_URL}eventicons/mega.png`
    case EventType.GPS:
      return `${import.meta.env.BASE_URL}eventicons/gps.jpg`
    case EventType.LAB:
      return `${import.meta.env.BASE_URL}eventicons/lab.png`
    case EventType.CITO:
      return `${import.meta.env.BASE_URL}eventicons/cito.png`
    case EventType.EVENT:
      return `${import.meta.env.BASE_URL}eventicons/event.png`
    default:
      return `${import.meta.env.BASE_URL}eventicons/calendar.png`
  }
}

function EventBlock({
  event,
  showBottom,
}: {
  event: Event
  showBottom: boolean
}) {
  const isMobile = useIsMobile()

  return (
    <Fragment>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: isMobile ? 'center' : 'space-between',
          padding: '0.6rem 0',
          borderBottom: showBottom
            ? isMobile
              ? undefined
              : `2px solid ${CHARCOAL}`
            : undefined,
        }}
      >
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <img
            alt={`the geocaching ${event.type} icon`}
            src={getIconSrc(event.type)}
            style={{
              width: '4rem',
              aspectRatio: 1,
              borderRadius: '4rem',
              border: `4px solid ${CHARCOAL}`,
              padding: '4px',
            }}
          />

          <div
            style={{ width: '100%', display: isMobile ? 'none' : undefined }}
          >
            <Typography
              fontSize="1.4rem"
              fontFamily="KGRedhands"
              fontWeight="bold"
              paddingBottom="0.1rem"
              textTransform="uppercase"
            >
              {event.name}
            </Typography>
            <Typography width="100%" textAlign="justify">
              {event.description}
            </Typography>
          </div>
        </div>

        <div
          style={{
            minWidth: '200px',
            display: 'flex',
            alignItems: isMobile ? 'center' : 'flex-end',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {event.startTime ? (
            <Fragment>
              <Typography fontSize="1.3rem" fontWeight="bold">
                {moment.unix(event.startTime).format('dddd (MM/DD)')}
              </Typography>
              <div style={{ display: 'flex' }}>
                <Typography>
                  {moment.unix(event.startTime).format('hh:mm A')}
                  {event.endTime &&
                    ` - ${moment.unix(event.endTime).format('hh:mm A')}`}
                </Typography>
              </div>
            </Fragment>
          ) : (
            <Typography fontSize="1.4rem">Various Times</Typography>
          )}
        </div>
      </div>

      <div
        style={{
          width: '100%',
          display: isMobile ? undefined : 'none',
          paddingBottom: '1rem',
          borderBottom: showBottom ? `2px solid ${CHARCOAL}` : undefined,
        }}
      >
        <Typography
          fontSize="1.4rem"
          fontFamily="KGRedhands"
          fontWeight="bold"
          paddingBottom="0.1rem"
          textAlign="center"
        >
          {event.name}
        </Typography>
        <Typography width="100%" textAlign="center">
          {event.description}
        </Typography>
      </div>
    </Fragment>
  )
}

export function Events() {
  const { palette } = useTheme()
  const isMobile = useIsMobile()

  return (
    <Fragment>
      <Helmet>
        <title>GeoWoodstock XXI - Events and Activities</title>
        <meta
          name="description"
          content="Check here for a list of all the fun events and activities to participate in and around Morgantown during the weekend of GeoWoodstock XXI"
        />
      </Helmet>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '0px 8px',
        }}
      >
        <Typography variant="h2" textAlign="center" marginTop="2rem">
          EVENTS & ACTIVITES
        </Typography>
        <Typography textAlign="center" fontSize="1.2rem" marginTop="0.8rem">
          With 8 events spanning from Thursday (5/22) to Sunday (5/25), there's
          never a dull moment when caching in West Virginia. Explore an
          18th-century reconstructed fort, listen to some authentic mountain
          music, or enjoy a craft brew with your caching buddies - the
          possibilities are endless!{' '}
          <em>Side events will be available starting January 1, 2025.</em>
        </Typography>

        <Section sx={{ flexDirection: 'column' }}>
          {SCHEDULE.map((event, index) => (
            <EventBlock
              key={event.description}
              event={event}
              showBottom={index < SCHEDULE.length - 1}
            />
          ))}
          <Typography
            textAlign="center"
            lineHeight={isMobile ? '1rem' : '2rem'}
          >
            <em>
              Tentative schedule subject to change, check back for details.
            </em>
          </Typography>
        </Section>

        <Section
          sx={{
            backgroundColor: palette.grey[200],
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h2">OTHER ACTIVITIES</Typography>

          <Typography
            padding="0.6rem 0 1rem 0"
            fontSize="1.2rem"
            textAlign="center"
            lineHeight="1.4rem"
          >
            Consider checking out everything that makes North Central West
            Virginia unique! We've partnered with several <br /> local
            businesses to make your weekend in Appalachia unforgettable!
          </Typography>

          <Grid container rowGap="2rem">
            <Grid item xs={12} md={4} textAlign="center">
              <div
                style={{
                  margin: '0 2rem',
                  backgroundColor: GREEN,
                  borderRadius: '12px',
                  border: `1px solid ${CHARCOAL}`,
                  padding: '0.2rem 1rem',
                  height: '100%',
                }}
              >
                <Typography variant="h3" color="white" marginTop="1rem">
                  Cache Tours
                </Typography>
                <Typography paddingTop="0.6rem" textAlign="start" color="white">
                  Experience Appalachia from a local! Check back for curated
                  lists of caches great for kids, scenic hikes, must-grab
                  gadgets, and more!
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4} textAlign="center">
              <div
                style={{
                  margin: '0 2rem',
                  padding: '0.2rem 1rem',
                  height: '100%',
                }}
              >
                <img
                  alt="a man kayaking and a woman paddleboarding on the Monongahela river"
                  src={`${import.meta.env.BASE_URL}eventpictures/kayak.webp`}
                  style={{
                    aspectRatio: 4 / 3,
                    width: '100%',
                    borderRadius: '12px',
                    border: `2px solid ${CHARCOAL}`,
                  }}
                />
                <Typography paddingTop="0.6rem" textAlign="justify">
                  It's not Wild and Wonderful without getting a little wet! For
                  the true terrain junkie, check out the{' '}
                  <a
                    target="_blank"
                    href="https://marioncvb.com/blog/float-geocache-trail/"
                  >
                    Fairmont Land or Aquatic Trail
                  </a>{' '}
                  (F.L.O.A.T. for short)! This 32-piece wherigo geo-art will
                  have you kayaking down the Mon River and hiking the trails
                  around Prickett's Fort State Park. Upon completion of either
                  the land or aquatic sections, you'll earn a limited-edition
                  pathtag!
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4} textAlign="center">
              <div
                style={{
                  margin: '0 2rem',
                  padding: '0.2rem 1rem',
                  height: '100%',
                }}
              >
                <img
                  alt="a family playing mini golf at Coal Country Mini Golf"
                  src={`${import.meta.env.BASE_URL}eventpictures/golf.webp`}
                  style={{
                    aspectRatio: 4 / 3,
                    width: '100%',
                    borderRadius: '12px',
                    border: `2px solid ${CHARCOAL}`,
                  }}
                />
                <Typography paddingTop="0.6rem" textAlign="justify">
                  {
                    'Looking for fun for the whole family? Check out one of two unique mini-golf courses in the area! '
                  }
                  <a
                    style={{ color: BLUE }}
                    target="_blank"
                    href="https://marioncvb.com/company/coal-country-miniature-golf-batting-cages/"
                  >
                    Coal Country Mini Golf
                  </a>
                  {
                    " in Fairmont features 18 coal-mining-themed holes. You'll be putting your way through mine shafts and supports, but don't get your ball stuck in a coal trap! Another unique mini golf course is "
                  }
                  <a
                    style={{ color: BLUE }}
                    target="_blank"
                    href="https://visitmountaineercountry.com/business/cryptid-mountain-miniature-golf/"
                  >
                    Cryptid Mountain Mini Golf
                  </a>
                  {
                    '. This 13-hole indoor course features the legends and lore of what might be hiding in the West Virginia woods (besides caches of course!). Watch out for the Mothman!'
                  }
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Section>
      </div>
    </Fragment>
  )
}
