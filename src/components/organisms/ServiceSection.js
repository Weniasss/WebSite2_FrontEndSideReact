import React from "react";
import ServiceGroupItems from "../molecules/ServiceGroupItems";
import Title from "../atoms/Title";

const ServiceSection = () => {
  return (
    <div class="px-16 pt-10  mb-5 rounded-xl">
      
      <ServiceGroupItems style="border-b-4 md:border-r-4 p-6" style2="border-b-4 p-6"/>

      <ServiceGroupItems style="md:border-r-4 p-6" style2="p-6"/>
    </div>
  );
};

export default ServiceSection;
