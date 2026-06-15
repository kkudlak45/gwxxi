import { Grid, Typography } from '@mui/material'
import { useIsMobile } from '../../hooks/useIsMobile'
import { BoldKol } from './CantMissExperiences/Counties'
import { FaqCard } from '../Faqs/Faqs'

export function CacheMoreGuide() {
  const isMobile = useIsMobile()
  return (
    <div
      style={{
        marginTop: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <Typography variant="h2" marginTop="2rem">
        Event Guide
      </Typography>
      <Typography>
        Hey there, welcome to CacheMore 2026! On behalf of the entire Crew, we
        can’t wait to see you in Morgantown. Whether this is your first trip to
        the area or you’re returning after GeoWoodstock XXI, we promise you’ll
        enjoy the world-class caching we have waiting for you. Please review
        this information guide carefully as it has everything you need to expect
        for the weekend ahead. If you have any questions, please don’t hesitate
        to shoot us an email at{' '}
        <a href="mailto:info@CacheMore.com">info@CacheMore.com</a>.
      </Typography>

      <iframe
        src="https://www.google.com/maps/d/embed?mid=1iAu8YwNuo99UIv83Q7I7GW7IzbmRxUg&ehbc=2E312F"
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

      <Typography variant="h4" marginBottom="0">
        Before the Event
      </Typography>
      <Typography width="100%">
        Before leaving home, you’ll want to do a few things to maximize your
        time in Morgantown.
      </Typography>
      <ul>
        <li>
          <Typography>
            There are 5 <a href="/events/2026/puzzles">Pre-Event Puzzles</a>{' '}
            hidden throughout Morgantown for you to practice your puzzling
            skills. While these caches aren’t required for any event activity,
            they might offer a glimpse into what to expect, so keep good notes!
          </Typography>
        </li>
        <li>
          <Typography>
            Please review the map above to get a general idea of where the
            Adventure Labs and GeoTour caches might be. Both the Tech Team
            Challenge and the Visit Mountaineer Country GeoTour will publish on
            Friday (6/26) at 10 am, but familiarizing yourself with the map will
            help save some time in the field.
          </Typography>
        </li>
        <li>
          <Typography>
            If you are interested in collecting all the trading cards for this
            event, consider picking up clear sleeves and a binder to store them.
            The full set has 75 total cards - can you collect them all? On the
            topic of what to bring, don’t forget extra chargers and even your
            laptop if you prefer the bigger screen, but no individual activity
            will require any special tool other than your smartphone.
          </Typography>
        </li>
        <li>
          <Typography>
            Don’t forget to take a look at all the existing caches in
            Morgantown. Between{' '}
            <a target="_blank" href="http://coord.info/GCAFRFG">
              America’s Challenge Trail
            </a>{' '}
            and the{' '}
            <a target="_blank" href="http://coord.info/GC9KGXX">
              WV State Star
            </a>
            , you won’t want to miss the excellent trails in town.
          </Typography>
        </li>
      </ul>

      <Typography variant="h4">What to Expect</Typography>
      <ul>
        <li>
          <Typography>
            The event officially starts on Friday (6/26) at 10 am at the{' '}
            <a target="_blank" href="http://coord.info/GCBFQRA">
              Mainframe Meet & Greet
            </a>
            . This is where you can pick up your pre-event registration and get
            started on the various event activities. Package pickup will be
            available on Saturday (6/27) at the main event, as well, but it’s
            highly recommended to pick it up at the Mainframe Meet & Greet
            event.
          </Typography>
        </li>
        <li>
          <Typography>
            It’s recommended to spend the rest of the day exploring Morgantown,
            finding caches, and collecting clues for the Tech Team Challenge.
            All event activities are designed to take about 6 - 8 hours each,
            but you can complete them simultaneously to save time.
          </Typography>
        </li>
        <li>
          <Typography>
            You won’t want to miss the{' '}
            <a target="_blank" href="http://coord.info/GCBFQRD">
              Signal Symposium
            </a>{' '}
            event on Friday (6/26) evening at 6 pm. Not only is this a great
            opportunity to swap trading cards, but there’s a very special
            “activity” to complete that will be vital to solving the weekend’s
            mystery. Afterwards, the adventure continues into the night, so be
            sure to pack a flashlight and save some energy to hit the trail.
          </Typography>
        </li>
        <li>
          <Typography>
            Saturday (6/27) is the main event and should be spent finishing the
            various activities, swapping information, and finding the bonus
            puzzles. Spend a few hours at Mylan Park collecting clues, shopping
            the vendors, and enjoying local cuisine. Be sure to join us for the
            closing ceremonies at 4 pm to recap all the fun and maybe even win
            some prizes!
          </Typography>
        </li>
        <li>
          <Typography>
            After the event, all the bonus caches will publish, and you can
            claim credit for your hard work with a D5 mystery on Geocaching.com.
            Haven’t found the final caches yet? Don’t worry - event staff will
            be available to ensure you connect the dots so you can find the
            caches before leaving town.
          </Typography>
        </li>
      </ul>

      <Typography variant="h4">The Story</Typography>
      <Typography>
        At the core of the event is a story-driven experience, similar to an
        escape room or murder mystery dinner. While this is a completely
        fictitious scenario, immersing yourself in the fun will result in a
        better experience overall (and may provide a few clues). No background
        knowledge or any prior experience is required, and none of the puzzles
        will be rated above a D2.5/T2.5.
      </Typography>
      <Typography width="100%">
        To read more about RUBATOSE and the Cache AI system, please{' '}
        <a href="/events/2026/about">CLICK HERE</a>.
      </Typography>

      <Typography variant="h4">Tech Team Challenge</Typography>
      <Typography>
        The Tech Team Challenge is a poker-run-style activity that highlights 25
        locations throughout Mountaineer Country, including businesses, parks,
        and other points of interest. While anyone is welcome to find the
        various Adventure Labs, clues to a special bonus Geocache are hidden
        within the journal entries somewhere in Morgantown. 10 are for Team
        Nexus, 10 are for Team Byte, and 5 provide general clues overall;
        registration packages hold clues to help you sleuth out where the clues
        are hiding. You will need the special team coins to work through the
        mystery.
      </Typography>
      <Typography width="100%">
        There will be 5 sets of 5 Adventure Labs, each testing a different
        element of the Cache AI system.
      </Typography>

      <ul>
        <li>
          <Typography>
            <BoldKol>Target Accuracy</BoldKol> - GPS coordinates give you a
            starting point within 500 feet of the code word, but you need to
            follow letterbox-style clues to locate the correct business.
          </Typography>
        </li>
        <li>
          <Typography>
            <BoldKol>Algorithm Override</BoldKol> - Test your computing skills
            by completing the following sequence puzzles at each location.
          </Typography>
        </li>
        <li>
          <Typography>
            <BoldKol>System Reboot</BoldKol> - Locate the servers at each
            location and scan the NFC chip to gain the solution.
          </Typography>
        </li>
        <li>
          <Typography>
            <BoldKol>Environmental Scan</BoldKol> - Take a look around. The
            answer can be found nearby in this iSpy-style category.
          </Typography>
        </li>
        <li>
          <Typography>
            <BoldKol>Off The Grid</BoldKol> - Want to escape the AI-noise? Visit
            some parks and trails, and find physical plaques to answer these
            off-the-grid questions.
          </Typography>
        </li>
      </ul>

      <Typography>
        To find the final Geocache container, you will need two things: GPS
        coordinates of the transmission tower and RUBATOSE’s access pin, found
        on the RUBATOSE trading card. The clues in the Adventure Lab journal
        entries, as well as information revealed at the Signal Symposium event,
        will help you gather this information.{' '}
      </Typography>

      <Typography>
        At the final location, please take a picture with the final cache and
        record a one-time-use access code to claim your limited edition finisher
        coin. The first 100 registered attendees to present their photo and
        access code at the information table at Mylan Park will earn a
        limited-edition finisher coin. Coins will be awarded on a first-come,
        first-served basis, and you must present your blue or red name badge to
        be eligible.
      </Typography>

      <Typography width="100%">
        Does this sound fun, but you missed the registration deadline? Come see
        us at the event store, and we’ll get you signed up.
      </Typography>

      <Typography variant="h4">Trading Card Challenge</Typography>
      <Typography>
        Attendees have created 75 trading cards to swap and share as part of the
        event. Hidden within this set of trading cards are coordinates and a
        lock combination to find a bonus Geocache, hidden somewhere in
        Morgantown. All the information for this activity can be found in any
        pre-registration pack, although you don’t need to register to
        participate.
      </Typography>
      <Typography width="100%">
        Trading cards can be found in 3 ways:
      </Typography>
      <ul>
        <li>
          <Typography>
            Packs of about 10 cards can be found in pre-registration packs or
            purchased at the event store.
          </Typography>
        </li>
        <li>
          <Typography>
            Trading cards can be found in caches throughout the weekend, such as
            the pre-event mysteries or GeoTour caches.
          </Typography>
        </li>
        <li>
          <Typography>
            A list of all the trading cards will be available, so when in doubt,
            find that cacher and offer a trade!
          </Typography>
        </li>
      </ul>

      <Typography>
        The puzzle to solve for the final coordinates and lock combination is
        about a difficulty of 2.5, but collecting all the required cards is the
        real challenge. Once you have all the clues, you can find the final at
        any point throughout the weekend. The first cacher to complete the
        puzzle, find the cache, and return to the information table at Mylan
        Park will receive a free VIP+1 package to next year’s event. All
        attendees are encouraged to find and log the cache, which will be
        published directly following the main event.
      </Typography>

      <Typography variant="h4">Visit Mountaineer Country GeoTour</Typography>
      <Typography>
        An extension of the Country Roads Challenge from GeoWoodstock XXI, this
        new officially registered GeoTour will highlight 20 of our favorite
        locations throughout Mountaineer Country. There are two Geocoins
        available, as well as a brand new souvenir.
      </Typography>
      <ul>
        <li>
          <Typography>
            Collect 10 stamps from the letterbox-hybrid Geocaches to earn a
            black Country Roads Challenge coin.
          </Typography>
        </li>
        <li>
          <Typography>
            Collect 10 code words from the new gadget caches to earn a diamond
            Visit Mountaineer Country coin.
          </Typography>
        </li>
        <li>
          <Typography>
            Find and log all 20 to earn a digital souvenir for your Geocaching
            profile.
          </Typography>
        </li>
      </ul>
      <Typography>
        If you’ve already found the 10 letterbox-hybrid Geocaches from last
        year’s event, there is no need to revisit these locations or show any
        verification. Simply find and log the 10 new caches to get your new
        GeoTour coin and souvenir. Passports can be picked up at any event, and
        coins can be redeemed by visiting the Visit Mountaineer Country CVB
        table on Saturday (6/27) at the main event. Coins will also be available
        to be picked up at the Visit Mountaineer Country CVB office, Monday
        through Friday, following the event.
      </Typography>

      <Typography width="100%">
        For a list of caches, please visit{' '}
        <a target="_blank" href="/Projects/VMCGT">
          www.CacheMore.com/Projects/VMCGT
        </a>
        .
      </Typography>

      <Typography variant="h4">Frequently Asked Questions</Typography>
      <Grid container>
        <FaqCard question="Do I need to register to participate in the Tech Team Challenge, Trading Card Challenge, and GeoTour?">
          <Typography>
            Registration is not required to attend CacheMore 2026 or participate
            in any of the event activities; however, event merchandise does
            contain clues required to complete the Tech Team Challenge. On-site
            registration, as well as the purchasing of individual items, will be
            available in the event store at Mylan Park.
          </Typography>
        </FaqCard>

        <FaqCard question="What happens if I miss the Signal Symposium event on Friday evening? Will I still be able to complete the mystery?">
          <Typography>
            The Signal Symposium event will feature a team activity that is
            required to complete the Tech Team Challenge, so it’s highly
            encouraged that you attend. If you miss it, though, stop by the main
            event on Saturday (6/27) to continue the hunt for clues from that
            event.
          </Typography>
        </FaqCard>
        <FaqCard question="Do I need a smartphone with NFC capability to complete the Tech Team Challenge? ">
          <Typography>
            Yes, you will need a smartphone with access to the Adventure Lab app
            and NFC technology. If you encounter any NFC chips that aren’t
            working correctly, please stop by the information table at Mylan
            Park to get assistance.
          </Typography>
        </FaqCard>
        <FaqCard question="Can the Adventure Labs be completed in any order, or do they need to be completed sequentially?">
          <Typography>
            There are 5 sets of 5 Adventure Labs, with a lot of overlap with
            other caches placed throughout Morgantown. These locations can be
            visited in any order, but please be mindful of the hours of
            operation for each location and review the event map above
            carefully.
          </Typography>
        </FaqCard>
        <FaqCard question="Do I need all 75 trading cards to solve the Trading Card Challenge, or only certain cards?">
          <Typography>
            To complete the full puzzle, all 75 trading cards will need to be
            collected; however, more advanced puzzle solvers may be able to
            sleuth out the solution with only half. Please review the
            information found in your registration package for more details on
            which cards are the most important.
          </Typography>
        </FaqCard>
        <FaqCard question="What happens if I have already completed last year's Country Roads Challenge caches? Do I need to revisit them to earn the GeoTour rewards?">
          <Typography>
            Nope! Simply find the 10 new gadget caches to be published on Friday
            (6/26) at 10 am and record the 10 code words on your passport to
            earn the new GeoTour souvenir. Make sure all 20 caches are logged on{' '}
            <a href="https://www.Geocaching.com" target="_blank">
              Geocaching.com
            </a>{' '}
            to earn your souvenir.
          </Typography>
        </FaqCard>
        <FaqCard question="When exactly will the bonus caches be published, and can they be found before the Closing Ceremonies?">
          <Typography>
            The bonus mysteries for the Tech Team Challenge and Trading Card
            Challenge will be published following the closing ceremonies on
            Saturday (6/27), but you can locate the final as soon as you have
            collected enough clues!
          </Typography>
        </FaqCard>
        <FaqCard question="How do I qualify for and claim the Tech Team Challenge finisher coin?">
          <Typography>
            To claim the Tech Team Challenge finisher coin, you need to find the
            final mystery Geocache by collecting the coordinates of RUBATOSE’s
            transmitter antenna and access pin code. Once found, please take a
            picture of yourself at the location and record a one-time code to
            show at the information table at Mylan Park to claim your Geocoin.
          </Typography>
        </FaqCard>
      </Grid>
    </div>
  )
}
