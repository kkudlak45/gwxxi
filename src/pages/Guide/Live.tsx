import { Fragment } from 'react/jsx-runtime'
import { GuideBody } from './GuideBody'
import { GuideHeader } from './GuideHeader'
import { Subheader } from './Subheader'
import { Tab, Tabs, Typography, useTheme } from '@mui/material'
import { BigOrangeButton } from './BigOrangeButton'
import { useEffect, useMemo, useState } from 'react'
import { CHARCOAL } from '../../constants/theme'
import moment from 'moment'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import './Live.css'

function GCLink({ gcCode }: { gcCode: string }): JSX.Element {
  return (
    <a target="_blank" href={`https://coord.info/${gcCode}`}>
      {gcCode}
    </a>
  )
}

function hours(n: number): number {
  return n * 60 * 60
}

const START_TS = 1747281600 // set this to 00:00 thursday

type EventNameAndTime = {
  name: React.ReactNode
  startTimeOffset: number
  endTimeOffset?: number
}

const THURSDAY: EventNameAndTime[] = [
  {
    name: (
      <Typography>
        Country Roads Challenge Kickoff Event (
        <GCLink gcCode="GCANXX0" />)
      </Typography>
    ),
    startTimeOffset: hours(8),
    endTimeOffset: hours(12),
  },
  {
    name: <Typography>Country Roads Challenge caches publish</Typography>,
    startTimeOffset: hours(10),
  },
  {
    name: (
      <Typography>
        CITO the Line (<GCLink gcCode="GCANXX2" />)
      </Typography>
    ),
    startTimeOffset: hours(16),
    endTimeOffset: hours(18) - 1,
  },
  {
    name: (
      <Typography>
        Mountain Music (<GCLink gcCode="GCANXX3" />)
      </Typography>
    ),
    startTimeOffset: hours(18),
    endTimeOffset: hours(20),
  },
]

const FRIDAY: EventNameAndTime[] = [
  {
    name: (
      <Typography>
        Almost Heaven Adventures (
        <GCLink gcCode="GCANXX5" />)
      </Typography>
    ),
    startTimeOffset: hours(8 + 24),
    endTimeOffset: hours(12 + 24),
  },
  {
    name: <Typography>VIPs & Friends of GeoWoodstock Sneak Peek</Typography>,
    startTimeOffset: hours(8 + 24),
    endTimeOffset: hours(10 + 24),
  },
  {
    name: (
      <Typography>
        GPS Adventures Maze Exhibit (<GCLink gcCode="GCANAAA" />)
      </Typography>
    ),
    startTimeOffset: hours(8 + 24),
    endTimeOffset: hours(15 + 24),
  },
  {
    name: <Typography>Wharf Adventure Puzzle Publishes</Typography>,
    startTimeOffset: hours(10 + 24),
  },
  {
    name: <Typography>General Admission to GeoWoodstock HQ</Typography>,
    startTimeOffset: hours(10 + 24),
    endTimeOffset: hours(15 + 24),
  },
  {
    name: (
      <Typography>
        Woodstock On The Wharf (<GCLink gcCode="GCATNZJ" />)
      </Typography>
    ),
    startTimeOffset: hours(16 + 24),
    endTimeOffset: hours(20 + 24),
  },
]

const SATURDAY: EventNameAndTime[] = [
  {
    name: (
      <Typography>
        GeoWoodstock XXI opens (<GCLink gcCode="GCANXX1" />)
      </Typography>
    ),
    startTimeOffset: hours(8 + 2 * 24),
  },
  {
    name: (
      <Typography>
        GPS Adventures Maze Exhibit opens (<GCLink gcCode="GCANAAA" />)
      </Typography>
    ),
    startTimeOffset: hours(8 + 2 * 24),
  },
  {
    name: <Typography>Speaker Series: Puzzle Factory</Typography>,
    startTimeOffset: hours(9 + 2 * 24),
  },
  {
    name: <Typography>Group Photo</Typography>,
    startTimeOffset: hours(10 + 2 * 24),
  },
  {
    name: <Typography>Speaker Series: Earthcache Writing 101</Typography>,
    startTimeOffset: hours(11 + 2 * 24),
  },
  {
    name: <Typography>Lunch</Typography>,
    startTimeOffset: hours(11 + 2 * 24),
    endTimeOffset: hours(14 + 2 * 24),
  },
  {
    name: <Typography>Speaker Series: Geocaching 201</Typography>,
    startTimeOffset: hours(12 + 2 * 24),
  },
  {
    name: <Typography>Speaker Series: Treasures of our Town LIVE</Typography>,
    startTimeOffset: hours(12 + 2 * 24) + 15 * 60,
  },
  {
    name: <Typography>Speaker Series: County Caching Panel</Typography>,
    startTimeOffset: hours(13 + 2 * 24),
  },
  {
    name: <Typography>Speaker Series: Introduction to Pathtags</Typography>,
    startTimeOffset: hours(14 + 2 * 24),
  },
  {
    name: <Typography>Speaker Series: Gadget Caches</Typography>,
    startTimeOffset: hours(14 + 2 * 24) + 15 * 60,
  },
  {
    name: <Typography>Speaker Series: Challenge Chat</Typography>,
    startTimeOffset: hours(15 + 2 * 24),
  },
  {
    name: <Typography>Speaker Series: Cache Odyssey</Typography>,
    startTimeOffset: hours(16 + 2 * 24),
  },
  {
    name: <Typography>Speaker Series: Reviewer & Lackey Panel</Typography>,
    startTimeOffset: hours(16 + 2 * 24),
  },
  {
    name: <Typography>Closing Ceremony</Typography>,
    startTimeOffset: hours(17 + 2 * 24),
  },
  {
    name: (
      <Typography>
        Midnight Madness (<GCLink gcCode="GCANXX6" />)
      </Typography>
    ),
    startTimeOffset: hours(20 + 2 * 24),
    endTimeOffset: hours(24 + 2 * 24),
  },
]

