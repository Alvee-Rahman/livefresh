import React from "react";
import { RiMenu2Line } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import { TiArrowSortedDown } from "react-icons/ti";
export default function Navbar() {
  return (
    <>
      <nav>
        <div className="grid grid-cols-12 bg-gray-200  py-[10px]">
          <div className="col-span-4 flex justify-center">
            <RiMenu2Line className="text-[40px] " />
            <input
              type="text"
              placeholder="what are you looking for"
              className="rounded-xl w-[273px] h-[40px] ms-[5px]"
            />
          </div>
          <div className="col-span-4 flex justify-center">
            <img src="../image/livefresh.svg" alt="" />
          </div>
          <div className="col-span-4 flex justify-center self-center">
            <BsCart3 className="text-[30px] mx-3" />
            <span className="font-semibold">jon Doe</span>
            <TiArrowSortedDown className="text-[20px] my-[2px] mx-2" />
          </div>
        </div>
      </nav>
    </>
  );
}
