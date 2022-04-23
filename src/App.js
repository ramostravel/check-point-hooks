import './App.css';
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListMovie from './components/ListMovie';
import Filter from './components/Filter';
import themask from './components/themask.jpg'
import mard from './components/mard.jpg'
import AddMovie from './components/AddMovie';
import { Rating } from 'react-simple-star-rating'

function App() {
  
  const [rating, setRating] = useState(0) 
  const[filter,setFilter]=useState("")
  const[movieList,setMovieList]=useState([
  {
  Title:"The Mask",
  Poster:themask,
  Description:"Stanley Ipkiss, a hapless, everyday bank clerk who finds a magical wooden green mask that transforms him into The Mask,"
  ,rate:3
},
  {
    Title:"Mard",
    Poster : mard,
    Description:"The film opens in India. It is the early 20th century when India remains part of the British empire. The opening sequence shows a group of British soldiers plundering an Indian fort and taking its riches by air England"
    ,rate:4
  },
  {
    Title:"The Mask",
    Poster:"",
    Description:"1998"
    ,rate:5
  }

])
const handleFilter=(val)=>{
  setFilter(val)
}
const handleAddMovie=(val)=>{
       setMovieList([...movieList, val])
}
const handleRating = (rate) => {
  setRating(rate)
}

  return (
    <div className="App">
      <Rating onClick={handleRating} ratingValue={rating}  />
      <header className="App-header">
     
      <Filter handleFilter={handleFilter}/> 
      <ListMovie list={movieList.filter(elm=>elm.Title.toUpperCase().includes(filter.toUpperCase()))}></ListMovie>
      <AddMovie handleAddMovie={handleAddMovie}/>
      <Rating onClick={handleRating} ratingValue={rating} />
      </header>
    </div>
  );
}
export default App;
