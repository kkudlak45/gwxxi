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
      <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <div>1</div>
        <div>
          <img src="/mylan.png" style={{ maxWidth: '240px', maxHeight: '240px', width: 'auto', height: 'auto', }} />
        </div>
      </Container>
    </FooterDiv>
  )
}