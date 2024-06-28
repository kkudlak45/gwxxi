import { Button, Grid, Typography, styled, useTheme } from '@mui/material'
import { Fragment } from 'react/jsx-runtime'
import { Section } from '../../components/Section'
import { useIsMobile } from '../../hooks/useIsMobile'
import { CHARCOAL } from '../../constants/theme'
import Carousel from 'react-multi-carousel'
import { FaqCard } from '../Faqs/Faqs'

const StyledGrid = styled(Grid)(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '16px',
  }
})

const carouselItems = [
  {
    title: 'Almost Heaven Swings',
    href: 'https://wvtourism.com/west-virginias-most-instagrammable-views',
    imgSrc: `${import.meta.env.BASE_URL}morgantown/Almost_Heaven_Swings.webp`,
  },
  {
    title: 'WV Waterfall Trail',
    href: 'https://wvtourism.com/west-virginia-waterfall-trail',
    imgSrc: `${import.meta.env.BASE_URL}morgantown/Waterfall_Trail.jpg`,
  },
  {
    title: 'New River Gorge',
    href: 'https://www.nps.gov/neri/index.htm',
    imgSrc: `${import.meta.env.BASE_URL}morgantown/NRG.webp`,
  },
  {
    title: 'Blackwater Falls',
    href: 'https://wvtourism.com/company/blackwater-falls-state-park',
    imgSrc: `${import.meta.env.BASE_URL}morgantown/Blackwater_Falls.jpg`,
  },
  {
    title: 'Dolly Sods',
    href: 'https://www.fs.usda.gov/recarea/mnf/recarea/?recid=12366',
    imgSrc: `${import.meta.env.BASE_URL}morgantown/Dolly_Sods.jpg`,
  },
  {
    title: 'Greenbrier Hotel',
    href: 'https://www.smithsonianmag.com/history/the-town-that-kept-its-nuclear-bunker-a-secret-for-three-decades-180984107',
    imgSrc: `${import.meta.env.BASE_URL}morgantown/The_Greenbrier.jpg`,
  },
  {
    title: "Harper's Ferry",
    href: 'https://www.battlefields.org/learn/topics/john-browns-harpers-ferry-raid',
    imgSrc: `${import.meta.env.BASE_URL}morgantown/Harpers_Ferry.webp`,
  },
  {
    title: 'Mothman',
    href: 'https://www.wboy.com/only-on-wboy-com/paranormal-w-va/the-legend-of-mothman-paranormal-w-va',
    imgSrc: `${import.meta.env.BASE_URL}morgantown/Mothman.png`,
  },
  {
    title: 'Hatfield McCoy Trails',
    href: 'https://trailsheaven.com',
    imgSrc: `${import.meta.env.BASE_URL}morgantown/HMT.jpg`,
  },
  {
    title: 'We Are Marshall',
    href: 'https://www.marshall.edu/history-and-traditions/sample-page/historic-buildings-and-monuments/memorial-fountain',
    imgSrc: `${import.meta.env.BASE_URL}morgantown/We_Are_Marshall.jpg`,
  },
  {
    title: "WV Tim's Gadgets",
    href: 'https://www.geocaching.com/play/geotours/berkeley-gadgets',
    imgSrc: `${import.meta.env.BASE_URL}morgantown/wvtim.png`,
  },
]

const infoBlocks = [
  {
    title: 'West Virginia University',
    imgSrc: `${import.meta.env.BASE_URL}morgantown/WVU.png`,
    href: `${import.meta.env.BASE_URL}events`,
    text: 'WVU is a cornerstone of Morgantown and deeply connected with the town’s (and state’s) identity and vibrancy. Did you know the Walt Disney World monorail is modeled after a people-moving system on campus known as the Personal Rapid Transit? While in town, you’ll have to stop and grab a picture in front of Woodburn Hall, the second most photographed building in the state behind the capitol!',
  },
  {
    title: 'Civil War History',
    imgSrc: `${import.meta.env.BASE_URL}morgantown/Civil_War.png`,
    href: `${import.meta.env.BASE_URL}events`,
    text: "For the history buffs, come explore the only state forged from the Civil War. The city's history is marked by its strategic location and divided loyalties during the war. One key attractions include the Mason-Dixon Historical Park, where the famous boundary line was drawn. Visitors can also explore historic downtown Morgantown, with its preserved architecture and monuments commemorating the region's role in the Civil War. Home of the first land battle of the war and birthplace of Stonewall Jackson, the history runs deep in West Virginia.",
  },
  {
    title: 'Adventure & Recreation',
    imgSrc: `${import.meta.env.BASE_URL}morgantown/Seneca_Rocks.jpg`,
    href: `${import.meta.env.BASE_URL}events`,
    text: 'Morgantown serves as a gateway to these incredible natural playgrounds, ensuring endless adventures for every outdoor enthusiast. Coopers Rock State Forest, just a short drive from downtown, boasts breathtaking overlooks, extensive hiking trails, and prime rock-climbing spots. The Monongahela River, flowing gracefully through Morgantown, is perfect for kayaking, offering serene waters and picturesque views. Beyond Morgantown, West Virginia is home to 36 state parks, each with its own unique charm and outdoor activities. Notably, the state proudly hosts the newest National Park in the country, the New River Gorge National Park and Preserve, which promises world-class hiking, rock climbing, and whitewater rafting',
  },
  {
    title: 'Food & Culture',
    imgSrc: `${import.meta.env.BASE_URL}morgantown/Pepperoni_Roll.jpg`,
    href: `${import.meta.env.BASE_URL}events`,
    text: "West Virginia's rich Italian heritage, stemming from the influx of Italian immigrants who came to work in the coal mines, has left an indelible mark on the state's culture, most deliciously embodied in the creation of the pepperoni roll. This beloved snack, originally designed as a convenient and hearty meal for miners, reflects the blend of Italian culinary traditions and Appalachian ingenuity. The town is also the birthplace of the legendary actor Don Knotts, a cherished figure who adds to the region's vibrant historical tapestry. The Italian influence in West Virginia is a testament to the enduring spirit and contributions of its immigrant communities.",
  },
]

