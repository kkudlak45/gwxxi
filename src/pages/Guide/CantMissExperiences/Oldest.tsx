import { Fragment } from 'react/jsx-runtime'
import { GuideHeader } from '../GuideHeader'
import { GuideBody } from '../GuideBody'
import { Typography } from '@mui/material'
import { Subheader } from '../Subheader'

export function Oldest() {
  return (
    <Fragment>
      <GuideHeader title="WV OLDEST" subTitle="Rent an ATV to go find GC3F0!" />

      <GuideBody>
        <Typography>
          So you want to grab Rich Creek Riches? Considered one of the toughest
          'state oldest' cache to get, this cache is a perfect example of what
          makes West Virginia so Wild & Wonderful. This region has changed a lot
          since the cache was first placed in 2001, and is now part of the
          Hatfield-McCoy Trail System. This expansive ATV network of trails is
          the largest of its kind, and offers thrills for beginners and
          experienced riders alike. There's a lot of information to know, so if
          you are planning on getting WV's oldest, please read this information
          thoroughly.
        </Typography>

        <br />
        <br />

        <Subheader>Getting there from Morgantown</Subheader>
        <Typography>
          It's worth noting that Rich Creek Riches is NOT near Morgantown - not
          even close. Located in the most southern part of West Virginia, this
          cache is about a 3.5 hour drive from Morgantown. Most of this drive is
          along Interstate 79, but after Charleston, you'll be learning the true
          meaning of country roads. It's a beautiful drive, but not one for
          those who might get car sick.
        </Typography>

        <br />
        <br />

        <Subheader>About the Hatfield-McCoy trail system</Subheader>
        <Typography>
          The Hatfield-McCoy Trail System is a renowned network of off-road
          trails in southern West Virginia, celebrated for its scenic views and
          challenging terrain, drawing ATV and dirt bike enthusiasts from across
          the country. It is named after the infamous Hatfield-McCoy feud, a
          bitter 19th-century rivalry between two Appalachian families that has
          become a symbol of local folklore. The trails traverse areas steeped
          in this history, including Logan, WV, a town surrounded by lush
          mountains and rich coal mining heritage. Visitors to the area can
          explore not only the trails but also cultural sites, local
          restaurants, and outdoor adventures that highlight the rugged beauty
          and storied past of Appalachia.
        </Typography>

        <br />
        <br />

        <Subheader>Renting an ATV</Subheader>
        <Typography>
          This is the preferred method to reach GC3F0. Not only is it the
          safest, but it's also the most fun! Our team did this trek last summer
          in preparation for the event; we recommend you{' '}
          <a
            target="_blank"
            href="https://www.geocaching.com/live/log/GL1CDWT2T"
          >
            read the three logs by Troopbiz
          </a>{' '}
          to get a good idea of what to expect.
        </Typography>

        <br />

        <Typography>
          There are a few rental agencies in the area, but many geocachers have
          made reservations with{' '}
          <a target="_blank" href="https://baccountryatvrentals.com/">
            BAC Country Rentals
          </a>
          , who are familiar with geocachers seeking Rich Creek Riches. They
          have a map and tell you which trails to take to reach your prize. It
          will be a longer trip if you take the trails they usually mark; round
          trip the entire experience can take upwards of 5-6 hours.
        </Typography>

        <br />

        <img
          src="/eventguide/cantmiss/howtorental_800x800.jpeg"
          style={{ width: '100%', maxWidth: '600px', aspectRatio: '1' }}
        />

        <br />

        <Typography>
          That being said, traveling along the Hatfield-McCoy Trails can be a
          lot of fun, but be careful as you will be traveling along steep trails
          with true hairpin curves alongside mountains. Also, be aware that you
          will most likely meet others on the trails as well. Just exercise
          caution while on your adventure. Keep your eyes peeled, you might see
          wild life along your trip!
        </Typography>

        <br />
        <br />

        <Subheader>For high clearance vehicles</Subheader>
        <Typography>
          Let us be perfectly clear, our event team DOES NOT recommend you
          attempt to drive to Rich Creek Riches. Not only are the roads
          difficult to navigate, but this area is extremely rural and cell
          service is very limited. That said, it may be possible in some high
          clearance vehicles to drive within a few hundred feet of the cache. Do
          not attempt to take a rental car via the following route provided.
        </Typography>

        <br />

        <Typography>
          For a long time, Rich Creek Road was closed after a point due to
          logging timber. That has changed allowing geocachers to make the
          historical trek by Rich Creek Road. If you are traveling to Logan, WV,
          (most common) take Rt 10 south toward Man. You will drive to Rita, WV,
          and begin to watch for Rich Creek Rd. Make that turn on the right.
          From there you are approximately 6 plus miles or so from GZ on
          extremely rough dirt roads with lots of big water holes. This would
          NOT be recommended for low clearance vehicles, especially if there has
          been recent rain. According to recent logs, you will pass an old coal
          mine up in Rich Creek. Continue past until you arrive at trail #45.
          You will be approximately 2 miles from your goal. The last section is
          VERY steep! Some people park and then hike the remaining 300 ft to gz.
          It is dependent on road conditions and your vehicle. Many people
          driving Jeeps with high clearance have made it to within 30 ft of the
          cache.
        </Typography>

        <br />

        <Typography>
          As with any caching adventure, be safe, exercise caution, and let
          someone know where you are going. There are a lot of great discussions
          on our{' '}
          <a
            target="_blank"
            href="https://www.facebook.com/groups/2150783441954120/"
          >
            Community Group
          </a>{' '}
          of people planning trips and looking for groups to join, so check that
          out on Facebook if you are interested!
        </Typography>

        <br />
      </GuideBody>
    </Fragment>
  )
}
