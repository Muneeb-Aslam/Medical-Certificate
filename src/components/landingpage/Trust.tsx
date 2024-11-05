import authentic from "../../assets/icons/authenticity.png";
import secure from "../../assets/icons/protection.png";
import convenient from "../../assets/icons/international.png";

const TrustUs = () => {
  return (
    <section className="bg-offwhite w-full h-max flex flex-col justify-start items-center gap-20 pb-20">
      <h3 className="text-2xl sm:text-4xl md:text-6xl font-bold text-green text-center">
        Why Trust Us?
      </h3>
      <div className="flex justify-center items-center gap-28 flex-wrap">
        <div className="flex flex-col justify-center items-center gap-4">
          <img src={authentic} alt="icon" className="w-[60px] h-[60px]" />
          <h3 className="text-4xl font-bold text-green text-center">
            Authentic
          </h3>
          <p className="text-center text-black text-2xl break-words leading-10">
            From Registered Medical Practitioners only
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-4">
          <img src={secure} alt="icon" className="w-[60px] h-[60px]" />
          <h3 className="text-4xl font-bold text-green text-center">Secure</h3>
          <p className="text-center text-black text-2xl break-words leading-10">
            Your data is secure and encrypted
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-4">
          <img src={convenient} alt="icon" className="w-[60px] h-[60px]" />
          <h3 className="text-4xl font-bold text-green text-center">
            Convenient
          </h3>
          <p className="text-center text-black text-2xl break-words leading-10">
            Manage your health when it suits you, from anywhere
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustUs;
