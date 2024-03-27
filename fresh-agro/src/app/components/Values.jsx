import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Values() {
  return (
    <>
      <section className=" text-black mt-[62px]">
        <div className=" px-[150px]  pb-[98px]">
          <div>
            <h1 className="text-[44px] font-bold " style={{ color: "#4C372E" }}>
              Our Core Values
            </h1>
            <hr className="w-[75px] h-[60px] border-red-700 border-t-[8px]" />
          </div>
          <div className="flex gap-[40px]">
            <div className="space-y-[25px] ">
              <div className="border-e-2 space-y-[25px] border-red-200">
                <img
                  src="../image/grass.svg"
                  alt="grass "
                  className=" h-[120px] w-[120px] "
                />
                <p className="text-red-700 text-[18px] font-bold">
                  <span style={{ color: "#4C372E" }}>Grass</span>
                  fed
                </p>
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur dolorum praesentium animi perferendis blanditiis
                rerum voluptate culpa iste earum veritatis repudiandae, illo eos
                qui et quam harum? Consequuntur, nobis id.
              </div>
            </div>
            <div className="space-y-[25px] ">
              <div className="border-e-2 space-y-[25px] border-red-200">
                <img
                  src="../image/quality.svg"
                  className=" h-[120px] w-[120px] "
                />
                <p className="text-red-700 text-[18px] font-bold">
                  <span style={{ color: "#4C372E" }}>100%</span>
                  Quality Checks
                </p>
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur dolorum praesentium animi perferendis blanditiis
                rerum voluptate culpa iste earum veritatis repudiandae, illo eos
                qui et quam harum? Consequuntur, nobis id.
              </div>
            </div>
            <div className="space-y-[25px] ">
              <div className=" space-y-[25px]">
                <img
                  src="../image/group.svg"
                  alt="grass fed"
                  className=" h-[120px] w-[120px] "
                />
                <p className="text-red-700 text-[18px] font-bold">
                  <span style={{ color: "#4C372E" }}>Deliverd</span>
                  Fresh
                </p>
              </div>

              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur dolorum praesentium animi perferendis blanditiis
                rerum voluptate culpa iste earum veritatis repudiandae, illo eos
                qui et quam harum? Consequuntur, nobis id.
              </div>
            </div>
          </div>
          <span className="justify-end flex my-[20px] font-semibold  mt-[90px]">
            Learn More
            <span className="text-red-600 ps-2">
              about our values <FaArrowRightLong className="inline" />
            </span>
          </span>
        </div>

        <div className=" px-[150px]">
          <div className="">
            <h1
              className="text-[44px] font-bold my-[70px] "
              style={{ color: "#4C372E" }}
            >
              Our Procurement Cycle
              <hr className="w-[75px] h-[60px] border-red-700 border-t-[8px]" />
            </h1>

            <p className="text-[20px] my-[100px]">
              We have also partnered with some other farms in order to meet our
              retailers, clients and customer’s demand. After a product is
              placed the livestocks are processed by professionals in our
              processing unit which is well maintained by another team
              responsible for maintaining the processing unit. After the
              processing is done, our Quality assurance team checks the quality
              of the product and it is then approved for packaging. At the end
              of the packaging process the products are handed over to our
              delivery persons under the supervision of our delivery fleet
              management team. The whole product is maintained in a cold chain
              for the best quality, fresh meat.
            </p>
          </div>
          <div>
            <img
              src="../image/process.png"
              alt="process"
              className="px-[128px] pt-[86px] pb-[125px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
