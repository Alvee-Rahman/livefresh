import React from "react";

export default function Catagory() {
  return (
    <>
      <section className="mx-[130px]">
        <h1
          className="text-[44px]  font-bold my-[40px] "
          style={{ color: "#4C372E" }}
        >
          Shop by <span className="text-red-600">Category</span>
        </h1>
        <hr className="w-[75px] h-[60px]  border-red-700 border-t-[8px]" />

        <div className="flex justify-center space-x-[100px]">
          <div className="flex-col justify-center  h-[200px] w-[172px] bg-gray-200">
            <div className="flex justify-center mt-[30px]">
              <img src="../image/chicken.svg" alt="" />
            </div>
            <div className="text-center p-2">
              {" "}
              <span>chicken</span>
            </div>
          </div>
          <div className="flex-col justify-center  h-[200px] w-[172px] bg-gray-200">
            <div className="flex justify-center mt-[30px]">
              <img src="../image/group.svg" alt="" />
            </div>
            <div className="text-center p-2">
              {" "}
              <span>beef</span>
            </div>
          </div>
          <div className="flex-col justify-center  h-[200px] w-[172px] bg-gray-200">
            <div className="flex justify-center mt-[30px]">
              <img src="../image/sheep.svg" alt="" />
            </div>
            <div className="text-center p-2">
              {" "}
              <span>Goat</span>
            </div>
          </div>
          <div className="flex-col justify-center  h-[200px] w-[172px] bg-gray-200">
            <div className="flex justify-center mt-[30px]">
              <img src="../image/salami.svg" alt="" />
            </div>
            <div className="text-center p-2">
              {" "}
              <span>Cold Cuts</span>
            </div>
          </div>
          <div className="flex-col justify-center  h-[200px] w-[172px] bg-gray-200">
            <div className="flex justify-center mt-[30px]">
              <img src="../image/eggs.svg" alt="" />
            </div>
            <div className="text-center p-2">
              {" "}
              <span>Eggs</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
