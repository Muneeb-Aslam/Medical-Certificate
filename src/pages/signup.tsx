import NavBar from "../components/ui/navbar";
import Footer from "../components/ui/footer";
import SignUpForm from "../components/forms/registerform";

const SignUp = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between items-center font-poppins">
      <NavBar />
      <SignUpForm />
      <Footer />
    </div>
  );
};

export default SignUp;
