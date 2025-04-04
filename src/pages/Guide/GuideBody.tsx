/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

type GuideBodyProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  children: React.ReactNode
}

const leftJustifyTypography = css`
  .MuiTypography-root {
    width: 100%;
  }
`

export function GuideBody({ children, ...props }: GuideBodyProps) {
  return (
    <div
      {...props}
      css={leftJustifyTypography}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 16px',
        overflow: 'hidden',
        ...props.style,
      }}
    >
      {children}
    </div>
  )
}
