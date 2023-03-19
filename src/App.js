import React, {useState} from "react";
import Star from "./components/Star.jsx";

const App = () => {
   const [activeStar,setActiveStar]= useState();

  return(
    <div style={{ display:"flex",justifyContent:"center",marginTop:"15rem"}} >

    {[1,2,3,4,5].map((item,index)=>{
      return (
              <Star 
              starNo={index}
              activeStar={activeStar}
              setActiveStar={setActiveStar} />
             );
       })}
    </div>
  )}
 export default App;
