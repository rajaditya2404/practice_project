import React from "react";
import viteimage from "../../../public/vite.svg";
import DetailCard from "../ContactApp/components/DetailCard";

// import {Box} from
const ContactApp = () => {
  return (
    <div class=" flex w-full flex-col items-center justify-center">
      <div class=" flex justify-center items-center">
        <img class="h-20" src="/index.png" alt="" />
        <h1 class="font-bold ">CONTACT APP</h1>
      </div>

      <div class="flex w-full p-4 ">
        <button class="flex justify-center items-center w-full font-semibold text-purple-50 font bg-purple-700">
          <img class="h-4 mx-2" src="/add-more.svg" alt="" /> Add New Contact
        </button>
      </div>
      <input
        class=" border-double w-full"
        type="text"
        placeholder="search contant..."
      />
      <DetailCard />
    </div>
    // <img src={viteimage} />
    // <img src={"/vite.svg" + " "} />
  );
};

export default ContactApp;
