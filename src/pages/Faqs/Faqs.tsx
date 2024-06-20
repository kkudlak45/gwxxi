import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from '@mui/material'
import React from 'react'
import { Fragment } from 'react/jsx-runtime'
import { useIsMobile } from '../../hooks/useIsMobile'

function FaqCard({
  question,
  children,
}: {
  question: string
  children: React.ReactNode
}) {
  return (
    <Grid
      item
      xs={12}
      md={6}
      marginBottom="1rem"
      display="flex"
      justifyContent="center"
    >
      <Accordion sx={{ maxWidth: '98%' }}>
        <AccordionSummary>
          <Typography variant="h3" fontSize="1rem">
            {question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </Grid>
  )
}

export function Faqs() {
  const isMobile = useIsMobile()

  return (
    <Fragment>
      <Typography variant="h2" textAlign="center" marginTop="2rem">
        {isMobile ? 'FAQS' : 'FREQUENTLY ASKED QUESTIONS'}
      </Typography>

      <Typography textAlign="center">
        Here's the top questions asked so far..
      </Typography>

      <Grid container>
        <FaqCard question="Tempor magna do anim ad eiusmod aliqua fugiat ea anim sit labore?">
          <Typography textAlign={isMobile ? 'center' : 'start'}>
            Non esse ut dolor commodo occaecat. Cupidatat pariatur sint magna
            nisi laborum minim eiusmod ut quis reprehenderit voluptate sit.
            Tempor consectetur fugiat magna aute. Occaecat cupidatat pariatur
            qui veniam. Quis laboris excepteur Lorem nulla dolor laboris quis
            labore incididunt. Aliqua dolor nostrud duis dolore. Lorem
            incididunt id ullamco labore irure ad veniam velit nulla.
            Reprehenderit in eiusmod incididunt do labore. Reprehenderit do aute
            ad non exercitation et ea ut sunt Lorem consectetur proident.
            Ullamco qui ullamco aute velit eiusmod cupidatat magna ea sunt do
            voluptate pariatur elit.
          </Typography>
        </FaqCard>

        <FaqCard question="Ipsum cillum duis est incididunt ipsum commodo?">
          <Typography textAlign={isMobile ? 'center' : 'start'}>
            Culpa duis aute amet dolore. Eiusmod cupidatat ullamco anim et
            aliquip. Non qui deserunt esse tempor duis pariatur culpa irure
            ipsum. Exercitation esse consequat irure labore. Eiusmod ea proident
            excepteur et. Ex irure occaecat veniam excepteur duis ea qui quis
            tempor. Duis esse nostrud ea ullamco ullamco elit magna nulla. Ad
            amet duis eu voluptate eu aliquip cillum deserunt. Cupidatat irure
            adipisicing sint fugiat excepteur eu dolor amet. Occaecat quis
            veniam voluptate esse ad culpa voluptate eu est veniam consequat
            eiusmod consectetur.
          </Typography>
        </FaqCard>

        <FaqCard question="Tempor magna do anim ad eiusmod aliqua fugiat ea anim sit labore?">
          <Typography textAlign={isMobile ? 'center' : 'start'}>
            Non esse ut dolor commodo occaecat. Cupidatat pariatur sint magna
            nisi laborum minim eiusmod ut quis reprehenderit voluptate sit.
            Tempor consectetur fugiat magna aute. Occaecat cupidatat pariatur
            qui veniam. Quis laboris excepteur Lorem nulla dolor laboris quis
            labore incididunt. Aliqua dolor nostrud duis dolore. Lorem
            incididunt id ullamco labore irure ad veniam velit nulla.
            Reprehenderit in eiusmod incididunt do labore. Reprehenderit do aute
            ad non exercitation et ea ut sunt Lorem consectetur proident.
            Ullamco qui ullamco aute velit eiusmod cupidatat magna ea sunt do
            voluptate pariatur elit.
          </Typography>
        </FaqCard>

        <FaqCard question="Ipsum cillum duis est incididunt ipsum commodo?">
          <Typography textAlign={isMobile ? 'center' : 'start'}>
            Culpa duis aute amet dolore. Eiusmod cupidatat ullamco anim et
            aliquip. Non qui deserunt esse tempor duis pariatur culpa irure
            ipsum. Exercitation esse consequat irure labore. Eiusmod ea proident
            excepteur et. Ex irure occaecat veniam excepteur duis ea qui quis
            tempor. Duis esse nostrud ea ullamco ullamco elit magna nulla. Ad
            amet duis eu voluptate eu aliquip cillum deserunt. Cupidatat irure
            adipisicing sint fugiat excepteur eu dolor amet. Occaecat quis
            veniam voluptate esse ad culpa voluptate eu est veniam consequat
            eiusmod consectetur.
          </Typography>
        </FaqCard>
      </Grid>
    </Fragment>
  )
}
