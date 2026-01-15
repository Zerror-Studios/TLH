import React from "react";

const LiveLaundry = () => {
  return (
    <div className="px-24 py-12">
      <section className="relative w-full rounded-lg h-[90vh] overflow-hidden">
        {/* Video */}
        {/* <video
        src="/videos/live-laundry.mp4" // replace with your video path
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      /> */}

        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/Hero swiper/pic_3.webp"
          alt=""
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-end p-6 md:p-12 lg:p-24">
          <div className="max-w-3xl flex flex-col gap-6">
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              The Live Laundry Studio
            </h2>

            <p className="text-white text-base md:text-lg leading-relaxed">
              Transparency is our greatest marketing tool. The Live Laundry
              Studio creates a clean, professional, tech-led environment
              customers can see in real time—reducing disputes and driving 3×
              higher trust than traditional unorganized outlets.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LiveLaundry;
