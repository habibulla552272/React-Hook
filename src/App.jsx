import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import UseEffect from './Pages/UseEffect';
import UseRef from './Pages/UseRef';
import UseReduce from './Pages/UseReduce';

function App() {

 let Router = createBrowserRouter(
   createRoutesFromElements(
     <Route>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/useeffect" element={<UseEffect />} />
       <Route path="/useref" element={<UseRef />} />
       <Route path="/usereduce" element={<UseReduce />} />
     </Route>
   )
 );

  return (
    <>
        <RouterProvider router={Router}/>      
    
    </>
  )
}

export default App
