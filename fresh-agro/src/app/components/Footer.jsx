import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="grid grid-cols-12 pt-[50px]">
          <div className="col-span-6 ps-[20px]">
            <h3 className="text-[24px] mb-[24px] font-bold">
              Contact <span className="text-red-600">us</span>
            </h3>
            <h4 className="text-[18px] font-bold mb-[13px]">live fresh Agro</h4>
            <h5 className="text-[14px] font-bold">
              Corporate <span className="text-red-600">Office</span>
            </h5>
            <p className="mb-[14px] text-[14px]">
              House 42, Road 6,
              <br /> Mohammadi Housing Society
              <br /> Mohammadpur, Dhaka- 1207
            </p>
            <h5 className="font-bold">
              Processing <span className="text-red-600">Center</span>
            </h5>
            <div className="text-[14px]">
              <p>Plot: 46, Doyal Housing, Bosila, Dhaka- 1207</p>
              <p>Phone: +88 01799 399555</p>
              <p>Email: info@livefresh.com</p>
            </div>
          </div>
          <div className="col-span-2">
            <h3 className="font-bold">Navigation</h3>
            <ul>
              <li>home</li>
              <li>catagories</li>
              <li>cart</li>
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="font-bold">Legal</h3>
            <ul>
              <li>privacy policy</li>
              <li>Terms of use</li>
              <li>Return policy</li>
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="font-bold">Social</h3>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
        <p className="flex justify-center">
          Copyright © 2022, Live Fresh Agro | All rights reserved.
        </p>
      </footer>
    </>
  );
}
