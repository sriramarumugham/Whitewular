import React from "react";
import Dropdown from "./Dropdown";

function Header() {
  return (
    <div className="flex  justify-between  items-center px-4	">
      <div>
        <img
          className="h-20 w-20"
          src="https://res.cloudinary.com/whitewular-com/image/authenticated/s--MZ3AX8LA--/v1655353093/mneh8kftrrwuyowxaket.jpg"
        />
      </div>

<div className="flex h-[100px] justify-center  items-center  ">
     <div>
      <Dropdown/>
      </div>

      <div className=" w-[500px]  h-[50px]  bg-yellow-400 flex-row  rounded-3xl border-2 border-yellow-50 ">
        <input
          placeholder="Search"
          className=" w-[430px] h-[100%]   bg-yellow-400 rounded-3xl  p-5"
          
        />
        <button className= " w-[50px] h-[100%] "><i class="fa-solid fa-magnifying-glass"></i></button>
      </div>

</div>

     
      <div className="flex gap-5 justify-center  items-center text-yellow-600">
      <i class="fa-solid fa-gift"></i>
      <i class="fa-solid fa-mobile-screen"></i>
      <i class="fa-solid fa-heart"></i>
      <i class="fa-solid fa-cart-shopping"></i>
      <i class="fa-solid fa-user"></i>
      </div>
    </div>
  );
}

export default Header;
