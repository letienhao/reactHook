import {useEffect, useState}  from 'react'
import './App.css'

  const HandlechangTime = (date)=>{
     const h = date.getHours();
     const m = date.getMinutes();
     const s = date.getSeconds()
     return `${h}: ${m} :${s} `;
  }
function App() {
    const [time,setTime] = useState('');
    useEffect(()=>{
       setInterval(()=>{
          const now = new Date();
          const time = HandlechangTime(now)
          setTime(time)
       },1000)
    })
   // const handleChangButton = ()=>{
  //   const newcount = setCount(count+1)
  // }
  return (
    <> 
      <div style={{fontSize:'100px',textAlign:'center'}}>
      <div className='box' >{time} </div>
      
      
      {/* <button style={{maxWidth:'300px'}} onClick={handleChangButton}>+ add</button> */}
   
      </div>
      </>
  );
}

export default App;
