import { Fragment } from 'react/jsx-runtime'
import { GuideHeader } from '../GuideHeader'
import { GuideBody } from '../GuideBody'
import { Typography } from '@mui/material'
import { BoldKol } from '../CantMissExperiences/Counties'
import { Subheader } from '../Subheader'

export function TravelBugs() {
  return (
    <Fragment>
      <GuideHeader title="Travel Bugs" />

      <GuideBody>
        <Typography>
          Based on growth of previous Geowoodstock events, we are expecting
          6,000 to 10,000 trackables through the travel bug area. To accommodate
          this level of activity in a fairly short period, the following
          guidelines will be used. Please review these notes thoroughly to be
          prepared for a quick and easy exchange of travel bugs!
        </Typography>

        <br />

        <Typography fontSize="1.4rem">
          <BoldKol>
            There will be no registering of TB numbers into or out of the travel
            bug area.
          </BoldKol>
        </Typography>

        <br />

        <Typography>
          It's the responsibility of the cacher who logged the TB/coin into the
          event to either drop it at the TB area or pass it on to another
          cacher. It is also the responsibility of the cacher who retrieves the
          TB/coin to log it properly in a timely manner.
        </Typography>

        <br />

        <Typography>
          As the owner of a TB or coin dropped into the event, it is up to you
          to contact the person who plans to bring your TB/coin about any
          concerns you may have.
        </Typography>

        <br />

        <div>
          <Typography>
            The <BoldKol>TB TRADERS</BoldKol> will be asked to:
          </Typography>
          <ol style={{ marginTop: 0 }}>
            <li>
              <Typography>
                Put the individual TBs into a ziploc baggie (replace if in bad
                shape){' '}
              </Typography>
            </li>
            <li>
              <Typography>
                Print out the bug sheet for each TB, insert into baggie
              </Typography>
            </li>
            <li>
              <Typography>
                Put a small slip of paper inside the baggie and give it one of
                several mission labels listed below for ease of sorting - WHERE
                THE TB WANTS TO GO!! If it wants a particular state, list that
                as well
              </Typography>
            </li>
            <li>
              <Typography>
                <BoldKol>
                  You will receive 1 ticket for each TB you bring
                </BoldKol>
                . These are not raffle tickets; you can take the same amount of
                travel bugs as you dropped off until Saturday (5/24) at 3pm
              </Typography>
            </li>
            <li>
              <Typography>
                <BoldKol>As you leave the TB area</BoldKol>, you will be asked
                to turn in 1 ticket for each TB you are taking
              </Typography>
            </li>
            <li>
              <Typography>
                Those not having brought TB's will get the opportunity to pick
                up a limited number TB's after 3:15pm on Saturday until all TB's
                are dispensed
              </Typography>
            </li>
            <li>
              <Typography>
                <BoldKol>Discovering travel bugs</BoldKol> in the TB area will
                be discouraged due to the high volume of TBs and cachers
                expected. There will be a limited number of large TB's set aside
                whose owners have requested Discover logs. These will be
                available for pick up after 3pm on Saturday at the owner's
                discretion
              </Typography>
            </li>
          </ol>
        </div>

        <br />

        <Typography>
          <BoldKol>AW - No specific mission / task</BoldKol> - For bugs that can
          basically go anywhere to complete a mission, or have none at all.
          Please list in 1-2 words the specific task (For example: Task - MLB
          parks).
        </Typography>
        <Typography>
          <BoldKol>States</BoldKol> - Travel Bugs wishing to visit all 50
          states, or lower 48 states.
        </Typography>
        <Typography>
          <BoldKol>WV</BoldKol> - West Virginia Travel Bugs wishing to Remain in
          West Virginia
        </Typography>
        <Typography>
          <BoldKol>MA - Mid-Atlantic States</BoldKol> - Maryland, North
          Carolina, Virginia, Delaware, and Wash DC
        </Typography>
        <Typography>
          <BoldKol>NE - North East States</BoldKol> - Maine, Vermont, New
          Hampshire, Connecticut, Rhode Island, Massachusetts, New Jersey,
          Pennsylvania, and New York.
        </Typography>
        <Typography>
          <BoldKol>SE - Southeast States</BoldKol> - Florida, So. Carolina,
          Georgia, Alabama, Tennessee, Kentucky, and Mississippi
        </Typography>
        <Typography>
          <BoldKol>SC - South Central States</BoldKol> - Louisiana, Arkansas,
          Oklahoma, Missouri, Texas and Kansas
        </Typography>
        <Typography>
          <BoldKol>MW - Midwest States</BoldKol> - Michigan, Wisconsin, Ohio,
          Indiana, and Illinois
        </Typography>
        <Typography>
          <BoldKol>NP - Northern Plains States</BoldKol> - Iowa, Minnesota,
          Nebraska, Colorado N. Dakota, S. Dakota, Wyoming
        </Typography>
        <Typography>
          <BoldKol>SW - Southwest States</BoldKol> - California, New Mexico,
          Arizona, Utah, and Nevada
        </Typography>
        <Typography>
          <BoldKol>NW - Northwest States</BoldKol> - Oregon, Washington, Idaho,
          Montana, Alaska
        </Typography>
        <Typography>
          <BoldKol>ECAN - Eastern Canada</BoldKol> - ONT, QUEB, NF, NB, NS, PEI
        </Typography>
        <Typography>
          <BoldKol>WCAN - Western Canada</BoldKol> - BC, YUKON, ALB, SASK, MAN
        </Typography>
        <Typography>
          <BoldKol>EUA - Europe / Africa / Mideast</BoldKol>
        </Typography>
        <Typography>
          <BoldKol>PAC - Pacific regions</BoldKol> - Hawaii, Asia, Australia
        </Typography>
        <Typography>
          <BoldKol>LAM - Latin America</BoldKol> - Caribbean, Mexico, Central
          America, South America
        </Typography>

        <br />
        <br />

        <Subheader>TB Trading Times</Subheader>
        <Typography>
          Inside GeoWoodstock HQ at Mylan Park, an area will be designated to
          drop off and pick up travel bugs. Please follow signage and ask
          volunteers if you have trouble finding the trading area.
        </Typography>
        <br />
        <div>
          <Typography>
            <BoldKol>Friday (5/23) from 9 AM - 2 PM</BoldKol> - A table will be
            available so TB's can be{' '}
            <BoldKol style={{ textDecoration: 'underline' }}>
              dropped off only
            </BoldKol>
            , to accommodate cachers who want to head out to cache early
            Saturday morning. Tickets will be handed out, but TB's will not be
            available for pick up until Saturday.
          </Typography>
          <br />
          <Typography>
            <BoldKol>Saturday (5/24) from 8 am - 3 pm</BoldKol> - TB area will
            be closed when all TB's are gone, or by 4 PM.
          </Typography>
        </div>
      </GuideBody>
    </Fragment>
  )
}
