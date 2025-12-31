import { styled, Typography } from '@mui/material'
import { Fragment } from 'react/jsx-runtime'
import { BigOrangeButton } from '../Guide/BigOrangeButton'
import { Section } from '../../components/Section'

export const Justified = styled(Typography)({
  textAlign: 'justify',
})

export const GoodSection = styled(Section)({
  flexDirection: 'column',
  alignItems: 'center',
})

export function Team() {
  return (
    <Fragment>
      <Typography variant="h2" marginTop="2rem">
        Tech Team Challenge
      </Typography>

      <GoodSection sx={{ marginTop: '-1rem' }}>
        <Justified>
          CacheMore 2026 introduces a bold new experiment: a powerful Cache AI
          designed to analyze data, recognize patterns, and unlock a mystery
          hidden across Morgantown. Before it can be trusted, the system must be
          tested … and that’s where you come in.{' '}
        </Justified>
        <br />
        <Justified>
          The Tech Team Challenge is a city-wide, team-based adventure that
          blends exploration, puzzles, and collaboration. Your mission is to
          gather critical “data points,” feed the AI what it needs, and uncover
          a final bonus geocache hidden somewhere in Morgantown.
        </Justified>
        <br />
        <BigOrangeButton href="/events/2026/about">
          Click here to learn more
          <br />
          about what to expect
        </BigOrangeButton>
      </GoodSection>

      <GoodSection>
        <Typography variant="h4">How The Challenge Works</Typography>
        <br />
        <div style={{ width: '100%', alignItems: 'flex-start' }}>
          <Typography>
            To test the Cache AI, participants will collect information from 30
            Adventure Lab locations placed throughout Morgantown:{' '}
          </Typography>
          <ul>
            <li>
              <Typography>
                10 general Adventure Labs will be accessible to all
                participants, regardless of team.
              </Typography>
            </li>
            <li>
              <Typography>
                10 Adventure Labs will only be accessible to Team Nexus using
                specialized information found in their registration packages.
              </Typography>
            </li>
            <li>
              <Typography>
                10 Adventure Labs will only be accessible to Team Byte using
                specialized information found in their registration packages.{' '}
              </Typography>
            </li>
          </ul>
          <Justified>
            Each Adventure Lab stop will guide you to local businesses,
            landmarks, and unique locations around Mountaineer Country. Along
            the way, you’ll solve puzzles and explore new places. These stops
            serve as data points for the Cache AI. Adventure Lab locations can
            be completed in any order, and visiting all 20 (10 general and 10
            team specific) is estimated to take about six hours. At each
            Adventure Lab, the journal entry will provide a special piece of
            information. Every detail matters; these clues are required to
            complete the challenge and locate the final bonus cache.
          </Justified>
          <br />
          <Justified>
            To collect enough information to solve the weekend’s mystery, you’ll
            want to prioritize finding all 10 Adventure Labs designated for your
            team. For Double-Crossed Agents, the same information can be
            obtained from either Adventure Lab set, meaning Team Nexus stop #1
            will have the same information as Team Byte stop #1. Strategizing
            your locations to maximize efficiency of data collection is highly
            recommended.
          </Justified>
          <br />
          <Justified>
            Teams are welcome to cross sides and complete Adventure Lab
            locations of the other team, but they will need information from the
            opposing registration package.
          </Justified>
        </div>
      </GoodSection>

      <GoodSection>
        <Typography variant="h4">
          Timeline & Final Objective Challenge
        </Typography>

        <br />

        <div style={{ width: '100%', alignItems: 'start' }}>
          <Justified>
            You’ll have from Friday (6/26) at 10 AM to Saturday (6/27) at 4 PM
            to complete as many Adventure Labs as possible and locate the bonus
            geocache hidden somewhere within Morgantown. Inside the bonus
            geocache is special information needed to claim your finisher
            reward. The first 100 participants to complete the challenge will
            receive a trackable Tech Team Challenge Finisher Geocoin. The bonus
            geocache will publish at 5 PM on Saturday (6/27) following the
            conclusion of the event, but can be found at any time once all the
            information is collected. Participants who don’t finish the
            challenge on Saturday are encouraged to find the official bonus
            cache on Sunday to claim credit for the D5 mystery.
          </Justified>
          <br />
          <Justified>
            Be sure to attend the{' '}
            <a target="_blank" href="http://coord.info/GCBFQRD">
              Signal Symposium
            </a>{' '}
            event on Friday night (6/26). This event is a critical part of the
            Tech Team Challenge and the weekend’s larger mystery. Information
            revealed during the symposium may reshape your understanding of the
            challenge, and could challenge everything you thought you knew about
            how the mystery fits together. While not required, skipping this
            event may leave important pieces of the puzzle undiscovered.{' '}
          </Justified>
          <br />
          <Justified>
            A smartphone capable of running the Adventure Lab app is required.
            No specialized knowledge is needed. All clues can be gathered on
            site, no outside research, Googling, or prior puzzle experience
            required. Just bring your curiosity, your team spirit, and your
            sense of adventure.
          </Justified>
        </div>
      </GoodSection>

      <GoodSection>
        <Typography variant="h4">
          Team Structure & Competition Details
        </Typography>
        <br />
        <div style={{ width: '100%', alignItems: 'start' }}>
          <Justified>
            Participation in the Tech Team Challenge requires{' '}
            <a href="/events/2026/register">registering on a team</a>. Depending
            on demand, teams will be capped at 100 participants.
          </Justified>
          <br />
          <Justified>
            The Tech Team Challenge is designed to be both competitive and
            cooperative, with teamwork adding to the weekend’s fun. While teams
            have exclusive access to certain Adventure Labs, collaboration is
            encouraged. Work closely with your own team, or coordinate across
            teams, to gather as much information as possible. All stages in the
            Tech Team Challenge are designed to be completed solo or with a
            team.
          </Justified>
        </div>
      </GoodSection>

      <GoodSection>
        <Typography variant="h4">
          The final results are based on a combination of:
        </Typography>
        <div style={{ width: '100%', alignItems: 'start' }}>
          <ul>
            <li>
              <Typography>
                The total number of Adventure Lab locations completed by members
                of each team
              </Typography>
            </li>
            <li>
              <Typography>
                How many of the 100 finisher Geocoins are claimed by
                participants from each team{' '}
              </Typography>
            </li>
          </ul>
          <Justified>
            At the conclusion of the event, one team will be crowned the victors
            of CacheMore 2026. This marks the beginning of an ongoing tradition.
            Future CacheMore events will feature red and blue teams, with a
            winning team crowned each year. Please keep in mind that this isn’t
            a true competition, and is just for fun; participants are encouraged
            to share information and collaborate with other attendees, even if
            they are part of a rival team.
          </Justified>
        </div>
      </GoodSection>

      <GoodSection>
        <Typography variant="h4">Team Tips</Typography>
        <div style={{ width: '100%', alignItems: 'start' }}>
          <ul>
            <li>
              <Typography>
                It’s recommended (but not required) that individuals in your
                party join the same team.{' '}
              </Typography>
            </li>
            <li>
              <Typography>
                Participants are encouraged to stay at one of the{' '}
                <a href="/events/2026/travel">host team hotels</a> to make
                collaboration easier and more fun.{' '}
              </Typography>
            </li>
            <li>
              <Typography>Show your team pride all weekend long: </Typography>
              <ul>
                <li>
                  <Typography>Dress in your team’s colors </Typography>
                </li>
                <li>
                  <Typography>
                    Sign cache logs using your team color{' '}
                  </Typography>
                </li>
                <li>
                  <Typography>Represent your side wherever you go </Typography>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </GoodSection>

      <GoodSection sx={{ marginTop: '-1rem' }}>
        <Typography variant="h4">Puzzle Solving Not Your Thing?</Typography>
        <br />
        <div style={{ width: '100%', alignItems: 'start' }}>
          <Justified>
            No worries! There are still plenty of things to enjoy at CacheMore!
            For starters, participation in the Tech Team Challenge is not
            required to find and enjoy the various Adventure Labs hidden
            throughout Morgantown. Along the way, don’t forget to find the 10
            new caches that are a part of the{' '}
            <a href="/projects/vmc-gt">Visit Mountaineer Country GeoTour</a>!{' '}
          </Justified>
          <br />
          <Justified>
            There are also tons of exciting events to participate in, where
            you’ll meet hundreds of other cachers. This is a great opportunity
            to <a href="/events/2026/trading-cards">swap trading cards</a>, too.
            Can you complete the full set?
          </Justified>
        </div>
      </GoodSection>

      <br />
      <br />
    </Fragment>
  )
}
