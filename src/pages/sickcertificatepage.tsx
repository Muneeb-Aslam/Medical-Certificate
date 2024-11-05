import NavBar from "../components/ui/navbar";
import SickCertificateForm from "../components/forms/sickcertificateform";
import Footer from "../components/ui/footer";

const SickCertificatePage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col font-poppins">
      <NavBar />
      <header className="py-12 w-full flex flex-col px-8 md:px-12">
        <h4 className="text-center text-3xl font-bold text-green">
          Get Your Medical Certificate Now
        </h4>
      </header>
      <section className="p-8 w-full flex flex-col gap-2 px-8 md:px-12">
        <h4 className="text-start text-3xl font-bold text-green">Notes</h4>
        <p className="text-lg font-normal break-words leading-8">
          Our working hours are from 09:00 am PST - 09:00 pm (Mon - Sat) | 10:00
          am - 8:00 pm (Sun). Any order placed before/ after working hours will
          be serviced in the next working slot. All cases are handled within 120
          minutes during working hours. Priority service orders are processed
          within 30 minutes during working hours.
        </p>
      </section>
      <section className="p-8 w-full flex flex-col gap-2 px-8 md:px-12">
        <h4 className="text-start text-3xl font-bold text-green">
          Terms and Conditions
        </h4>
      </section>
      <SickCertificateForm />
      <Footer />
    </div>
  );
};

export default SickCertificatePage;
