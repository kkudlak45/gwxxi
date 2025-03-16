import { Typography } from '@mui/material'

export function GuideHeader({
  title,
  subTitle,
}: {
  title: string
  subTitle?: string
}) {
  return (
    <div style={{ padding: '0 16px' }}>
      <div style={{ height: '2rem' }} />
      <Typography
        variant="h2"
        sx={{ fontSize: { xs: '2.5rem', sm: '3.75rem' } }}
      >
        {title}
      </Typography>

      {subTitle && (
        <Typography
          variant="h3"
          sx={{ fontSize: { xs: '1rem', sm: '1.4rem' } }}
        >
          {subTitle}
        </Typography>
      )}
      <div style={{ height: subTitle ? '2rem' : '1rem' }} />
    </div>
  )
}
