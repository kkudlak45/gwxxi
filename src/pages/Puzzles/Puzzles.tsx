import { Typography, useTheme } from '@mui/material'
import { CopyBlock, dracula } from 'react-code-blocks'
import { TEXT } from './cachepagepuzzlehtml'
import './Puzzles.css'

export function Puzzles() {
  const { palette } = useTheme()
  return (
    <div style={{ padding: '0 1rem' }}>
      <Typography variant="h2" marginTop="2rem">
        Pre-Event Puzzles
      </Typography>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Typography textAlign="justify">
          Get a head start on the mystery with the CacheMore 2026 Pre-Event
          Puzzle Series! Between May 8 and June 5, a brand-new puzzle will drop
          each Friday morning, for a total of five optional warm-up challenges.
          These puzzles aren’t required to be solved or found, but for teams who
          can’t resist cracking a code, they add an extra layer of fun and may
          even offer subtle sneak peeks into the weekend’s bigger mystery.
          They’re also a perfect excuse to connect with your team early, get the
          gears turning, and pick up some satisfying D/T ratings to log before
          you arrive in Morgantown ready for the main event.
        </Typography>
        <Typography textAlign="justify">
          The pre-event puzzles will be placed around Morgantown, making it easy
          for participants to seek them out and log a find at any point
          throughout the weekend. Keep an eye out, some of these puzzle caches
          may also contain CacheMore trading cards, including a few that could
          be trickier to collect, adding yet another layer of challenge and
          reward for those who go the extra mile.
        </Typography>
      </div>

      <p />
      <p />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.2rem',
          backgroundColor: palette.grey[200],
          padding: '1rem',
          alignItems: 'center',
          marginTop: '2rem',
        }}
      >
        <Typography textAlign="center" variant="h4" marginTop="0px !important">
          Can you solve them all?
        </Typography>
        <Typography marginBottom="0.4rem">
          <em>
            Pre-event puzzles will be published soon. Check back for more
            details.
          </em>
        </Typography>
        <Typography>
          May 8 - Crossed Wires (
          <a href="https://coord.info/GCBHQQJ" target="_blank">
            GCBHQQJ
          </a>
          )
        </Typography>
        <Typography>
          May 15 - Binary Reboot (
          <a href="https://coord.info/GCBHQQN" target="_blank">
            GCBHQQN
          </a>
          )
        </Typography>
        <Typography>
          May 22 - Keyed Entry (
          <a href="https://coord.info/GCBNPC8" target="_blank">
            GCBNPC8
          </a>
          )
        </Typography>
        <Typography>
          May 29 - Computational Computing (
          <a href="https://coord.info/GCBNPBV" target="_blank">
            GCBNPBV
          </a>
          )
        </Typography>
        <Typography>
          June 5 - Not A Robot (
          <a href="https://coord.info/GCBNPCC" target="_blank">
            GCBNPCC
          </a>
          )
        </Typography>
      </div>

      <p />
      <p />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          marginBottom: '1rem',
        }}
      >
        <Typography variant="h4">
          Host or Attend a CacheMore Countdown Event!
        </Typography>
        <Typography textAlign="justify">
          CacheMore Countdown is your chance to kick off the excitement locally!
          Between June 1 and June 20, we’re encouraging teams to host their own
          CacheMore events in communities everywhere. Work on the pre-event
          puzzles together, swap strategies, and build the camaraderie that will
          make the journey to Morgantown even more thrilling. It’s the perfect
          way to connect with your team and start the countdown to the greatest
          weekend of geocaching yet!
        </Typography>
        <Typography textAlign="justify">
          Need help solving the pre-event puzzles? Don't worry - attend a
          CacheMore Countdown event in your area and share ideas!{' '}
          <a target="_blank" href="https://coord.info/BMFBGWE">
            Find one near you!
          </a>{' '}
          Don't see one close? You can host your own!
        </Typography>
        <Typography textAlign="justify">
          Use the HTML found below to create your own CacheMore Countdown event
          and message{' '}
          <a target="_blank" href="https://www.geocaching.com/p/?u=JenOvations">
            JenOvations
          </a>{' '}
          to have your event added to the list! Thanks, and we can't wait to see
          you in Morgantown!
        </Typography>
      </div>

      <CopyBlock
        language="html"
        text={TEXT}
        theme={dracula}
        showLineNumbers
        codeBlock
      />

      <p />
      <p />
    </div>
  )
}
