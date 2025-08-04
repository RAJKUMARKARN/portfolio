const Footer2 = () => {
  return (
    <div className="w-full min-h-[100px] bg-[#0B0B0B] text-white flex flex-wrap items-center justify-between px-4 sm:px-8 md:px-20 py-4">
      {/* Logo & Name */}
      <div className="flex items-center space-x-[15px]">
        <img className="h-[33px] w-[33px]" src="logo.png" alt="Logo" />
        <div>
          <h4 className="text-[16px] font-bold text-[#C7C7C7] font-Worksans">
            Raj Kumar Karn
          </h4>
          <p className="text-[#474747] text-[11px] font-semibold">
            Frontend / UI / UX Developer
          </p>
        </div>
      </div>

      {/* Message */}
      <div className="mt-4 md:mt-0">
        <h1 className="text-[16px] text-[#C7C7C7] font-medium font-Worksans">
          Made with Love ❤️
        </h1>
      </div>
    </div>
  );
};

export default Footer2;
