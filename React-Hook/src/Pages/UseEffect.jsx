import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [date, setDate] = useState(new Date());
  const [count,setCount]=useState(0);
const [show,setShow]=useState(true)
  let tick=()=>{
      


      setDate(new Date())
  }
  const addClick =()=>{

    setCount((prevCount)=> prevCount + 1)
  }

  useEffect(()=>{
    console.log('update document titele');
    document.title = `Click ${count} times`
    
  },[count])
 

  useEffect(() => {
    console.log('Starting timer');
    
    let intervel =setInterval(tick,1000)
    
   return ()=>{
    console.log("Clearinterval work");
    clearInterval(intervel)
   }
   
    
  }, []);

  return (
    <section>
      <div className={`${show ? "hidden" : 'block'}`}>
        <h2>habibulla</h2>

        <div>Time:{date.toLocaleTimeString()}</div>

        <div>
          <button
            className="py-1 my-4 px-5 rounded-lg bg-green-500"
            onClick={addClick}
          >
            Click
          </button>
        </div>
        <div>
          <p>{count}</p>
        </div>
      </div>
      <div>
        <button
          className="py-1 my-4 px-5 rounded-lg bg-green-500"
          onClick={()=> setShow(!show)}
        >
          {show ? "Hide post" : "Show post"}
        </button>
      </div>
    </section>
  );
};

export default UseEffect;
