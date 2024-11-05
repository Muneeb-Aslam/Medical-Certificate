import { useNavigate } from "react-router-dom";
import HeroSection from "../components/landingpage/HeroSection";
import Steps from "../components/landingpage/steps";
import TrustUs from "../components/landingpage/Trust";
import Button from "../components/ui/button";
import NavBar from "../components/ui/navbar";
import Footer from "../components/ui/footer";

const HeroTitle = "Get a Medical Certificate Online in minutes";
const HeroButtonText = "Get Medical Certificate";
const HeroTagsLine = [
  "Sick Certificate, Fitness Certificate, Recovery Certificate",
  "Accepted by airlines, banks, public offices, colleges & IT companies",
  "Handwritten certificate & shipping options available",
  "Get a soft copy within 30 minutes*",
  "Abiding by NMC & WHO Guidelines",
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <NavBar />

      <hr className="bg-white h-1 w-full" />

      <HeroSection
        title={HeroTitle}
        buttonText={HeroButtonText}
        tags={HeroTagsLine}
      />

      <TrustUs />

      <section className="bg-white w-full h-max flex flex-col justify-start items-center gap-20 py-32 px-12">
        <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold text-green text-center">
          Online Medical Certificates that work for you
        </h3>
        <div className="w-full flex justify-center items-center flex-wrap gap-12">
          <div className="w-[500px] flex flex-col justify-center items-center gap-4">
            {/* <img src={gym} alt="icon" className="w-[80px] h-[80px]" /> */}
            <h3 className="text-3xl font-bold text-green text-center">
              Sick Leave Medical Certificate
            </h3>
            <p className=" text-black text-xl break-words leading-10 text-center">
              When you're not feeling well, the prospect of booking and
              attending a doctor's appointment at a hospital or clinic can be
              daunting. Instead, obtain a sick leave certificate online from the
              comfort of your own home in just a few minutes.
            </p>
            <Button onClick={() => navigate("/certificate/form")}>
              GET SICK LEAVE CERTIFICATE
            </Button>
          </div>

          <div className="w-[500px]  flex flex-col justify-center items-center gap-4">
            {/* <img src={sick} alt="icon" className="w-[80px] h-[80px]" /> */}
            <h3 className="text-3xl font-bold text-green text-center">
              Medical Fitness Certificate
            </h3>
            <p className=" text-black text-xl break-words leading-10 text-center">
              Require a fitness certificate to confirm your good health for your
              office, college or sports? Apply for an online fitness
              certificate, share some basic information, and receive your
              medical fitness certificate quickly and conveniently.
            </p>
            <Button onClick={() => navigate("/certificate/form")}>
              GET FITNESS CERTIFICATE
            </Button>
          </div>
        </div>
      </section>

      <Steps btnText={HeroButtonText} />

      <Footer />
    </section>
  );
};

export default Home;
