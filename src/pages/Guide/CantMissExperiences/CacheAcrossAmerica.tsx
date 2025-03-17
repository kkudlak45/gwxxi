import { Fragment } from 'react/jsx-runtime'
import { GuideHeader } from '../GuideHeader'
import { Typography } from '@mui/material'
import { GuideBody } from '../GuideBody'
import { Subheader } from '../Subheader'

export function CacheAcrossAmerica() {
  return (
    <Fragment>
      <GuideHeader
        title="CACHE ACROSS AMERICA WEST VIRGINIA"
        subTitle="Enjoy a hike to Raven's Rock and find GCA7F55!"
      />

      <GuideBody>
        <Typography>
          Welcome to Coopers Rock State Park, home of our Country Roads
          Challenge Kickoff event and the Cache Across America for the Mountain
          State! This massive wilderness area features hundreds of miles of
          trails with rugged terrain and breathtaking views of the Cheat River.
        </Typography>

        <br />

        <img
          src="/eventguide/cantmiss/cooperssp_800x533.jpg"
          style={{ maxWidth: '800px', width: '100%', aspectRatio: '800 / 533' }}
        />

        <br />
        <br />

        <Subheader>Parking</Subheader>
        <Typography>
          During GeoWoodstock weekend, you'll be able to park at the main trail
          head for the Raven's Rock Trail; this is located at N 39° 38.206 W
          079° 48.076. Please note, parking here is EXTREMELY limited. About 30
          cars can park here at one time, so it is highly recommended that your
          group carpools. Parking is permitted along the road way, as long as
          your vehicle is pulled completely off the road.
        </Typography>

        <br />
        <br />

        <Subheader>Know before you go</Subheader>
        <ul style={{ margin: '0px' }}>
          <li>
            <Typography>
              West Virginia's Cache Across America is a 2.5-mile roundtrip hike
              to the Raven's Rock overlook; one of the best hikes in the state.
              The trail is gentle, but is layered with loose rocks and features
              one moderate incline to the top. The total roundtrip hike will
              take about an hour to complete.
            </Typography>
          </li>
          <li>
            <Typography>
              This area has a healthy population of Copperheads and
              Rattlesnakes, please exercise extreme caution and don't reach into
              any rock crevasses without looking first. Also keep an eye out for
              ticks.
            </Typography>
          </li>
          <li>
            <Typography>
              The trail is great for kids and geo-dogs, but keep an eye on them
              once you reach the overlook. This panoramic view of the Cheat
              River contains no railings, and it's a long way down, so watch
              your step!
            </Typography>
          </li>
          <li>
            <Typography>
              While you're at the overlook, check out the{' '}
              <a target="_blank" href="http://coord.info/GC93X4Q">
                Quoth The Raven
              </a>{' '}
              earthcache talking about the unique geology of Raven's Rock.
            </Typography>
          </li>
        </ul>

        <br />
        <br />

        <Subheader>About the Cache Across America series</Subheader>
        <Typography>
          The Cache Across America series is a geocaching challenge that
          encourages geocachers to explore all 50 U.S. states by finding
          specific caches placed in each one. Each state has a designated cache
          that is part of the series, often located in a spot that highlights
          the natural beauty, history, or culture of that region. Participants
          who find all 50 caches collect information or clues from each one,
          which ultimately leads them to a final "bonus" cache. This challenge
          combines adventure, travel, and exploration, offering geocachers an
          exciting way to discover the diverse landscapes and landmarks across
          the United States.
        </Typography>

        <br />
      </GuideBody>
    </Fragment>
  )
}
