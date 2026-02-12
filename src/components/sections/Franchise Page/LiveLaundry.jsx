import { RiArrowDownCircleFill, RiEye2Fill, RiEye2Line, RiShieldCheckFill } from "@remixicon/react";

const LiveLaundry = () => {
  return (
    <section className="py-10 p-5 md:p-24 bg-background overflow-hidden">
      <div className="w-full flex lg:items-stretch">
        <div className="grid lg:grid-cols-2 space-y-6 lg:space-y-0 lg:gap-24">
          {/* Content */}
          <div className="order-2 lg:order-1 h-full flex flex-col justify-between">
            <div className="w-full mt-6 lg:mt-0  ">
              <h1 className=' text-2xl leading-none  lg:text-6xl add_anim_txt_a  lg:whitespace-nowrap  '>The Live Laundry Studio</h1>
              <p className=' mt-2 lg:mt-4 text-sm leading-tight   lg:text-xl add_anim_txt_a '>              Transparency is our greatest marketing tool. The Live Laundry Studio reduces disputes and drives{' '}
                <span className="text-secondary font-semibold">3x higher trust</span> than traditional unorganized outlets.
              </p>
            </div>

            {/* Features */}
            <div className=" space-y-8 lg:space-y-12">

              {/* Complete Visibility */}
              <div className="flex items-start gap-4">
                <div className="size-12 shrink-0 bg-[#F2EDE4] rounded-lg center">
                  <img
                    className="w-[60%]"
                    src="https://cdn-icons-png.flaticon.com/512/9458/9458496.png"
                    alt="Visibility"
                  />
                </div>
                <div>
                  <h2 className=" text-lg lg:text-2xl leading-none mb-2">Complete Visibility</h2>
                  <p className="text-sm leading-tight lg:text-base">
                    Customers watch their garments being processed in real-time
                  </p>
                </div>
              </div>

              {/* Zero Disputes */}
              <div className="flex items-start gap-4">
                <div className="size-12 shrink-0 bg-[#F2EDE4] rounded-lg center">
                  <img
                    className="w-1/2"
                    src="https://cdn-icons-png.flaticon.com/512/2438/2438078.png"
                    alt="Zero Disputes"
                  />
                </div>
                <div>
                  <h2 className=" text-lg lg:text-2xl leading-none mb-2">Zero Dispute Resolution</h2>
                  <p className="text-sm leading-tight lg:text-base">
                    Radical transparency eliminates service complaints and mistrust
                  </p>
                </div>
              </div>

              {/* Higher Conversion */}
              <div className="flex items-start gap-4">
                <div className="size-12 shrink-0 bg-[#F2EDE4] rounded-lg center">
                  <img
                    className="w-1/2"
                    src="https://cdn-icons-png.flaticon.com/512/6797/6797554.png"
                    alt="Higher Conversion"
                  />
                </div>
                <div>
                  <h2 className=" text-lg lg:text-2xl leading-none mb-2">Higher Conversion Rates</h2>
                  <p className="text-sm leading-tight lg:text-base">
                    Walk-in customers convert at nearly 3× the industry average
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Visual */}
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
              <video loop muted playsInline autoPlay className="cover" src="/images/home/serv_reel.mp4"></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveLaundry;
