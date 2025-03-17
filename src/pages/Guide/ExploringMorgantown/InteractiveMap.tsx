import { Fragment } from 'react/jsx-runtime'
import { GuideHeader } from '../GuideHeader'
import { GuideBody } from '../GuideBody'
import { Typography } from '@mui/material'
import { useIsMobile } from '../../../hooks/useIsMobile'

export function InteractiveMap() {
  const isMobile = useIsMobile()

  return (
    <Fragment>
      <GuideHeader title="Interactive Map" />
      <GuideBody>
        <Typography>
          To help you plan your trip to Morgantown, our team has put together a
          map of all our official events, partner hotels, restaurant
          recommendations, and can't miss caches. While we strongly recommend
          creating a bookmark list and downloading caches to your phone before
          leaving home, we hope this map helps give you an idea of the general
          area, especially for those caches that haven't been published yet.
        </Typography>

        <br />

        <iframe
          src="https://www.google.com/maps/d/embed?mid=1Sg1az2wM2acIRqBInjXnsm0nUsc1FfE&hl=en&ehbc=2E312F"
          width="640"
          height="480"
          style={{
            maxWidth: '80%',
            maxHeight: '80%',
            width: '80%',
            height: 'auto',
            aspectRatio: isMobile ? '1' : '640 / 480',
          }}
          loading="lazy"
        />

        <br />
      </GuideBody>
    </Fragment>
  )
}
