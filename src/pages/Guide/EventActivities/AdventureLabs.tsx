import { Fragment } from 'react/jsx-runtime'
import { GuideHeader } from '../GuideHeader'
import { GuideBody } from '../GuideBody'
import { Typography } from '@mui/material'
import { Subheader } from '../Subheader'

export function AdventureLabs() {
  return (
    <Fragment>
      <GuideHeader title="Adventure Labs" />

      <GuideBody>
        <Typography>
          As with any large event, GeoWoodstock XXI is home to dozens of unique
          Adventure Lab opportunities throughout the weekend. In addition to
          hundreds of existing nearby Adventures, 65 GeoWoodstock-specific
          Adventure Lab stages will be placed for you to enjoy!
        </Typography>

        <br />
        <br />

        <Subheader>25 years of Geocaching (30)</Subheader>
        <br />
        <Typography>
          Located at GeoWoodstock HQ within Mylan Park, come participate in an
          interactive timeline recounting the history of Geocaching. Similar to
          the GPS Adventures Maze Exhibit, a walk-through experience filled with
          gadgets and puzzles will be available to challenge your team on both
          Friday (5/23) and Saturday (5/24) from 8 am to 3 pm and 8 am to 5 pm,
          respectively. These Adventure Lab caches will take about a half hour
          to complete, but depending on how long the line is, you may want to
          budget some extra time. In addition to the walk-through exhibit, some
          trickier Adventure Lab locations will be scattered throughout the
          event center bringing the total up to 30 - see if you can find them
          all.
        </Typography>

        <br />
        <br />

        <Subheader>Treasures of our Town (5)</Subheader>
        <br />
        <Typography>
          Have you ever completed an Adventure Lab while listening to a podcast?
          Join Seemyshell and the Geocaching Vlogger at 12:15 pm on the Joe
          Armstrong Memorial Stage within GeoWoodstock HQ for a live recording
          of the Treasures of our Town podcast. Listen closely for the Adventure
          Lab answers! For more information or to see a full schedule of
          speakers, <a href="/guide/speakers">click here</a>.
        </Typography>

        <br />
        <br />

        <Subheader>Country Roads Challenge (10)</Subheader>
        <br />
        <Typography>
          <a href="/guide/challenge">The Country Roads Challenge</a>, presented
          by Visit Mountaineer Country, is a 10-stop adventure through the local
          region at the best parks, businesses, and shops this area has to
          offer. While you only need to find the 10 letterbox-hybrid geocaches
          to claim your coin, stop inside at each location to find a poster with
          the Adventure Lab answer. These Adventure Lab stops aren't required
          for the coin and will need to be completed during normal business
          hours for each location. Go in and say hi - these locations are
          thrilled to welcome you!
        </Typography>
        <br />
        <Typography>
          Please note, two of the locations that have letterboxes are in parks
          and do not have an associated Adventure Lab location. These stops have
          been replaced with other local businesses that could not host a
          physical container.
        </Typography>

        <br />
        <br />

        <Subheader>Adventure Lab Puzzle (10)</Subheader>
        <br />
        <Typography>
          Who doesn't enjoy a good puzzle? Starting at 10 am on Friday (5/23),
          explore the Wharf District to collect clues and solve a puzzle that
          will lead to a secret event during the main event on Saturday (5/24).
          This Adventure Lab is a relaxing walk along the river, especially
          during{' '}
          <a target="_blank" href="https://www.geocaching.com/geocache/GCATNZJ">
            Woodstock on the Wharf
          </a>
          , and solving the puzzle isn't required to enjoy the lab. Those who
          complete the Adventure Lab puzzle will receive wooden nickels which
          can be redeemed in the games area for bigger prizes, and of course,
          bragging rights.
        </Typography>

        <br />
        <br />

        <Subheader>Cryptid Search (5)</Subheader>
        <br />
        <Typography>
          During{' '}
          <a target="_blank" href="https://www.geocaching.com/geocache/GCANXX6">
            Midnight Madness
          </a>
          , keep an eye out for posts of Mothman, Bigfoot, and all their cryptid
          friends - they are hiding a secret. This Adventure Lab is only
          available from 8 pm to 12 am on Saturday (5/24). Don't forget your
          blacklight!
        </Typography>

        <br />
        <br />

        <Subheader>Prickett's Fort Tour (5)</Subheader>
        <br />
        <Typography>
          During{' '}
          <a
            target="_blank"
            href="https://www.geocaching.com/geocache/GCANXX8_gwxxi-farewell-from-the-fort"
          >
            Farewell From the Fort
          </a>{' '}
          explore Prickett's Fort, an 18th-century recreation of what life might
          have been like on the frontier. This immersive learning experience is
          free between 4 pm and 7 pm and includes live interpreters, who will
          help you answer Adventure Lab questions.
        </Typography>

        <br />
        <br />

        <Subheader>Adventures in Appalachia (600)</Subheader>
        <br />
        <Typography>
          As if those aren't enough, our team put together the{' '}
          <a href="/guide/adventures">
            largest Adventure Lab art in North America
          </a>
          , which launched in October 2024. This series will take you on a
          virtual tour showcasing the history, heritage, and locations that make
          West Virginia wild and wonderful. This is a great activity for those
          looking for a relaxing, low-terrain, experience. You'll want to take
          the time to read each question, there is some really interesting
          information here!
        </Typography>

        <br />
      </GuideBody>
    </Fragment>
  )
}
