import { Fragment } from 'react/jsx-runtime'
import { GuideHeader } from '../GuideHeader'
import { GuideBody } from '../GuideBody'
import { Grid, Typography } from '@mui/material'
import { Subheader } from '../Subheader'
import { BigOrangeButton } from '../BigOrangeButton'

export function Volunteer() {
  return (
    <Fragment>
      <GuideHeader title="volunteer" />

      <GuideBody>
        <Typography>
          The Geocaching community is at the heart of GeoWoodstock XXI and it
          wouldn't be possible without your continued support - thank you for
          your interest in volunteering! Below you will find the complete list
          of over 300 of volunteer opportunities that are needed during the
          upcoming event. Most time slots require you to give 2.5 hours of your
          time.
        </Typography>

        <br />
        <br />

        <Subheader>Things to know about volunteering</Subheader>

        <Typography>
          This event is important to us and by volunteering we are relying on
          you to provide other attendees the best experience possible. Please
          arrive 15 minutes before your scheduled shift and report to the
          Welcome / Information Table. You will be checked in and given any
          last-minute details and directed where to go to begin your shift.
        </Typography>

        <br />

        <Typography>
          Once your shift is finished, please return to the Welcome /
          Information Table to let us know you have completed your shift and
          receive your token of appreciation. There is only one token per
          person, no matter how many times you volunteer. Those that volunteer
          on Thursday (5/22) to help set up will need to find our volunteer
          coordinators; there will be no check in table during this time.
        </Typography>

        <br />

        <Typography>
          Most volunteer opportunities will require you to be on your feet
          during the entire assigned shift. Some involve intense physical
          activity. Please review the descriptions for each volunteer
          opportunity before signing up.
        </Typography>

        <br />

        <BigOrangeButton href="https://www.signupgenius.com/go/10C054DA4AA22A5F4C61-55693217-geowoodstock#/">
          Click here to volunteer
        </BigOrangeButton>

        <br />
        <br />
        <br />

        <Grid
          container
          rowSpacing={8}
          columnSpacing={12}
          justifyContent="center"
        >
          <Grid item xs={12} md={6}>
            <Subheader>Event Venue Setup & Take Down</Subheader>
            <Typography>
              Help with setting up and taking down the main venue. Work will be
              physical but tasks may vary. Expect to set up chairs, tables, game
              area, banners, maze, and whatever else we will need help with.
            </Typography>

            <br />
            <br />
          </Grid>
          <Grid item xs={12} md={6}>
            <Subheader>Welcome / Information Table</Subheader>
            <Typography>
              Greet guests with a warm welcome and assist them by answering any
              questions they have. Hand out information about the area. It would
              be helpful if you have a good understanding of the side events,
              the event area and the Morgantown area when volunteering for this
              task.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Subheader>Registration and SWAG pickup</Subheader>
            <Typography>Help with the following:</Typography>
            <ol>
              <li>
                <Typography>
                  Line management: Focused on keeping an eye on when the next
                  volunteer is ready for another customer.
                </Typography>
              </li>
              <li>
                <Typography>
                  Name finders: Help ID a person's package and then send them
                  with another volunteer to find their package.
                </Typography>
              </li>
              <li>
                <Typography>
                  Store manager: These people will oversee the store purchases
                  with help from a member of the GW lead crew.
                </Typography>
              </li>
              <li>
                <Typography>
                  Help walk people through their packages/materials and send
                  them on their way.
                </Typography>
              </li>
            </ol>
          </Grid>

          <Grid item xs={12} md={6}>
            <Subheader>GPS Adventures Maze Exhibit</Subheader>
            <Typography>
              You will help with any needs related to the GPS Adventure Maze
              experience. Such as being a greeter, a dark room assistor and
              guest flow controller.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Subheader>VIP Lounge</Subheader>
            <Typography>
              Help with any needs related to the VIP area. Such as restocking
              items, greeting guests and crowd control. Answer questions about
              the venue and weekend.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Subheader>Travel Bug Exchange</Subheader>
            <Typography>
              Handing out tickets and helping to bag TB's for location if
              necessary. You will likely be sitting for this.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Subheader>Games Area</Subheader>
            <Typography>
              Help with running any of the 4 games, wooden nickel redemption
              (Plinko, Dice, Prize Wheel, Film Canisters).
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Subheader>Photo Opportunities</Subheader>
            <Typography>
              Assist guests with taking pics and setting up props. Answer guest
              questions about the venue and weekend.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Subheader>Vendors and Exhibitors</Subheader>
            <Typography>
              Help attendees, such as direct to restrooms, or where to find
              specific vendors. Help vendors if they need a bathroom break,
              lunch break or a break (you may need to be a runner for lunches).
              Having a good knowledge of the main event area is important.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Subheader>Lunch Area</Subheader>
            <Typography>
              Collect meal tickets/ direct lines/ restock drink area/ restock
              chip area/ clean tables between guests & empty trash cans if
              needed.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Subheader>Onsite Adventure Labs </Subheader>
            <Typography>
              General duties include helping people move smoothly through the
              adventure lab stages and exhibit, reporting any maintenance issues
              with any physical stages
            </Typography>
          </Grid>
        </Grid>
      </GuideBody>
    </Fragment>
  )
}
