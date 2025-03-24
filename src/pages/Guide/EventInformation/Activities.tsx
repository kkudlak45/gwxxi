import { Fragment } from 'react/jsx-runtime'
import { GuideHeader } from '../GuideHeader'
import { GuideBody } from '../GuideBody'
import { Typography } from '@mui/material'
import { BoldKol } from '../CantMissExperiences/Counties'
import { Subheader } from '../Subheader'

export function Activities() {
  return (
    <Fragment>
      <GuideHeader title="HQ Activities" />

      <GuideBody>
        <Typography>
          Wondering what is there to do at GeoWoodstock XXI? You’ve come to the
          right spot! The community center at Mylan Park is our home for
          GeoWoodstock XXI and where the majority of activities can be found.
          Please review the hours GeoWoodstock HQ will be open to help plan your
          visit.
        </Typography>

        <br />

        <Typography>
          <BoldKol>Friday (5/23):</BoldKol> (VIPs and Friends of GeoWoodstock):
          8 - 10 am
        </Typography>
        <Typography>
          <BoldKol>Friday (5/23):</BoldKol>: 10 am - 3 pm
        </Typography>
        <Typography>
          <BoldKol>Saturday (5/24):</BoldKol> 8 am - 5 pm
        </Typography>

        <br />
        <br />

        <Subheader>Welcome!</Subheader>
        <Typography>
          We're so glad you're here! If you have any questions or need some
          help, visit our helpful staff at the welcome table near the entrance
          to the event. They'll help point you in the right direction.
        </Typography>

        <br />
        <br />

        <Subheader>Pick up your registration package</Subheader>
        <Typography>
          Items pre-ordered from the online store will be available to pick up
          on both Friday (5/23) and Saturday (5/24) at Mylan Park. All items
          must be picked up before 3 p.m. on Saturday (5/24). Additional SWAG is
          available for purchase in extremely limited quantities on a
          first-come, first-served basis.{' '}
          <a href="/guide/pickup">Click here to learn more.</a>
        </Typography>

        <br />
        <br />

        <Subheader>Lunch</Subheader>
        <Typography>
          Pepperoni Rolls and West Virginia Hot Dogs will be served from 11 am -
          2 pm on Saturday (5/24) at the GeoWoodstock Offset building. Meal
          tickets are available for purchase in extremely limited quantities on
          a first-come, first-served basis.
        </Typography>

        <br />
        <br />

        <Subheader>Games</Subheader>
        <Typography>
          Redeem your wooden nickels for a chance to win a prize in one of three
          games or cash in multiple nickels for a chance to win a big prize!
          Play all three to try to collect a set of limited-edition GWXXI
          critter travel bugs!{' '}
          <a href="/guide/games">Click here to learn more.</a>
        </Typography>

        <br />
        <br />

        <Subheader>
          GPS Adventures Maze Exhibit (
          <a target="_blank" href="https://coord.info/GCANAAA">
            GCANAAA
          </a>
          )
        </Subheader>
        <Typography>
          One of the rarest and most sought-after icons in the game, this unique
          and interactive exhibit offers geocachers of all levels the chance to
          explore the history, tools, and techniques of the game. Earn the
          coveted icon by completing the maze and signing the log!{' '}
          <a href="http://coord.info/GCANAAA">Click here to learn more.</a>
        </Typography>

        <br />
        <br />

        <Subheader>Travel Bug Exchange</Subheader>
        <Typography>
          Got a travel bug you've been holding on to way too long? Think your
          travel bug's goal is too far-fetched? Bring it to the travel bug
          exchange area to trade travelers from all over the world!
        </Typography>

        <br />
        <br />

        <Subheader>Meet the Mascots</Subheader>
        <Typography>
          Keep your eyes peeled throughout the weekend for Geocaching's mascot,
          Signal the Frog! In addition, the mascot of WVU, the Mountaineer, is
          expected to make an appearance.
        </Typography>

        <br />
        <br />

        <Subheader>Adventure Labs</Subheader>
        <Typography>
          Take a walk down memory lane with 25 unique adventure labs recalling
          the history of Geocaching. Celebrating 25 years of caching, these
          interactive labs will leave you with pure joy (and smilies)! There may
          even be 5 bonus labs hidden throughout the event center, too!
        </Typography>

        <br />
        <br />

        <Subheader>Shop the Vendors</Subheader>
        <Typography>
          Need some extra gear for your next adventure? We've got you covered.
          Shop a variety of vendors from Geocaching retailers to local artisans.
          (No sales are permitted outside the vending area.){' '}
          <a href="/guide/vendors">Click here to learn more.</a>
        </Typography>

        <br />
        <br />

        <Subheader>Visit the Exhibitors</Subheader>
        <Typography>
          Stop and speak with our exhibitors on all things Geocaching! Whether
          it's getting information on nearby GeoTours, or claiming your coin for
          the Country Roads Challenge, our exhibitors are happy to help!{' '}
          <a href="/guide/vendors">Click here to learn more.</a>
        </Typography>

        <br />
        <br />

        <Subheader>Photo Opportunities</Subheader>
        <Typography>
          Let everyone know you're at the largest Geocaching event in North
          America by snapping a quick selfie! Sign the giant letters, celebrate
          a milestone, and add your pin to our world map.
        </Typography>

        <br />
        <br />

        <Subheader>VIP Lounge</Subheader>
        <Typography>
          Need a break from all the hustle and bustle? Stop in the VIP lounge to
          get a quick snack and drink.
        </Typography>

        <br />
        <br />

        <Subheader>Let's go caching!</Subheader>
        <Typography>
          There will be dozens of new caches places throughout the park
          available for you to find while attending GeoWoodstock XXI.
        </Typography>

        <br />
      </GuideBody>
    </Fragment>
  )
}
