import { Fragment } from 'react/jsx-runtime'
import { GuideHeader } from '../GuideHeader'
import { GuideBody } from '../GuideBody'
import { Typography } from '@mui/material'
import { Subheader } from '../Subheader'

export function CacheOdyssey() {
  return (
    <Fragment>
      <GuideHeader
        title="Cache Odyssey - West Virginia"
        subTitle="Visit Camp Muffly and find GCAY6NR"
      />

      <GuideBody>
        <Typography>
          The newly released Cache Odyssey series is a must-do while traveling
          to and from GeoWoodstock XXI, and luckily, West Virginia’s Cache
          Odyssey is right here in Morgantown! This fun cache will bring you to
          Camp Muffly, located just off Interstate 79 south of the big event.
          This park is well known for its 4-H camps, but it is also home to
          festivals, group gatherings, casual picnics, and the newly built pool.
          This is the place to be during the summer.
        </Typography>

        <br />
        <br />

        <Subheader>Know before you go</Subheader>
        <ul>
          <li>
            <Typography>
              This should be a fairly quick and easy grab compared to some of
              the other ‘must-do’ caches in the area. It’s a terrain 1 and very
              handicap accessible.
            </Typography>
          </li>
          <li>
            <Typography>
              You will need to do some research beforehand to solve for the lock
              combination. What year did West Virginia join the Union? (Hint,
              it’s during the Civil War.)
            </Typography>
          </li>
          <li>
            <Typography>
              Please be gentle with the container. You can remove the plastic
              tote from the chest to sort through the SWAG. If you take
              something, try to leave something of equal or greater value.
            </Typography>
          </li>
          <li>
            <Typography>
              Be kind visitors to the park. The staff here has graciously
              allowed us to place this cache on the porch of the park office, so
              please be mindful of the area and leave it exactly as you found
              it. The parking lot is large, but could get congested at times
              throughout the weekend.
            </Typography>
          </li>
          <li>
            <Typography>
              Replace the cache exactly as you found it for the next cacher to
              enjoy.
            </Typography>
          </li>
        </ul>

        <br />
        <br />

        <Subheader>About the cache odyssey series</Subheader>
        <Typography>
          Cache Odyssey is a thrilling, nationwide geocaching journey like no
          other! Conceived by some of the top cache hiders in the U.S., this
          adventure brings a unique, highly creative letterbox geocache to every
          state. These caches are designed with everyone in mind—from seasoned
          explorers to families with kids, and especially those geocaching in
          wheelchairs. Every cache is built to be fun, imaginative, and 100%
          accessible to all.
        </Typography>

        <br />
        <br />

        <Subheader>Where can you find another one?</Subheader>
        <Typography>
          Here's the best part—there's a Cache Odyssey hidden in every state!
          That’s right! From coast to coast, every state in America is part of
          this grand adventure. Once you track down the one closest to you, why
          stop there?
        </Typography>
        <br />
        <Typography>
          This cache is part of the East Central Region Geotour. There are six
          exciting GeoTours making up this series which include a total of 50
          accessible geocaches. Check out the{' '}
          <a target="_blank" href="https://coord.info/GT4F3">
            East Central Region GeoTour
          </a>{' '}
          for more Cache Odyssey hides close to Morgantown!
        </Typography>

        <br />
      </GuideBody>
    </Fragment>
  )
}
