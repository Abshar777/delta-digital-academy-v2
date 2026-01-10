import React from "react";
import { Button } from "../ui/button";
import { FaDownload } from "react-icons/fa";
import Timer from "./timer";

const Hero = () => {
  const counters = [
    {
      value: "50,000",
      description: "Careers Transformed",
    },
    {
      value: "30,000",
      description: "Successfully Placed",
    },
    {
      value: "2,000",
      description: "Hiring Partners",
    },
  ];

  return (
    <div className="w-full flex flex-col min-h-screen bg-foreground">
      <div className="w-full bg-background  rounded-b-[4rem]  grid-bg flex flex-col justify-center items-center h-[90vh] ">
        <p className="text-lg  font-bold font-poppins">
          School of <span className="text-primary ">Digital </span>Marketing
        </p>
        <h1 className="text-7xl italic relative text-center flex items-center  uppercase font-bold expanded-one">
         Building &nbsp;<img src="/peace.gif" className="w-20 h-20 " alt="" />{" "}
         the Future 
        </h1>
        <h1 className="text-7xl italic relative text-center flex items-center  uppercase font-bold expanded-one">
         Marketing {" "}
          <span className="text-primary color-flicker-text ps-2">
            {" "}
            Leaders.
          </span>
        </h1>
        <p className="text-center font-semibold text-lg font-poppins mt-2">
          Built in Collaboration with Top Digital Marketing Professionals With Delta Digital Academy
        </p>
        <div className="flex mt-4 gap-4 justify-center items-center">
          <Button
            size={"xl"}
            className="rounded-full hover:bg-foreground  hover:text-background hover:shadow-[1px_1px_0_0_#000] transition-all text-md ease-in font-semibold font-poppins  text-foreground border-2 border-foreground  shadow-[3px_3px_0_0_#000]"
          >
            Apply Now
          </Button>
          <Button
            size={"xl"}
            className="rounded-full hover:bg-foreground  hover:text-background hover:shadow-[1px_1px_0_0_#000] transition-all text-md bg-white ease-in  font-semibold font-poppins  text-foreground border-2 border-foreground  shadow-[3px_3px_0_0_#000]"
          >
            Download Brochure <FaDownload />
          </Button>
        </div>
      </div>
      <div className="w-full px-20 md:py-20 py-10 flex md:flex-row flex-col gap-10 justify-between items-center md:h-[10vh] bg-foreground">
        <h2 className="text-white text-4xl font-semibold  font-poppins">
          Be A Skilled Professional <br />
          <span className="text-primary font-bold ">
            {" "}
            Learn Today. Lead Tomorrow
          </span>
        </h2>
        <div className="flex items-center gap-10">
         <Timer/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
