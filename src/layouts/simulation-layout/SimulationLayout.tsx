import classes from './SimulationLayout.module.css'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../../components/UI/navbar/Navbar'

export function SimulationLayout() {
  const pages = [
    {
      to: 'mps7',
      page: 'mps7',
    },
    {
      to: 'asc12corrosion',
      page: 'ACS12 - CORROSION',
    },
    {
      to: 'mps7outerspace',
      page: 'MPS7 - OUTER SPACE',
    },
    {
      to: 'socroutsider',
      page: 'SOCR - OUTSIDER',
    },
  ]

  return (
    <div className={classes.simulation}>
      <div className={classes.simulation__header}>

        <Navbar pages={pages} />
      </div>

      <div className="container">

        <Outlet />
      </div>
    </div>
  )
}
