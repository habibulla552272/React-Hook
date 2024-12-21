import React from 'react'

const Input = ({type,placeholder},ref) => {
  return (
    <div>
        <input className='px-4 py-3 bg-green-300' ref={ref} type={type}  placeholder={placeholder}/>
      
    </div>
  )
}
const  forwardedInpur=React.forwardRef(Input)
export default forwardedInpur
