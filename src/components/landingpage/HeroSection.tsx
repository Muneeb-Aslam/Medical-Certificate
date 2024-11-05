import React from "react";
import Button from "../ui/button";
import { useNavigate } from "react-router-dom";

interface props {
  title: string;
  buttonText: string;
  tags: Array<string>;
}

const HeroSection: React.FC<props> = ({ title, buttonText, tags }) => {
  const navigate = useNavigate();
  return (
    <section className="bg-offwhite w-full h-[92vh] flex flex-col justify-between items-center font-poppins pb-20 px-[12px]">
      <div className="w-full h-full flex flex-col justify-center items-center gap-20">
        <h4 className="text-3xl md:text-6xl lg:text-7xl font-bold text-green text-center space-x-20">
          {title}
        </h4>
        <div className="w-full flex flex-col justify-center items-center gap-4">
          {tags?.map((itm: string) => (
            <h3 className="text-xl md:text-3xl font-bold text-gray-500 text-center">
              {itm}
            </h3>
          ))}
        </div>
      </div>
      <Button onClick={() => navigate("/certificate/form")}>
        {buttonText}
      </Button>
    </section>
  );
};

export default HeroSection;
