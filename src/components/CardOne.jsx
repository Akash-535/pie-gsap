import React from "react";
import Heading from "./common/Heading";
import Description from "./common/Description";
import Image from "next/image";

const CardOne = ({ className }) => {
  return (
    <div className={className}>
      <div className="min-h-[675px] max-xl:min-h-[633px] max-lg:min-h-[420px] w-full flex justify-center max-w-[1140px] mx-auto gap-4 max-lg:flex-col">
        <div className="bg-[#6FFFA8] py-4 px-[16px] min-h-[675px] max-xl:min-h-[633px] max-lg:min-h-[420px] max-w-[520px] max-lg:max-w-none w-full rounded-2xl flex flex-col gap-[26px] max-lg:gap-4">
          <Heading>Real Time Tax</Heading>
          <div className="flex flex-col gap-2 max-w-[467px] max-lg:max-w-[600px]">
            <Description>
              Our app will give you your live tax position which will be the
              actual tax amount owed across multiple income streams, to date.
              There will be no need to wait until the end of the year to see
              what you owe, taking all of the anxiety of the unknown away
            </Description>
            <Description>
              All incoming and outgoing transactions will be updated in real
              time, along with any deductions or credits, which means users will
              have the most up to date figure every time they open the app.
            </Description>
            <Description>
              For most people their tax bill can be their biggest outgoing.
              Waiting up to 20 months from the point of income to finding out
              the final tax bill can make things hard to plan
            </Description>
            <Description>
              And with HMRC’s Making Tax Digital initiative, businesses will
              soon be required to report their income every quarter - making up
              to date record keeping a necessity
            </Description>
          </div>
          <Heading>Live tracking of the tax return</Heading>
          <Description className="max-w-[467px] max-lg:max-w-[600px]">
            Once submitted, users will be kept in the loop on the progress of
            their return, every step of the way. Our system is integrated with
            HMRC and alerts will be sent to the user to take action where and
            when required.
          </Description>
        </div>
        <div className="bg-[url(/assets/images/section-one-bg.webp)] bg-cover bg-no-repeat bg-center min-h-[675px] max-xl:min-h-[633px] max-lg:min-h-[420px] max-w-[520px] max-lg:max-w-none w-full rounded-2xl flex justify-center items-center">
          <Image
            width={680}
            height={591}
            className="max-lg:max-w-[530px] max-lg:w-full"
            src="/assets/images/section-one-img.webp"
            alt="section one img"
          />
        </div>
      </div>
    </div>
  );
};

export default CardOne;
