import classes from './RootLayout.module.css'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../../components/UI/navbar/Navbar'

export function RootLayout() {
  const pages = [
    {
      to: '/',
      page: 'Home',
    },
    {
      to: 'simulation',
      page: 'Simulation',
    },
    {
      to: '/about',
      page: 'About',
    }]

  return (
    <div className={classes.wrapper}>
      <header className={classes.header}>
        <div className="container">
          <div className={classes.header__wrapper}>
            <Navbar pages={pages} />
          </div>
        </div>
      </header>
      <main className={classes.main}>
        <Outlet />
      </main>
      <footer className={classes.footer}>
        <div className="container">
          <div className={classes.footer__wrapper}>

            2024
          </div>
        </div>
      </footer>
    </div>
  )
}
