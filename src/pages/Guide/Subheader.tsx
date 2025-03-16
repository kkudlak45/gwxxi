import { Typography, TypographyOwnProps } from '@mui/material'

export function Subheader(props: TypographyOwnProps) {
  return (
    <Typography variant="h3" fontSize="1.4rem" {...props}>
      {props.children}
    </Typography>
  )
}
