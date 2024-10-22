import classes from './PrimaryButton.module.css'

interface PrimaryButtonProps extends React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  children: React.ReactNode
}

export function PrimaryButton({ children, ...props }: PrimaryButtonProps) {
  return (
    <button className={classes.primaryButton} {...props} >
      {children}
    </button>
  )
}
