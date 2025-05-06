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

// function NonPictureCard({
//   title,
//   children,
// }: {
//   title: string
//   children: React.ReactNode
// }): JSX.Element {
//   const isMobile = useIsMobile()

//   return (
//     <Grid item xs={6}>
//       <div
//         style={{
//           borderRadius: '12px',
//           padding: '0rem 0.6rem',
//           height: '100%',
//           textAlign: 'left',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         <Typography
//           variant="h3"
//           fontSize={isMobile ? '1.4rem' : '1.6rem'}
//           fontWeight="bold"
//           textAlign="center"
//           marginTop="0.8rem"
//           marginBottom="0.6rem"
//         >
//           {title}
//         </Typography>
//         {children}
//       </div>
//     </Grid>
//   )
// }

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
          GeoWoodstock XXI is free to attend, but SWAG sales such as Geocoins,
          shirts, and Pathtags help fund the event and all the additional
          activities. These souvenirs not only allow you to remember your time
          in Almost Heaven, but they also help contribute to making GeoWoodstock
          XXI the best event possible. Check out what's available below, and
          when you're ready, click the Shop icon above to visit our store. These
          items will be available in very limited quantities until April 25, and
          once they sell out, they may not be available for purchase at the main
          event.
        </Typography>
        <br />
        <Typography textAlign="start" width="100%">
          A few important things to note:
        </Typography>
        <ul style={{ textAlign: 'start', margin: '0.5rem 4px' }}>
          <li>
            <Typography>
              Individual items are still available for purchase until April 25.
              The deadline to order a prepackaged registration bundle was Jan.
              31. At this time, we've sold out of all packages, but a minimal
              number of individual items are still in stock.
            </Typography>
          </li>
          <li>
            <Typography>
              All orders placed after the Jan. 31 pre-registration deadline will
              still include a name badge, event program, and wooden nickel,
              while supplies last.
            </Typography>
          </li>
          <li>
            <Typography>
              If you would still like to take advantage of VIP perks such as
              preferred parking and early access to GeoWoodstock HQ, you may
              still purchase the 'Friends of GeoWoodstock' package, while
              supplies last.
            </Typography>
          </li>
          <li>
            <Typography>
              If you previously made a purchase but want to buy additional
              items, please use the same name and contact information and we
              will include all items together during package pickup.
            </Typography>
          </li>
          <li>
            <Typography>
              Pre-ordered SWAG is only available for in-person pickup on Friday
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
          <PictureCard
            title="GeoWoodstock XXI Trackable Geocoin"
            text="The official GeoWoodstock XXI trackable Geocoin is truly a celebration of all things West Virginia. This movable coin features Signal the Frog zipping through the skies with Appalachian iconography filling the picturesque landscape."
            imgSrc={`${import.meta.env.BASE_URL}updatedregister/2_200x200.png`}
            imgAlt="picture of the trackable coin for the main Geowoodstock XXI event"
          />

          <Grid item xs={12} marginBottom="1rem"></Grid>

          <PictureCard
            title="GeoWoodstock XXI Event Shirt"
            text="Locally sourced in Davis, WV, this tri-blend super soft unisex t-shirt is not only comfy, but stylish too!"
            imgSrc={`${import.meta.env.BASE_URL}updatedregister/4_200x200.png`}
            imgAlt="picture of the shirt made for the event"
          />

          <Grid item xs={12} marginBottom="1rem"></Grid>

          <PictureCard
            title="Event Pathtag Set (8)"
            text="This year's event Pathtag set contains 8 tags, each depicting a different side event from GeoWoodstock XXI weekend."
            imgSrc={`${import.meta.env.BASE_URL}updatedregister/5_200x200.png`}
            imgAlt="Picture of all 7 pathtags for the event"
          />

          <Grid item xs={12} marginBottom="1rem"></Grid>

          <PictureCard
            title="Meal Ticket"
            text="Lunch will be served at Mylan Park on Saturday, May 24, 2025, from 11 am to 2 pm. The menu includes an authentic Appalachian meal complete with pepperoni rolls and WV hotdogs, as well as additional sides and a drink. Vegetarian and gluten-free options will be available as well."
            imgSrc={`${import.meta.env.BASE_URL}updatedregister/6_200x200.png`}
            imgAlt=""
          />

          <Grid item xs={12} marginBottom="1rem"></Grid>

          <PictureCard
            title="GIGA Geocoin"
            text="Celebrating America's 2nd GIGA, this two-piece trackable Geocoin features Signal the Frog conducting an iconic weekend in Appalachia! A very limited number of these are being made, so don't miss out on your chance to grab this collector's item."
            imgSrc={`${import.meta.env.BASE_URL}updatedregister/3_200x200.png`}
            imgAlt=""
          />

          <Grid item xs={12} marginBottom="1rem"></Grid>

          <PictureCard
            title="Friends of GeoWoodstock"
            text="This limited-edition gold-plated Geocoin is only available with a generous $100 donation. In addition, enjoy VIP perks such as preferred parking and early line access as well as having your name listed on the official Friends of GeoWoodstock banner."
            imgSrc={`${import.meta.env.BASE_URL}updatedregister/7_200x200.png`}
            imgAlt=""
          />

          <Grid item xs={12} marginBottom="1rem"></Grid>
        </Grid>
      </Section>

      <Section style={{ flexDirection: 'column' }}>
        <Typography variant="h3" marginBottom="1.4rem">
          Frequently Asked Questions
        </Typography>
        <Grid container>
          <FaqCard question="Do I need to register for GeoWoodstock?">
            <Typography>
              While this is a free-to-attend event, your support is greatly
              appreciated. No purchase is necessary, but please log a Will
              Attend for{' '}
              <a target="_blank" href="https://coord.info/gcanxx1">
                GCANXX1
              </a>{' '}
              to let us know you are planning on joining the fun in Morgantown.
            </Typography>
          </FaqCard>
          <FaqCard question="When and where can I pick up my registration package?">
            <Typography>
              Registration packages can be picked up on Friday (5/23/25) or
              Saturday (5/24/25) at GeoWoodstock HQ. Country Roads Challenge
              passports will be available on Thursday (5/22) at the morning side
              event.
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
          <FaqCard question="Can VIPs and Friends of GeoWoodstock brings guests into preferred areas?">
            <Typography>
              Yes - those attending in the same party will have the opportunity
              to travel together to preferred lines and VIP-only areas. Please
              have everyone in your group arrive together and in one car, if
              possible. Only one parking spot will be reserved per VIP
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
          <FaqCard question="Can someone else pick my registration package up for me?">
            <Typography>
              With expressed permission from the individual who purchased the
              package, SWAG can be picked up by others if you are unable to
              attend the event. Registration packages will not be mailed out.
            </Typography>
          </FaqCard>

          <FaqCard question="When will the store close?">
            <Typography>
              The final day to pre-order any SWAG items will be April 25. Some
              items may be available in limited quantities at the event in May.
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
