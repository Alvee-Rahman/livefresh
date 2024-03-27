import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Different() {
  return (
    <>
      <section className="ms-[130px]">
        <h1 className="text-[44px]  font-bold  " style={{ color: "#4C372E" }}>
          How are we Different
        </h1>
        <hr className="w-[75px] h-[60px]  border-red-700 border-t-[8px]" />
        <div className="flex-col ">
          <div className="text-[18px]n font-bold space-y-6 me-[200px]">
            <div className="grid grid-cols-4">
              <div></div>
              <div className="text-center">
                <span className="text-red-600 ">Live</span>Fresh
              </div>
              <div className="text-center">store</div>
            </div>
            <div className=" grid grid-cols-4 p-1 ">
              <div className="">
                Humanely &
                <span className="text-red-600 block">Sustainably Raised</span>
              </div>
              <div className="text-center"> ✔</div>
              <div className="text-center"> ?</div>
            </div>
            <div className=" grid grid-cols-4 bg-gray-200 p-2">
              <div className="">
                Conviniently Delivered
                <span className="text-red-600 block">to your home</span>
              </div>
              <div className="text-center">✔</div>
              <div className="text-center">?</div>
            </div>
            <div className="grid grid-cols-4 p-2">
              <div className="">
                No Antibiotics or{" "}
                <span className="text-red-600 block">Hormones</span>
              </div>
              <div className="text-center">✔</div>
              <div className="text-center">?</div>
            </div>
            <div className=" grid grid-cols-4 bg-gray-200 p-2">
              <div className="">
                No Added salts{" "}
                <span className="text-red-600 block">or Chemicals</span>
              </div>
              <div className="text-center">✔</div>
              <div className="text-center">?</div>
            </div>

            <span className="justify-end flex py-[20px] font-semibold  mt-[90px]">
              EXPLORE
              <span className="text-red-600 ps-2">
                Details <FaArrowRightLong className="inline" />
              </span>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
