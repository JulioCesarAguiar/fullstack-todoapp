import React from "react";

const Navbar = () =>{
  return(
    <div className='flex py-3 flex-wrap justify-around'>
      <h1 className='text-lg font-semibold'>Todo APP</h1>
      <ul className='flex gap-[4rem] text-m'>
        <li>Home</li>
      </ul>
    </div>
  )
}

export default Navbar