import { Fragment } from 'react/jsx-runtime'
import { GuideHeader } from '../GuideHeader'
import { GuideBody } from '../GuideBody'
import { Typography } from '@mui/material'
import { CHARCOAL } from '../../../constants/theme'
import { Subheader } from '../Subheader'
import { BoldKol } from '../CantMissExperiences/Counties'

function Vendor({
  children,
  href,
  name,
}: {
  children: React.ReactNode
  href?: string
  name: string
}) {
  return (
    <div>
      <Typography color={CHARCOAL} fontSize="1.4rem">
        {href ? (
          <a target="blank" href={href}>
            {name}
          </a>
        ) : (
          name
        )}
      </Typography>
      <Typography>{children}</Typography>
      <br />
    </div>
  )
}

export function Vendors() {
  return (
    <Fragment>
      <GuideHeader title="FEATURED VENDORS & EXHIBITORS" />

      <GuideBody style={{ alignItems: 'flex-start' }}>
        <Subheader>Exhibitors</Subheader>
        <Vendor
          name="Visit Mountaineer Country CVB"
          href="http://www.visitmountaineercountry.com"
        >
          Nestled in the scenic hills of North Central West Virginia,
          Mountaineer Country is a treasure trove of unique experiences waiting
          to be discovered. Whether you're seeking outdoor adventures, rich
          cultural experiences, or simply a relaxing getaway, we're here to help
          you find the perfect itinerary. From where to eat and shop to must-see
          attractions and hidden gems, we've got you covered.
        </Vendor>
        <Vendor
          name="Heart of the Civil War Geotour"
          href="https://www.heartofthecivilwar.org/geo-trail"
        >
          The Heart of the Civil War Heritage Area is promoting the release of
          our new GeoTour in September, 2025! Explore Maryland's Carroll,
          Frederick, and Washington Counties, visiting museums, historic sites,
          and charming Main Street communities to complete the GeoTour. The
          GeoTour will kick off Friday September 19, GCATM7C and is part of
          GCATA6D - Celebrating 25 Years of Geocaching in the DMV Area Block
          Party Weekend.
        </Vendor>
        <Vendor
          name="Mountaineer Area Council"
          href="http://www.mountaineerscouting.org"
        >
          Scouting America's Mountaineer Area Council serves youth across 18
          counties in northern West Virginia and four counties in eastern Ohio,
          providing character-building, leadership development, and outdoor
          adventure opportunities. Through programs like Cub Scouts, Scouts BSA,
          and Venturing, the council helps young people develop essential life
          skills, a strong sense of community, and a commitment to service.
          Rooted in the values of the Scout Oath and Law, the Mountaineer Area
          Council empowers youth to grow into responsible, engaged citizens
          while fostering a love for the outdoors and lifelong learning.
        </Vendor>
        <Vendor name="Felix Soto">
          My collection is a personal collection of trackables and displays that
          we have and make for our personal use. We take them to events that
          we're invited to for the enjoyment of share our collection. Attached
          are a couple of photos of my coin displays. None are for sale. They're
          only for display and to be discovered by other geocachers.
        </Vendor>
        <Vendor name="WV State Tourism Board" href="http://wvtourism.com">
          Almost Heaven, West Virginia is well-known for its incredible outdoor
          adventures like whitewater rafting, mountain biking and rock climbing,
          but our wild and rugged mountains also hold some of the best-kept
          secrets on the East Coast. Escape to luxurious spas with natural
          mineral springs or visit our mountain towns brimming with art
          galleries, live music, delicious local eateries and, of course, plenty
          of outdoor adventures. Our rich history, diverse nightlife, as well as
          scenic adventures ensure that you'll have plenty of things to do while
          you're here no matter where your interests lie. Visit us today to find
          your version of Heaven.
        </Vendor>
        <Vendor
          name="Belmont County Bigfoot Geotour"
          href="https://www.visitbelmontcounty.com/things-to-do/recreation-outdoor/geotour/"
        >
          Believe in the unseen! Discover the mystery, embrace the adventure and
          join us on an epic quest to find Bigfoot… themed geocache containers,
          of course! From the scenic Ohio River to a Longhorn cattle ranch, from
          beautiful parks to historic landmarks, you just never know where you
          might encounter Sasquatch-sized fun as you explore Belmont County,
          Ohio. Our Bigfoot-themed geocache containers could be hidden anywhere,
          and will have you exploring surroundings of our county that you might
          have never experienced before. The Belmont County Bigfoot GeoTour has
          20+ geocaches just waiting for you to find. The first 40 cachers to
          complete will receive a limited edition gold, trackable geocaching
          coin, and everyone after will receive a black, trackable Geocaching
          coin. You never know what you might find hiding in the woods of
          Belmont County!
        </Vendor>
        <Vendor name="Marion County CVB" href="http://www.marioncvb.com">
          Marion County, West Virginia, is a place where rich history meets
          outdoor adventure and small-town charm. The Marion County Convention &
          Visitors Bureau (CVB) showcases the area's unique attractions, from
          historic sites and cultural events to scenic rail trails and local
          flavors like the iconic pepperoni roll. Plan your visit with the
          Marion CVB and experience the heart of north-central West Virginia.
        </Vendor>
        <Vendor name="Berkeley County CVB" href="http://www.travelwv.com">
          For enthusiasts of geocaching, Berkeley County in West Virginia's
          eastern panhandle presents an exceptional opportunity. Situated at the
          northern entrance to the picturesque Shenandoah Valley, Berkeley
          County features premium member caches created by WV Tim, a
          distinguished cache creator renowned worldwide. His caches have been
          located over 124,000 times—consider contributing to that total by
          making it 124,001. Those seeking a challenge will find a variety of
          remarkable caches that await exploration. Traverse our scenic
          backroads of West Virginia and experience firsthand why it's known as
          "Almost Heaven."
        </Vendor>
        <Vendor name="Explore Houma Geotour" href="http://www.explorehouma.com">
          With over 30 geocache locations to find, Houma Louisiana offers one of
          only 50 GeoTours in the whole world. Complete our tour over many
          visits, or make a weekend out of it and enjoy Houma's great food and
          hospitable accommodations. When you locate 35 out of 40 caches on the
          tour, you will receive a signature Explore Houma geocoin.
        </Vendor>
        <br />
        <br />

        <Subheader>Vendors</Subheader>

        <Vendor
          name="Gears & Gadgets & Geocaches"
          href="http://www.gadgetsgeo.com"
        >
          Raise your Geocaching Game with Gears & Gadgets & Geocaches!! We sell
          a multitude of items including 3D Printed Rocks, Birds, Aliens,
          U.F.Os, Swag, Geocaching Greeting Cards and more!! Hide Geocache
          legends from Gears & Gadgets & Geocaches!! Our favorite point worthy
          3D Printed Geocache Containers are crafted out of durable and
          environmentally friendly PLA Filament!! Visit Gears & Gadgets &
          Geocaches booth at GeoWoodstockXXI for legendary, high quality,
          durable and affordable Geocache Containers and more, only at Gears &
          Gadgets & Geocaches!!
        </Vendor>
        <Vendor
          name="Shop Dogs Personalization"
          href="https://www.facebook.com/share/1BQ4sKwkdz/"
        >
          Shop Dogs personalization makes laser cut and engraved items that can
          be personalized. Items can be keychains, earrings, hairclips from wood
          and other small trinkets great for trading in Geocaching, and engraved
          dog collars, aluminum items, powder coated cups, slate coasters and
          other items. West Virginia themed products for decoration or ornaments
          for holidays are also available. Shop Dogs works one on one with
          customers to make the PERFECT item!
        </Vendor>
        <Vendor
          name="Wizard 3D"
          href="https://www.facebook.com/share/19nTkrNVNL/"
        >
          Wizard 3D is a Veteran-owned, West Virginia-based 3D printing company
          specializing in crafting adorable critters, majestic dragons, and West
          Virginia Cryptids. With a touch of magic, we bring creativity to life
          through high-quality, vibrant prints that are perfect for collectors,
          enthusiasts, and anyone who loves unique, handcrafted designs. Whether
          you're seeking a whimsical forest critter or a mesmerizing dragon,
          Wizard 3D is here to turn imagination into reality—one enchanting
          print at a time
        </Vendor>
        <Vendor name="Odyssey Gifts" href="http://www.odysseydragons.com">
          Since 1995, Odyssey Gifts has taken pride in offering unique Jewelry
          and Gift items with a primary focus on Celtic and Nordic designs.
          Items Odyssey carries include: Sterling Silver Rings, Pendants and
          Earrings; Dragons of all kinds; Pewter Pendants; Furrybones Skeleton
          Figurines; Gemstones; Plush; Magnets; Stickers and everything in
          between!
        </Vendor>
        <Vendor name="Dan DeKoning" href="http://www.dandekoning.com">
          Dan DeKoning is an independent author who specializes in mysteries and
          thrillers. An avid geocacher with over 15k finds, he combines his love
          for writing and his passion for geocaching in a series of geocaching
          mysteries. In addition, he has written a cozy mystery series, and
          several standalone books.
        </Vendor>
        <Vendor name="OakCoins & GeoSWAG" href="http://www.geoswag.com">
          Located in Kaysville, Utah; Oakcoins/Geoswag was started in 2005 to
          provide high-quality custom-made products for organizations and
          individuals worldwide. From our beginning, we have expanded to provide
          custom-made products of all varieties to groups and individuals from
          around the world. Oakcoins has produced millions of custom-made
          products. Those items include Race Medals, Challenge Coins, Geocoins,
          Lapel Pins, Lanyards, Medallions, Key Chains, Dog Tags, Police/ Fire
          Badges, and much more. We have the ability to produce a large
          selection of excellent products just for you. We look forward to
          working with you! We'll have an exciting selection of items available
          for purchase, featuring geocoins, caching containers, custom lapel
          pins, and travel tags—perfect for geocaching enthusiasts!
        </Vendor>
        <Vendor
          name="Historical Gourmet - Artisanal Geocaching GZ Supplies"
          href="https://www.facebook.com/profile.php?id=61573649604366"
        >
          Hi there! I'm Chef Scott, the person behind Historical Gourmet, a
          unique blend of my passions for geocaching, culinary arts, and
          history. As a geocacher, I explore the world, uncovering hidden
          treasures and creating memorable experiences along the way. But my
          journey doesn't stop there. I combine my love for food and history by
          crafting delicious dishes inspired by the past, bringing history to
          life with every bite. In addition to my culinary explorations, I love
          adding a creative twist to the geocaching community. I create
          hand-painted, colorful rock M&M's, unique 3D-printed cache hosts, and
          custom geocaching SWAG coins—each designed with a whimsical touch that
          reflects my passion for both geocaching and creativity. Whether it's a
          one-of-a-kind hand-painted M&M, a specialty printed cache host, or a
          coin to keep as a souvenir, I pour my creativity into everything I
          make. Join me on my adventure, where every cache, culinary delight,
          and coin tells a story. Stop by my page on Facebook and visit my table
          at GeoWoodstock XXI. Follow me for more on Historical Gourmet and
          discover the world of geocaching through my page!
        </Vendor>
        <Vendor name="Cache Craft" href="http://www.cachecraftnj.com">
          Cache Craft creates handmade geocaching products. Including devious
          and gadget geocaches, plus the geocacher favorite devious branch made
          from genuine trees. Uniquely designed pathtag & geocoin displays help
          organize your collection while goodies from swag to DIY kits will keep
          you well stocked.
        </Vendor>
        <Vendor name="Space Coast" href="http://www.spacecoastgeostore.com">
          Space Coast Geocaching Store is located in Merritt Island Florida
          owned and operated by geocachers Dale n Barb. We have been caching
          since 2006 and vending since 2007. We have become the largest
          geocaching vendor in the USA traveling to most major events in the
          lower 48 states. We carry everything a geocacher might need and then
          some. If we don't have it just ask, we can probably get it. Not only
          do we offer containers, geocoins, trackables and gear but did you know
          we offer custom items as well.? From laser engraved items to custom
          signs, flags and trackables we offer many choices for geocachers. Stop
          by our booth and say hello.
        </Vendor>
        <Vendor
          name="Wooden Nickel Geocoins"
          href="http://www.woodennickelgeocoins.com"
        >
          Wooden Nickel Geocoins makes custom laser cut wooden nickels,
          geocaching trackables, and swag. Create your own wooden nickel
          geocoins with natural wood areas and engraved areas.
        </Vendor>
        <Vendor name="Loving WV store" href="http://www.lovingwv.com">
          Loving WV is a locally owned shop in downtown Fairmont that celebrates
          the spirit of West Virginia through unique, high-quality apparel,
          gifts, and accessories. Our designs are inspired by the state's rich
          history, natural beauty, and resilient people—offering everything from
          handcrafted shirts and hats to stickers, prints, laser engraved goods,
          and scratch maps. Whether you're a lifelong West Virginian or just
          passing through, Loving WV is your go-to spot for authentic, Mountain
          State pride.
        </Vendor>
        <Vendor name="ArtedCrafted" href="http://www.artedcrafted.com">
          At ArtedCrafted we design geocaching themed apparel, hats, mugs, and
          almost any other gear you may need. We like to add some humor to our
          geocaching shirts and we can edit or customize our designs to be
          tailored to you and your crew. We are also partners with Pathtags and
          can print your tag on any gear as well
        </Vendor>
        <Vendor name="Crunch Time" href="http://www.crunchtimewv.com">
          Crunch Time Gourmet Popcorn & Apples is located in Bridgeport, WV. We
          make gourmet popcorn, dipped apples, candied nuts, fudge and cupcakes
          fresh every day. At our booth you will find a variety of different
          gourmet popcorn flavors as well as a variety of dipped apples! Some
          choices will include butter, caramel, cheddar and kettle popcorn. We
          will have 8-10 different apple flavors!
        </Vendor>
        <Vendor name="Black Diamond Girl Scouts">
          Scouts sell cookies to fund their activities, develop essential life
          skills, and support their communities. The Girl Scout Cookie Program,
          the largest girl-led entrepreneurial initiative in the world, teaches
          key skills such as goal setting, decision-making, people skills, money
          management, and business ethics. The funds raised stay local,
          supporting troop activities, service projects, travel, leadership
          experiences, and local councils that provide resources, programs, and
          camp opportunities. Beyond fundraising, cookie sales empower Girl
          Scouts to grow into future leaders, entrepreneurs, and change-makers
          while enjoying the process and giving back to their communities.
        </Vendor>
        <Vendor name="Xscape" href="http://www.escape.cool">
          Want to play one of the best escape rooms on the east coast? During
          Friday's 'Woodstock on the Wharf' community celebration event (
          <a target="_blank" href="https://coord.info/GCATNZJ">
            GCATNZJ
          </a>
          ), book a time to catch Capone, raid king tut's tomb, or escape evil
          kidnappers. XSCAPE! is a proud partner of GeoWoodstock XXI. Come and
          check out our booth for even more puzzling fun!
        </Vendor>
        <Vendor name="Cheat River Outfitters" href="http://Eddiesshavedice.com">
          On the Cheat River (or any river) an eddy is a pool of water where you
          sit out of the current. Now, it's a place off the river where you can
          do the same. Swing on by for a tasty frozen treat and a couple minutes
          out of the current! Check out Eddie's Shaved Ice!
        </Vendor>
        <Vendor name="Cache Advance" href="http://www.cache-advance.com">
          At Cache Advance our mission is: To inspire and equip geocachers for
          fun and adventure! We also highly value the environment and strive to
          be as environmentally friendly as possible at Cache Advance, and
          ensure that we always tread lightly! Cache Advance is the oldest
          active Geocaching business in the US, other than Geocaching HQ! Today
          Cache Advance offers a well rounded selection of geocaching gear.
          Hiders, finders, trackable collectors all find what they are seeking
          here! Our warehouse is located in Spokane, WA, USA. Here we design,
          create and assemble geocaching gear, pack and ship our monthly
          geocaching subscription boxes (Cache Crates, Cachekinz Club and Hero
          Crates), our monthly Geocaching Tee Shirt Club and fulfill retail and
          wholesale orders.
        </Vendor>
        <Vendor name="The Cat">
          Come and check out this truly unique collection of Geocoins that have
          been collected for many years and have{' '}
          <BoldKol>
            <em style={{ textDecoration: 'underline' }}>NOT been activated</em>
          </BoldKol>
          . Also in stock are several unusual Geocache containers such as bird
          houses, hollowed out logs and hollowed out rocks that can hold a small
          geocache container inside. Geowoodstock and other events are the only
          locations to purchase these one-of-a-kind items
        </Vendor>
        {/* <Vendor name="name" href="href">
          text
        </Vendor> */}
      </GuideBody>
    </Fragment>
  )
}
