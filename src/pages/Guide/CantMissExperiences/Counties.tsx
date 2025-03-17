import { Fragment } from 'react/jsx-runtime'
import { GuideHeader } from '../GuideHeader'
import { GuideBody } from '../GuideBody'
import { Typography } from '@mui/material'
import React from 'react'
import { Subheader } from '../Subheader'

export function BoldKol({ children }: { children: React.ReactNode }) {
  return <strong style={{ fontFamily: 'Kollektif-Bold' }}>{children}</strong>
}

export function Counties() {
  return (
    <Fragment>
      <GuideHeader
        title="WV Counties"
        subTitle="Come experience our Country Roads as you visit all 55 West Virginia Counties!"
      />

      <GuideBody>
        <Typography>
          West Virginia is often cited as one of the hardest states to
          “blackout” - don't let its small size trick you! The Mountain State is
          the smallest U.S. state that takes over 24 hours to visit every
          county. Since we're geocachers, that often means extra stops and
          detours to make the find. This guide should help you plan your routes
          around “Almost Heaven”, using Morgantown as a home base.
        </Typography>

        <br />

        <img
          src="/eventguide/cantmiss/countymap.png"
          style={{ width: '100%', aspectRatio: '800 / 699', maxWidth: '800px' }}
        />

        <div style={{ textAlign: 'center' }}>
          <Typography>
            <BoldKol>Red Route</BoldKol> - This route primarily uses U.S. Route
            50 and WV Route 2 to pick up counties in the northwestern part of
            the state, including the northern panhandle.
          </Typography>
          <Typography>
            <BoldKol>Orange Route</BoldKol> - This route uses U.S. Route 119
            through the western part of the state, then picks up Interstates 77
            and 64 to complete the Ohio River counties.
          </Typography>
          <Typography>
            <BoldKol>Green Route</BoldKol> - Taking you through the coalfields
            of southern West Virginia, caches here are far apart and limited
            cell reception. U.S. Routes 119 and 52 will be your friends here.
          </Typography>
          <Typography>
            <BoldKol>Yellow Route</BoldKol> - This loop takes you to the Eastern
            Panhandle, and primarily uses Interstates 68 and 81.
          </Typography>
          <Typography>
            <BoldKol>Blue Route</BoldKol> - This route offers some of the most
            scenic (and mountainous) views of West Virginia. You'll pass by
            landmarks such as Spruce Knob (
            <a href="/guide/GCH3CD">West Virginia's highest point</a>), Seneca
            Rocks, and the New River Gorge National Park! This route uses a
            variety of roads - use caution during planning as to not skip a
            county!
          </Typography>
        </div>

        <br />
        <br />

        <Subheader>General Tips</Subheader>
        <ul>
          <li>
            <Typography>
              <BoldKol>Cell service</BoldKol> - Cell reception in the mountains
              can be very sparse, so it's recommended to download all caches
              (and even backups) to an offline list before setting out on your
              adventure.
            </Typography>
          </li>
          <li>
            <Typography>
              <BoldKol>Finding the final</BoldKol> - If you would like to find
              the{' '}
              <a target="_blank" href="http://coord.info/GC1QWJF">
                West Virginia County Challenge
              </a>
              , please ensure that you have contacted the CO with your
              qualifications in order to receive the final coordinates. The
              final is NOT near Charleston, so plan accordingly.
            </Typography>
          </li>
          <li>
            <Typography>
              <BoldKol>Bring the tunes</BoldKol> - While you're roaming around
              on our Country Roads, why not listen to the{' '}
              <a
                target="_blank"
                href="https://open.spotify.com/playlist/4UNOOo6u2GjGR54XVRSmSx?si=540fd2878b4b4d9e&pt=a1ae5d26feec7507a9955ad42990a7e8"
              >
                official GeoWoodstock XXI playlist
              </a>
              ?
            </Typography>
          </li>
        </ul>

        <br />
      </GuideBody>
    </Fragment>
  )
}
