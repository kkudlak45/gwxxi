import { styled, Typography } from '@mui/material'
import { BigOrangeButton } from '../Guide/BigOrangeButton'
import { Section } from '../../components/Section'

export const Justified = styled(Typography)({
  textAlign: 'justify',
})

export const GoodSection = styled(Section)({
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0.5rem 0',
})

export function Team() {
  return (
    <div style={{ padding: '0 1rem' }}>
      <Typography variant="h2" marginTop="2rem">
        Tech Team Challenge
      </Typography>

      <GoodSection sx={{ marginTop: '-1rem' }}>
        <Justified>
          CacheMore 2026 introduces a bold new experiment: a powerful Cache AI
          designed to analyze data, recognize patterns, and unlock a mystery
          hidden across Morgantown. Before it can be trusted, the system must be
          tested … and that’s where you come in. The Tech Team Challenge is a
          city-wide, team-based adventure that blends exploration, puzzles, and
          collaboration. Your mission is to perform a series of system tests to
          ensure the AI is ready to go live and uncover a final bonus geocache
          hidden somewhere in Morgantown.
        </Justified>
        <br />
        <BigOrangeButton
          href="/events/2026/about"
          sx={{ lineHeight: '2rem', marginTop: '1rem', padding: '0.6rem 2rem' }}
        >
          Click here to learn more
          <br />
          about what to expect
        </BigOrangeButton>
      </GoodSection>

      <GoodSection>
        <Typography variant="h4">How The Challenge Works</Typography>
        <div style={{ width: '100%', alignItems: 'flex-start' }}>
          <Justified>
            To test the Cache AI program, participants have the opportunity to
            complete 25 unique protocols (Adventure Labs), organized across five
            core data collection criteria. To gather as much information as
            possible, all Adventure Labs will be open to all teams, but
            information found within the registration packages will help
            participants hone in on the clues they need to crack the case. The
            objective is to complete enough Adventure Labs to uncover clues to
            locate a physical Geocache placed somewhere in Morgantown.
          </Justified>
          <br />
          <Justified>
            Clues for the final Geocache can be found in the Adventure Lab
            journals for each test. 10 locations hold clues to help Team Nexus,
            10 locations hold clues to help Team Byte, and 5 locations give
            clues on how to piece it all together. Each Adventure Lab stop will
            guide you to local businesses, landmarks, and unique locations
            around Mountaineer Country. Along the way, you’ll solve puzzles and
            complete site-specific tasks similar to an escape room.
          </Justified>
          <br />
          <Justified>
            These locations can be completed in any order, and attendees should
            prepare to spend at least 6 hours traveling to the various
            locations. Participants are welcome to complete as many Adventure
            Labs as they would like, but gathering all the clues for at least
            one team is recommended to solve for the bonus geocache location.
            Information found in registration packages will be required to solve
            additional puzzles awarded in the Adventure Lab journal.
          </Justified>
        </div>
      </GoodSection>

      <GoodSection>
        <Typography variant="h4">
          Timeline & Final Objective Challenge
        </Typography>

        <div style={{ width: '100%', alignItems: 'start' }}>
          <Justified>
            The challenge will launch on Friday (6/26) at 10 AM and conclude
            Saturday (6/27) at 4 PM; Participants will have this full time to
            complete as many Adventure Labs as possible and locate the bonus
            Geocache hidden somewhere in Morgantown. Inside the bonus geocache
            is special information needed to claim your finisher reward. The
            first 100 participants to complete the challenge will receive a
            trackable Tech Team Challenge Finisher Geocoin. (Disclaimer: Only
            registered participants are eligible to claim a finisher Geocoin.)
            The bonus geocache will publish at 5 PM on Saturday (6/27) following
            the conclusion of the event, but can be found at any time once all
            the information is collected. Participants who don’t finish the
            challenge on Saturday are encouraged to find the official bonus
            cache on Sunday to claim credit for the D5 mystery. Finisher coins
            will be awarded until all 100 have been distributed.
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
            event may leave important pieces of the puzzle undiscovered.
          </Justified>
          <br />
          <Justified>
            A smartphone capable of running the Adventure Lab app is required.
            No specialized knowledge is needed. All clues can be gathered on
            site; no outside research, Googling, or prior puzzle experience
            required. Just bring your curiosity, your team spirit, and your
            sense of adventure.
          </Justified>
        </div>
      </GoodSection>

      <GoodSection>
        <Typography variant="h4">
          Team Structure & Competition Details
        </Typography>
        <div style={{ width: '100%', alignItems: 'start' }}>
          <Justified>
            Participation in the Tech Team Challenge requires{' '}
            <a href="/events/2026/register">registering on a team</a>. Depending
            on demand, teams will be capped at 100 participants.
          </Justified>
          <br />
          <Justified>
            The Tech Team Challenge is designed to be both competitive and
            cooperative, with teamwork adding to the weekend’s fun. Work closely
            with your own team, or coordinate across teams, to gather as much
            information as possible. All stages in the Tech Team Challenge are
            designed to be completed solo or with a team.
          </Justified>
        </div>
      </GoodSection>

      {/* <GoodSection>
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
                participants from each team
              </Typography>
            </li>
          </ul>
          <Justified>
            At the conclusion of the event, one team will be crowned the victors
            of CacheMore 2026. This marks the beginning of an ongoing tradition.
            Future CacheMore events will feature red and blue teams, with a
            winning team crowned each year. Please keep in mind that this isn’t
            a true competition and is just for fun; participants are encouraged
            to share information and collaborate with other attendees, even if
            they are part of a rival team.
          </Justified>
        </div>
      </GoodSection> */}

      <GoodSection>
        <Typography variant="h4">Team Tips</Typography>
        <div style={{ width: '100%', alignItems: 'start' }}>
          <ul>
            <li>
              <Typography>
                It’s recommended (but not required) that individuals in your
                party join the same team.
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
                  <Typography>Sign cache logs using your team color</Typography>
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
        <div style={{ width: '100%', alignItems: 'start' }}>
          <Justified>
            No worries! There are still plenty of things to enjoy at CacheMore!
            For starters, participation in the Tech Team Challenge is not
            required to find and enjoy the various Adventure Labs hidden
            throughout Morgantown. Along the way, don’t forget to find the 10
            new caches that are a part of the{' '}
            <a href="/projects/vmcgt">Visit Mountaineer Country GeoTour</a>!{' '}
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
    </div>
  )
}
