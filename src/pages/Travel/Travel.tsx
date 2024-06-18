import { Button, Grid, Typography, styled, useTheme } from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import { Section } from "../../components/Section";
import StarIcon from '@mui/icons-material/Star';

const StyledGrid = styled(Grid)(() => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: "16px",
  }
}) 

const HOTELS = [
  {
    name: "hotel1",
    address: "219 Tiano St",
    distance: "99 miles",
    href: "https://www.google.com"
  },
  {
    name: "hotel2",
    address: "464 Somethin or other",
    distance: "54 miles",
    href: "https://www.google.com"
  },
  {
    name: "mark stinks",
    address: "219 Tiano St",
    distance: "99 miles",
    href: "https://www.google.com"
  },
  {
    name: "hotel2",
    address: "464 Somethin or other",
    distance: "54 kilos",
    href: "https://www.google.com"
  },
  {
    name: "ligma nuts",
    address: "219 Tiano St",
    distance: "99 miles",
    href: "https://www.google.com"
  },
  {
    name: "hotel2",
    address: "464 Somethin or other",
    distance: "54 miles",
    href: "https://www.google.com"
  },
]

const CAMPGROUNDS = [
  {
    name: "cg1",
    address: "219 Tiano St",
    distance: "99 mi",
    href: "https://www.google.com"
  },
  {
    name: "cg2",
    address: "464 Somethin or other",
    distance: "54 mi",
    href: "https://www.google.com"
  },
]

const AIRPORTS = [
  { distance: 9, icao: "mgw", name: "Morgantown Municipal Airport",
  },
  { distance: 36, icao: "ckb", name: "Clarksburg International Airport",
  },
  { distance: 77, icao: "pit", name: "Pittsburgh International Airport", emph: true,
  },
  { distance: 204, icao: "cmh", name: "Columbus International Airport", emph: true,
  },
  { distance: 206, icao: "cle", name: "Cleveland International Airport", emph: true,
  },
  { distance: 158, icao: "crw", name: "West Virginia International Airport",
  },
  { distance: 211, icao: "iad", name: "Dulles International Airport", emph: true,
  },
  { distance: 222, icao: "dca", name: "Washington National Airport",
  },
  { distance: 223, icao: "bwi", name: "Baltimore International Airport",
  },
  { distance: 193, icao: "cak", name: "Akron-Canton Airport",
  },
  { distance: 383, icao: "clt", name: "Charlotte International Airport",
  },
  { distance: 320, icao: "cvg", name: "Cincinatti International Airport",
  },
  { distance: 233, icao: "mdt", name: "Harrisburg International Airport",
  },
  { distance: 273, icao: "day", name: "Dayton International Airport",
  },
  { distance: 339, icao: "lex", name: "Lexington Airport",
  }
]

const RENTAL_CARS = [
  {name: "Enterprise", link: "enterprise.com",
  },
  {name: "Avis", link: "avis.com",
  },
  {name: "Hertz", link: "hertz.com",
  },
  {name: "Budget", link: "budget.com",
  },
  {name: "Alamo", link: "alamo.com",
  },
  {name: "Dollar", link: "dollar.com",
  },
  {name: "National", link: "nationalcar.com",
  },
  {name: "Sixt", link: "sixt.com",
  },
];

