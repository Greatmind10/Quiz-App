import "./AnswerTimer.scss" 
import { useEffect, useState, useRef} from "react"
//useEffect takes two arguements
//1- the function to be executed, 2-dependency array [] 
const AnswerTimer = ({duration, onTimeUp}) => {
    const[counter, setCounter]= useState(0);
    const[progressLoad, setProgressLoad]= useState(0); 
const intervalRef= useRef();
useEffect(()=>{
intervalRef.current=setInterval(()=>{
 setCounter((cur)=>cur + 1)
     
},1000)
return ()=>clearInterval(intervalRef.current)
},[]);
    
useEffect(()=> {

    setProgressLoad(100 *(counter / duration))
if(counter === duration){

    clearInterval(intervalRef.current)
    setTimeout (() => {
onTimeUp();

    },1000)
}

}, [counter]) 



  return (
    <div className="answer-loaderContainer">
    
        
    
    <div 
    style={{
        width:`${progressLoad}%`
    }} 
    
    className="progress"></div>
    
    
    </div>
  

)
}

export default AnswerTimer