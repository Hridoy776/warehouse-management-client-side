import { LockClosedIcon, ReceiptRefundIcon, TruckIcon } from "@heroicons/react/solid";
import React from "react";

const Services = () => {
  return (
    <>
      <div className="w-[50%] mx-auto flex flex-col justify-center items-center py-4">
        <TruckIcon className="text-white h-20 w-20" />
        <p className="text-white text-2xl mb-3 ">guranted profit</p>
        <p className="text-white whitespace-nowrap ">
          with in 60 days you can earn
        </p>
        <p className="text-white "> a healthy ammount!</p>
      </div>
      <div className="w-[50%] mx-auto flex flex-col justify-center items-center py-4">
        <ReceiptRefundIcon className="text-white h-20 w-20" />
        <p className="text-white text-2xl mb-3">money gurantee</p>
        <p className="text-white whitespace-nowrap ">
          30 days money back gurantee
        </p>
        <p className="text-white ">no question asked!</p>
      </div>
      <div className="w-[50%] mx-auto flex flex-col justify-center items-center py-5">
        <LockClosedIcon className="text-white h-20 w-20" />
        <p className="text-white text-2xl mb-3">online support 24/7</p>
        <p className="text-white whitespace-nowrap ">
          we're here to support to you.
        </p>
        <p className="text-white ">lets store now!</p>
      </div>
    </>
  );
};

export default Services;
