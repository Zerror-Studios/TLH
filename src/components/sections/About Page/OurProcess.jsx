import React from "react";
import ServiceBtn from "@/components/Buttons/ServiceBtn";
import { useBookDrawer } from "@/store/useBookDrawer";

const OurProcess = () => {
  const openDrawer = useBookDrawer((state) => state.openDrawer);

  return (
    <section className="w-full px-5 lg:px-24 pt-12 max-sm:pb-12 lg:pt-20">
      <div className="mx-auto flex flex-col gap-14 lg:gap-28">

        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 lg:gap-14">
          {/* Image */}
          <div className="w-full h-[45vh] lg:h-[60vh] overflow-hidden rounded-lg">
            <img
              src="/images/about page/img_1.webp"
              alt="Doorstep pickup and delivery"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-4 lg:gap-6">
            <h3 className="text-2xl lg:text-6xl font-medium">
             Safe for Your Body's Largest Organ
            </h3>

            <p className="text-sm lg:text-base leading-tight w-full  lg:w-[85%]">
              At The Laundry House, we prioritise your health and safety by using only premium, skin-friendly European detergents that meet strict regulatory standards. Unregulated detergents containing harmful endocrine disruptors can cause skin irritation and are linked to serious health concerns such as cancer, PCOS, fertility issues, and hormonal imbalances.</p>

            <p className="text-sm lg:text-base leading-tight w-full  lg:w-[85%]">
              By choosing our services, you reduce these risks and ensure your garments are cleaned with superior, safe products. Every wash reflects our commitment to wellness and promoting a healthier lifestyle through responsible garment care.</p>

            <a href="https://wa.me/918800020002" target='_blank'>
              <div className="lg:w-[30%] mt-3 lg:mt-10">
                <ServiceBtn />
              </div>
            </a>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 lg:gap-14">
          {/* Content */}
          <div className="flex flex-col gap-4 lg:gap-6 order-2 lg:order-1">
            <h3 className="text-2xl lg:text-6xl font-medium">
             Where Technology, Skill & Service Merge
            </h3>

            <p className="text-sm lg:text-base leading-tight w-full  lg:w-[85%]">
              Our state-of-the-art technology, eco-friendly processes, and highly trained professionals ensure that each piece of clothing is treated with the utmost care and attention.</p>

            <p className="text-sm lg:text-base leading-tight w-full  lg:w-[85%]">
              From delicate silks to sturdy denims, we know how to handle them all. Stubborn stains, intricate embroideries, delicate fabrics - nothing is too challenging for us. And our master cleaners are trained to ensure that no speck of dirt misses their eye.</p>

            <a href="https://wa.me/918800020002" target='_blank'>
              <div className="lg:w-[30%] mt-3 lg:mt-10">
                <ServiceBtn />
              </div>
            </a>
          </div>

          {/* Image */}
          <div className="w-full h-[45vh] lg:h-[60vh] overflow-hidden rounded-lg order-1 lg:order-2">
            <img
              src="/images/about page/img_2.webp"
              alt="Specialist stain removal process"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurProcess;
