import React from "react";
import Heading from "./common/Heading";
import Description from "./common/Description";
import Image from "next/image";

const CardTwo = ({ className }) => {
  return (
    <div className={className}>
      <div className="min-h-[675px] max-xl:min-h-[633px] max-lg:min-h-[415px] w-full flex justify-center max-w-[1140px] mx-auto gap-4 max-lg:flex-col max-lg:gap-2">
        <div className="bg-[#6621E9] py-4 px-[16px] min-h-[675px] max-xl:min-h-[633px] max-lg:min-h-[415px] max-w-[520px] max-lg:max-w-none w-full rounded-2xl flex flex-col gap-[26px] justify-center max-lg:gap-4">
          <Heading className="text-white">Real Time Tax</Heading>
          <div className="flex flex-col gap-2 max-w-[467px] max-lg:max-w-[600px]">
            <Description className="text-white">
              Importing income and outgoings across multiple income streams is
              currently not possible on any other software, and our app will
              automatically highlight expenses eligible for a refund.
            </Description>
            <Description className="text-white">
              Multiple incomes can include anything from salary, property,
              capital gains, self employment, overseas income, dividends &
              interest or tax credits.
            </Description>
          </div>
          <Heading className="text-white">
            Live tracking of the tax return
          </Heading>
          <div className="flex flex-col gap-2 max-w-[467px] max-lg:max-w-[600px]">
            <Description className="text-white">
              Users on the premium subscription tier will be paired with a tax
              advisor to help them with the entire process. Our experts will
              help plan their business and taxes to make sure they stay as tax
              efficient as possible. We will use our expertise to either save
              them money on their tax bill or get the best possible tax rebate
              so that they can keep more money in their pockets.
            </Description>
            <Description className="text-white">
              Our in-app function will enable them to ask questions and get real
              time answers on any tax issues they may be facing, with sector
              specific tax assistants on hand to provide valuable insight around
              the relevant tax situation. credits.
            </Description>
          </div>
        </div>
        <div className="bg-[url(/assets/images/section-two-bg.webp)] bg-cover bg-no-repeat bg-center min-h-[675px] max-xl:min-h-[633px] max-lg:min-h-[415px] max-w-[520px] max-lg:max-w-none w-full rounded-2xl flex justify-center items-center">
          <Image
            width={633}
            height={553}
            className="max-lg:max-w-[530px] max-lg:w-full"
            src="/assets/images/section-two-img.webp"
            alt="section one img"
          />
        </div>
      </div>
    </div>
  );
};

export default CardTwo;
