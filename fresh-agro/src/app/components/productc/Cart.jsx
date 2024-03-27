import React from "react";

export default function Cart({ name }) {
  return (
    <>
      <div className="flex-col h-[352px] w-[242px]">
        <img src="../image/chickenleg.png" alt="" className="h-[189px] w-[242px]" />
        <p className="text-center text-[14px] px-[25px] py-[25px] font-bold">
          {name}
        </p>
        <p className="text-center text-[24px] font-bold  mb-[10px]">৳ 699/kg</p>
        <div className="grid grid-cols-12 text-white">
          <div className="col-span-6 flex justify-around  bg-zinc-800">
            <button>+</button>
            <span>1Kg</span>
            <button>-</button>
          </div>
          <div className="col-span-6 bg-red-700 flex justify-center">
            <button className=" text-white text-[10px] font-bold ">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
