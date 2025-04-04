import { Fragment } from 'react/jsx-runtime'
import { GuideHeader } from '../GuideHeader'
import { GuideBody } from '../GuideBody'
import { Subheader } from '../Subheader'
import { Grid, Typography } from '@mui/material'
import { BoldKol } from '../CantMissExperiences/Counties'

function PictureCard({
  title,
  text,
  imgSrc,
}: {
  title: string
  text: React.ReactNode
  imgSrc: string
}): JSX.Element {
  return (
    <Fragment>
      <Grid item xs={3} md={2}>
        <img
          src={imgSrc}
          style={{ maxWidth: '200px', width: '100%', aspectRatio: '1' }}
        />
      </Grid>
      <Grid item xs={9} md={4}>
        <div
          style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            paddingLeft: '1rem',
          }}
        >
          <Typography fontSize="1.6rem" textAlign="start" marginBottom="0.6rem">
            <BoldKol>{title}</BoldKol>
          </Typography>
          <Typography fontSize="1.4rem">{text}</Typography>
        </div>
      </Grid>
    </Fragment>
  )
}

export function Pickup() {
  return (
    <Fragment>
      <GuideHeader title="Registration Pickup & Store" />

      <GuideBody>
        <Subheader>Pick-up Process</Subheader>
        <Typography>
          Pre-ordered package pick-up will take place on Friday (5/23) from 8
          am* to 3 pm and Saturday (5/24) from 8 am to 3 pm at GeoWoodstock HQ.
          (Please note: 8 - 10 am on Friday (5/23) is for VIPs and Friends of
          GeoWoodstock only. General admission to the event starts at 10 am).{' '}
          <BoldKol>
            All items must be picked up before 3 pm on Saturday (5/24).
          </BoldKol>
        </Typography>
        <br />
        <Typography>
          Package pick-up is located through the entrance doors and to the left.
          There will be two pick-up lines - one for general attendees and one
          for VIPs and Friends of GeoWoodstock. Please keep an eye out for
          signage and choose your line accordingly.
        </Typography>
        <br />
        <Typography>
          Prior to entering your line,{' '}
          <BoldKol>
            please have your package order confirmation receipt email available
          </BoldKol>{' '}
          so that volunteers can quickly find your package and expedite the
          process to receive your items. If you do not have your confirmation
          receipt email available, it will increase the likelihood of longer
          wait times for other guests.
        </Typography>
        <br />
        <Typography>
          Confirmation emails were sent to you by{' '}
          <a href="mailto:SWAG@geowoodstockxxi.com">SWAG@geowoodstockxxi.com</a>
          . If you did not receive a confirmation email or want to double check,
          please email{' '}
          <a href="mailto:SWAG@geowoodstockxxi.com">SWAG@geowoodstockxxi.com</a>{' '}
          with the full name listed on your package and an approximate date of
          purchase and our team will forward your receipt to the email on file.
        </Typography>
        <br />
        <Typography>
          We appreciate your patience as you wait in line. When you reach the
          front of the line, you'll be asked to show your confirmation receipt
          email to a volunteer, who will gather the necessary information to
          find your package and walk you through the items. Packages will be
          organized by your first and last name provided when purchasing.
        </Typography>
        <br />
        <div style={{ width: '100%' }}>
          <Typography>
            Upon receipt of the items, you'll be asked to sign to confirm you've
            received the correct items and package.
          </Typography>
        </div>
        <br />
        <br />

        <Subheader>I can't find my confirmation receipt email</Subheader>
        <Typography>
          If you're unable to provide a confirmation of your receipt, we will
          need a valid ID to look up your name and package information. To
          prevent longer wait times, we ask that you locate your confirmation
          receipt email ahead of time.
        </Typography>
        <br />
        <br />

        <Subheader>Picking up for others</Subheader>
        <Typography>
          Yes, you can pick up for others who have pre-ordered from the online
          store. You need that person's order confirmation email{' '}
          <BoldKol>-AND-</BoldKol> a note from the person giving you approval to
          pick up their items. A written note, email, or text will all suffice
          as long as the original purchaser's name is clearly visible.
        </Typography>
        <br />
        <br />

        <Subheader>I have an issue with my package</Subheader>
        <Typography>
          We've pre-packaged every order based on our packaging list, however,
          if we happen to forget something or you have another issue with your
          package, please talk to a volunteer at the registration pickup area,
          who will connect you with a member of the GeoWoodstock XXI staff.
        </Typography>
        <br />
        <Typography>
          If you want to exchange shirt sizes after picking up your packages,
          please visit our store. Shirt sizes run true to size, but if you are
          unhappy with the fit of your shirt, you may make an exchange while
          supplies last. We strongly recommend picking up your SWAG early if you
          fear this might be a concern.
        </Typography>
        <br />
        <br />

        <Subheader>Shipping Packages</Subheader>
        <Typography>
          We will not ship any packages that are not picked up by 3 pm on
          Saturday (5/24). Uncollected items will be sold in the GeoWoodstock
          XXI store.
        </Typography>
        <br />
        <br />

        <Subheader>Buying additional items</Subheader>
        <Typography>
          Additional SWAG is available for purchase in extremely limited
          quantities on a first-come, first-served basis. Cash and credit card
          payments will be taken. While supplies last, the list of items
          included for purchase include:
        </Typography>

        <br />

        <Grid container rowSpacing={{ xs: 4, md: 1 }} justifyContent="center">
          <PictureCard
            title="Event Geocoin"
            text="$22"
            imgSrc="/eventguide/info/store/eventcoin.png"
          />
          <PictureCard
            title="Pathtag Set (8)"
            text="$22"
            imgSrc="/eventguide/info/store/pathtags.png"
          />
          <PictureCard
            title="Event Shirt"
            text="$33"
            imgSrc="/eventguide/info/store/shirt.png"
          />
          <PictureCard
            title="Catered Meal Ticket"
            text="$22"
            imgSrc="/eventguide/info/store/lunch.png"
          />
          <PictureCard
            title="VIP License Plate Coin"
            text="$22"
            imgSrc="/eventguide/info/store/vip.png"
          />
          <PictureCard
            title="'I cached in the Mountain State' Coin"
            text="$22"
            imgSrc="/eventguide/info/store/wvcoin.png"
          />
          <PictureCard
            title="GIGA Coin"
            text="$28"
            imgSrc="/eventguide/info/store/gigacoin.png"
          />
          <PictureCard
            title="GWXXI Critters Trackable Set"
            text="$30"
            imgSrc="/eventguide/info/store/critters.png"
          />
          <PictureCard
            title="Raffle Tickets"
            text="$5 (500 max)"
            imgSrc="/eventguide/info/store/raffle.png"
          />
        </Grid>

        <Typography>
          <em>* Prices include tax</em>
        </Typography>
        <br />
      </GuideBody>
    </Fragment>
  )
}
