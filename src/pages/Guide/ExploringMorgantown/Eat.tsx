import { Fragment } from 'react/jsx-runtime'
import { GuideHeader } from '../GuideHeader'
import { Typography } from '@mui/material'
import { BoldKol } from '../CantMissExperiences/Counties'
import { GuideBody } from '../GuideBody'

export function Eat() {
  return (
    <Fragment>
      <GuideHeader
        title="Places to Eat"
        subTitle="Looking for a bite to eat? Check out our local recommendations!"
      />

      <GuideBody>
        <Typography>
          <BoldKol>Tudor's Biscuit World</BoldKol> - For a true Mountaineer
          breakfast, check out Tudor's Biscuit World! Tudor's is a counter-serve
          chain featuring signature biscuits & other American classics from
          breakfast to dinner.{' '}
          <a href="maps:?q=3071+University+Ave,+Morgantown,+WV">
            3071 University Ave, Morgantown, WV 26505
          </a>
        </Typography>
        <br />
        <Typography>
          <BoldKol>Black Bear Burritos</BoldKol> - Mexican eats & draft
          microbrews are the draw at this spacious, casual counter served with
          live music.{' '}
          <a href="maps:?q=3119+University+Ave,+Morgantown,+WV">
            3119 University Ave, Morgantown, WV 26505
          </a>
        </Typography>
        <br />
        <Typography>
          <BoldKol>Short Story Brewing</BoldKol> - Enjoy a pint at this locally
          owned brewery!
        </Typography>
        <Typography paddingLeft="32px">
          Morgantown Location -{' '}
          <a href="maps:?q=94+Long+St,+Westover,+WV">
            94 Long St, Westover, WV 26501
          </a>
        </Typography>
        <Typography paddingLeft="32px">
          Fairmont Location -{' '}
          <a href="maps:?q=5904+Fairmont+Rd,+Rivesville,+WV">
            5904 Fairmont Rd, Rivesville, WV 26588
          </a>
        </Typography>
        <br />
        <Typography>
          <BoldKol>Oliverio's Ristorante</BoldKol> - Traditional Italian dishes
          come in a relaxed, family-friendly dining room with a warm vibe.{' '}
          <a href="maps:?q=52+Clay+St,+Morgantown,+WV">
            52 Clay St, Morgantown, WV 26501
          </a>
        </Typography>
        <br />
        <Typography>
          <BoldKol>Mountain State Brewing Company</BoldKol> - Wood-fired
          flatbreads, bar food & house beers with mountain views in a low-key
          pub setting.
        </Typography>
        <Typography paddingLeft="32px">
          Wharf Location -{' '}
          <a href="maps:?q=54+Clay+St,+Morgantown,+WV">
            54 Clay St, Morgantown, WV 26501
          </a>
        </Typography>
        <Typography paddingLeft="32px">
          Star City Location -{' '}
          <a href="maps:?q=3505+Monongahela+Blvd,+Star+City,+WV">
            3505 Monongahela Blvd, Star City, WV 26505
          </a>
        </Typography>
        <br />
        <Typography>
          <BoldKol>Muriale's Italian Kitchen</BoldKol> - Traditional Italian
          eats such as spaghetti & meatballs come in a comfortable,
          family-friendly room.{' '}
          <a href="maps:?q=1742+Fairmont+Ave,+Fairmont,+WV">
            1742 Fairmont Ave, Fairmont, WV 26554
          </a>
        </Typography>
        <br />
        <Typography>
          <BoldKol>Poky Dot</BoldKol> - Funky, long-running diner offering a big
          menu of comfort chow in a colorful, vintage setting.{' '}
          <a href="maps:?q=1111+Fairmont+Ave,+Fairmont,+WV">
            1111 Fairmont Ave, Fairmont, WV 26554
          </a>
        </Typography>
        <br />
      </GuideBody>
    </Fragment>
  )
}
