import{useState} from 'react';
function Dogdetails({dogDetails}){
    const [goodDog,setGoodDog]= useState(dogDetails[2])
    function handlePatch(){
        fetch(`http://localhost:3001/pups/${dogDetails[3]}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              isGoodDog: !goodDog
            }),
          })
    }
    function handleGoodDog(){
        setGoodDog(!goodDog)
        handlePatch()
    }
    
    return(
        <div>
            <img src={dogDetails[1]} alt={dogDetails[0]} />
            <h2>{dogDetails[0]}</h2>
            <button onClick={handleGoodDog}>{goodDog? "Good dog!" : "Bad dog!"}</button>
        </div>
    )
}
export default Dogdetails;