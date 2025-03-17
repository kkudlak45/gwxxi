import { Fragment } from 'react/jsx-runtime'
import { GuideHeader } from '../GuideHeader'
import { GuideBody } from '../GuideBody'
import { Typography } from '@mui/material'
import { Subheader } from '../Subheader'
import { BoldKol } from '../CantMissExperiences/Counties'

export function NRG() {
  return (
    <Fragment>
      <GuideHeader
        title="NEW RIVER GORGE NATIONAL PARK"
        subTitle="Come explore the newest National Park in the United States!"
      />

      <GuideBody>
        <Typography>
          Home to miles of recreational trails and some of the best whitewater
          rafting in the country, the New River Gorge is the perfect place to
          experience Almost Heaven for yourself!
        </Typography>

        <br />

        <img
          src="/eventguide/exploring/nrg_800x533.png"
          style={{ width: '100%', maxWidth: '800px', aspectRatio: '800 / 533' }}
        />

        <br />
        <br />

        <Subheader>Accessing the Park</Subheader>
        <Typography>
          The New River Gorge National Park is located near the town of
          Fayetteville, West Virginia, and is about 2.5 hours from Morgantown
          along I-79 and US Route 19. If you're coming from south of West
          Virginia, the Park can be accessed from US 19 just north of Beckley,
          WV. US 19 also traverses the New River Gorge Bridge - the longest arch
          span bridge in the Western Hemisphere!
        </Typography>

        <br />
        <br />

        <Subheader>What to do</Subheader>
        <Typography>
          The New River Gorge features some of the most breathtaking views in
          the entire state! For some of the most scenic views, check out{' '}
          <BoldKol>GC2J57E</BoldKol>-{' '}
          <a href="https://coord.info/GC2J57E" target="_blank">
            The Grand Canyon Of The East
          </a>{' '}
          at Diamond Point Overlook, <BoldKol>GCFD4C</BoldKol> -{' '}
          <a target="_blank" href="https://coord.info/GCFD4C">
            Picture Perfect Bridge
          </a>{' '}
          at Long Point, or <BoldKol>GCAJHZD</BoldKol> -{' '}
          <a target="_blank" href="https://coord.info/GCAJHZD">
            More Than Meets the Eye
          </a>
          ! If you're feeling adventurous, take a trip to Thurmond, WV - an old
          mining town within the National Park (<BoldKol>GC9DZA2</BoldKol> -{' '}
          <a target="_blank" href="https://coord.info/GC9DZA2">
            Thurmond, WV
          </a>
          ).
        </Typography>

        <br />
      </GuideBody>
    </Fragment>
  )
}
