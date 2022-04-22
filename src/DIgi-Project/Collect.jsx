import React, { useEffect, useState } from 'react'
import Liked from './Liked';
import Home from './Home';
import {Routes,Route} from 'react-router-dom'
import Head from './Head'

const Collect = () => {
  const favItem=(ele)=>{
   const characters = localStorage.getItem('liked');
    if (characters) {
      const likedArray = JSON.parse(characters);
      likedArray.push(ele);
      localStorage.setItem('liked', JSON.stringify(likedArray));
      alert('Data Added');
      return;
    }
    localStorage.setItem('liked', JSON.stringify([ele]));
    alert('Data Added'); 
  }


  return (
    <>
   <Head/>
   <Routes>
     <Route  path='/' element={<Home favItem={favItem} />} />
     <Route  path='/likes' element={ <Liked/>} />
   </Routes>
    </>

  )
}

export default Collect;
