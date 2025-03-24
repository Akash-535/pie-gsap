import React from "react";
import Heading from "../common/Heading";
import Description from "../common/Description";
import Image from "next/image";

const CardThree = ({ className }) => {
  return (
    <div className={className}>
      <div className="min-h-[675px] max-xl:min-h-[633px] max-lg:min-h-[390px] w-full flex justify-center max-w-[1140px] mx-auto gap-4 max-lg:flex-col">
        <div className="bg-[#FFABC7] py-4 px-[16px] min-h-[675px] max-xl:min-h-[633px] max-lg:min-h-[390px] max-w-[520px] max-lg:max-w-none w-full rounded-2xl flex flex-col gap-[26px]">
          <Heading>Real Time Tax</Heading>
          <div className="flex flex-col gap-2 max-w-[467px] max-lg:max-w-[600px]">
            <Description>
              We’ll enable people to reconcile all of their transactions in one
              place. Our app will import and categorise bank feeds to determine
              which of the expenses qualify. That means less time spent worrying
              about tax rules and more time spent doing the things they enjoy.
            </Description>
            <Description>
              Our banking level secure encryption cloud storage, will store
              expense receipts in order to ensure that the tax return is fully
              compliant in case of any HMRC enquiries.
            </Description>
          </div>
          <Heading>Live tracking of the tax return</Heading>
          <div className="flex flex-col gap-2 max-w-[467px] max-lg:max-w-[600px]">
            <Description>
              Because Pie is a registered tax agent with HMRC, it will be able
              to send off your self-assessments directly to HMRC without needing
              to leave or download the data outside of the app.
            </Description>
            <Description>
              Users will also have the option to pay a £59 checking fee to have
              their return reviewed and checked by tax assistants, that will
              have been trained and certified by our in house CIMA qualified
              accountancy practice.
            </Description>
          </div>
        </div>
        <div className="bg-[url(/assets/images/section-three-bg.webp)] bg-cover bg-no-repeat bg-center min-h-[675px] max-xl:min-h-[633px] max-lg:min-h-[390px] max-w-[520px] max-lg:max-w-none w-full rounded-2xl flex justify-center items-center">
          <Image
            width={680}
            height={591}
            className="max-lg:max-w-[530px] max-lg:w-full"
            src="/assets/images/section-three-img.webp"
            alt="section one img"
          />
        </div>
      </div>
    </div>
  );
};

export default CardThree;
