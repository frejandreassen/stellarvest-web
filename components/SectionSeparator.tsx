import React from 'react';

const SectionSeparator = () => {
  return (
    <div className="relative w-full my-8">
      {/* Background Image Container */}
      <div className="w-full h-48 overflow-hidden rounded-lg shadow-lg">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/fundo Stellar.jpg')`,
          }}
        >
        </div>
      </div>
    </div>
  );
};

export default SectionSeparator;