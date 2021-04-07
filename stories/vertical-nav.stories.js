
import React from 'react'
import { VerticalNavbar } from '../src/index'
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded'
import WidgetsRoundedIcon from '@material-ui/icons/WidgetsRounded'
import StorageRoundedIcon from '@material-ui/icons/StorageRounded'

export default {
  title: 'Navigation/Vertical Navbar',
  component: VerticalNavbar,
}

const navItem = [
  {
    name: 'Dashboards',
    icon: <DashboardRoundedIcon />,
    link: '/dashboards',
  },
  {
    name: 'Widgets',
    icon: <WidgetsRoundedIcon />,
    link: '/widgets',
  },
  {
    name: 'Storage',
    icon: <StorageRoundedIcon />,
    link: '/storage',
  },
]

const Template = () => {

  return <VerticalNavbar pathname={'/dashboards'} navItems={navItem} />
}

export const Default = Template.bind({})
