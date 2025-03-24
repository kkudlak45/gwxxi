import { Fragment } from 'react/jsx-runtime'
import { GuideHeader } from '../GuideHeader'
import { GuideBody } from '../GuideBody'
import { Grid, Typography } from '@mui/material'
import { BoldKol } from '../CantMissExperiences/Counties'

export function Health() {
  return (
    <Fragment>
      <GuideHeader title="Health & Safety" />

      <GuideBody>
        <Typography>
          We are looking forward to hosting cachers from around the world to our
          home here in Almost Heaven, and while it’s going to be a weekend of
          fun, health and safety will always be our number one priority. As with
          caching in any new area, we want to make you aware of some potential
          risks you may encounter so you can be prepared for what to do.
        </Typography>
        <br />
        <Typography>
          <BoldKol style={{ color: 'red' }}>
            IN CASE OF EMERGENCY CALL 911.
          </BoldKol>{' '}
          Please don't hesitate. If you encounter another cacher needing help
          while out on the trail, please stop to help, Geocaching can wait.
        </Typography>
        <br />
        <Typography>
          Morgantown has two major hospitals, you can find their information
          below.
        </Typography>
        <br />

        <Typography>
          <BoldKol>J.W. Ruby Memorial Hospital</BoldKol> -{' '}
          <a href="maps:?q=1+Medical+Center+Dr,+Morgantown,+WV">
            1 Medical Center Dr, Morgantown, WV 26506
          </a>{' '}
          - <a href="tel:3045984000">(304) 598-4000</a>
        </Typography>
        <Typography>
          <BoldKol>Mon Health</BoldKol> -{' '}
          <a href="maps:?q=1200+J+D+Anderson+Dr,+Morgantown,+WV">
            1200 J D Anderson Dr, Morgantown, WV 26505
          </a>{' '}
          - <a href="tel:3045981200">(304) 598-1200</a>
        </Typography>
        <Typography>
          <BoldKol>Morgantown Police Department (Non-Emergency)</BoldKol> -{' '}
          <a href="tel:3045984000">(304) 284-7454</a>
        </Typography>

        <br />

        <Typography>
          If you are planning on exploring some of the area that make West
          Virginia so wild and wonderful, please keep these things in mind.
        </Typography>

        <br />

        <Typography>
          <BoldKol>Venomous Snakes</BoldKol>. West Virginia is home to two
          venomous snakes: copperheads and rattlesnakes. While rattlesnakes will
          usually alert you of their presence with an unmistakable noise,
          copperheads can be trickier to spot, especially while sunbathing on
          rocks. Please be on high alert while caching at Coopers Rock State
          Park and Snake Hill WMA, as these areas have the healthiest population
          of snakes in the region; otherwise, a venomous snake spotting is
          unlikely. Be sure to look in rock crevasses and hollow logs before
          sticking your hand in to retrieve a cache. Poking with a stick first
          is highly recommended.
        </Typography>

        <br />

        <Grid
          container
          justifyContent="space-evenly"
          alignItems="center"
          rowSpacing={2}
        >
          <Grid item xs={12} sm={4}>
            <img
              src="/eventguide/exploring/copperhead_600x338.png"
              style={{ maxWidth: '600px', width: '100%' }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <img
              src="/eventguide/exploring/rattler_600x459.png"
              style={{ maxWidth: '600px', width: '100%' }}
            />
          </Grid>
        </Grid>

        <br />

        <Typography>
          <BoldKol>Ticks.</BoldKol> As several members of our team will tell
          you, lyme disease is not fun, so please check for ticks. To watch out
          for ticks, avoid tall grass and wooded areas, wear protective
          clothing, and use insect repellent containing DEET or permethrin.
          After spending time outdoors, check your body thoroughly for ticks,
          paying attention to hidden areas, and remove any ticks promptly with
          tweezers, pulling them straight out without twisting.
        </Typography>

        <br />

        <Typography>
          <BoldKol>Wildlife Encounters.</BoldKol> West Virginia's forests and
          trails are home to a variety of wildlife, including black bears,
          snakes, deer, and smaller animals like raccoons and squirrels. While
          most wildlife will avoid humans, encounters can happen, particularly
          if you inadvertently get too close or disturb them. To minimize risks,
          make noise while hiking to alert animals to your presence, avoid
          feeding or approaching any wildlife, and store food securely to
          prevent attracting animals.
        </Typography>

        <br />

        <Typography>
          <BoldKol>Posion Ivy.</BoldKol> Poison ivy is a common hazard in West
          Virginia's natural areas and can cause an itchy, blistering rash if
          you come into contact with it. Learn to recognize its distinctive
          “leaves of three” pattern, which can appear as clusters of glossy
          green leaves in the spring and summer or reddish hues in the fall.
          Avoid touching vegetation unnecessarily, and wear long sleeves and
          pants when exploring dense or overgrown areas. If you suspect
          exposure, wash the affected area with soap and water as soon as
          possible, and consider carrying anti-itch cream or antihistamines in
          your first-aid kit for relief.
        </Typography>

        <br />

        <Typography>
          <BoldKol>Remote Locations.</BoldKol> Many Geocaching spots in West
          Virginia are in remote areas, offering scenic beauty but limited
          access to resources and communication. Cell service can be unreliable
          in these regions, so always carry a map, compass, or GPS device to
          navigate. Let someone know your plans and expected return time, and
          pack essentials such as water, snacks, a flashlight, and a first-aid
          kit. Being prepared for emergencies, such as injuries or getting lost,
          is crucial when exploring secluded areas far from help.
        </Typography>

        <br />

        <Typography>
          <BoldKol>Country Roads.</BoldKol> While most road in West Virginia are
          well maintained, you may find yourself on a narrow, hillside, or
          gravel road at some point throughout the weekend. Please be mindful of
          this and just because the speed limit says you can go faster, doesn’t
          mean you should. If you are caching via rental car, please use extra
          caution as you acclimate to both the new car and our country roads.
        </Typography>

        <br />

        <Typography>
          <BoldKol>Private Property.</BoldKol> When geocaching in West Virginia,
          it's essential to respect private property and ensure you have
          permission before entering any non-public areas. Some geocaches may be
          located near private land, so carefully read cache descriptions and
          maps to avoid trespassing. Look for signs or fences marking property
          boundaries, and if in doubt, skip the cache rather than risk legal or
          safety issues. Respecting property rights helps maintain positive
          relationships between geocachers, landowners, and the broader
          community.
        </Typography>

        <br />

        <Typography>
          <BoldKol>Uneven Terrain.</BoldKol> Know your limits. West Virginia is
          known as the Mountain State for a reason and you may find yourself
          climbing steep hills or otherwise navigating tricky terrain. Let
          someone know where you are going and keep your caching partners close.
          Many rock ledges in the area are made up of sandstone or shale, and
          can easily breakaway. Hiking boots are strongly recommended.
        </Typography>

        <br />

        <Typography>
          <BoldKol>Tree Climbs.</BoldKol> Morgantown has a slightly younger
          caching population than most areas, which means more adventurous
          caches such as tree climbs. Again, know your limits and be mindful of
          your step while trying to reach these caches.
        </Typography>

        <br />

        <Typography>
          <BoldKol>Weather.</BoldKol> May in Morgantown, WV, typically brings
          mild to warm temperatures, often ranging from the mid-50s to the
          mid-70s, with a mix of sunny days and occasional rain showers. The
          weather can be unpredictable, so it's wise to bring a light raincoat
          or umbrella for sudden downpours. With increasing humidity and warmer
          days, staying hydrated is essential, especially if you're outdoors
          enjoying the area's scenic trails or events. Keep an eye on the
          forecast and dress in layers to stay comfortable as temperatures can
          fluctuate throughout the day.
        </Typography>

        <br />
      </GuideBody>
    </Fragment>
  )
}
