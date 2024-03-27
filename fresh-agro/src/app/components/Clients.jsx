import React from "react";

export default function Clients() {
  return (
    <>
      <section>
        <div className=" mx-[130px]">
          <h1
            className="text-[44px] font-bold mt-[200px] "
            style={{ color: "#4C372E" }}
          >
            Our Client & Partners
          </h1>
          <hr className="w-[75px] h-[60px]  border-red-700 border-t-[8px]" />

          <p className="text-[16px] font-light">
            LiveFresh is currently supplying the required quantity of the
            quality meat in ACI Limited and Banglacut as a trusted supplier. We
            are also partnered to provide the solution of the meat sector with
            iFarmer-a technology company that enables small scale farmers and
            Agri Businesses to maximize their profit. Apart from these large
            Agri Business companies, we are serving our product to the retailers
            and directly to the consumers. At the supply end we also partnered
            with more than 550 small and medium farmers who raise their product
            for us.
          </p>
          <div className="flex justify-around mt-[100px]">
            <img
              src="../image/aci.png"
              alt=""
              className="h-[200px] w-[300px]"
            />
            <img
              src="../image/bcut.png"
              alt=""
              className="h-[200px] w-[200px]"
            />
            <img
              src="../image/iframer.png"
              alt=""
              className="h-[110px] w-[250px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
