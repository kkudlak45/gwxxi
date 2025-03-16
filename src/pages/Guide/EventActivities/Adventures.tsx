import { Fragment } from 'react/jsx-runtime'
import { GuideHeader } from '../GuideHeader'
import { GuideBody } from '../GuideBody'
import { Typography } from '@mui/material'

export function Adventures() {
  return (
    <Fragment>
      <GuideHeader
        title="ADVENTURES IN APPALACHIA GEO-ART"
        subTitle="Come complete the largest Adventure Lab Art in the United States!"
      />

      <GuideBody>
        <img
          style={{ maxWidth: '100%', aspectRatio: '600 / 586' }}
          src={`${import.meta.env.BASE_URL}eventguide/eventactivities/labart_600x586.jpg`}
        />

        <br />

        <Typography>
          Welcome to West Virginia! This Adventure Lab art will serve as your
          virtual tour guide to all that you can find here in the Mountain
          State! Made up of 120 Adventures (totaling 600 individual stages),
          you'll learn more about the history, culture, food, fun, and Geocaches
          that can be found during your visit to West Virginia! Whether you're
          passing through, visiting for the first time, or a lifelong
          Mountaineer, you're sure to learn more about West Virginia, and why we
          call this place “Almost Heaven”.
        </Typography>

        <br />
        <br />

        <Typography variant="h3" fontSize="1.4rem">
          Accessing the Adventure
        </Typography>
        <br />
        <Typography>
          The Adventures in Appalachia Geo-Art is located at the I-79 welcome
          center north of Morgantown, West Virginia. If you're traveling
          southbound on I-79 from Pennsylvania, it will be the very first exit
          on the right (about 2 miles past the state line). If you're traveling
          northbound, you'll need to exit at Mount Morris, Pennsylvania and
          re-enter West Virginia to access the labs.
        </Typography>

        <br />
        <br />

        <Typography variant="h3" fontSize="1.4rem">
          What to expect
        </Typography>
        <br />
        <Typography>
          Each of the 120 adventure labs highlight a unique piece of Appalachian
          culture. Whether it's highlighting a local celebrity, general trivia,
          or even pepperoni rolls, each lab has been carefully crafted to
          hopefully teach you something new about West Virginia. On average, it
          takes about 2 hours to complete all 600 multiple choice questions in
          the art. Throughout the series, you'll be presented with a keyword
          that can be entered into the checker on the{' '}
          <a target="_blank" href="http://coord.info/GCAX6CM">
            Adventures in Appalachia Bonus Cache
          </a>
          . This bonus cache is also located at the I-79 Welcome Center. Feel
          free to leave any comments, photos, and milestones in your log on the
          bonus cache to celebrate your visit to West Virginia!
        </Typography>

        <br />
        <br />

        <Typography variant="h3" fontSize="1.4rem">
          Quick tips
        </Typography>
        <ul>
          <li>
            <Typography>
              Bring a Charger - With over 600 individual adventure lab stages
              for you to complete, it would probably be a good idea to keep your
              phone charged! (As a bonus tip, the Welcome Center has free Wi-Fi,
              so no need to stress about cell service!){' '}
            </Typography>
          </li>
          <li>
            <Typography>
              Pack a Snack - Whether it's your favorite lunch meat sandwich or a
              delicious pepperoni roll, you'll wanna stay fueled up for an
              exciting tour of all things wild and wonderful!
            </Typography>
          </li>
          <li>
            <Typography>
              Crank Up the Tunes - While you're working on your virtual trip
              around the Mountain State, why not listen to the{' '}
              <a
                target="_blank"
                href="https://open.spotify.com/playlist/4UNOOo6u2GjGR54XVRSmSx?si=540fd2878b4b4d9e&pt=a1ae5d26feec7507a9955ad42990a7e8"
              >
                official GeoWoodstock XXI playlist
              </a>
              ?
            </Typography>
          </li>
        </ul>

        <br />
      </GuideBody>
    </Fragment>
  )
}
