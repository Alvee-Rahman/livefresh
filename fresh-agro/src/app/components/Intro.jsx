import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Intro() {
  return (
    <>
      <section className="">
        <div className="grid grid-cols-12  ">
          <div className="col-span-6">
            <img
              src="../image/banner2.png"
              alt=""
              className="w-[590px] h-[720px ]"
            />
          </div>
          <div className="col-span-6">
            <h1 className="text-[44px] my-[58px] font-bold ">who we are</h1>
            <div className="pr-[123px]  ">
              <p
                className=" font-semibold text-[20px]"
                style={{ color: "#424242" }}
              >
                LiveFresh Agro provides a turnkey solution for meat and meat
                product from production by processing to ready to eat and hence
                “Farm to Fork”.
              </p>
              <p
                className="text-[15px] font-light py-[41px]"
                style={{ color: " #424242" }}
              >
                The core focus for LiveFresh Agro is to create value for our
                stakeholders i.e. small and medium holding farmers, contract
                farmers sustainably by bring the market to resources. We have
                extensive experience in working with other agri-business players
                across the value chain and have developed rich experience in
                tackling various issues facing the industry currently from
                production to processing and retailing. Our expertise in
                tackling issues related to growth strategies, sustainability and
                operational efficiency has made us suitably positioned to
                deliver tangible value to our clients in dealing with cost
                pressures, partnering, sourcing and delivery capabilities &
                improving Food & Agribusinesses.
              </p>
              <span className="justify-end flex py-[20px] font-semibold  mt-[90px]">
                Learn More
                <span className="text-red-600 ps-2">
                  about our values <FaArrowRightLong className="inline" />
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="mx-[128px] ">
          <h1
            className="text-[44px] font-bold mt-[100px]"
            style={{ color: "#4C372E" }}
          >
            product catagories
          </h1>
          <hr className="w-[75px] h-[60px] border-red-700 border-t-[8px]" />
          <div className="flex justify-center gap-[64px] mb-[93px] mt-[64px]">
            <div
              className="h-[268px] w-[310px] flex flex-col items-center justify-center rounded-lg "
              style={{ backgroundColor: " #F1F1F1" }}
            >
              <img
                src="../image/chicken.png"
                alt=""
                className="h-[90px] w-[90px]"
              />
              <button className="flex  bg-white justify-center px-[24px] py-[9px] mt-[45px] border-[1px] border-r-[1px]">
                <p className="text-[20px] text-black font-bold">
                  shop <span className="text-red-800">now</span>
                </p>
                <span className="my-auto text-red-800">
                  <FaArrowRight />
                </span>
              </button>
            </div>
            <div
              className="h-[268px] w-[310px] flex flex-col items-center justify-center"
              style={{ backgroundColor: " #F1F1F1" }}
            >
              <img
                src="../image/group.png"
                alt=""
                className="h-[90px] w-[90px]"
              />
              <button className="flex  bg-white justify-center px-[24px] py-[9px] mt-[45px] border-[1px] border-r-[1px]">
                <p className="text-[20px] text-black font-bold">
                  shop <span className="text-red-800">now</span>
                </p>
                <span className="my-auto text-red-800">
                  <FaArrowRight className="line-clamp-2" />
                </span>
              </button>
            </div>
            <div
              className="h-[268px] w-[310px] flex flex-col items-center justify-center"
              style={{ backgroundColor: " #F1F1F1" }}
            >
              <img
                src="../image/sheep.png"
                alt=""
                className="h-[90px] w-[90px]"
              />
              <button className="flex  bg-white justify-center px-[24px] py-[9px] mt-[45px] border-[1px] border-r-[1px]">
                <p className="text-[20px] text-black font-bold">
                  shop <span className="text-red-800">now</span>
                </p>
                <span className="my-auto text-red-800">
                  <FaArrowRight className="line-clamp-2" />
                </span>
              </button>
            </div>
          </div>
          <span className="justify-end flex mb-[48px] font-semibold  mt-[90px]">
            EXPLORE
            <span className="text-red-600 ps-2 mb-[93px] ">
              ALL Catagories <FaArrowRightLong className="inline" />
            </span>
          </span>
        </div>

        <img src="../image/image 26.png" alt="" className="h-[63] w-[1580px]" />
      </section>
    </>
  );
}
