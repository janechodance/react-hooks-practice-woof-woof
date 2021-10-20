import React, {useState, useEffect} from "react";
import Dogbar from "./Dogbar";
import Dogdetails from "./Dogdetails";



function App() {
  const [dogs , setDogs]= useState([])
  const [showDetails, setShowDetails] = useState(false)
  const [dogDetails, setDogdetails]= useState([])
  const [filterOn, setFilterOn] = useState(false)
  
  
  const eachdog=dogs.map((dog)=>{ return (
        <Dogbar
         handleDetails={handleDetails}
         key={dog.id} 
         img={dog.image}
         name={dog.name}
         isGoodDog={dog.isGoodDog}
         id={dog.id}
         />
    )})
    function handleDetails(dog){
      setDogdetails(dog)
      setShowDetails(true)
    }
    function handleFilter(){
      setFilterOn(!filterOn)
      if (!filterOn){
      setDogs(dogs.filter((dog)=> dog.isGoodDog))}
      else { 
        fetch("http://localhost:3001/pups")
        .then((r)=>r.json())
        .then((data)=>setDogs(data))
      }
      
    }
  useEffect(()=>{
    fetch("http://localhost:3001/pups")
    .then((r)=>r.json())
    .then((data)=>setDogs(data))
  },[])
  return (
    <div className="App">
      <div id="filter-div">
        <button onClick={handleFilter} id="good-dog-filter">{filterOn? "Filter good dogs: OFF" :"Filter good dogs: ON"  }</button>
      </div>
      <div id="dog-bar">
        {eachdog}
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
            {showDetails? <Dogdetails dogDetails={dogDetails}/> : null}
        </div>
      </div>
    </div>
  );
}

export default App;
