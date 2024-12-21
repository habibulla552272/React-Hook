import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="w-1/2 mx-auto flex flex-col gap-7 font-semibold text-2xl">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/useeffect">Use Effect</Link>
        <Link to="/useref">Use Ref</Link>
        <Link to="/usereduce">use Reduce  </Link>
      </div>
    </div>
  );
}

export default Home
