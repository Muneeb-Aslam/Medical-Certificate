import NavBar from "../components/ui/navbar";
import Footer from "../components/ui/footer";
import VerifyForm from "../components/forms/verifyform";

const Verify = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between items-center font-poppins">
      <NavBar />
      <VerifyForm />
      <Footer />
    </div>
  );
};

export default Verify;
