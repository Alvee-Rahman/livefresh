import React from "react";
import Navbar from "@/app/components/Navbar";
import styles from "@/app/styles/header.module.css";

export default function Headerpart() {
  return (
    <>
      <section className={`${styles.banner} h-[663px]`}>
        <Navbar />

        <div className="grid grid-cols-12 ">
          <div className="col-span-6 ms-[116px] min-h-[600px] relative">
            <img
              src="../image/freshlogo.png"
              alt="livelogo"
              className="h-[200px]"
            />
            <p className={`${styles.caveat} text-white `}>
              <span className="text-[40px]">you only</span>
              <span className="block leading-3 text-[50px]">LIVE once</span>
              <span className="block text-[40px]">so</span>
              <span className="uppercase block leading-3 text-[50px]">
                LIVE FRESH
              </span>
            </p>
            <button
              className={`${styles.caveat} mt-[43px] px-[63px] py[15px] bg-white  rounded-full text-[2rem]`}
            >
              Shop now
            </button>

            <p className={`${styles.caveat} text-white flex pt-[140px]`}>
              Fresh and Safe Food for Building Better Future
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
