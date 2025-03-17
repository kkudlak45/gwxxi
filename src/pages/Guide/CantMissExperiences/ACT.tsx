import { Fragment } from 'react/jsx-runtime'
import { GuideHeader } from '../GuideHeader'
import { Typography } from '@mui/material'
import { Subheader } from '../Subheader'
import { GuideBody } from '../GuideBody'

export function ACT() {
  return (
    <Fragment>
      <GuideHeader
        title="ACT CHALLENGE TRAIL"
        subTitle="50 challenges, one for each state!"
      />

      <GuideBody>
        <Typography>
          Calling all challenge lovers! America's Challenge Trail has 50 unique
          challenges, one representing each state. Filled with a variety of
          different D/Ts and experiences, this trail is a must-do for anyone who
          loves traveling and finding unique caches while on the road. The
          series starts with GCAFRFG and features both a park and grab section
          as well as a hiking section, with varied terrain along the way.
        </Typography>

        <br />
        <br />

        <Subheader>Parking</Subheader>
        <Typography>
          This series is split up into two sections, #1 - #15 and #16 - #50.
        </Typography>
        <br />
        <Typography>
          From GCAFRFG to GCAFRGG, you can drive along the seldom traveled road
          and park right next to each cache. The first 15 caches are all
          guardrail park and grabs. Be mindful of local traffic as there are
          some houses further down this road.
        </Typography>
        <br />
        <Typography>
          GCAFRGH through GCAFRK0 are on a hard packed hiking and biking trail
          that follows the contour of the Cheat River. It's recommended that you
          park near N 39° 42.626' W 079° 50.471'. The entire trail is about 7
          miles of hiking, roundtrip, and takes about 6 hours to complete. Bikes
          are permitted and the caches are close to the trail, so you shouldn't
          need a bike lock unless you are planning on going for GCB14RA as well.
        </Typography>

        <br />
        <br />

        <Subheader>What to Expect</Subheader>
        <Typography>
          Each cache in this series is a small green preform vial zip tied to a
          guardrail, tree, fence, or similar host. These caches are securely
          fastened - do not try to remove them. Some finders have experienced
          difficulty in extracting the logs, so tweezers may be helpful.
        </Typography>
        <br />
        <Typography>
          All the caches are located less than 100 feet from the trail, but
          there is some varied terrain along the trail. This series will require
          some steep hill and tree climbs. Please know your limits and don't do
          anything you aren't comfortable with. The difficulty rating accurately
          reflects the difficulty of the challenge, while the terrain rating
          accurately reflects the terrain of the hide. If the cache is listed as
          a terrain 4+, you can expect a hard-to-reach hide.
        </Typography>
        <br />
        <Typography>
          All the caches are at the posted coordinates and dogs are welcome on
          the trail. Lastly, when logging, copy and pasting your checker results
          isn't required. The cache owner is responsible for verifying your
          requirements via your public profile on Project-GC. Please DO NOT post
          a 'write note' with your challenge qualifications. If you do not
          qualify for a challenge yet, simply add it to a bookmark list and mark
          it as found after you've completed the challenge.
        </Typography>
        <br />
      </GuideBody>
    </Fragment>
  )
}
