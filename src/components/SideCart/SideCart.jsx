import React, { useEffect, useState } from "react";

const SideCart = ({ bookmark, markAsRead, title }) => {
  return (
    <div className=" md:ml-28 lg:ml-28 mt-5">
      <div className="sticky top-2">
        <div className="h-6 sm:w-[100px] md:w-[350px] text-center ">
          <p className="text-[#6047EC] font-bold text-xl bg-blue-200  py-4 rounded-sm outline outline-offset-2 outline-1 ">
            Spent time on read : {markAsRead} min
          </p>
        </div>

        <div className="mt-16 h-[500px] sm:w-full md:w-[350px] bg-gray-200 rounded-md">
          <div className="px-8 py-4">
            <h2 className="text-2xl font-bold">
              Bookmarked Blog : {bookmark}{" "}
            </h2>
            <div className=" ">
              <div className=" h-[70px]  rounded-md bg-slate-50 mt-4 lg:w-[290px] md:w-[290px] font-semibold">
                {title.map((data) => (
                  <p className=" h-[70px] px-6 py-2 rounded-md bg-slate-50 mt-4 lg:w-[290px] md:w-[290px] font-semibold">
                    {data}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideCart;
