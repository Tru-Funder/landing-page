import React from "react";
import backgroundImage from "../assets/home-bg.svg";
import Button from "./Button";
import Carousel from "./Carousel/Carousel";
import DiscordImg from "../assets/discord.svg";
import DesktopImg from "../assets/desktop.svg";
import CardImg from "../assets/middle.svg";
import PhoneImg from "../assets/phone.svg";
import MailImg from "../assets/mail.svg";
import MoneyImg from "../assets/money.svg";
import SyncImg from "../assets/Sync.svg";
import ConsultImg from "../assets/Consultation.svg";

export const Home = () => {
  const cards = [
    {
      title: "Salary Reward System (SRS)",
      description:
        "Earn a whooping 1% of any account size, when you have made a minimum consistent withdrawal up to 3 times!",
      imageUrl: MailImg,
      footer: "(T&C’s apply)",
    },
    {
      title: "Trufunder’s Pay in Installments (PII) Program",
      description:
        "Get up to 4 installments payment with just an initial deposit of 45% upfront.",
      imageUrl: MoneyImg,
      footer:
        "(this is only available in eligible regions) PLEASE DO CHECK ELIGIBILITY BEFORE APPLYING",
    },
    {
      title:
        "Leverage our account reset feature to recover from a daily drawdown and regain control of your trading performance.",
      description: "",
      imageUrl: SyncImg,
      footer: "(only available for 25k-200k) acct sizes",
    },
    {
      title:
        "Unlock Profit Potential with Our Weekend Holding Feature and Expert Advisors",
      description: "",
      imageUrl: ConsultImg,
      footer: "",
    },
  ];
  return (
    <div className="relative">
      <div
        className=" bg-cover bg-center flex-col  bg-opacity-[85%] relative w-full h-[100vh]  flex justify-center items-center   "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="text-center lg:px-0 px-3 lg:mb-[200px] mb-[150px]">
          <div className="text-white pb-4  ">
            <h3
              className="font-bold lg:text-white text-[16px] font-poppins lg:text-3xl pb-2  text-transparent bg-clip-text   "
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #14A41A 5.09%, #00F008 50.26%)",
                WebkitBackgroundClip: "text",
              }}
            >
              Our Fund, Your Profit
            </h3>
            <h1 className="ont-bold font-poppins lg:text-5xl text-[2.5rem] leading-tight pb-3">
              Unleash Your <span className="text-[#FED202]">Trading</span>{" "}
              Potential
            </h1>
            <div className="pt-2 lg:w-[500px] lg:m-auto">
              <p className="text-[#D9D9DB] font-normal font-poppins text-sm  lg:text-lg leading-[150%] ">
                Unleash Your Trading Potential with Trufunder: A Prop firm for
                the trader and by the trader.
              </p>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col lg:gap-8 gap-4 justify-center pt-4 px-[10px] lg:px-0">
            <div>
              <Button className="bg-[#008905] text-white lg:text-[16px] text-[12px]">
                Get Funded
              </Button>
            </div>
            <div className="lg:block flex justify-center items-center">
              <Button className="text-[#008905] bg-white flex lg:text-[16px] text-[12px] items-center gap-3 text-center font-[600]">
                <img src={DiscordImg} className="" alt="" />
                Join Our Discord
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* desktop */}
        <div className="hidden lg:flex justify-center items-center">
          <div className="absolute lg:top-[22%] xl:top-[30%] md:top-[43%] z-[90] flex justify-center items-center">
            <img src={CardImg} alt="" className="w-[80%]" />
          </div>
        </div>
        {/* mobile */}
        <div className="lg:hidden flex justify-center items-center ">
          <div className="absolute top-[30%] md:top-[28%] z-[90] flex justify-center items-center">
            <img src={PhoneImg} alt="" className="w-[70%] lg:w-full" />
          </div>
        </div>

        <div className="lg:bg-white bg-[#001101] flex justify-center lg:text-[#303030] text-[#383838] items-center text-center lg:text-start py-12 text-base-black filter drop-shadow-md ">
          <div className="flex w-[80%] lg:mt-[150px] py-7 items-center justify-center gap-6 lg:flex-row flex-col ">
            {/* MOBILE */}
            <div className="flex flex-col  lg:hidden text-center">
              <h2 className="font-poppins text-3xl font-bold leading-[1.4] lg:w-[80%] pb-5 text-[#3F3F3F] ">
                <span className="text-[#008905]">Trufunder</span> <br></br>{" "}
                Trading platform
              </h2>
              <div className="w-full">
                <img src={DesktopImg} alt="" />
              </div>

              <p className="font-poppins text-base font-bold leading-relaxed py-5 text-[#383838] ">
                we take our traders accomplishments seriously that's why we
                haves come up with very robust strategies to ensure every trader
                trading with Trufunder is successful
              </p>
              <div>
                <Button className=" bg-[#008905] text-white mt-5">
                  Get Funded
                </Button>
              </div>
            </div>
            {/* Desktop */}
            <div className="hidden  lg:flex lg:gap-7 lg:items-center">
              <div className="w-full ">
                <img src={DesktopImg} alt="" />
              </div>

              <div>
                <h2 className="font-poppins text-4xl font-bold leading-[1.4] lg:w-[80%] pb-3  ">
                  <span className="text-[#008905]">Trufunder</span> Trading
                  platform
                </h2>
                <p className="font-poppins text-base font-normal leading-relaxed pt-4 ">
                  we take our traders accomplishments seriously that's why we
                  haves come up with very robust strategies to ensure every
                  trader trading with Trufunder is successful
                </p>
                <Button className=" bg-[#008905] text-white mt-5">
                  Get Funded
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* carousel */}

      <div className="bg-[#070E2A]">
        <div className="pt-10 pb-5 text-center">
          <h3 className="ont-bold text-white font-poppins lg:text-3xl text-[1rem] leading-10 ">
            What Makes <span className="text-[#FED202]">Trufunder</span>{" "}
            Different{" "}
          </h3>
        </div>
        <Carousel slides={cards} />
      </div>
    </div>
  );
};
