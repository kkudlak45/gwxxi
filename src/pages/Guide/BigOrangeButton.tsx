import { Button, ButtonOwnProps } from '@mui/material'

export function BigOrangeButton(props: ButtonOwnProps) {
  return (
    <Button
      variant="contained"
      color="warning"
      sx={{
        borderRadius: '64px',
        fontWeight: 'bold',
        fontSize: '1.4rem',
        width: 'fit-content',
        textAlign: 'center',
      }}
      target="_blank"
      href="example.com"
      {...props}
    >
      {props.children}
    </Button>
  )
}
