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
  description: string
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
    type: EventType.MEGA,
    // TODO:
    description:
      'CacheMore 2026 is the all-day main event where the weekend’s story comes together and the community takes center stage. Meet fellow cachers, attend live sessions, tackle Adventure Labs, shop vendors, enjoy food trucks, trade cards, and get puzzle assistance as you work toward cracking the CacheMore Code. Registration packages will be available for pickup throughout the day.',
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
