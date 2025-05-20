import React from 'react'

const AuthImagePattern = ({title,subtitle}) => {
  return (
    <div className="hidden lg:flex flex-col items-center justify-center bg-base-200 p-12">
  <div className="relative w-80 h-80 mb-8">
    {[...Array(15)].map((_, i) => {
      const angle = i * 24;
      const distance = 10 + i * 15;

      return (
        <div
          key={i}
          className="absolute w-4 h-4 rounded-full bg-primary/30 animate-spin-slower"
          style={{
            top: '50%',
            left: '50%',
            transform: `rotate(${angle}deg) translate(${distance}px)`,
            transformOrigin: 'center',
            animationDelay: `${i * 0.1}s`,
          }}
        ></div>
      );
    })}

    {/* Center ball with jump animation */}
    <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-primary rounded-full shadow-lg -translate-x-1/2 -translate-y-1/2 z-10 animate-jump" />
  </div>

  <div className="text-center max-w-md">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <p className="text-base-content/60">{subtitle}</p>
  </div>
</div>


  )
}

export default AuthImagePattern