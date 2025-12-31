import { Typography } from '@mui/material'
import { Fragment } from 'react/jsx-runtime'
import { BoldKol } from '../Guide/CantMissExperiences/Counties'

export enum EventType {
  CC = 'Community Celebration',
  EVENT = 'Event',
  GIGA = 'Giga',
  GPS = 'GPS Maze',
  LAB = 'Adventure Lab',
  MEGA = 'Mega',
  CITO = 'Cito',
  NONE = 'None',
}

export type Event = {
  gccode: string
  name: string
  type: EventType
  description: React.ReactNode
  startTime?: number
  endTime?: number
}

export const SCHEDULE: Event[] = [
  {
    gccode: 'GCBFQRA',
    name: 'Mainframe Meet & Greet',
    type: EventType.EVENT,
    description:
      'The Mainframe Meet & Greet is an informal, drop-in kickoff where attendees can pick up their registration packages, explore the event space, and get oriented for the weekend ahead. It’s the perfect chance to grab your SWAG, scope out designated trading areas, and get a head start on the CacheMore trading card challenge as the mystery begins.',
    startTime: 1782482400,
    endTime: 1782489600,
  },
  {
    gccode: 'GCBFQRD',
    name: 'The Signal Symposium',
    type: EventType.EVENT,
    description:
      'The Signal Symposium is an interactive experience where attendees get a first look at Cache AI, the latest advancement in caching technology that promises to change the game. Dress in your team’s colors and add your own cyberpunk flair, but stay sharp, because a major twist will flip the weekend’s mystery on its head and launch your team into a special challenge that may take you completely off the grid.',
    startTime: 1782511200,
    endTime: 1782518400,
  },
  {
    gccode: 'GCBEBMA',
    name: 'CacheMore 2026',
    type: EventType.EVENT,
    // TODO:
    description: (
      <Fragment>
        CacheMore 2026 is the all-day main event where the weekend’s story comes
        together and the community takes center stage. Meet fellow cachers,
        attend live sessions, tackle Adventure Labs, shop vendors, enjoy food
        trucks, trade cards, and get puzzle assistance as you work toward
        cracking the CacheMore Code. Registration packages will be available for
        pickup throughout the day.
        <br />
        <br />
        <BoldKol>11 am - 1am / Lunch</BoldKol>
        <br />
        Local food trucks will be on site for you to grab a quick snack while
        attending sessions and puzzling with your team.
        <br />
        <br />
        <BoldKol>11 am / Puzzle Solving 101</BoldKol>
        <br />
        New to puzzle caches or looking to sharpen your skills? This session
        covers common puzzle types, solving strategies, and tips to help you
        break through even the trickiest challenges.
        <br />
        <br />
        <BoldKol>12 pm / Solving Pre-Event Puzzles</BoldKol>
        <br />
        Get hands-on help with CacheMore’s pre-event puzzles as hosts walk
        through approaches, hints, and thought processes. Bring your
        questions—and your notes—as you prep for the main mystery.
        <br />
        <br />
        <BoldKol>1 pm / Puzzle Writing 101</BoldKol>
        <br />
        Interested in creating puzzles of your own? Learn the basics of puzzle
        design, fair difficulty balancing, and creative techniques to craft
        engaging challenges for fellow cachers.
        <br />
        <br />
        <BoldKol>2 pm / Reviewer Q&A</BoldKol>
        <br />
        Ever wonder what happens behind the scenes? Join a live Q&A with a
        reviewer to ask questions, gain insight into the review process, and
        better understand cache guidelines and best practices.
        <br />
        <br />
        <BoldKol>3:45 pm / Group Photo</BoldKol>
        <br />
        Wear your team colors and join us in the main exhibit hall for a group
        photo as we wrap up CacheMore 2026
        <br />
        <br />
        <BoldKol>4 pm / Announcements, Awards, & Prizes</BoldKol>
        <br />
        As the CacheMore weekend comes to a thrilling close as hosts reveal how
        the puzzles unfolded, step through the full mystery, and connect all the
        clues from start to finish. Celebrate standout achievements, cheer as
        the winning team is crowned, and be among the first to discover the
        theme for next year’s CacheMore event.
      </Fragment>
    ),
    startTime: 1782568800,
    endTime: 1782594000,
  },

  {
    gccode: 'GCBFQRE',
    name: 'Off the Grid',
    type: EventType.EVENT,
    description:
      'Off The Grid is a laid-back camping event at the newly opened KOA at Mylan Park, giving attendees a chance to unwind after a full day of caching. Kick back around the campfire with your caching crew, swap stories from the day’s adventures, and work on completing your trading card collection under the stars.',
    startTime: 1782604800,
    endTime: 1782612000,
  },
  {
    gccode: 'GCBFQRM',
    name: 'System Debug',
    type: EventType.CITO,
    description:
      'System Debug is a CITO event focused on giving back to the local community and cleaning up the game board before the weekend wraps up. There’s plenty of trash to collect, so lend a hand, make a real impact, and help leave the area better than we found it.',
    startTime: 1782655200,
    endTime: 1782662400,
  },
]
