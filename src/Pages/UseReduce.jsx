import { useContext } from 'react';
import  { useReducer } from 'react'
import { contexData } from '../Commponent/UseContex';

// const initialState = {

//     counter: 0,
//     counter2:0,
// };

// const reducer =(state,action)=>{
     
       
       
        
//     switch (action.type) {
//       case "increment":
        
        
//         return {...state, counter: state.counter + action.value };

//       case "dicrement":
//         return {...state, counter: state.counter - action.value };

//       case "increment2":
//         return {...state, counter2: state.counter2 + action.value };

//       case "dicrement2":
//         return {...state, counter2: state.counter2 - action.value };

//       default:
//         return {...state, counter: state.counter };
//     }

// }


const UseReduce = () => {
    // const [count,dispatch] =useReducer(reducer,initialState);
    // const [count2, dispatch2] = useReducer(reducer, initialState);

    
    let contenText= useContext(contexData)
   
   
  return (
    <section>
      <div className="container mx-auto ">
        <div>
          <div>count:{contenText.counter.counter}</div>
          <button
            onClick={() =>
              contenText.counterdispatch({ type: "increment", value: 1 })
            }
            className=" px-2 bg-green-300"
          >
            Increment 1
          </button>

          <button
            onClick={() =>
              contenText.counterdispatch({ type: "dicrement", value: 1 })
            }
            className="bg-green-300 mx-3"
          >
            Decrement 1
          </button>
        </div>
        <div>
          <div>{count.counter2}</div>
          <button
            onClick={() =>
              contenText.counterdispatch({ type: "increment2", value: 1 })
            }
            className=" px-2 bg-green-300"
          >
            Increment2 1
          </button>

          <button
            onClick={() =>
              contenText.counterdispatch({ type: "dicrement2", value: 1 })
            }
            className="bg-green-300 mx-3"
          >
            Decrement2 1
          </button>

          <button
            onClick={() =>
              contenText.counterdispatch({ type: "dicrement2", value: 5 })
            }
            className="bg-green-300 mx-3"
          >
            Decrement2 5
          </button>
          <button
            onClick={() =>
              contenText.counterdispatch({ type: "increment2", value: 5 })
            }
            className="bg-green-300 mx-3"
          >
            increment2 5
          </button>
        </div>
        {/* <div>
          <div>{count2.counter2}</div>
          <button
            onClick={() => dispatch2({ type: "increment2", value: 1 })}
            className=" px-2 bg-green-300"
          >
            Increment2 1
          </button>

          <button
            onClick={() => dispatch2({ type: "dicrement2", value: 1 })}
            className="bg-green-300 mx-3"
          >
            Decrement2 1
          </button>

          <button
            onClick={() => dispatch2({ type: "dicrement2", value: 5 })}
            className="bg-green-300 mx-3"
          >
            Decrement2 5
          </button>
          <button
            onClick={() => dispatch2({ type: "increment2", value: 5 })}
            className="bg-green-300 mx-3"
          >
            increment2 5
          </button>
        </div> */}
      </div>
    </section>
  );
}

export default UseReduce
