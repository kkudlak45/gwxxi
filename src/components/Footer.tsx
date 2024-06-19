import { Container, IconButton, Typography, styled } from "@mui/material";
import { BLUE } from "../constants/theme";
import { infoPages, pages } from "./Header";
import { Event, Facebook, Mail, People } from "@mui/icons-material";

const socials = [
  {
    alt: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61558526174705",
    component: <Facebook />,
  },
  {
    alt: "Mailing List",
    href: "https://geowoodstockxxi.us17.list-manage.com/subscribe?u=8fcc636b5362e252a516c4a10&id=68d2e501c0",
    component: <Mail />,
  },
  {
    alt: "Community Group",
    href: "https://www.facebook.com/groups/2150783441954120",
    component: <People />,
  },
  {
    alt: "Event Page",
    href: "https://coord.info/gcanxx1",
    component: <Event />,
  },
]

const FooterDiv = styled("div")(({ theme }) => {
  console.log(theme)
  return {
    backgroundColor: BLUE,
    color: "white",
    width: '100%',
    padding: '16px 0px',
    borderTop: `1px solid ${theme.palette.primary.main}`,
  }
})

export default function Footer() {
  return (
    <FooterDiv>
      <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <div style={{ display: "flex", gap: "12px" }}>
          <img
            src={`${import.meta.env.BASE_URL}footericon.webp`}
            style={{
              borderRadius: "12px",
              maxWidth: '240px',
              maxHeight: '240px',
              width: 'auto',
              height: 'auto',
            }}
          />

          <div style={{ display: "flex", alignItems: "flex-start", flexDirection: "column", padding: "6px 0", gap: "1.4rem" }}>
            <Typography variant="h4" style={{ color: "white", fontFamily: "San Andreas" }} fontSize="1.8rem">
              GEOWOODSTOCK XXI
            </Typography>
            <div>
              <Typography style={{color: "white" }}>Geocaching Mega-Event</Typography>
              <Typography style={{color: "white" }}>Morgantown, West Virginia</Typography>
              <Typography style={{color: "white" }}>May 22 - 25, 2025</Typography>
            </div>
            <div style={{ display: "flex", gap: "4px", marginLeft: "-8px" }}>
              {socials.map((social) =>  {
                return (
                  <IconButton href={social.href} target="_blank" style={{ color: "white" }}>
                    {social.component}
                  </IconButton>
                )
              })}
            </div>
          </div>
        </div>


        <div style={{ display: "flex", gap: "12px" }}>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexDirection: "column", padding: "6px 0 16px 0" }}>
            <Typography variant="h4" style={{ color: "white", fontFamily: "San Andreas" }} fontSize="1.8em">
              QUICK LINKS
            </Typography>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
              {[...pages, ...infoPages].map((page) => {
                return (
                  <a href={page.href} target={page.text === "Shop" ? "_blank" : undefined} style={{ textDecoration: "none" }} >
                    <Typography style={{color: "white" }}>{page.text}</Typography>
                  </a>
                )
              })}
            </div>
          </div>

          <img
            src={`${import.meta.env.BASE_URL}mylan.png`}
            style={{
              borderRadius: "12px",
              maxWidth: '240px',
              maxHeight: '240px',
              width: 'auto',
              height: 'auto',
            }}
          />

        </div>
      </Container>
    </FooterDiv>
  )
}