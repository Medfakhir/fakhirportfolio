// components/AnimatedBackground.js
"use client";

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0">
      {/* Main glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#ADFF00] to-yellow-400 rounded-full opacity-10 blur-3xl animate-pulse-slow" />

      {/* Floating elements */}
      <div className="absolute">
        {/* Top left floating orb */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#ADFF00] rounded-full opacity-5 blur-xl animate-float" />
        
        {/* Bottom right floating orb */}
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-[#ADFF00] rounded-full opacity-5 blur-xl animate-float-delayed" />
        
        {/* Middle floating orb */}
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#ADFF00] rounded-full opacity-5 blur-lg animate-float-slow" />
      </div>

      {/* Animated lines */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 w-full h-px bg-gradient-to-r from-transparent via-[#ADFF00] to-transparent opacity-20 animate-scanline" />
        <div className="absolute top-2/4 w-full h-px bg-gradient-to-r from-transparent via-[#ADFF00] to-transparent opacity-20 animate-scanline-delayed" />
        <div className="absolute top-3/4 w-full h-px bg-gradient-to-r from-transparent via-[#ADFF00] to-transparent opacity-20 animate-scanline-slow" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ADFF00]/5 via-transparent to-[#ADFF00]/5 animate-gradient-x" />

      {/* Spotlight effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#ADFF00] opacity-5 blur-[100px] rounded-full animate-pulse-slow" />
    </div>
  );
};

export default AnimatedBackground;