import { Button, Grid, Typography } from '@mui/material'
import { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Section } from '../../components/Section'
import { useIsMobile } from '../../hooks/useIsMobile'
import { FaqCard } from '../Faqs/Faqs'

function PictureCard({
  title,
  text,
  imgSrc,
  imgAlt,
}: {
  title: string
  text: React.ReactNode
  imgSrc: string
  imgAlt: string
}): JSX.Element {
  const isMobile = useIsMobile()

  if (isMobile) {
    return (
      <Fragment>
        <Grid item xs={4}>
          <img
            alt={imgAlt}
            src={imgSrc}
            style={{ maxWidth: '100%', aspectRatio: '1' }}
          />
        </Grid>
        <Grid item xs={8}>
          <div
            style={{
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              paddingLeft: '1rem',
            }}
          >
            <Typography
              variant="h3"
              fontSize="1.4rem"
              textAlign="start"
              marginBottom="0.6rem"
            >
              {title}
            </Typography>
            <Typography>{text}</Typography>
          </div>
        </Grid>
      </Fragment>
    )
  }

  return (
    <Fragment>
      <Grid item xs={3}>
        <img
          alt={imgAlt}
          src={imgSrc}
          style={{ maxWidth: '100%', aspectRatio: '1' }}
        />
      </Grid>
      <Grid item xs={9}>
        <div
          style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            paddingLeft: '1rem',
          }}
        >
          <Typography
            variant="h3"
            fontSize="1.6rem"
            textAlign="start"
            marginBottom="0.6rem"
          >
            {title}
          </Typography>
          <Typography>{text}</Typography>
        </div>
      </Grid>
    </Fragment>
  )
}

