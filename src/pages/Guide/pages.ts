import { ACT } from './CantMissExperiences/ACT'
import { CacheAcrossAmerica } from './CantMissExperiences/CacheAcrossAmerica'
import { CacheOdyssey } from './CantMissExperiences/CacheOdyssey'
import { Counties } from './CantMissExperiences/Counties'
import { Highpoint } from './CantMissExperiences/Highpoint'
import { Oldest } from './CantMissExperiences/Oldest'
import { StateStar } from './CantMissExperiences/StateStar'
import { AdventureLabs } from './EventActivities/AdventureLabs'
import { Adventures } from './EventActivities/Adventures'
import { CountryRoadsChallenge } from './EventActivities/CountryRoadsChallenge'
import { CryptidQuest } from './EventActivities/CryptidQuest'
import { GeoTour } from './EventActivities/GeoTour'
import { Activities } from './EventInformation/Activities'
import { Games } from './EventInformation/Games'
import { Parking } from './EventInformation/Parking'
import { Pickup } from './EventInformation/Pickup'
import { Speakers } from './EventInformation/Speakers'
import { TravelBugs } from './EventInformation/TravelBugs'
import { Vendors } from './EventInformation/Vendors'
import { Volunteer } from './EventInformation/Volunteer'
import { Welcome } from './EventInformation/Welcome'
import { Eat } from './ExploringMorgantown/Eat'
import { Health } from './ExploringMorgantown/Health'
import { InteractiveMap } from './ExploringMorgantown/InteractiveMap'
import { NRG } from './ExploringMorgantown/NRG'
import { Rental } from './ExploringMorgantown/Rental'

export type EventGuidePage = {
  title: string
  route: string
  component?: () => JSX.Element
}

export const EVENT_INFORMATION_PAGES: EventGuidePage[] = [
  {
    title: 'Welcome to GeoWoodstock XXI',
    route: 'welcome',
    component: Welcome,
  },
  {
    title: 'Venue Map & Parking Info',
    route: 'parking',
    component: Parking,
  },
  {
    title: 'Registration Pickup & Store',
    route: 'pickup',
    component: Pickup,
  },
  {
    title: 'Featured Vendors & Exhibitors',
    route: 'vendors',
    component: Vendors,
  },
  {
    title: 'Speaker Series',
    route: 'speakers',
    component: Speakers,
  },
  {
    title: 'HQ Activities',
    route: 'activities',
    component: Activities,
  },
  {
    title: 'Games',
    route: 'games',
    component: Games,
  },
  {
    title: 'Travel Bugs',
    route: 'travel-bugs',
    component: TravelBugs,
  },
  {
    title: 'Volunteer',
    route: 'volunteer',
    component: Volunteer,
  },
  {
    title: 'FAQs',
    route: '/faqs',
  },
]

export const CANT_MISS_EXPERIENCES_PAGES: EventGuidePage[] = [
  {
    title: 'Cache Across America',
    route: 'GCA7F55',
    component: CacheAcrossAmerica,
  },
  {
    title: 'Cache Odyssey',
    route: 'GCAY6NR',
    component: CacheOdyssey,
  },
  {
    title: 'WV State Star',
    route: 'state-star',
    component: StateStar,
  },
  {
    title: 'ACT Challenge Trail',
    route: 'ACT',
    component: ACT,
  },
  {
    title: 'WV Oldest',
    route: 'GC3F0',
    component: Oldest,
  },
  {
    title: 'WV Highpoint',
    route: 'GCH3CD',
    component: Highpoint,
  },
  {
    title: 'WV Counties',
    route: 'counties',
    component: Counties,
  },
]

export const EXPLORING_MORGANTOWN_PAGES: EventGuidePage[] = [
  {
    title: 'Interactive map',
    route: 'map',
    component: InteractiveMap,
  },
  {
    title: 'Hotel & Travel',
    route: '/travel',
  },
  {
    title: 'Explore West Virginia',
    route: '/morgantown',
  },
  {
    title: 'New River Gorge NP',
    route: 'NRG',
    component: NRG,
  },
  {
    title: 'Places to Eat',
    route: 'eat',
    component: Eat,
  },
  {
    title: 'Health & Safety',
    route: 'health',
    component: Health,
  },
  {
    title: 'Bike & Kayak Rentals',
    route: 'rental',
    component: Rental,
  },
]

export const EVENT_ACTIVITIES_PAGES: EventGuidePage[] = [
  {
    title: 'Schedule of Events',
    route: '/events',
  },
  {
    title: 'Adventure Labs',
    route: 'labs',
    component: AdventureLabs,
  },
  {
    title: 'Country Roads Challenge',
    route: 'challenge',
    component: CountryRoadsChallenge,
  },
  {
    title: 'Middle of Everywhere GeoTour',
    route: 'geotour',
    component: GeoTour,
  },
  {
    title: 'Adventures in Appalachia Geo-Art',
    route: 'adventures',
    component: Adventures,
  },
  {
    title: 'Cryptid Quest Geo-Art',
    route: 'cryptid',
    component: CryptidQuest,
  },
]

export const EVENT_GUIDE_PAGES: EventGuidePage[] = [
  ...EVENT_INFORMATION_PAGES,
  ...CANT_MISS_EXPERIENCES_PAGES,
  ...EXPLORING_MORGANTOWN_PAGES,
  ...EVENT_ACTIVITIES_PAGES,
]
