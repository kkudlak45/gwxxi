import { Grid, Typography } from '@mui/material'
import { Fragment } from 'react/jsx-runtime'
import { useIsMobile } from '../../hooks/useIsMobile'
import { GuideHeader } from './GuideHeader'
import { GuideBody } from './GuideBody'
import {
  CANT_MISS_EXPERIENCES_PAGES,
  EVENT_ACTIVITIES_PAGES,
  EVENT_INFORMATION_PAGES,
  EventGuidePage,
  EXPLORING_MORGANTOWN_PAGES,
} from './pages'

function PageList({
  title,
  pages,
}: {
  title: string
  pages: EventGuidePage[]
}) {
  return (
    <Grid
      item
      xs={12}
      md={6}
      justifyContent="center"
      alignItems="flex-start"
      display="flex"
      marginBottom="1rem"
    >
      <div
        style={{
          width: '100%',
          maxWidth: '400px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h3" fontSize="1.4rem">
          {title}
        </Typography>
        <ul>
          {pages.map((p) => {
            const useSubRoute = !!p.component
            return (
              <li>
                <a href={useSubRoute ? `/guide/${p.route}` : p.route}>
                  <Typography>{p.title}</Typography>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </Grid>
  )
}

export function Guide() {
  const isMobile = useIsMobile()

  return (
    <Fragment>
      <GuideHeader
        title="official geowoodstock xxi event guide"
        subTitle="We can't wait to welcome you to West Virginia!"
      />

      <GuideBody>
        <Typography>
          Welcome to Wild & Wonderful GeoWoodstock XXI - America's 2nd GIGA
          event! Whether this is your first event or 100th, we can't wait to
          welcome you to the Mountain State and showcase everything that makes
          Appalachia special. This resource will serve as your guide to
          everything happening throughout the weekend, so please take the time
          to review all the information and bookmark this page so you can come
          back to it later.
        </Typography>

        <div style={{ height: '1rem' }} />

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/t4rLKTv-HZ0?si=Oi1Ybty4EQ-fmV5a&amp;autoplay=1&amp;mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            maxWidth: "100%",
            padding: isMobile ? '0px 8px' : '0px 8px 0px 16px',
            width: isMobile ? 'calc(100% - 32px)' : 'calc(60% - 24px)',
          }}
        ></iframe>

        <div style={{ height: '1rem' }} />

        <Typography>
          Below you’ll find several pages talking about specific topics relating
          to GeoWoodstock XXI weekend. Our{' '}
          <a
            target="_blank"
            href="https://www.facebook.com/groups/2150783441954120"
          >
            community group
          </a>{' '}
          on Facebook is also a fantastic resource to learn more and connect
          with other cachers. Got questions? Come see us at the information
          table located at the entrance to GeoWoodstock HQ to have any other
          questions answered. We're happy to help!
        </Typography>

        <div style={{ height: '3rem' }} />

        <Grid container>
          <PageList title="Event Information" pages={EVENT_INFORMATION_PAGES} />
          <PageList
            title="Can't Miss Experiences"
            pages={CANT_MISS_EXPERIENCES_PAGES}
          />
          <PageList
            title="Exploring Morgantown"
            pages={EXPLORING_MORGANTOWN_PAGES}
          />
          <PageList title="Event Activities" pages={EVENT_ACTIVITIES_PAGES} />
        </Grid>
      </GuideBody>
    </Fragment>
  )
}
