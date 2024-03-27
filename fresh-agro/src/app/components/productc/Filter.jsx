import React from "react";
import { RxCross1 } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
export default function Filter() {
  return (
    <>
      <div className="flex-col p-3 my-[100px] border-[2px] border-r-2 justify-center w-[300px] h[102px]">
        <span className="font-semibold text-[16px]">
          Results: 12 Products Found
        </span>
        <div className="flex-col">
          <span className="font-bold text-[12px]">Location</span>
          <div className="flex">
            <input type="text" />

            <button>
              <RxCross1 />
            </button>
            <button>
              <FaChevronDown />
            </button>
          </div>
        </div>
        <div className="flex-col">
          <span className="font-bold text-[12px]">Sort by</span>
          <div className="flex">
            <input type="text" />

            <button>
              <RxCross1 />
            </button>
            <button>
              <FaChevronDown />
            </button>
          </div>
        </div>
        <div className="flex-col">
          <span className="font-bold text-[12px]">Rating</span>
          <div className="flex">
            <CiStar className="text-red-700 text-[40px]" />
            <CiStar className="text-red-700 text-[40px]" />
            <CiStar className="text-red-700 text-[40px]" />
            <CiStar className=" text-[40px]" />
            <CiStar className=" text-[40px]" />
          </div>
        </div>
        <div>
          <span className="font-bold text-[12px]">Feature</span>
          <ul>
            <li>
              <input type="checkbox" /> <label htmlFor="">Fresh Meat</label>
            </li>
            <li>
              <input type="checkbox" /> <label htmlFor="">Frozen</label>
            </li>
            <li>
              <input type="checkbox" />{" "}
              <label htmlFor="">2 hour Delivery</label>
            </li>
            <li>
              <input type="checkbox" /> <label htmlFor="">premium</label>
            </li>
            <li>
              <input type="checkbox" /> <label htmlFor="">Free Delivery</label>
            </li>
            <li>
              <input type="checkbox" /> <label htmlFor="">In Stock</label>
            </li>
            <li className="font-bold">show more</li>
          </ul>
        </div>
        <div>
          <button className="w-[265px] h-[42px] text-[15px] px-[82px] py-[13px]  text-white bg-zinc-700 font-bold my-2">
            Apply Filters
          </button>
        </div>
        <div>
          <button className="w-[265px] h-[42px] text-[15px] px-[82px] py-[13px] text-black  bg-gray-200 font-bold my-2">
            Reset Filter
          </button>
        </div>
      </div>
    </>
  );
}
