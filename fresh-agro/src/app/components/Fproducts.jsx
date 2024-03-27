import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
export default function Fproducts() {
  return (
    <>
      <section className="">
        <div className="flex justify-center">
          <img src="../image/Group2.png" alt="" />
        </div>
        <h1
          className="text-[44px] text-center font-bold my-[40px] "
          style={{ color: "#4C372E" }}
        >
          Featured Products <span className="text-red-600">& Specials</span>
        </h1>
        <p className="text-center text-[16px] mb-[62px] px-[150px]">
          We conduct business with Ethics & Integrity. We are proud of the
          products which we manufacture and the efforts we put into them. Our R
          & D wing constantly put in great efforts to innovate in the field. Our
          goal is to serve on our country by setting standards of quality,
          services and commitment to customers.
        </p>

        <div className="mx-[130px] flex justify-center gap-[20px]">
          <div className="flex-col h-[352px] w-[242px] shadow">
            <img
              src="../image/beef.png"
              alt=""
              className="h-[189px] w-[242px]"
            />
            <p className="text-center text-[14px] px-[25px] py-[25px] font-bold">
              Live Fresh Premium Beef Bone-In [Approx 1kg]s
            </p>
            <p className="text-center text-[24px] font-bold mb-[10px]">
              ৳ 699/kg
            </p>
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
          <div className="flex-col h-[352px] w-[242px] shadow">
            <img
              src="../image/chickenleg.png"
              alt=""
              className="h-[189px] w-[242px]"
            />
            <p className="text-center text-[14px] px-[25px] py-[25px] font-bold">
              Live Fresh Premium Beef Bone-In [Approx 1kg]s
            </p>
            <p className="text-center text-[24px] font-bold mb-[10px]">
              ৳ 699/kg
            </p>
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

          <div className="flex-col h-[352px] w-[242px] shadow-md shadow-slate-300">
            <img
              src="../image/beefpis.png"
              alt=""
              className="h-[189px] w-[242px]"
            />
            <p className="text-center text-[14px] px-[25px] py-[25px] font-bold">
              Live Fresh Premium Beef Bone-In [Approx 1kg]s
            </p>
            <p className="text-center text-[24px] font-bold mb-[10px]">
              ৳ 699/kg
            </p>
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
          <div className="flex-col h-[352px] w-[242px] shadow">
            <img
              src="../image/steak.png"
              alt=""
              className="h-[189px] w-[242px]"
            />
            <p className="text-center text-[14px] px-[25px] py-[25px] font-bold">
              Live Fresh Premium Beef Bone-In [Approx 1kg]s
            </p>
            <p className="text-center text-[24px] font-bold  mb-[10px]">
              ৳ 699/kg
            </p>
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
        </div>
        <span className="justify-end flex mb-[48px] me-[130px] font-semibold  mt-[90px]">
          EXPLORE
          <span className="text-red-600 ps-2 mb-[93px] ">
            ALL Catagories <FaArrowRightLong className="inline" />
          </span>
        </span>
      </section>
    </>
  );
}
