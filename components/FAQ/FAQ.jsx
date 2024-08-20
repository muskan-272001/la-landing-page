import React from "react";
import Image from "next/image";
import { useState } from "react";
import AdmissionFAQ from "../AdmissionFAQ/AdmissionFAQ";

const Faqs = () => {
  return (
    <div className="faqsPage">
      <div className="faqDescription infoSection">
        <div className="infoSectionInner">
         
          <div className="faqDescImg">
            {/* <Image src={FAQ1} alt="Kalyan" /> */}
          </div>
        </div>
      </div>

      {/*  FAQ Main List */}
      <div className="faqMainList">
        <div className="mainListInner">{/* Add your navigation items */}</div>
      </div>

      {/* Admission Questions */}
      <AdmissionFAQ />
    </div>
  );
};

export default Faqs;
