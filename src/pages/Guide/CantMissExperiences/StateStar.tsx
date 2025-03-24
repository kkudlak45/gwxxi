import { Fragment } from 'react/jsx-runtime'
import { GuideHeader } from '../GuideHeader'
import { Typography } from '@mui/material'
import { Subheader } from '../Subheader'
import { GuideBody } from '../GuideBody'
import { BoldKol } from './Counties'

export function StateStar() {
  return (
    <Fragment>
      <GuideHeader
        title="WV State Star"
        subTitle="This is not your typical geo-art"
      />

      <GuideBody>
        <Typography>
          If you’re looking to fill your Fizzy grid while in the area for
          GeoWoodstock XXI, look no further than the West Virginia State Star
          geo-art. This 51-piece geo-art features all unique D/T combinations,
          but be warned, you’ll be exploring true Mountain State terrain. From
          climbing trees and cliffs to crawling through culverts and caves, this
          series will challenge you in more ways than one. The entire series
          spans about 11 miles of hiking / biking trails and is estimated to
          take close to three full days to complete - no easy park and grabs
          here!
        </Typography>

        <br />
        <br />

        <img
          src="/eventguide/cantmiss/statestar_800x451.jpg"
          style={{ width: '100%', maxWidth: '800px', aspectRatio: '800 / 451' }}
        />

        <br />
        <br />

        <Subheader>Solving the puzzles</Subheader>
        <Typography>
          To solve for the final coordinates for the 40 mystery caches, you'll
          need to take a virtual tour of West Virginia's various State Parks.
          Each cache page will feature a stunning picture from around the state,
          and it is your objective to figure out from which park the picture was
          taken. Typing the name of the park, exactly as it is shown in the list
          below, into the geochecker on each page will result in the final
          coordinates. Each park is only used once. For the 10 bonus wherigo
          caches, you will find code words at the top of all the logbooks
          throughout the series. All preliminary caches for each wherigo feature
          the same codeword, so you only need to find one of the four. (Example:
          Caches #1-#4 all contain the same code word that will grant you access
          to the final coords for cache #5.) Typing this code word into the
          cartridge linked for download on each page will display the final
          coordinates for that cache. Once all ten code words have been
          successfully entered, the coordinates for cache #51 will be unlocked.
          It sounds a lot more complicated than it is; you'll get the hang of
          it.
        </Typography>

        <br />
        <br />

        <Subheader>Planning your trip</Subheader>
        <Typography>
          As previously described, this is NOT a power trail, and in true WV
          style, you'll need to lace up your hiking boots to tackle this series.
          The series is designed to be completed in chunks of five and in
          numerical order from start to finish. The entirety of the series spans
          eleven miles, or twenty-two miles round trip. As a result, I suggest
          breaking the series up utilizing the three convenient parking spots
          listed below. It could also be advantageous to stagger multiple cars
          along the trail if you are attempting to complete the trail in a
          single outing.
        </Typography>
        <br />
        <Typography>
          <BoldKol>Parking #1</BoldKol> - N 39° 33.825' W 80° 03.000' (Suggested
          parking for caches #1-30 at Opekiska.)
        </Typography>
        <Typography>
          <BoldKol>Parking #2</BoldKol> - N 39° 33.448' W 79° 59.957' (Suggested
          parking for caches #31-45 at Little Falls.)
        </Typography>
        <Typography>
          <BoldKol>Parking #3</BoldKol> - N 39° 35.234' W 79° 58.672' (Suggested
          parking for caches #46-50 at Uffiington.)
        </Typography>

        <br />
        <br />

        <img
          src="/eventguide/cantmiss/starmap_800x503.jpg"
          style={{ width: '100%', maxWidth: '800px', aspectRatio: '800 / 503' }}
        />

        <br />
        <br />

        <Typography>
          As with any caching adventure, be safe, exercise caution, and let
          someone know where you are going. There are a lot of great discussions
          on our Community Group of people planning trips and looking for groups
          to join, so check that out on Facebook if you are interested!
        </Typography>

        <br />
      </GuideBody>
    </Fragment>
  )
}
