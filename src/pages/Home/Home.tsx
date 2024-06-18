import { Button, Grid, Typography, useTheme } from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Section } from "../../components/Section";

const InfoBlockStuff = [
  {
    title: "Schedule",
    imgSrc: "/placeholder.png",
    text: "With 8 events spanning from Thursday (5/22) to Sunday (5/25), there's never a dull moment when caching in West Virginia. Explore an 18th-century reconstructed fort, listen to some authentic mountain music, or enjoy a craft brew with your caching buddies - the possibilities are endless!",
  },
  {
    title: "Travel",
    imgSrc: "/placeholder.png",
    text: "Whether you’re coming from across the country, or just down the road, let us show you what Appalachian hospitality is all about. Check out a full list of our hotel partners as well as helpful travel information for you to plan your trip to West Virginia!"
  },
  {
    title: "Shop",
    imgSrc: "/placeholder.png",
    text: "Want to help support the event and showcase your love for GeoWoodstock? Our store currently has a pre-event fundraiser opportunity as well as the Friends of GeoWoodstock program. The full store to register and purchase SWAG will be available this fall."
  },
  {
    title: "More Info",
    imgSrc: "/placeholder.png",
    text: "Can’t find what you’re looking for? More info will be updated regularly as the event approaches, so check back for sponsorship information, frequently asked questions, and more!"
  },
]

export function Home() {
  const { palette } = useTheme();

  return (
    <Fragment>
      <Section sx={{ flexDirection: "column", alignItems: "center" }}>
        <img src="/gwxxi.jpg" style={{ maxWidth: '100%', maxHeight: '50vh', width: 'auto', height: 'auto', marginBottom: "24px" }} />
        <Typography variant="h3" marginBottom="24px" textAlign="center">{"JOIN US FOR THE MEGA IN THE MOUNTAINS!"}</Typography>
        <Typography textAlign="center" fontWeight="bold" fontSize="2rem" lineHeight="2.2rem">{"GeoWoodstock XXI (GCANXX1)"}</Typography>
        <Typography textAlign="center" fontSize="2.4rem" lineHeight="2.2rem" display="flex" gap="4px" fontFamily="TTNorms-Light">
          {<PlaceIcon color="error" sx={{ height: "2.4rem", width: "2.4rem" }} />}
          {"Morgantown, WV"}
        </Typography>
        <Typography textAlign="center" fontSize="2.4rem" lineHeight="2.4rem" display="flex" gap="4px" fontFamily="TTNorms-Light">
          {<CalendarMonthIcon color="error" sx={{ height: "2.4rem", width: "2.4rem" }} />}
          {"May 22 - 25, 2025"}
        </Typography>
      </Section>

      <Section sx={{ backgroundColor: palette.grey[200] }}>
        <Grid container justifyContent="center" alignItems="center" sx={{ width: "100%" }}>
          <Grid item xs={12} md={6} width="100%" textAlign="center">
            <video autoPlay muted controls style={{ padding: "0px 8px 0px 16px", width: "calc(100% - 24px)" }}>
              <source src="gwvideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Grid>
          <Grid item xs={12} md={6} width="100%" display="flex" flexDirection="column" alignItems="center" gap="16px">
            <Typography fontSize="1.4rem" padding="0px 16px 0px 8px">
              {"Nestled in the heart of Appalachia, West Virginia is any geocacher’s gateway to the great outdoors. There is a reason the Mountain State is known as Almost Heaven, and we can’t wait to showcase the world-class adventures, friendly culture, and unique experiences West Virginia has to offer. Join us for a weekend of Geocaching greatness, as we celebrate the 25th anniversary of the hobby with the world’s original Mega event: "}
              <em style={{ fontWeight: "bold" }}>Wild and Wonderful GeoWoodstock XXI.</em>
            </Typography>
            <Button variant="contained" color="warning" sx={{ borderRadius: '64px', fontWeight: "bold", fontSize: "1.4rem"}}>
              Check out the event page
            </Button>
          </Grid>
        </Grid>
      </Section>

      <Section>
        <Grid container sx={{ width: "100%" }}>
            {InfoBlockStuff.map((info) => {
              return (
                <Grid
                  key={info.title}
                  item xs={12} md={6} lg={3}
                  sx={{ textAlign: "center", alignItems: "center", justifyContent: "center", display: "flex" }}
                >
                  <Typography variant="h3">{info.title}</Typography>
                </Grid>
              )
            })}
            {InfoBlockStuff.map((info) => {
              return (
                <Grid
                  key={info.title}
                  item xs={12} md={6} lg={3}
                  sx={{ display: "flex", flexDirection: "column", textAlign: "flex-start", alignItems: "center" }}
                >
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <img src={info.imgSrc} style={{ maxWidth: '80%', maxHeight: '100%', width: "auto", height: "auto", aspectRatio: 4/3, paddingTop: "16px" }} />
                    <Typography sx={{ padding: "16px 16px 0px 16px" }}>{info.text}</Typography>
                  </div>
                </Grid>
              )
            })}
        </Grid>
      </Section>

      <Section sx={{ flexDirection: "column", alignItems: "center", backgroundColor: palette.grey[200], gap: "16px" }}>
        <Grid container alignItems="center" justifyContent="cemter">
          <Grid item xs={12} md={4}>
            <img src={`${import.meta.env.BASE_URL}placeholder.png`} style={{ width: "100%", padding: "0rem 1rem" }} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography padding="0 1rem 0 2rem" textAlign="start">
              Want to help support the event and showcase your love for GeoWoodstock? Our store currently has a pre-event fundraiser opportunity as well as the Friends of GeoWoodstock program. The full store to register and purchase SWAG will be available this fall.
            </Typography>
          </Grid>
        </Grid>
      </Section>

      <Section sx={{ flexDirection: "column", alignItems: "center", gap: "16px" }}>
        <Typography variant="h2">PLATINUM SPONSORS</Typography>
        <div style={{ justifyContent: "flex-start", display: "flex", flexDirection: "column" }}>
          <Typography fontFamily="TTNorms-light" textAlign="center">{"Thank you to our incredible sponsors for helping make GeoWoodstock XXI a reality! Want to help support the largest gathering of geocachers in North America?"}<br />{"Check out our ‘More Info’ page for sponsorship information."}</Typography>
          <Grid container marginTop="16px">
            <Grid item xs={1} md={4}>
              <a href="https://www.geocaching.com" target="_blank" style={{ width: "100%" }}>
                <img src="/geocachinglogo.png" style={{ width: "100%" }} />
              </a>
            </Grid>
          </Grid>
        </div>
      </Section>
    </Fragment>
  )
}