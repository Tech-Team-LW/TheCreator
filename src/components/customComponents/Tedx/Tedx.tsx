import React from 'react';

const Tedx = () => {
  return (
    <div className="relative w-full h-[400px] bg-purple-900 flex items-center justify-center">
      {/* Main circle with gradient border */}
      <div className="relative w-80 h-80 rounded-full bg-emerald-500 overflow-hidden">
        {/* Image inside circle */}
        <div className="absolute inset-0">
          <img 
            src="https://cdn.prod.website-files.com/6290bdb841b2b5659918418c/642f453956a194dca9a63d8d_123-p-800.png" 
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Purple semi-transparent card */}
      <div className="absolute top-1/4 left-10 max-w-xs">
        <div className="bg-purple-900/80 backdrop-blur-sm rounded-lg p-4 text-white shadow-lg">
          <p className="text-sm">
            At CROJungle, we combine human expertise with cutting-edge technology to create designs that drive real results.
          </p>
        </div>
      </div>

      {/* Badge */}
      <div className="absolute bottom-24 right-10">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full px-6 py-2 text-white shadow-lg">
          <p className="text-lg font-semibold">the CE-YOOO!</p>
        </div>
      </div>

      {/* Name */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <h2 className="text-2xl font-bold text-white">
          Muhammad <span className="text-purple-300">Junaid</span>
        </h2>
      </div>
    </div>
  );
};

export default Tedx;