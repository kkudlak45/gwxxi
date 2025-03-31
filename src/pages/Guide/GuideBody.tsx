type GuideBodyProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  children: React.ReactNode
}

export function GuideBody({ children, ...props }: GuideBodyProps) {
  return (
    <div
      {...props}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 16px',
        ...props.style,
      }}
    >
      {children}
    </div>
  )
}
