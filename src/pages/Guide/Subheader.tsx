import { Typography, TypographyOwnProps } from '@mui/material'

export function Subheader(props: TypographyOwnProps) {
  return (
    <Typography variant="h3" fontSize="1.3rem" marginBottom="1rem" {...props}>
      {props.children}
    </Typography>
  )
}