function NonPictureCard({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}): JSX.Element {
  const isMobile = useIsMobile()

  return (
    <Grid item xs={6}>
      <div
        style={{
          borderRadius: '12px',
          padding: '0rem 0.6rem',
          height: '100%',
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h3"
          fontSize={isMobile ? '1.4rem' : '1.6rem'}
          fontWeight="bold"
          textAlign="center"
          marginTop="0.8rem"
          marginBottom="0.6rem"
        >
          {title}
        </Typography>
        {children}
      </div>
    </Grid>
  )
}

function PackageCard({
  imgSrc,
  buyLink,
  pkgName,
}: {
  imgSrc: string
  buyLink: string
  pkgName: string
}): JSX.Element {
  const isMobile = useIsMobile()
  return (
    <Grid
      item
      xs={12}
      md={6}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography
        variant="h3"
        marginBottom="1rem"
        fontSize={isMobile ? '2.4rem' : '3rem'}
      >
        {pkgName} Package
      </Typography>
      <img
        src={imgSrc}
        style={{
          aspectRatio: 1,
          width: '100%',
          maxWidth: '640px',
          borderRadius: '12px',
        }}
      />
      <Button
        target="_blank"
        href={buyLink}
        variant="contained"
        color="warning"
        sx={{
          marginTop: '0.5rem',
          borderRadius: '64px',
          fontWeight: 'bold',
          fontSize: '1.4rem',
          textAlign: 'center',
          maxWidth: '480px',
          marginBottom: '3rem',
        }}
      >
        Purchase {pkgName} Package
      </Button>
    </Grid>
  )
}

export function Register(): JSX.Element {
  const isMobile = useIsMobile()

  const sectionStyles: React.CSSProperties = isMobile
    ? {
        textAlign: 'center',
        flexDirection: 'column',
        padding: '12px',
        maxWidth: 'calc(100% - 24px)',
        alignItems: 'center',
      }
    : { flexDirection: 'column', alignItems: 'center' }

  return (
    <Fragment>
      <Helmet>
        <title>GeoWoodstock XXI - Registration and SWAG Packages</title>
        <meta
          name="description"
          content="GeoWoodstock XXI is a free-to-attend event, but registering everyone in your party helps the event organizers prepare for an accurate number of attendees. Paid registration options are also available for additional activities such as the Country Roads Challenge and catered lunch. In addition to activities, paid registration options also include souvenirs to remember your time in Almost Heaven such as trackable Geocoins, Pathtags, a shirt, and much more. Not only are these nice keepsakes from the event, but your financial contribution helps ensure GeoWoodstock XXI will be the best event possible. Check out what’s available below, and when you’re ready, click the Shop icon above to visit our store. Registration options will be available starting October 11, 2024, and end in February 2025."
        />
      </Helmet>

      <Typography variant="h2" textAlign="center" marginTop="2rem">
        Registration & SWAG Packages
      </Typography>

      <Section style={sectionStyles}>
        <Typography>
          GeoWoodstock XXI is a free-to-attend event, but registering everyone
          in your party helps the event organizers prepare for an accurate
          number of attendees. Paid registration options are also available for
          additional activities such as the Country Roads Challenge and catered
          lunch. In addition to activities, paid registration options also
          include souvenirs to remember your time in Almost Heaven such as
          trackable Geocoins, Pathtags, a shirt, and much more. Not only are
          these nice keepsakes from the event, but your financial contribution
          helps ensure GeoWoodstock XXI will be the best event possible. Check
          out what’s available below, and when you’re ready, click the Shop icon
          above to visit our store. Registration options will be available
          starting October 11, 2024, and end in February 2025.
        </Typography>
        <br />
        <Typography textAlign="start" width="100%">
          A few important things to note:
        </Typography>
        <ul style={{ textAlign: 'start', margin: '0.5rem 4px' }}>
          <li>
            <Typography>
              When selecting package options for your group, please ensure each
              individual registers, even if it’s just the free option. After
              completing each individual registration, click “add to cart”
              before processing the next, even if you are purchasing multiples
              of the same package. (For example, a family of 4 that caches
              together under one username might purchase Black Bear and Brook
              Trout packages for the adults, but two Rhododendron packages for
              the kids. This ensures everyone gets an individual name badge and
              helps us accurately estimate attendees.)
            </Typography>
          </li>
          <li>
            <Typography>
              Colors as shown in the graphics below are not exact and could be
              subject to change.
            </Typography>
          </li>
          <li>
            <Typography>
              Packages are only available for in-person pickup on Friday
              (5/23/25) and Saturday (5/24/25) at Mylan Park in Morgantown, WV.
              If you are unable to attend, you can designate another attendee to
              pick up your package on your behalf. Registration packages will
              not be shipped after the event.
            </Typography>
          </li>
          <li>
            <Typography>
              All sales are final and no refunds will be issued for any reason.
            </Typography>
          </li>
        </ul>

        <Button
          target="_blank"
          href="https://geowoodstockxxi.myshopify.com/collections/all"
          variant="contained"
          color="warning"
          sx={{
            marginTop: '0.5rem',
            borderRadius: '64px',
            fontWeight: 'bold',
            fontSize: '1.4rem',
            textAlign: 'center',
            maxWidth: '480px',
          }}
        >
          Click here to visit the store
        </Button>
      </Section>

      <Section style={{ ...sectionStyles, textAlign: 'start' }}>
        <Grid container maxWidth="800px" alignItems="center">
          <NonPictureCard title="Badge & Lanyard">
            <Typography>
              {
                'GeoWoodstock is all about meeting new people, so let them know who you are with a custom name badge and lanyard!*'
              }
            </Typography>
            <Typography fontSize="0.8rem" fontStyle="italic" marginTop="0.6rem">
              {
                '*Name badges in the rhododendron package will not be customized.'
              }
            </Typography>
          </NonPictureCard>
          <NonPictureCard title="Event Program">
            <Typography>
              {
                'Stay up to date on everything GeoWoodstock XXI with the event program. This easy-to-carry book contains event information, maps, sponsors, and even a few games to play!'
              }
            </Typography>
          </NonPictureCard>

          <Grid item xs={12} marginBottom="2rem"></Grid>

          <PictureCard
            title="Country Roads Challenge Passport"
            text={
              <Fragment>
                Presented by{' '}
                <a
                  href="https://www.VisitMountaineerCountry.com"
                  target="_blank"
                >
                  VisitMountaineerCountry.com
                </a>
                , this 10-stop tour will bring you to some of the best spots to
                eat, shop, and play in Mountaineer Country. Visit all 10 to earn
                a limited-edition trackable Geocoin.
              </Fragment>
            }
            imgSrc={`${import.meta.env.BASE_URL}register/CRC_Coin_200x200.webp`}
            imgAlt="picture of the country roads challenge trackable coin"
          />

          <Grid item xs={12} marginBottom="1rem"></Grid>

          <PictureCard
            title="GeoWoodstock XXI Trackable Geocoin"
            text="The official GeoWoodstock XXI trackable Geocoin is truly a celebration of all things West Virginia. This movable coin features Signal the Frog zipping through the skies with Appalachian iconography filling the picturesque landscape."
            imgSrc={`${import.meta.env.BASE_URL}register/Main_Event_Coin_200x200.webp`}
            imgAlt="picture of the trackable coin for the main Geowoodstock XXI event"
          />

          <Grid item xs={12} marginBottom="1rem"></Grid>

          <PictureCard
            title="GeoWoodstock XXI Event Shirt"
            text="Locally sourced in Davis, WV, this tri-blend super soft unisex t-shirt is not only comfy, but stylish too!"
            imgSrc={`${import.meta.env.BASE_URL}register/Event_Shirt_200x200.webp`}
            imgAlt="picture of the shirt made for the event"
          />

          <Grid item xs={12} marginBottom="1rem"></Grid>

          <PictureCard
            title="GeoWoodstock XXI Event Pathtag"
            text="The official GeoWoodstock XXI event Pathtag features the New River Gorge National Park and is a must have for your collection."
            imgSrc={`${import.meta.env.BASE_URL}register/Event_Pathtag_200x200.webp`}
            imgAlt="picture of the pathtag for the event"
          />

          <Grid item xs={12} marginBottom="1rem"></Grid>

          <PictureCard
            title="GeoWoodstock XXI Pathtag Set (7)"
            text="This year’s event Pathtag set contains 7 tags, each depicting a different side event from GeoWoodstock XXI weekend."
            imgSrc={`${import.meta.env.BASE_URL}register/Pathtag_Set_200x200.webp`}
            imgAlt="Picture of all 7 pathtags for the event"
          />

          <Grid item xs={12} marginBottom="1rem"></Grid>

          <PictureCard
            title="GeoWoodstock XXI VIP Trackable Geocoin"
            text="Keeping with the country roads theme, this trackable Geocoin celebrates our VIPs and is only available in the Mountaineer package."
            imgSrc={`${import.meta.env.BASE_URL}register/VIP_Coin_200x200.webp`}
            imgAlt="picture of the trackable VIP coin"
          />

          <Grid item xs={12} marginBottom="1rem"></Grid>

          <NonPictureCard title="Wooden Nickel">
            <Typography>
              {
                'Are you feeling lucky? Collect as many wooden nickels as you can for a chance to win prizes at GeoWoodstock HQ!'
              }
            </Typography>
          </NonPictureCard>
          <NonPictureCard title="Drawstring Bag">
            <Typography>
              {
                'Keep all your GeoWoodstock XXI SWAG safe with this easy to carry bag. It even has a pouch for your water bottle and snacks.'
              }
            </Typography>
          </NonPictureCard>

          <Grid item xs={12} marginBottom="1rem"></Grid>

          <NonPictureCard title="Catered Meal Ticket">
            <Typography>
              {
                'Lunch will be served at Mylan Park on Saturday, May 24, 2025, from 11 a.m. to 2 p.m. The menu includes an authentic Appalachian meal complete with pepperoni rolls and WV hotdogs, as well as additional sides and a drink. Vegetarian and gluten-free options will be available as well.'
              }
            </Typography>
          </NonPictureCard>
          <NonPictureCard title="Dry Bag">
            <Typography>
              {
                'Keep all your caching gear dry while exploring all that wild & wonderful West Virginia has to offer!'
              }
            </Typography>
          </NonPictureCard>

          <Grid item xs={12} marginBottom="1rem"></Grid>

          <NonPictureCard title="GeoWoodstock XXI BONUS Trackable Geocoin">
            <Typography>
              {
                "We can't spoil all the surprises, but trust us, you'll want this very special coin in your collection. (We'll give you a hint, it may or may not spin.)"
              }
            </Typography>
          </NonPictureCard>
          <NonPictureCard title="VIP Lounge Access">
            <Typography>
              {
                'Need to take a break from all the fun? Pull up a chair in the VIP lounge, grab some water, and chat with your caching buddies in an exclusive space just for you.'
              }
            </Typography>
          </NonPictureCard>

          <Grid item xs={12} marginBottom="1rem"></Grid>

          <NonPictureCard title="VIP Parking (at all applicable events)">
            <Typography>
              {
                'Purchasing the Mountaineer Package is the best way to ensure a parking spot close to the main event and all other side events, when available. Handicapped spots will be available first-come, first-served, but VIP parking guarantees your spot.'
              }
            </Typography>
          </NonPictureCard>
          <NonPictureCard title="VIP Preferred Lines">
            <Typography>
              {
                'Be treated like a true VIP and get early access to GeoWoodstock HQ as well as skip all the lines for package pickup, lunch, and additional activities. The only thing that is missing is the red carpet.'
              }
            </Typography>
          </NonPictureCard>
        </Grid>
      </Section>

      <Section style={sectionStyles}>
        <Grid container>
          <PackageCard
            pkgName="Cardinal"
            imgSrc={`${import.meta.env.BASE_URL}register/Cardinal_Package.png`}
            buyLink="https://geowoodstockxxi.myshopify.com/products/cardinal-package"
          />
          <PackageCard
            pkgName="Brook Trout"
            imgSrc={`${import.meta.env.BASE_URL}register/Brook_Trout_Package.png`}
            buyLink="https://geowoodstockxxi.myshopify.com/products/brook-trout-package"
          />
          <PackageCard
            pkgName="Black Bear"
            imgSrc={`${import.meta.env.BASE_URL}register/Black_Bear_Package.png`}
            buyLink="https://geowoodstockxxi.myshopify.com/products/black-bear-package"
          />
          <PackageCard
            pkgName="Mountaineer"
            imgSrc={`${import.meta.env.BASE_URL}register/Mountaineer_Package.png`}
            buyLink="https://geowoodstockxxi.myshopify.com/products/mountaineer-vip-package"
          />
          <Grid
            item
            xs={12}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <img
              src={`${import.meta.env.BASE_URL}register/Package_Comparison.png`}
              style={{
                aspectRatio: 1,
                width: '100%',
                maxWidth: '640px',
                borderRadius: '12px',
              }}
            />
          </Grid>
        </Grid>
      </Section>

      <Section style={{ flexDirection: 'column' }}>
        <Typography variant="h3" marginBottom="1.4rem">
          Frequently Asked Questions
        </Typography>
        <Grid container>
          <FaqCard question="What is the difference between logging a ‘Will Attend’ and registering? ">
            <Typography>
              Logging a 'Will Attend' on the event page (
              <a target="_blank" href="https://coord.info/gcanxx1">
                GCANXX1
              </a>
              ) is the first step, but to get an accurate count of attendees,
              you are encouraged to register each individual attendee through
              the online store. In addition, you can also purchase event
              merchandise and SWAG to help support the event.
            </Typography>
          </FaqCard>
          <FaqCard question="What registration package options are available?">
            <Typography>
              There are 5 options to choose from ranging from a free option to
              VIP. Registration packages have the option to include a name
              badge, lanyard, event coin, Pathtag set, event shirt, lunch
              ticket, Country Roads Challenge passport, and so much more.
            </Typography>
          </FaqCard>
          <FaqCard question="When and where can I pick up my registration package? ">
            <Typography>
              {
                'Registration packages can be picked up on Friday (5/23/25) or Saturday (5/24/25) at GeoWoodstock HQ. Country Roads Challenge passports will be available on Thursday (5/22) at the morning side event.'
              }
            </Typography>
          </FaqCard>
          <FaqCard question="Can someone else pick my registration package up for me?">
            <Typography>
              With expressed permission from the individual who purchased the
              package, SWAG can be picked up by others if you are unable to
              attend the event. Registration packages will not be mailed out.
            </Typography>
          </FaqCard>
          <FaqCard question="How do I get preferred parking?">
            <Typography>
              The best way to guarantee a parking spot close to the entrance of
              GeoWoodstock is to purchase the VIP package option. Limited
              handicap spots will be available on a first come, first serve
              basis. Please email{' '}
              <a href="mailto:info@GeoWoodstockXXI.com">
                info@GeoWoodstockXXI.com
              </a>{' '}
              to request an ADA parking pass.
            </Typography>
          </FaqCard>
          <FaqCard question="When will the store close? ">
            <Typography>
              Black Diamond Backer shirts are available for purchase until
              November 29, 2024. All other registration items should be
              purchased before January 31, 2025. Some items may be available in
              limited quantities at the event in May.
            </Typography>
          </FaqCard>

          <FaqCard question="Can VIPs bring guests into preferred areas?">
            <Typography>
              Yes - those attending in the same party will have the opportunity
              to travel together to preferred lines and VIP-only areas.
            </Typography>
          </FaqCard>
          <FaqCard question="How does the Country Roads Challenge work?">
            <Typography>
              10 caches will be published around Mountaineer Country starting at
              10 a.m. on Thursday (5/22/25). Passports will be available in all
              paid registration levels and available on Thursday at the Country
              Roads Challenge kickoff event or during package pickup at Mylan
              Park. Participants will have all weekend to find all 10 caches to
              claim a limited-edition trackable coin, courtesy of Visit
              Mountaineer Country. After Sunday, coins can be claimed on a
              first-come, first-served basis at the visitor center. For more
              information, please visit the event page for the Country Roads
              Challenge Kickoff (
              <a target="_blank" href="https://coord.info/GCANXX0">
                GCANXX0
              </a>
              ).
            </Typography>
          </FaqCard>
          <FaqCard question="How do I get my Friends of GeoWoodstock coin?">
            <Typography>
              By becoming a Friend of GeoWoodstock XXI, you'll receive a
              beautiful golden coin, minted only for our highest supporters.
              This coin will be available with your registration package when
              you pick up your SWAG. If you have already purchased a Friends of
              GeoWoodstock supporter package, but are unable to attend the
              event, please email{' '}
              <a href="mailto:info@GeoWoodstockXXI.com">
                info@GeoWoodstockXXI.com
              </a>{' '}
              for assistance.
            </Typography>
          </FaqCard>
          <FaqCard question="When will we get to see the bonus coin included in the VIP package?">
            <Typography>
              You'll see what this coin truly looks like when you pick up your
              package in May, but trust us, this is a special coin design you'll
              want to add to your collection.
            </Typography>
          </FaqCard>
          <FaqCard question="Can I register at the free level and upgrade later?">
            <Typography>
              We are encouraging all attendees to register through the online
              store, even if this is at the free level. If you know you are
              likely to purchase a SWAG package, there is no need to register at
              the free level and upgrade later, simply make one purchasing
              decision when you are ready.
            </Typography>
          </FaqCard>
          <FaqCard question="What's for lunch?">
            <Typography>
              Lunch will be held at Mylan Park on Saturday (5/24/25) from 11
              a.m. to 2 p.m. The primary lunch option will be pepperoni rolls
              and WV hotdogs, staples for the area. Gluten-free options are
              similar, with the hot dog buns and pasta being gluten-free.
              Vegetarian options include a black bean burger as well as a fruit
              cup.
            </Typography>
          </FaqCard>
        </Grid>
        <Typography textAlign="center" padding="0.8rem">
          Have a question that's not answered here? Send us an email to{' '}
          <a href="mailto:SWAG@GeoWoodstockXXI.com">SWAG@GeoWoodstockXXI.com</a>{' '}
          and we'll get back to you as soon as possible. Thanks!
        </Typography>
      </Section>
    </Fragment>
  )
}
