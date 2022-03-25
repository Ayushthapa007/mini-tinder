import React from 'react'

import '../sass/swipebuttons.scss';


import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';

import { IconButton } from '@mui/material';

export default function Swipebuttons() {
  return (
    <div>
        <div className="swipebuttons">
<IconButton>
    <ReplayIcon fontSize='large' className='icons'/>
</IconButton>
<IconButton>
    <CloseIcon fontSize='large' className='icons'/>
</IconButton>
<IconButton>
    <StarRateIcon fontSize='large'className='icons'/>
</IconButton>
<IconButton>
    <FavoriteIcon fontSize='large'className='icons'/>
</IconButton>
<IconButton>
    <FlashOnIcon fontSize='large'className='icons'/>
</IconButton>
        </div>
    </div>
  )
}
