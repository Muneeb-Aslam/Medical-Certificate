import NavBar from "../components/ui/navbar";
import Footer from "../components/ui/footer";
import LoginForm from "../components/forms/loginform";

const Login = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between items-center font-poppins">
      <NavBar />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default Login;
