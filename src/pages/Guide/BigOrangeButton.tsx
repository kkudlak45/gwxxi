import { Button, ButtonOwnProps } from '@mui/material'

export function BigOrangeButton(props: ButtonOwnProps) {
  return (
    <Button
      {...props}
      variant="contained"
      color="warning"
      sx={{
        ...props.sx,
        borderRadius: '64px',
        fontWeight: 'bold',
        fontSize: '1.4rem',
        width: 'fit-content',
        textAlign: 'center',
      }}
      target={'_blank'}
      href={props.href || 'example.com'}
    >
      {props.children}
    </Button>
  )
}
