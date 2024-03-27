import React from "react";
import { IoMenu } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { IoMdSearch } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi";
export default function Navbar() {
  return (
    <>
      <div className="grid grid-cols-12  h-[64px] backdrop-blur-sm text-white">
        <div className=" col-span-6">
          <ul className="flex">
            <li className=" w-[64px] h-[64px] border-[1px] flex justify-center items-center ">
              <IoMenu className="text-[40px]" />
            </li>
            <li className="W-[172px] border-[1px] flex px-2 ">
              <div className="flex justify-center items-center">
                <SlLocationPin className="h-[18px] w-[20px]" />
              </div>
              <div className="flex justify-center items-center  ">
                <p className="p-2 text-[14px] leading-[17px] font-light">
                  DHAkA
                  <span className="block leading-4  font-semibold">
                    MOHAMMADPUR
                  </span>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-span-6">
          <ul className="flex justify-end">
            <li className="flex justify-center items-center h-[64px] w-[64px] border-[1px]">
              <IoMdSearch className="text-[24px]" />
            </li>
            <li className="flex justify-center items-center h-[64px] w-[64px] border-[1px]">
              <HiOutlineShoppingCart className="text-[24px]" />
            </li>
            <li className="flex justify-center items-center h-[64px] w-[64px] border-[1px]">
              <span className="text-[15px] font-bold">log in</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
