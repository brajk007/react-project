import axios from 'axios'
import React, { useEffect, useState } from 'react';
import './Home.css'

const Home = ({favItem}) => {
  const [list,setList] = useState([])
  // const [item,setItem] = useState([])
  const getApi =()=>{
     axios.get('https://rickandmortyapi.com/api/character')
     .then((res)=>setList(res.data.results))
     .catch((err)=>console.log(err))
  }
  console.log(list);
  
  useEffect(()=>{
      getApi()
  },[])

  

  return (
    <>
     <div className='row'>
       {
         list.map((ele)=>{
           return (
             <>
          {/* <div className='col-md-4 g-3' key={ele.id}>
            <div className="card " style={{width: '18 rem'}}>
            <img src={ele.image} className="card-img-top img-fluid" alt={ele.name} />
            <div className="card-body">
            <h5 className="card-title">{ele.name}</h5>
            <p className="card-text">{ele.url}</p>
            <a href="#" className="btn btn-primary" onClick={()=>favItem(ele)}>Add to favourite</a>
          </div>
         </div>
         </div> */}
              <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={ele.image} alt="Avatar" style={{width:'300px;height:300px'}}/>
                  <h3> {ele.name} </h3>
                </div>
                <div className="flip-card-back">
                  <h2 style={{marginTop:'20px'}}>{ele.name}</h2> 
                  <p> {ele.status} </p> 
                  <p> {ele.gender} </p>
                  <p> {ele.species} </p>
                
                </div>
              </div>
              <span> <button className='bg-dark btn btn-dark' onClick={()=>favItem(ele)} style={{marginLeft:"10rem",}} >Like</button> </span>
            </div>
             </>
           )
         })
       }
     </div>
    </>
  )
}

export default Home;
