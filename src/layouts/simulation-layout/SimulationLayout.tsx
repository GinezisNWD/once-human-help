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
      page: 'acs12-corrosion',
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
