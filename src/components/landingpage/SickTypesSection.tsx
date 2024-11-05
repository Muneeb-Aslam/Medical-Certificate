import gym from "../../assets/icons/gym.png";
import sick from "../../assets/icons/sick.png";
import college from "../../assets/icons/college.png";
import Button from "../ui/button";

const SickTypesSection = () => {
  return (
    <section className="bg-white w-full h-max flex flex-col justify-start items-center gap-20 py-32">
      <h3 className="text-2xl sm:text-4xl md:text-6xl font-bold text-green text-center">
        Types of Sick Leave Certificates we Offer
      </h3>
      <div className="flex justify-center items-center gap-28 flex-wrap">
        <div className="flex flex-col justify-center items-center gap-4">
          <img src={gym} alt="icon" className="w-[80px] h-[80px]" />
          <h3 className="text-xl font-bold text-green text-center">
            Gym & Health Club Membership Cancellation
          </h3>
        </div>

        <div className="flex flex-col justify-center items-center gap-4">
          <img src={sick} alt="icon" className="w-[80px] h-[80px]" />
          <h3 className="text-xl font-bold text-green text-center">
            Work Sickness Certificate
          </h3>
        </div>

        <div className="flex flex-col justify-center items-center gap-4">
          <img src={college} alt="icon" className="w-[80px] h-[80px]" />
          <h3 className="text-xl font-bold text-green text-center">
            University/College/School Sickness Letter
          </h3>
        </div>
      </div>
      <Button>GET SICK LEAVE CERTIFICATE</Button>
    </section>
  );
};

export default SickTypesSection;
