import React from "react";
import Image from "next/image";

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 z-[100] bg-brand-950 flex items-center justify-center overflow-hidden">
      <div className="relative flex items-center justify-center">
       
       
      
        <div className="animate-splash-zoom flex flex-col items-center gap-3 relative z-10">
       
          <div className=" p-6 shadow-lg">
            <Image
              src="/images/splash_logo.webp"
              alt="MAG Engineering Logo"
              width={160} 
              height={160}
              priority
              className="object-contain "
            />
          </div>

    
          {/* <div className="flex flex-col items-center">
            <span className="text-6xl font-display font-black tracking-tighter text-white uppercase italic leading-none">
              MAG
            </span>
            <span className="text-xl font-bold text-brand-accent uppercase tracking-[0.4em] leading-none mt-2">
              ENGINEERING
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
}
