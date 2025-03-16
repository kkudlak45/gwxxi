import { Fragment } from 'react/jsx-runtime'
import { GuideHeader } from '../GuideHeader'
import { GuideBody } from '../GuideBody'
import { Typography } from '@mui/material'
import { Subheader } from '../Subheader'

export function Highpoint() {
  return (
    <Fragment>
      <GuideHeader
        title="WV HighPoint"
        subTitle="Come cache at West Virginia's highest point!"
      />

      <GuideBody>
        <Typography>
          At 4,863 feet above sea level, Spruce Knob is the Highest Point in the
          Mountain State. If you're looking to summit Spruce Knob, this page
          will serve as your tour guide!
        </Typography>
        <br />
        <img
          style={{ width: '100%', maxWidth: '800px', aspectRatio: '800 / 534' }}
          src={`${import.meta.env.BASE_URL}eventguide/cantmiss/spruce.jpg`}
        />
        <br />
        <br />
        <Subheader>Accessing the Summit</Subheader>
        <br />
        <Typography>
          Spruce Knob is located 3 hours southeast of Morgantown. Take U.S. 33
          south from Seneca Rocks to Briery Gap Road (33/4). This is signed on
          Route 33, as well as a sign for Spruce Knob Lake. Follow signs for
          National Forest Route 112, which will take you most of the way up
          Spruce Knob. The final turn is on National Forest Route 104, which
          will then lead you to the summit of Spruce Knob!
        </Typography>
        <br />
        <Typography>
          Once at the summit, an observation tower is located 800 feet away
          along a gravel path. This tower also features the official USGS
          Benchmark, marking the highest point in West Virginia! 200 feet
          further down the trail is another scenic overlook, which offers
          sweeping views of the area.
        </Typography>
        <br />
        <br />
        <Subheader>Caches at the summit</Subheader>
        <br />
        <Typography>
          Along the trail to the lookout tower, there is a Traditional (GCH3CD -
          Spruce Knob) and an EarthCache (GC19AXJ - Spruce Knob - West Virginia
          High Point). For extra fun, check out (GC222A - Top of WV), which is a
          0.6 mile walk along the Huckleberry Trail. As you descend Spruce Knob,
          be sure to check out (GCGMFR - WV's Highest Lake)!
        </Typography>
        <br />
        <br />
        <Subheader>Bonus Info - Hoye Crest & Mount Davis</Subheader>
        <br />
        <Typography>
          Hoye Crest is the highest point in Maryland, but it gets a special
          mention here since the trailhead is in West Virginia. Parking is
          available along U.S. Route 219 north of Thomas, WV, and is about 1.5
          hours from Morgantown. The High Point trail is about 1.5 miles and is
          well marked. Once at the summit, there are two Traditionals (GC20C8 -{' '}
          <a target="_blank" href="http://coord.info/GC20C8">
            Maryland High Point Cache
          </a>{' '}
          and GC1NKTA -{' '}
          <a target="_blank" href="http://coord.info/GC1NKTA">
            CAM 2009 - Hoye Crest
          </a>
          ) and an EarthCache (GCAN9MD -{' '}
          <a target="_blank" href="http://coord.info/GCAN9MD">
            Boundary Stone Weathering on Backbone Mountain
          </a>
          ). Once you've finished your visit, be sure to check out the{' '}
          <a target="_blank" href="http://coord.info/GC2GZ9G">
            Smallest Church in 48 States
          </a>{' '}
          (GC2GZ9G).
        </Typography>
        <br />
        <Typography>
          Mount Davis is the highest point in Pennsylvania, and is just over an
          hour from Morgantown via I-68. Parking is available at the summit, as
          well as an EarthCache (GC1YTYN -{' '}
          <a target="_blank" href="http://coord.info/GC1YTYN">
            top of mt.davis
          </a>
          )
        </Typography>
      </GuideBody>
    </Fragment>
  )
}
