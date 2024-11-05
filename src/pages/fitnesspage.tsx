import FitnessTypesSection from "../components/landingpage/FitnessTypes";
import HeroSection from "../components/landingpage/HeroSection";
import Steps from "../components/landingpage/steps";
import TrustUs from "../components/landingpage/Trust";
import Button from "../components/ui/button";
import Footer from "../components/ui/footer";
import NavBar from "../components/ui/navbar";

const HeroTitle = "Get a Medical Fitness Certificate Online";
const HeroButtonText = "Get Fitness Certificate";
const HeroTagsLine = [
  "All types of fitness certificates",
  "By certified Doctors",
  "From the comfort of your home",
  "Get a soft copy within 30 minutes",
  "For adoption, joining work, college or sports",
  "Abiding by NMC Guidelines",
];

const FitnessCertificateLandingPage = () => {
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

      <hr className="bg-gray-300 h-1 w-full" />

      <FitnessTypesSection />

      <hr className="bg-gray-200 h-1 w-[90%]" />

      <section className="w-[80%] sm:w-[70%] md:w-[60%] flex flex-col justify-between items-center py-20 h-max gap-8">
        <h3 className="text-2xl sm:text-4xl md:text-6xl font-bold text-green text-center">
          Guide to Getting a Fitness Medical Certificate
        </h3>
        <p className="text-center text-black text-xl md:text-2xl break-words leading-10">
          Are you looking for a fitness medical certificate online? Getting a
          fitness certificate doesn't have to be a tedious task and can easily
          be done from the comfort of your home. If there is no specific format
          that is outlined by your organization go ahead and fill up your form
          for a medical fitness certificate. If you have a custom format, get in
          touch with us on Whatsapp or Email and share the format. Our team will
          be happy to have a look at it and suggest the necessary tests or
          details needed to help you fill-up the form and get your medical
          fitness certificate online.
        </p>
        <Button>GET FITNESS CERTIFICATE</Button>
      </section>

      <hr className="bg-gray-200 h-1 w-[90%]" />

      <Steps btnText={HeroButtonText} />

      <Footer />
    </section>
  );
};

export default FitnessCertificateLandingPage;
