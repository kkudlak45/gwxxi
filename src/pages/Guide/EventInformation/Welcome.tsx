import { Fragment } from 'react/jsx-runtime'
import { GuideHeader } from '../GuideHeader'
import { GuideBody } from '../GuideBody'
import { Typography } from '@mui/material'
import { useIsMobile } from '../../../hooks/useIsMobile'
import { Subheader } from '../Subheader'
import { BoldKol } from '../CantMissExperiences/Counties'

export function Welcome() {
  const isMobile = useIsMobile()
  return (
    <Fragment>
      <GuideHeader
        title="WELCOME TO GEOWOODSTOCK XXI"
        subTitle="America's 2nd GIGA event!"
      />

      <GuideBody>
        <img
          alt="GeoWoodstock XXI brand logo"
          src={`${import.meta.env.BASE_URL}gwxxi${isMobile ? '_360x243' : ''}.jpg`}
          style={{
            maxWidth: '100%',
            maxHeight: '50vh',
            width: 'auto',
            height: 'auto',
            marginTop: '-1rem',
          }}
        />

        <br />
        <br />

        <Typography>
          The first GeoWoodstock event was created by JoGPS, a geocacher from
          Tennessee, in 2003 to bring cachers from across the United States
          together. By 2006, it had become popular internationally and
          GeoWoodstock 4 was the first-ever geocaching event to attain
          Mega-event status. GeoWoodstock 2018 was the first Giga event held
          outside of Europe. Continuing the long line of history, GeoWoodstock
          is excited to visit West Virginia to celebrate 25 years of Geocaching.
        </Typography>

        <br />
        <br />

        <Subheader>What is a GIGA event?</Subheader>
        <Typography>
          GeoWoodstock is known at the world's original Mega event, usually
          attracting around 1,500 - 2,000 attendees annually. On January 30,
          2025, GeoWoodstock XXI surpassed 3,000 will attend logs, which
          upgraded the event to GIGA status. This is the highest event status
          and rarest icon within the game. To date, there has only been 1 GIGA
          event in the United States, 2 in North America, and 12 globally.
        </Typography>

        <br />

        <Typography>
          That means there will be a LOT of people in and around Morgantown
          Geocaching before, during, and after GeoWoodstock XXI. So come
          prepared to meet lots of new friends, participate in activities you
          won't find at any other event, and maybe replace a full log or two.
        </Typography>

        <br />
        <br />

        <Subheader>What to expect at GeoWoodstock XXI</Subheader>
        <Typography>
          Think about GeoWoodstock XXI as the annual conference for the sport of
          Geocaching. Mylan Park will serve as headquarters for the weekend of
          activities with vendors, exhibitors, live presentations, and so much
          more. North-central West Virginia will be transformed into a
          geocacher's paradise with new caches, adventure labs, and side events
          showcasing the best the area has to offer.
        </Typography>

        <br />

        <Typography>
          A few things we ask you to keep in mind throughout the weekend:
        </Typography>
        <ul>
          <li>
            <Typography>
              Even if you've attended GeoWoodstock before, you've never attended
              THIS GeoWoodstock, so please take the time to review all the
              information in the <a href="/guide">event guide</a> and take note
              of the things that are different or special about this year's
              event.
            </Typography>
          </li>
          <li>
            <Typography>
              As with any event with a crowd of this size, you may encounter
              limited parking or long lines throughout the weekend. Please
              carpool when possible and exercise a little extra patience than
              normal. We've planned everything to be as efficient as possible to
              get you back to what matters most - caching!
            </Typography>
          </li>
          <li>
            <Typography>
              This event is put on solely by volunteers. Please be kind to
              everyone you meet throughout the weekend, but especially those
              trying to make this event possible. If you encounter any problems,
              please find someone with a gold GWXXI hat to assist you.
            </Typography>
          </li>
          <li>
            <Typography>
              Set realistic expectations for your weekend. There are a lot of
              events, activities, and caches for you to enjoy, but you won't be
              able to do it all. Prioritize what excites you the most and enjoy
              your stress-free weekend in West Virginia. That said, we highly
              recommend partaking in event-specific activities designed
              specifically for GeoWoodstock XXI weekend as you are more likely
              to have a good time working on these than other caches in the area
              that weren't built for out-of-state audiences.
            </Typography>
          </li>
          <li>
            <Typography>
              Be courteous to the Morgantown muggle community. The town has
              graciously opened its doors and supported GeoWoodstock XXI, so
              please extend this courtesy back. Be respectful of all locations,
              people, and caches during your visit.
            </Typography>
          </li>
          <li>
            <Typography>
              Most importantly, have fun! We are honored to have you visit West
              Virginia and we hope to see you again soon!
            </Typography>
          </li>
        </ul>

        <br />

        <Subheader>What's the deal about travel bugs and pathtags?</Subheader>
        <Typography>
          Pathtags are small, customizable metal tokens used by geocachers to
          represent themselves, commemorate special events, or mark significant
          Geocaching milestones. Each Pathtag has a unique design and tracking
          code, allowing it to be logged and tracked online. Geocachers enjoy
          bringing and trading path tags at large GIGA events because these
          gatherings provide a unique opportunity to meet fellow enthusiasts,
          exchange designs, and build their collections. Trading Pathtags is a
          fun and social aspect of Geocaching, and gives you a nice collection
          to remember all the people you met by the end of the event.
        </Typography>

        <br />

        <Typography>
          For GeoWoodstock XXI specifically, we have worked with Pathtags to
          develop a custom back with our event logo. Over 75 pathtags have been
          minted specifically for this event and many people will be trying to
          collect as many of these as possible. If you haven't minted a Pathtag
          specifically for this event, the deadline has passed for them to
          arrive in time, but if you have older personal Pathtags or those from
          other events, definitely bring them! Our{' '}
          <a target="_blank" href="https://coord.info/GCANXX6">
            “Midnight Madness” (GCANXX6)
          </a>{' '}
          is designed specifically to trade Pathtags, personal items, coins,
          travel bugs and anything else you can think of!
        </Typography>

        <br />

        <Typography>
          Speaking of travel bugs, travel bugs are trackable tags attached to
          items that geocachers send on specific missions, such as traveling to
          certain locations or covering a set distance. Each travel bug has a
          unique tracking code, allowing its journey to be logged and followed
          online. GIGA events are excellent places to bring travel bugs because
          they attract geocachers from all over the world, increasing the
          chances of finding someone headed in the direction of the bug's goal.
          The high attendance and diversity of participants make these events
          ideal for giving travel bugs a significant boost toward their
          destinations.
        </Typography>

        <br />

        <Typography>
          During the main event on Friday (5/23) and Saturday (5/24), stop by
          the travel bug exchange area within Mylan Park to drop off and trade
          travel bugs from all over the world. For more information on the rules
          and procedures of the travel bug exchange,{' '}
          <a href="/guide/travel-bugs">please click here</a>.
        </Typography>

        <br />

        <Subheader>What do I need to bring?</Subheader>
        <Typography>
          What to bring largely depends on each individual situation. Are you
          driving or flying? How many days are you spending? What caches are on
          your wish list? We're happy to shout out some pointers for any
          specific experiences on our{' '}
          <a
            target="_blank"
            href="https://www.facebook.com/groups/2150783441954120/?sorting_setting=CHRONOLOGICAL"
          >
            community group
          </a>
          , but here are our must-bring items.
        </Typography>

        <br />

        <Typography>
          <BoldKol>Geocaching Gear.</BoldKol> Everything that you would
          typically bring caching, you'll want to bring to Morgantown. Pens (and
          lots of them if you lose them as frequently as us), tweezers, long
          pants, boots, a hat, sunscreen, sunglasses, a rain jacket, a
          flashlight. The weather in WV in May is pretty temperate most years,
          but definitely double check before leaving home.
        </Typography>

        <br />

        <Typography>
          <BoldKol>Exploring Morgantown.</BoldKol> You'll want a portable
          charger for all the caching and exploring you'll be doing - you'll be
          surprised by how quickly your battery drains while navigating in a new
          town. Bring your appetite and some spare cash for local restaurants
          and shops. West Virginia is beautiful, so if you have a camera, we
          highly recommend bringing it.
        </Typography>

        <br />

        <Typography>
          <BoldKol>Event Specifics.</BoldKol> Pathtags and trackables are fun to
          trade at large events. You'll get a drawstring bag in your SWAG
          packet, but a fanny pack or your favorite small pouch will be nice to
          help carry your trinkets, pens, phone etc. Regarding what you'll need
          for GWXXI specifically, bring a chair or blanket for{' '}
          <a target="_blank" href="http://coord.info/GCANXX3">
            “Mountain Music” (GCANXX3)
          </a>{' '}
          and a UV light for{' '}
          <a target="_blank" href="http://coord.info/GCANXX6">
            “Midnight Madness” (GCANXX6)
          </a>
          .
        </Typography>

        <br />

        <Typography>
          <BoldKol>Safety.</BoldKol> We're hoping for the best experience
          possible, but it's important to be prepared, nonetheless. A first aid
          kit is never a bad idea to have while caching. Staying hydrated is
          important too, so don't forget your favorite water bottle. WV has a
          lot of ticks, so a lint roller isn't a bad idea. Our area doesn't have
          too many dangerous animals, but we have two poisonous snakes, so a
          hiking pole might help poke into some of those hard to see spots.
        </Typography>

        <br />

        <Typography>
          Most of all, don't forget to BRING THE FUN! This event will be unlike
          anything you've ever experienced. So be prepared to laugh, sing, and
          get very little sleep. Start studying up on the lyrics to Country
          Roads and we'll see you in Morgantown soon!
        </Typography>

        <br />

        <Subheader>CAN I BRING MY GEO-PUP?</Subheader>

        <Typography>
          Dogs are welcome at all events during GeoWoodstock XXI weekend,
          including the main event. We simply ask owners to be realistic with
          the expectations and needs of their pets. Not all events are suited
          for all types of animals, and if anyone (K-9 cachers included) is
          causing a disruption for guests, they will be asked to leave.
        </Typography>

        <br />

        <Typography>
          The main event will have a pup watering hole, sponsored by Team
          Maltese. Most of the main event will be inside a large warehouse-like
          building, but there are some grassy areas for them to enjoy. Please
          note that dogs will not be allowed on the shuttle, so if you are
          bringing a dog, you will need to park in one of the main lots, which
          could require a short walk. If you have a service dog and need special
          accommodations such as ADA parking, please email{' '}
          <a href="mailto:info@GeoWoodstockXXI.com">info@GeoWoodstockXXI.com</a>
          .
        </Typography>

        <br />

        <Typography>
          Midnight Madness is our only side event that features an inside venue.
          Unfortunately due to University policies, dogs are not permitted
          inside the Mountainlair. If it is nice that evening, we are planning
          on incorporating the green space just outside the Lair for some
          Pathtag trading under the stars. This is a large astroturf field, but
          this is a nice option for our K-9 cacher friends.
        </Typography>

        <br />

        <Typography>
          If you have any other questions or concerns about traveling with a
          dog, please don't hesitate to reach out. For the most part, you won't
          have any problems with your geo-pup while attending West Virginia, but
          we do ask for owners to be respectful of all attendees, spaces, and
          events. These types of large events aren't designed for dogs, and thus
          might not be the best experience for some, so please know the needs of
          your dog and thoroughly think through if they would enjoy being
          surrounded by 5,000+ of their closest caching friends.
        </Typography>

        <br />

        <Subheader>HOW MANY ICONS CAN I GET AT GEOWOODSTOCK XXI?</Subheader>

        <Typography>
          GeoWoodstock XXI promises to be an iconic weekend of caching in West
          Virginia. You'll have the opportunity to find several of the rarest
          icons in the game including GIGA, GPS Adventures Maze Exhibit,
          Locationless, and Community Celebration Event.
        </Typography>

        <br />

        <Typography>
          On the day of the main event, you'll have the opportunity to collect
          12 different cache types within Mylan Park. Our team is working hard
          to create some memorable caches for the event that you won't want to
          miss.
        </Typography>

        <br />

        <Typography>
          If you want to try for a busy day, the cache types that will be
          available include: Traditional, Multi, Mystery, Letterbox-Hybrid,
          Wherigo, Earthcache, Virtual, Locationless, GIGA, GPS Adventures Maze
          Exhibit, Adventure Lab, event. While getting more rare icons is
          exciting, our team is strongly discouraging making a trip to nearby
          webcams or hosting additional events as they will subtract from your
          experience on the day of the main event.
        </Typography>

        <br />
      </GuideBody>
    </Fragment>
  )
}
