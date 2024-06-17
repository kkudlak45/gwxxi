import { Grid, Typography } from "@mui/material";

export type InfoBlockProps = {
  title: string;
  imgSrc: string;
  text: string;
}

export function InfoBlock({ title, imgSrc, text }: InfoBlockProps) {
  return (
    <Grid item xs={12} md={6} lg={3} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", textAlign: "center", height: '100%' }}>
      <Typography variant="h3">{title}</Typography>
      <div>
        <img src={imgSrc} style={{ maxWidth: '100%', maxHeight: '100%', width: "auto", height: "auto" }} />
        <Typography sx={{ padding: "16px" }}>{text}</Typography>
      </div>
    </Grid>
  )
}