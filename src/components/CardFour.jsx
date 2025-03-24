import React from "react";
import Heading from "./common/Heading";
import Description from "./common/Description";
import Image from "next/image";

const CardFour = ({ className }) => {
  return (
    <div className={className}>
      <div className="min-h-[675px] max-xl:min-h-[633px] max-lg:min-h-[420px] w-full flex justify-center max-w-[1140px] mx-auto gap-4 max-lg:flex-col">
        <div className="bg-[#026070] py-4 px-[16px] min-h-[675px] max-xl:min-h-[633px] max-lg:min-h-[420px] max-w-[520px] max-lg:max-w-none w-full rounded-2xl flex flex-col gap-[77px] items-center justify-center max-lg:gap-14">
          <div className="flex flex-col gap-[26px] max-w-[467px] max-lg:max-w-[600px]">
            <Heading className="text-white">Real Time Tax</Heading>
            <Description className="text-white">
              Pie will allow users to send digital invoices to their customers,
              on the go. There will be one place to manage all clients and
              invoicing, allowing them to run their business whilst getting paid
              faster. Invoice payments will be trackable with automated payment
              reminders to debtors. This section will also allow users to view
              monthly revenue and track year on year changes
            </Description>
          </div>
          <div className="flex flex-col gap-[26px] max-w-[467px] max-lg:max-w-[600px]">
            <Heading className="text-white">Insights on your income</Heading>
            <Description className="text-white">
              Our app will analyse data and provide insights into things like
              the biggest expenses and how these fluctuate on a monthly or
              yearly basis and even tell users how they’re performing in
              comparison to their peers and highlight any areas where they could
              improve efficiency
            </Description>
          </div>
        </div>
        <div className="bg-[url(/assets/images/section-four-bg.webp)] bg-cover bg-no-repeat bg-center min-h-[675px] max-xl:min-h-[633px] max-lg:min-h-[420px] max-w-[520px] max-lg:max-w-none w-full rounded-2xl flex justify-center items-center">
          <Image
            width={633}
            height={553}
            className="max-lg:max-w-[530px] max-lg:w-full"
            src="/assets/images/section-four-img.webp"
            alt="section one img"
          />
        </div>
      </div>
    </div>
  );
};

export default CardFour;
