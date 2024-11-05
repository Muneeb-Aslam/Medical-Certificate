import fly from "../../assets/icons/fly.png";
import cruise from "../../assets/icons/cruise.png";
import medical from "../../assets/icons/medical.png";
import Button from "../ui/button";

const FitnessTypesSection = () => {
  return (
    <section className="bg-white w-full h-max flex flex-col justify-start items-center gap-20 py-32">
      <h3 className="text-2xl sm:text-4xl md:text-6xl font-bold text-green text-center">
        Types of Fitness Certificates we Offer
      </h3>
      <div className="flex justify-center items-center gap-28 flex-wrap">
        <div className="flex flex-col justify-center items-center gap-4">
          <img src={fly} alt="icon" className="w-[80px] h-[80px]" />
          <h3 className="text-xl font-bold text-green text-center">
            Fit to Fly for Expecting Mothers
          </h3>
        </div>

        <div className="flex flex-col justify-center items-center gap-4">
          <img src={cruise} alt="icon" className="w-[80px] h-[80px]" />
          <h3 className="text-xl font-bold text-green text-center">
            Fit to Cruise Medical Certificate
          </h3>
        </div>

        <div className="flex flex-col justify-center items-center gap-4">
          <img src={medical} alt="icon" className="w-[80px] h-[80px]" />
          <h3 className="text-xl font-bold text-green text-center">
            Sports Medical Fitness Certificate
          </h3>
        </div>
      </div>
      <Button>GET FITNESS CERTIFICATE</Button>
    </section>
  );
};

export default FitnessTypesSection;
