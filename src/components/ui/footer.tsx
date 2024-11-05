const Footer = () => {
  return (
    <footer className="bg-primary w-full h-20 px-20 flex justify-start items-center gap-2">
      <div className="flex justify-center items-center gap-2 text-green font-bold text-xl">
        <span>&#169; </span>
        <span>{new Date().getFullYear()} |</span>
      </div>
      <span className="text-green font-bold text-xl">
        All Rights Reserved |
      </span>
      <span className="text-green font-bold text-xl">Medical Certificate</span>
    </footer>
  );
};

export default Footer;
