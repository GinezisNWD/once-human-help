import React from 'react'
import classes from './RootLayout.module.css'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export function RootLayout() {
  return (
    <div className={classes.wrapper}>
      <header className={classes.header}>
        <nav>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className={classes.main}>
        <Outlet />
      </main>
      <footer className={classes.footer}>2024</footer>
    </div>
  )
}
