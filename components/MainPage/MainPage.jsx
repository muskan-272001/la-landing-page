"use client";

import React, { useState } from "react";
import Form from "../Form/Form";
import SecondSection from "../secondSection/SecondSection";
import Image from "next/image";
import homeImage from "../../public/homeImage.png";
import Classes from "../Classes/Classes";
import CircleImage from "../CircleImage/CircleImage";
import FAQ from "../FAQ/FAQ";
import Testimonials from "../Testimonials/Testimonials";
import AdmissionFAQ from "../AdmissionFAQ/AdmissionFAQ";

const MainPage = () => {
  return (
    <>
      <div className="mainPage">
        <div className="flex justify-center px-5">
          <div className="w-3/5 h-[70vh]">
            <p className="mainText">
              Growing with values and learning with joy.
            </p>
            <p>
              We follow a unique curriculum based on our Chinmaya Vision Program
            </p>
            <Image src={homeImage} alt=""></Image>
          </div>
          <div className="w-2/5">
            <Form />
          </div>
        </div>
        <div className="flex justify-center px-5">
          <div className="w-3/5 h-[70vh]">
            <SecondSection />
          </div>
          <div className="w-2/5">
            <Classes />
          </div>
        </div>
        <div className="flex justify-center px-5">
          <div className="w-3/5 h-[70vh]">
            <CircleImage />
          </div>
          <div className="w-2/5">
            <iframe
              className="w-full aspect-video self-stretch md:min-h-96"
              src="https://www.youtube.com/embed/1FLYZdxsteo"
              frameBorder="0"
              title="Product Overview Video"
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="flex justify-center px-5">
          <div className="w-3/5 h-[70vh]">
            <iframe
              className="w-full aspect-video self-stretch md:min-h-96"
              src="https://www.youtube.com/embed/1FLYZdxsteo"
              frameBorder="0"
              title="Product Overview Video"
              aria-hidden="true"
            />
          </div>
          <div className="w-2/5 flex gap-4 mt-12 px-6">
            <p>TOTAL PASSOUT</p>
            <p>No. OF YEARS</p>
            <p>STUDENT TEACHER RATIO</p>
          </div>
        </div>

        <div className="flex justify-center px-5 h-[70vh]">
          <FAQ />
        </div>

        <div className="flex justify-center px-5 h-[90vh] mt-10">
          <Testimonials />
        </div>
      </div>
    </>
  );
};

export default MainPage;
