import React from 'react'
import classes from './Navbar.module.css'
import { NavLink, NavLinkRenderProps } from 'react-router-dom'

export function Navbar() {

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

  const setAcive = ({ isActive }: NavLinkRenderProps): string => {
    return isActive ?
      `${classes.menu__link} ${classes.menu__link_active}`
      :
      classes.menu__link
  }

  return (
    <nav>
      <ul className={classes.menu__list}>
        {pages.map((page) => (
          <li key={page.page} className={classes.menu__item}>
            <NavLink to={page.to} className={setAcive}>{page.page}</NavLink>
          </li>


        ))}
      </ul>
    </nav>
  )
}
