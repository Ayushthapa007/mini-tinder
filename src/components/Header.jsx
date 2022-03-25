import React from 'react'

import '../sass/header.scss'

import { IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import MessageIcon from '@mui/icons-material/Message';

export default function Header() {
  return (
    <div className='nav-header'>
        <div><IconButton><PersonIcon/></IconButton></div>
        <div><IconButton><LocalFireDepartmentIcon/></IconButton></div>
        <div><IconButton><MessageIcon/></IconButton></div>
    </div>
  )
}
