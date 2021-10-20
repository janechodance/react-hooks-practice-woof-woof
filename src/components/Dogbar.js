import Dogdetails from "./Dogdetails";

function Dogbar({name,handleDetails,img,isGoodDog,id}){
    
    return(
        <div>
        <span onClick={()=>handleDetails([name,img,isGoodDog,id])}>
            {name}
            
        </span>
        <div id="dog-info">
           
        </div>
        </div>
    )
}
export default Dogbar;