
import React, { useState,useEffect } from 'react'

const Liked = () => {
 const [data,setData]= useState([])
 
  useEffect(()=>{
    getData()
  },[])

 const getData=()=>{
     const item = localStorage.getItem('liked')
     if (item){
      setData(JSON.parse(item))
     }
 }

 const removeFavourite=(i)=>{
   console.log(i);
  const item = localStorage.getItem('liked');
  if(item){
    const items = JSON.parse(item)
    const newList =items.splice(i,1);
    console.log(newList);
    localStorage.setItem('liked',JSON.stringify(items))
    getData()
    return;
  }
}




  return (
    <div className='row'>
       {
         data.map((data,i)=>{
           return (
             <>
          <div className='col-md-4 g-3' key={data.id}>
            <div className="card" style={{width: '18 rem'}}>
            <img src={data.image} className="card-img-top img-fluid" alt={data.name} />
            <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text">{data.url}</p>
            <a href="#" className="btn btn-primary" onClick={()=>removeFavourite(i)}>Unlike</a>
          </div>
         </div>
         </div>
             </>
           )
         })
       }
     </div>
  )
}

export default Liked;
