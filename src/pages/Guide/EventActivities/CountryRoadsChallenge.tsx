import { Fragment } from 'react/jsx-runtime'
import { GuideHeader } from '../GuideHeader'
import { Typography } from '@mui/material'
import { GuideBody } from '../GuideBody'
import { useIsMobile } from '../../../hooks/useIsMobile'
import { CHARCOAL } from '../../../constants/theme'
import { BigOrangeButton } from '../BigOrangeButton'

function CacheInfoBlock({
  title,
  gcCode,
  location,
  children,
}: {
  title: string
  gcCode: string
  location: string
  children: React.ReactNode
}) {
  return (
    <div
      style={{
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <Typography
        variant="h3"
        fontSize="1rem"
        color={CHARCOAL}
        marginBottom="0.2rem"
      >
        {title} (
        <a target="_blank" href={`coord.info/${gcCode}`}>
          {gcCode}
        </a>
        ) - <em>{location}</em>
      </Typography>
      {children}
    </div>
  )
}

export function CountryRoadsChallenge() {
  const isMobile = useIsMobile()
  return (
    <Fragment>
      <GuideHeader
        title="Country Roads Challenge"
        subTitle="presented by mountaineer country cvb"
      />

      <GuideBody>
        <Typography>
          Are you ready to embark on an exploration of Mountaineer Country all
          while finding caches and visiting the spots only the locals know
          about? The Country Roads Challenge presented by Visit Mountaineer
          Country CVB features 10 spots throughout Morgantown and the
          surrounding areas that highlight the best restaurants, shops,
          entertainment, and recreation opportunities in the area. Each
          letterbox-hybrid cache contains a unique stamp; collect all 10 to be
          eligible for a Country Roads Challenge trackable Geocoin! This series
          is very similar to poker runs that you might have experienced at other
          Geocaching events.
        </Typography>

        <div style={{ height: '2rem' }} />

        <Typography variant="h3" fontSize="1.4rem">
          Getting Started
        </Typography>

        <br />

        <Typography>
          First, you'll need to acquire a Country Roads Challenge passport;
          there are a few different ways to do this. Passports will be
          distributed at the{' '}
          <a
            target="_blank"
            href="https://www.geocaching.com/geocache/GCANXX0_gwxxi-country-roads-challenge"
          >
            Country Roads Challenge Kickoff event
          </a>{' '}
          on Thursday (5/22) from 8 am to 12 pm at Coopers Rock State Park.
          Otherwise, all passports will be distributed at Mylan Park on Friday
          (5/23) from 8 am to 3 pm and Saturday (5/24) from 8 am to 5 pm.
          (Please note, Friday (5/23) from 8 am to 10 am is for VIPs and Friends
          of GeoWoodstock only.) Passports will also be included in registration
          packages, which guarantee your coin upon completion, more on that
          later. Otherwise, swing by the Visit Mountaineer Country CVB table to
          pick up your passport; their helpful team can give you some insider
          tips and secrets about the tour as well!
        </Typography>

        <br />

        <Typography>
          Additionally, you can download and print a passport by{' '}
          <a
            target="_blank"
            href={`${import.meta.env.BASE_URL}eventguide/eventactivities/Country Roads Challenge Passport.pdf`}
          >
            clicking here
          </a>
          . We highly recommend you keep track of your stamps on the official
          passport to easily claim your coin at the end. If you are printing
          your own, please use a non-glossy paper for the best experience
          transferring the stamps.
        </Typography>

        <br />

        <BigOrangeButton
          href={`${import.meta.env.BASE_URL}eventguide/eventactivities/Country Roads Challenge Passport.pdf`}
        >
          DOWNLOAD YOUR PASSPORT
        </BigOrangeButton>

        <div style={{ height: '3rem' }} />

        <Typography variant="h3" fontSize="1.4rem">
          About the series
        </Typography>

        <br />

        <Typography>
          All 10 caches featured on the Country Roads Challenge will go live at
          10 am on Thursday (5/22) as part of the{' '}
          <a
            target="_blank"
            href="https://www.geocaching.com/geocache/GCANXX0_gwxxi-country-roads-challenge"
          >
            Country Roads Challenge Kickoff event
          </a>
          . This event is scheduled for 4 hours, so we invite you to quickly
          stop by, sign the logbook, learn about the challenge, and get started
          exploring our country roads. Parking will be extremely limited at
          Coopers Rock State Park, so please keep the flow of attendees moving
          throughout the event and consider carpooling if possible (after all,
          completing the challenge will be more fun with friends).
        </Typography>

        <br />

        <Typography>
          At each location, you are searching for an ammo can container with
          some familiar-looking decorations (we can't give away all our
          surprises, can we).{' '}
          <strong style={{ fontFamily: 'KGRedHands', fontSize: '0.9rem' }}>
            The caches will not be placed until Thursday (5/23) morning and will
            have a lock combination provided by the cache pages - so please do
            not try to search for the caches before 10 am on Thursday (5/22).
          </strong>{' '}
          When placing these caches, our team strived to keep them mobility
          friendly. While they might not all be terrain 1, they won't require
          any long hikes or strenuous activities. As with all caching throughout
          the weekend, please be courteous of the area and your fellow cachers.
          We're expecting a lot of activity during the event, and each location
          was gracious enough to host a cache as part of the challenge, so
          please be respectful and show them how awesome our caching community
          can be. Replace all caches EXACTLY as found, ensuring the stamp is
          ready for use by the next finder.
        </Typography>

        <br />

        <Typography>
          The entire series will take about 4 hours to complete, but please stop
          to visit some of our local attractions or grab lunch at one of the
          restaurants. We highly recommend stopping in at Mountain State Brewing
          Company or The Lakehouse for some grub! You'll have all weekend to
          complete the series, so take time to explore each of these unique
          locations. There is no prize for finishing first, to slow down and
          enjoy the scenic tour of our country roads. Absolutely{' '}
          <strong style={{ fontFamily: 'KGRedHands', fontSize: '0.9rem' }}>
            NO NIGHT CACHING
          </strong>{' '}
          will be permitted for this series. Don't be the reason we are forced
          to archive one of these caches.
        </Typography>

        <br />

        <Typography>
          If you're looking for some song recommendations, check out our{' '}
          <a
            target="_blank"
            href={
              'https://open.spotify.com/playlist/4UNOOo6u2GjGR54XVRSmSx?si=540fd2878b4b4d9e&pt=a1ae5d26feec7507a9955ad42990a7e8'
            }
          >
            Spotify playlist
          </a>{' '}
          designed specifically for the series. (Although, we won't fault you
          for listening to Country Roads on loop for the whole weekend.)
        </Typography>

        <br />

        <Typography>
          To help plan your visit to Mountaineer Country, our team has put
          together a variety of helpful resources including a map of locations
          and discounts at each of the locations. Please review the map below of
          all ten locations to get a good idea of where each of the stops are
          and visit the Visit Mountaineer Country CVB website to learn more
          about each of the locations.
        </Typography>

        <br />

        <Typography>
          Here is our recommended order for taking the series:
        </Typography>

        <br />

        <CacheInfoBlock
          title="#1 - A Piece of Cake"
          gcCode="GCB2KZE"
          location="Cup Cake Me Home"
        >
          <Typography>
            Cupcake Me Home is a delicious cafe serving up specialty cupcakes,
            coffees, lunch specials, and twists on the WV favorite Pepperoni
            Roll. Cupcake Me Home has a cozy, hometown feel that is inviting to
            all guests. Savor some of the best bites in Preston County here!
          </Typography>
        </CacheInfoBlock>

        <br />

        <CacheInfoBlock
          title="#2 - Surf or Turf"
          gcCode="GCB2KZJ"
          location="The Lakehouse"
        >
          <Typography>
            Enjoy dinner with a view at The Lakehouse on Cheat Lake. A locally
            loved spot for generations, The Lakehouse offers a wide menu of
            seafood, sandwiches, live music, and more! Walk next door to the
            Sunset Beach Marina and rent kayaks or paddleboards to relax on
            Cheat Lake.
          </Typography>
        </CacheInfoBlock>

        <br />

        <CacheInfoBlock
          title="#3 - Pocket Full of Posies "
          gcCode="GCB2KZN"
          location="West Virginia Botanic Garden"
        >
          <Typography>
            WV's only Botanic garden is nestled in Morgantown. Check out the
            gorgeous gardens, kids' play areas, trails, photo spots, and more.
            Be sure to stop at the brand-new Visitors Center and Gift Shop for
            locally made artisan goods.
          </Typography>
        </CacheInfoBlock>

        <br />

        <CacheInfoBlock
          title="#4 - Fore"
          gcCode="GCB2KZR"
          location="Cryptid Mountain Mini Golf"
        >
          <Typography>
            Cupcake Me Home is a delicious cafe serving up specialty cupcakes,
            coffees, lunch specials, and twists on the WV favorite Pepperoni
            Roll. Cupcake Me Home has a cozy, hometown feel that is inviting to
            all guests. Savor some of the best bites in Preston County here!
          </Typography>
        </CacheInfoBlock>

        <br />

        <CacheInfoBlock
          title="#5 - Adventures Ahead"
          gcCode="GCB2KZT"
          location="Outdoor Adventure Outfitters"
        >
          <Typography>
            Enjoy live music and events at the Ruby Amphitheater, situated on
            the banks of the Mon River. Then, take a walk on the rail trail and
            enjoy the surrounding restaurants and local flare of downtown
            Morgantown.
          </Typography>
        </CacheInfoBlock>

        <br />

        <CacheInfoBlock
          title="#6 - Tea for Two"
          gcCode="GCB2KZW"
          location="Antiquitea"
        >
          <Typography>
            Tea and cafe enthusiasts, AntiquiTea is for you. Try loads of
            different drinks, baked goods, lunch specials, and more. Stick
            around for bingo or book club special nights each week!
          </Typography>
        </CacheInfoBlock>

        <br />

        <CacheInfoBlock
          title="#7 - Something is Brewing"
          gcCode="GCB2M06"
          location="Mountain State Brewing Company"
        >
          <Typography>
            A WV favorite, Mountain State serves delicious pizza, local beer,
            margarita flights, and more. Star City houses the newest location of
            some of the most popular bites in town. Stop in to watch a game,
            celebrate life, or just enjoy time with friends and family!
          </Typography>
        </CacheInfoBlock>

        <br />

        <CacheInfoBlock
          title="#8 - Shack Attack"
          gcCode="GCB2M01"
          location="Chimmi Shack"
        >
          <Typography>
            Want to try something new? Stray Cat offers special handmade
            “chimmis” (a handheld take on the classic chimichanga), fries,
            salads, and more from their new spot in Star City. Picnic outside as
            you munch on their specialty fried bites.
          </Typography>
        </CacheInfoBlock>

        <br />

        <CacheInfoBlock
          title="#9 - Take Me Out To The..."
          gcCode="GCB2M09"
          location="Kendrick Family Ballpark"
        >
          <Typography>
            Looking for a fun activity in the sun? Watch the WV Black Bears or
            the Mountaineers at Wagener Field at Kendrick Family Ballpark. Check
            their event calendar for fun events like Dog Day, Fireworks Night,
            Dollar Day, and more.
          </Typography>
        </CacheInfoBlock>

        <br />

        <CacheInfoBlock
          title="#10 - Hop on Pop"
          gcCode="GCB2M0B"
          location="Pop the Soda Shop"
        >
          <Typography>
            A hidden gem in Westover, Pop the Soda Shop serves viral dirty sodas
            and delicious drinks. Walk next door to the Pop Bakery where they
            serve homemade baked goods, making Pop a great place for a yummy
            snack.
          </Typography>
        </CacheInfoBlock>

        <br />

        <Typography>
          In addition to the 10 letterbox-hybrid caches featured on the Country
          Roads Challenge, 10 additional adventure labs will help you explore
          the region. While these additional adventure labs aren’t required to
          claim your coin, they are a good opportunity to explore more of what
          makes each location great. To complete the associated adventure labs,
          you’ll need to head inside to the local businesses and locate a small
          poster containing the code word. All posters will be near the
          entrance, but please take note of the hours of operation included in
          each lab stage. Our tourism partners are thrilled to welcome cachers
          from all over the world to their businesses, so please take a minute
          to stop in and thank them for being part of this series.{' '}
        </Typography>

        <br />

        <Typography>
          Two of the locations that have letterboxes are in parks and do not
          have an associated adventure lab location. These stops have been
          replaced with other local businesses that could not host a physical
          container.
        </Typography>

        <br />

        <div
          style={{
            maxWidth: '800px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Typography
            variant="h3"
            fontSize="1rem"
            color={CHARCOAL}
            marginBottom="0.2rem"
          >
            Hoot & Howl
          </Typography>
          <Typography>
            Shop local West Virginia made goods at Hoot and Howl. Whether you're
            looking for WV art, coffee, cooking spices, jewelry, stickers, or
            plants, Hoot and Howl has a unique souvenir for you. Find items for
            Morgantown, Coopers Rock State Forest, West Virginia, and more to
            bring home to your family and friends.{' '}
          </Typography>
        </div>

        <br />

        <div
          style={{
            maxWidth: '800px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Typography
            variant="h3"
            fontSize="1rem"
            color={CHARCOAL}
            marginBottom="0.2rem"
          >
            Triple S Harley-Davidson
          </Typography>
          <Typography>
            Explore West Virginia's premier Harley-Davidson motorcycle dealer,
            Triple S. Shop their wide selection of products, then check out
            Ficher's Fine Cigars and Coffee for a unique escape from the hustle
            and bustle.
          </Typography>
        </div>

        <br />
        <br />
        <br />

        <Typography>
          To help plan your visit to Mountaineer Country, our team has put
          together a variety of helpful resources including a map of locations
          and discounts at each of the locations. Please review the map below of
          all ten locations to get a good idea of where each of the stops are
          and visit the Visit Mountaineer Country CVB website to learn more
          about each of the locations.
        </Typography>

        <br />

        <iframe
          src="https://www.google.com/maps/d/embed?mid=1Sg1az2wM2acIRqBInjXnsm0nUsc1FfE&hl=en&ehbc=2E312F"
          width="640"
          height="480"
          style={{
            maxWidth: '80%',
            maxHeight: '80%',
            width: '80%',
            height: 'auto',
            aspectRatio: isMobile ? '1' : '640 / 480',
          }}
          loading="lazy"
        />

        <br />
        <br />
        <br />

        <Typography variant="h3" fontSize="1.4rem">
          Claim your coin
        </Typography>

        <br />

        <Typography>
          After collecting all 10 stamps from the letterbox-hybrid caches at
          each location, return to Mylan Park and find the Visit Mountaineer
          Country CVB table to claim your coin. Coins will be distributed on
          Friday (5/23) from 8 am to 3 pm and Saturday (5/24) from 8 am to 5 pm.
          (Please note, Friday (5/23) from 8 am to 10 am is for VIPs and Friends
          of GeoWoodstock only.)
        </Typography>

        <br />

        <Typography>
          Those who pre-registered for GeoWoodstock XXI will have a coin
          reserved until Saturday at 3 pm. All other coins will be awarded on a
          first-come, first-served basis. After 3pm, any reserved coins that are
          not claimed will be awarded to those with a completed passport on a
          first-come, first-served basis. Any remaining coins after 5 pm on
          Saturday (5/24) will be available for pickup at the Visit Mountaineer
          Country CVB starting on Tuesday (5/27) from 9 am to 5 pm daily. Please
          be courteous and only claim one coin per Geocaching username.
        </Typography>

        <br />

        <Typography>
          To easily be awarded your coin, please print your Geocaching username
          clearly on the line provided. In addition, all finishers are required
          to{' '}
          <a target="_blank" href="https://forms.gle/JGwZ2RA3cFCcYZRt5">
            complete the short survey
          </a>{' '}
          about your experience. Please complete both steps prior to approaching
          the Visit Mountaineer Country CVB table; your feedback is invaluable
          to the success of this event.
        </Typography>

        <br />

        <Typography>
          Lastly, don't forget to thank Visit Mountaineer Country and all our
          tourism partners for helping put this challenge together. Without
          their support, GeoWoodstock XXI wouldn't be possible. A special thanks
          to local area cachers{' '}
          <a
            target="_blank"
            href="https://www.geocaching.com/p/?guid=06ceaef9-9c2e-4537-b1b1-35f44dcc47c1"
          >
            Arealwhit
          </a>{' '}
          and{' '}
          <a
            target="_blank"
            href="https://www.geocaching.com/p/?guid=2fefae77-0673-4949-a9b7-b5fa307a898f"
          >
            Jackson1551
          </a>{' '}
          for helping place all the caches and providing an unforgettable
          experience for you all to enjoy.
        </Typography>

        <br />

        <BigOrangeButton href="https://forms.gle/JGwZ2RA3cFCcYZRt5">
          COMPLETE THE SURVEY
        </BigOrangeButton>

        <br />
        <br />
        <br />
      </GuideBody>
    </Fragment>
  )
}
