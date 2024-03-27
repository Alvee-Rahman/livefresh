import React from "react";

export default function Feedback() {
  return (
    <>
      <section className="mx-[130px]">
        <h1
          className="text-[44px] font-bold mt-[200px] "
          style={{ color: "#4C372E" }}
        >
          What our clients are saying
        </h1>
        <hr className="w-[75px] h-[60px]  border-red-700 border-t-[8px]" />
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <p className="py-5 ps-1 pe-5 text-[14px] font-light border-red-500 border-s-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nis aliquip ex ea commodo consequat.
            </p>
            <h4 className="font-bold text-[22px]">Asif Istiaque</h4>
            <span className="block text-[14px] font-light">
              THINK CORPORATION
            </span>
          </div>
          <div className="col-span-6">
            <p className="py-5 ps-1 pe-5 text-[14px] font-light border-red-500 border-s-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nis aliquip ex ea commodo consequat.
            </p>
            <h4 className="font-bold text-[22px]">Asif Istiaque</h4>
            <span className="block text-[14px] font-light">
              THINK CORPORATION
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
