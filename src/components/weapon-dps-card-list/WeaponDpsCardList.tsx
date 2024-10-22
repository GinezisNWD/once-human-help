import classes from './WeaponDpsCardList.module.css'

interface WeaponDpsCardListProps extends React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  children: React.ReactNode
}

export function WeaponDpsCardList({ children }: WeaponDpsCardListProps) {
  return (
    <div className={classes.list}>
      {children}
    </div>
  )
}
