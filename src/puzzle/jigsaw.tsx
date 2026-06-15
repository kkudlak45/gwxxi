import { Typography } from '@mui/material'
import './jigsaw.css'
import { useCallback } from 'react'

export function Jigsaw() {
  const onSubmit: React.FormEventHandler<HTMLFormElement> = useCallback((e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const body = {
      q1: formData.get('q1'),
      q2: formData.get('q2'),
      q3: formData.getAll('q3'),
    }

    fetch(
      'https://2q0p8qwngl.execute-api.us-east-1.amazonaws.com/default/cachemorepuzz',
      {
        method: 'POST',
        body: JSON.stringify(body),
      },
    )
      .then((response) => response.json())
      .then((response: string[]) => {
        const output = document.getElementById('jigsaw-output')
        if (!output) throw new Error('output not found!')
        // @ts-ignore
        output.value = response.join('\n')
        output.style.height = 'auto'
        output.style.height = `${output.scrollHeight}px`
      })
  }, [])

  return (
    <div className="jigsawpage">
      <Typography variant="h2">RUBATOSE ACCESS PIN RECOVERY PORTAL</Typography>
      <Typography color="red">
        This page has restricted access and is intended for RUBATOSE only.
      </Typography>
      <Typography>
        If you’re reading this, you’ve likely lost the verification pin to the
        CACHE AI program. The pin is required to access the control terminal to
        power on and off the program. This control terminal is found within
        RUBATOSE’S secret basement lair, only a short walk from the distribution
        antenna.
      </Typography>
      <Typography>
        To ensure max security, the verification pin and instructions to the
        secret lair can only be found via the RUBATOSE trading card. This card
        is hidden deep in the woods, far away from internet trolls and other
        wandering eyes. To reveal the location of the RUBATOSE trading card,
        please complete the verification quiz below:
      </Typography>

      <form onSubmit={onSubmit}>
        <label htmlFor="jigsaw-q1">
          How many dogs are featured in the puzzle?
        </label>
        <input id="jigsaw-q1" name="q1" type="number" />

        <label htmlFor="jigsaw-q2">
          What’s the SWAG you find in the cache at the bottom of the puzzle? (6,
          4)
        </label>
        <input id="jigsaw-q2" type="text" name="q2" />

        <label htmlFor="jigsaw-q3">
          Name the four animals found in the corners of the puzzle.
        </label>
        <input id="jigsaw-q3-1" type="text" name="q3" />
        <input id="jigsaw-q3-2" type="text" name="q3" />
        <input id="jigsaw-q3-3" type="text" name="q3" />
        <input id="jigsaw-q3-4" type="text" name="q3" />

        <label>Access log</label>
        <textarea id="jigsaw-output" disabled>
          [awaiting user input...]
        </textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
