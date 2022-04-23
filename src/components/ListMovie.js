import React from 'react'

function ListMovie({list}) {
  return (
    <div>
       {list.length?list.map(el =>        
       <div class="card" style={{width:"18rem"}}>
       <img className="card-img-top" src={el.Poster} alt="Card image cap"/>
       <div  className="card-body">
        <h5  className="card-title">{el.Title}</h5>
        <p  className="card-text">{el.Description} </p>
        <p  className="card-text">{el.rate} </p>
        
       </div>
       </div>
        ):<p>Not found</p>}
      
  </div> 
  )
}

export default ListMovie