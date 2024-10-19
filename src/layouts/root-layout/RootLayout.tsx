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
        <Navbar pages={pages} />
      </header>
      <main className={classes.main}>
        <Outlet />
      </main>
      <footer className={classes.footer}>2024</footer>
    </div>
  )
}
