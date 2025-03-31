import { Fragment } from 'react/jsx-runtime'
import { GuideHeader } from '../GuideHeader'
import { GuideBody } from '../GuideBody'
import { Grid, Typography } from '@mui/material'
import { Subheader } from '../Subheader'
import { BoldKol } from '../CantMissExperiences/Counties'

function NickelCard({
  name,
  src,
  text,
}: {
  name: string
  src: string
  text: string
}) {
  return (
    <Grid
      item
      xs={12}
      md={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <div
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          display: 'flex',
          width: '80%',
        }}
      >
        <Typography fontSize="1.4rem">
          <BoldKol>{name}</BoldKol>
        </Typography>
        <img
          src={src}
          style={{ aspectRatio: '1', width: '80%', marginTop: '-0.4rem' }}
        />
        <Typography textAlign="center">{text}</Typography>
      </div>
    </Grid>
  )
}

export function Games() {
  return (
    <Fragment>
      <GuideHeader
        title="Games"
        subTitle="Collect wooden nickels and win prizes!"
      />
      <GuideBody>
        <Typography>
          It wouldn't be a Geocaching event without some prizes, and this year,
          we are giving away some of the biggest and best prizes yet! Throughout
          the event, you'll have the opportunity to collect wooden nickels with
          the GeoWoodstock XXI logo on them. Bring these tokens to the games
          area at Mylan Park on Friday (5/23) or Saturday (5/24) for a chance to
          win cache containers, trackables, pathtags, and MORE!
        </Typography>
        <br />
        <br />

        <Subheader>About Wooden Nickels</Subheader>
        <Typography>
          Wooden nickels are the currency of the GeoWoodstock games area and you
          can collect them in a variety of different ways including: meeting an
          ambassador at an event, pre-registering for GeoWoodstock, completing
          the BINGO board found in the event program, or participating in an
          activity at one of the side events. In addition, wooden nickels will
          be scattered in caches throughout the weekend, so keep an eye out as
          you explore Morgantown!
        </Typography>
        <br />
        <Typography>
          Each wooden nickel equals one play on any of the three games
          available, or you can collect five to play the big game. Wooden
          nickels will be marked on the back and returned to you, or discarded
          if you don't wish to keep them.
        </Typography>
        <br />
        <br />

        <Subheader>About the Games</Subheader>
        <Typography>
          Within the games area at Mylan Park, you'll have the opportunity to
          win three unique trackables, each representing one of the West
          Virginia state animals! Each game has a different trackable; play all
          three games to win the full set.
        </Typography>
        <br />
        <br />
        <Grid container rowSpacing={4}>
          <NickelCard
            name="Dice Game"
            src="/eventguide/info/cardinalnickel.png"
            text="Roll the dice and land on a winning number to win a Cardinal trackable."
          />
          <NickelCard
            name="Prize Wheel"
            src="/eventguide/info/bearnickel.png"
            text="Spin the prize wheel and land on a winning slot to win a Black Bear trackable."
          />
          <NickelCard
            name="Film Canister Game"
            src="/eventguide/info/troutnickel.png"
            text="Grab a winning film canister from the tote to win a Brook Trout trackable."
          />
        </Grid>
        <br />
        <br />
        <Typography>
          Each of these games cost one wooden nickel to play, or you can collect
          five wooden nickels to play our signature game: plinko! Each player
          who plays plinko will win a large prize. Plinko will have five
          different prizes available to win. Prizes will be as follows: a
          Cardinal trackable, a Black Bear trackable, a Brook Trout trackable,
          and an event Pathtag. Plinko will also have a “Grand Prize” slot. If a
          player's puck lands on the “Grand Prize” slot, that player will win
          ALL four plinko prizes.
        </Typography>
        <br />
        <Typography>
          Additionally, this three-piece trackable set will be available for
          purchase in our event store for $30, while supplies last. We encourage
          you to swap and trade with other attendees to complete your full set!
        </Typography>
        <br />
        <br />

        <Subheader>But wait... there's more!</Subheader>
        <Typography>
          In addition to winning these trackable prizes, there are dozens of
          other unique items to win including pens, magnets, cache containers,
          keychains, and more! Several of our featured vendors have also
          graciously donated prizes to give away, too! Small prizes will be
          randomly distributed throughout all games, with small prizes won being
          chosen by the player from the small prize pot. Players will have an
          approximately equal chance to win at each of the three main games.
        </Typography>
        <br />
        <br />

        <Subheader>Hours of operation</Subheader>
        <Typography>
          The games area will be within the main event center of Mylan Park and
          available at the following times:
        </Typography>
        <ul>
          <li>
            <Typography>Friday (5/23) from 8 am - 2:30 pm</Typography>
          </li>
          <li>
            <Typography>Saturday (5/24) from 8 am - 4:30 pm</Typography>
          </li>
        </ul>
        <Typography>
          Players in line by closing time WILL be allowed to play through but
          additional players will NOT be allowed to get in line past closing
          time.
        </Typography>
        <br />
      </GuideBody>
    </Fragment>
  )
}
