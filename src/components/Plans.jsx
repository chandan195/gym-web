//import React from "react";
import PlanCard from "../layouts/PlanCard";

const Plans = () => {
  return (
    <div
      className=" min-h-screen flex flex-col justify-center 
    items-center md:px-32 px-5"
    >
      <div>
        <h1 className=" text-4xl font-semibold text-center mt-14 md:mt-14">
          Gym membership</h1>
      </div>

      <div className=" flex flex-col md:flex-row justify-between mt-10 gap-8  ">
        <PlanCard title="Trial Plan" price="0" />
        <PlanCard title="Plus Plan" price="3000" />
        <PlanCard title="ProMax Plan" price="5000" />
      </div>
    </div>
  );
};

export default Plans;
