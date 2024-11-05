import HeroSection from "../components/landingpage/HeroSection";
import SickTypesSection from "../components/landingpage/SickTypesSection";
import Steps from "../components/landingpage/steps";
import TrustUs from "../components/landingpage/Trust";
import Button from "../components/ui/button";
import Footer from "../components/ui/footer";
import NavBar from "../components/ui/navbar";

const HeroTitle = "Get a Sick Leave Certificate Online";
const HeroButtonText = "Get  Sick Leave Certificate";
const HeroTagsLine = [
  "All types of Sick certificates",
  "By certified Doctors",
  "From the comfort of your home",
  "Get a soft copy within 30 minutes",
  "For adoption, joining work, college or sports",
  "Abiding by NMC Guidelines",
];

const SickCertificateLandingPage = () => {
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

      <SickTypesSection />

      <hr className="bg-gray-200 h-1 w-[90%]" />

      <section className="w-[80%] sm:w-[70%] md:w-[60%] flex flex-col justify-between items-center py-20 h-max gap-8">
        <h3 className="text-2xl sm:text-4xl md:text-6xl font-bold text-green text-center">
          Get a Medical Certificate <br />
          For Leave On Priority
        </h3>
        <p className="text-center text-black text-2xl break-words leading-10">
          Experiencing unexpected illness? Get a verified sick leave certificate
          quickly and conveniently from the comfort of your home. Consult with a
          registered doctor online and receive your medical certificate in
          minutes.
        </p>
        <Button>GET SICK LEAVE CERTIFICATE</Button>
      </section>

      <hr className="bg-gray-200 h-1 w-[90%]" />

      <section className="w-[80%] sm:w-[70%] md:w-[60%] flex flex-col justify-between items-center gap-8 py-20 h-max mt-[16px]">
        <h3 className="text-2xl sm:text-4xl md:text-6xl font-bold text-green text-center">
          When Do You Need A<br /> Sick Leave Certificate?
        </h3>
        <p className="text-center break-words text-black text-2xl leading-10">
          Feeling under the weather? Prioritize your health by staying home.
          Rest is essential for recovery, especially if you have a contagious
          illness. While taking sick leave can be stressful, especially when
          dealing with the hassle of doctor's appointments, there's a simpler
          solution. Consult a doctor online and get your medical sick leave
          certificate in minutes. Save time and energy, and focus on getting
          well.
        </p>
      </section>

      <Steps btnText={HeroButtonText} />

      <Footer />
    </section>
  );
};

export default SickCertificateLandingPage;
