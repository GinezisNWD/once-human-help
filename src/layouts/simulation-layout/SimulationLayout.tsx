import React from 'react'
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
    <div>
      <Navbar pages={pages} />
      <Outlet />
    </div>
  )
}
