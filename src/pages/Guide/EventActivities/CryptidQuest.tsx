import { Fragment } from 'react/jsx-runtime'
import { GuideHeader } from '../GuideHeader'
import { GuideBody } from '../GuideBody'
import { Typography } from '@mui/material'

export function CryptidQuest() {
  return (
    <Fragment>
      <GuideHeader title="Cryptid Quest Geo-Art" />

      <GuideBody>
        <Typography>
          Welcome to Cryptid Quest! A geo-art for those participating in
          GeoWoodstock XXI that are looking for a more relaxed and accessible
          caching experience while in the Mountain State. Appalachia has a rich
          culture and mythos surrounding the area, no more exemplified by the
          myriad of "cryptids" that are rumored to be found nearby. Cryptids are
          an elusive class of creatures with sometimes supernatural abilities or
          appearances that, despite best efforts, haven't been proven to exist.
          The most infamous of these in West Virginia is Mothman, a flying
          humanoid creature with black wings and beady red eyes. The quest of
          this geo-art is to follow the Mothman's trail via a set of pictures
          snapped of the beast. Join us as we explore some of the Cryptids that
          may or may not inhabit the hills of Appalachia!
        </Typography>

        <br />
        <br />

        <Typography variant="h3" fontSize="1.4rem">
          What type of experience is this?
        </Typography>
        <br />
        <Typography>
          Cryptid Quest is a more casual caching experience aimed at those who
          don't want to or can't go traipsing through the woods. There's 21
          caches in total, all being park-and-grabs, all within the University
          Town Center area in Morgantown. If you want to finish them all, plan
          for 1.5-2 hours, depending on how long it takes to follow the
          Mothman's trail.
        </Typography>

        <br />
        <br />

        <Typography variant="h3" fontSize="1.4rem">
          Can you find Mothman?
        </Typography>
        <br />
        <Typography>
          Each cache page displays a (purposefully) blurry image of a nearby
          location. Some have obvious hints showing where they are, others are a
          bit trickier. Figure out what area the image is showing, then travel
          there with your Wherigo cartridge open. Upon entering the area, the
          cartridge will display the final coordinates of that cache. Then it's
          on to the next one!
        </Typography>

        <br />
        <br />

        <Typography variant="h3" fontSize="1.4rem">
          How do I use Wherigo?
        </Typography>
        <br />
        <Typography>
          If you're on a computer, simply navigate to whereigo.com and log in
          with your geocaching.com credentials. There's also the Wherigo app for
          mobile phones. Then simply search for the cartridge name or GC code.
        </Typography>

        <br />
        <br />

        <Typography variant="h3" fontSize="1.4rem">
          Know Before You Go
        </Typography>
        <ul>
          <li>
            <Typography>
              To keep the trail accessible, all locations are within public
              areas. Stealth is necessary! Especially if you want to avoid the
              Mothman’s fury.
            </Typography>
          </li>
          <li>
            <Typography>
              Tools you'll need on your quest are your device of choice capable
              of running a Wherigo cartridge and, of course, a pen.
            </Typography>
          </li>
          <li>
            <Typography>
              Night caching is allowed, though some areas may be harder to
              recognize in the dark since the pictures are in daylight.
            </Typography>
          </li>
          <li>
            <Typography>
              A map application such as Google Earth or Apple Maps may be
              helpful in identifying locations, but is not necessary.
            </Typography>
          </li>
          <li>
            <Typography>
              There's plenty in the area if you need to take a break or refuel.
            </Typography>
          </li>
        </ul>
      </GuideBody>
    </Fragment>
  )
}
