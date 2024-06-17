import { Container, styled } from "@mui/material";

const FooterDiv = styled("div")(({ theme }) => {
  console.log(theme)
  return {
    width: '100%',
    padding: '16px 0px',
    borderTop: `1px solid ${theme.palette.primary.main}`,
  }
})

export default function Footer() {
  return (
    <FooterDiv>
      <Container maxWidth="xl">
        <p>hello world</p>
      </Container>
    </FooterDiv>
  )
}