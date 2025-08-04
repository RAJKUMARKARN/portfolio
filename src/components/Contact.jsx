import React from 'react';

const Contact = () => {
  return (
    <div id="contact"
      className="bg-cover bg-center rounded-xl min-h-[520px] shadow-xl flex flex-col items-center justify-center text-center w-full px-4 md:px-10
        bg-[url('/moon.png')] sm:bg-[url('/contact.png')]"
    >
      <p className="text-[18px] md:text-[20px] font-medium bg-gradient-to-r from-[#C0C0C0] to-[#5A5A5A] bg-clip-text text-transparent">
        Have an idea?
      </p>
      <h1 className="text-[32px] md:text-[40px] font-medium bg-gradient-to-r from-[#C0C0C0] to-[#5A5A5A] bg-clip-text text-transparent">
        Let's talk about it
      </h1>

      <div className="mt-4">
        <a
          href="mailto:rajkumarkarn002@gmail.com"
          className="group relative inline-flex items-center bg-[#1E1E1E] text-[#989898] font-semibold rounded-lg shadow-md px-6 py-2 transition-all duration-300 ease-in-out whitespace-nowrap
            hover:bg-[#9C28DF] focus:bg-[#9C28DF] active:bg-[#9C28DF]"
        >
          <span className="transition-all duration-300 
            group-hover:text-white group-focus:text-white group-active:text-white">
            Contact Us
          </span>

          <span className="flex items-center ml-1 overflow-hidden transition-all duration-300 
            w-0 group-hover:w-6 group-focus:w-6 group-active:w-6">
            <img
              src="/arrow2.png"
              alt=""
              className="w-5 h-5 transform translate-x-2 opacity-0 transition-all duration-300 
                group-hover:translate-x-0 group-hover:opacity-100
                group-focus:translate-x-0 group-focus:opacity-100
                group-active:translate-x-0 group-active:opacity-100"
            />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
