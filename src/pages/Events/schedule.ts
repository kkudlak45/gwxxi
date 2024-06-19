export enum EventType {
  CC = 'Community Celebration',
  EVENT = 'Event',
  GIGA = 'Giga',
  GPS = 'GPS Maze',
  LAB = 'Adventure Lab',
  MEGA = 'Mega',
  CITO = 'Cito',
}

export type Event = {
  name: string
  type: EventType
  description: string
  startTime?: number
  endTime?: number
}

export const SCHEDULE: Event[] = [
  {
    name: 'Country Roads Challenge',
    type: EventType.EVENT,
    description:
      'Let our Country Roads show you around to 10 of the finest stops Appalachia has to offer. Join us at Coopers Rock State Park to grab your SWAG package, then hit the town for a morning of caching fun in Morgantown. Find all 10 caches to earn a limited-edition coin!',
    startTime: 1747918800,
    endTime: 1747929600,
  },

  {
    name: 'Welcome to Woodstock',
    type: EventType.CC,
    description:
      'Capturing the true spirit of West Virginia, spend your evening in the historic Wharf District grabbing a bite to eat and participating in one of many activities including team trivia and the best escape room on the east coast!',
    startTime: 1747947600,
    endTime: 1747962000,
  },

  {
    name: 'GeoWoodstock XXI',
    type: EventType.MEGA,
    description:
      'Welcoming VIPs for a first look at GeoWoodstock HQ, doors open at 8 a.m. with general admission starting at 10 a.m. Tour the vendors, grab your SWAG, and check out the photo spots before the crowds!',
    startTime: 1748001600,
    endTime: 1748034000,
  },

  {
    name: 'Choose Your Own Adventure',
    type: EventType.LAB,
    description:
      'Caching, kayaking, or putting, oh my! There are countless adventures in North Central West Virginia, and we want to give you the opportunity to play your way! Check back for more information.',
    startTime: undefined,
    endTime: undefined,
  },

  {
    name: 'Cache The Line',
    type: EventType.CITO,
    description:
      'Did you know Morgantown is the last point on the Mason-Dixon line? Join us at this historical site for a unique volunteer opportunity, then relax with some authentic mountain music!',
    startTime: 1748026800,
    endTime: 1748034000,
  },

  {
    name: 'GeoWoodstock XXI',
    type: EventType.MEGA,
    description:
      'Complete with vendors, presentations, and of course, lunch, join us at Mylan Park for the 21st anniversary of the world’s original Mega event, Wild and Wonderful GeoWoodstock XXI!',
    startTime: 1748088000,
    endTime: 1748120400,
  },

  {
    name: 'Midnight Madness',
    type: EventType.EVENT,
    description:
      'Join us for an after-party filled with trackables, games, and entertainment happening at the heart of WVU’s campus.',
    startTime: 1748131200,
    endTime: 1748145600,
  },

  {
    name: 'Meet with the Mommas',
    type: EventType.EVENT,
    description:
      'You can’t go home hungry! Come meet the mommas before enjoying a day of caching in Marion County.',
    startTime: 1748178000,
    endTime: 1748188800,
  },

  {
    name: 'Farewell From The Fort',
    type: EventType.EVENT,
    description:
      'The weekend can’t be over without one final goodbye. Tour an 18th-century reconstructed fort and sing Country Roads with us as the sun sets on another fantastic GeoWoodstock Weekend.',
    startTime: 1748203200,
    endTime: 1748217600,
  },
]
