import { SwipeableDrawer } from '@mui/material';
import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card';
import '../sass/tindercard.scss';

import axios from '../resources/axios';

export default function TinderCardContainer() {

    const [people,setPeople]=useState([])


useEffect(()=> {
async function fetchData() {
  const req=await axios.get('/tinder/cards');
  setPeople(req.data);
}
fetchData();
},[])




const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
  }
  
  const onCardLeftScreen = (person) => {
    console.log(person.name, ' left the screen')
  }



  return (

    <div>
        <div className="tindercard">
<div className="tindercard-container">
{people.map((person)=> (
   <TinderCard 
   className='swipe'
   onSwipe={onSwipe} 
   onCardLeftScreen={(person) => onCardLeftScreen} 
   preventSwipe={['up', 'down']}
   >


<div style={{backgroundImage:`url(${person.imgUrl})`}}
className='tindercard'
>
<h3>{person.name}</h3>
</div>


   </TinderCard>
))}
</div>


        </div>
    </div>
  )
}
