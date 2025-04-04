import { Fragment } from 'react/jsx-runtime'
import { GuideHeader } from '../GuideHeader'
import { GuideBody } from '../GuideBody'
import { Typography } from '@mui/material'
import React from 'react'
import { BoldKol } from '../CantMissExperiences/Counties'

function SpeakerEvent({
  title,
  place,
  children,
}: {
  title: string
  place: string
  children: React.ReactNode
}) {
  return (
    <div>
      <Typography>
        <BoldKol>{title}</BoldKol> | {place}
      </Typography>
      <Typography>{children}</Typography>
      <br />
      <br />
    </div>
  )
}

export function Speakers() {
  return (
    <Fragment>
      <GuideHeader
        title="Speaker Series"
        subTitle="Come learn from some of the best geocachers in the game!"
      />
      <GuideBody style={{ alignItems: 'flex-start' }}>
        <Typography>
          Whether you want to sharpen your caching skills or jump into a new
          topic, we have tons of exciting and educational presentations for you
          to participate in. Presented by Geocaching experts, these seminars
          will take place all day on Saturday (5/24) in both the GeoWoodstock
          offset building and on the main stage inside GeoWoodstock HQ.
        </Typography>
        <br />
        <br />

        <SpeakerEvent
          title="9:00 AM - Puzzle Factory - Hixon"
          place="GWXXI Offset"
        >
          Looking to create high-quality puzzles? Join Hixon for a deep dive
          into what makes a good puzzle fun to solve, and how to apply that into
          creating your own mystery caches!
        </SpeakerEvent>
        <SpeakerEvent
          title="11:00 AM - Earthcache Writing 101 - All Things Earthcache"
          place="GWXXI Offset"
        >
          Are you looking for tips on how to create your own Earthcache? You
          won't want to miss this presentation led by All Things Earthcache!
          This presentation will cover everything you need to know on how to
          create a quality Earthcache - from selecting a good location to
          creating good logging tasks, you'll be a pro in no time!
        </SpeakerEvent>
        <SpeakerEvent
          title="12:00 PM - Geocaching 201 - captainmath"
          place="GWXXI Offset"
        >
          So you've found a few geocaches, but are you ready to level up your
          Geocaching skills? Join Captainmath for a presentation on what you'll
          need to become a skilled geocacher! This presentation will dive deep
          into TOTTs, Geocaching technology, and tips for hiding your first
          cache!
        </SpeakerEvent>
        <SpeakerEvent
          title="12:15 PM - Treasures of our Town LIVE - Seemyshell & TheGeocachingVlogger"
          place="GeoWoodstock XXI HQ"
        >
          The Treasures of our Town Podcast highlights unique places off the
          beaten path, and will be recording a live show at GeoWoodstock XXI!
          Hosted by Seemyshell and TheGeocachingVlogger, you won't want to miss
          being a part of a live studio audience (and complete an exclusive
          Adventure Lab during the taping)!
        </SpeakerEvent>
        <SpeakerEvent
          title="1:00 PM - County Caching Panel"
          place="GWXXI Offset"
        >
          Join some of the U.S.'s top county cachers for a question-and-answer
          panel! Whether it's stories from the road or tips for planning out
          your next county run, you'll be ready to visit all 3,144 counties in
          America!
        </SpeakerEvent>
        <SpeakerEvent
          title="2:00 PM - Introduction to Personal SWAG - JenOvations & Bigguy14760"
          place="GWXXI Offset"
        >
          Not sure where to start when it comes to making your own SWAG item?
          Learn from an expert on how to create your own signature item - from
          designing and minting, to trading, you'll learn the ropes in no time!
        </SpeakerEvent>
        <SpeakerEvent
          title="2:15 PM - Gadget Caches - WVTim"
          place="GeoWoodstock XXI HQ"
        >
          It wouldn't be a West Virginia GeoWoodstock without a presentation on
          gadget caches by the world-famous WVTim! Amassing over 38,000 favorite
          points, Berkeley County, WV is a hotspot for cachers from all over.
          Join Tim for a sneak peek into what it takes to make creative hides
          that cachers will love!
        </SpeakerEvent>
        <SpeakerEvent
          title="3:00 PM - Challenge Chat - Merlin1392 & Electric Water Boy"
          place="GWXXI Offset"
        >
          Challenge caches have risen in popularity over the recent years, as
          more and more geocachers are looking for challenges to enhance their
          gameplay! From discussing unique challenge ideas to creating a
          challenge checker of your own, join us for an informational session
          about challenges.
        </SpeakerEvent>
        <SpeakerEvent
          title="4:00 PM - Cache Odyssey - Geocache Talk Podcast"
          place="GWXXI Offset"
        >
          Join the hosts of the Geocache Talk Podcast as they cover the new
          Cache Odyssey GeoTours! This series will take cachers across the
          United States in search of unique and accessible caches as part of 6
          geographically defined GeoTours.
        </SpeakerEvent>
        <SpeakerEvent
          title="4:15 PM - Reviewer and Lackey Panel"
          place="GeoWoodstock XXI HQ"
        >
          Ever dreamed what it would be like to be a Lackey? Want to learn about
          upcoming announcements directly from Geocaching HQ? Do you have a
          burning question for a reviewer? Join our Reviewer and Lackey Panel
          for a behind-the-scenes look at the inner workings of Geocaching!
        </SpeakerEvent>
        <SpeakerEvent
          title="5:00 PM - Closing Remarks & GWXXII Announcement"
          place="GeoWoodstock XXI"
        >
          GeoWoodstock XXI has come to an end, but we can't go home without a
          final goodbye and announcing where GeoWoodstock is headed in 2026. Who
          knows, it could be in your backyard!
        </SpeakerEvent>
        <br />
      </GuideBody>
    </Fragment>
  )
}