const carouselBreakpoints = {
  xl: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  md: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  sm: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  xs: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

export function Morgantown() {
  const isMobile = useIsMobile()
  const { palette } = useTheme()

  return (
    <Fragment>
      <Typography
        variant="h2"
        sx={{ fontSize: { xs: '3rem', sm: '3.75rem' } }}
        textAlign="center"
        marginTop="2rem"
      >
        MORGANTOWN
      </Typography>
      <Typography fontSize="2.4rem" variant="h3" padding="8px">
        LET US SHOW YOU AROUND!
      </Typography>

      <Section style={isMobile ? { textAlign: 'center' } : {}}>
        <Grid container justifyContent="center" alignItems="center">
          <StyledGrid item xs={12} md={6}>
            <img
              src={`${import.meta.env.BASE_URL}morgantown/morgantown.jpg`}
              width="90%"
              style={{
                borderRadius: '16px',
                border: `2px solid ${CHARCOAL}`,
                aspectRatio: 1328 / 1062,
              }}
            />
          </StyledGrid>
          <StyledGrid
            item
            xs={12}
            md={6}
            sx={{ flexDirection: 'column', gap: '1rem' }}
          >
            <Typography>
              Welcome to Morgantown, West Virginia, a gem nestled in the heart
              of Appalachia, where adventure awaits around every corner for
              geocachers. Known for its stunning natural landscapes, Morgantown
              offers a unique blend of rugged terrain, scenic trails, and hidden
              treasures just waiting to be discovered. As you explore the rich
              history and vibrant culture of this charming town, you'll find
              yourself immersed in an exhilarating Geocaching experience.
              Whether you're strolling down main street, scaling rocky outcrops,
              or navigating the winding banks of the Monongahela River,
              Morgantown promises an unforgettable journey filled with
              excitement and discovery for geocachers of all levels.
            </Typography>
            <Typography>
              Exploring outside the city, you’ll want to check out all the
              Mountain State has to offer while you travel for GeoWoodstock
              weekend. We recommend spending a few days before the event to
              cache in the eastern panhandle with WVTim or visit the New River
              Gorge, the newest National Park in the country. In addition to
              these iconic tourist stops, there are also lesser-known gems such
              as the state parks in Davis, the historic train in Cass, or the
              elusive Mothman in Point Pleasant. One week in West Virginia might
              not be long enough!
            </Typography>
          </StyledGrid>
        </Grid>
      </Section>

      <Section>
        <Grid container sx={{ width: '100%' }}>
          {infoBlocks.map((info) => {
            return (
              <Grid
                key={info.title}
                item
                xs={12}
                md={6}
                lg={3}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'flex-start',
                  alignItems: 'center',
                }}
              >
                <Typography
                  variant="h3"
                  fontSize="2rem"
                  sx={{
                    minHeight: { md: '5rem', xs: undefined },
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 10%',
                  }}
                >
                  {info.title}
                </Typography>
                <img
                  src={info.imgSrc}
                  draggable={false}
                  style={{
                    maxWidth: '80%',
                    maxHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    aspectRatio: 1,
                    marginTop: '16px',
                    borderRadius: '12px',
                    border: `2px solid ${CHARCOAL}`,
                  }}
                />
                <Typography
                  textAlign={isMobile ? 'center' : 'start'}
                  sx={{ padding: isMobile ? '16px' : '16px 16px 0px 16px' }}
                >
                  {info.text}
                </Typography>
              </Grid>
            )
          })}
        </Grid>
      </Section>

      <div
        style={{
          backgroundColor: palette.grey[200],
          padding: '1rem 0',
          margin: '32px 0',
        }}
      >
        <Typography variant="h3">Take a Tour</Typography>
        <Typography textAlign="center" marginTop="0.4rem" marginBottom="2rem">
          Spend a few extra days and explore everything the Mountain State has
          to offer!
        </Typography>
        <Carousel
          responsive={carouselBreakpoints}
          swipeable
          draggable
          infinite
          autoPlay
          arrows={false}
          showDots
          autoPlaySpeed={3000}
          keyBoardControl
          removeArrowOnDeviceType={['xs', 'sm']}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {carouselItems.map((item) => {
            return (
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  paddingBottom: '1.6rem',
                }}
              >
                <img
                  src={item.imgSrc}
                  style={{
                    aspectRatio: 4 / 3,
                    maxWidth: '80%',
                    borderRadius: '16px',
                    border: `2px solid ${CHARCOAL}`,
                  }}
                />
                <Typography>
                  <a href={item.href} target="_blank">
                    {item.title}
                  </a>
                </Typography>
              </div>
            )
          })}
        </Carousel>
      </div>

      <Section
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: { xs: 'center', md: 'start' },
        }}
      >
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <img
              src={`${import.meta.env.BASE_URL}morgantown/mcvb.png`}
              style={{ maxWidth: '80%', aspectRatio: 1568 / 790 }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography padding="0 16px">
              We want to showcase what happens when southern hospitality meets
              Appalachian charm, so we've teamed up with Visit Mountaineer
              Country CVB to ensure an unforgettable GeoWoodstock weekend for
              all cachers. Enjoy discounted hotels, along with savings on
              shopping, dining, and recreational activities throughout the week.
              Check out our deals page below for more info and to start planning
              your West Virginia vacation!
            </Typography>
            <div style={{ padding: '1rem 16px' }}>
              <Button
                target="_blank"
                href="https://www.visitmountaineercountry.com/deals/"
                variant="contained"
                color="warning"
                sx={{
                  borderRadius: '64px',
                  fontWeight: 'bold',
                  fontSize: '1.4rem',
                }}
              >
                CLICK HERE FOR DEALS AND DISCOUNTS
              </Button>
            </div>
          </Grid>
        </Grid>
      </Section>

      <Section sx={{ flexDirection: 'column', gap: '2rem' }}>
        <Grid container>
          <FaqCard question="What kind of weather can I expect?">
            <Typography>
              In May, Morgantown, typically enjoys mild and pleasant weather.
              Average daytime temperatures range from the mid-60s to the mid-70s
              Fahrenheit (18-24°C), with cooler mornings and evenings. Rain is
              possible, so it's a good idea to pack a light jacket and an
              umbrella. Overall, May is a beautiful time to visit, with blooming
              flowers and lush greenery enhancing the scenic landscape.
            </Typography>
          </FaqCard>
          <FaqCard question="Are the Country Roads tricky to navigate?">
            <Typography>
              Just like any caching adventure, you might find yourself in some
              remote areas if you plan to cache outside of Morgantown. While the
              beauty of the region is well worth the drive, consider downloading
              maps and caches for offline use before your visit. Most parts of
              the Mountain State are well connected with paved roads, but just
              because your GPS shows a road, it doesn’t mean it connects to
              where you want to go. If a cache page mentions needing a high
              clearance vehicle, this isn’t a suggestion. We love our country
              roads, but for visitors who aren’t used to them, stay alert and
              watch for deer crossing the roads unexpectedly. Allow for extra
              time to get to your destination; speed limits are maximums and you
              may find the comfortable driving speed is well below that.
            </Typography>
          </FaqCard>
          <FaqCard question="I want to try to collect counties, what can I expect?">
            <Typography>
              West Virginia is home to 55 counties, all of which are small in
              comparison to those out west. Counties near the I-79 corridor from
              Charleston to Morgantown are filled with caches and easy to
              access, but others such as those along the Appalachian highlands
              will require long drives on curvy roads. If you are interested in
              completing the WV County Challenge and finding the bonus cache
              (GC1QWJF), please make arrangements with the CO prior to your trip
              because the final is not near Charleston.
            </Typography>
          </FaqCard>
          <FaqCard question="What should I watch out for?">
            <Typography>
              When geocaching in Morgantown, be mindful of local wildlife like
              rattlesnakes and copperheads; although unlikely, give them space
              if you encounter them. Check for ticks at the end of each caching
              day and watch out for poison ivy by recognizing its three-leaf
              clusters. Stay aware and enjoy a safe adventure!
            </Typography>
          </FaqCard>
        </Grid>
      </Section>
    </Fragment>
  )
}
