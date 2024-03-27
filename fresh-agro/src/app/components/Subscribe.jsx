import React from "react";

export default function Subscribe() {
  return (
    <>
      <section className="flex-col justify-center bg-gray-100">
        <div className="mx-[129px] ">
          <div className="flex justify-center py-[100px]">
            <img
              src="../image/group.png"
              alt=""
              className="h-[92px] w-[104px] "
            />
          </div>

          <h1 className="text-center text-[44px] font-bold mx-[100px] mb-[30px]">
            Subscribe to <span className="text-red-600">our Newsletter</span>
          </h1>
          <p className="text-center  text-[28px] px-[80px]">
            Subscribe to our Newsletter and get exclusive updates, amazing
            offers & discounts
          </p>
          <div className="flex justify-center py-[100px]">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-[663px] h-[44px]"
            />
            <button className="h-[44px] w-[154px] bg-zinc-800 text-white">
              subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
