const Footer = () => {
  return (
    <footer className="bg-primary w-full h-max min-h-20 px-8 sm:px-12 flex flex-col sm:flex-row justify-start items-start sm:items-center gap-2 py-6">
      <div className="flex justify-center items-center gap-2 text-green font-bold text-xl">
        <span>&#169; </span>
        <span className="flex gap-2">
          {new Date().getFullYear()} <span className="hidden sm:block">|</span>
        </span>
      </div>
      <span className="text-green font-bold text-xl flex gap-2">
        All Rights Reserved <span className="hidden sm:block">|</span>
      </span>
      <span className="text-green font-bold text-xl">Medical Certificate</span>
    </footer>
  );
};

export default Footer;
