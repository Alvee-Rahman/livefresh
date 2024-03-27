import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
export default function Blog() {
  return (
    <>
      <section className="mx-[130px]">
        <h1
          className="text-[44px]  font-bold my-[40px] "
          style={{ color: "#4C372E" }}
        >
          Our<span className="text-red-600">Blog</span>
        </h1>
        <hr className="w-[75px] h-[60px]  border-red-700 border-t-[8px]" />
        <div className="grid grid-cols-12">
          <div className="col-span-6 ">
            <h2 className="text-[32px] font-bold">
              12 Types of Steak & How to Cook Them
            </h2>
            <p className="py-5 pe-5">
              There's nothing better than a steak dinner, but understanding the
              many different types of steak can be confusing! Knowing how to
              choose the best steak cuts by tenderness, flavor and price is all
              part of preparation. From porterhouse....
            </p>

            <span className="justify-end flex  font-semibold  mt-[70px] pe-5">
              Continue
              <span className="text-red-600 ps-2">
                Reading <FaArrowRightLong className="inline" />
              </span>
            </span>
          </div>
          <div className="col-span-6">
            <img src="../image/banner4.png" alt="" />
          </div>
        </div>

        <div className="flex my-[100px] space-x-6">
          <div className="flex-col h-[413px] w-[250px]">
            <img
              src="../image/sousevibe.png"
              alt=""
              className="h-[189px] w-[242px]"
            />
            <h3 className="font-bold text-[22px]">Sous Vide Round Steak</h3>
            <p className="font-semibold text-[14px] h-[100px]">
              Weighing under three pounds, the tri-tip is tender, delicious and
              easy to prepare.
            </p>
            <span className="self-end flex  font-semibold  mt-[50px]">
              Continue
              <span className="text-red-600 ps-2">
                Reading <FaArrowRightLong className="inline" />
              </span>
            </span>
          </div>
          <div className="flex-col h-[413px] w-[250px] ">
            <img
              src="../image/ribs.png"
              alt=""
              className="h-[189px] w-[242px]"
            />
            <h3 className="font-bold text-[22px]">
              Spicy St. Louis Barbeque Ribs
            </h3>
            <p className="font-semibold text-[14px] h-[100px]">
              Weighing under three pounds, the tri-tip is tender, delicious and
              easy to prepare.
            </p>
            <span className="self-end flex  font-semibold  mt-[26px]">
              Continue
              <span className="text-red-600 ps-2">
                Reading <FaArrowRightLong className="inline" />
              </span>
            </span>
          </div>
          <div className="flex-col h-[413px] w-[250px]">
            <img
              src="../image/beefpis2.png"
              alt=""
              className="h-[189px] w-[242px]"
            />
            <h3 className="font-bold text-[22px]">Grilled Tri-Tip Steak</h3>
            <p className="font-semibold text-[14px] h-[100px]">
              Weighing under three pounds, the tri-tip is tender, delicious and
              easy to prepare.
            </p>
            <span className="self-end flex  font-semibold   pe-5">
              Continue
              <span className="text-red-600 ps-2">
                Reading <FaArrowRightLong className="inline" />
              </span>
            </span>
          </div>
          <div className="flex-col h-[413px] w-[250px]">
            <img
              src="../image/chickenleg.png"
              alt=""
              className="h-[189px] w-[242px]"
            />
            <h3 className="font-bold text-[22px] ">
              Grilled Flat Iron Steak With Wine Reduction
            </h3>
            <p className="font-semibold text-[14px] h-[100px]">
              Weighing under three pounds, the tri-tip is tender, delicious and
              easy to prepare.
            </p>
            <span className="self-end flex  font-semibold   pe-5">
              Continue
              <span className="text-red-600 ps-2">
                Reading <FaArrowRightLong className="inline" />
              </span>
            </span>
          </div>
        </div>
        <span className="justify-end flex  font-semibold   pe-5">
          Explore
          <span className="text-red-600 ps-2">
            Details <FaArrowRightLong className="inline" />
          </span>
        </span>
      </section>
    </>
  );
}
