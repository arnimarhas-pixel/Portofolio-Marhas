import React from 'react';

const RippleDot = ({ color = 'bg-blue-500', size = 'h-3 w-3', rippleCount = 5 }) => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Efek Riak Gelombang (Ripples) */}
      {[...Array(rippleCount)].map((_, index) => (
        <span
          key={index}
          className={`absolute inline-flex h-full w-full rounded-full ${color} opacity-75 animate-ping`}
          style={{
            animationDelay: `${index * 0.9}s`,
            animationDuration: '1.5s',
          }}
        />
      ))}

      {/* Titik Inti di Tengah (Core Dot) */}
      <span className={`relative inline-flex rounded-full ${size} ${color}`}></span>
    </div>
  );
};

export default RippleDot;