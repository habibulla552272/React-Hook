import  { useEffect,useRef } from 'react'
import Input from '../Commponent/Input'
const UseRef = () => {
    const inpurRef = useRef(null)

    useEffect(()=>{

        inpurRef.current.focus();
        
    },[])
  return (
    <section>

        <div><Input className='border-2 px-2 py-3 bg-green-400 outline-none' ref={inpurRef}  type="text" placeholder='enter some thing'/></div>
    </section>
  )
}

export default UseRef