export function Travel() {
  const { palette } = useTheme();

  return (
    <Fragment>
      <Typography variant="h2" textAlign="center" marginTop="2rem">TRAVEL & LODGING</Typography>
      <Section>
        <Grid container justifyContent="center" alignItems="center">
          <StyledGrid item xs={6}>
            <img src="/placeholder.png" width="80%" />
          </StyledGrid>
          <StyledGrid item xs={6} sx={{ flexDirection: "column", gap: "1rem" }}>
            <Typography>
              {"Welcome to Wild and Wonderful, West Virginia. Come for the day, or make a week out of it; there are endless adventures when caching in West Virginia. "}<em>{"(Travel time is greatly dependent on how many caches you stop for.)"}</em>
            </Typography>
            <Typography>
              {"For those flying, the closest airport is located about an hour north in Pittsburgh. Following I-79, you’ll have the opportunity to explore the home of Mr. Roger’s in Pittsburgh or enjoy the hundreds of caches in the most haunted county in America, Greene County. Looking East, flights into Dulles International Airport will have you driving through the heart of WVTim territory in the Eastern Panhandle. If you enjoy gadget caches, this is a must-do during your visit to West Virginia. Ohio airports such as Cleveland or Columbus are also great options for those looking to explore the Buckeye State. Lastly, for those looking to add another National Park to their map, flying into Charlotte will give you the unique opportunity to check out what wild and wonderful is all about as you travel through Fayetteville."}
            </Typography>
            <Typography>
              {"Check out our list of host hotels with discounts and rates exclusive to those joining us for GeoWoodstock weekend. We recommend traveling to Morgantown on Wednesday (5/21) and staying until Monday (5/26) to soak up all the caching fun planned. We promise, one weekend won’t be long enough! With side events showcasing the best that north central West Virginia has to offer, you can’t go wrong with staying in Morgantown or Fairmont. We can't wait to see you!"}
            </Typography>
          </StyledGrid>
        </Grid>
      </Section>

      <Section sx={{ backgroundColor: palette.grey[200] }}>
        <Grid container justifyContent="center" alignItems="flex-start">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" color="secondary" textAlign="center">AIRPORTS</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" color="secondary" textAlign="center">RENTAL CARS</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            {AIRPORTS
              .sort((a, b) => {
                if (a.distance < b.distance) {
                  return -1;
                }
                if (b.distance > a.distance) {
                  return 1;
                }
                return 0;
              })
              .map((airport) => {
                return (
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "0 24%"}}>
                    <Typography style={{ fontWeight: "bold", color: airport.emph ? palette.warning.main : undefined }}>
                      {airport.emph && <StarIcon style={{ width: "1rem", height: "1rem", color: palette.warning.main }} />}
                      {airport.name} <em>({airport.icao.toUpperCase()})</em>
                    </Typography>
                    <Typography style={{ fontWeight: airport.emph ? "bold" : "normal", color: airport.emph ? palette.warning.main : undefined}}>
                      {airport.distance} miles
                    </Typography>
                  </div>
                )
              })}
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography padding="0 24%" textAlign="center" lineHeight="1rem" paddingBottom="8px">The following companies are available at most major airports local to the area:</Typography>
            {RENTAL_CARS.map((cars) => {
              return (
                <div style={{ display: "flex", justifyContent: "space-between", padding: "0 24%" }}>
                  <Typography>{cars.name}</Typography>
                  <Typography><a target="_blank" href={`https://www.${cars.link}`}>{cars.link}</a></Typography>
                </div>
              )
            })}
          </Grid>
          <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center" paddingTop="8px">
            <Typography style={{ color: palette.warning.main, fontWeight: "bold" }}>
              <StarIcon style={{ width: "1rem", height: "1rem", color: palette.warning.main }} /> <em>Starred airports are recommended</em>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </Section>

      <Section sx={{ flexDirection: "column", textAlign: "center", alignItems: "center" }}>
        <Typography variant="h2">HOTELS</Typography>
        <Typography>Enjoy your stay at one of our host hotels. Check back for additional offerings.</Typography>
        <Grid container>
          {HOTELS.map((item) => {
            return (
              <Grid item xs={12} md={6}>
                <Grid container>
                  <StyledGrid item xs={6}>
                    <img src="/placeholder.png" width="80%" style={{ aspectRatio: 1 }} />
                  </StyledGrid>
                  <StyledGrid item xs={6} sx={{ flexDirection: "column", alignItems: "flex-start" }}>
                    <Typography fontSize="2rem" fontWeight="bold">{item.name}</Typography>
                    <Typography fontSize="1.2rem">{item.address} | <em>{item.distance}</em></Typography>
                    <Typography fontSize="1.2rem">{item.href}</Typography>
                  </StyledGrid>
                </Grid>
              </Grid>
            )
          })}
        </Grid>
        <Button variant="contained" color="warning" sx={{ borderRadius: '64px', fontWeight: "bold", fontSize: "1.4rem", width: "fit-content", marginTop: "24px" }}>
          CLICK HERE FOR THE FULL LIST OF HOTELS
        </Button>
      </Section>



      <Section sx={{ flexDirection: "column", textAlign: "center", alignItems: "center" }}>
        <Typography variant="h2">CAMPGROUNDS</Typography>
        <Typography>Enjoy the rustic atmosphere of wild and wonderful at one of our campgrounds. Check back for additional offerings.</Typography>
        <Grid container>
          {CAMPGROUNDS.map((item) => {
            return (
              <Grid item xs={12} md={6}>
                <Grid container>
                  <StyledGrid item xs={6}>
                    <img src="/placeholder.png" width="80%" style={{ aspectRatio: 1 }} />
                  </StyledGrid>
                  <StyledGrid item xs={6} sx={{ flexDirection: "column", alignItems: "flex-start" }}>
                    <Typography fontSize="2rem" fontWeight="bold">{item.name}</Typography>
                    <Typography fontSize="1.2rem">{item.address} | <em>{item.distance}</em></Typography>
                    <Typography fontSize="1.2rem">{item.href}</Typography>
                  </StyledGrid>
                </Grid>
              </Grid>
            )
          })}
        </Grid>
        <Button variant="contained" color="warning" sx={{ borderRadius: '64px', fontWeight: "bold", fontSize: "1.4rem", width: "fit-content", marginTop: "24px" }}>
          CLICK HERE FOR THE FULL LIST OF CAMPGROUNDS
        </Button>
      </Section>
    </Fragment>
  );
}