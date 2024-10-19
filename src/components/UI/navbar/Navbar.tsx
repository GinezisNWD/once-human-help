import React from 'react'
import classes from './Navbar.module.css'
import { NavLink, NavLinkRenderProps } from 'react-router-dom'

interface IPage {
  to: string;
  page: string;
}

interface NavbarProps {
  pages: IPage[]
}

export function Navbar({ pages }: NavbarProps) {

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
