import React from "react";
import Headerpart from "@/app/components/Headerpart";
import Values from "@/app/components/Values";
import Intro from "@/app/components/Intro";
import Fproducts from "@/app/components/Fproducts";
import Items from "@/app/components/items";
import Different from "@/app/components/Different";
import Blog from "@/app/components/Blog";
import Clients from "@/app/components/Clients";
import Feedback from "@/app/components/Feedback";
import Subscribe from "@/app/components/Subscribe";
import Footer from "@/app/components/Footer";

export default function page() {
  return (
    <>
      <main className="bg-black min-h-screen">

        <div className="mx-[130px] bg-white">
          <Headerpart/>
          <Values/>
          <Intro/>
          <Fproducts/>
          <Items/>
          <Different/>
          <Blog/>
          <Feedback/>
          <Clients/>
          <Subscribe/>
          <Footer/>
        </div>
      </main>
    </>
  );
}
