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
    gccode: 'GCANXX0',
    name: 'Country Roads Challenge',
    type: EventType.EVENT,
    description:
      "Welcome to Wild and Wonderful West Virginia - nowhere is this statement more true than Coopers Rock State Park. Join us for a casual meet and greet while you pick up your Country Roads Challenge playing card and enjoy the breathtaking views of the Cheat River. At 10 a.m., new caches placed at local businesses throughout Morgantown will be released. Find all 10 and earn a limited edition “Country Roads Challenge” Geocoin. No purchase is necessary to attend but to be guaranteed a limited-edition coin, you'll need to purchase a SWAG package.",
    startTime: 1747915200,
    endTime: 1747929600,
  },
  {
    gccode: 'GCANXX2',
    name: 'CITO The Line',
    type: EventType.CITO,
    description:
      'Marking the boundary between West Virginia and Pennsylvania, join us at the westernmost point that Charles Mason and Jeremiah Dixon personally surveyed. These trailblazers embraced the true meaning of Mountaineer spirit, and we’re going to embody that attitude with some trail maintenance and environmental reclamation efforts around the park.',
    startTime: 1747944000,
    endTime: 1747951200,
  },
  {
    gccode: 'GCANXX3',
    name: 'Mountain Music',
    type: EventType.EVENT,
    description:
      'After the CITO, celebrate a job well done with your caching friends as the sun sets over the mountains. Relax with some refreshments and enjoy listening to authentic Appalachian folk  music with a caching concert just for us!',
    startTime: 1747951200,
    endTime: 1747958400,
  },

  {
    gccode: 'GCANXX5',
    name: 'Almost Heaven Adventures',
    type: EventType.EVENT,
    description:
      'A trip to West Virginia isn’t complete without a little adventure. Visit Camp Mountaineer, a scouting reserve complete with a zip-line and C.O.P.E. (Challenging Outdoor Personal Experiences) course! Spend the morning hiking, caching, and testing your skills on the ropes. A group will also be heading to Fairmont to complete the F.L.O.A.T. series.',
    startTime: 1748001600,
    endTime: 1748016000,
  },
  {
    gccode: 'GCANXX1',
    name: 'GeoWoodstock XXI',
    type: EventType.NONE,
    description:
      'Come get a first look at GeoWoodstock XXI, pick up your registration packet, and shop the vendors. Doors open at 8 a.m. for VIPs and Friends of GeoWoodstock, with general admission starting at 10 a.m. This is a great chance to participate in some of the activities without all the crowds.',
    startTime: 1748008800,
    endTime: 1748026800,
  },
  {
    gccode: 'GCANAAA',
    name: 'GPS Adventures Maze Exhibit',
    type: EventType.GPS,
    description:
      'One of the rarest icons in all of Geocaching is making an appearance at GeoWoodstock XXI! This is a must-see during your time at the event. VIPs and Friends of GeoWoodstock can tour the exhibit starting at 8 a.m. with general admission starting at 10 a.m. This is a great chance to participate in some of the activities without all the crowds.',
    startTime: 1748008800,
    endTime: 1748026800,
  },
  {
    gccode: 'GCATNZJ',
    name: 'Woodstock on the Wharf',
    type: EventType.CC,
    description:
      'Tucked away in the heart of Morgantown, the Wharf District is a cultural hub for Appalachian culture. Enjoy a craft brew with your caching pals or test your brain at one of the best escape rooms on the east coast. Afterward, enjoy a live presentation and participate in a Geocaching-themed trivia game at the outdoor amphitheater overlooking the Mon. river.',
    startTime: 1748030400,
    endTime: 1748044800,
  },

  {
    gccode: 'GCANXX1',
    name: 'GeoWoodstock XXI',
    type: EventType.GIGA,
    description:
      "This is it - America's 2nd GIGA event! Whether this is your first event or your 1,000th, welcome to the 21st anniversary of the world’s original Mega event: Wild & Wonderful GeoWoodstock XXI. Spend the day at Mylan Park enjoying vendors, presentations, exhibits, a catered lunch, games, and so much more.",
    startTime: 1748088000,
    endTime: 1748120400,
  },
  {
    gccode: 'GCANAAA',
    name: 'GPS Adventures Maze Exhibit',
    type: EventType.GPS,
    description:
      'One of the rarest and most sought-after icons in the game, the GPS Adventures Maze Exhibit, will make an exciting appearance at GeoWoodstock XXI in Morgantown, WV! This unique, interactive exhibit offers geocachers of all levels the chance to explore the history, tools, and techniques of this global adventure, while also earning the coveted icon by completing the maze and signing the log.',
    startTime: 1748088000,
    endTime: 1748120400,
  },
  {
    gccode: 'GCANXX6',
    name: 'Midnight Madness',
    type: EventType.EVENT,
    description:
      'The party continues with the largest coin and pathtag trading event in the world happening at the WVU Mountainlair until midnight! Enjoy the campus lit up at night as well as a live Geocaching game show, bowling, and other activities.',
    startTime: 1748131200,
    endTime: 1748145600,
  },

  {
    gccode: 'GCANXX7',
    name: 'Breakfast with the Mommas',
    type: EventType.EVENT,
    description:
      'You can’t go home hungry! Enjoy a hardy pancake breakfast provided by a local scouting organization while you meet with your caching friends and plan for a day of caching in Marion County. A new GeoTour will be available for you to complete, but with hundreds of caches in the county, one day might not be enough!',
    startTime: 1748174400,
    endTime: 1748185200,
  },
  {
    gccode: 'GCANXX8',
    name: 'Farewell from the Fort',
    type: EventType.EVENT,
    description:
      'Come explore a 19th-century reconstructed fort and learn about the history of the park from live interpreters while you complete a unique Adventure Lab. Claim your coin for the Middle of Everywhere GeoTour and say a final farewell until next year!',
    startTime: 1748203200,
    endTime: 1748217600,
  },
]