const SUNDAY: EventNameAndTime[] = [
  {
    name: (
      <Typography>
        Breakfast With The Mommas (<GCLink gcCode="GCANXX7" />)
      </Typography>
    ),
    startTimeOffset: hours(8 + 3 * 24),
    endTimeOffset: hours(11 + 3 * 24),
  },
  {
    name: (
      <Typography>
        Farewell From The Fort (<GCLink gcCode="GCANXX8" />)
      </Typography>
    ),
    startTimeOffset: hours(16 + 3 * 24),
    endTimeOffset: hours(20 + 3 * 24),
  },
]

enum TabNames {
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

enum TimelineItemState {
  PAST,
  CURRENT,
  FUTURE,
}

function TimelineItem({
  content,
  timeOffset,
  itemState,
}: {
  content: React.ReactNode
  timeOffset: number
  itemState: TimelineItemState
}): JSX.Element {
  const time = moment.unix(START_TS + timeOffset + 1)
  const { palette } = useTheme()
  return (
    <VerticalTimelineElement
      date={time.format('hh:mm a')}
      contentStyle={{
        color: 'black',
        border: `1px solid ${CHARCOAL}`,
        borderRadius: '8px',
        fontFamily: 'Kollektif-Bold',
      }}
      iconStyle={{
        background:
          itemState === TimelineItemState.FUTURE
            ? 'lightgrey'
            : palette.primary.main,
        boxShadow: 'none',
        border: `4px solid ${CHARCOAL}`,
        animation:
          itemState === TimelineItemState.CURRENT
            ? 'pulse 2s infinite'
            : 'none',
      }}
      contentArrowStyle={{ borderRight: `7px solid  ${palette.primary.main}` }}
    >
      {content}
    </VerticalTimelineElement>
  )
}

export function Live() {
  const [currentDay, setCurrentDay] = useState(TabNames.THURSDAY)

  useEffect(() => {
    document.documentElement.setAttribute('style', '--line-color-mine: #000000')
  }, [])

  const [currentTime, setCurrentTime] = useState(moment().unix())
  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentTime(moment().unix())
    }, 1000)
    return () => window.clearInterval(interval)
  }, [])

  console.log(currentTime)

  const timelineItems = useMemo(() => {
    switch (currentDay) {
      case TabNames.THURSDAY:
        return THURSDAY
      case TabNames.FRIDAY:
        return FRIDAY
      case TabNames.SATURDAY:
        return SATURDAY
      case TabNames.SUNDAY:
      default:
        return SUNDAY
    }
  }, [currentDay])

  return (
    <Fragment>
      <GuideHeader
        title="WELCOME TO GEOWOODSTOCK XXI!"
        subTitle="Whether you're from down the road or across the world, we're glad you're here!"
      />
      <GuideBody>
        <hr style={{ borderBottom: `1px solid ${CHARCOAL}`, width: '90%' }} />
        <br />
        <Subheader>Important Event Announcements</Subheader>
        <div
          style={{
            width: '100%',
          }}
        >
          <iframe
            src="https://rss.app/embed/v1/list/XS66jHN66Zm64YwN"
            style={{
              width: '100%',
              height: '40vh',
              border: 0,
            }}
          ></iframe>
        </div>
        <br />
        <hr style={{ borderBottom: `1px solid ${CHARCOAL}`, width: '90%' }} />
        <br /> <br />
        <Typography>
          Welcome to America's 2nd GIGA event: Wild and Wonderful GeoWoodstock
          XXI. There's a lot of things happening throughout the weekend, so take
          the time to review everything and check back for updates. This page
          will be continuously updated with announcements and information, as
          well as an interactive live schedule to help keep track of everything.
        </Typography>
        <br />
        {/* @ts-ignore */}
        <BigOrangeButton href="/guide" target="">
          Check out our event guide
        </BigOrangeButton>
        <br />
        <br />
        <br />
        <Subheader>What's next?</Subheader>
        <Typography>
          Throughout the event, this schedule with update with the next event,
          activity, or presentation, so you'll never miss what's happening.{' '}
        </Typography>
        <br />
        <Tabs
          value={currentDay}
          onChange={(_, v) => setCurrentDay(v)}
          centered
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="thursday (5/22)" value={TabNames.THURSDAY} />
          <Tab label="friday (5/23)" value={TabNames.FRIDAY} />
          <Tab label="saturday (5/24)" value={TabNames.SATURDAY} />
          <Tab label="sunday (5/25)" value={TabNames.SUNDAY} />
        </Tabs>
        <br />
        <VerticalTimeline>
          {timelineItems.map((e) => {
            return (
              <TimelineItem
                timeOffset={e.startTimeOffset}
                content={e.name}
                itemState={TimelineItemState.PAST}
              />
            )
          })}
        </VerticalTimeline>
        <br />
        <br />
      </GuideBody>
    </Fragment>
  )
}
