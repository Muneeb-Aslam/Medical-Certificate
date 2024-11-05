import { useNavigate } from "react-router-dom";
import Button from "../ui/button";

interface props {
  btnText: string;
}

const Steps: React.FC<props> = ({ btnText }) => {
  const navigate = useNavigate();
  return (
    <section className="bg-offwhite w-full h-max flex flex-col justify-start items-center gap-12 py-32 px-20">
      <h3 className="text-2xl sm:text-4xl md:text-6xl font-bold text-green text-center">
        Get Your Medical Leave Certificate <br />
        with 3 Easy Steps!
      </h3>
      <div className="w-full flex justify-center items-center gap-28 flex-wrap">
        <div className="w-[600px] bg-white flex flex-col justify-start items-start gap-4 shadow-2xl px-8 py-12 h-max rounded-2xl">
          <h3 className="text-3xl font-bold text-green">
            Step 1 : Submit your request
          </h3>
          <p className=" text-black text-xl break-words leading-10">
            Complete our quick medical questionnaire and submit your request for
            the medical certificate.
          </p>
        </div>

        <div className="w-[600px] bg-white flex flex-col justify-start items-start gap-4 shadow-2xl px-8 py-12 h-max rounded-2xl">
          <h3 className="text-3xl font-bold text-green">
            Step 2: Consultation by a certified doctor
          </h3>
          <p className=" text-black text-xl break-words leading-10">
            Our doctor will review your request and reach out to you.
          </p>
        </div>
      </div>

      <div className=" bg-white rounded-2xl w-[400px] sm:w-[550px] md:w-[600px] flex flex-col justify-start items-start gap-4 shadow-2xl px-8 py-12 h-max">
        <h3 className="text-3xl font-bold text-green">
          Step 3 : Receive your certificate
        </h3>
        <p className=" text-black text-xl break-words leading-10">
          Get your medical certificate via WhatsApp within 30 minutes* and the
          physical copy via post within 8-10 business days. if you have opted
          for it.
        </p>
      </div>
      <Button onClick={() => navigate("/certificate/form")}>{btnText}</Button>
    </section>
  );
};

export default Steps;
